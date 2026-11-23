import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// Importing all the pages we created
import Courses from './pages/Courses';
import Batches from './pages/Batches';
import Practice from './pages/Practice';
import Notes from './pages/Notes';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Admin from './pages/Admin';
import Home from './pages/Home'; 

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-brand-bg font-sans selection:bg-brand-gold selection:text-white flex flex-col">
        <Navbar />
        
        {/* Main content area - pt-24 pushes it below the fixed navbar */}
        <main className="flex-grow pt-24">
          <Routes>
            <Route path="/" element={<Home />} /> {/* <--- Change this line */}
            <Route path="/courses" element={<Courses />} />
            <Route path="/batches" element={<Batches />} />
            <Route path="/" element={<Hero />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/batches" element={<Batches />} />
            <Route path="/practice" element={<Practice />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;