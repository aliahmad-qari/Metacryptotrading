
import React from 'react';

const CopyTraders: React.FC = () => {
  // Existing trader data preserved but expanded for the new UI
  const traders = [
    { 
      name: 'Trader Denise', 
      winRate: '90.9', 
      followers: '10000', 
      profitShare: '90.9',
      avatar: 'D' 
    }
  ];

  return (
    <div className="min-h-screen bg-slate-300 flex flex-col items-center py-0 animate-in fade-in duration-500">
      {/* Top Bar Label */}
      <div className="w-full bg-[#c5bd79] py-2 flex items-center justify-center space-x-2 text-white/90 font-bold text-sm">
        <i className="fa-solid fa-dharmachakra"></i>
        <span>Copy Traders</span>
      </div>

      <div className="w-full max-w-7xl mt-0">
        {/* Market Table Header Style */}
        <div className="bg-[#2d3440] overflow-hidden mb-4">
          <div className="overflow-x-auto">
            <table className="w-full text-[10px] text-left border-collapse text-white">
              <thead className="bg-[#3b4455] text-white/70 font-bold uppercase border-b border-white/10">
                <tr>
                  <th className="px-4 py-3">Rank</th>
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2 text-right md:text-left">Price</th>
                  <th className="px-4 py-2 hidden md:table-cell">Market Cap</th>
                  <th className="px-4 py-2 hidden md:table-cell">Volume</th>
                  <th className="px-4 py-2">Last 24h</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr className="bg-[#232a35]">
                  <td className="px-4 py-4">1</td>
                  <td className="px-4 py-4"><div className="flex items-center space-x-2"><i className="fa-brands fa-bitcoin text-orange-500 text-sm"></i> <span>Bitcoin <span className="text-white/40">[BTC]</span></span></div></td>
                  <td className="px-4 py-4 font-bold text-right md:text-left text-white/40">$78,012.74</td>
                  <td className="px-4 py-4 hidden md:table-cell text-white/40">$1.56 T</td>
                  <td className="px-4 py-4 hidden md:table-cell text-white/40"><div className="flex flex-col"><span>$1.18 B</span><span className="text-[8px] text-white/40">B 15K</span></div></td>
                  <td className="px-4 py-4 text-red-500 font-bold">-12.97%</td>
                </tr>
                <tr className="bg-[#232a35]">
                  <td className="px-4 py-4">2</td>
                  <td className="px-4 py-4"><div className="flex items-center space-x-2"><i className="fa-brands fa-ethereum text-blue-400 text-sm"></i> <span>Ethereum <span className="text-white/40">[ETH]</span></span></div></td>
                  <td className="px-4 py-4 font-bold text-right md:text-left text-white/40">$2,277.65</td>
                  <td className="px-4 py-4 hidden md:table-cell text-white/40">$278.72 B</td>
                  <td className="px-4 py-4 hidden md:table-cell text-white/40"><div className="flex flex-col"><span>$1.06 B</span><span className="text-[8px] text-white/40">ETH 463K</span></div></td>
                  <td className="px-4 py-4 text-red-500 font-bold">-25.06%</td>
                </tr>
                <tr className="bg-[#232a35]">
                  <td className="px-4 py-4">3</td>
                  <td className="px-4 py-4"><div className="flex items-center space-x-2"><i className="fa-solid fa-dollar-sign text-green-500 text-sm"></i> <span>Tether <span className="text-white/40">[USDT]</span></span></div></td>
                  <td className="px-4 py-4 font-bold text-right md:text-left text-white/40">$1.00</td>
                  <td className="px-4 py-4 hidden md:table-cell text-white/40">$74.17 B</td>
                  <td className="px-4 py-4 hidden md:table-cell text-white/40"><div className="flex flex-col"><span>$5.16 B</span><span className="text-[8px] text-white/40">USDT 4.75 B</span></div></td>
                  <td className="px-4 py-4 text-green-500 font-bold">+8.12%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Active Trader Status Bar */}
        <div className="bg-white p-4 mx-4 md:mx-10 flex items-center justify-center space-x-4 shadow-sm mb-6 border border-slate-200">
           <div className="text-cyan-600 text-2xl">
              <i className="fa-solid fa-atom"></i>
           </div>
           <p className="text-xs font-medium text-slate-700">
              ...know your copytrader. <span className="text-green-600 font-bold">[( 0 ) ACTIVE COPIED TRADER]</span>
           </p>
           <button className="bg-[#343a40] hover:bg-slate-700 text-white px-6 py-2 rounded font-bold text-xs transition-colors">
              View Copied Trades
           </button>
        </div>

        {/* Trader Card */}
        <div className="mx-4 md:mx-10 mb-20">
          {traders.map((t) => (
            <div key={t.name} className="bg-black text-white p-6 md:p-8 rounded-sm shadow-2xl relative overflow-hidden">
               <div className="flex flex-col md:flex-row items-start gap-6 mb-8 border-b border-blue-500 pb-8">
                  <div className="w-24 h-24 bg-white/10 rounded flex items-center justify-center border border-white/20">
                     <span className="text-white/30 text-xs text-center font-bold px-2 italic uppercase">avatar image</span>
                  </div>
                  <div className="flex flex-col space-y-2">
                     <span className="text-orange-500 font-bold text-xs uppercase tracking-tighter">Trader Name:</span>
                     <h3 className="text-xl font-bold">{t.name}</h3>
                     <button className="bg-[#28a745] hover:bg-green-600 text-white px-6 py-1.5 rounded font-bold text-xs w-fit transition-colors mt-2">
                        Copy
                     </button>
                  </div>
               </div>

               <div className="space-y-6">
                  <div className="flex items-center justify-between">
                     <span className="text-[#ffc107] font-bold text-sm tracking-tight">Win Rate:</span>
                     <span className="bg-[#17a2b8] text-white px-3 py-0.5 rounded-full text-xs font-black">{t.winRate}</span>
                  </div>
                  <div className="flex items-center justify-between">
                     <span className="text-[#ffc107] font-bold text-sm tracking-tight">Followers:</span>
                     <span className="bg-[#ffc107] text-black px-3 py-0.5 rounded-full text-xs font-black">{t.followers}</span>
                  </div>
                  <div className="flex items-center justify-between">
                     <span className="text-[#ffc107] font-bold text-sm tracking-tight">:Profit Share</span>
                     <span className="bg-[#dc3545] text-white px-3 py-0.5 rounded-full text-xs font-black">{t.profitShare}</span>
                  </div>
               </div>
            </div>
          ))}
        </div>

        {/* Footer Text */}
        <div className="text-[10px] text-slate-600 text-center pb-8 leading-normal uppercase tracking-tighter opacity-70 px-4">
          Metacryptotrading is the trade name of Metacryptotrading Trade LLC, a company regulated as a Securities and Exchange Commission By the Financial Services Authority of Washington DC.
        </div>
      </div>
    </div>
  );
};

export default CopyTraders;
