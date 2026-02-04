
import React from 'react';
import { INVESTMENT_PLANS } from '../constants';
import { Link } from 'react-router-dom';

const InvestmentPlans: React.FC = () => {
  return (
    <section id="plans" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-4">Investment Tiers</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">Choose Your Profit Engine</h3>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Our multi-tier investment strategy ensures consistent returns regardless of market volatility.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {INVESTMENT_PLANS.map((plan) => (
            <div 
              key={plan.id} 
              className="relative group bg-slate-900 border border-white/5 rounded-3xl p-8 transition-all hover:bg-slate-800/50 hover:border-blue-500/50 flex flex-col h-full shadow-2xl"
            >
              {plan.id === 'gold' && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg shadow-blue-900/40">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h4 className="text-xl font-bold mb-2">{plan.name}</h4>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-extrabold text-blue-500">{plan.roiPercent}%</span>
                  <span className="text-slate-400 ml-2">ROI</span>
                </div>
                <div className="h-1 w-12 bg-blue-600 rounded-full mb-6"></div>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                <li className="flex items-center text-slate-300">
                  <i className="fa-solid fa-check text-blue-500 mr-3 text-sm"></i>
                  Min: ${plan.minAmount.toLocaleString()}
                </li>
                <li className="flex items-center text-slate-300">
                  <i className="fa-solid fa-check text-blue-500 mr-3 text-sm"></i>
                  Max: {plan.maxAmount >= 1000000 ? 'Unlimited' : `$${plan.maxAmount.toLocaleString()}`}
                </li>
                <li className="flex items-center text-slate-300">
                  <i className="fa-solid fa-check text-blue-500 mr-3 text-sm"></i>
                  Duration: {plan.durationDays} Days
                </li>
                <li className="flex items-center text-slate-300">
                  <i className="fa-solid fa-check text-blue-500 mr-3 text-sm"></i>
                  {plan.referralPercent}% Referral Bonus
                </li>
                <li className="flex items-center text-slate-300">
                  <i className="fa-solid fa-check text-blue-500 mr-3 text-sm"></i>
                  Instant Withdrawals
                </li>
              </ul>

              <Link 
                to="/register" 
                className={`w-full py-3.5 rounded-xl font-bold transition-all text-center ${
                  plan.id === 'gold' 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-white/5 text-white hover:bg-white/10'
                }`}
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestmentPlans;
