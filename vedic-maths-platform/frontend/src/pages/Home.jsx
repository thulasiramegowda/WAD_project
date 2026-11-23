import { ArrowRight, ArrowUpRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="bg-brand-bg min-h-screen overflow-hidden">
      
      {/* 1. HERO SECTION (Mindco Split Layout) */}
      <section className="px-4 md:px-8 pt-6 pb-0">
        <div className="relative bg-[#121212] rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row min-h-[600px] shadow-2xl">
          
          {/* Left Side: Image with gradient fade into the dark background */}
          <div className="w-full md:w-1/2 relative h-[400px] md:h-auto">
            <img 
              src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop" 
              alt="Teacher" 
              className="absolute inset-0 w-full h-full object-cover opacity-80"
            />
            {/* Gradient that blends the image seamlessly into the black background */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#121212]/50 to-[#121212]"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent md:hidden"></div>
          </div>

          {/* Right Side: Text Content */}
          <div className="w-full md:w-1/2 relative z-10 p-8 md:p-16 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="flex -space-x-2">
                <img className="w-8 h-8 rounded-full border-2 border-[#121212]" src="https://i.pravatar.cc/100?img=1" alt="user" />
                <img className="w-8 h-8 rounded-full border-2 border-[#121212]" src="https://i.pravatar.cc/100?img=2" alt="user" />
                <img className="w-8 h-8 rounded-full border-2 border-[#121212]" src="https://i.pravatar.cc/100?img=3" alt="user" />
              </div>
              <span className="text-xs text-gray-400 ml-2">10k+ Happy Students</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white leading-[1.15] mb-6 font-serif">
              Align Your Mind<br /> With The <span className="text-brand-gold italic">Numbers</span><br /> You Truly Want.
            </h1>
            
            <p className="text-gray-400 mb-8 max-w-md text-sm md:text-base leading-relaxed">
              Master ancient Vedic techniques to calculate at lightning speed. A premium learning experience for the modern student.
            </p>
            
            <div className="flex flex-wrap items-center gap-4">
              <Link to="/courses" className="bg-brand-gold text-black px-6 py-3 rounded-full font-semibold hover:bg-white transition-all flex items-center gap-2">
                Explore Courses <ArrowRight size={18} />
              </Link>
              <Link to="/practice" className="border border-gray-600 text-white px-6 py-3 rounded-full font-medium hover:border-white transition-all text-sm">
                Schedule a Free Class
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE DARK SECTION (Layered over the hero bottom) */}
      <section className="relative z-20 -mt-10 px-4 md:px-8 pb-12">
        <div className="bg-[#1a1a1a] rounded-[2.5rem] p-8 md:p-16 shadow-2xl max-w-7xl mx-auto border border-white/5">
          
          <div className="text-center mb-12">
            <span className="text-brand-gold text-xs tracking-widest uppercase mb-2 block">Features</span>
            <h2 className="text-3xl md:text-4xl text-white font-serif">Comprehensive Learning Built for Speed</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-[#222222] rounded-3xl overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
              <div className="h-56 relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1596495578065-6e0763fa1178?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition duration-700 opacity-90" alt="Online" />
                <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-white">Online Coaching</div>
              </div>
              <div className="p-6">
                <p className="text-gray-400 text-sm mb-4">Learn from the best mentors through interactive live sessions.</p>
                <Link to="/batches" className="w-full block text-center bg-white/10 text-white py-2 rounded-xl text-sm hover:bg-brand-gold hover:text-black transition-colors">Explore Batches</Link>
              </div>
            </div>

            {/* Card 2 (Center Elevated) */}
            <div className="bg-[#222222] rounded-3xl overflow-hidden group hover:-translate-y-2 transition-transform duration-300 md:-mt-8 md:mb-8 border border-brand-gold/20 shadow-[0_0_30px_rgba(184,149,98,0.1)]">
              <div className="h-56 relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" alt="Offline" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#222222] to-transparent"></div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl text-white font-serif mb-2">Life Purpose Discovery</h3>
                <p className="text-gray-400 text-sm mb-4">Traditional in-person classes with Vedic math scholars.</p>
                <Link to="/batches" className="w-full block bg-brand-gold text-black font-semibold py-2 rounded-xl text-sm hover:bg-white transition-colors">Find Location</Link>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#222222] rounded-3xl overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
              <div className="h-56 relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition duration-700 opacity-90" alt="Practice" />
                <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-white">Daily Practice</div>
              </div>
              <div className="p-6">
                <p className="text-gray-400 text-sm mb-4">Test your skills with timed quizzes and track progress.</p>
                <Link to="/practice" className="w-full block text-center bg-white/10 text-white py-2 rounded-xl text-sm hover:bg-brand-gold hover:text-black transition-colors">Start Quiz</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BOTTOM STATS SECTION (Light Background) */}
      <section className="px-4 md:px-12 py-20 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        
        {/* Left Stats */}
        <div className="flex gap-12">
          <div>
            <h3 className="text-5xl font-serif text-brand-dark mb-1">360K+</h3>
            <p className="text-xs text-gray-500 uppercase tracking-wider">Calculations Solved</p>
          </div>
          <div>
            <h3 className="text-5xl font-serif text-brand-dark mb-1">120K+</h3>
            <p className="text-xs text-gray-500 uppercase tracking-wider">Students Mentored</p>
          </div>
        </div>

        {/* Right Text */}
        <div className="max-w-md text-center md:text-right">
          <div className="flex justify-end mb-4">
            <ArrowUpRight size={32} className="text-brand-dark" />
          </div>
          <p className="text-xl md:text-2xl text-brand-dark font-serif leading-snug">
            With a network that spans continents, our mission is to redefine learning with unmatched speed, reliability, and care.
          </p>
        </div>
      </section>

    </div>
  );
}