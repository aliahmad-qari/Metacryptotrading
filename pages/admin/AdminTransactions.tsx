import React, { useState, useEffect } from 'react';
import { apiCall } from '../../api';

const AdminTransactions: React.FC = () => {
  const [transactions, setTransactions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const data = await apiCall('/api/admin/transactions', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (data.success) {
        setTransactions(data.transactions);
      }
    } catch (error) {
      console.error('Failed to fetch transactions');
    } finally {
      setLoading(false);
    }
  };

  const getTypeColor = (type: string) => {
    const colors = {
      deposit: 'text-green-600',
      withdrawal: 'text-red-600',
      profit: 'text-blue-600',
      bonus: 'text-purple-600'
    };
    return colors[type as keyof typeof colors] || 'text-gray-600';
  };

  const getStatusBadge = (status: string) => {
    const colors = {
      pending: 'bg-yellow-100 text-yellow-800',
      completed: 'bg-green-100 text-green-800',
      failed: 'bg-red-100 text-red-800'
    };
    return colors[status as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const filteredTransactions = filter === 'all' 
    ? transactions 
    : transactions.filter(tx => tx.type === filter);

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">All Transactions</h1>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="bg-slate-700 border border-slate-600 rounded px-3 py-2 text-white"
        >
          <option value="all">All Types</option>
          <option value="deposit">Deposits</option>
          <option value="withdrawal">Withdrawals</option>
          <option value="profit">Profits</option>
          <option value="bonus">Bonuses</option>
        </select>
      </div>
      
      <div className="bg-slate-800 rounded-lg overflow-hidden border border-slate-700">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-bold uppercase">User</th>
                <th className="px-6 py-3 text-left text-xs font-bold uppercase">Type</th>
                <th className="px-6 py-3 text-left text-xs font-bold uppercase">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-bold uppercase">Method</th>
                <th className="px-6 py-3 text-left text-xs font-bold uppercase">Date</th>
                <th className="px-6 py-3 text-left text-xs font-bold uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-bold uppercase">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700">
              {filteredTransactions.map((tx) => (
                <tr key={tx._id} className="hover:bg-slate-700/50">
                  <td className="px-6 py-4 text-sm">
                    {tx.userId?.firstName} {tx.userId?.lastName}
                    <br />
                    <span className="text-xs text-slate-400">{tx.userId?.email}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`text-sm font-bold uppercase ${getTypeColor(tx.type)}`}>
                      {tx.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm font-bold">${tx.amount.toFixed(2)}</td>
                  <td className="px-6 py-4 text-sm">{tx.method || '-'}</td>
                  <td className="px-6 py-4 text-sm">
                    {new Date(tx.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded text-xs font-bold ${getStatusBadge(tx.status)}`}>
                      {tx.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-400 max-w-xs truncate">
                    {tx.description || '-'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminTransactions;