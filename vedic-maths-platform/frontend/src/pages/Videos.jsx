import { PlayCircle, ExternalLink } from 'lucide-react';

const PLAYLISTS = [
  {
    title: "Vedic Maths Full Course",
    description: "Complete foundational series covering all 16 sutras and their applications.",
    link: "https://youtube.com/playlist?list=PLVLoWQFkZbhUFSIAjbWPVv_mlAAX8BBD1",
    thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=800&auto=format&fit=crop",
    level: "Beginner"
  },
  {
    title: "Speed Math & Shortcuts",
    description: "Master lightning-fast multiplication, division, and squaring techniques.",
    link: "https://youtube.com/playlist?list=PL4t_secZTPn6mwWFEdXaIExhGOe88NkNj",
    thumbnail: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?q=80&w=800&auto=format&fit=crop",
    level: "Intermediate"
  },
  {
    title: "Advanced Vedic Mathematics",
    description: "Deep dive into complex algebra, geometry, and calculus applications using Vedic sutras.",
    link: "https://youtube.com/playlist?list=PLVacyNOHp_vu6TzYNXErKrbrrke8iosCq",
    thumbnail: "https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=800&auto=format&fit=crop",
    level: "Advanced"
  }
];

export default function Videos() {
  return (
    <div className="min-h-screen bg-[#F7F0E3] py-12 px-6 md:px-12 relative z-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#B8955E] font-mono text-sm tracking-widest uppercase mb-2 block">
            Curated Video Lessons
          </span>
          <h1 className="text-4xl md:text-5xl font-serif text-[#151411] mb-4">
            Video Library
          </h1>
          <p className="text-[#8E6B42] max-w-2xl mx-auto">
            Watch our hand-picked YouTube playlists to master Vedic Mathematics from the best instructors.
          </p>
        </div>

        {/* Playlist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PLAYLISTS.map((playlist, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl overflow-hidden border border-[#E8DDC8] shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col"
            >
              {/* Thumbnail */}
              <div className="relative h-48 overflow-hidden bg-[#151411]">
                <img 
                  src={playlist.thumbnail} 
                  alt={playlist.title} 
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 sepia-[0.4]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                
                {/* Play Icon Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <a 
                    href={playlist.link} 
                    target="_blank" 
                    rel="noreferrer"
                    className="w-16 h-16 bg-[#B8955E]/90 text-white rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform shadow-lg"
                  >
                    <PlayCircle size={32} />
                  </a>
                </div>

                {/* Level Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-[#151411]/80 backdrop-blur text-[#F7F0E3] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-[#33271D]">
                    {playlist.level}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-serif font-bold text-[#151411] mb-2 leading-tight">
                  {playlist.title}
                </h3>
                <p className="text-sm text-[#8E6B42] mb-6 flex-grow">
                  {playlist.description}
                </p>
                
                <a 
                  href={playlist.link} 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-full bg-[#F7F0E3] text-[#151411] py-3 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#151411] hover:text-[#F7F0E3] transition-colors"
                >
                  Watch Playlist <ExternalLink size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}