import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User } from '../types';

interface NavbarProps {
  user: User | null;
}

const Navbar: React.FC<NavbarProps> = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src="/images/auth-logo.png" alt="Metacryptotrading" className="h-10 object-contain" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-slate-300 hover:text-white transition-colors">Home</Link>
            <a href="#about" className="text-slate-300 hover:text-white transition-colors">About Us</a>
            <a href="#plans" className="text-slate-300 hover:text-white transition-colors">Plans</a>
            <a href="#faq" className="text-slate-300 hover:text-white transition-colors">FAQ</a>
            
            {user ? (
              <Link 
                to="/dashboard" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-lg shadow-blue-900/20"
              >
                Dashboard
              </Link>
            ) : (
              <div className="flex items-center space-x-4">
                <Link to="/login" className="text-white font-medium hover:text-blue-400">Login</Link>
                <Link 
                  to="/register" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-lg shadow-blue-900/20"
                >
                  Join Us
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white p-2"
            >
              <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-white/5 py-4 space-y-4 px-4">
          <Link to="/" className="block text-slate-300 font-medium">Home</Link>
          <a href="#about" className="block text-slate-300 font-medium">About Us</a>
          <a href="#plans" className="block text-slate-300 font-medium">Plans</a>
          <a href="#faq" className="block text-slate-300 font-medium">FAQ</a>
          <div className="pt-2 flex flex-col space-y-3">
            {user ? (
              <Link to="/dashboard" className="w-full bg-blue-600 text-center py-2.5 rounded-lg font-bold">Dashboard</Link>
            ) : (
              <>
                <Link to="/login" className="w-full text-center py-2.5 font-bold border border-white/10 rounded-lg">Login</Link>
                <Link to="/register" className="w-full bg-blue-600 text-center py-2.5 rounded-lg font-bold">Sign Up</Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;