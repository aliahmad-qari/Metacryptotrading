
import React, { useEffect, useRef } from 'react';

const TradeView: React.FC = () => {
  const chartContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Preserve existing TradingView logic but integrate it into the new layout
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/tv.js';
    script.async = true;
    script.onload = () => {
      if (typeof (window as any).TradingView !== 'undefined' && chartContainerRef.current) {
        new (window as any).TradingView.widget({
          "width": "100%",
          "height": 450,
          "symbol": "BITSTAMP:BTCUSD",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "light",
          "style": "3", // Area style to match the green area chart in screenshot
          "locale": "en",
          "toolbar_bg": "#f1f3f6",
          "enable_publishing": false,
          "hide_top_toolbar": true,
          "save_image": false,
          "container_id": "tv_chart_main"
        });
      }
    };
    document.head.appendChild(script);
  }, []);

  const tickerItems = [
    { name: 'S&P 500', price: '6,994.8', change: '+0.25%', sub: '17.20', up: true, color: 'bg-red-600' },
    { name: 'US 100', price: '25,878.6', change: '+0.47%', sub: '120.50', up: true, color: 'bg-cyan-500' },
    { name: 'EUR/USD', price: '1.17966', change: '+0.07%', sub: '0.00', up: true, color: 'bg-blue-600' },
    { name: 'Bitcoin', price: '78,251', change: '-0.53%', sub: '415.00', up: false, color: 'bg-orange-500' },
    { name: 'Ethereum', price: '2,300.4', change: '-1.85%', sub: '43.40', up: false, color: 'bg-blue-800' },
  ];

  const newsItems = [
    { title: "Discord Stock Set for Market Debut in March IPO: What Traders Should Know", time: "4 days ago", icon: "fa-discord", color: "text-blue-400" },
    { title: "XAU/USD: Gold Plunges 9% in Aggressive Whiplash, Wiping Out Trillions of Dollars", time: "5 days ago", icon: "fa-coins", color: "text-yellow-500" },
    { title: "SPX: S&P 500 Hits 7,000 as Investors Take on Risk Amid Rush Hour Earnings", time: "6 days ago", icon: "fa-chart-line", color: "text-red-500" },
    { title: "SPX: S&P 500 Breaks into Record High as Magnificent Seven Rallies (with One Exception)", time: "6 days ago", icon: "fa-chart-pie", color: "text-red-500" },
    { title: "BTC/USD: Bitcoin Prices Hit Lowest Level Since Trump's Tariff Rollout in 2025", time: "4 days ago", icon: "fa-bitcoin", color: "text-orange-500" },
    { title: "AAPL: Apple Stock Steady Despite Best-Ever Quarter, Revenue Jumps 16% to Record", time: "6 days ago", icon: "fa-apple", color: "text-slate-400" },
    { title: "XAU/USD: Gold Goes Vertical as Prices Slice Through $5,300 on Global Rush to Safety", time: "6 days ago", icon: "fa-arrow-trend-up", color: "text-yellow-600" },
    { title: "GME: GameStop Adds to Strong Start of Year After Michael Burry Reveals Stake", time: "7 days ago", icon: "fa-gamepad", color: "text-red-600" },
    { title: "XAG/USD: Silver Plummets Another 12% as Crashing Prices Keep Hammering Long Bets", time: "4 days ago", icon: "fa-gem", color: "text-slate-300" },
    { title: "MSFT: Microsoft Stock Sheds $360 Billion in Steep Post-Earnings Selloff", time: "6 days ago", icon: "fa-microsoft", color: "text-blue-500" },
    { title: "DXY: Dollar Hits Four-Year Low After Trump Says US Currency Is \"Doing Great\"", time: "7 days ago", icon: "fa-dollar-sign", color: "text-green-500" },
    { title: "CRWV: CoreWeave Pops 6% After Nvidia Vows to Invest $2 Billion for Faster Buildout", time: "7 days ago", icon: "fa-server", color: "text-blue-600" },
  ];

  return (
    <div className="min-h-screen bg-[#bcbcbc] flex flex-col animate-in fade-in duration-500">
      {/* Top Header Label */}
      <div className="w-full bg-[#333333] py-3 flex items-center justify-center space-x-2 text-[#ffc107] font-bold text-lg shadow-sm border-b border-white/5">
        <i className="fa-solid fa-crosshairs text-xl"></i>
        <span>Trading View and News Updates</span>
      </div>

      {/* Market Stats Ticker Bar */}
      <div className="w-full bg-[#222] border-b border-white/10 px-4 py-3">
        <div className="max-w-7xl mx-auto flex overflow-x-auto space-x-8 no-scrollbar">
          {tickerItems.map((item, idx) => (
            <div key={idx} className="flex items-start space-x-3 flex-shrink-0 border-r border-white/10 pr-8 last:border-0">
              <div className={`w-4 h-4 rounded-full ${item.color} mt-1`}></div>
              <div className="flex flex-col">
                <div className="flex items-center space-x-2">
                  <span className="text-white text-[10px] font-bold uppercase">{item.name}</span>
                  <span className="text-white font-bold text-xs">{item.price}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <i className={`fa-solid ${item.up ? 'fa-caret-up text-green-500' : 'fa-caret-down text-red-500'} text-[10px]`}></i>
                  <span className={`text-xs font-bold ${item.up ? 'text-green-500' : 'text-red-500'}`}>{item.change}</span>
                  <span className="text-white/40 text-[10px]">{item.sub}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full bg-white py-1 flex items-center justify-center border-b border-slate-200">
         <span className="text-[#3b82f6] text-[10px] font-medium">Quotes <span className="text-slate-400">by TradingView</span></span>
      </div>

      {/* Top Stories Section */}
      <div className="bg-black py-10 px-6 md:px-12">
        <h2 className="text-white text-3xl font-bold mb-10">Top Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
          {newsItems.map((news, i) => (
            <div key={i} className="group cursor-pointer">
              <h3 className="text-white text-sm font-medium leading-relaxed group-hover:text-blue-400 transition-colors mb-3">
                {news.title}
              </h3>
              <div className="flex items-center space-x-2">
                <div className={`${news.color} text-xs`}>
                  <i className={`fa-solid ${news.icon}`}></i>
                </div>
                <span className="text-slate-500 text-[10px] font-bold uppercase">{news.time}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <button className="text-[#3b82f6] text-sm font-bold flex items-center hover:underline">
            Keep reading <i className="fa-solid fa-chevron-right ml-2 text-[10px]"></i>
          </button>
        </div>
      </div>

      {/* Daily News Roundup Table */}
      <div className="bg-black py-4">
        <div className="w-full flex justify-center py-2">
           <span className="text-[#3b82f6] text-[10px] font-medium">Daily news roundup <span className="text-slate-400">by Metacryptotrading</span></span>
        </div>
        <div className="bg-[#111] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-[9px] text-white border-collapse">
              <thead className="bg-[#222] text-slate-400 font-bold uppercase border-y border-white/5">
                <tr>
                  <th className="px-4 py-2 text-left w-64">NAME <br/><span className="text-[7px]">244 MATCHES</span></th>
                  <th className="px-4 py-2 text-right border-b-2 border-blue-500">MKT CAP</th>
                  <th className="px-4 py-2 text-right">FD MKT CAP</th>
                  <th className="px-4 py-2 text-right">PRICE</th>
                  <th className="px-4 py-2 text-right">AVAIL COINS</th>
                  <th className="px-4 py-2 text-right">TOTAL COINS</th>
                  <th className="px-4 py-2 text-right">TRADED VOL</th>
                  <th className="px-4 py-2 text-right">CHG %</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  { name: 'Bitcoin', mkt: '1.56 T', fd: '1.64 T', price: '78,232', avail: '19.98 M', total: '21 M', vol: '53.24 B', chg: '-0.55%', color: 'text-orange-500', icon: 'fa-bitcoin' },
                  { name: 'Ethereum', mkt: '277.76 B', fd: '277.76 B', price: '2,301.35', avail: '120.69 M', total: '120.69 M', vol: '34.33 B', chg: '-1.87%', color: 'text-blue-500', icon: 'fa-ethereum' },
                  { name: 'Tether USDT', mkt: '185.16 B', fd: '189.29 B', price: '0.99896', avail: '185.35 B', total: '189.48 B', vol: '110.73 B', chg: '-0.01%', color: 'text-cyan-500', icon: 'fa-dollar-sign' },
                  { name: 'Binance Coin', mkt: '105.57 B', fd: '105.57 B', price: '774.2', avail: '136.36 M', total: '136.36 M', vol: '2.14 B', chg: '0.08%', color: 'text-yellow-500', icon: 'fa-coins' },
                  { name: 'XRP', mkt: '97.71 B', fd: '160.57 B', price: '1.60569', avail: '60.85 B', total: '100 B', vol: '3.02 B', chg: '-0.75%', color: 'text-slate-400', icon: 'fa-x' },
                  { name: 'Solana', mkt: '58.3 B', fd: '63.77 B', price: '102.93', avail: '566.43 M', total: '619.58 M', vol: '4.14 B', chg: '-1.47%', color: 'text-cyan-400', icon: 'fa-s' },
                  { name: 'TRON', mkt: '26.83 B', fd: '26.83 B', price: '0.28327181', avail: '94.72 B', total: '94.72 B', vol: '677.09 M', chg: '0.21%', color: 'text-red-500', icon: 'fa-t' },
                  { name: 'Dogecoin', mkt: '18.19 B', fd: '18.19 B', price: '0.1079', avail: '168.59 B', total: '168.59 B', vol: '1.27 B', chg: '0.09%', color: 'text-yellow-600', icon: 'fa-paw' },
                ].map((coin, i) => (
                  <tr key={i} className="hover:bg-white/5">
                    <td className="px-4 py-3 flex items-center space-x-2">
                       <i className={`fa-solid ${coin.icon} ${coin.color} text-[10px]`}></i>
                       <span className="text-blue-500 font-bold">{coin.name}</span>
                    </td>
                    <td className="px-4 py-3 text-right font-bold">{coin.mkt}</td>
                    <td className="px-4 py-3 text-right font-bold">{coin.fd}</td>
                    <td className="px-4 py-3 text-right font-bold">{coin.price}</td>
                    <td className="px-4 py-3 text-right font-bold">{coin.avail}</td>
                    <td className="px-4 py-3 text-right font-bold">{coin.total}</td>
                    <td className="px-4 py-3 text-right font-bold">{coin.vol}</td>
                    <td className={`px-4 py-3 text-right font-bold ${coin.chg.startsWith('-') ? 'text-red-600' : 'text-green-500'}`}>{coin.chg}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Main Interactive Chart Section */}
      <div className="bg-[#bcbcbc] p-6">
        <div className="bg-white rounded-sm border border-slate-300 shadow-xl overflow-hidden">
           {/* Currency Tabs */}
           <div className="flex border-b border-slate-200 p-4 space-x-2">
              {['USD', 'EUR', 'CNY', 'GBP'].map((cur) => (
                <button 
                  key={cur} 
                  className={`px-3 py-1 border border-slate-300 font-bold text-xs uppercase ${cur === 'USD' ? 'text-red-600 border-red-600' : 'text-slate-800'}`}
                >
                  {cur}
                </button>
              ))}
           </div>

           {/* Exchange Selectors */}
           <div className="px-6 py-4 flex flex-wrap gap-x-12 gap-y-4 text-[10px] font-bold">
              {[
                { name: 'Index', color: 'text-green-600' },
                { name: 'Binance', color: 'text-red-600' },
                { name: 'Bitstamp', color: 'text-blue-500' },
                { name: 'Coinbase', color: 'text-orange-500' },
                { name: 'Kraken', color: 'text-slate-400' },
                { name: 'cryptodotcom', color: 'text-green-700' },
              ].map((ex) => (
                <label key={ex.name} className="flex items-center space-x-2 cursor-pointer">
                   <input type="checkbox" defaultChecked={ex.name === 'Index'} className="accent-blue-600" />
                   <span className={ex.color}>{ex.name}</span>
                </label>
              ))}
           </div>

           {/* Time Range Tabs */}
           <div className="px-6 py-2 flex space-x-2">
              {['1D', '1W', '1M', '3M', '1Y', 'ALL'].map((range) => (
                <button 
                  key={range} 
                  className={`px-4 py-1 text-[10px] font-bold rounded-sm border border-slate-100 ${range === '1M' ? 'bg-[#3b82f61a] text-[#3b82f6]' : 'text-slate-400'}`}
                >
                  {range}
                </button>
              ))}
           </div>

           {/* Chart Header */}
           <div className="px-6 pt-4 flex items-center space-x-2">
              <span className="text-slate-800 font-bold text-[10px]">Value</span>
              <div className="w-2.5 h-2.5 bg-green-500 rounded-sm"></div>
              <span className="text-slate-800 font-bold text-xs">$ 78,242.42</span>
           </div>

           {/* Main Chart Container */}
           <div className="px-6 py-4">
              <div id="tv_chart_main" ref={chartContainerRef} className="w-full bg-slate-50 min-h-[450px] border border-slate-100"></div>
           </div>

           {/* Volume Section */}
           <div className="px-6 py-4 border-t border-slate-100">
              <div className="flex items-center space-x-2 mb-4">
                 <span className="text-slate-800 font-bold text-[10px]">Volume</span>
                 <div className="w-2.5 h-2.5 bg-green-500 rounded-sm"></div>
                 <span className="text-slate-800 font-bold text-xs">$ 35,763,669.05</span>
              </div>
              {/* Volume Bars Mockup */}
              <div className="h-24 w-full flex items-end space-x-1 px-1">
                 {Array.from({ length: 80 }).map((_, i) => (
                   <div 
                     key={i} 
                     style={{ height: `${Math.random() * 100}%` }} 
                     className="bg-green-500 w-full rounded-t-[1px] opacity-70"
                   ></div>
                 ))}
              </div>
              <div className="flex justify-between text-[8px] font-bold text-slate-400 mt-2 px-10">
                 <span>Jan 07</span>
                 <span>Jan 10</span>
                 <span>Jan 13</span>
                 <span>Jan 16</span>
                 <span>Jan 19</span>
                 <span>Jan 22</span>
                 <span>Jan 25</span>
                 <span>Jan 28</span>
                 <span>Jan 31</span>
                 <span>Feb</span>
              </div>
           </div>

           {/* Bottom Mini Ticker/Brush Area */}
           <div className="px-6 pb-6 pt-2">
              <div className="h-6 w-full bg-slate-200/50 rounded-full relative overflow-hidden flex items-center px-10">
                 <div className="absolute left-1/4 w-1/2 h-full bg-white/40 border-x border-slate-300"></div>
                 <div className="flex-grow h-1 bg-slate-400/20 rounded-full"></div>
              </div>
              <div className="flex justify-between text-[7px] font-bold text-slate-400 mt-1 px-10 italic">
                 <span>Jan 07</span>
                 <span>Jan 10</span>
                 <span>Jan 13</span>
                 <span>Jan 16</span>
                 <span>Jan 19</span>
                 <span>Jan 22</span>
                 <span>Jan 25</span>
                 <span>Jan 28</span>
                 <span>Jan 31</span>
                 <span>Feb</span>
              </div>
           </div>
        </div>

        {/* Footer Text */}
        <div className="text-[9px] text-slate-600 text-center pb-10 leading-normal font-medium max-w-7xl mx-auto mt-12 opacity-80 uppercase tracking-tighter">
          Metacryptotrading Trade is licensed under FSA - Metacryptotrading is the trade name of Metacryptotrading Trade LLC, a company regulated as a Securities and Exchange Commission By the Financial Services Authority of Washington DC
        </div>
      </div>
      
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default TradeView;
