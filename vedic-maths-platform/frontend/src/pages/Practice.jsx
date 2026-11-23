import { useState } from 'react';

const questions = [
  { q: "What is 98 x 98 using Vedic Maths?", options: ["9604", "9404", "9704", "9804"], ans: "9604" },
  { q: "What is 45 x 45?", options: ["2025", "1825", "2125", "1925"], ans: "2025" },
  { q: "What is 108 x 108?", options: ["11664", "11644", "11764", "10808"], ans: "11664" }
];

export default function Practice() {
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (selected) => {
    if (selected === questions[currentQ].ans) {
      setScore(score + 1);
    }
    
    if (currentQ + 1 < questions.length) {
      setCurrentQ(currentQ + 1);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-8 md:p-12 mt-10">
      <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-brand-beige/50 text-center">
        {showResult ? (
          <div>
            <h2 className="text-4xl font-serif mb-4">Quiz Complete!</h2>
            <p className="text-xl text-brand-text mb-8">You scored {score} out of {questions.length}</p>
            <button 
              onClick={() => { setCurrentQ(0); setScore(0); setShowResult(false); }}
              className="bg-brand-dark text-white px-8 py-3 rounded-full hover:bg-brand-gold transition"
            >
              Try Again
            </button>
          </div>
        ) : (
          <div>
            <div className="text-brand-gold font-bold mb-4">Question {currentQ + 1} of {questions.length}</div>
            <h2 className="text-2xl md:text-3xl font-serif mb-8 text-brand-dark">{questions[currentQ].q}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {questions[currentQ].options.map((opt, i) => (
                <button 
                  key={i}
                  onClick={() => handleAnswer(opt)}
                  className="border border-brand-beige py-4 rounded-xl text-lg hover:bg-brand-bg hover:border-brand-gold transition"
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}