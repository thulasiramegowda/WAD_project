import { useState, useEffect } from 'react';
import { supabase } from '../supabase';
import { useNavigate } from 'react-router-dom';
import { MapPin, Video, Calendar, Clock } from 'lucide-react';

export default function Batches() {
  const [batches, setBatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchBatches();
  }, []);

  const fetchBatches = async () => {
    // Fetch batches and join the course title
    const { data, error } = await supabase
      .from('batches')
      .select(`
        *,
        courses (title, level)
      `);
    
    if (!error) setBatches(data);
    setLoading(false);
  };

  const handleEnroll = async (batchId) => {
    setMessage('');
    
    // 1. Check if user is logged in
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      // Not logged in? Send to login page
      navigate('/login');
      return;
    }

    // 2. Save enrollment to database
    const { error } = await supabase
      .from('enrollments')
      .insert({
        user_id: session.user.id,
        batch_id: batchId,
      });

    if (error) {
      if (error.code === '23505') { // Postgres error code for unique violation
        setMessage('You are already enrolled in this batch!');
      } else {
        setMessage('Error enrolling: ' + error.message);
      }
    } else {
      setMessage('Successfully enrolled! Check your dashboard.');
      setTimeout(() => navigate('/dashboard'), 2000);
    }
  };

  if (loading) return <div className="text-center py-20">Loading batches...</div>;

  return (
    <div className="max-w-7xl mx-auto p-8 md:p-12">
      <h1 className="text-4xl font-serif text-brand-dark mb-4">Available Batches</h1>
      <p className="text-brand-text mb-8">Choose between our premium online and offline coaching options.</p>

      {message && (
        <div className="bg-brand-gold/20 text-brand-dark p-4 rounded-xl mb-8 border border-brand-gold">
          {message}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {batches.map((batch) => (
          <div key={batch.id} className="bg-white rounded-2xl p-6 shadow-sm border border-brand-beige/50 flex flex-col">
            
            <div className="flex justify-between items-start mb-4">
              <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                batch.mode === 'online' ? 'bg-blue-100 text-blue-700' : 'bg-orange-100 text-orange-700'
              }`}>
                {batch.mode}
              </span>
              <span className="text-sm font-medium text-brand-gold">
                {batch.seats_left} seats left
              </span>
            </div>

            <h2 className="text-xl font-serif font-semibold mb-1">{batch.courses?.title}</h2>
            <p className="text-sm text-brand-text mb-6">{batch.courses?.level} Level</p>

            <div className="space-y-3 mb-8 flex-grow">
              <div className="flex items-center gap-3 text-brand-text text-sm">
                <Calendar size={18} className="text-brand-gold" />
                Starts: {batch.start_date}
              </div>
              <div className="flex items-center gap-3 text-brand-text text-sm">
                <Clock size={18} className="text-brand-gold" />
                {batch.timing}
              </div>
              <div className="flex items-center gap-3 text-brand-text text-sm">
                {batch.mode === 'online' ? (
                  <><Video size={18} className="text-brand-gold" /> Online (Zoom)</>
                ) : (
                  <><MapPin size={18} className="text-brand-gold" /> {batch.location}</>
                )}
              </div>
            </div>

            <button 
              onClick={() => handleEnroll(batch.id)}
              disabled={batch.seats_left <= 0}
              className="w-full bg-brand-dark text-white py-3 rounded-xl font-medium hover:bg-brand-gold transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              {batch.seats_left > 0 ? 'Enroll Now' : 'Batch Full'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}