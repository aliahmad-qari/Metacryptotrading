
import React from 'react';

const BuyCrypto: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#bcbcbc] flex flex-col items-center py-0 animate-in fade-in duration-500">
      {/* Top Header Label */}
      <div className="w-full bg-[#333333] py-3 flex items-center justify-center space-x-2 text-[#ffc107] font-bold text-lg shadow-sm border-b border-white/5">
        <i className="fa-solid fa-crosshairs text-xl"></i>
        <span>Buy Cryptocurrency</span>
      </div>

      {/* Market Ticker */}
      <div className="w-full bg-black overflow-hidden py-2 border-b border-white/10">
        <div className="flex space-x-8 animate-ticker whitespace-nowrap text-[10px] font-bold px-4">
          <span className="text-white flex items-center space-x-2">
            <span className="text-white/40">BTC/USD</span> <span>78,192</span> <span className="text-red-500">-474.00 (-0.60%)</span>
          </span>
          <span className="text-white flex items-center space-x-2 border-l border-white/20 pl-8">
            <span className="text-white/40">ETH/USD</span> <span>2,297.0</span> <span className="text-red-500">-46.80 (-2.00%)</span>
          </span>
          <span className="text-white flex items-center space-x-2 border-l border-white/20 pl-8">
            <span className="text-white/40">EUR/USD</span> <span>1.17987</span> <span className="text-green-500">+0.00 (+0.09%)</span>
          </span>
          <span className="text-white flex items-center space-x-2 border-l border-white/20 pl-8">
            <span className="text-white/40">BTC/USD</span> <span>78,192</span> <span className="text-red-500">-474.00 (-0.60%)</span>
          </span>
        </div>
      </div>

      <div className="w-full max-w-7xl mt-8 px-4 space-y-10 mb-20">
        {/* Pending Deposit Table */}
        <div className="bg-white p-6 shadow-md rounded-sm">
           <p className="text-slate-800 text-[10px] font-medium mb-4">No Pending deposit Record Found,Create a deposit Order.</p>
           <div className="overflow-x-auto">
             <table className="w-full border border-slate-200">
               <thead className="bg-white text-slate-800 text-[10px] font-bold uppercase">
                 <tr className="border-b border-slate-200">
                   <th className="px-4 py-2 text-left border-r border-slate-200">Wallet Address</th>
                   <th className="px-4 py-2 text-left border-r border-slate-200">Date</th>
                   <th className="px-4 py-2 text-left border-r border-slate-200">Amount(USD)</th>
                   <th className="px-4 py-2 text-left border-r border-slate-200">Method</th>
                   <th className="px-4 py-2 text-left border-r border-slate-200">STATUS</th>
                   <th className="px-4 py-2 text-left">ACTION</th>
                 </tr>
               </thead>
               <tbody>
                 {/* Table Body - Placeholder based on "No Record Found" */}
                 <tr className="h-10">
                   <td className="border-r border-slate-100"></td>
                   <td className="border-r border-slate-100"></td>
                   <td className="border-r border-slate-100"></td>
                   <td className="border-r border-slate-100"></td>
                   <td className="border-r border-slate-100"></td>
                   <td></td>
                 </tr>
               </tbody>
             </table>
           </div>
        </div>

        {/* Purchase Options Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* BANXA Card */}
          <div className="bg-black text-white p-8 rounded-sm shadow-xl border-l-4 border-orange-500">
             <h3 className="text-lg font-bold mb-4">PURCHASE Via BANXA.</h3>
             <p className="text-[#ffc107] text-xs font-bold leading-relaxed mb-8">
               Copy the bitcoin wallet address to be pasted in the Next step.[ONLY BITCOIN AVAILABLE]
             </p>
             <button className="bg-[#ff9800] hover:bg-orange-600 text-white font-bold py-2 px-6 rounded text-xs transition-colors uppercase tracking-tight">
                Purchase Now.
             </button>
          </div>

          {/* CHANGELLY Card */}
          <div className="bg-black text-white p-8 rounded-sm shadow-xl border-l-4 border-orange-500">
             <h3 className="text-lg font-bold mb-4">PURCHASE Via CHANGELLY.</h3>
             <p className="text-[#ffc107] text-xs font-bold leading-relaxed mb-8">
               Copy the Bitcoin, Ethereum or Bitcoin cash wallet address to be pasted in the Next step.
             </p>
             <button className="bg-[#ff9800] hover:bg-orange-600 text-white font-bold py-2 px-6 rounded text-xs transition-colors uppercase tracking-tight">
                Purchase Now
             </button>
          </div>
        </div>

        {/* Info Box */}
        <div className="bg-[#c5bd79] border border-blue-400 p-6 flex items-start space-x-4 shadow-sm">
           <div className="text-[#004d99] text-2xl mt-1">
              <i className="fa-solid fa-circle-info"></i>
           </div>
           <p className="text-[#004d99] text-xs font-bold leading-relaxed">
             You can purchase and Fund your trading account using anyother exchanger of your choice by sending the exact amount of your created order into the generated Digital Wallet. Please contact support team; support@Metacryptotrading.net
           </p>
        </div>

        {/* Footer Text */}
        <div className="text-[10px] text-slate-800 text-center pb-10 leading-normal font-medium max-w-7xl mx-auto mt-12 opacity-70 px-4 uppercase tracking-tighter">
          Metacryptotrading is licensed under FSC. Metacryptotrading is the trade name of Metacryptotrading Trade LLC, a company regulated as a Securities and Exchange Commission By the Financial Services Authority of Washington DC
        </div>

        {/* Preserved original terminal logic hidden internally */}
        <div className="hidden">
           <input type="number" defaultValue="1000" />
           <button>CONTINUE PURCHASE</button>
        </div>
      </div>

      <style>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-ticker {
          display: flex;
          width: 200%;
          animation: ticker 25s linear infinite;
        }
        .animate-ticker:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default BuyCrypto;
