import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <Link to="/" className="flex items-center mb-6">
            <img src="/images/auth-logo.png" alt="Metacryptotrading" className="h-10 object-contain" />

            </Link>
            <p className="text-slate-400 mb-6">
              Leading the way in autonomous cryptocurrency trading and professional wealth management. Empowering investors globally.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <i className="fa-brands fa-telegram"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-sm">Quick Links</h4>
            <ul className="space-y-4 text-slate-400">
              <li><Link to="/" className="hover:text-blue-500 transition-colors">Home</Link></li>
              <li><a href="#about" className="hover:text-blue-500 transition-colors">About Us</a></li>
              <li><a href="#plans" className="hover:text-blue-500 transition-colors">Investment Plans</a></li>
              <li><a href="#faq" className="hover:text-blue-500 transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-sm">Legal</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-blue-500 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Refund Policy</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Risk Disclosure</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-sm">Newsletter</h4>
            <p className="text-slate-400 mb-4">Stay updated with the latest market trends and platform news.</p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-slate-900 border border-white/10 rounded-xl py-3 px-4 focus:outline-none focus:border-blue-500 text-sm"
              />
              <button className="absolute right-2 top-2 bg-blue-600 p-1.5 rounded-lg text-white hover:bg-blue-700 transition-colors">
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Metacryptotrading. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 grayscale opacity-50">
            <i className="fa-brands fa-cc-visa text-3xl"></i>
            <i className="fa-brands fa-cc-mastercard text-3xl"></i>
            <i className="fa-brands fa-bitcoin text-3xl"></i>
            <i className="fa-brands fa-ethereum text-3xl"></i>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;