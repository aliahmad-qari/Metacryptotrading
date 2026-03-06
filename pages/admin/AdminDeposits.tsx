import React, { useState, useEffect } from 'react';
import { apiCall } from '../../api';

const AdminDeposits: React.FC = () => {
  const [deposits, setDeposits] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [processingId, setProcessingId] = useState<string | null>(null);

  useEffect(() => {
    fetchDeposits();
  }, []);

  const fetchDeposits = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const data = await apiCall('/api/admin/deposits', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (data.success) {
        setDeposits(data.deposits);
      }
    } catch (error) {
      console.error('Failed to fetch deposits');
    } finally {
      setLoading(false);
    }
  };

  const handleApprove = async (depositId: string) => {
    setProcessingId(depositId);
    try {
      const token = localStorage.getItem('adminToken');
      await apiCall(`/api/admin/deposits/${depositId}/approve`, {
        method: 'PUT',
        headers: { 'Authorization': `Bearer ${token}` },
        body: JSON.stringify({ adminNote: 'Approved by admin' })
      });
      fetchDeposits();
    } catch (error) {
      console.error('Failed to approve deposit');
    } finally {
      setProcessingId(null);
    }
  };

  const handleReject = async (depositId: string) => {
    setProcessingId(depositId);
    try {
      const token = localStorage.getItem('adminToken');
      await apiCall(`/api/admin/deposits/${depositId}/reject`, {
        method: 'PUT',
        headers: { 'Authorization': `Bearer ${token}` },
        body: JSON.stringify({ adminNote: 'Rejected by admin' })
      });
      fetchDeposits();
    } catch (error) {
      console.error('Failed to reject deposit');
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
      <h1 className="text-3xl font-bold mb-8">Deposits Management</h1>
      
      <div className="bg-slate-800 rounded-lg overflow-hidden border border-slate-700">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-bold uppercase">User</th>
                <th className="px-6 py-3 text-left text-xs font-bold uppercase">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-bold uppercase">Method</th>
                <th className="px-6 py-3 text-left text-xs font-bold uppercase">Transaction ID</th>
                <th className="px-6 py-3 text-left text-xs font-bold uppercase">Date</th>
                <th className="px-6 py-3 text-left text-xs font-bold uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-bold uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700">
              {deposits.map((deposit) => (
                <tr key={deposit._id} className="hover:bg-slate-700/50">
                  <td className="px-6 py-4 text-sm">
                    {deposit.userId?.firstName} {deposit.userId?.lastName}
                    <br />
                    <span className="text-xs text-slate-400">{deposit.userId?.email}</span>
                  </td>
                  <td className="px-6 py-4 text-sm font-bold">${deposit.amount.toFixed(2)}</td>
                  <td className="px-6 py-4 text-sm">{deposit.method}</td>
                  <td className="px-6 py-4 text-sm font-mono text-xs">
                    {deposit.transactionId || '-'}
                  </td>
                  <td className="px-6 py-4 text-sm">
                    {new Date(deposit.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded text-xs font-bold ${getStatusBadge(deposit.status)}`}>
                      {deposit.status.toUpperCase()}
                    </span>
                  </td>
                  <td className="px-6 py-4 space-x-2">
                    {deposit.status === 'pending' && (
                      <>
                        <button
                          onClick={() => handleApprove(deposit._id)}
                          disabled={processingId === deposit._id}
                          className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-xs disabled:opacity-50"
                        >
                          {processingId === deposit._id ? 'Processing...' : 'Approve'}
                        </button>
                        <button
                          onClick={() => handleReject(deposit._id)}
                          disabled={processingId === deposit._id}
                          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-xs disabled:opacity-50"
                        >
                          Reject
                        </button>
                      </>
                    )}
                    {deposit.proofUrl && (
                      <a
                        href={deposit.proofUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-xs"
                      >
                        View Proof
                      </a>
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

export default AdminDeposits;