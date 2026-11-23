import { useEffect, useState } from 'react';
import { supabase } from '../supabase';
import { useNavigate } from 'react-router-dom';
import { BookOpen } from 'lucide-react';

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
            courses (title, level)
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

  if (loading) return <div className="text-center py-20">Loading dashboard...</div>;
  if (!user) return null;

  return (
    <div className="max-w-7xl mx-auto p-8 md:p-12">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-4xl font-serif text-brand-dark mb-2">
            Welcome, {user.user_metadata.full_name || 'Student'}!
          </h1>
          <p className="text-brand-text">Here is your learning overview.</p>
        </div>
        <button 
          onClick={handleLogout}
          className="border border-brand-dark text-brand-dark px-6 py-2 rounded-full hover:bg-brand-dark hover:text-white transition-colors text-sm font-medium"
        >
          Log Out
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: My Enrollments */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-serif mb-6 flex items-center gap-2">
            <BookOpen className="text-brand-gold" /> My Enrolled Batches
          </h2>
          
          {enrollments.length === 0 ? (
            <div className="bg-white p-8 rounded-2xl text-center border border-brand-beige/50">
              <p className="text-brand-text mb-4">You haven't enrolled in any batches yet.</p>
              <button onClick={() => navigate('/batches')} className="bg-brand-dark text-white px-6 py-2 rounded-full text-sm">
                Browse Batches
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {enrollments.map((enrollment) => (
                <div key={enrollment.id} className="bg-white p-6 rounded-2xl border border-brand-beige/50 shadow-sm flex justify-between items-center">
                  <div>
                    <span className="text-xs font-bold text-brand-gold uppercase">{enrollment.batches.courses.level}</span>
                    <h3 className="text-xl font-serif font-semibold text-brand-dark">{enrollment.batches.courses.title}</h3>
                    <p className="text-sm text-brand-text mt-1">
                      {enrollment.batches.mode === 'online' ? 'Online' : 'Offline'} • {enrollment.batches.timing}
                    </p>
                  </div>
                  <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                    Active
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right Column: Stats */}
        <div className="space-y-6">
          <div className="bg-brand-dark text-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-brand-gold font-semibold mb-2">Total Courses</h3>
            <p className="text-5xl font-serif">{enrollments.length}</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-brand-beige/50">
            <h3 className="text-brand-text font-semibold mb-2">Current Streak</h3>
            <p className="text-5xl font-serif text-brand-dark">5 Days 🔥</p>
          </div>
        </div>

      </div>
    </div>
  );
}