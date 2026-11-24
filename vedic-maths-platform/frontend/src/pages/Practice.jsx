import { useState } from 'react';
import { CheckCircle, XCircle, Play, Award, Clock, Target, Zap, BookOpen } from 'lucide-react';

const ALL_QUESTIONS = [
  { topic: 'Multiplication', difficulty: 'Easy', q: "What is 98 x 98 using Vedic Maths?", options: ["9604", "9404", "9704", "9804"], ans: "9604" },
  { topic: 'Multiplication', difficulty: 'Medium', q: "What is 12 x 13?", options: ["146", "156", "166", "136"], ans: "156" },
  { topic: 'Multiplication', difficulty: 'Easy', q: "What is 99 x 99?", options: ["9801", "9901", "9701", "9601"], ans: "9801" },
  { topic: 'Squaring', difficulty: 'Easy', q: "What is 45 x 45?", options: ["2025", "1825", "2125", "1925"], ans: "2025" },
  { topic: 'Squaring', difficulty: 'Hard', q: "What is 108 x 108?", options: ["11664", "11644", "11764", "10808"], ans: "11664" },
  { topic: 'Squaring', difficulty: 'Medium', q: "What is 35 x 35?", options: ["1225", "1125", "1325", "1425"], ans: "1225" },
  { topic: 'Division', difficulty: 'Hard', q: "Divide 1234 by 9 (Remainder)?", options: ["1", "2", "3", "4"], ans: "1" },
  { topic: 'Division', difficulty: 'Medium', q: "What is 1/7 in decimal?", options: ["0.142857...", "0.157...", "0.147...", "0.142...0"], ans: "0.142857..." },
];

const TOPICS = [
  { name: 'All Topics', available: true, icon: <BookOpen size={18} /> },
  { name: 'Multiplication', available: true, icon: <Zap size={18} /> },
  { name: 'Squaring', available: true, icon: <Target size={18} /> },
  { name: 'Division', available: true, icon: <Target size={18} /> },
  { name: 'Vedic Geometry', available: false, message: "Questions in progress..." }
];

export default function Practice() {
  const [filterTopic, setFilterTopic] = useState('All Topics');
  const [filterDifficulty, setFilterDifficulty] = useState('All Levels');
  
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selected, setSelected] = useState(null);
  const [quizActive, setQuizActive] = useState(false);

  const isTopicAvailable = TOPICS.find(t => t.name === filterTopic)?.available;

  // Filter logic
  let questions = filterTopic === 'All Topics' 
    ? ALL_QUESTIONS 
    : ALL_QUESTIONS.filter(q => q.topic === filterTopic);

  if (filterDifficulty !== 'All Levels') {
    questions = questions.filter(q => q.difficulty === filterDifficulty);
  }

  const handleAnswer = (opt) => {
    setSelected(opt);
    if (opt === questions[currentQ].ans) setScore(score + 1);

    setTimeout(() => {
      if (currentQ + 1 < questions.length) {
        setCurrentQ(currentQ + 1);
        setSelected(null);
      } else {
        setShowResult(true);
      }
    }, 600);
  };

  const startQuiz = () => {
    if (!isTopicAvailable || questions.length === 0) return;
    setQuizActive(true);
    setCurrentQ(0);
    setScore(0);
    setShowResult(false);
    setSelected(null);
  };

  // --- DASHBOARD VIEW (Selection screen) ---
  if (!quizActive) {
    return (
      <div className="max-w-6xl mx-auto p-8 md:p-12 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* LEFT: Sidebar Filters */}
          <div className="md:col-span-1">
            <div className="bg-brand-ink rounded-3xl p-6 shadow-xl text-brand-ivory">
              <h3 className="font-serif text-2xl mb-6 border-b border-[#33271D] pb-4">Filter Topics</h3>
              
              <div className="space-y-2 mb-8">
                {TOPICS.map(t => (
                  <button
                    key={t.name}
                    onClick={() => setFilterTopic(t.name)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      filterTopic === t.name 
                        ? 'bg-brand-gold text-brand-ink' 
                        : 'text-brand-parchment/70 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {t.icon} {t.name}
                  </button>
                ))}
              </div>

              <h3 className="font-serif text-xl mb-4 border-b border-[#33271D] pb-4 mt-8">Difficulty</h3>
              <div className="flex flex-wrap gap-2">
                {['All Levels', 'Easy', 'Medium', 'Hard'].map(d => (
                  <button
                    key={d}
                    onClick={() => setFilterDifficulty(d)}
                    className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                      filterDifficulty === d 
                        ? 'bg-white text-brand-ink' 
                        : 'bg-[#1A1613] text-brand-parchment/50 hover:text-white'
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Quiz Preview Area */}
          <div className="md:col-span-2 flex flex-col justify-center">
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-brand-beige/50 text-center h-full flex flex-col justify-center items-center relative overflow-hidden">
              
              {/* Background Math Pattern */}
              <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center">
                <span className="text-[20rem] font-serif italic">π</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-serif mb-4 text-brand-ink relative z-10">Practice Arena</h1>
              
              <div className="flex items-center gap-4 mb-8 relative z-10">
                <span className="bg-brand-ivory px-4 py-1 rounded-full text-sm font-mono text-brand-bronze border border-brand-parchment">
                  {filterTopic}
                </span>
                <span className="bg-brand-ivory px-4 py-1 rounded-full text-sm font-mono text-brand-bronze border border-brand-parchment">
                  {filterDifficulty}
                </span>
              </div>

              {!isTopicAvailable ? (
                <div className="relative z-10">
                  <Clock size={48} className="text-brand-gold mx-auto mb-4 animate-pulse" />
                  <h3 className="text-xl font-serif text-brand-ink mb-2">Coming Soon</h3>
                  <p className="text-brand-walnut max-w-sm">Questions for {filterTopic} are currently in progress. Check back later!</p>
                </div>
              ) : questions.length === 0 ? (
                <div className="relative z-10">
                  <h3 className="text-xl font-serif text-brand-ink mb-2">No questions found</h3>
                  <p className="text-brand-walnut max-w-sm">Try changing the difficulty level.</p>
                </div>
              ) : (
                <div className="relative z-10 w-full">
                  <p className="text-brand-walnut mb-8 text-lg">
                    You have selected <strong className="text-brand-ink">{questions.length} questions</strong>. Test your skills now!
                  </p>
                  <button 
                    onClick={startQuiz}
                    className="bg-brand-gold text-brand-ink font-bold px-10 py-4 rounded-full text-lg flex items-center gap-2 mx-auto hover:bg-brand-ink hover:text-brand-ivory transition-colors shadow-lg hover:shadow-xl"
                  >
                    <Play size={20} /> Start Quiz
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    );
  }

  // --- QUIZ VIEW (Active) ---
  return (
    <div className="max-w-3xl mx-auto p-8 md:p-12 mt-10">
      <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-brand-beige/50 text-center relative overflow-hidden">
        
        {showResult ? (
          <div className="relative z-10">
            <Award size={64} className="mx-auto text-brand-gold mb-4" />
            <h2 className="text-4xl font-serif mb-4 text-brand-ink">Quiz Complete!</h2>
            <p className="text-xl text-brand-walnut mb-8">
              You scored <span className="text-brand-gold font-bold text-3xl">{score}</span> out of {questions.length}
            </p>
            <button 
              onClick={() => setQuizActive(false)}
              className="bg-brand-ink text-brand-ivory px-8 py-3 rounded-full hover:bg-brand-gold transition-colors font-bold"
            >
              Back to Arena
            </button>
          </div>
        ) : (
          <div className="relative z-10">
            <div className="flex justify-between items-center mb-8 text-sm font-mono text-brand-bronze uppercase tracking-widest border-b border-brand-parchment pb-4">
              <span>{filterTopic} • {questions[currentQ].difficulty}</span>
              <span>{currentQ + 1} / {questions.length}</span>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-serif mb-8 text-brand-ink leading-tight">
              {questions[currentQ].q}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {questions[currentQ].options.map((opt, i) => {
                let btnClass = "border border-brand-parchment py-4 rounded-xl text-lg hover:bg-brand-ivory hover:border-brand-gold transition-all text-brand-ink font-medium";
                
                if (selected === opt) {
                  btnClass = opt === questions[currentQ].ans 
                    ? "bg-green-100 border-green-500 text-green-800 py-4 rounded-xl text-lg font-bold flex justify-center items-center gap-2" 
                    : "bg-red-100 border-red-500 text-red-800 py-4 rounded-xl text-lg flex justify-center items-center gap-2";
                } else if (selected && opt === questions[currentQ].ans) {
                   btnClass = "bg-green-50 border-green-300 text-green-700 py-4 rounded-xl text-lg flex justify-center items-center gap-2";
                }

                return (
                  <button 
                    key={i}
                    disabled={selected !== null}
                    onClick={() => handleAnswer(opt)}
                    className={btnClass}
                  >
                    {opt}
                    {selected === opt && opt === questions[currentQ].ans && <CheckCircle size={20} />}
                    {selected === opt && opt !== questions[currentQ].ans && <XCircle size={20} />}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}