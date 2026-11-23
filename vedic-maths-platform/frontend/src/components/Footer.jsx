import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white py-12 mt-20 border-t border-brand-gold/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center text-white font-serif italic text-lg">π</div>
            <span className="font-serif font-bold text-xl">VedicMaths Academy</span>
          </div>
          <p className="text-gray-400 text-sm max-w-sm mb-6">
            Elevating mental calculation through ancient Vedic sutras. Join our premium online and offline coaching to master the art of numbers.
          </p>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-4 text-brand-gold">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link to="/" className="hover:text-white transition">Home</Link></li>
            <li><Link to="/courses" className="hover:text-white transition">Courses</Link></li>
            <li><Link to="/batches" className="hover:text-white transition">Batches</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-4 text-brand-gold">Contact</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>hello@vedicmaths.com</li>
            <li>+91 98765 43210</li>
            <li>Mumbai, India</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12 pt-8 border-t border-gray-800 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} VedicMaths Academy. All rights reserved.
      </div>
    </footer>
  );
}