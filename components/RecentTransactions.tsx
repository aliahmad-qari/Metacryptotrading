
import React from 'react';
import { MOCK_TRANSACTIONS } from '../constants';

const RecentTransactions: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-4">Proof of Activity</h2>
            <h3 className="text-3xl md:text-4xl font-bold">Recent Transactions</h3>
          </div>
          <div className="flex space-x-4">
            <div className="bg-slate-800/50 px-6 py-3 rounded-2xl border border-white/5 flex items-center space-x-3">
              <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
              <span className="font-semibold text-white">Live Network Status</span>
            </div>
          </div>
        </div>

        <div className="glass rounded-3xl overflow-hidden shadow-2xl border-white/10">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-slate-800/50 border-b border-white/10">
                <tr>
                  <th className="px-8 py-5 text-sm font-semibold text-slate-400 uppercase tracking-wider">Type</th>
                  <th className="px-8 py-5 text-sm font-semibold text-slate-400 uppercase tracking-wider">User</th>
                  <th className="px-8 py-5 text-sm font-semibold text-slate-400 uppercase tracking-wider">Amount</th>
                  <th className="px-8 py-5 text-sm font-semibold text-slate-400 uppercase tracking-wider">Coin</th>
                  <th className="px-8 py-5 text-sm font-semibold text-slate-400 uppercase tracking-wider">Date</th>
                  <th className="px-8 py-5 text-sm font-semibold text-slate-400 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {MOCK_TRANSACTIONS.map((tx) => (
                  <tr key={tx.id} className="hover:bg-white/5 transition-colors">
                    <td className="px-8 py-6">
                      <div className="flex items-center space-x-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          tx.type === 'Deposit' ? 'bg-green-500/10 text-green-500' : 'bg-blue-500/10 text-blue-500'
                        }`}>
                          <i className={`fa-solid ${tx.type === 'Deposit' ? 'fa-arrow-down' : 'fa-arrow-up'} text-xs`}></i>
                        </div>
                        <span className="font-semibold text-white">{tx.type}</span>
                      </div>
                    </td>
                    <td className="px-8 py-6 font-medium text-slate-300">{tx.user}</td>
                    <td className="px-8 py-6 font-bold text-white">${tx.amount.toLocaleString()}</td>
                    <td className="px-8 py-6">
                      <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-bold text-slate-300">{tx.coin}</span>
                    </td>
                    <td className="px-8 py-6 text-slate-400 text-sm">{tx.date}</td>
                    <td className="px-8 py-6">
                      <span className={`px-4 py-1.5 rounded-full text-xs font-bold ${
                        tx.status === 'Completed' ? 'bg-green-500/10 text-green-500' : 'bg-amber-500/10 text-amber-500'
                      }`}>
                        {tx.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentTransactions;
