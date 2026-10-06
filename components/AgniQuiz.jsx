import { useState } from 'react';

// Agni self-check: 8 questions, result = Vishama / Tikshna / Manda / Sama Agni.
// Questions are server-rendered (readable by Google); scoring runs in the browser. Not a diagnosis.
const QUESTIONS = [
  { q: 'My hunger is usually…', v: 'Irregular: some days strong, some days none', t: 'Strong and sharp; I get irritable if a meal is late', m: 'Low; I can easily skip meals', s: 'Regular and moderate' },
  { q: 'After meals I tend to feel…', v: 'Gassy or bloated, varying from day to day', t: 'Warm, with heartburn or acidity', m: 'Heavy and sleepy for hours', s: 'Light and comfortable' },
  { q: 'My bowel movements are usually…', v: 'Irregular, dry or constipated', t: 'Loose or frequent', m: 'Slow, sticky or incomplete', s: 'Regular and comfortable' },
  { q: 'In the morning my tongue looks…', v: 'Dry or cracked', t: 'Red or yellowish', m: 'Thickly coated white', s: 'Pink with little coating' },
  { q: 'When I eat, I…', v: 'Eat small amounts at irregular times', t: 'Eat large amounts and get hungry again soon', m: 'Feel full quickly, even with small portions', s: 'Eat normal portions comfortably' },
  { q: 'I most often crave…', v: 'Crunchy, dry snacks', t: 'Spicy food and cold drinks', m: 'Sweets and heavy food', s: 'Nothing in particular' },
  { q: 'After lunch my energy…', v: 'Goes up and down', t: 'Is fine, but I am hungry again soon', m: 'Slumps; I feel sleepy', s: 'Stays steady' },
  { q: 'After a heavy or late dinner I…', v: 'Feel bloated and sleep badly', t: 'Get acidity or burning at night', m: 'Wake up heavy with no appetite', s: 'Feel mostly fine' }
];

const RESULTS = {
  v: { name: 'Vishama Agni (irregular)', dosha: 'Vata', text: 'Your digestion seems irregular, which Ayurveda links to Vata. Regular meal times and warm, cooked food usually help most.', tips: ['Eat at the same times every day', 'Choose warm, cooked, slightly oily food', 'Sip warm water or cumin-coriander-fennel tea', 'Avoid cold drinks and raw salads late in the day'] },
  t: { name: 'Tikshna Agni (sharp)', dosha: 'Pitta', text: 'Your digestion seems sharp and hot, which Ayurveda links to Pitta, often worse in the Dubai summer.', tips: ['Do not skip or delay meals', 'Limit very spicy, sour and fried food', 'Favour cooling foods and spiced buttermilk', 'Avoid eating late at night'] },
  m: { name: 'Manda Agni (slow)', dosha: 'Kapha', text: 'Your digestion seems slow and heavy, which Ayurveda links to Kapha.', tips: ['Keep dinner light and early', 'Use warming spices such as ginger and black pepper', 'Avoid snacking between meals', 'Move or walk after meals'] },
  s: { name: 'Sama Agni (balanced)', dosha: 'Balanced', text: 'Your answers suggest balanced digestion. Keep your regular routine and seasonal habits.', tips: ['Keep regular meal times', 'Make lunch your main meal', 'Adjust your diet in the summer heat'] }
};

export default function AgniQuiz() {
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);
  const answered = Object.keys(answers).length;

  const score = () => {
    const t = { v: 0, t: 0, m: 0, s: 0 };
    Object.values(answers).forEach((k) => { t[k] += 1; });
    // An imbalance takes priority over "balanced" when scores tie
    const order = ['v', 't', 'm', 's'];
    const top = order.reduce((best, k) => (t[k] > t[best] ? k : best), 'v');
    setResult({ key: top, totals: t });
    try {
      if (typeof window !== 'undefined' && window.dataLayer) {
        window.dataLayer.push({ event: 'agni_quiz_complete', agni_result: RESULTS[top].name });
      }
    } catch (e) {}
    if (typeof document !== 'undefined') {
      const el = document.getElementById('agni-quiz-result');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="agni-quiz" className="py-16 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">Agni Self-Check: How Strong Is Your Digestive Fire?</h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Answer 8 questions about your usual digestion. You will see which of the four Agni types your answers match,
          with simple tips. This is a self-check, not a diagnosis; your Agni is assessed properly at a consultation.
        </p>
        <ol className="space-y-5">
          {QUESTIONS.map((item, i) => (
            <li key={i}>
              <fieldset className="bg-[#F5F1EA] rounded-xl p-4">
                <legend className="font-semibold text-gray-900 px-1">{i + 1}. {item.q}</legend>
                <div className="mt-2 space-y-2">
                  {['v', 't', 'm', 's'].map((k) => (
                    <label key={k} className="flex items-start gap-3 cursor-pointer text-gray-700">
                      <input type="radio" name={`agni-q${i}`} value={k} checked={answers[i] === k}
                        onChange={() => setAnswers({ ...answers, [i]: k })} className="mt-1 accent-[#2D5A41]" />
                      <span>{item[k]}</span>
                    </label>
                  ))}
                </div>
              </fieldset>
            </li>
          ))}
        </ol>
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <button type="button" onClick={score} disabled={answered < QUESTIONS.length}
            className="bg-[#2D5A41] text-white font-semibold px-6 py-3 rounded-lg disabled:opacity-50">
            Show my Agni type
          </button>
          <span className="text-sm text-gray-600" aria-live="polite">{answered} of {QUESTIONS.length} answered</span>
        </div>
        <div id="agni-quiz-result" aria-live="polite">
          {result && (
            <div className="mt-8 bg-[#F5F1EA] rounded-xl p-6">
              <h3 className="text-xl font-bold text-[#2D5A41] mb-2">Your result: {RESULTS[result.key].name}</h3>
              <p className="text-gray-700 mb-3">{RESULTS[result.key].text}</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
                {RESULTS[result.key].tips.map((tip) => <li key={tip}>{tip}</li>)}
              </ul>
              <p className="text-sm text-gray-600 mb-4">
                This self-check is not a medical diagnosis. If you have weight loss, blood in the stool, difficulty
                swallowing or severe pain, see a doctor first.
              </p>
              <a href="/book-appointment/" className="inline-block bg-[#1A5F3F] text-white font-semibold px-6 py-3 rounded-lg">
                Book a digestive assessment (from AED 200)
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
