import React, { useState } from 'react';
import { User } from '../types';
import { useNavigate, Link, Outlet, useLocation } from 'react-router-dom';

interface DashboardProps {
  user: User;
  setUser: (user: User | null) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ user, setUser }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
    navigate('/');
  };

  const navItems = [
    { name: 'Dashboard', path: '/dashboard', icon: 'fa-house' },
    { name: 'Fund', path: '/dashboard/fund', icon: '' }, // Header style in screenshot
    { name: 'Affiliate Program', path: '/dashboard/affiliate', icon: 'fa-users' },
    { name: 'Copy traders', path: '/dashboard/copy-traders', icon: 'fa-copy' },
    { name: 'Profile', path: '/dashboard/profile', icon: 'fa-user' },
    { name: 'User Activity Log', path: '/dashboard/activity', icon: 'fa-clock-rotate-left' },
    { name: 'Deposit Funds', path: '/dashboard/deposit', icon: 'fa-wallet' },
    { name: 'Withdraw Funds', path: '/dashboard/withdraw', icon: 'fa-money-bill-transfer' },
    { name: 'Buy Crypto', path: '/dashboard/buy-crypto', icon: 'fa-coins' },
    { name: 'Mining Account', path: '/dashboard/mining', icon: 'fa-microchip' },
    { name: 'Others', path: '#', icon: '' }, // Header style in screenshot
    { name: 'Trade View', path: '/dashboard/trade-view', icon: 'fa-chart-line' },
    { name: 'Live Trade', path: '/dashboard/live-trade', icon: 'fa-bolt' },
  ];

  const isActive = (path: string) => {
    if (path === '/dashboard') return location.pathname === '/dashboard';
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-black text-white flex overflow-hidden">
      {/* Sidebar Desktop */}
      <aside className={`fixed inset-y-0 left-0 z-40 w-64 bg-[#6b3d0c] border-r border-white/5 transform transition-transform duration-300 md:relative md:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-4 border-b border-black/10 bg-[#001e2b] flex items-center">
         <img src="/images/auth-logo.png" alt="Metacryptotrading" className="h-12 object-contain" />
        </div>

        <nav className="flex-grow py-4 space-y-0 overflow-y-auto">
          {navItems.map((item, idx) => {
            if (item.icon === '') {
              return (
                <div key={idx} className="px-4 py-3 text-xs font-bold text-white uppercase mt-4">
                  {item.name}
                </div>
              );
            }
            return (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center space-x-3 px-4 py-2.5 transition-all text-sm font-medium ${
                  isActive(item.path)
                    ? 'bg-[#ff9800] text-white'
                    : 'text-white/80 hover:bg-black/10'
                }`}
              >
                <i className={`fa-solid ${item.icon} w-5 text-center text-xs`}></i>
                <span>{item.name}</span>
              </Link>
            );
          })}
          
          <button
            onClick={handleLogout}
            className="w-full flex items-center space-x-3 px-4 py-2.5 text-white/80 hover:bg-black/10 transition-all font-medium text-sm mt-4"
          >
            <i className="fa-solid fa-right-from-bracket w-5 text-center text-xs"></i>
            <span>Logout</span>
          </button>
        </nav>
      </aside>

      {/* Main Container */}
      <div className="flex-grow flex flex-col min-w-0">
        {/* Header */}
        <header className="h-14 bg-[#333333] border-b border-white/5 px-4 flex items-center justify-between sticky top-0 z-30">
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="md:hidden p-2 text-white"
            >
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <button className="text-white/80 hover:text-white"><i className="fa-solid fa-circle-exclamation"></i></button>
            <button className="text-white/80 hover:text-white"><i className="fa-solid fa-gear"></i></button>
            <div className="flex items-center space-x-2">
              <span className="text-xs font-medium">Hello, {user.name.split(' ')[0]}</span>
              <div className="w-8 h-8 rounded-full bg-slate-400 border border-white/20"></div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-grow overflow-y-auto bg-black">
          <div className="p-0">
            <Outlet />
          </div>
        </main>
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-30 md:hidden backdrop-blur-sm"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default Dashboard;