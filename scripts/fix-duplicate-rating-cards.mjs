// One-time fix: some booking boxes show the Google rating card twice
// (left over from the rating clean-up). This keeps one rating card and
// turns the duplicate into an "Open Daily 10am - 10pm" card.
// Run from the project root: node scripts/fix-duplicate-rating-cards.mjs
import fs from 'fs';

const FILE = 'src/data/subSubcategoryContent.js';
const s = fs.readFileSync(FILE, 'utf8');
const pattern = /({\s*title:\s*`\$\{GOOGLE_RATING_FALLBACK\.rating\.toFixed\(1\)\}\/5 Google Rating`,\s*description:\s*`\$\{GOOGLE_RATING_FALLBACK\.count\}\s*reviews`\s*},?\s*){\s*title:\s*`\$\{GOOGLE_RATING_FALLBACK\.rating\.toFixed\(1\)\}\/5 Google Rating`,\s*description:\s*`\$\{GOOGLE_RATING_FALLBACK\.count\}\s*reviews`\s*}/g;
let count = 0;
const out = s.replace(pattern, (m, first) => { count++; return first + "{ title: 'Open Daily', description: '10am - 10pm' }"; });
fs.writeFileSync(FILE, out);
console.log(`Fixed ${count} duplicate rating card pair(s) in ${FILE}.`);
