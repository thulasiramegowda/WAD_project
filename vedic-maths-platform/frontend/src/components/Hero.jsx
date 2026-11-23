import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="min-h-[calc(100vh-80px)] flex flex-col md:flex-row pt-10 md:pt-0 overflow-hidden relative"> 
      
      {/* Left Side - Dark Editorial Card */}
      <div className="w-full md:w-[55%] bg-brand-dark relative flex items-center justify-center p-8 md:p-16 lg:p-24 rounded-br-[4rem] md:rounded-br-[8rem] z-10 shadow-2xl">
        <div className="max-w-xl text-left relative z-20">
          <span className="text-brand-gold text-xs md:text-sm tracking-[0.2em] uppercase mb-6 block font-semibold">
            Gurukula Vedic Maths Academy
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-6 md:mb-8">
            Think Faster.<br />
            Calculate <span className="italic font-light text-brand-beige">Smarter.</span>
          </h1>
          <p className="text-gray-400 mb-8 md:mb-10 leading-relaxed text-base md:text-lg font-light max-w-md">
            Master ancient mathematical techniques for lightning-fast mental calculations. Join our expert-led online and offline coaching programs.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <Link to="/courses" className="bg-brand-gold text-white px-8 py-4 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-white hover:text-brand-dark transition-all duration-300 shadow-[0_0_20px_rgba(184,149,98,0.3)] w-full sm:w-auto">
              Explore Courses <ArrowRight size={18} />
            </Link>
            <button className="text-white flex items-center gap-3 hover:text-brand-gold transition-colors group">
              <div className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center group-hover:border-brand-gold transition-colors">
                <Play size={16} className="ml-1" />
              </div>
              <span className="text-sm font-medium tracking-wide">Watch Intro</span>
            </button>
          </div>
        </div>

        {/* Subtle background formulas inside the dark section */}
        <div className="absolute top-10 right-10 text-white/5 font-serif text-6xl select-none pointer-events-none z-0">
          (a+b)² = a² + 2ab + b²
        </div>
        <div className="absolute bottom-20 left-10 text-white/5 font-serif text-5xl select-none pointer-events-none z-0">
          √x × √y = √(xy)
        </div>
      </div>

      {/* Right Side - Image Area */}
      <div className="w-full md:w-[45%] bg-brand-bg relative hidden md:flex items-center justify-center">
        
        {/* Floating Math Symbols (Background) */}
        <div className="absolute top-16 right-12 text-[8rem] font-serif font-bold text-brand-beige/60 select-none leading-none animate-float-slow z-0">
          π
        </div>
        <div className="absolute bottom-16 left-8 text-[10rem] font-serif font-bold text-brand-beige/50 select-none leading-none animate-float z-0">
          ∑
        </div>
        <div className="absolute top-1/2 left-12 text-4xl font-serif font-bold text-brand-gold/40 select-none animate-float z-0" style={{ animationDelay: '1s' }}>
          ∫ f(x)dx
        </div>
        <div className="absolute bottom-1/3 right-16 text-3xl font-serif font-bold text-brand-gold/30 select-none animate-float-slow z-0" style={{ animationDelay: '2s' }}>
          e^(iπ) + 1 = 0
        </div>
        
        {/* Main Image Container */}
        <div className="relative z-10 w-[75%] h-[80%] rounded-t-full rounded-b-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.2)] border-[6px] border-white">
          <img 
            src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop" 
            alt="Mathematics" 
            className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 hover:scale-105 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-transparent"></div>
        </div>

        {/* Floating Card - FIXED POSITIONING */}
        <div className="absolute bottom-24 -left-12 z-30 bg-white/95 backdrop-blur-xl p-6 rounded-2xl shadow-[0_30px_60px_rgba(0,0,0,0.15)] border border-brand-beige/50 w-72 transform transition-transform hover:-translate-y-2">
          <div className="flex items-center gap-4 mb-3">
            <div className="w-12 h-12 bg-brand-dark rounded-full flex items-center justify-center text-white shrink-0 shadow-inner">
              <span className="font-serif italic text-xl">V</span>
            </div>
            <div>
              <h3 className="font-semibold text-brand-dark font-serif text-lg">Interactive Learning</h3>
              <p className="text-xs text-brand-text">Join 120K+ Students</p>
            </div>
          </div>
          <div className="w-full bg-brand-beige/30 h-2 rounded-full overflow-hidden">
             <div className="bg-brand-gold w-4/5 h-full rounded-full"></div>
          </div>
          <p className="text-[10px] text-right mt-2 text-brand-text font-medium">80% Faster Calculation</p>
        </div>
      </div>
    </section>
  );
}