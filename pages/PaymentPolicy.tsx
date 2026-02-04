import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const PaymentPolicy: React.FC = () => {
  const [currentEarning, setCurrentEarning] = useState({
    name: 'Richard',
    country: 'LEBANESE',
    amount: '8962',
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
          <span className="text-xs font-bold text-white/70 uppercase tracking-widest block mb-2">Our Payment Policy</span>
          <h1 className="text-4xl lg:text-6xl font-serif font-black mb-6 uppercase tracking-tight">PAYMENT POLICY</h1>
          <div className="text-[10px] font-bold flex items-center justify-center space-x-2 text-white/70 uppercase">
             <Link to="/" className="flex items-center hover:text-orange-500"><i className="fa-solid fa-house mr-1"></i>Home</Link>
             <span>/</span>
             <span className="text-orange-500">Payment Policy</span>
          </div>
        </div>
      </section>

      {/* CONTENT AREA */}
      <section className="bg-[#f0f0f0] text-slate-800 py-20 px-6 lg:px-40">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">
            Payment <span className="text-cyan-600">Policy</span>
          </h2>
          
          <div className="space-y-6 text-[13px] leading-relaxed text-slate-700 italic font-medium">
            <p>
              * Company is responsible for indication of the Client's Account balance in any particular moment.
            </p>
            <p>
              * Company's responsibility starts from the moment when the first record about Client's funds deposit is placed, changed depending on results of the Client's Operations and continues up to the moment when the Client's request for full withdrawal of the funds from the Client's Account will be processed.
            </p>
            <p>
              * The only official methods of deposits/withdrawals are the methods which appear on the Site. Client is taking all risks related to the usage of the payment methods, as to the fact that the payment methods providers are not Company's partners and such activity is not in Company's responsibility. Company is not responsible for any delay or cancellation of funds transaction which was caused by the payment method provider. If Client has any claims related to any of the payment methods, it's in Client's responsibility to contact the support of the particular payment method provider and to notify Company about such claims.
            </p>
            <p>
              * Company doesn't take any responsibility to the activity of any third part service providers which Client may use in order to make any deposit/withdrawal. Company's financial responsibility towards Client's funds starts at the moment the funds arrives to the Company's bank account or any other account related to Company and that appears at the Company payment methods page on the Site. Company doesn't take any responsibility for actions or omission of the third parties who are carrying out banking, billing, or any other activity, similar to it, or other intermediary activity related to the support of banking or other accounts, billing or transfer of the Client's funds. In case any fraud appears during the Operation or after it, Company reserves the right to cancel the Operation and to stop the Services provision regarding the Client's Account. Company's responsibility as to the Client's funds ends at the time the funds leaves Company's bank account or any other account related to Company and appears at the Company's payment methods page on the Site.
            </p>
            <p>
              * If any technical mistakes appear at the time of Operation Company reserves the right to cancel such Operation and stop all other Client's activity on the Site.
            </p>
            <p>
              * Company is not responsible for any failure to process the data related to any systems used by Client for payment, or for the issuing refusal to provide authorisation of the payment. Company is not responsible for the quality, quantity, price, terms or conditions of any Services or other facilities offered to Client on the Site or purchased by Client from the Site. When Client pays for any of the Services, Client is primarily bound by the Contract and Site terms and conditions. Only Client is responsible for paying for all Services ordered through the Site and for any additional expenses/fees that can be applied to this payment. Company acts only as the executor of the payment in the amount stated by the Site, and it is not responsible for pricing, total prices and/or total sums. The Client understands and confirms that the Client is solely responsible for any foreign exchange fees levied by the Client's bank or any payment processor in cases when the Client deposits or withdraws funds in the currency different from the currency of the Client's trading account. The Client further understands and confirms that the Company shall not bear any responsibility for the reimbursement of any such foreign exchange charges. In case there is a situation when Client do not agree with the aforementioned terms and conditions and/or other reasons, Client is obliged to notify the company immediately.
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

export default PaymentPolicy;