import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AMLPolicy: React.FC = () => {
  const [currentEarning, setCurrentEarning] = useState({
    name: 'Mohammed',
    country: 'PAKISTAN',
    amount: '5921',
  });
  const [showEarning, setShowEarning] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowEarning(false);
      setTimeout(() => setShowEarning(true), 500);
    }, 15000);
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
          <span className="text-xs font-bold text-white/70 uppercase tracking-widest block mb-2">Our AML Policy</span>
          <h1 className="text-4xl lg:text-6xl font-serif font-black mb-6 uppercase tracking-tight">AML POLICY</h1>
          <div className="text-[10px] font-bold flex items-center justify-center space-x-2 text-white/70 uppercase">
             <Link to="/" className="flex items-center hover:text-orange-500"><i className="fa-solid fa-house mr-1"></i>Home</Link>
             <span>/</span>
             <span className="text-orange-500">AML Policy</span>
          </div>
        </div>
      </section>

      {/* CONTENT AREA */}
      <section className="bg-[#f0f0f0] text-slate-800 py-20 px-6 lg:px-40">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-cyan-600 text-center mb-12">AML Policy</h2>
          
          <div className="space-y-6 text-[13px] leading-relaxed text-slate-700 italic font-medium">
            <p>
              * This policy of Metacryptotrading Trades (hereinafter referred to as the "Company") to prohibit and actively pursue the prevention of money laundering and any activity that facilitates money laundering or the funding of terrorist or criminal activities. Company requires its officers, employees and affiliates to adhere to these standards in preventing the use of Company's Services for money laundering purposes.
            </p>
            <p>
              * Generally, money laundering occurs in three stages. Cash first enters the financial system at the "placement" stage, where the cash generated from criminal activities is converted into monetary instruments, such as money orders or traveler's checks, or deposited into accounts at financial institutions. At the "layering" stage, the funds are transferred or moved into other accounts or other financial institutions to further separate the money from its criminal origin. At the "integration" stage, the funds are reintroduced into the economy and used to purchase legitimate assets or to fund other criminal activities or legitimate businesses. Terrorist financing may not involve the proceeds of criminal conduct, but rather an attempt to conceal the origin or intended use of the funds, which will later be used for criminal purposes.
            </p>
            <p>
              * Client guarantees a legal origin, legal ownership and availability at Client of the actual right to use of the money transferred by Client to Client's Account.
            </p>
            <p>
              * For the purposes of this policy, money laundering is generally defined as engaging in acts designed to conceal or disguise the true origins of criminally derived proceeds so that the unlawful proceeds appear to have been derived from legitimate origins or constitute legitimate assets.
            </p>
            <p>
              * Each employee of Company, whose duties are associated with the provision of products and services of Company and who directly or indirectly deals with Client of Company, is expected to know the requirements of the applicable laws and regulations which affect Client's job responsibilities, and it shall be the affirmative duty of such employee to carry out these responsibilities at all times in a manner that complies with the requirements of the relevant laws and regulations.
            </p>
            <p>
              * To ensure that this general policy is carried out, management of Company has established and maintains an ongoing program for the purpose of assuring compliance with the relevant laws and regulations and the prevention of money laundering. This program seeks to coordinate the specific regulatory requirements throughout the group within a consolidated framework in order to effectively manage the group's risk of exposure to money laundering and terrorist financing across all business units, functions, and legal entities.
            </p>
            <p>
              * All new employees shall receive anti-money laundering training as part of the mandatory new-hire training program. All applicable employees are also required to complete AML and KYC training annually. Participation in additional targeted training programs is required for all employees with day to day AML and KYC responsibilities.
            </p>
            <p>
              * All identification documentation and services records shall be kept for the minimum period of time required by local law.
            </p>
            <p>
              * Each of the Company's affiliates is required to comply with AML and KYC policies.
            </p>
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
                <select className="bg-transparent text-white text-[11px] outline-none cursor-pointer"><option>English</option></select>
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
              <span className="text-white text-[11px] font-bold leading-tight">{currentEarning.name} from {currentEarning.country} has just Earned <span className="text-orange-400 font-black">${currentEarning.amount}</span></span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AMLPolicy;