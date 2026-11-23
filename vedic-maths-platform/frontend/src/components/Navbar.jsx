import { useState, useEffect } from 'react';
import { Menu, X, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { supabase } from '../supabase';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [session, setSession] = useState(null);
  const location = useLocation();

  useEffect(() => { setIsOpen(false); }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => setSession(session));
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => setSession(session));
    return () => subscription.unsubscribe();
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled || isOpen ? 'bg-brand-ivory/95 backdrop-blur-md py-3 shadow-sm border-b border-brand-parchment' : 'bg-brand-ivory py-5'
    } px-6 md:px-12`}>
      
      <div className="flex justify-between items-center w-full">
        
        {/* THE ARCHITECT LOGO */}
        <Link to="/" className="flex items-center gap-3 group z-50">
          <div className="relative w-10 h-10 flex items-center justify-center">
            {/* Geometric Compass SVG */}
            <svg viewBox="0 0 100 100" className="w-full h-full text-brand-gold transition-transform group-hover:rotate-12 duration-500">
              <path d="M50 10 L40 60 L50 90 L60 60 Z" fill="none" stroke="currentColor" strokeWidth="3"/>
              <circle cx="50" cy="40" r="20" fill="none" stroke="currentColor" strokeWidth="1"/>
              <line x1="20" y1="60" x2="80" y2="60" stroke="currentColor" strokeWidth="1"/>
              <circle cx="50" cy="40" r="2" fill="currentColor"/>
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-xl tracking-tight text-brand-ink leading-none">
              VedicMaths
            </span>
            <span className="text-[9px] tracking-[0.25em] text-brand-bronze uppercase font-semibold mt-1">
              Academy
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-[14px] font-medium text-brand-walnut tracking-wide z-50">
          <Link to="/" className={`hover:text-brand-gold transition-colors ${location.pathname === '/' ? 'text-brand-gold border-b border-brand-gold' : ''}`}>Home</Link>
          <Link to="/courses" className={`hover:text-brand-gold transition-colors ${location.pathname === '/courses' ? 'text-brand-gold border-b border-brand-gold' : ''}`}>Courses</Link>
          <Link to="/batches" className={`hover:text-brand-gold transition-colors ${location.pathname === '/batches' ? 'text-brand-gold border-b border-brand-gold' : ''}`}>Batches</Link>
          <Link to="/practice" className={`hover:text-brand-gold transition-colors ${location.pathname === '/practice' ? 'text-brand-gold border-b border-brand-gold' : ''}`}>Practice</Link>
          <Link to="/notes" className={`hover:text-brand-gold transition-colors ${location.pathname === '/notes' ? 'text-brand-gold border-b border-brand-gold' : ''}`}>Notes</Link>
        </div>

        {/* Auth Button */}
        <div className="hidden md:block z-50">
          {session ? (
             <Link to="/dashboard" className="bg-brand-ink text-brand-ivory px-6 py-2.5 rounded-sm text-xs tracking-wider uppercase font-semibold hover:bg-brand-gold transition-all duration-300 flex items-center gap-2">
             <User size={14} /> Dashboard
           </Link>
          ) : (
            <Link to="/login" className="bg-brand-ink text-brand-ivory px-7 py-2.5 rounded-sm text-xs tracking-wider uppercase font-semibold hover:bg-brand-gold transition-all duration-300 hover:shadow-lg">
              Enroll Now
            </Link>
          )}
        </div>

        <button className="md:hidden text-brand-ink z-50 p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-brand-ivory border-b border-brand-parchment shadow-lg transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col px-6 gap-4 text-brand-walnut font-medium text-sm">
          <Link to="/" className="hover:text-brand-gold py-2 uppercase tracking-wide">Home</Link>
          <Link to="/courses" className="hover:text-brand-gold py-2 uppercase tracking-wide">Courses</Link>
          <Link to="/batches" className="hover:text-brand-gold py-2 uppercase tracking-wide">Batches</Link>
          <Link to="/practice" className="hover:text-brand-gold py-2 uppercase tracking-wide">Practice</Link>
          <Link to="/notes" className="hover:text-brand-gold py-2 uppercase tracking-wide">Notes</Link>
          {session ? (
            <Link to="/dashboard" className="bg-brand-ink text-brand-ivory text-center px-6 py-3 mt-2 mb-4 flex items-center justify-center gap-2 rounded-sm uppercase text-xs tracking-wider">
              <User size={16} /> Dashboard
            </Link>
          ) : (
            <Link to="/login" className="bg-brand-ink text-brand-ivory text-center px-6 py-3 mt-2 mb-4 rounded-sm uppercase text-xs tracking-wider">Enroll Now</Link>
          )}
        </div>
      </div>
    </nav>
  );
}