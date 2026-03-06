import React, { useState, useEffect } from 'react';
import { apiCall } from '../../api';

const AdminOverview: React.FC = () => {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalDeposits: 0,
    totalWithdrawals: 0,
    totalRevenue: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const data = await apiCall('/api/admin/stats', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (data.success) {
        setStats(data.stats);
      }
    } catch (error) {
      console.error('Failed to fetch stats');
    } finally {
      setLoading(false);
    }
  };

  const statCards = [
    { title: 'Total Users', value: stats.totalUsers, icon: 'fa-users', color: 'bg-blue-500' },
    { title: 'Total Deposits', value: `$${stats.totalDeposits.toFixed(2)}`, icon: 'fa-wallet', color: 'bg-green-500' },
    { title: 'Total Withdrawals', value: `$${stats.totalWithdrawals.toFixed(2)}`, icon: 'fa-money-bill-transfer', color: 'bg-red-500' },
    { title: 'Total Revenue', value: `$${stats.totalRevenue.toFixed(2)}`, icon: 'fa-chart-line', color: 'bg-purple-500' },
  ];

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((card) => (
          <div key={card.title} className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 ${card.color} rounded-lg flex items-center justify-center`}>
                <i className={`fa-solid ${card.icon} text-white text-xl`}></i>
              </div>
            </div>
            <h3 className="text-slate-400 text-sm mb-1">{card.title}</h3>
            <p className="text-2xl font-bold">{card.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminOverview;