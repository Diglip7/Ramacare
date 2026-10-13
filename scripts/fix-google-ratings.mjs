// One-time cleanup: make every rating and review count on the website come from
// src/data/clinicStats.js (the real Google figures), and remove unverified
// patient-count claims. Run from the project root:
//   node scripts/fix-google-ratings.mjs --dry-run   (report only, changes nothing)
//   node scripts/fix-google-ratings.mjs             (apply changes)
import fs from 'fs';
import path from 'path';

const ROOT = process.cwd();
const DRY = process.argv.includes('--dry-run');
const STATS = path.join(ROOT, 'src/data/clinicStats.js');
const R = '${GOOGLE_RATING_FALLBACK.rating.toFixed(1)}';
const C = '${GOOGLE_RATING_FALLBACK.count}';

if (!fs.existsSync(STATS)) {
  console.error('Missing src/data/clinicStats.js. Create it first (physiotherapy hub document, Step 1).');
  process.exit(1);
}

function walk(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name);
    if (name === 'node_modules' || name.startsWith('.')) continue;
    const st = fs.statSync(p);
    if (st.isDirectory()) walk(p, out);
    else if (/\.(js|jsx|mjs)$/.test(name)) out.push(p);
  }
  return out;
}

const files = [...walk(path.join(ROOT, 'src')), ...walk(path.join(ROOT, 'components'))]
  .filter((f) => path.resolve(f) !== path.resolve(STATS));

const report = { changed: [], manual: [] };

for (const file of files) {
  const before = fs.readFileSync(file, 'utf8');
  let s = before;
  const isDoctors = file.endsWith(path.join('src', 'data', 'doctors.js'));

  // 1. Stat cards "N+ Patients / Treated" -> real Google rating + review count
  s = s.replace(/title: '[\d,]+\+ Patients',(\s*)description: '[^'\n]*'/g,
    'title: `' + R + '/5 Google Rating`,$1description: `' + C + ' reviews`');

  // 2. Stat cards "4.x/5 Rating / Patient Reviews"
  s = s.replace(/title: '[45]\.\d\/5 Rating',(\s*)description: 'Patient Reviews'/g,
    'title: `' + R + '/5 Google Rating`,$1description: `' + C + ' reviews`');

  // 3. Doctor "patientsTreated" claims (unverified) -> empty
  s = s.replace(/patientsTreated: '[^'\n]*\d[\d,]*\+ patients\.?'/g, "patientsTreated: ''");

  // 4. Stand-alone review-count strings, e.g. '200+ Verified Reviews', '200+ reviews on Google'
  s = s.replace(/(['"])\d[\d,]*\+? (?:Verified |Patient |Google )?[Rr]eviews(?: on Google)?\1/g,
    '`' + C + ' Google reviews`');

  // 5. Any quoted string containing a 4.x/5 rating -> live value (+ review count inside it)
  s = s.replace(/(\w=)?(['"])([^'"`\n]*?)\b[45]\.\d\/5([^'"`\n]*?)\2/g, (m, attr, q, pre, post) => {
    if (pre.includes('${') || post.includes('${')) return m;
    let tail = post.replace(/\(?\d[\d,]*\+ (?:Verified |Patient |Google )?[Rr]eviews\)?/g, '(' + C + ' Google reviews)');
    const tpl = '`' + pre + R + '/5' + tail + '`';
    return attr ? attr + '{' + tpl + '}' : tpl;
  });

  // 6. doctors.js: no individual star ratings (there is no Google source for them)
  if (isDoctors) s = s.replace(/^(\s*)rating: [\d.]+,/gm, '$1rating: null,');

  // 7. Unverified patient-count claims inside experience lines and text
  s = s.replace(/ [·|] [\d,]+\+ Patients Treated/g, '');
  s = s.replace(/, [\d,]+\+ Patients Treated\./g, '.');
  s = s.replace(/ and the successful treatment of [\d,]+\+ patients/g, '');

  // 8. Ratings typed directly into JSX text
  s = s.replace(/>[45]\.\d\/5 \(\d[\d,]*\+ Reviews\)</g,
    '>{GOOGLE_RATING_FALLBACK.rating.toFixed(1)}/5 ({GOOGLE_RATING_FALLBACK.count} Google reviews)<');
  s = s.replace(/>[45]\.\d\/5<\/div>/g, '>{GOOGLE_RATING_FALLBACK.rating.toFixed(1)}/5</div>');

  // 9. Doctor cards: no default stars, hide the star row when a doctor has no rating
  if (/(DoctorsSection|ExpertsSection)\.jsx$/.test(file)) {
    s = s.replace('let ratingNum = 4.8;', 'let ratingNum = null;');
    s = s.replace('const ratingLabel = ratingNum.toFixed(1);', 'const ratingLabel = ratingNum ? ratingNum.toFixed(1) : null;');
    if (!s.includes('{doctor.rating ? (')) {
      s = s.replace(/^(\s*)(<div className="flex items-center gap-1\.5 mb-3">\s*\{renderStars\(doctor\.rating, 'w-4 h-4'\)\}\s*<span[^>]*>\{doctor\.ratingLabel\}<\/span>\s*<\/div>)/gm,
        (m, ind, block) => `${ind}{doctor.rating ? (\n${ind}  ${block.replace(/\n/g, '\n  ')}\n${ind}) : null}`);
    }
  }

  // 10. Doctor profile pages: remove invented review markup, show the clinic's Google rating
  if (/doctors[\\/]\[id\]\.jsx$/.test(file)) {
    s = s.replace(/,\s*"aggregateRating": \{[\s\S]*?"worstRating": "1"\s*\}/, '');
    s = s.replace('font-bold">Rating</p>', 'font-bold">Clinic Google Rating</p>');
    s = s.replace('{currentDoctor.rating} ★★★★★', '{GOOGLE_RATING_FALLBACK.rating.toFixed(1)} ★ ({GOOGLE_RATING_FALLBACK.count})');
  }

  // Report what still needs a human decision
  const lines = s.split('\n');
  lines.forEach((line, i) => {
    if (/\d[\d,]*\+ ?(Happy )?([Pp]atients|[Rr]eviews|Patients Treated)/.test(line) ||
        /(?<![\d.])[45]\.\d\/5(?![\d])/.test(line.replace(/\$\{GOOGLE_RATING_FALLBACK[^}]*\}\/5/g, ''))) {
      report.manual.push(`${path.relative(ROOT, file)}:${i + 1}: ${line.trim().slice(0, 120)}`);
    }
  });

  if (s !== before) {
    if (s.includes('GOOGLE_RATING_FALLBACK') && !/import\s*\{[^}]*GOOGLE_RATING_FALLBACK/.test(s)) {
      let rel = path.relative(path.dirname(file), STATS).replace(/\\/g, '/').replace(/\.js$/, '');
      if (!rel.startsWith('.')) rel = './' + rel;
      const imp = `import { GOOGLE_RATING_FALLBACK } from '${rel}';\n`;
      const importLines = [...s.matchAll(/^import[\s\S]*?from\s+['"][^'"]+['"];?[ \t]*$/gm)];
      if (importLines.length) {
        const last = importLines[importLines.length - 1];
        const at = last.index + last[0].length + 1;
        s = s.slice(0, at) + imp + s.slice(at);
      } else {
        s = imp + s;
      }
    }
    report.changed.push(path.relative(ROOT, file));
    if (!DRY) fs.writeFileSync(file, s);
  }
}

console.log(`\n${DRY ? '[DRY RUN] would change' : 'Changed'} ${report.changed.length} files:`);
report.changed.forEach((f) => console.log('  ' + f));
console.log(`\nStill to fix by hand (${report.manual.length} lines):`);
report.manual.forEach((l) => console.log('  ' + l));
console.log('\nNext: run `npm run build`.');
