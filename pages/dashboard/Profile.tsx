
import React from 'react';
import { User } from '../../types';

const Profile: React.FC<{ user: User }> = ({ user }) => {
  const firstName = user.name.split(' ').slice(0, -1).join(' ') || user.name;
  const lastName = user.name.split(' ').slice(-1)[0] || '';

  return (
    <div className="min-h-screen bg-[#bcbcbc] flex flex-col items-center py-0 animate-in fade-in duration-500">
      {/* Top Bar Label */}
      <div className="w-full bg-[#c5bd79] py-2 flex items-center justify-center space-x-2 text-white font-bold text-sm shadow-sm">
        <i className="fa-solid fa-dharmachakra"></i>
        <span>Affiliate User Profile</span>
      </div>

      <div className="w-full max-w-6xl mt-12 px-4">
        {/* Main Black Profile Card */}
        <div className="bg-black text-white rounded-sm shadow-2xl p-8 mb-12">
          <div className="flex items-center space-x-6 mb-8">
            <div className="w-24 h-24 bg-white rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img 
                src="https://www.w3schools.com/howto/img_avatar.png" 
                alt="Avatar" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="text-[#ffc107] font-bold text-xs uppercase tracking-widest mb-1">USERNAME:</div>
              <div className="text-xl font-bold">{user.name.split(' ')[0].toLowerCase()}</div>
            </div>
          </div>

          <div className="border-t border-[#00bcd4] pt-8 space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-[#ffc107] font-bold text-sm tracking-tight">First Name:</span>
              <span className="bg-[#00bcd4] text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-wider shadow-sm">
                {firstName}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#ffc107] font-bold text-sm tracking-tight">Last Name:</span>
              <span className="bg-[#ffc107] text-black px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-wider shadow-sm">
                {lastName}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#ffc107] font-bold text-sm tracking-tight">Country:</span>
              <span className="bg-[#f44336] text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-wider shadow-sm">
                {user.country || 'Not Set'}
              </span>
            </div>
          </div>
        </div>

        {/* Action Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Join Card */}
          <div className="bg-[#fafff0] rounded-sm shadow-md overflow-hidden border border-slate-300">
            <div className="bg-[#c5bd79] p-4 flex items-center justify-between">
              <i className="fa-solid fa-chart-pie text-white text-xl"></i>
              <span className="text-[#800080] font-black text-xl uppercase italic">Join</span>
            </div>
            <div className="p-6">
              <div className="w-full h-6 bg-white border border-slate-200 mb-4 rounded-sm"></div>
              <p className="text-slate-700 text-xs leading-relaxed font-medium">
                thousands of our affiliate partners who are already earning with our Affiliate Program.
              </p>
            </div>
          </div>

          {/* Promote Card */}
          <div className="bg-[#fafff0] rounded-sm shadow-md overflow-hidden border border-slate-300">
            <div className="bg-[#c5bd79] p-4 flex items-center justify-between">
              <i className="fa-solid fa-chart-line text-white text-xl"></i>
              <span className="text-[#800080] font-black text-xl uppercase italic">Promote</span>
            </div>
            <div className="p-6">
              <div className="w-full h-6 bg-white border border-slate-200 mb-4 rounded-sm"></div>
              <p className="text-slate-700 text-xs leading-relaxed font-medium">
                Share to your audience and invite them to join the platform with your affiliate link.
              </p>
            </div>
          </div>

          {/* Earn Card */}
          <div className="bg-[#fafff0] rounded-sm shadow-md overflow-hidden border border-slate-300">
            <div className="bg-[#c5bd79] p-4 flex items-center justify-between">
              <i className="fa-solid fa-money-bill-1-wave text-white text-xl"></i>
              <span className="text-[#800080] font-black text-xl uppercase italic">Earn</span>
            </div>
            <div className="p-6">
              <div className="w-full h-6 bg-white border border-slate-200 mb-4 rounded-sm"></div>
              <p className="text-slate-700 text-xs leading-relaxed font-medium">
                Our competitive conversion rates help you maximize earnings.
              </p>
            </div>
          </div>
        </div>

        {/* Preserved Profile Settings Form (Updated to match theme colors slightly while keeping logic) */}
        <div className="bg-white border border-slate-200 rounded-sm p-8 mb-20 shadow-xl">
           <h3 className="text-xl font-bold text-slate-800 mb-8 pb-4 border-b border-slate-100 flex items-center">
             <i className="fa-solid fa-gear mr-3 text-[#c5bd79]"></i>
             Account Settings
           </h3>
           <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                 <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Full Name</label>
                 <input defaultValue={user.name} className="w-full bg-slate-50 border border-slate-200 rounded py-3 px-4 text-sm text-slate-800 outline-none focus:border-[#c5bd79]" />
              </div>
              <div className="space-y-2">
                 <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Email Address</label>
                 <input readOnly value={user.email} className="w-full bg-slate-100 border border-slate-200 rounded py-3 px-4 text-sm text-slate-500 outline-none" />
              </div>
              <div className="space-y-2">
                 <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Phone Number</label>
                 <input defaultValue={user.phone || ''} className="w-full bg-slate-50 border border-slate-200 rounded py-3 px-4 text-sm text-slate-800 outline-none focus:border-[#c5bd79]" />
              </div>
              <div className="space-y-2">
                 <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Security Pin</label>
                 <input type="password" placeholder="****" className="w-full bg-slate-50 border border-slate-200 rounded py-3 px-4 text-sm text-slate-800 outline-none focus:border-[#c5bd79]" />
              </div>
              <div className="md:col-span-2">
                 <button className="bg-[#453c90] hover:bg-[#342e6d] text-white font-bold py-4 px-10 rounded shadow-lg transition-all uppercase tracking-widest text-xs">
                    Update Profile
                 </button>
              </div>
           </form>
        </div>

        {/* Footer Text */}
        <div className="text-[10px] text-slate-600 text-center pb-8 leading-normal uppercase tracking-tighter opacity-70 px-4">
          Metacryptotrading is licensed under FSC. Metacryptotrading is the trade name of Metacryptotrading Trade LLC, a company regulated as a Securities and Exchange Commission By the Financial Services Authority of Washington DC.
        </div>
      </div>
    </div>
  );
};

export default Profile;
