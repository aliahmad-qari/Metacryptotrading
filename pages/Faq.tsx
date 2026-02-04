
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FAQ: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [openFaqRight, setOpenFaqRight] = useState<number | null>(null);

  const leftFaqs = [
    { q: "What is this website about? Is this an ICO?", a: "No. This is not an Initial Coin Offering. Metacryptotrading Trade is a managed cryptocurrency trading platform with user friendly interface and attractive offer." },
    { q: "What Markets do you trade?", a: "Our experts trade in the most liquid and volatile markets including Cryptocurrency, Forex, and major Stock indices to maximize returns for our investors." },
    { q: "What is the risk for my investment?", a: "While all trading involves risk, we use advanced risk management protocols and stop-loss algorithms. Furthermore, all accounts are covered by our internal insurance fund." },
    { q: "How can I access the account?", a: "You can access your account through our secure member dashboard using your email and password. Our platform is mobile-responsive." }
  ];

  const rightFaqs = [
    { q: "I forgot my password. What should I do?", a: "Go to Password Reminder section, enter your registration e-mail address and follow the instructions provided via email." },
    { q: "How to create a new account?", a: "Simply click on the Register button at the top of the page, fill in your details, and you'll have immediate access to your trading dashboard." },
    { q: "May I create more than one account?", a: "No, to maintain the security and integrity of our platform, we only allow one account per individual user." },
    { q: "Are withdrawals instant?", a: "Yes, our automated withdrawal system ensures that your funds are processed as quickly as possible once the withdrawal request is verified." }
  ];

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
          <Link to="/faq" className="text-orange-500">FAQ</Link>
          <Link to="/contact" className="hover:text-orange-500 transition-colors">Contact Us</Link>
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
           <span className="text-xs font-bold text-white/70 uppercase tracking-widest block mb-4">How it works</span>
           <h1 className="text-5xl lg:text-7xl font-serif font-black mb-6">FAQ'S</h1>
           <div className="text-[10px] font-bold flex items-center justify-center space-x-2 text-white/50 uppercase">
             <Link to="/" className="hover:text-orange-500">Home</Link>
             <span>/</span>
             <span className="text-orange-500">faq's</span>
           </div>
        </div>
      </section>

      {/* FAQ CONTENT */}
      <section className="py-24 px-6 lg:px-40 bg-[#0c0c0c]">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl mx-auto">
            <div className="space-y-4">
              {leftFaqs.map((faq, i) => (
                <div key={i} className="border border-white/20 transition-all hover:border-cyan-500/50">
                   <button 
                     onClick={() => setOpenFaq(openFaq === i ? null : i)} 
                     className={`w-full flex items-center justify-between p-5 text-left transition-all font-black text-xs uppercase tracking-tighter ${openFaq === i ? 'bg-[#00bcd4] text-white shadow-lg shadow-cyan-900/20' : 'text-white hover:bg-white/5'}`}
                   >
                     <span>{faq.q}</span>
                     <i className={`fa-solid ${openFaq === i ? 'fa-minus' : 'fa-plus'} text-[10px]`}></i>
                   </button>
                   {openFaq === i && <div className="p-6 text-slate-400 text-[11px] italic leading-relaxed bg-white/5 animate-in fade-in slide-in-from-top-2 duration-300">{faq.a}</div>}
                </div>
              ))}
            </div>
            <div className="space-y-4">
              {rightFaqs.map((faq, i) => (
                <div key={i} className="border border-white/20 transition-all hover:border-cyan-500/50">
                   <button 
                     onClick={() => setOpenFaqRight(openFaqRight === i ? null : i)} 
                     className={`w-full flex items-center justify-between p-5 text-left transition-all font-black text-xs uppercase tracking-tighter ${openFaqRight === i ? 'bg-[#00bcd4] text-white shadow-lg shadow-cyan-900/20' : 'text-white hover:bg-white/5'}`}
                   >
                     <span>{faq.q}</span>
                     <i className={`fa-solid ${openFaqRight === i ? 'fa-minus' : 'fa-plus'} text-[10px]`}></i>
                   </button>
                   {openFaqRight === i && <div className="p-6 text-slate-400 text-[11px] italic leading-relaxed bg-white/5 animate-in fade-in slide-in-from-top-2 duration-300">{faq.a}</div>}
                </div>
              ))}
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

export default FAQ;
