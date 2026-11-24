import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="bg-[#F7F0E3] min-h-screen overflow-x-hidden selection:bg-[#B8955E] selection:text-[#151411] relative">
      
      {/* GLOBAL PARCHMENT TEXTURE */}
      <div className="fixed inset-0 pointer-events-none opacity-20 z-0 mix-blend-multiply" 
           style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/old-paper.png")' }}>
      </div>

      {/* =========================================
          MAIN HERO CONTAINER (Deep Ink)
      ========================================= */}
      <div className="relative z-10 pb-12">
        
        <div className="bg-[#151411] rounded-b-[2.5rem] shadow-2xl overflow-hidden relative pb-0 border-b border-[#33271D]">
          
          <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay" 
               style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/black-paper.png")' }}>
          </div>

          {/* HERO SECTION */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-6 md:px-16 lg:px-24 pt-20 pb-16 items-center relative z-10">
            
            {/* LEFT: Ancient Artwork with REAL Image */}
            <div className="relative flex justify-center lg:justify-start perspective-1000 group order-2 lg:order-1">
              <div className="absolute inset-0 bg-[#8E6B42]/30 blur-[120px] rounded-full w-[80%] h-[80%] m-auto transition-opacity duration-700 opacity-50 group-hover:opacity-80"></div>
              
              <div className="relative w-[320px] h-[320px] md:w-[480px] md:h-[480px] rounded-full border-[2px] border-[#B8955E]/40 p-2 transform transition-transform duration-1000 ease-out lg:rotate-y-[-10deg] group-hover:rotate-y-0 group-hover:scale-105 shadow-[0_0_80px_rgba(184,149,94,0.15)]">
                
                <div className="w-full h-full rounded-full border border-[#B8955E]/30 overflow-hidden relative">
                  {/* RELIABLE REAL IMAGE of an ancient scholar/astronomer */}
                  <img 
                    src="https://images.unsplash.com/photo-1590059345054-9df6eb505900?q=80&w=2070&auto=format&fit=crop" 
                    alt="Ancient Indian Mathematics" 
                    className="w-full h-full object-cover sepia-[0.8] contrast-[1.2] brightness-[0.6] group-hover:sepia-[0.4] transition-all duration-1000"
                  />
                  {/* Dark Gradient Overlay to blend with background */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#151411] via-[#151411]/40 to-transparent"></div>
                  
                  {/* Giant Pi floating on top of the image */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <span className="text-[10rem] md:text-[14rem] font-serif italic text-[#B8955E] leading-none drop-shadow-[0_0_30px_rgba(184,149,94,0.6)]">
                      π
                    </span>
                  </div>
                </div>

                {/* Sanskrit Text Ring */}
                <div className="absolute top-8 text-[#B8955E] font-serif text-lg md:text-xl tracking-widest flex flex-col items-center z-10 pointer-events-none w-full text-center">
                  <span>॥ गणितं ज्योतिः ॥</span>
                </div>
              </div>

              <div className="absolute top-10 left-0 text-[#B8955E]/20 font-serif text-6xl pointer-events-none -translate-x-8 z-20">Σ</div>
              <div className="absolute bottom-10 right-0 text-[#B8955E]/20 font-serif text-6xl pointer-events-none translate-x-8 z-20">∫</div>
            </div>

            {/* RIGHT: Text Content */}
            <div className="order-1 lg:order-2 flex flex-col justify-center">
              
              <div className="flex items-center gap-4 mb-6">
                <span className="text-[#B8955E] text-xs tracking-[0.2em] uppercase font-mono border-l border-[#B8955E] pl-3">
                  The Art of Vedic Mathematics
                </span>
                <div className="flex -space-x-3 ml-2">
                  <div className="w-8 h-8 rounded-full border border-[#33271D] bg-[#33271D]"></div>
                  <div className="w-8 h-8 rounded-full border border-[#33271D] bg-[#4A3B2C]"></div>
                  <div className="w-8 h-8 rounded-full border border-[#33271D] bg-[#5E4B3A]"></div>
                </div>
                <span className="text-[#E8D6B7]/60 text-xs font-mono">10k+ Students</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl text-[#F7F0E3] font-serif leading-[1.15] mb-6 text-left">
                Align Your Mind<br /> With The <span className="text-[#B8955E] italic">Numbers</span><br /> You Truly Want.
              </h1>
              
              <p className="text-[#E8D6B7]/70 text-base md:text-lg mb-8 max-w-lg leading-relaxed font-light">
                Discover the timeless power of Vedic Mathematics. Develop faster mental calculations, sharper thinking and confidence through the art of numbers.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Link to="/courses" className="w-full sm:w-auto bg-[#B8955E] text-[#151411] px-8 py-3.5 font-bold uppercase tracking-widest text-xs hover:bg-[#E8D6B7] transition-all duration-300 flex items-center justify-center gap-2">
                  Explore Courses <ArrowRight size={16} />
                </Link>
                <Link to="/batches" className="w-full sm:w-auto border border-[#33271D] text-[#E8D6B7] px-8 py-3.5 font-medium hover:border-[#B8955E] hover:text-[#B8955E] transition-all text-xs uppercase tracking-widest flex items-center justify-center">
                  Discover Our Method
                </Link>
              </div>
            </div>
          </div>

          {/* =========================================
              OVERLAPPING PROGRAM SECTION
          ========================================= */}
          <div className="px-6 md:px-16 lg:px-24 pb-16 relative z-10">
            
            <div className="text-center mb-10">
              <span className="text-[#B8955E] text-[10px] tracking-[0.3em] uppercase font-mono block mb-2">Our Programs</span>
              <h2 className="text-2xl md:text-3xl text-[#F7F0E3] font-serif max-w-2xl mx-auto leading-tight">
                Comprehensive Learning Paths Built for Mathematical Mastery.
              </h2>
            </div>

            {/* The Overlapping Cards (Increased Text Size) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 transform md:-translate-y-4">
              
              {/* Card 1 */}
              <div className="bg-[#1A1613] p-6 border border-[#33271D] flex flex-col group hover:border-[#B8955E]/50 transition-all duration-300 rounded-lg">
                <div className="h-48 mb-6 relative border border-[#33271D] bg-[#151411] flex items-center justify-center overflow-hidden">
                   <div className="text-[#B8955E]/30 font-mono text-5xl absolute rotate-12">1 + 2 = 3</div>
                   <div className="text-[#B8955E]/10 font-mono text-7xl absolute -rotate-12">4 5 6 7 8 9</div>
                   <div className="absolute inset-0 bg-gradient-to-t from-[#1A1613] to-transparent"></div>
                   <span className="absolute bottom-4 left-4 text-[10px] font-mono text-[#B8955E] uppercase tracking-widest border border-[#B8955E]/30 px-2 py-1 bg-[#151411]/80">Beginner</span>
                </div>
                <h3 className="text-2xl text-[#F7F0E3] font-serif mb-3">Beginner Foundations</h3>
                <p className="text-[#E8D6B7]/70 text-sm md:text-base mb-6 flex-grow">Start your journey with the basics of Vedic Mathematics and mental calculation.</p>
                <Link to="/courses" className="text-[#B8955E] text-xs font-mono uppercase tracking-widest flex items-center justify-between group-hover:gap-3 transition-all border-t border-[#33271D] pt-4">
                  Explore <ArrowRight size={16} />
                </Link>
              </div>

              {/* Card 2 (Elevated) */}
              <div className="bg-[#241B14] p-6 border border-[#B8955E]/50 flex flex-col relative transform md:-translate-y-4 shadow-[0_20px_40px_rgba(0,0,0,0.6)] rounded-lg">
                <div className="h-48 mb-6 relative border border-[#33271D] bg-[#151411] flex items-center justify-center overflow-hidden">
                   <svg viewBox="0 0 100 100" className="w-32 h-32 text-[#B8955E]/40">
                     <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="1"/>
                     <polygon points="50,10 90,50 50,90 10,50" fill="none" stroke="currentColor" strokeWidth="1"/>
                   </svg>
                   <div className="absolute inset-0 bg-gradient-to-t from-[#241B14] to-transparent"></div>
                   <span className="absolute bottom-4 left-4 text-[10px] font-mono text-[#B8955E] uppercase tracking-widest border border-[#B8955E]/30 px-2 py-1 bg-[#151411]/80">Intermediate</span>
                </div>
                <h3 className="text-2xl text-[#F7F0E3] font-serif mb-3">Intermediate Mastery</h3>
                <p className="text-[#E8D6B7]/80 text-sm md:text-base mb-6 flex-grow">Explore advanced techniques and calculation strategies.</p>
                <Link to="/courses" className="text-[#B8955E] text-xs font-mono uppercase tracking-widest flex items-center justify-between transition-all border-t border-[#B8955E]/20 pt-4">
                  Explore <ArrowRight size={16} />
                </Link>
              </div>

              {/* Card 3 */}
              <div className="bg-[#1A1613] p-6 border border-[#33271D] flex flex-col group hover:border-[#B8955E]/50 transition-all duration-300 rounded-lg">
                <div className="h-48 mb-6 relative border border-[#33271D] bg-[#151411] flex items-center justify-center overflow-hidden">
                   <div className="text-[#B8955E]/30 font-serif italic text-8xl absolute">∞</div>
                   <div className="text-[#B8955E]/20 font-mono text-2xl absolute top-4 right-4">d/dx</div>
                   <div className="absolute inset-0 bg-gradient-to-t from-[#1A1613] to-transparent"></div>
                   <span className="absolute bottom-4 left-4 text-[10px] font-mono text-[#B8955E] uppercase tracking-widest border border-[#B8955E]/30 px-2 py-1 bg-[#151411]/80">Advanced</span>
                </div>
                <h3 className="text-2xl text-[#F7F0E3] font-serif mb-3">Advanced Thinking</h3>
                <p className="text-[#E8D6B7]/70 text-sm md:text-base mb-6 flex-grow">Master complex concepts and achieve exceptional speed.</p>
                <Link to="/courses" className="text-[#B8955E] text-xs font-mono uppercase tracking-widest flex items-center justify-between group-hover:gap-3 transition-all border-t border-[#33271D] pt-4">
                  Explore <ArrowRight size={16} />
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* =========================================
          IVORY STATISTICS SECTION
      ========================================= */}
      <div className="px-4 md:px-16 max-w-[1400px] mx-auto pb-20 relative z-10 -mt-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full md:w-auto">
            <div className="border-l border-[#B8955E]/30 pl-4">
              <h3 className="text-4xl md:text-5xl font-serif text-[#151411] mb-1">360K+</h3>
              <p className="text-xs text-[#8E6B42] uppercase tracking-widest font-mono font-semibold">Calculations Practiced</p>
            </div>
            <div className="border-l border-[#B8955E]/30 pl-4">
              <h3 className="text-4xl md:text-5xl font-serif text-[#151411] mb-1">120K+</h3>
              <p className="text-xs text-[#8E6B42] uppercase tracking-widest font-mono font-semibold">Students Enrolled</p>
            </div>
            <div className="border-l border-[#B8955E]/30 pl-4">
              <h3 className="text-4xl md:text-5xl font-serif text-[#151411] mb-1">98%</h3>
              <p className="text-xs text-[#8E6B42] uppercase tracking-widest font-mono font-semibold">Success Rate</p>
            </div>
            <div className="border-l border-[#B8955E]/30 pl-4">
              <h3 className="text-4xl md:text-5xl font-serif text-[#151411] mb-1">4.9/5</h3>
              <p className="text-xs text-[#8E6B42] uppercase tracking-widest font-mono font-semibold">Parent Satisfaction</p>
            </div>
          </div>

          <div className="hidden md:block">
            <ArrowUpRight size={80} className="text-[#151411]" strokeWidth={1} />
          </div>

        </div>
      </div>

    </div>
  );
}