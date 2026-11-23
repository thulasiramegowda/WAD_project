import { useState, useEffect } from 'react';
import { supabase } from '../supabase';
import { Download, Upload } from 'lucide-react';

export default function Notes() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    const { data } = await supabase.from('notes').select('*').order('created_at', { ascending: false });
    if (data) setNotes(data);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file || !title) return alert('Add title and file');
    setUploading(true);

    // 1. Upload file to Storage
    const fileExt = file.name.split('.').pop();
    const fileName = `${Math.random()}.${fileExt}`;
    const { error: uploadError } = await supabase.storage.from('notes').upload(fileName, file);
    
    if (uploadError) { alert(uploadError.message); setUploading(false); return; }

    // 2. Get public URL
    const { data: { publicUrl } } = supabase.storage.from('notes').getPublicUrl(fileName);

    // 3. Save to database
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) { alert('Login first!'); setUploading(false); return; }

    await supabase.from('notes').insert({
      title,
      file_url: publicUrl,
      user_id: session.user.id
    });

    setTitle(''); setFile(null); setUploading(false);
    fetchNotes();
  };

  return (
    <div className="max-w-5xl mx-auto p-8 md:p-12">
      <h1 className="text-4xl font-serif mb-8">Student Notes</h1>

      {/* Upload Form */}
      <form onSubmit={handleUpload} className="bg-white p-6 rounded-2xl shadow-sm border border-brand-beige/50 mb-10 flex flex-col md:flex-row gap-4 items-end">
        <div className="flex-1 w-full">
          <label className="block text-sm mb-1">Note Title</label>
          <input type="text" value={title} onChange={e => setTitle(e.target.value)} className="w-full border p-2 rounded-lg" placeholder="e.g. Multiplication Tricks" />
        </div>
        <div className="flex-1 w-full">
          <label className="block text-sm mb-1">File (PDF/Image)</label>
          <input type="file" onChange={e => setFile(e.target.files[0])} className="w-full border p-1.5 rounded-lg" />
        </div>
        <button disabled={uploading} type="submit" className="bg-brand-dark text-white px-6 py-2.5 rounded-lg flex items-center gap-2 hover:bg-brand-gold">
          <Upload size={18} /> {uploading ? 'Uploading...' : 'Upload'}
        </button>
      </form>

      {/* Notes List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {notes.map(note => (
          <div key={note.id} className="bg-white p-6 rounded-2xl border border-brand-beige/50 shadow-sm flex flex-col justify-between">
            <h3 className="font-serif text-xl mb-4">{note.title}</h3>
            <a href={note.file_url} target="_blank" rel="noreferrer" className="text-brand-gold flex items-center gap-2 text-sm font-semibold hover:underline">
              <Download size={16} /> Download File
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}