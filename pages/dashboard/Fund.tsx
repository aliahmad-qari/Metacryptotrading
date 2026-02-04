
import React from 'react';
import { INVESTMENT_PLANS } from '../../constants';

const Fund: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h1 className="text-2xl font-bold">Investment Portfolios</h1>
        <p className="text-slate-400 text-sm">Choose a plan to grow your wealth with our AI strategies.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {INVESTMENT_PLANS.map((plan) => (
          <div key={plan.id} className="bg-[#0a0f1e] border border-white/5 rounded-3xl p-6 flex flex-col hover:border-blue-500/50 transition-all group shadow-xl">
            <h4 className="text-lg font-bold mb-4">{plan.name}</h4>
            <div className="flex items-baseline mb-6">
               <span className="text-3xl font-black text-blue-500">{plan.roiPercent}%</span>
               <span className="ml-2 text-xs text-slate-500 font-bold uppercase">ROI</span>
            </div>
            <ul className="space-y-3 mb-8 flex-grow">
               <li className="flex items-center text-xs text-slate-400">
                  <i className="fa-solid fa-check text-blue-500 mr-2"></i>
                  Min: ${plan.minAmount}
               </li>
               <li className="flex items-center text-xs text-slate-400">
                  <i className="fa-solid fa-check text-blue-500 mr-2"></i>
                  Duration: {plan.durationDays} Days
               </li>
               <li className="flex items-center text-xs text-slate-400">
                  <i className="fa-solid fa-check text-blue-500 mr-2"></i>
                  Withdraw: Daily
               </li>
            </ul>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-blue-900/20">
              Select Plan
            </button>
          </div>
        ))}
      </div>

      <div className="bg-[#0a0f1e] border border-white/5 rounded-3xl p-8">
        <h3 className="font-bold mb-6">Investment History</h3>
        <div className="flex flex-col items-center justify-center py-12 text-center">
           <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center text-slate-600 mb-4">
              <i className="fa-solid fa-folder-open text-2xl"></i>
           </div>
           <p className="text-slate-500 font-medium">You have no active investments yet.</p>
           <button className="mt-4 text-blue-500 font-bold hover:underline">Start your first investment</button>
        </div>
      </div>
    </div>
  );
};

export default Fund;
