
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy: React.FC = () => {
  const [currentEarning, setCurrentEarning] = useState({
    name: 'Dirk',
    country: 'USA',
    amount: '5663',
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
      {/* GLOBAL NAVBAR (Duplicated for standalone page consistency) */}
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
          <span className="text-xs font-bold text-orange-500 uppercase tracking-widest block mb-2">Our Privacy Policy</span>
          <h1 className="text-4xl lg:text-6xl font-serif font-black mb-6 uppercase">Privacy Policy</h1>
          <div className="text-[10px] font-bold flex items-center justify-center space-x-2 text-white/70 uppercase">
             <Link to="/" className="flex items-center hover:text-orange-500"><i className="fa-solid fa-house mr-1"></i>Home</Link>
             <span>/</span>
             <span className="text-orange-500">Privacy Policy</span>
          </div>
        </div>
      </section>

      {/* CONTENT AREA */}
      <section className="bg-[#f0f0f0] text-slate-800 py-20 px-6 lg:px-40">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-cyan-600 text-center mb-12">AML Policy</h2>
          
          <div className="space-y-8 text-[13px] leading-relaxed text-slate-700 italic font-medium">
            <p>
              * Upon registration with Metacryptotrading Trade, Client will be asked to choose an email and password to be used by Client for each future login and for the performance of Transactions and use of the Company's Services. In order to protect Clients' privacy and operation with Metacryptotrading Trade.com, sharing registration details (including without limitation, email and password) by Client with other persons or business entities is strictly prohibited. The Company shall not be held responsible for any damage or loss caused to Client due to improper use (including prohibited and unprotected use) or storage of such username and password, including any such use made by a third party, and whether or not known to or authorized by Client.
            </p>
            <p>
              * Client during his/her activity with Metacryptotrading Trade may be used by the Company for sending Company's advertising content to the Client, unless the Client removes the mark approving the Company to do so. Such removal can be done when (i) opening an account or (ii) when receiving such advertising content or (iii) by logging in and going to My Account &gt; Personal Details. The Client may also send to the Company, at any time, an e-mail to support@Metacryptotrading Trade.com asking the Company to stop sending such advertising content. The aforesaid mark removal and /or email receipt by the Company will oblige the Company to cease sending advertisement content to the Client within seven business days.
            </p>
            <p>
              * When registering with Metacryptotrading Trade, the Client shall provide certain identifying details including, inter alia, information aimed at preventing Money Laundering.
            </p>
            <p>
              * The company collects and stores the following client data: email, encrypted password, client's name and address.
            </p>
            <p>
              * Client undertakes to provide true, accurate and updated information about his identity and is obliged not to impersonate another person or legal entity. Any change in Client's identifying details must be notified to the Company immediately and in any case not later than the 30th day from the change in such details.
            </p>
            <p>
              * Client's details which were provided and/or will be provided by the
            </p>
            <p>
              * Client details which were provided and/or will be provided by the Client during his/her activity on the site, may be disclosed by the Company to official authorities. The company will make such disclosure only if required to do so by applicable law, regulation or court order and at the minimum required extent.
            </p>
            <p>
              * Non-confidential information about the Client can be used by the Company in any advertising materials.
            </p>
            <p>
              * As a precondition for performing Transactions on the Site, Client may be asked to provide certain identifying documents and any other documents required by the Company. If such documents are not provided, the Company can, at its sole discretion, freeze the Client's Account for any period of time as well as to permanently close the Account. Without prejudice to the above, the Company may, at its sole discretion, refuse to open an Account for any person or entity and for any reason, or no reason.
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
          <div className="bg-black/95 border border-orange-500 p-4 rounded-sm flex items-center space-x-4 shadow-2xl min-w-[200px]">
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

export default PrivacyPolicy;
