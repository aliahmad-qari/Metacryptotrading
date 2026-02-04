
import React from 'react';
import { User } from '../../types';

const Affiliate: React.FC<{ user: User }> = ({ user }) => {
  const referralLink = `https://metacryptotrading.net/register.php?referral=${user.id.slice(0, 4)}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink);
    alert('Referral link copied to clipboard!');
  };

  return (
    <div className="min-h-screen bg-slate-300 flex flex-col items-center py-0 animate-in fade-in duration-500">
      {/* Top Bar Label */}
      <div className="w-full bg-[#c5bd79] py-2 flex items-center justify-center space-x-2 text-white/90 font-bold text-sm">
        <i className="fa-solid fa-dharmachakra"></i>
        <span>Reference User</span>
      </div>

      <div className="w-full max-w-6xl mt-8 px-4">
        {/* Main Content Box */}
        <div className="bg-[#fafff0] rounded shadow-lg overflow-hidden border border-slate-200 mb-10">
          {/* Purple Header */}
          <div className="bg-[#453c90] p-4 text-white font-bold text-xl">
            Affilite Ranking System
          </div>

          <div className="p-8">
            <h2 className="text-3xl text-slate-800 mb-4 font-normal">Your Affiliate Link:</h2>
            
            {/* Link Bar */}
            <div className="flex flex-col md:flex-row w-full mb-4">
              <div className="flex-grow bg-[#008000] text-white py-3 px-4 text-lg font-medium border border-green-700 truncate">
                {referralLink}
              </div>
              <button 
                onClick={copyToClipboard}
                className="bg-[#ff9800] hover:bg-orange-600 text-white font-bold px-6 py-3 whitespace-nowrap transition-colors"
              >
                Copy Referral Link
              </button>
            </div>

            <p className="text-slate-500 text-sm mb-12">
              Gain free promotion upgrade with each ascending affiliate rank, your rank is accumulated % in referral investment! Your next rank will unlock with (0) successful referrals.
            </p>

            {/* Action Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Miner Card */}
              <div className="bg-[#c5bd79] p-8 flex items-start space-x-6">
                <div className="text-[#3b82f6] text-4xl mt-1">
                  <i className="fa-solid fa-atom"></i>
                </div>
                <div className="flex flex-col">
                  <p className="text-slate-800 text-sm mb-6 leading-relaxed">
                    We offer industry-leading cloud mining commission of 300%. Receive your rewards instantly to your Wallet Address.
                  </p>
                  <button className="bg-[#28a745] hover:bg-green-700 text-white font-bold py-3 px-6 rounded text-lg w-fit transition-colors">
                    Become a Bitcoin Miner
                  </button>
                </div>
              </div>

              {/* Profile Card */}
              <div className="bg-[#c5bd79] p-8 flex items-start space-x-6">
                <div className="text-slate-700 text-4xl mt-1">
                  <i className="fa-solid fa-user-large"></i>
                </div>
                <div className="flex flex-col">
                  <p className="text-slate-800 text-sm mb-6 leading-relaxed">
                    You're minutes away from starting to earn money .Endless Opportunity to Earn Money with the Crypto Affiliate Program
                  </p>
                  <button className="bg-[#ff9800] hover:bg-orange-600 text-white font-bold py-3 px-6 rounded text-lg w-fit transition-colors">
                    View Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Text */}
        <div className="text-[10px] text-slate-600 text-center pb-8 leading-normal uppercase tracking-tighter opacity-70">
          Metacryptotrading Trade is licensed under FSC. Metacryptotrading is the trade name of Metacryptotrading Trade LLC, a company regulated as a Securities and Exchange Commission By the Financial Services Authority of Washington DC.
        </div>
      </div>
    </div>
  );
};

export default Affiliate;
