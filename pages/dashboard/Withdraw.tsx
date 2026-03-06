import React, { useState, useEffect } from 'react';
import { apiCall } from '../../api';

const Withdraw: React.FC = () => {
  const [method, setMethod] = useState('');
  const [amount, setAmount] = useState('');
  const [walletAddress, setWalletAddress] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [withdrawals, setWithdrawals] = useState<any[]>([]);
  const [userBalance, setUserBalance] = useState(0);

  useEffect(() => {
    fetchWithdrawals();
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    setUserBalance(user.balance || 0);
  }, []);

  const fetchWithdrawals = async () => {
    try {
      const token = localStorage.getItem('token');
      const data = await apiCall('/api/withdrawals/user', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (data.success) {
        setWithdrawals(data.withdrawals);
      }
    } catch (error) {
      console.error('Failed to fetch withdrawals');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    try {
      const token = localStorage.getItem('token');
      const data = await apiCall('/api/withdrawals/create', {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${token}` },
        body: JSON.stringify({
          amount: parseFloat(amount),
          method,
          walletAddress
        })
      });

      if (data.success) {
        setSuccess('Withdrawal request submitted successfully!');
        setAmount('');
        setMethod('');
        setWalletAddress('');
        fetchWithdrawals();
      }
    } catch (error: any) {
      setError(error.message || 'Failed to submit withdrawal');
    } finally {
      setLoading(false);
    }
  };

  const getStatusBadge = (status: string) => {
    const colors = {
      pending: 'bg-yellow-100 text-yellow-800',
      approved: 'bg-green-100 text-green-800',
      rejected: 'bg-red-100 text-red-800'
    };
    return colors[status as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-[#e6e6fa] flex flex-col items-center py-0 animate-in slide-in-from-top-4 duration-500">
      <div className="w-full bg-[#c5bd79] py-3 flex items-center justify-center space-x-2 text-white font-bold text-lg shadow-sm">
        <i className="fa-solid fa-money-bill-transfer"></i>
        <span>Withdraw Funds</span>
      </div>

      <div className="w-full bg-[#d09683] py-2 px-6 flex items-center space-x-4 mb-8">
        <div className="text-cyan-400 text-xl">
           <i className="fa-solid fa-atom"></i>
        </div>
        <span className="text-slate-800 font-medium text-xs md:text-sm">Connect your wallet for fastest Flash 30 seconds withdrawal</span>
        <button className="bg-[#ff9800] hover:bg-orange-600 text-white font-bold px-4 py-1.5 rounded text-xs transition-colors shadow-sm">
          Wallet connect
        </button>
      </div>

      <div className="w-full max-w-7xl px-4 space-y-10 mb-20">
        <div className="bg-[#c5bd79] p-6 md:p-10 rounded-sm shadow-md">
           <div className="text-green-700 font-bold text-sm mb-6">
              Available Balance: ${userBalance.toFixed(2)} USD
           </div>
           
           {error && (
              <div className="bg-red-500/10 border border-red-500 text-red-500 px-4 py-3 rounded mb-4">
                {error}
              </div>
            )}
            {success && (
              <div className="bg-green-500/10 border border-green-500 text-green-500 px-4 py-3 rounded mb-4">
                {success}
              </div>
            )}
           
           <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                 <label className="text-slate-800 font-bold text-sm block">Select Withdrawal Method</label>
                 <select 
                   value={method}
                   onChange={(e) => setMethod(e.target.value)}
                   required
                   className="w-full bg-white border border-slate-300 rounded py-2 px-4 text-sm text-slate-700 outline-none"
                 >
                    <option value="">--Select Method--</option>
                    <option value="Bitcoin">Bitcoin (BTC)</option>
                    <option value="USDT">Tether (USDT)</option>
                    <option value="PayPal">PayPal</option>
                 </select>
              </div>

              <div className="space-y-2">
                 <label className="text-slate-800 font-bold text-sm block">Wallet Address / PayPal Email</label>
                 <input 
                    type="text" 
                    value={walletAddress}
                    onChange={(e) => setWalletAddress(e.target.value)}
                    required
                    className="w-full bg-white border border-slate-300 rounded py-2 px-4 text-sm text-slate-800 outline-none" 
                    placeholder="Enter wallet address or PayPal email"
                 />
              </div>

              <div className="space-y-2">
                 <label className="text-slate-800 font-bold text-sm block">Enter Withdrawal Amount (USD)</label>
                 <input 
                    type="number" 
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                    min="10"
                    step="0.01"
                    className="w-full bg-white border border-slate-300 rounded py-2 px-4 text-sm text-slate-800 outline-none" 
                    placeholder="0.00"
                 />
              </div>

              <button 
                type="submit"
                disabled={loading}
                className="bg-[#ffc107] hover:bg-amber-500 text-slate-900 font-bold px-8 py-2 rounded text-xs transition-colors shadow-sm uppercase disabled:opacity-50"
              >
                {loading ? 'PROCESSING...' : 'PROCEED'}
              </button>
           </form>
        </div>

        <div className="space-y-4">
           <h3 className="text-[#28a745] font-bold text-xs uppercase tracking-wider">WITHDRAWAL HISTORY</h3>
           {withdrawals.length === 0 ? (
             <p className="text-slate-500 text-xs">No Record Found</p>
           ) : null}
           <div className="bg-white overflow-hidden shadow-sm border border-slate-200">
              <div className="overflow-x-auto">
                 <table className="w-full border-collapse">
                    <thead className="bg-white text-[#ff9800] text-xs font-bold uppercase">
                       <tr className="border-b border-slate-100">
                          <th className="px-6 py-4 text-left border-r border-slate-100">Date</th>
                          <th className="px-6 py-4 text-left border-r border-slate-100">Method</th>
                          <th className="px-6 py-4 text-left border-r border-slate-100">Amount(USD)</th>
                          <th className="px-6 py-4 text-left border-r border-slate-100">Wallet</th>
                          <th className="px-6 py-4 text-left">STATUS</th>
                       </tr>
                    </thead>
                    <tbody>
                       {withdrawals.map((w) => (
                         <tr key={w._id} className="border-b border-slate-100">
                           <td className="px-6 py-3 text-xs text-slate-700">{new Date(w.createdAt).toLocaleDateString()}</td>
                           <td className="px-6 py-3 text-xs text-slate-700">{w.method}</td>
                           <td className="px-6 py-3 text-xs text-slate-700">${w.amount.toFixed(2)}</td>
                           <td className="px-6 py-3 text-xs text-slate-700 truncate max-w-xs">{w.walletAddress}</td>
                           <td className="px-6 py-3">
                             <span className={`px-2 py-1 rounded text-xs font-bold ${getStatusBadge(w.status)}`}>
                               {w.status.toUpperCase()}
                             </span>
                           </td>
                         </tr>
                       ))}
                    </tbody>
                 </table>
              </div>
           </div>
        </div>

        <div className="text-[10px] text-slate-800 text-left pb-10 leading-normal font-medium max-w-7xl mx-auto mt-12 opacity-80">
          Metacryptotrading is licensed under FSA - Metacryptotrading is the trade name of Metacryptotrading Trade LLC, a company regulated as a Securities and Exchange Commission By the Financial Services Authority of Washington DC
        </div>
      </div>
    </div>
  );
};

export default Withdraw;