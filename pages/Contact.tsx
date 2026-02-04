
import React from 'react';
import { Link } from 'react-router-dom';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-orange-500">
      {/* NAVBAR */}
      <header className="relative z-50 px-6 lg:px-20 py-4 flex items-center justify-between bg-slate-900 shadow-lg mx-0 lg:mx-20 mt-0 lg:mt-6 rounded-none lg:rounded-md">
        <Link to="/" className="flex items-center">
          <img src="/images/auth-logo.png" alt="Logo" className="h-10 object-contain" />
        </Link>
        <div className="hidden lg:flex items-center space-x-8 text-[11px] font-black text-white uppercase tracking-tight">
          <Link to="/" className="hover:text-orange-500 transition-colors">Home</Link>
          <a href="/#about" className="hover:text-orange-500 transition-colors">About Us</a>
          <a href="/#plans" className="hover:text-orange-500 transition-colors">Plans</a>
          <Link to="/faq" className="hover:text-orange-500 transition-colors">FAQ</Link>
          <Link to="/contact" className="text-orange-500">Contact Us</Link>
          <Link to="/login" className="bg-slate-800 text-white px-5 py-2 hover:bg-black transition-all">Login</Link>
          <Link to="/register" className="bg-slate-800 text-white px-5 py-2 hover:bg-black transition-all">Register</Link>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative min-h-[400px] flex flex-col items-center justify-center text-center">
        <div className="absolute inset-0 z-0">
           <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" alt="Hero" className="w-full h-full object-cover opacity-30" />
           <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="relative z-10">
           <span className="text-xs font-bold text-white/70 uppercase tracking-widest block mb-4">We'll love to hear from you</span>
           <h1 className="text-5xl lg:text-7xl font-serif font-black mb-6">Contact Us</h1>
           <div className="text-[10px] font-bold flex items-center justify-center space-x-2 text-white/50 uppercase">
             <Link to="/" className="hover:text-orange-500">Home</Link>
             <span>/</span>
             <span className="text-orange-500">Contact Us</span>
           </div>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="py-24 px-6 lg:px-40 bg-[#0c0c0c]">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 max-w-7xl mx-auto">
            <div className="space-y-12">
               <div>
                  <h2 className="text-2xl font-black uppercase mb-8 border-b border-white/10 pb-4">Get In Touch</h2>
                  <p className="text-slate-400 text-[13px] leading-relaxed mb-6 italic">Want to work with us or need more details about our platform, you can fill the form below...</p>
               </div>
               <div className="space-y-8">
                  <div className="flex items-center space-x-6 group">
                     <div className="w-14 h-14 rounded-full bg-cyan-600 flex items-center justify-center text-white text-xl shadow-lg group-hover:bg-cyan-500 transition-colors"><i className="fa-solid fa-envelope"></i></div>
                     <div className="flex flex-col">
                       <span className="text-[10px] text-slate-500 font-bold uppercase mb-1">Email Us</span>
                       <span className="font-black text-sm uppercase">support@metacryptotrading.net</span>
                     </div>
                  </div>
                  <div className="flex items-center space-x-6 group">
                     <div className="w-14 h-14 rounded-full bg-cyan-600 flex items-center justify-center text-white text-xl shadow-lg group-hover:bg-cyan-500 transition-colors"><i className="fa-solid fa-location-dot"></i></div>
                     <div className="flex flex-col">
                       <span className="text-[10px] text-slate-500 font-bold uppercase mb-1">Our Location</span>
                       <span className="font-black text-sm uppercase">No 346 New Road xxxxxdefaultxxxxx</span>
                     </div>
                  </div>
               </div>
            </div>
            <div className="bg-slate-900/50 p-10 rounded-sm border border-white/5">
               <h2 className="text-2xl font-black uppercase mb-12 border-b border-white/10 pb-4">Send A Message</h2>
               <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-2">
                     <label className="text-[11px] font-black text-green-600 uppercase tracking-tighter">Your Name *</label>
                     <input type="text" className="w-full bg-white text-slate-800 py-3.5 px-4 outline-none focus:ring-2 focus:ring-orange-500 transition-all" placeholder="Enter Full Name" />
                  </div>
                  <div className="space-y-2">
                     <label className="text-[11px] font-black text-green-600 uppercase tracking-tighter">Email Address *</label>
                     <input type="email" className="w-full bg-white text-slate-800 py-3.5 px-4 outline-none focus:ring-2 focus:ring-orange-500 transition-all" placeholder="Enter Email Address" />
                  </div>
                  <div className="space-y-2">
                     <label className="text-[11px] font-black text-green-600 uppercase tracking-tighter">Message *</label>
                     <textarea rows={6} className="w-full bg-white text-slate-800 py-3.5 px-4 outline-none resize-none focus:ring-2 focus:ring-orange-500 transition-all" placeholder="How can we help?"></textarea>
                  </div>
                  <button className="bg-orange-500 hover:bg-orange-600 text-white font-black text-[11px] px-10 py-4 uppercase tracking-widest flex items-center space-x-2 transition-all shadow-xl shadow-orange-900/20 active:scale-95">
                     <span>Send Message</span>
                     <i className="fa-solid fa-paper-plane"></i>
                  </button>
               </form>
            </div>
         </div>
      </section>

      {/* FOOTER */}
      <div className="px-6 lg:px-40 py-0 bg-black relative">
         <div className="bg-[#ff9800] p-8 md:p-10 rounded-sm grid grid-cols-1 md:grid-cols-3 gap-10 shadow-2xl relative overflow-hidden -mb-16 z-20">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <img src="https://metacryptotrading.net/img/world-map.png" alt="Map" className="w-full h-full object-cover" />
            </div>
            <div className="flex items-center space-x-6 relative z-10 text-white">
               <i className="fa-solid fa-phone text-3xl"></i>
               <div className="flex flex-col">
                 <span className="font-black text-sm leading-tight">+14357306576</span>
                 <span className="text-[11px] text-white/90 font-bold">support@metacryptotrading.net</span>
               </div>
            </div>
            <div className="flex items-center space-x-6 relative z-10 text-white">
               <i className="fa-solid fa-clock text-3xl"></i>
               <div className="flex flex-col">
                 <span className="font-black text-sm uppercase leading-tight">Mon - Sun 8.00 - 20.00</span>
                 <span className="text-[11px] text-white/90 font-bold">Sunday Closed</span>
               </div>
            </div>
            <div className="flex items-center space-x-6 relative z-10 text-white">
               <i className="fa-solid fa-location-dot text-3xl"></i>
               <div className="flex flex-col">
                 <span className="font-black text-sm uppercase leading-tight">No 346 New Road xxxxxdefaultxxxxx</span>
               </div>
            </div>
         </div>
      </div>

      <footer className="bg-[#0f0f0f] pt-40 pb-12 px-6 lg:px-40">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20">
            <div>
              <img src="/images/auth-logo.png" alt="Logo" className="h-10 mb-8 grayscale brightness-200" />
              <p className="text-slate-400 text-[13px] leading-relaxed max-w-lg font-medium italic">
                Metacryptotrading Trade LTD is a financial investment company established by a group of professional traders and investors, who have fore seen the future of International Capital Market. The company has direct contracts with professional traders and miners around the world that guarantees the best services and ensures profits are made and remitted to Investors daily.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-8 border-b border-white/10 pb-4">Useful <span className="text-orange-500 font-serif italic">Links</span></h3>
              <div className="grid grid-cols-2 gap-x-12 gap-y-4">
                <div className="flex flex-col space-y-3">
                  <Link to="/" className="text-slate-400 hover:text-orange-500 text-[13px] font-bold flex items-center transition-colors"><i className="fa-solid fa-chevron-right text-[8px] mr-3"></i>Home</Link>
                  <Link to="/faq" className="text-slate-400 hover:text-orange-500 text-[13px] font-bold flex items-center transition-colors"><i className="fa-solid fa-chevron-right text-[8px] mr-3"></i>FAQ</Link>
                  <Link to="/terms" className="text-slate-400 hover:text-orange-500 text-[13px] font-bold flex items-center transition-colors"><i className="fa-solid fa-chevron-right text-[8px] mr-3"></i>Terms & Conditions</Link>
                  <Link to="/privacy" className="text-slate-400 hover:text-orange-500 text-[13px] font-bold flex items-center transition-colors"><i className="fa-solid fa-chevron-right text-[8px] mr-3"></i>Privacy Policy</Link>
                  <Link to="/register" className="text-slate-400 hover:text-orange-500 text-[13px] font-bold flex items-center transition-colors"><i className="fa-solid fa-chevron-right text-[8px] mr-3"></i>Start Investing</Link>
                </div>
                <div className="flex flex-col space-y-3">
                  <a href="/#about" className="text-slate-400 hover:text-orange-500 text-[13px] font-bold flex items-center transition-colors"><i className="fa-solid fa-chevron-right text-[8px] mr-3"></i>Company</a>
                  <Link to="/contact" className="text-slate-400 hover:text-orange-500 text-[13px] font-bold flex items-center transition-colors"><i className="fa-solid fa-chevron-right text-[8px] mr-3"></i>Contact Us</Link>
                  <Link to="/aml" className="text-slate-400 hover:text-orange-500 text-[13px] font-bold flex items-center transition-colors"><i className="fa-solid fa-chevron-right text-[8px] mr-3"></i>AML Policy</Link>
                  <Link to="/payment-policy" className="text-slate-400 hover:text-orange-500 text-[13px] font-bold flex items-center transition-colors"><i className="fa-solid fa-chevron-right text-[8px] mr-3"></i>Payment Policy</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/5 pt-10 text-center">
            <p className="text-slate-500 text-[11px] font-bold uppercase tracking-widest">Copyright © 2022 Metacryptotrading Trade. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
