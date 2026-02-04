import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User } from '../types';

interface LoginProps {
  setUser: (user: User) => void;
}

const Login: React.FC<LoginProps> = ({ setUser }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showWhatsApp, setShowWhatsApp] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        const user: User = {
          id: data.user.id,
          name: `${data.user.firstName} ${data.user.lastName}`,
          email: data.user.email,
          balance: data.user.balance,
          totalProfit: data.user.totalProfit,
          activeInvestments: 0
        };
        setUser(user);
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('token', data.token);
        navigate('/dashboard');
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError('Connection error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center p-4">
      {/* Dynamic Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center -z-10"
        style={{ backgroundImage: 'url("/images/backgorundmain.jpg")' }}
      >
        <div className="absolute inset-0 "></div>
      </div>

      <div className="w-full max-w-md">
        {/* Logo Section */}
        <div className="flex justify-center mb-8">
          <Link to="/" className="flex items-center bg-slate-200/90 py-3 px-6 rounded-lg">
            <img src="/images/auth-logo.png" alt="Metacryptotrading" className="h-12 object-contain" />
          </Link>
        </div>

        <div className="glass border-white/20 rounded-3xl p-8 shadow-2xl">
          <h2 className="text-2xl font-bold mb-8 text-center">Member Login</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-500/10 border border-red-500/50 text-red-500 px-4 py-3 rounded-xl text-sm font-medium">
                {error}
              </div>
            )}

            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">
                <i className="fa-solid fa-envelope"></i>
              </span>
              <input 
                type="email" 
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-blue-500 transition-all text-white placeholder:text-slate-500"
              />
            </div>

            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">
                <i className="fa-solid fa-lock"></i>
              </span>
              <input 
                type="password" 
                placeholder="Password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-blue-500 transition-all text-white placeholder:text-slate-500"
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input type="checkbox" className="rounded border-white/10 bg-white/5 text-blue-600 focus:ring-blue-500" />
                <span className="text-slate-400">Remember Me</span>
              </label>
              <a href="#" className="text-blue-500 hover:underline font-medium">Forgot Password?</a>
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl shadow-xl shadow-orange-900/20 transition-all disabled:opacity-50 flex items-center justify-center"
            >
              {loading ? (
                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : 'LOGIN TO ACCOUNT'}
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-white/10 text-center">
            <p className="text-slate-400">
              Don't have an account? {' '}
              <Link to="/register" className="text-orange-500 hover:underline font-bold">Register Now</Link>
            </p>
          </div>
        </div>
      </div>

      {/* Google Translate Widget */}
      <div className="fixed bottom-4 left-4 z-50">
        <div className="bg-[#800080] p-2 rounded shadow-lg">
          <select className="bg-white text-slate-800 text-xs px-2 py-1 border border-slate-300 rounded focus:outline-none w-32">
            <option>Select Language</option>
            <option>English</option>
            <option>Spanish</option>
            <option>French</option>
            <option>German</option>
          </select>
          <div className="mt-1 text-[10px] text-white/70">
            Powered by <span className="font-bold"><span className="text-[#4285F4]">G</span><span className="text-[#EA4335]">o</span><span className="text-[#FBBC05]">o</span><span className="text-[#4285F4]">g</span><span className="text-[#34A853]">l</span><span className="text-[#EA4335]">e</span></span> Translate
          </div>
        </div>
      </div>

      {/* WhatsApp Widget */}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end">
        {showWhatsApp && (
          <div className="mb-4 w-72 bg-white rounded-xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
            <div className="bg-[#f5ff82] p-4 flex items-center justify-between border-b border-black/5">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center">
                   <span className="text-white font-bold">¢</span>
                </div>
                <div>
                  <h4 className="text-slate-800 font-bold text-sm leading-tight">Metacryptotrading Trade</h4>
                  <p className="text-slate-500 text-[10px]">Typically replies in a day</p>
                </div>
              </div>
              <button onClick={() => setShowWhatsApp(false)} className="text-slate-400 hover:text-slate-600">
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div className="p-6 bg-[#f0f0f0] min-h-[120px] flex flex-col justify-end">
              <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm max-w-[85%] mb-4">
                <p className="text-slate-800 text-sm">Hi there! How can I help you?</p>
              </div>
              <button className="w-full bg-[#5e7d7d] hover:bg-[#4a6363] text-white py-3 rounded-full font-bold flex items-center justify-center space-x-2 transition-colors">
                <i className="fa-brands fa-whatsapp text-lg"></i>
                <span>Start Chat</span>
              </button>
            </div>
          </div>
        )}
        <button 
          onClick={() => setShowWhatsApp(!showWhatsApp)}
          className="bg-[#bdcc00] hover:bg-[#a8b800] text-slate-800 px-6 py-3 rounded-full font-bold shadow-xl flex items-center space-x-2 transition-transform hover:scale-105 active:scale-95"
        >
          <i className="fa-brands fa-whatsapp text-xl"></i>
          <span>WhatsApp Us</span>
        </button>
      </div>
    </div>
  );
};

export default Login;