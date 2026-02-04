
import React, { useEffect, useRef } from 'react';

const LiveTrade: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/tv.js';
    script.async = true;
    script.onload = () => {
      if (typeof (window as any).TradingView !== 'undefined' && containerRef.current) {
        new (window as any).TradingView.widget({
          "width": "100%",
          "height": 450,
          "symbol": "BITSTAMP:BTCUSD",
          "interval": "1",
          "timezone": "Etc/UTC",
          "theme": "dark",
          "style": "1",
          "locale": "en",
          "toolbar_bg": "#f1f3f6",
          "enable_publishing": false,
          "hide_side_toolbar": false,
          "allow_symbol_change": true,
          "container_id": "tv_chart_live"
        });
      }
    };
    document.head.appendChild(script);
  }, []);

  return (
    <div className="min-h-screen bg-[#555] flex flex-col animate-in fade-in duration-500">
      {/* Top Header Label */}
      <div className="w-full bg-[#333] py-3 flex items-center justify-center space-x-2 text-[#ffc107] font-bold text-lg shadow-sm border-b border-white/5">
        <i className="fa-solid fa-crosshairs text-xl"></i>
        <span>Crypto live Trade</span>
      </div>

      {/* Main Chart Section */}
      <div className="w-full bg-black border-b border-white/10">
        <div id="tv_chart_live" ref={containerRef} className="w-full min-h-[450px]"></div>
        <div className="bg-[#333] py-1 text-center border-t border-white/10">
           <span className="text-[#3b82f6] text-[10px] font-medium uppercase tracking-widest">BTCUSD Chart <span className="text-slate-400">by Liveview Trade</span></span>
        </div>
      </div>

      <div className="p-4 md:p-8 space-y-8 bg-[#bcbcbc]/40">
        {/* Stats Section */}
        <div className="space-y-1 font-bold text-xs">
          <div className="flex items-center space-x-2">
            <span className="text-green-500">Profit: -----------------------------</span>
            <span className="text-green-500">0.10 USD</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-yellow-500">Capital: -----------------------------</span>
            <span className="text-yellow-500">0.10 USD</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-cyan-400">Bonus: -----------------------------</span>
            <span className="text-cyan-400">100.10 USD</span>
          </div>
        </div>

        {/* Trade Form */}
        <div className="bg-[#444] p-6 rounded-sm shadow-xl border border-white/5">
           <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="space-y-1">
                    <label className="text-slate-400 text-[10px] uppercase font-bold block text-center">Select Assets</label>
                    <select className="w-full bg-white border border-slate-300 rounded-sm py-2 px-4 text-xs text-slate-800 outline-none appearance-none">
                       <option>--Select Assets--</option>
                       <option>Bitcoin / USD</option>
                       <option>Ethereum / USD</option>
                       <option>Litecoin / USD</option>
                    </select>
                 </div>
                 <div className="space-y-1">
                    <label className="text-slate-400 text-[10px] uppercase font-bold block text-center">Trade Duration</label>
                    <select className="w-full bg-white border border-slate-300 rounded-sm py-2 px-4 text-xs text-slate-800 outline-none appearance-none">
                       <option>--Select Duration(seconds)--</option>
                       <option>60 Seconds</option>
                       <option>120 Seconds</option>
                       <option>300 Seconds</option>
                    </select>
                 </div>
                 <div className="space-y-1">
                    <label className="text-slate-400 text-[10px] uppercase font-bold block text-center">Placed Amount(USD)</label>
                    <input 
                       type="text" 
                       placeholder="Placed Amount" 
                       className="w-full bg-white border border-slate-300 rounded-sm py-2 px-4 text-xs text-slate-800 outline-none" 
                    />
                 </div>
                 <div className="space-y-1">
                    <label className="text-slate-400 text-[10px] uppercase font-bold block text-center">Amount BTC</label>
                    <input 
                       type="text" 
                       placeholder="Amount BTC" 
                       className="w-full bg-white border border-slate-300 rounded-sm py-2 px-4 text-xs text-slate-800 outline-none" 
                    />
                 </div>
              </div>

              <div className="flex justify-center space-x-4 pt-4">
                 <button type="button" className="bg-[#dc3545] hover:bg-red-700 text-white font-bold py-2 px-8 rounded text-xs flex items-center space-x-2 transition-colors uppercase">
                    <span>BUY</span> <i className="fa-solid fa-arrow-trend-up text-[10px]"></i>
                 </button>
                 <button type="button" className="bg-[#28a745] hover:bg-green-700 text-white font-bold py-2 px-8 rounded text-xs flex items-center space-x-2 transition-colors uppercase">
                    <span>SELL</span> <i className="fa-solid fa-arrow-trend-down text-[10px]"></i>
                 </button>
              </div>
           </form>
        </div>

        {/* Trade History Section */}
        <div className="space-y-4">
           <h3 className="text-[#ffc107] font-bold text-xs uppercase tracking-wider">LAST 6 TRADE HISTORY</h3>
           <p className="text-slate-800 text-xs font-medium">No Record Found</p>
           <div className="bg-white overflow-hidden shadow-sm border border-slate-200">
              <div className="overflow-x-auto">
                 <table className="w-full border-collapse">
                    <thead className="text-white text-xs font-bold uppercase">
                       <tr>
                          <th className="px-6 py-4 text-left bg-[#ff9800] w-48">Date</th>
                          <th className="px-6 py-4 text-left bg-[#17a2b8]">Trade Asset</th>
                          <th className="px-6 py-4 text-left bg-white text-slate-800">Placed Amount(USD)</th>
                          <th className="px-6 py-4 text-left bg-[#ffc107]">STATUS</th>
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
        <div className="text-[9px] text-slate-800 text-left pb-10 leading-normal font-medium max-w-full opacity-80 mt-12">
          Metacryptotrading is licensed under FSA - Metacryptotrading is the trade name of Metacryptotrading Trade LLC, a company regulated as a Securities and Exchange Commission By the Financial Services Authority of Washington DC
        </div>
      </div>
      
      {/* Hidden legacy components for logic preservation */}
      <div className="hidden">
         <button>Advanced Trading</button>
         <div id="tv_chart_container"></div>
      </div>
    </div>
  );
};

export default LiveTrade;
