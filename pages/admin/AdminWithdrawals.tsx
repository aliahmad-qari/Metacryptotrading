import React, { useState, useEffect } from 'react';
import { apiCall } from '../../api';

const AdminWithdrawals: React.FC = () => {
  const [withdrawals, setWithdrawals] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [processingId, setProcessingId] = useState<string | null>(null);

  useEffect(() => {
    fetchWithdrawals();
  }, []);

  const fetchWithdrawals = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const data = await apiCall('/api/admin/withdrawals', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (data.success) {
        setWithdrawals(data.withdrawals);
      }
    } catch (error) {
      console.error('Failed to fetch withdrawals');
    } finally {
      setLoading(false);
    }
  };

  const handleApprove = async (withdrawalId: string) => {
    setProcessingId(withdrawalId);
    try {
      const token = localStorage.getItem('adminToken');
      await apiCall(`/api/admin/withdrawals/${withdrawalId}/approve`, {
        method: 'PUT',
        headers: { 'Authorization': `Bearer ${token}` },
        body: JSON.stringify({ adminNote: 'Approved by admin' })
      });
      fetchWithdrawals();
    } catch (error) {
      console.error('Failed to approve withdrawal');
    } finally {
      setProcessingId(null);
    }
  };

  const handleReject = async (withdrawalId: string) => {
    setProcessingId(withdrawalId);
    try {
      const token = localStorage.getItem('adminToken');
      await apiCall(`/api/admin/withdrawals/${withdrawalId}/reject`, {
        method: 'PUT',
        headers: { 'Authorization': `Bearer ${token}` },
        body: JSON.stringify({ adminNote: 'Rejected by admin' })
      });
      fetchWithdrawals();
    } catch (error) {
      console.error('Failed to reject withdrawal');
    } finally {
      setProcessingId(null);
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

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Withdrawals Management</h1>
      
      <div className="bg-slate-800 rounded-lg overflow-hidden border border-slate-700">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-bold uppercase">User</th>
                <th className="px-6 py-3 text-left text-xs font-bold uppercase">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-bold uppercase">Method</th>
                <th className="px-6 py-3 text-left text-xs font-bold uppercase">Wallet Address</th>
                <th className="px-6 py-3 text-left text-xs font-bold uppercase">Date</th>
                <th className="px-6 py-3 text-left text-xs font-bold uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-bold uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700">
              {withdrawals.map((withdrawal) => (
                <tr key={withdrawal._id} className="hover:bg-slate-700/50">
                  <td className="px-6 py-4 text-sm">
                    {withdrawal.userId?.firstName} {withdrawal.userId?.lastName}
                    <br />
                    <span className="text-xs text-slate-400">{withdrawal.userId?.email}</span>
                  </td>
                  <td className="px-6 py-4 text-sm font-bold">${withdrawal.amount.toFixed(2)}</td>
                  <td className="px-6 py-4 text-sm">{withdrawal.method}</td>
                  <td className="px-6 py-4 text-sm font-mono text-xs max-w-xs truncate">
                    {withdrawal.walletAddress}
                  </td>
                  <td className="px-6 py-4 text-sm">
                    {new Date(withdrawal.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded text-xs font-bold ${getStatusBadge(withdrawal.status)}`}>
                      {withdrawal.status.toUpperCase()}
                    </span>
                  </td>
                  <td className="px-6 py-4 space-x-2">
                    {withdrawal.status === 'pending' && (
                      <>
                        <button
                          onClick={() => handleApprove(withdrawal._id)}
                          disabled={processingId === withdrawal._id}
                          className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-xs disabled:opacity-50"
                        >
                          {processingId === withdrawal._id ? 'Processing...' : 'Approve'}
                        </button>
                        <button
                          onClick={() => handleReject(withdrawal._id)}
                          disabled={processingId === withdrawal._id}
                          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-xs disabled:opacity-50"
                        >
                          Reject
                        </button>
                      </>
                    )}
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

export default AdminWithdrawals;