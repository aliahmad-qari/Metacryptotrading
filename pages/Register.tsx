import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User } from '../types';
import { COUNTRIES, CURRENCIES } from '../constants';

interface RegisterProps {
  setUser: (user: User) => void;
}

const Register: React.FC<RegisterProps> = ({ setUser }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showWhatsApp, setShowWhatsApp] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    currency: 'USD',
    phone: '',
    password: '',
    confirmPassword: '',
    referral: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      console.log('API URL:', apiUrl); // Debug log
      
      const response = await fetch(`${apiUrl}/api/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        // Registration successful, redirect to login
        navigate('/login');
      } else {
        setError(data.message);
      }
    } catch (error) {
      console.error('Registration error:', error);
      setError('Connection error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center p-4">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center -z-10"
        style={{ backgroundImage: 'url("/images/backgorundmain.jpg")' }}
      >
        <div className="absolute inset-0 "></div>
      </div>

      <div className="w-full max-w-2xl py-10">
        {/* Logo Section */}
        <div className="flex justify-center mb-8">
          <Link to="/" className="flex items-center bg-slate-200/90 py-3 px-6 rounded-lg shadow-xl">
            <img src="/images/auth-logo.png" alt="Metacryptotrading" className="h-12 object-contain" />
          </Link>
        </div>

        <div className="glass border-white/20 rounded-3xl p-8 shadow-2xl">
          <h2 className="text-2xl font-bold mb-8 text-center">Create New Account</h2>
          
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {error && (
              <div className="md:col-span-2 bg-red-500/10 border border-red-500/50 text-red-500 px-4 py-3 rounded-xl text-sm font-medium">
                {error}
              </div>
            )}
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">
                <i className="fa-solid fa-user"></i>
              </span>
              <input 
                type="text" 
                placeholder="First Name"
                required
                value={formData.firstName}
                onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-blue-500 text-white placeholder:text-slate-500"
              />
            </div>

            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">
                <i className="fa-solid fa-user"></i>
              </span>
              <input 
                type="text" 
                placeholder="Last Name"
                required
                value={formData.lastName}
                onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-blue-500 text-white placeholder:text-slate-500"
              />
            </div>

            <div className="md:col-span-2 relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">
                <i className="fa-solid fa-envelope"></i>
              </span>
              <input 
                type="email" 
                placeholder="Email Address"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-blue-500 text-white placeholder:text-slate-500"
              />
            </div>

            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">
                <i className="fa-solid fa-globe"></i>
              </span>
              <select 
                required
                value={formData.country}
                onChange={(e) => setFormData({...formData, country: e.target.value})}
                className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-blue-500 text-white appearance-none"
              >
                <option value="" disabled className="bg-slate-900">Select Country</option>
                {COUNTRIES.map(c => <option key={c} value={c} className="bg-slate-900">{c}</option>)}
              </select>
            </div>

            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">
                <i className="fa-solid fa-coins"></i>
              </span>
              <select 
                required
                value={formData.currency}
                onChange={(e) => setFormData({...formData, currency: e.target.value})}
                className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-blue-500 text-white appearance-none"
              >
                {CURRENCIES.map(c => <option key={c} value={c} className="bg-slate-900">{c}</option>)}
              </select>
            </div>

            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">
                <i className="fa-solid fa-phone"></i>
              </span>
              <input 
                type="tel" 
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-blue-500 text-white placeholder:text-slate-500"
              />
            </div>

            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">
                <i className="fa-solid fa-users"></i>
              </span>
              <input 
                type="text" 
                placeholder="Referral (Optional)"
                value={formData.referral}
                onChange={(e) => setFormData({...formData, referral: e.target.value})}
                className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-blue-500 text-white placeholder:text-slate-500"
              />
            </div>

            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">
                <i className="fa-solid fa-lock"></i>
              </span>
              <input 
                type="password" 
                placeholder="Password"
                required
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-blue-500 text-white placeholder:text-slate-500"
              />
            </div>

            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">
                <i className="fa-solid fa-lock"></i>
              </span>
              <input 
                type="password" 
                placeholder="Confirm Password"
                required
                value={formData.confirmPassword}
                onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-blue-500 text-white placeholder:text-slate-500"
              />
            </div>

            <div className="md:col-span-2">
              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl shadow-xl shadow-orange-900/20 transition-all flex items-center justify-center"
              >
                {loading ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : 'CREATE ACCOUNT'}
              </button>
            </div>
          </form>

          <div className="mt-8 text-center">
            <p className="text-slate-400">
              Already have an account? {' '}
              <Link to="/login" className="text-orange-500 hover:underline font-bold">Sign In</Link>
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

export default Register;