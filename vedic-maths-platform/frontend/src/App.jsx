import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingBackground from './components/FloatingBackground'; // Import it

import Home from './pages/Home';
import Courses from './pages/Courses';
import Batches from './pages/Batches';
import Practice from './pages/Practice';
import Notes from './pages/Notes';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Admin from './pages/Admin';
import About from './pages/About';
import Videos from './pages/Videos';

// We create a separate component to use useLocation() inside the Router
function AppContent() {
  const location = useLocation();
  
  // Check if we are on the homepage
  const isHome = location.pathname === '/';

  return (
    <div className="min-h-screen bg-brand-ivory font-sans selection:bg-brand-gold selection:text-white flex flex-col relative">
      
      {/* Show floating background ONLY if we are NOT on the homepage */}
      {!isHome && <FloatingBackground />}
      
      <Navbar />
      
      <main className="flex-grow pt-24 relative z-10">
        <Routes>
          <Route path="/videos" element={<Videos />} />
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/batches" element={<Batches />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}