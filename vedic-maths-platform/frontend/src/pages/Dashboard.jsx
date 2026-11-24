import { useEffect, useState } from 'react';
import { supabase } from '../supabase';
import { useNavigate, Link } from 'react-router-dom';
import { BookOpen, Flame, Target, ArrowRight, PlayCircle, Award } from 'lucide-react';

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [enrollments, setEnrollments] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        navigate('/login');
        return;
      }
      
      setUser(session.user);

      // Fetch user's enrollments and join the batch and course data
      const { data, error } = await supabase
        .from('enrollments')
        .select(`
          id,
          batches (
            timing,
            mode,
            courses (title, level, description)
          )
        `)
        .eq('user_id', session.user.id);

      if (!error && data) {
        setEnrollments(data);
      }
      setLoading(false);
    };

    getData();
  }, [navigate]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-[#F7F0E3]">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#B8955E]"></div>
    </div>
  );
  
  if (!user) return null;

  const firstName = user.user_metadata.full_name?.split(' ')[0] || 'Student';

  return (
    <div className="min-h-screen bg-[#F7F0E3] pb-20">
      
      {/* =========================================
          PREMIUM HEADER BANNER
      ========================================= */}
      <div className="bg-[#151411] pt-32 pb-24 px-6 md:px-12 relative overflow-hidden rounded-b-[3rem] shadow-xl">
        {/* Background Texture */}
        <div className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none" 
             style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/black-paper.png")' }}>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <span className="text-[#B8955E] font-mono text-xs tracking-widest uppercase mb-2 block">
              Student Dashboard
            </span>
            <h1 className="text-4xl md:text-5xl font-serif text-[#F7F0E3] mb-3">
              Welcome back, <span className="italic text-[#B8955E]">{firstName}</span>.
            </h1>
            <p className="text-[#E8D6B7]/60 max-w-md">
              Your personal learning hub. Track your progress, continue your courses, and master Vedic Mathematics.
            </p>
          </div>
          
          <div className="flex gap-4">
             <Link to="/practice" className="bg-[#B8955E] text-[#151411] px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-white transition-colors flex items-center gap-2">
               Take a Quiz <Target size={16} />
             </Link>
             <button 
              onClick={handleLogout}
              className="border border-[#33271D] text-[#E8D6B7] px-6 py-3 rounded-full hover:bg-white/5 transition-colors text-sm font-medium uppercase tracking-wider"
            >
              Log Out
            </button>
          </div>
        </div>
      </div>

      {/* =========================================
          STATS CARDS (Floating over the header)
      ========================================= */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 -mt-12 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-[#E8DDC8]/50 flex items-center gap-5">
            <div className="w-14 h-14 bg-[#F7F0E3] rounded-xl flex items-center justify-center text-[#B8955E]">
              <BookOpen size={28} />
            </div>
            <div>
              <p className="text-xs text-[#8E6B42] uppercase tracking-wider font-bold mb-1">Enrolled Courses</p>
              <h3 className="text-3xl font-serif text-[#151411]">{enrollments.length}</h3>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg border border-[#E8DDC8]/50 flex items-center gap-5">
            <div className="w-14 h-14 bg-[#F7F0E3] rounded-xl flex items-center justify-center text-red-500">
              <Flame size={28} />
            </div>
            <div>
              <p className="text-xs text-[#8E6B42] uppercase tracking-wider font-bold mb-1">Current Streak</p>
              <h3 className="text-3xl font-serif text-[#151411]">5 Days</h3>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg border border-[#E8DDC8]/50 flex items-center gap-5">
            <div className="w-14 h-14 bg-[#F7F0E3] rounded-xl flex items-center justify-center text-green-600">
              <Award size={28} />
            </div>
            <div>
              <p className="text-xs text-[#8E6B42] uppercase tracking-wider font-bold mb-1">Quiz Accuracy</p>
              <h3 className="text-3xl font-serif text-[#151411]">82%</h3>
            </div>
          </div>

        </div>
      </div>

      {/* =========================================
          MY COURSES SECTION
      ========================================= */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16">
        <div className="flex justify-between items-end mb-8 border-b border-[#E8DDC8] pb-4">
          <div>
            <h2 className="text-3xl font-serif text-[#151411]">My Learning Paths</h2>
            <p className="text-[#8E6B42] text-sm mt-1">Continue where you left off</p>
          </div>
          <Link to="/courses" className="text-sm font-bold text-[#B8955E] hover:text-[#151411] transition-colors flex items-center gap-1">
            Browse More <ArrowRight size={16} />
          </Link>
        </div>
        
        {enrollments.length === 0 ? (
          <div className="bg-white p-12 rounded-3xl text-center border border-[#E8DDC8] shadow-sm">
            <BookOpen size={48} className="mx-auto text-[#E8DDC8] mb-4" />
            <h3 className="text-xl font-serif text-[#151411] mb-2">No active courses yet</h3>
            <p className="text-[#8E6B42] mb-6 max-w-md mx-auto">You haven't enrolled in any batches. Explore our curriculum and start your Vedic Maths journey today.</p>
            <Link to="/batches" className="bg-[#151411] text-[#F7F0E3] px-8 py-3 rounded-full text-sm font-medium hover:bg-[#B8955E] transition-colors">
              View Available Batches
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {enrollments.map((enrollment) => (
              <div key={enrollment.id} className="bg-white rounded-2xl overflow-hidden border border-[#E8DDC8] shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row group">
                
                {/* Image Area */}
                <div className="w-full md:w-2/5 h-48 md:h-auto relative overflow-hidden bg-[#151411]">
                  <img 
                    src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=800&auto=format&fit=crop" 
                    alt="Course" 
                    className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700 sepia-[0.3]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#151411] via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-white/10"></div>
                  
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur text-[#151411] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                    {enrollment.batches.courses.level}
                  </span>
                </div>

                {/* Content Area */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-2 h-2 rounded-full bg-green-500"></span>
                      <p className="text-[10px] font-bold text-[#8E6B42] uppercase tracking-wider">Active Batch</p>
                    </div>
                    <h3 className="text-xl font-serif font-bold text-[#151411] leading-tight mb-2">
                      {enrollment.batches.courses.title}
                    </h3>
                    <p className="text-sm text-[#8E6B42] mb-4 line-clamp-2">
                      {enrollment.batches.courses.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-[#F7F0E3]">
                    <div className="text-xs text-[#151411]/60 font-medium">
                      {enrollment.batches.mode === 'online' ? '💻 Online' : '📍 Offline'} • {enrollment.batches.timing}
                    </div>
                    <button className="flex items-center gap-1 text-sm font-bold text-[#B8955E] hover:text-[#151411] transition-colors">
                      Resume <PlayCircle size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
}