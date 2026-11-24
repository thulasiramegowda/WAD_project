import { useState, useEffect } from 'react';
import { supabase } from '../supabase';
import { Star, Users, Clock, BookOpen, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

// A simple placeholder syllabus based on the level
const getSyllabus = (level) => {
  if (level === 'Beginner') return ['Introduction to Sutras', 'Basic Addition & Subtraction', 'Multiplication by 9, 99, 999'];
  if (level === 'Intermediate') return ['Squaring 2-digit numbers', 'Cubing techniques', 'Division shortcuts'];
  return ['Vedic Geometry', 'Advanced Algebra', 'Calculus applications'];
};

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedCourse, setExpandedCourse] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      const { data, error } = await supabase.from('courses').select('*');
      
      if (error) {
        console.error('Error fetching courses:', error);
      } else {
        setCourses(data);
      }
      setLoading(false);
    };

    fetchCourses();
  }, []);

  const toggleDetails = (id) => {
    setExpandedCourse(expandedCourse === id ? null : id);
  };

  return (
    <div className="max-w-7xl mx-auto p-8 md:p-12 min-h-screen">
      
      {/* Header */}
      <div className="mb-12 border-b border-brand-beige pb-6">
        <h1 className="text-4xl md:text-5xl font-serif text-brand-ink mb-3">Explore Our Curriculum</h1>
        <p className="text-brand-walnut max-w-2xl text-lg">
          Master ancient mathematical techniques with our premium, scholar-led courses.
        </p>
      </div>
      
      {loading ? (
        <div className="text-center py-20 text-brand-bronze font-mono animate-pulse">Loading courses...</div>
      ) : courses.length === 0 ? (
        <p className="text-brand-walnut text-center py-20">No courses found. Add some in Supabase!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => {
            const isExpanded = expandedCourse === course.id;
            
            return (
              <div 
                key={course.id} 
                className={`bg-white rounded-2xl shadow-sm border transition-all duration-300 overflow-hidden flex flex-col ${
                  isExpanded ? 'border-brand-gold shadow-lg ring-1 ring-brand-gold/20' : 'border-brand-beige/50 hover:shadow-md'
                }`}
              >
                <div className="p-6 md:p-8 flex-grow">
                  {/* Level Badge & Rating */}
                  <div className="flex justify-between items-start mb-4">
                    <span className="bg-brand-ivory text-brand-bronze text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-brand-parchment">
                      {course.level}
                    </span>
                    <div className="flex items-center gap-1 text-brand-ink font-medium text-sm">
                      <Star size={16} className="text-brand-gold fill-brand-gold" />
                      {course.rating || '4.8'}
                    </div>
                  </div>

                  {/* Title & Desc */}
                  <h2 className="text-2xl font-serif text-brand-ink mb-3 leading-tight">{course.title}</h2>
                  <p className="text-brand-walnut text-sm mb-6 line-clamp-2">
                    {course.description}
                  </p>

                  {/* Instructor Info */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-brand-dark flex items-center justify-center text-brand-ivory font-serif italic text-lg">
                      {course.instructor ? course.instructor.charAt(0) : 'V'}
                    </div>
                    <div>
                      <p className="text-xs text-brand-walnut/60 uppercase tracking-wider font-semibold">Instructor</p>
                      <p className="text-sm font-medium text-brand-ink">{course.instructor || 'Vedic Scholar'}</p>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center gap-4 text-xs text-brand-walnut/70 font-mono border-t border-brand-parchment/50 pt-4">
                    <span className="flex items-center gap-1"><Users size={14} /> {course.students_enrolled || 500} students</span>
                    <span className="flex items-center gap-1"><Clock size={14} /> 8 Weeks</span>
                  </div>
                </div>

                {/* Expandable Syllabus Section */}
                <div className={`bg-brand-ivory/50 px-6 md:px-8 transition-all duration-300 overflow-hidden ${isExpanded ? 'max-h-96 py-6 border-t border-brand-parchment' : 'max-h-0 py-0'}`}>
                  <h4 className="font-serif text-lg mb-3 flex items-center gap-2 text-brand-ink">
                    <BookOpen size={18} className="text-brand-gold" /> Course Syllabus
                  </h4>
                  <ul className="space-y-2 mb-4">
                    {getSyllabus(course.level).map((item, i) => (
                      <li key={i} className="text-sm text-brand-walnut flex items-start gap-2">
                        <span className="text-brand-gold mt-0.5">•</span> {item}
                      </li>
                    ))}
                  </ul>
                  <Link to="/batches" className="text-xs font-bold uppercase tracking-wider text-brand-ink hover:text-brand-gold transition-colors">
                    View Available Batches →
                  </Link>
                </div>

                {/* Footer Action */}
                <div className="p-6 md:px-8 border-t border-brand-beige/50 flex justify-between items-center bg-white">
                  <div>
                    <p className="text-xs text-brand-walnut/60 uppercase tracking-wider font-semibold mb-1">Course Fee</p>
                    <p className="text-xl font-bold text-brand-ink">₹{course.price}</p>
                  </div>
                  <button 
                    onClick={() => toggleDetails(course.id)}
                    className="bg-brand-ink text-brand-ivory px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wide hover:bg-brand-gold transition-colors flex items-center gap-2"
                  >
                    {isExpanded ? 'Close' : 'View Details'}
                    {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}