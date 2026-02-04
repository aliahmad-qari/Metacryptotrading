import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User } from '../types';

interface NavbarProps {
  user: User | null;
}

const Navbar: React.FC<NavbarProps> = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/90 backdrop-blur-md border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src="/images/auth-logo.png" alt="Metacryptotrading" className="h-8 object-contain" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-slate-300 hover:text-white transition-colors font-medium">Home</Link>
            <a href="#about" className="text-slate-300 hover:text-white transition-colors font-medium">About Us</a>
            <a href="#faq" className="text-slate-300 hover:text-white transition-colors font-medium">FAQ</a>
            <a href="#contact" className="text-slate-300 hover:text-white transition-colors font-medium">Contact Us</a>
            
            {user ? (
              <Link 
                to="/dashboard" 
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-semibold transition-all"
              >
                Dashboard
              </Link>
            ) : (
              <div className="flex items-center space-x-4">
                <Link to="/login" className="text-white font-medium hover:text-orange-400 transition-colors">Login</Link>
                <Link 
                  to="/register" 
                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-semibold transition-all"
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
              className="text-slate-300 hover:text-white p-2 focus:outline-none"
            >
              <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-white/10">
          <div className="px-4 py-4 space-y-3">
            <Link 
              to="/" 
              className="block text-slate-300 hover:text-white font-medium py-2 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <a 
              href="#about" 
              className="block text-slate-300 hover:text-white font-medium py-2 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </a>
            <a 
              href="#faq" 
              className="block text-slate-300 hover:text-white font-medium py-2 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              FAQ
            </a>
            <a 
              href="#contact" 
              className="block text-slate-300 hover:text-white font-medium py-2 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </a>
            
            <div className="pt-4 border-t border-white/10 space-y-3">
              {user ? (
                <Link 
                  to="/dashboard" 
                  className="block w-full bg-orange-500 hover:bg-orange-600 text-white text-center py-3 rounded-lg font-semibold transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  Dashboard
                </Link>
              ) : (
                <>
                  <Link 
                    to="/login" 
                    className="block w-full text-center py-3 font-semibold border border-white/20 rounded-lg text-white hover:bg-white/5 transition-all"
                    onClick={() => setIsOpen(false)}
                  >
                    Login
                  </Link>
                  <Link 
                    to="/register" 
                    className="block w-full bg-orange-500 hover:bg-orange-600 text-white text-center py-3 rounded-lg font-semibold transition-all"
                    onClick={() => setIsOpen(false)}
                  >
                    Join Us
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;