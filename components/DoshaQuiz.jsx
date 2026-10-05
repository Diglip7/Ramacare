import { useState } from 'react';

// Find-your-dosha quiz. Questions render in the server HTML (good for SEO);
// scoring runs in the browser. Not a diagnosis — it leads to the in-person assessment.
const QUESTIONS = [
  { q: 'My body frame is…', v: 'Slim and light; I find it hard to gain weight', p: 'Medium and muscular', k: 'Broad and solid; I gain weight easily' },
  { q: 'My skin is usually…', v: 'Dry, rough or cool', p: 'Warm, sensitive, prone to redness or rashes', k: 'Smooth, oily and cool' },
  { q: 'My hair is…', v: 'Dry, frizzy or thin', p: 'Fine, with early greying or thinning', k: 'Thick, wavy and oily' },
  { q: 'My appetite is…', v: 'Irregular; I sometimes forget to eat', p: 'Strong; I get irritable if a meal is late', k: 'Steady; I can skip meals easily' },
  { q: 'My digestion tends toward…', v: 'Gas, bloating or constipation', p: 'Acidity, heartburn or loose stools', k: 'Slow, heavy feeling after meals' },
  { q: 'I sleep…', v: 'Lightly, and wake easily', p: 'Moderately; I may wake up feeling hot', k: 'Deeply and long; it is hard to wake up' },
  { q: 'The weather I like least is…', v: 'Cold, windy and dry', p: 'Hot — Dubai summers are hard for me', k: 'Cold and damp' },
  { q: 'My energy comes…', v: 'In bursts, then I tire quickly', p: 'Focused and driven', k: 'Steady, but slow to get started' },
  { q: 'Under stress I become…', v: 'Anxious and worried', p: 'Irritable and impatient', k: 'Withdrawn and sluggish' },
  { q: 'I speak…', v: 'Quickly, and I talk a lot', p: 'Sharply and precisely', k: 'Slowly and calmly' },
  { q: 'My memory…', v: 'Learns fast, forgets fast', p: 'Is sharp and focused', k: 'Learns slowly, remembers for a long time' },
  { q: 'My body temperature…', v: 'I rarely sweat; hands and feet feel cold', p: 'I sweat easily and feel warm', k: 'Moderate and steady' }
];

const DOSHAS = {
  v: {
    name: 'Vata',
    elements: 'air and space',
    text: 'Vata governs movement: breathing, circulation and the nervous system. When balanced it brings creativity and energy; when aggravated it can show as dryness, bloating, poor sleep and worry. Air-conditioning, travel and irregular routines can aggravate Vata.',
    tips: ['Keep regular meal and sleep times', 'Favour warm, cooked, lightly oiled food', 'Stay warm in air-conditioned spaces', 'Oil massage (Abhyanga) is traditionally used to calm Vata']
  },
  p: {
    name: 'Pitta',
    elements: 'fire and water',
    text: 'Pitta governs digestion and metabolism. When balanced it brings focus and a strong appetite; when aggravated it can show as acidity, skin redness, irritability and early greying. Dubai heat is a common Pitta trigger.',
    tips: ['Avoid the midday heat and very spicy food', 'Do not skip meals', 'Favour cooling foods such as cucumber and coconut water', 'Shirodhara is traditionally used to calm Pitta and stress']
  },
  k: {
    name: 'Kapha',
    elements: 'earth and water',
    text: 'Kapha governs structure and stability. When balanced it brings calm and endurance; when aggravated it can show as heaviness, slow digestion, congestion and weight gain.',
    tips: ['Stay active every day', 'Favour lighter, warm meals and fewer sweets', 'Avoid long daytime naps', 'Udwarthanam (herbal powder massage) is traditionally used for Kapha']
  }
};

export default function DoshaQuiz() {
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);
  const answered = Object.keys(answers).length;

  const score = () => {
    const t = { v: 0, p: 0, k: 0 };
    Object.values(answers).forEach((d) => { t[d] += 1; });
    const sorted = Object.entries(t).sort((a, b) => b[1] - a[1]);
    const top = [sorted[0][0]];
    if (sorted[0][1] - sorted[1][1] <= 1) top.push(sorted[1][0]); // dual dosha
    setResult({ totals: t, top });
    try {
      if (typeof window !== 'undefined' && window.dataLayer) {
        window.dataLayer.push({ event: 'dosha_quiz_complete', dosha_result: top.map((d) => DOSHAS[d].name).join('-') });
      }
    } catch (e) {}
    if (typeof document !== 'undefined') {
      const el = document.getElementById('dosha-quiz-result');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="dosha-quiz" className="py-12 md:py-16 bg-[#FAF9F6]">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-[#1F2937] mb-3">Dosha Test: What Is My Dosha?</h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Answer 12 quick questions about how you usually are, not how you feel today. This Ayurvedic body type test gives a first idea of your
          dosha (Vata, Pitta or Kapha). It is not a diagnosis: your Prakriti is confirmed at an in-person
          assessment with our BAMS doctor.
        </p>

        <ol className="space-y-5">
          {QUESTIONS.map((item, i) => (
            <li key={i}>
              <fieldset className="bg-white rounded-xl border border-gray-200 p-4">
                <legend className="font-semibold text-gray-900 px-1">{i + 1}. {item.q}</legend>
                <div className="mt-2 space-y-2">
                  {['v', 'p', 'k'].map((d) => (
                    <label key={d} className="flex items-start gap-3 cursor-pointer text-gray-700">
                      <input
                        type="radio"
                        name={`dosha-q${i}`}
                        value={d}
                        checked={answers[i] === d}
                        onChange={() => setAnswers({ ...answers, [i]: d })}
                        className="mt-1 accent-[#1E5A3C]"
                      />
                      <span>{item[d]}</span>
                    </label>
                  ))}
                </div>
              </fieldset>
            </li>
          ))}
        </ol>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          <button
            type="button"
            onClick={score}
            disabled={answered < QUESTIONS.length}
            className="bg-[#1E5A3C] text-white font-semibold px-6 py-3 rounded-lg disabled:opacity-50"
          >
            Show my dosha
          </button>
          <span className="text-sm text-gray-600" aria-live="polite">{answered} of {QUESTIONS.length} answered</span>
        </div>

        <div id="dosha-quiz-result" aria-live="polite">
          {result && (
            <div className="mt-8 bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-[#1E5A3C] mb-2">
                Your result: {result.top.map((d) => DOSHAS[d].name).join('–')}
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Vata {result.totals.v} · Pitta {result.totals.p} · Kapha {result.totals.k}
              </p>
              {result.top.map((d) => (
                <div key={d} className="mb-4">
                  <p className="text-gray-700 mb-2"><strong>{DOSHAS[d].name}</strong> ({DOSHAS[d].elements}): {DOSHAS[d].text}</p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-1">
                    {DOSHAS[d].tips.map((t) => <li key={t}>{t}</li>)}
                  </ul>
                </div>
              ))}
              <p className="text-sm text-gray-600 mb-4">
                This quiz reflects general Ayurvedic traits and is not a medical diagnosis. At your Prakriti assessment,
                Dr. Shamna confirms your constitution with pulse diagnosis (Nadi Pariksha), tongue and eye examination.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={`https://wa.me/971566597878?text=${encodeURIComponent(
                    `Hello RamaCare Polyclinic, I completed the Dosha Quiz on your website and my result is ${result.top
                      .map((d) => DOSHAS[d].name)
                      .join('–')} (Vata: ${result.totals.v}, Pitta: ${result.totals.p}, Kapha: ${
                      result.totals.k
                    }). I would like to book a Prakriti & Dosha Assessment consultation with Dr. Shamna.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold px-6 py-3 rounded-lg shadow-sm transition-colors"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                  Book on WhatsApp with My Result
                </a>
                <a
                  href="#book-now"
                  className="inline-flex items-center justify-center bg-[#C9A547] hover:bg-[#b8953d] text-white font-semibold px-6 py-3 rounded-lg shadow-sm transition-colors"
                >
                  Book Online (from AED 200)
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
