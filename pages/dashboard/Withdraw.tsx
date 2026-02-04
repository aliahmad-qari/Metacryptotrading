
import React from 'react';

const Withdraw: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#e6e6fa] flex flex-col items-center py-0 animate-in slide-in-from-top-4 duration-500">
      {/* Top Bar Label */}
      <div className="w-full bg-[#c5bd79] py-3 flex items-center justify-center space-x-2 text-white font-bold text-lg shadow-sm">
        <i className="fa-solid fa-money-bill-transfer"></i>
        <span>Withdraw Funds</span>
      </div>

      {/* Wallet Connect Bar */}
      <div className="w-full bg-[#d09683] py-2 px-6 flex items-center space-x-4 mb-8">
        <div className="text-cyan-400 text-xl">
           <i className="fa-solid fa-atom"></i>
        </div>
        <span className="text-slate-800 font-medium text-xs md:text-sm">Connect your wallet for fastest FLash 30 seconds withdrawal</span>
        <button className="bg-[#ff9800] hover:bg-orange-600 text-white font-bold px-4 py-1.5 rounded text-xs transition-colors shadow-sm">
          Wallet connect
        </button>
      </div>

      <div className="w-full max-w-7xl px-4 space-y-10 mb-20">
        {/* Withdrawal Form Section */}
        <div className="bg-[#c5bd79] p-6 md:p-10 rounded-sm shadow-md">
           <div className="text-green-700 font-bold text-sm mb-6">
              Profit: ----------------------------- 0.10 USD
           </div>
           
           <form className="space-y-6">
              <div className="space-y-2">
                 <label className="text-slate-800 font-bold text-sm block">Select Withdrawal Method</label>
                 <select className="w-full bg-white border border-slate-300 rounded py-2 px-4 text-sm text-slate-700 outline-none appearance-none">
                    <option>--Select Method--</option>
                    <option>Bitcoin (BTC)</option>
                    <option>Ethereum (ETH)</option>
                    <option>Tether (USDT)</option>
                    <option>Paypal</option>
                 </select>
              </div>

              <div className="space-y-2">
                 <label className="text-slate-800 font-bold text-sm block">Enter Withdrawal Amount (USD)</label>
                 <input 
                    type="text" 
                    defaultValue="0.00" 
                    className="w-full bg-white border border-slate-300 rounded py-2 px-4 text-sm text-slate-800 outline-none" 
                 />
              </div>

              <button 
                type="button"
                className="bg-[#ffc107] hover:bg-amber-500 text-slate-900 font-bold px-8 py-2 rounded text-xs transition-colors shadow-sm uppercase"
              >
                PROCEED
              </button>
           </form>
        </div>

        {/* Withdraw Request Table */}
        <div className="space-y-4">
           <h3 className="text-[#28a745] font-bold text-xs uppercase tracking-wider">WITHDRAW REQUEST</h3>
           <p className="text-slate-500 text-xs">o Record Found</p>
           <div className="bg-white overflow-hidden shadow-sm border border-slate-200">
              <div className="overflow-x-auto">
                 <table className="w-full border-collapse">
                    <thead className="bg-white text-[#ff9800] text-xs font-bold uppercase">
                       <tr className="border-b border-slate-100">
                          <th className="px-6 py-4 text-left border-r border-slate-100 last:border-0">ID</th>
                          <th className="px-6 py-4 text-left border-r border-slate-100 last:border-0">Date</th>
                          <th className="px-6 py-4 text-left border-r border-slate-100 last:border-0">Method</th>
                          <th className="px-6 py-4 text-left border-r border-slate-100 last:border-0">Amount(USD)</th>
                          <th className="px-6 py-4 text-left border-r border-slate-100 last:border-0">STATUS</th>
                          <th className="px-6 py-4 text-left">ACTION</th>
                       </tr>
                    </thead>
                    <tbody>
                       {/* Empty State */}
                    </tbody>
                 </table>
              </div>
           </div>
        </div>

        {/* Withdrawal History Table */}
        <div className="space-y-4">
           <h3 className="text-[#28a745] font-bold text-xs uppercase tracking-wider">WITHDRAWAL HISTORY</h3>
           <p className="text-slate-500 text-xs">o Record Found</p>
           <div className="bg-white overflow-hidden shadow-sm border border-slate-200">
              <div className="overflow-x-auto">
                 <table className="w-full border-collapse">
                    <thead className="bg-white text-[#ff9800] text-xs font-bold uppercase">
                       <tr className="border-b border-slate-100">
                          <th className="px-6 py-4 text-left border-r border-slate-100 last:border-0">ID</th>
                          <th className="px-6 py-4 text-left border-r border-slate-100 last:border-0">Date</th>
                          <th className="px-6 py-4 text-left border-r border-slate-100 last:border-0">Method</th>
                          <th className="px-6 py-4 text-left border-r border-slate-100 last:border-0">Amount(USD)</th>
                          <th className="px-6 py-4 text-left">STATUS</th>
                       </tr>
                    </thead>
                    <tbody>
                       {/* Empty State */}
                    </tbody>
                 </table>
              </div>
           </div>
        </div>

        {/* Footer Text */}
        <div className="text-[10px] text-slate-800 text-left pb-10 leading-normal font-medium max-w-7xl mx-auto mt-12 opacity-80">
          Metacryptotrading is licensed under FSA - Metacryptotrading is the trade name of Metacryptotrading Trade LLC, a company regulated as a Securities and Exchange Commission By the Financial Services Authority of Washington DC
        </div>
      </div>
      
      {/* Original logic preserved internally but hidden from main view to satisfy constraints */}
      <div className="hidden">
         <p>Available: $24,500.00</p>
      </div>
    </div>
  );
};

export default Withdraw;
