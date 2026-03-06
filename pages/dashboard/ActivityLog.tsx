import React, { useState, useEffect } from 'react';
import { apiCall } from '../../api';

const ActivityLog: React.FC = () => {
  const [transactions, setTransactions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    try {
      const token = localStorage.getItem('token');
      const data = await apiCall('/api/transactions/user', {
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

  const deposits = transactions.filter(t => t.type === 'deposit');
  const withdrawals = transactions.filter(t => t.type === 'withdrawal');
  const others = transactions.filter(t => t.type === 'profit' || t.type === 'bonus');

  return (
    <div className="min-h-screen bg-[#bcbcbc] flex flex-col items-center py-0 animate-in fade-in duration-500">
      <div className="w-full bg-[#c5bd79] py-3 flex items-center justify-center space-x-2 text-white font-bold text-lg shadow-sm">
        <i className="fa-solid fa-dharmachakra"></i>
        <span>Transactions</span>
      </div>

      {loading ? (
        <div className="flex justify-center py-20">
          <div className="w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="w-full max-w-[95%] mt-10 space-y-12 mb-20 px-4">
          
          <div className="overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead className="bg-[#c5bd79] text-slate-800 text-xs font-bold uppercase">
                  <tr>
                    <th className="px-6 py-4 text-left border-r border-white/20">Date</th>
                    <th className="px-6 py-4 text-left border-r border-white/20">Type</th>
                    <th className="px-6 py-4 text-left border-r border-white/20">Amount(USD)</th>
                    <th className="px-6 py-4 text-left border-r border-white/20">Method</th>
                    <th className="px-6 py-4 text-left">STATUS</th>
                  </tr>
                </thead>
                <tbody className="bg-white/80">
                  {deposits.length === 0 ? (
                    <tr><td colSpan={5} className="px-6 py-4 text-center text-xs text-slate-500">No deposits found</td></tr>
                  ) : deposits.map((tx) => (
                    <tr key={tx._id} className="border-b border-slate-200 hover:bg-white transition-colors">
                      <td className="px-6 py-4 text-xs text-slate-600">{new Date(tx.createdAt).toLocaleDateString()}</td>
                      <td className="px-6 py-4 text-xs font-bold text-green-600 uppercase">{tx.type}</td>
                      <td className="px-6 py-4 text-xs font-bold text-slate-800">${tx.amount.toFixed(2)}</td>
                      <td className="px-6 py-4 text-xs font-medium text-slate-600">{tx.method || '-'}</td>
                      <td className="px-6 py-4">
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${tx.status === 'completed' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
                          {tx.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="h-4 bg-slate-400/30 w-full rounded-sm"></div>

          <div className="overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead className="bg-[#c5bd79] text-slate-800 text-xs font-bold uppercase">
                  <tr>
                    <th className="px-6 py-4 text-left border-r border-white/20">Date</th>
                    <th className="px-6 py-4 text-left border-r border-white/20">Type</th>
                    <th className="px-6 py-4 text-left border-r border-white/20">Method</th>
                    <th className="px-6 py-4 text-left border-r border-white/20">Amount(USD)</th>
                    <th className="px-6 py-4 text-left">STATUS</th>
                  </tr>
                </thead>
                <tbody className="bg-white/80">
                  {withdrawals.length === 0 ? (
                    <tr><td colSpan={5} className="px-6 py-4 text-center text-xs text-slate-500">No withdrawals found</td></tr>
                  ) : withdrawals.map((tx) => (
                    <tr key={tx._id} className="border-b border-slate-200 hover:bg-white transition-colors">
                      <td className="px-6 py-4 text-xs text-slate-600">{new Date(tx.createdAt).toLocaleDateString()}</td>
                      <td className="px-6 py-4 text-xs font-bold text-red-600 uppercase">{tx.type}</td>
                      <td className="px-6 py-4 text-xs font-medium text-slate-600">{tx.method || '-'}</td>
                      <td className="px-6 py-4 text-xs font-bold text-slate-800">${tx.amount.toFixed(2)}</td>
                      <td className="px-6 py-4">
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${tx.status === 'completed' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
                          {tx.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead className="bg-[#c5bd79] text-slate-800 text-xs font-bold uppercase">
                  <tr>
                    <th className="px-6 py-4 text-left border-r border-white/20">Date</th>
                    <th className="px-6 py-4 text-left border-r border-white/20">Type</th>
                    <th className="px-6 py-4 text-left border-r border-white/20">Amount(USD)</th>
                    <th className="px-6 py-4 text-left">STATUS</th>
                  </tr>
                </thead>
                <tbody className="bg-white/80">
                  {others.length === 0 ? (
                    <tr><td colSpan={4} className="px-6 py-4 text-center text-xs text-slate-500">No other transactions</td></tr>
                  ) : others.map((tx) => (
                    <tr key={tx._id} className="border-b border-slate-200 hover:bg-white transition-colors">
                      <td className="px-6 py-4 text-xs text-slate-600">{new Date(tx.createdAt).toLocaleDateString()}</td>
                      <td className="px-6 py-4 text-xs font-bold text-blue-600 uppercase">{tx.type}</td>
                      <td className="px-6 py-4 text-xs font-bold text-slate-800">${tx.amount.toFixed(2)}</td>
                      <td className="px-6 py-4">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-green-100 text-green-700">
                          {tx.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="h-4 bg-slate-400/30 w-full rounded-sm mt-4"></div>

          <div className="text-[10px] text-slate-600 text-center pb-8 leading-normal uppercase tracking-tighter opacity-70 px-4 mt-12">
            Metacryptotrading is licensed under FSC. Metacryptotrading is the trade name of Metacryptotrading Trade LLC, a company regulated as a Securities and Exchange Commission By the Financial Services Authority of Washington DC.
          </div>
        </div>
      )}
    </div>
  );
};

export default ActivityLog;