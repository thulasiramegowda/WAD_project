import { ArrowRight, ArrowUpRight, CheckCircle2, Play } from 'lucide-react';
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
            
            {/* LEFT: PURE CSS & SVG ARTWORK */}
            <div className="relative flex justify-center lg:justify-start perspective-1000 group order-2 lg:order-1">
              <div className="absolute inset-0 bg-[#8E6B42]/20 blur-[100px] rounded-full w-[80%] h-[80%] m-auto"></div>
              
              <div className="relative w-[320px] h-[320px] md:w-[480px] md:h-[480px] rounded-full border-[2px] border-[#B8955E]/40 flex items-center justify-center transform transition-transform duration-1000 ease-out lg:rotate-y-[-10deg] group-hover:rotate-y-0 bg-[#1A1613] shadow-[0_0_80px_rgba(184,149,94,0.15)] overflow-hidden">
                
                <div className="absolute inset-4 rounded-full border border-[#B8955E]/20 border-dashed animate-[spin_60s_linear_infinite]"></div>
                <div className="absolute inset-10 rounded-full border border-[#B8955E]/30"></div>
                
                <div className="absolute inset-0 flex items-center justify-center opacity-30">
                  <div className="w-full h-[1px] bg-[#B8955E]/50"></div>
                  <div className="h-full w-[1px] bg-[#B8955E]/50 absolute"></div>
                </div>

                <svg viewBox="0 0 100 100" className="absolute w-[80%] h-[80%] text-[#B8955E]/20">
                  <polygon points="50,10 90,80 10,80" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                  <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                </svg>

                <div className="absolute top-8 text-[#B8955E] font-serif text-lg md:text-xl tracking-widest flex flex-col items-center z-10">
                  <span>॥ गणितं ज्योतिः ॥</span>
                </div>
                
                <span className="text-[10rem] md:text-[14rem] font-serif italic text-[#B8955E] leading-none drop-shadow-[0_0_20px_rgba(184,149,94,0.4)] z-10">
                  π
                </span>

                <div className="absolute bottom-8 text-[#8E6B42] font-mono text-[10px] tracking-[0.3em] z-10">
                  3.1415926535...
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

              <h1 className="text-4xl md:text-5xl lg:text-7xl text-[#F7F0E3] font-serif leading-[1.1] mb-6 text-left">
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
              GALLERY SLIDER
          ========================================= */}
          <div className="w-full overflow-hidden py-10 bg-[#151411] border-y border-[#33271D]">
            <div className="flex w-max animate-marquee">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex gap-6 px-3">
                  {[
                    "https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?q=80&w=800&auto=format&fit=crop", 
                    "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=800&auto=format&fit=crop", 
                    "https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=800&auto=format&fit=crop", 
                    "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?q=80&w=800&auto=format&fit=crop",
                  ].map((src, index) => (
                    <div key={index} className="relative w-[300px] md:w-[400px] h-[200px] md:h-[250px] rounded-2xl overflow-hidden border border-[#33271D] group shrink-0">
                      <img 
                        src={src} 
                        alt={`Gallery ${index}`} 
                        className="w-full h-full object-cover grayscale sepia-[0.3] opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#151411] to-transparent opacity-80 pointer-events-none"></div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* =========================================
              OVERLAPPING PROGRAM SECTION
          ========================================= */}
          <div className="px-6 md:px-16 lg:px-24 pb-16 pt-10 relative z-10">
            
            <div className="text-center mb-10">
              <span className="text-[#B8955E] text-[10px] tracking-[0.3em] uppercase font-mono block mb-2">Our Programs</span>
              <h2 className="text-2xl md:text-3xl text-[#F7F0E3] font-serif max-w-2xl mx-auto leading-tight">
                Comprehensive Learning Paths Built for Mathematical Mastery.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 transform md:-translate-y-4">
              
              {/* Card 1 */}
              <div className="bg-[#1A1613] p-6 border border-[#33271D] flex flex-col group hover:border-[#B8955E]/50 transition-all duration-300 rounded-lg">
                <div className="h-48 mb-6 relative border border-[#33271D] bg-[#151411] flex items-center justify-center overflow-hidden">
                   <div className="text-[#B8955E]/20 font-mono text-5xl absolute rotate-12">1 + 2 = 3</div>
                   <div className="text-[#B8955E]/10 font-mono text-7xl absolute -rotate-12">4 5 6 7 8 9</div>
                   <div className="absolute inset-0 bg-gradient-to-t from-[#1A1613] to-transparent"></div>
                   <span className="absolute bottom-4 left-4 text-[10px] font-mono text-[#B8955E] uppercase tracking-widest border border-[#B8955E]/30 px-2 py-1 bg-[#151411]/80">Beginner</span>
                </div>
                <h3 className="text-2xl text-[#F7F0E3] font-serif mb-3">Beginner Foundations</h3>
                <p className="text-[#E8D6B7]/70 text-base mb-6 flex-grow">Start your journey with the basics of Vedic Mathematics.</p>
                <Link to="/courses" className="text-[#B8955E] text-xs font-mono uppercase tracking-widest flex items-center justify-between group-hover:gap-3 transition-all border-t border-[#33271D] pt-4">
                  Explore <ArrowRight size={16} />
                </Link>
              </div>

              {/* Card 2 */}
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
                <p className="text-[#E8D6B7]/80 text-base mb-6 flex-grow">Explore advanced techniques and calculation strategies.</p>
                <Link to="/courses" className="text-[#B8955E] text-xs font-mono uppercase tracking-widest flex items-center justify-between transition-all border-t border-[#B8955E]/20 pt-4">
                  Explore <ArrowRight size={16} />
                </Link>
              </div>

              {/* Card 3 */}
              <div className="bg-[#1A1613] p-6 border border-[#33271D] flex flex-col group hover:border-[#B8955E]/50 transition-all duration-300 rounded-lg">
                <div className="h-48 mb-6 relative border border-[#33271D] bg-[#151411] flex items-center justify-center overflow-hidden">
                   <div className="text-[#B8955E]/20 font-serif italic text-8xl absolute">∞</div>
                   <div className="text-[#B8955E]/10 font-mono text-2xl absolute top-4 right-4">d/dx</div>
                   <div className="absolute inset-0 bg-gradient-to-t from-[#1A1613] to-transparent"></div>
                   <span className="absolute bottom-4 left-4 text-[10px] font-mono text-[#B8955E] uppercase tracking-widest border border-[#B8955E]/30 px-2 py-1 bg-[#151411]/80">Advanced</span>
                </div>
                <h3 className="text-2xl text-[#F7F0E3] font-serif mb-3">Advanced Thinking</h3>
                <p className="text-[#E8D6B7]/70 text-base mb-6 flex-grow">Master complex concepts and achieve exceptional speed.</p>
                <Link to="/courses" className="text-[#B8955E] text-xs font-mono uppercase tracking-widest flex items-center justify-between group-hover:gap-3 transition-all border-t border-[#33271D] pt-4">
                  Explore <ArrowRight size={16} />
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* =========================================
          NEW: WHY VEDIC MATHS SECTION (Ivory)
      ========================================= */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24 py-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="relative order-2 md:order-1">
           <div className="w-full h-[500px] rounded-t-[10rem] rounded-b-2xl overflow-hidden border-4 border-white shadow-2xl relative z-10">
             <img src="https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=1000&auto=format&fit=crop" alt="Vedic Math" className="w-full h-full object-cover sepia-[0.3]" />
           </div>
           {/* Floating decorative box */}
           <div className="absolute -bottom-6 -right-6 bg-[#151411] text-[#F7F0E3] p-6 rounded-xl shadow-xl z-20 w-48 text-center border border-[#33271D]">
              <p className="text-4xl font-serif text-[#B8955E] mb-1">16</p>
              <p className="text-xs uppercase tracking-widest text-[#E8D6B7]/60">Vedic Sutras</p>
           </div>
        </div>

        <div className="order-1 md:order-2">
          <span className="text-[#B8955E] text-xs tracking-[0.2em] uppercase font-mono block mb-3">Why Learn With Us?</span>
          <h2 className="text-4xl md:text-5xl font-serif text-[#151411] leading-tight mb-6">
            Ancient Wisdom.<br/>Modern <span className="italic text-[#B8955E]">Application.</span>
          </h2>
          <p className="text-[#8E6B42] leading-relaxed mb-8">
            Vedic Mathematics is a holistic system of thinking that enhances memory, creativity, and logical reasoning. We bring these ancient sutras into the modern world, turning math from a chore into an art form.
          </p>
          
          <div className="space-y-4 mb-10">
            {[
              "Calculate faster than a calculator",
              "Improve concentration and memory",
              "Build confidence in competitive exams"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle2 size={24} className="text-[#B8955E]" />
                <span className="text-[#151411] font-medium">{item}</span>
              </div>
            ))}
          </div>

          <Link to="/about" className="bg-[#151411] text-[#F7F0E3] px-8 py-3.5 text-sm font-bold uppercase tracking-wider rounded-sm hover:bg-[#B8955E] transition-colors inline-block">
            Read Our Philosophy
          </Link>
        </div>
      </div>

      {/* =========================================
          NEW: TEACHER SPOTLIGHT (Dark Walnut)
      ========================================= */}
      <div className="bg-[#241B14] py-24 px-6 md:px-16 relative overflow-hidden border-y border-[#33271D]">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/black-paper.png")' }}></div>
        
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <span className="text-[#B8955E] text-xs tracking-[0.2em] uppercase font-mono block mb-3">Meet Your Mentor</span>
            <h2 className="text-4xl md:text-5xl font-serif text-[#F7F0E3] leading-tight mb-6">
              Learn from <br/> <span className="italic text-[#B8955E]">Scholars.</span>
            </h2>
            <p className="text-[#E8D6B7]/60 leading-relaxed mb-8 text-lg font-light">
              Our instructors are not just teachers; they are researchers and mathematicians dedicated to preserving and modernizing the ancient Vedic mathematical tradition.
            </p>
            
            <div className="bg-[#151411] p-6 rounded-xl border border-[#33271D] flex items-center gap-6 mb-8 w-fit">
              <div className="w-16 h-16 rounded-full bg-[#B8955E] flex items-center justify-center text-[#151411] font-serif text-2xl italic">
                RS
              </div>
              <div>
                <h4 className="text-[#F7F0E3] font-serif text-xl">Dr. Ramesh Sharma</h4>
                <p className="text-[#B8955E] text-xs uppercase tracking-wider font-mono mt-1">PhD in Mathematics • 15+ Years Exp.</p>
              </div>
            </div>

            <button className="flex items-center gap-3 text-[#E8D6B7] hover:text-[#B8955E] transition-colors font-medium">
              <div className="w-12 h-12 rounded-full border border-[#33271D] flex items-center justify-center">
                <Play size={16} className="ml-1" />
              </div>
              Watch Introduction
            </button>
          </div>

          <div className="relative">
            <div className="w-full h-[500px] rounded-2xl overflow-hidden border-2 border-[#33271D] shadow-[0_0_50px_rgba(0,0,0,0.5)] grayscale hover:grayscale-0 transition-all duration-700">
               <img src="https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?q=80&w=1000&auto=format&fit=crop" alt="Teacher" className="w-full h-full object-cover" />
            </div>
            {/* Decorative Element */}
            <div className="absolute -top-6 -left-6 text-[#B8955E]/10 font-serif text-9xl pointer-events-none">∫</div>
          </div>
        </div>
      </div>

      {/* =========================================
          IVORY STATISTICS SECTION
      ========================================= */}
      <div className="px-4 md:px-16 max-w-[1400px] mx-auto py-20 relative z-10">
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