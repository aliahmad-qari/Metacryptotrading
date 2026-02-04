
import React from 'react';

const Deposit: React.FC = () => {
  const methods = [
    { 
      name: 'Paypal', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg',
      color: 'text-orange-500' 
    },
    { 
      name: 'Bitcoin', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/4/46/Bitcoin.svg',
      color: 'text-orange-500' 
    },
    { 
      name: 'Usdt(tether)', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Tether_Logo.svg',
      color: 'text-orange-500' 
    }
  ];

  return (
    <div className="min-h-screen bg-[#e6e6fa] flex flex-col items-center py-0 animate-in fade-in duration-500">
      {/* Top Wallet Connect Bar */}
      <div className="w-full bg-[#d09683] py-2 px-6 flex items-center space-x-4">
        <div className="text-cyan-400 text-xl">
           <i className="fa-solid fa-atom"></i>
        </div>
        <span className="text-slate-800 font-medium text-sm">Connect your wallet for Fast Deposit</span>
        <button className="bg-[#ff9800] hover:bg-orange-600 text-white font-bold px-4 py-1.5 rounded text-sm transition-colors shadow-sm">
          Wallet connect
        </button>
      </div>

      <div className="w-full max-w-6xl mt-12 px-4">
        {/* Main Payment Container */}
        <div className="bg-[#fafff0] rounded shadow-lg overflow-hidden border border-blue-400/30 mb-10">
          {/* Purple Header */}
          <div className="bg-[#453c90] p-3 text-white font-bold text-center text-sm">
            We accept bitcoin payments and other cryptocurrencies are available
          </div>

          <div className="p-0">
            {methods.map((method, index) => (
              <div 
                key={method.name} 
                className={`flex items-center justify-center space-x-12 py-10 px-8 border-b border-blue-100 last:border-0 hover:bg-white transition-colors cursor-pointer group`}
              >
                <div className={`${method.color} font-bold text-sm w-32 text-right`}>
                  {method.name}
                </div>
                <div className="flex-shrink-0 w-48 h-16 flex items-center justify-center p-2">
                  <img 
                    src={method.logo} 
                    alt={method.name} 
                    className="max-w-full max-h-full object-contain filter group-hover:scale-105 transition-transform" 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Text - Match Screenshot text style */}
        <div className="text-[10px] text-slate-800 text-left pb-10 leading-normal font-medium max-w-5xl mx-auto px-4">
          Metacryptotrading Trade is licensed under FSA - Metacryptotrading is the trade name of Metacryptotrading Trade LLC, a company regulated as a Securities and Exchange Commission By the Financial Services Authority of Washington DC
        </div>

        {/* Keeping original logic hidden/accessible for developers if needed, but UI is replaced by screenshot design */}
        <div className="hidden">
           {/* Original methods data preserved internally */}
           {['Bitcoin', 'Ethereum', 'Tether', 'Solana'].map(m => <span key={m}>{m}</span>)}
        </div>
      </div>
    </div>
  );
};

export default Deposit;
