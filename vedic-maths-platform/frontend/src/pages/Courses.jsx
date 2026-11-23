import { useState, useEffect } from 'react';
import { supabase } from '../supabase';

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Function to fetch courses from Supabase
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

  return (
    <div className="p-12 max-w-7xl mx-auto">
      <h1 className="text-4xl mb-8">Our Courses</h1>
      
      {loading ? (
        <p>Loading courses...</p>
      ) : courses.length === 0 ? (
        <p>No courses found. Add some in Supabase!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="bg-white p-6 rounded-xl shadow-sm border border-brand-beige/50">
              <span className="text-brand-gold text-sm font-semibold uppercase tracking-wider">
                {course.level}
              </span>
              <h2 className="text-2xl font-serif mt-2 mb-3">{course.title}</h2>
              <p className="text-brand-text mb-4">{course.description}</p>
              <div className="flex justify-between items-center mt-6">
                <span className="font-bold text-lg">₹{course.price}</span>
                <button className="bg-brand-dark text-white px-4 py-2 rounded-full text-sm hover:bg-brand-gold transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}