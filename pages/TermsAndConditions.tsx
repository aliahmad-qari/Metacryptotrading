import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions: React.FC = () => {
  const [currentEarning, setCurrentEarning] = useState({
    name: 'Darren',
    country: 'LEBANESE',
    amount: '7307',
  });
  const [showEarning, setShowEarning] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowEarning(false);
      setTimeout(() => setShowEarning(true), 500);
    }, 12000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-orange-500">
      {/* GLOBAL NAVBAR */}
      <header className="relative z-50 px-6 lg:px-20 py-4 flex items-center justify-between bg-slate-900 shadow-lg mx-0 lg:mx-20 mt-0 lg:mt-6 rounded-none lg:rounded-md">
        <Link to="/" className="flex items-center">
          <img src="https://metacryptotrading.net/img/logo.png" alt="Logo" className="h-10 object-contain" />
        </Link>
        <div className="hidden lg:flex items-center space-x-8 text-[11px] font-black text-white uppercase tracking-tight">
          <Link to="/" className="hover:text-orange-500 transition-colors">Home</Link>
          <Link to="/" className="hover:text-orange-500 transition-colors">About Us</Link>
          <Link to="/" className="hover:text-orange-500 transition-colors">Plans</Link>
          <Link to="/" className="hover:text-orange-500 transition-colors">FAQ</Link>
          <Link to="/" className="hover:text-orange-500 transition-colors">Contact Us</Link>
          <Link to="/login" className="bg-slate-800 text-white px-5 py-2 hover:bg-black transition-all">Login</Link>
          <Link to="/register" className="bg-slate-800 text-white px-5 py-2 hover:bg-black transition-all">Register</Link>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative h-[300px] flex flex-col items-center justify-center text-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=2000" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10">
          <span className="text-xs font-bold text-white/70 uppercase tracking-widest block mb-2">Our Terms</span>
          <h1 className="text-4xl lg:text-6xl font-serif font-black mb-6 uppercase">Terms & Conditions</h1>
          <div className="text-[10px] font-bold flex items-center justify-center space-x-2 text-white/70 uppercase">
             <Link to="/" className="flex items-center hover:text-orange-500"><i className="fa-solid fa-house mr-1"></i>Home</Link>
             <span>/</span>
             <span className="text-orange-500">Terms & Conditions</span>
          </div>
        </div>
      </section>

      {/* CONTENT AREA */}
      <section className="bg-[#f0f0f0] text-slate-800 py-20 px-6 lg:px-40">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">
            Terms And <span className="text-cyan-600">Conditions</span>
          </h2>
          
          <div className="space-y-6 text-[13px] leading-relaxed text-slate-700 font-medium">
            <p>
              The Metacryptotrading Trades website/platform (www.Metacryptotrading Trades.com) is available in English Language. The English version is the original version and the only one binding on Metacryptotrading Trades; it shall prevail on any other version in case of discrepancy. Metacryptotrading Trades is not responsible for any erroneous, inadequate, or misleading translations from the original version into other languages unless communicated to users.
            </p>
            <p>
              Metacryptotrading Trades allows access to its webpage and users related services by any individual or corporate entity (herein after referred to as the Investor/Client) according to the procedure and on the terms and conditions described in this Agreement.
            </p>
            <p>
              The Agreement becomes effective as of the date the Investor opened an investment account and transferred funds to the Company's account(s) to ensure minimum investment deposit.
            </p>
            <p>
              In the Agreement any reference to an individual person includes corporate entities, unincorporated associations, partnerships and individuals. Headings and notes in the Agreement are for reference only and shall not affect the contents and interpretation of the Agreement.
            </p>

            <h3 className="text-xl font-black text-center pt-10 pb-6 uppercase tracking-wider text-slate-400">INVESTOR AGREES THAT:</h3>

            <ul className="space-y-6 list-disc pl-5">
              <li>
                Any actions/error committed by an investor which destabilize the Company's business or performance of the Company's services, equipment, or software may result in the Company's refusal (on the basis of private law) of servicing the Investor's current investment/trading account and cancellation of all investment orders, with full refund of the remaining deposit. Metacryptotrading Trades would notify the Investor about the reasons for the above decision. Metacryptotrading Trades also may reject such Investor's new registration in the future.
              </li>
              <li>
                Individuals below the age of 18 are not allowed to participate in financial trading, therefore can not use the services of Metacryptotrading Trades. Information provided to the Metacryptotrading Trades are true and correct.
              </li>
              <li>
                He or she shall notify Metacryptotrading Trades about any changes on information uploaded. The e-mail address submitted is not used by anyone. Any and all notices, requests, complaints, and information received from this address are considered as sent by the Investor.
              </li>
              <li>
                Company may request from Investor a confirmation of accuracy of the personal account data for a due diligence and in the event of a withdrawal request. Company may request an authorized copy of the Investor's ID and the document proving his place of residence. Inability to provide requested documents may result in the Company's refusal of servicing the investor's current needs and cancellation of all trading orders, with full refund of the remaining deposit. Metacryptotrading Trades must notify the Investor about the reasons for the above decision.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FOOTER & CONTACT BAR */}
      <div className="px-6 lg:px-40 py-0 bg-black relative">
         <div className="bg-[#ff9800] p-8 md:p-10 rounded-sm grid grid-cols-1 md:grid-cols-3 gap-10 shadow-2xl relative overflow-hidden -mb-16 z-20">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <img src="https://metacryptotrading.net/img/world-map.png" alt="Map" className="w-full h-full object-cover" />
            </div>
            <div className="flex items-center space-x-6 relative z-10 text-white">
               <i className="fa-solid fa-phone text-3xl"></i>
               <div className="flex flex-col">
                 <span className="font-black text-sm">+14357306576</span>
                 <span className="text-xs text-white/80 font-bold">support@metacryptotrading.net</span>
               </div>
            </div>
            <div className="flex items-center space-x-6 relative z-10 text-white">
               <i className="fa-solid fa-clock text-3xl"></i>
               <div className="flex flex-col">
                 <span className="font-black text-sm uppercase">Mon - Sun 8.00 - 20.00</span>
                 <span className="text-xs text-white/80 font-bold">Sunday Closed</span>
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

      <footer className="bg-[#111] pt-32 pb-12 px-6 lg:px-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-20 text-center lg:text-left">
          <p className="text-slate-500 text-[11px] font-bold uppercase tracking-widest">Copyright © 2022 Metacryptotrading Trades. All rights reserved.</p>
          <div className="flex justify-center lg:justify-end items-center">
             <div className="bg-white/5 border border-white/10 rounded px-4 py-2 flex items-center space-x-3">
                <span className="text-slate-500 text-[11px] font-bold">Select Language</span>
                <select className="bg-transparent text-white text-[11px] outline-none cursor-pointer">
                  <option>English</option>
                  <option>Spanish</option>
                </select>
             </div>
          </div>
        </div>
      </footer>

      {/* Floating Earning Widget */}
      {showEarning && (
        <div className="fixed top-1/3 left-6 z-[150] animate-in slide-in-from-left duration-500">
          <div className="bg-black/95 border border-orange-500 p-4 rounded-sm flex items-center space-x-4 shadow-2xl min-w-[220px]">
            <div className="text-white text-3xl"><i className="fa-brands fa-bitcoin"></i></div>
            <div className="flex flex-col">
              <span className="text-white font-black text-[10px] uppercase">Earning</span>
              <span className="text-white text-[11px] font-bold leading-tight">
                {currentEarning.name} from {currentEarning.country} has just Earned <span className="text-orange-400 font-black">${currentEarning.amount}</span>
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TermsAndConditions;