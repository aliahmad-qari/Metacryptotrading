
import React from 'react';

const Mining: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f5fff2] flex flex-col items-center py-0 animate-in fade-in duration-500">
      {/* Top Header Label */}
      <div className="w-full bg-[#c5bd79] py-3 flex items-center justify-center space-x-2 text-white font-bold text-lg shadow-sm border-b border-white/10">
        <i className="fa-solid fa-mobile-screen-button"></i>
        <span>New Investment</span>
      </div>

      <div className="w-full max-w-4xl mt-12 px-4 space-y-10 mb-20 flex flex-col items-center">
        
        {/* Main Form Card */}
        <div className="bg-[#f5e9a4] w-full max-w-2xl rounded-sm shadow-xl p-8 border border-slate-300">
          
          {/* Top Illustration Mockup */}
          <div className="flex justify-center mb-8">
            <div className="bg-white p-2 rounded shadow-sm border border-slate-200">
              <img 
                src="https://img.freepik.com/free-vector/crypto-wallet-concept-illustration_114360-5234.jpg?t=st=1740000000~exp=1740003600~hmac=mock" 
                alt="Mining Wallet" 
                className="w-64 h-auto object-contain"
              />
            </div>
          </div>

          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-slate-800 font-bold text-sm block">Wallet Type</label>
              <select className="w-full bg-white border border-slate-300 rounded py-2.5 px-4 text-sm text-slate-700 outline-none appearance-none cursor-pointer">
                <option>Bitcoin</option>
                <option>Ethereum</option>
                <option>USDT (Tether)</option>
                <option>Solana</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-slate-800 font-bold text-sm block">Wallet Address</label>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Paste wallet address" 
                  className="w-full bg-white border border-slate-300 rounded py-2.5 pl-4 pr-12 text-sm text-slate-800 outline-none" 
                />
                <div className="absolute right-0 top-0 h-full w-10 bg-slate-100 border-l border-slate-300 rounded-r flex items-center justify-center text-slate-600">
                  <i className="fa-solid fa-wallet text-sm"></i>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-col space-y-4">
              <button 
                type="button"
                className="bg-[#5cb85c] hover:bg-[#4cae4c] text-white font-bold py-3 rounded text-sm transition-colors shadow-sm w-full"
              >
                Create a Mining Account
              </button>
              
              <button 
                type="button"
                className="bg-[#f0ad4e] hover:bg-[#ec971f] text-white font-bold py-2.5 px-6 rounded text-sm transition-colors shadow-sm w-fit"
              >
                View Mining Account.
              </button>
            </div>
          </form>
        </div>

        {/* Footer Text */}
        <div className="text-[10px] text-slate-800 text-left pb-10 leading-normal font-medium max-w-full opacity-80 mt-12">
          Metacryptotrading Trade is licensed under FSA - Metacryptotrading is the trade name of Metacryptotrading Trade LLC, a company regulated as a Securities and Exchange Commission By the Financial Services Authority of Washington DC
        </div>

        {/* Preserved Original Infrastructure Logic (Hidden) */}
        <div className="hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            <div className="bg-[#0a0f1e] border border-white/5 p-6 rounded-3xl">
              <div className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-4">Total Hash Power</div>
              <div className="flex items-baseline space-x-2">
                 <span className="text-3xl font-black">42.8</span>
                 <span className="text-blue-500 font-bold">TH/s</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mining;
