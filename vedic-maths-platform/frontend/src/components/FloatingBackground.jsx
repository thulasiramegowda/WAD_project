export default function FloatingBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      
      {/* Background Image Watermark (Slightly Darker/More Visible) */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.08]">
        <img 
          src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2000&auto=format&fit=crop" 
          alt="Math Background" 
          className="w-[80%] md:w-[60%] object-contain sepia-[0.4]" // Removed grayscale, reduced sepia
        />
      </div>

      {/* Top Left Symbol */}
      <div className="absolute top-[10%] left-[5%] text-[#B8955E] opacity-[0.08] text-[12rem] font-serif italic animate-float" style={{ animationDuration: '8s' }}>
        ∑
      </div>
      
      {/* Bottom Right Symbol */}
      <div className="absolute bottom-[10%] right-[5%] text-[#B8955E] opacity-[0.08] text-[15rem] font-serif italic animate-float" style={{ animationDuration: '10s', animationDelay: '2s' }}>
        π
      </div>

      {/* Center Right Math */}
      <div className="absolute top-[40%] right-[15%] text-[#8E6B42] opacity-[0.06] text-[8rem] font-mono animate-float" style={{ animationDuration: '12s', animationDelay: '1s' }}>
        √x
      </div>
      
      {/* Center Left Math */}
      <div className="absolute top-[60%] left-[10%] text-[#8E6B42] opacity-[0.06] text-[10rem] font-serif animate-float" style={{ animationDuration: '9s', animationDelay: '3s' }}>
        ∫
      </div>
    </div>
  );
}