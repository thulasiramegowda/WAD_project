import { useState, useEffect } from 'react';
import { supabase } from '../supabase';
import { Download, Upload, FileText } from 'lucide-react';

export default function Notes() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    const { data } = await supabase.from('notes').select('*').order('created_at', { ascending: false });
    if (data) setNotes(data);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file || !title) return alert('Please add a title and select a file');
    setUploading(true);
    setMessage('');

    try {
      // 1. Check Auth
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) throw new Error("You must be logged in to upload.");

      // 2. Upload file to Storage
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const { error: uploadError } = await supabase.storage.from('notes').upload(fileName, file);
      
      if (uploadError) throw uploadError;

      // 3. Get public URL
      const { data: { publicUrl } } = supabase.storage.from('notes').getPublicUrl(fileName);

      // 4. Save to database
      const { error: dbError } = await supabase.from('notes').insert({
        title,
        file_url: publicUrl,
        user_id: session.user.id
      });

      if (dbError) throw dbError;

      setMessage('Note uploaded successfully!');
      setTitle(''); 
      setFile(null); 
      fetchNotes(); // Refresh list
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-8 md:p-12">
      <h1 className="text-4xl font-serif mb-4">Student Notes</h1>
      <p className="text-brand-walnut mb-8">Share and download mathematical techniques.</p>

      {message && (
        <div className="bg-brand-ivory border border-brand-gold text-brand-ink p-4 rounded-xl mb-8">
          {message}
        </div>
      )}

      {/* Upload Form */}
      <form onSubmit={handleUpload} className="bg-white p-6 rounded-2xl shadow-sm border border-brand-beige/50 mb-10 flex flex-col md:flex-row gap-4 items-end">
        <div className="flex-1 w-full">
          <label className="block text-sm font-medium mb-2 text-brand-ink">Note Title</label>
          <input 
            type="text" 
            value={title} 
            onChange={e => setTitle(e.target.value)} 
            className="w-full border border-brand-beige p-3 rounded-lg focus:outline-none focus:border-brand-gold bg-brand-ivory/50" 
            placeholder="e.g. Multiplication Tricks" 
          />
        </div>
        <div className="flex-1 w-full">
          <label className="block text-sm font-medium mb-2 text-brand-ink">File (PDF/Image)</label>
          <input 
            type="file" 
            onChange={e => setFile(e.target.files[0])} 
            className="w-full border border-brand-beige p-2 rounded-lg bg-brand-ivory/50 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-brand-ink file:text-brand-ivory hover:file:bg-brand-gold" 
          />
        </div>
        <button 
          disabled={uploading} 
          type="submit" 
          className="bg-brand-ink text-brand-ivory px-8 py-3 rounded-lg flex items-center gap-2 hover:bg-brand-gold transition-colors w-full md:w-auto justify-center"
        >
          <Upload size={18} /> {uploading ? 'Uploading...' : 'Upload'}
        </button>
      </form>

      {/* Notes List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {notes.length === 0 ? (
          <p className="text-brand-walnut col-span-full">No notes uploaded yet. Be the first!</p>
        ) : (
          notes.map(note => (
            <div key={note.id} className="bg-white p-6 rounded-2xl border border-brand-beige/50 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3 mb-4">
                <div className="bg-brand-ivory p-2 rounded-lg text-brand-gold shrink-0">
                  <FileText size={24} />
                </div>
                <h3 className="font-serif text-xl text-brand-ink leading-tight">{note.title}</h3>
              </div>
              
              <a 
                href={note.file_url} 
                target="_blank" 
                rel="noreferrer" 
                className="text-brand-gold flex items-center gap-2 text-sm font-semibold hover:text-brand-ink transition-colors mt-4 border-t border-brand-parchment pt-4"
              >
                <Download size={16} /> Download Note
              </a>
            </div>
          ))
        )}
      </div>
    </div>
  );
}