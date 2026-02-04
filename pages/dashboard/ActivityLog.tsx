
import React from 'react';

const ActivityLog: React.FC = () => {
  // Preserving the existing logs data logic but adapting it for the new UI layout
  const depositLogs = [
    { wallet: '0x71C...4f2', amount: '1,500.00', method: 'Bitcoin', status: 'Completed' },
    { wallet: '0x32A...9e1', amount: '300.00', method: 'Ethereum', status: 'Pending' }
  ];

  const withdrawalLogs = [
    { to: 'bc1qxy2...wlh', method: 'Bitcoin', amount: '800.00', status: 'Completed' },
    { to: '0x123...abc', method: 'Ethereum', amount: '1,200.00', status: 'Pending' }
  ];

  const otherLogs = [
    { method: 'Bonus Swap', amount: '100.10', status: 'Completed' },
    { method: 'Internal Transfer', amount: '50.00', status: 'Completed' }
  ];

  return (
    <div className="min-h-screen bg-[#bcbcbc] flex flex-col items-center py-0 animate-in fade-in duration-500">
      {/* Top Bar Label - Match screenshot heading style */}
      <div className="w-full bg-[#c5bd79] py-3 flex items-center justify-center space-x-2 text-white font-bold text-lg shadow-sm">
        <i className="fa-solid fa-dharmachakra"></i>
        <span>Transactions</span>
      </div>

      <div className="w-full max-w-[95%] mt-10 space-y-12 mb-20 px-4">
        
        {/* Table 1: Primary Transactions */}
        <div className="overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead className="bg-[#c5bd79] text-slate-800 text-xs font-bold uppercase">
                <tr>
                  <th className="px-6 py-4 text-left border-r border-white/20 last:border-0">Wallet Address</th>
                  <th className="px-6 py-4 text-left border-r border-white/20 last:border-0">Amount(USD)</th>
                  <th className="px-6 py-4 text-left border-r border-white/20 last:border-0">Method</th>
                  <th className="px-6 py-4 text-left border-r border-white/20 last:border-0">STATUS</th>
                  <th className="px-6 py-4 text-left">ACTION</th>
                </tr>
              </thead>
              <tbody className="bg-white/80">
                {depositLogs.map((log, i) => (
                  <tr key={i} className="border-b border-slate-200 last:border-0 hover:bg-white transition-colors">
                    <td className="px-6 py-4 text-xs font-mono text-slate-600">{log.wallet}</td>
                    <td className="px-6 py-4 text-xs font-bold text-slate-800">${log.amount}</td>
                    <td className="px-6 py-4 text-xs font-medium text-slate-600">{log.method}</td>
                    <td className="px-6 py-4">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${log.status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
                        {log.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <button className="text-blue-500 hover:text-blue-700 text-xs font-bold">Details</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Divider bar from screenshot */}
        <div className="h-4 bg-slate-400/30 w-full rounded-sm"></div>

        {/* Table 2: Withdrawals / To Address */}
        <div className="overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead className="bg-[#c5bd79] text-slate-800 text-xs font-bold uppercase">
                <tr>
                  <th className="px-6 py-4 text-left border-r border-white/20 last:border-0">To Address</th>
                  <th className="px-6 py-4 text-left border-r border-white/20 last:border-0">Method</th>
                  <th className="px-6 py-4 text-left border-r border-white/20 last:border-0">Amount(USD)</th>
                  <th className="px-6 py-4 text-left">STATUS</th>
                </tr>
              </thead>
              <tbody className="bg-white/80">
                {withdrawalLogs.map((log, i) => (
                  <tr key={i} className="border-b border-slate-200 last:border-0 hover:bg-white transition-colors">
                    <td className="px-6 py-4 text-xs font-mono text-slate-600">{log.to}</td>
                    <td className="px-6 py-4 text-xs font-medium text-slate-600">{log.method}</td>
                    <td className="px-6 py-4 text-xs font-bold text-slate-800">${log.amount}</td>
                    <td className="px-6 py-4">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${log.status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
                        {log.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Table 3: Summary / Other Transactions */}
        <div className="overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead className="bg-[#c5bd79] text-slate-800 text-xs font-bold uppercase">
                <tr>
                  <th className="px-6 py-4 text-left border-r border-white/20 last:border-0">Method</th>
                  <th className="px-6 py-4 text-left border-r border-white/20 last:border-0">Amount(USD)</th>
                  <th className="px-6 py-4 text-left">STATUS</th>
                </tr>
              </thead>
              <tbody className="bg-white/80">
                {otherLogs.map((log, i) => (
                  <tr key={i} className="border-b border-slate-200 last:border-0 hover:bg-white transition-colors">
                    <td className="px-6 py-4 text-xs font-medium text-slate-600">{log.method}</td>
                    <td className="px-6 py-4 text-xs font-bold text-slate-800">${log.amount}</td>
                    <td className="px-6 py-4">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-green-100 text-green-700">
                        {log.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Divider bar from screenshot */}
        <div className="h-4 bg-slate-400/30 w-full rounded-sm mt-4"></div>

        {/* Footer Text - Consistent with other pages */}
        <div className="text-[10px] text-slate-600 text-center pb-8 leading-normal uppercase tracking-tighter opacity-70 px-4 mt-12">
          Metacryptotrading is licensed under FSC. Metacryptotrading is the trade name of Metacryptotrading Trade LLC, a company regulated as a Securities and Exchange Commission By the Financial Services Authority of Washington DC.
        </div>
      </div>
    </div>
  );
};

export default ActivityLog;
