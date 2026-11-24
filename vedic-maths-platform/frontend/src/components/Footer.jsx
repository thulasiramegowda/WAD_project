import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#151411] text-[#E8D6B7] py-12 border-t border-[#33271D]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
             <svg viewBox="0 0 100 100" className="w-8 h-8 text-[#B8955E]">
               <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2"/>
               <path d="M50 10 L40 60 L50 90 L60 60 Z" fill="none" stroke="currentColor" strokeWidth="2"/>
               <line x1="20" y1="60" x2="80" y2="60" stroke="currentColor" strokeWidth="1"/>
            </svg>
            <span className="font-serif font-bold text-xl text-[#F7F0E3]">VedicMaths Academy</span>
          </div>
          <p className="text-[#E8D6B7]/60 text-sm max-w-sm mb-6">
            Elevating mental calculation through ancient Vedic sutras. Join our premium online and offline coaching to master the art of numbers.
          </p>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-4 text-[#B8955E]">Quick Links</h4>
          <ul className="space-y-2 text-sm text-[#E8D6B7]/60">
            <li><Link to="/" className="hover:text-[#B8955E] transition">Home</Link></li>
            <li><Link to="/courses" className="hover:text-[#B8955E] transition">Courses</Link></li>
            <li><Link to="/batches" className="hover:text-[#B8955E] transition">Batches</Link></li>
            <li><Link to="/practice" className="hover:text-[#B8955E] transition">Practice</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-4 text-[#B8955E]">Contact</h4>
          <ul className="space-y-2 text-sm text-[#E8D6B7]/60">
            <li>hello@vedicmaths.com</li>
            <li>+91 98765 43210</li>
            <li>Mumbai, India</li>
          </ul>
        </div>
      </div>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mt-12 pt-8 border-t border-[#33271D] text-center text-xs text-[#E8D6B7]/40 font-mono">
        © {new Date().getFullYear()} VedicMaths Academy. All rights reserved.
      </div>
    </footer>
  );
}