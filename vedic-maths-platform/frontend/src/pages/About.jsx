import { useState, useEffect } from 'react';
import { supabase } from '../supabase';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, PlayCircle, BookOpen, Target } from 'lucide-react';

const ALL_TOPICS = ['Fast Multiplication', 'Squaring Techniques', 'Division Tricks', 'Mental Addition', 'Decimal Calculations'];

export default function About() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  
  const [bio, setBio] = useState('');
  const [selectedTopics, setSelectedTopics] = useState([]); // Fixed variable name
  
  const navigate = useNavigate();

  useEffect(() => {
    const getProfile = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) { 
        // If not logged in, send them to login
        navigate('/login'); 
        return; 
      }
      
      setUser(session.user);

      // Fetch existing profile
      const { data } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', session.user.id)
        .single();
      
      if (data) {
        setBio(data.bio || '');
        setSelectedTopics(data.interested_topics || []);
      }
      setLoading(false);
    };
    getProfile();
  }, [navigate]);

  const toggleTopic = (topic) => {
    if (selectedTopics.includes(topic)) {
      setSelectedTopics(selectedTopics.filter(t => t !== topic));
    } else {
      setSelectedTopics([...selectedTopics, topic]);
    }
  };

  const handleSave = async () => {
    setSaving(true);
    const { error } = await supabase.from('profiles').upsert({
      id: user.id,
      bio,
      interested_topics: selectedTopics
    });
    
    if (error) {
      alert("Error saving profile: " + error.message);
    } else {
      alert("Profile saved! Check your recommendations below.");
    }
    setSaving(false);
  };

  if (loading) return <div className="text-center py-20 text-brand-ink font-serif text-2xl">Loading profile...</div>;

  return (
    <div className="max-w-6xl mx-auto p-8 md:p-12">
      
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-serif text-brand-ink mb-4">Your Learning Profile</h1>
        <p className="text-brand-walnut max-w-2xl mx-auto">
          Tell us what you want to learn, and we will build a personalized Vedic Maths curriculum just for you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* LEFT: SETUP FORM */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-brand-beige/50">
          <h2 className="text-2xl font-serif mb-6 flex items-center gap-2 text-brand-ink">
            <Target className="text-brand-gold" /> Setup Your Goals
          </h2>

          <div className="mb-6">
            <label className="block text-sm font-medium text-brand-ink mb-2">Short Bio</label>
            <textarea 
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              placeholder="e.g. I'm a student preparing for competitive exams..."
              className="w-full border border-brand-beige p-3 rounded-xl focus:outline-none focus:border-brand-gold bg-brand-ivory/50 h-32 text-brand-ink"
            />
          </div>

          <div className="mb-8">
            <label className="block text-sm font-medium text-brand-ink mb-3">What topics interest you?</label>
            <div className="flex flex-wrap gap-3">
              {ALL_TOPICS.map(topic => (
                <button
                  key={topic}
                  onClick={() => toggleTopic(topic)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${
                    selectedTopics.includes(topic) 
                      ? 'bg-brand-ink text-brand-ivory border-brand-ink' 
                      : 'bg-white text-brand-walnut border-brand-beige hover:border-brand-gold'
                  }`}
                >
                  {topic}
                </button>
              ))}
            </div>
          </div>

          <button 
            onClick={handleSave}
            disabled={saving}
            className="w-full bg-brand-gold text-brand-ink font-bold py-3 rounded-xl hover:bg-brand-ink hover:text-brand-ivory transition-colors"
          >
            {saving ? 'Saving...' : 'Save & Get Recommendations'}
          </button>
        </div>

        {/* RIGHT: RECOMMENDATIONS */}
        <div>
          <h2 className="text-2xl font-serif mb-6 flex items-center gap-2 text-brand-ink">
            <BookOpen className="text-brand-gold" /> Recommended For You
          </h2>

          {selectedTopics.length === 0 ? (
            <div className="bg-brand-ivory/50 p-8 rounded-3xl border border-brand-beige text-center text-brand-walnut">
              Select some topics on the left to see your personalized classes, videos, and quizzes!
            </div>
          ) : (
            <div className="space-y-4">
              {selectedTopics.map(topic => (
                <div key={topic} className="bg-white p-6 rounded-2xl border border-brand-beige/50 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div>
                    <h3 className="font-serif text-xl font-semibold mb-1 text-brand-ink">{topic}</h3>
                    <p className="text-xs text-brand-bronze uppercase tracking-wide font-mono mb-2">Tailored Module</p>
                  </div>
                  <div className="flex gap-2">
                    <button 
                      onClick={() => navigate('/practice')}
                      className="p-2 bg-brand-ivory rounded-lg text-brand-ink hover:bg-brand-gold transition-colors" title="Practice Quiz"
                    >
                      <CheckCircle size={20} />
                    </button>
                    <button 
                      onClick={() => window.open('https://www.youtube.com/results?search_query=vedic+maths+' + topic.replace(' ', '+'), '_blank')}
                      className="p-2 bg-brand-ivory rounded-lg text-brand-ink hover:bg-red-500 hover:text-white transition-colors" title="Watch Videos"
                    >
                      <PlayCircle size={20} />
                    </button>
                  </div>
                </div>
              ))}
              
              <div className="mt-8 bg-brand-ink p-6 rounded-2xl text-brand-ivory">
                <h4 className="font-serif text-lg mb-2">Ready for a 1-on-1 Session?</h4>
                <p className="text-sm text-brand-parchment/70 mb-4">Based on your selected topics, we recommend joining our Advanced Batch.</p>
                <button onClick={() => navigate('/batches')} className="bg-brand-gold text-brand-ink px-6 py-2 rounded-full text-sm font-bold">
                  View Batches
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}