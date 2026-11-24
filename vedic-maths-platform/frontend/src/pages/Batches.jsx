import { useState, useEffect } from 'react';
import { supabase } from '../supabase';
import { useNavigate } from 'react-router-dom';
import { MapPin, Video, Calendar, Clock, Users } from 'lucide-react';

export default function Batches() {
  const [batches, setBatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchBatches();
  }, []);

  const fetchBatches = async () => {
    const { data, error } = await supabase
      .from('batches')
      .select(`
        *,
        courses (title, level)
      `)
      .order('created_at', { ascending: true });
    
    if (!error) setBatches(data);
    setLoading(false);
  };

  const handleEnroll = async (batchId) => {
    setMessage('');
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      navigate('/login');
      return;
    }

    const { error } = await supabase
      .from('enrollments')
      .insert({ user_id: session.user.id, batch_id: batchId });

    if (error) {
      if (error.code === '23505') setMessage('You are already enrolled in this batch!');
      else setMessage('Error enrolling: ' + error.message);
    } else {
      setMessage('Successfully enrolled! Check your dashboard.');
      setTimeout(() => navigate('/dashboard'), 2000);
    }
  };

  if (loading) return <div className="text-center py-20 font-mono text-brand-bronze">Loading batches...</div>;

  return (
    <div className="max-w-7xl mx-auto p-8 md:p-12">
      <h1 className="text-4xl font-serif text-brand-ink mb-2">Available Batches</h1>
      <p className="text-brand-walnut mb-8">Choose between our premium online and offline coaching options.</p>

      {message && (
        <div className="bg-brand-gold/20 text-brand-ink p-4 rounded-xl mb-8 border border-brand-gold">
          {message}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {batches.map((batch) => (
          <div key={batch.id} className="bg-white rounded-2xl p-6 shadow-sm border border-brand-beige/50 flex flex-col hover:shadow-md transition-shadow">
            
            <div className="flex justify-between items-start mb-4">
              <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                batch.mode === 'online' ? 'bg-blue-100 text-blue-700' : 'bg-orange-100 text-orange-700'
              }`}>
                {batch.mode}
              </span>
              <span className={`text-xs font-mono font-bold px-2 py-1 rounded-md ${
                batch.seats_left > 0 ? 'text-green-700 bg-green-50' : 'text-red-600 bg-red-50'
              }`}>
                {batch.seats_left > 0 ? `${batch.seats_left} seats left` : 'Batch Full'}
              </span>
            </div>

            <h2 className="text-xl font-serif font-semibold mb-1 text-brand-ink">{batch.courses?.title}</h2>
            <p className="text-xs text-brand-bronze uppercase tracking-wider mb-6">{batch.courses?.level} Level</p>

            <div className="space-y-3 mb-8 flex-grow">
              <div className="flex items-center gap-3 text-brand-walnut text-sm">
                <Calendar size={16} className="text-brand-gold" /> Starts: {batch.start_date}
              </div>
              <div className="flex items-center gap-3 text-brand-walnut text-sm">
                <Clock size={16} className="text-brand-gold" /> {batch.timing}
              </div>
              <div className="flex items-center gap-3 text-brand-walnut text-sm">
                {batch.mode === 'online' ? (
                  <><Video size={16} className="text-brand-gold" /> Online Session</>
                ) : (
                  <><MapPin size={16} className="text-brand-gold" /> {batch.location}</>
                )}
              </div>
            </div>

            <button 
              onClick={() => handleEnroll(batch.id)}
              disabled={batch.seats_left <= 0}
              className="w-full bg-brand-ink text-brand-ivory py-3 rounded-xl font-medium hover:bg-brand-gold transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed text-sm uppercase tracking-wide"
            >
              {batch.seats_left > 0 ? 'Enroll Now' : 'Batch Full'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}