
import React, { useEffect, useRef } from 'react';
import { User } from '../../types';

const Overview: React.FC<{ user: User }> = ({ user }) => {
  const chartContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/tv.js';
    script.async = true;
    script.onload = () => {
      if (typeof (window as any).TradingView !== 'undefined' && chartContainerRef.current) {
        new (window as any).TradingView.widget({
          "width": "100%",
          "height": 400,
          "symbol": "COINBASE:BTCUSD",
          "interval": "1",
          "timezone": "Etc/UTC",
          "theme": "dark",
          "style": "1",
          "locale": "en",
          "toolbar_bg": "#f1f3f6",
          "enable_publishing": false,
          "hide_side_toolbar": false,
          "allow_symbol_change": true,
          "container_id": "tv_chart_overview"
        });
      }
    };
    document.head.appendChild(script);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Top Referral Link Bar */}
      <div className="bg-white border-b border-blue-400 p-2 flex items-center justify-between text-black text-[11px]">
        <span className="truncate">https://metacryptotrading.net/register.php?referral=test</span>
        <button className="bg-[#ff9800] text-white px-3 py-1 font-bold">Copy Referral Link</button>
      </div>
      
      {/* Alert Banner */}
      <div className="bg-white border border-blue-200 p-3 mx-4 mt-4 text-blue-800 text-[11px] leading-tight">
        up to 20-25% of your referral start up capital. Just copy and send your referral link to a friend or family.
      </div>

      {/* Greeting and Mining Section */}
      <div className="bg-[#ffffcc] p-4 m-4 border border-slate-300 rounded shadow-sm text-black">
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <div className="text-orange-500 font-bold text-xs">Dashboard: verified</div>
            <div className="text-green-600 font-bold text-sm italic">Hello {user.name}, good day!</div>
            <div className="text-orange-500 font-bold text-sm">Mining level: 0%</div>
            <div className="text-black font-bold text-sm">Rate: 0.00000128 BTC</div>
          </div>
        </div>
        <div className="w-full h-4 bg-slate-200 rounded mt-2 border border-slate-300">
           <div className="w-[5%] h-full bg-slate-400"></div>
        </div>
      </div>

      {/* Main Stats Area */}
      <div className="bg-black p-4">
        {/* Top Icons Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center mb-8">
          <div className="flex flex-col items-center">
            <div className="text-white text-2xl mb-1"><i className="fa-solid fa-wallet"></i></div>
            <div className="text-yellow-400 font-bold text-xs uppercase tracking-tighter">Capital : .10 USD</div>
            <button className="mt-2 bg-[#00ff00]/10 text-[#00ff00] border border-[#00ff00] px-2 py-1 text-[10px] rounded hover:bg-[#00ff00]/20">Swap Bonus to Capital.</button>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-white text-2xl mb-1"><i className="fa-solid fa-briefcase"></i></div>
            <div className="text-yellow-400 font-bold text-xs uppercase tracking-tighter">Earned : .10 USD</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-white text-2xl mb-1"><i className="fa-solid fa-coins"></i></div>
            <div className="text-yellow-400 font-bold text-xs uppercase tracking-tighter">Currency : USD</div>
          </div>
          <div className="flex flex-col items-center">
             <div className="text-white text-2xl mb-1"><i className="fa-solid fa-won-sign"></i></div>
             <div className="text-yellow-400 font-bold text-xs uppercase tracking-tighter">Bonus : 100.10 USD</div>
          </div>
        </div>

        {/* Quick Action Icons */}
        <div className="grid grid-cols-4 gap-2 mb-10">
          {[
            { label: 'Top-up Capital', icon: 'fa-wallet', color: 'text-yellow-400' },
            { label: 'Withdrawal', icon: 'fa-money-bill-1-wave', color: 'text-yellow-400' },
            { label: 'News Update', icon: 'fa-newspaper', color: 'text-yellow-400' },
            { label: 'Setting', icon: 'fa-gear', color: 'text-yellow-400' }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center cursor-pointer group">
              <div className={`text-xl mb-1 ${item.color} group-hover:scale-110 transition-transform`}><i className={`fa-solid ${item.icon}`}></i></div>
              <span className="text-cyan-400 text-[10px] font-bold">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Market Marquee Ticker */}
        <div className="overflow-hidden bg-[#111] p-2 mb-4 border-y border-white/5">
           <div className="flex space-x-8 animate-marquee whitespace-nowrap text-[10px] font-bold">
              <span className="text-white flex items-center"><span className="w-2 h-2 rounded-full bg-orange-500 mr-2"></span> $78186.9 <span className="text-green-500 ml-1">+0.3%</span> <span className="ml-2 text-orange-500">KAI $0.00080</span> <span className="text-red-500 ml-1">-10.7%</span></span>
              <span className="text-white flex items-center"><span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span> $0.29818 <span className="text-green-500 ml-1">+0.8%</span> <span className="ml-2 text-blue-500">DEXT $0.15692</span> <span className="text-red-500 ml-1">-11.5%</span></span>
              <span className="text-white flex items-center"><span className="w-2 h-2 rounded-full bg-yellow-500 mr-2"></span> $0.10762 <span className="text-green-600 ml-1">+1.5%</span> <span className="ml-2 text-yellow-600">WEN $0.00001</span> <span className="text-red-500 ml-1">-12.1%</span></span>
              <span className="text-white flex items-center"><span className="w-2 h-2 rounded-full bg-red-500 mr-2"></span> $0.28616 <span className="text-green-500 ml-1">+0.2%</span> <span className="ml-2 text-red-600">DIF $0.00625</span> <span className="text-red-500 ml-1">-17.3%</span></span>
           </div>
        </div>

        {/* Market Table */}
        <div className="bg-[#2d3440] rounded overflow-hidden mb-6">
           <div className="overflow-x-auto">
             <table className="w-full text-[10px] text-left border-collapse">
               <thead className="bg-[#3b4455] text-white/70 font-bold uppercase border-b border-white/10">
                 <tr>
                   <th className="px-4 py-2">Rank</th>
                   <th className="px-4 py-2">Name</th>
                   <th className="px-4 py-2">Price</th>
                   <th className="px-4 py-2">Market Cap</th>
                   <th className="px-4 py-2">Volume</th>
                   <th className="px-4 py-2">Last 24h</th>
                 </tr>
               </thead>
               <tbody className="divide-y divide-white/5">
                 <tr className="bg-[#232a35] hover:bg-white/5">
                   <td className="px-4 py-3">1</td>
                   <td className="px-4 py-3"><div className="flex items-center space-x-2"><i className="fa-brands fa-bitcoin text-orange-500 text-sm"></i> <span>Bitcoin <span className="text-white/40">[BTC]</span></span></div></td>
                   <td className="px-4 py-3 font-bold">$78,245.12</td>
                   <td className="px-4 py-3">$1.56 T</td>
                   <td className="px-4 py-3"><div className="flex flex-col"><span>$1.18 B</span><span className="text-[8px] text-white/40">B 15K</span></div></td>
                   <td className="px-4 py-3 text-red-500">-12.97%</td>
                 </tr>
                 <tr className="bg-[#232a35] hover:bg-white/5">
                   <td className="px-4 py-3">2</td>
                   <td className="px-4 py-3"><div className="flex items-center space-x-2"><i className="fa-brands fa-ethereum text-blue-400 text-sm"></i> <span>Ethereum <span className="text-white/40">[ETH]</span></span></div></td>
                   <td className="px-4 py-3 font-bold">$2,382.54</td>
                   <td className="px-4 py-3">$278.72 B</td>
                   <td className="px-4 py-3"><div className="flex flex-col"><span>$1.06 B</span><span className="text-[8px] text-white/40">ETH 463K</span></div></td>
                   <td className="px-4 py-3 text-red-500">-25.06%</td>
                 </tr>
                 <tr className="bg-[#232a35] hover:bg-white/5">
                   <td className="px-4 py-3">3</td>
                   <td className="px-4 py-3"><div className="flex items-center space-x-2"><i className="fa-solid fa-dollar-sign text-green-500 text-sm"></i> <span>Tether <span className="text-white/40">[USDT]</span></span></div></td>
                   <td className="px-4 py-3 font-bold">$1.00</td>
                   <td className="px-4 py-3">$74.17 B</td>
                   <td className="px-4 py-3"><div className="flex flex-col"><span>$5.16 B</span><span className="text-[8px] text-white/40">USDT 4.75 B</span></div></td>
                   <td className="px-4 py-3 text-green-500">+8.12%</td>
                 </tr>
               </tbody>
             </table>
           </div>
        </div>

        {/* Trading Chart View */}
        <div className="bg-[#ffffcc] p-1 rounded-sm border border-slate-300 mb-6">
           <div id="tv_chart_overview" ref={chartContainerRef} className="rounded-sm overflow-hidden min-h-[400px]"></div>
           <div className="text-center py-1 bg-white text-[9px] text-blue-600 italic">Personal trading chart</div>
        </div>

        {/* Bottom Section: Latest Investments and Price List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-10">
           {/* Latest Investments Table */}
           <div className="bg-[#333] rounded overflow-hidden">
             <div className="bg-[#222] px-4 py-2 border-b border-white/10 text-xs font-bold">Latest Investments</div>
             <div className="p-0 overflow-x-auto min-h-[150px]">
               <table className="w-full text-[9px] text-left">
                 <thead className="bg-[#444] text-white/60">
                   <tr>
                     <th className="px-2 py-1.5">Date</th>
                     <th className="px-2 py-1.5">Amount</th>
                     <th className="px-2 py-1.5">Type</th>
                     <th className="px-2 py-1.5">Status</th>
                   </tr>
                 </thead>
                 <tbody>
                   {/* Empty for now to match screenshot "No history" feel but placeholder provided */}
                 </tbody>
               </table>
             </div>
             <div className="p-3 grid grid-cols-2 gap-3 bg-[#444]/20">
                <button className="bg-cyan-500 text-white text-[10px] font-bold py-1.5 rounded uppercase">View All</button>
                <button className="bg-[#ff9800] text-white text-[10px] font-bold py-1.5 rounded uppercase">Profit History</button>
             </div>
           </div>

           {/* Currency Ticker / Price List */}
           <div className="bg-[#2d3440] rounded overflow-hidden">
              <div className="flex border-b border-white/10">
                 {['USD', 'EUR', 'CNY', 'GBP'].map((cur) => (
                   <button key={cur} className={`flex-1 py-1.5 text-[10px] font-bold border-r border-white/5 last:border-0 ${cur === 'USD' ? 'bg-[#3b4455] text-white' : 'text-white/40 hover:text-white'}`}>
                     {cur}
                   </button>
                 ))}
              </div>
              <div className="p-2 space-y-1.5">
                 {[
                   { name: 'BTC', price: '$78,136.0', change: '3.27%', up: true },
                   { name: 'ETH', price: '$2,382.54', change: '-4.93%', up: false },
                   { name: 'XMR', price: '$165.90', change: '-3.71%', up: false },
                   { name: 'LTC', price: '$59.97', change: '2.45%', up: true },
                   { name: 'DASH', price: '$12.71', change: '-4.78%', up: false }
                 ].map((c) => (
                   <div key={c.name} className="flex justify-between items-center text-[10px] px-2">
                     <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 bg-white/10 rounded-full flex items-center justify-center"><i className={`fa-solid ${c.name === 'BTC' ? 'fa-bitcoin' : 'fa-coins'} text-[8px]`}></i></div>
                        <span className="font-bold text-white/70">{c.name}</span>
                     </div>
                     <div className="text-right">
                        <span className={`font-bold ${c.up ? 'text-green-500' : 'text-red-500'}`}>{c.price} ({c.change})</span>
                        <i className={`fa-solid ${c.up ? 'fa-caret-up text-green-500' : 'fa-caret-down text-red-500'} ml-1`}></i>
                     </div>
                   </div>
                 ))}
              </div>
           </div>
        </div>

        {/* Footer Text */}
        <div className="text-[8px] text-white/30 text-center pb-4 leading-normal px-4">
           Metacryptotrading Market is licensed under FSC. Metacryptotrading is the trade name of Metacryptotrading Marketing LLC, a company regulated as a Securities and Exchange Commission by the Financial Services Authority.
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: 200%;
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default Overview;
