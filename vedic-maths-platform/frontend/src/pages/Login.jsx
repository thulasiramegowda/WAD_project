import { useState } from 'react';
import { supabase } from '../supabase';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleAuth = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      if (isLogin) {
        // LOGIN
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;
        navigate('/dashboard'); // Redirect to dashboard on success
      } else {
        // SIGN UP
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: { full_name: fullName },
          },
        });
        if (error) throw error;
        
        alert('Account created! You can now log in.');
        setIsLogin(true); // Switch to login view
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-brand-beige/50 w-full max-w-md">
        
        <div className="text-center mb-8">
          <h2 className="text-3xl font-serif mb-2">{isLogin ? 'Welcome Back' : 'Create an Account'}</h2>
          <p className="text-brand-text text-sm">
            {isLogin ? 'Enter your details to access your dashboard.' : 'Join our premium academy today.'}
          </p>
        </div>

        {error && (
          <div className="bg-red-50 text-red-500 p-3 rounded-lg text-sm mb-6 text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleAuth} className="space-y-5">
          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-brand-dark mb-1">Full Name</label>
              <input 
                type="text" 
                required 
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-brand-beige focus:outline-none focus:border-brand-gold bg-brand-bg/50"
                placeholder="John Doe"
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-brand-dark mb-1">Email</label>
            <input 
              type="email" 
              required 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-brand-beige focus:outline-none focus:border-brand-gold bg-brand-bg/50"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-brand-dark mb-1">Password</label>
            <input 
              type="password" 
              required 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-brand-beige focus:outline-none focus:border-brand-gold bg-brand-bg/50"
              placeholder="••••••••"
            />
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-brand-dark text-white py-3 rounded-xl font-medium hover:bg-brand-gold transition-colors disabled:opacity-70 mt-4"
          >
            {loading ? 'Processing...' : (isLogin ? 'Sign In' : 'Sign Up')}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-brand-text">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button 
            type="button" 
            onClick={() => { setIsLogin(!isLogin); setError(null); }} 
            className="text-brand-gold font-semibold hover:underline"
          >
            {isLogin ? 'Sign up' : 'Log in'}
          </button>
        </div>
      </div>
    </div>
  );
}