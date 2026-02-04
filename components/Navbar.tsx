import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User } from '../types';

interface NavbarProps {
  user: User | null;
}

const Navbar: React.FC<NavbarProps> = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop Fixed Navbar - Hidden on mobile */}
      <nav className="hidden lg:block fixed top-0 w-full z-50 bg-slate-950/90 backdrop-blur-md border-b border-white/10 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <img src="/images/auth-logo.png" alt="Metacryptotrading" className="h-8 object-contain" />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="flex items-center space-x-8">
              <Link to="/" className="text-slate-300 hover:text-white transition-colors font-medium">Home</Link>
              <a href="#about" className="text-slate-300 hover:text-white transition-colors font-medium">About Us</a>
              <Link to="/faq" className="text-slate-300 hover:text-white transition-colors font-medium">FAQ</Link>
              <Link to="/contact" className="text-slate-300 hover:text-white transition-colors font-medium">Contact Us</Link>
              
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
          </div>
        </div>
      </nav>

      {/* Mobile Menu Button - Always visible on mobile */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 right-4 z-[60] bg-slate-900/90 backdrop-blur-md text-white p-3 rounded-full shadow-lg border border-white/10"
      >
        <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'} text-lg`}></i>
      </button>

      {/* Mobile Full Screen Menu */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-slate-950/95 backdrop-blur-md">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {/* Logo */}
            <Link to="/" onClick={() => setIsOpen(false)}>
              <img src="/images/auth-logo.png" alt="Metacryptotrading" className="h-12 object-contain mb-8" />
            </Link>
            
            {/* Menu Items */}
            <Link 
              to="/" 
              className="text-white text-xl font-medium hover:text-orange-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <a 
              href="#about" 
              className="text-white text-xl font-medium hover:text-orange-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </a>
            <Link 
              to="/faq" 
              className="text-white text-xl font-medium hover:text-orange-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              FAQ
            </Link>
            <Link 
              to="/contact" 
              className="text-white text-xl font-medium hover:text-orange-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
            
            {/* Auth Buttons */}
            <div className="flex flex-col space-y-4 mt-8">
              {user ? (
                <Link 
                  to="/dashboard" 
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-all text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Dashboard
                </Link>
              ) : (
                <>
                  <Link 
                    to="/login" 
                    className="text-white text-lg font-medium hover:text-orange-400 transition-colors text-center"
                    onClick={() => setIsOpen(false)}
                  >
                    Login
                  </Link>
                  <Link 
                    to="/register" 
                    className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-all text-center"
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
    </>
  );
};

export default Navbar;