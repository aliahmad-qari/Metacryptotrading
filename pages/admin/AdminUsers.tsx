import React, { useState, useEffect } from 'react';
import { apiCall } from '../../api';

const AdminUsers: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingUser, setEditingUser] = useState<any>(null);
  const [editForm, setEditForm] = useState({ balance: 0, bonus: 0, totalProfit: 0 });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const data = await apiCall('/api/admin/users', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (data.success) {
        setUsers(data.users);
      }
    } catch (error) {
      console.error('Failed to fetch users');
    } finally {
      setLoading(false);
    }
  };

  const handleEditUser = (user: any) => {
    setEditingUser(user);
    setEditForm({
      balance: user.balance,
      bonus: user.bonus,
      totalProfit: user.totalProfit
    });
  };

  const handleUpdateUser = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      await apiCall(`/api/admin/users/${editingUser._id}/balance`, {
        method: 'PUT',
        headers: { 'Authorization': `Bearer ${token}` },
        body: JSON.stringify(editForm)
      });
      setEditingUser(null);
      fetchUsers();
    } catch (error) {
      console.error('Failed to update user');
    }
  };

  const handleToggleStatus = async (userId: string) => {
    try {
      const token = localStorage.getItem('adminToken');
      await apiCall(`/api/admin/users/${userId}/toggle-status`, {
        method: 'PUT',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      fetchUsers();
    } catch (error) {
      console.error('Failed to toggle user status');
    }
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
      <h1 className="text-3xl font-bold mb-8">Users Management</h1>
      
      <div className="bg-slate-800 rounded-lg overflow-hidden border border-slate-700">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-bold uppercase">Name</th>
                <th className="px-6 py-3 text-left text-xs font-bold uppercase">Email</th>
                <th className="px-6 py-3 text-left text-xs font-bold uppercase">Balance</th>
                <th className="px-6 py-3 text-left text-xs font-bold uppercase">Bonus</th>
                <th className="px-6 py-3 text-left text-xs font-bold uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-bold uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700">
              {users.map((user) => (
                <tr key={user._id} className="hover:bg-slate-700/50">
                  <td className="px-6 py-4 text-sm">{user.firstName} {user.lastName}</td>
                  <td className="px-6 py-4 text-sm">{user.email}</td>
                  <td className="px-6 py-4 text-sm font-bold">${user.balance.toFixed(2)}</td>
                  <td className="px-6 py-4 text-sm">${user.bonus.toFixed(2)}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded text-xs font-bold ${
                      user.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {user.isActive ? 'Active' : 'Suspended'}
                    </span>
                  </td>
                  <td className="px-6 py-4 space-x-2">
                    <button
                      onClick={() => handleEditUser(user)}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-xs"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleToggleStatus(user._id)}
                      className={`px-3 py-1 rounded text-xs ${
                        user.isActive 
                          ? 'bg-red-500 hover:bg-red-600 text-white' 
                          : 'bg-green-500 hover:bg-green-600 text-white'
                      }`}
                    >
                      {user.isActive ? 'Suspend' : 'Activate'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {editingUser && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-slate-800 rounded-lg p-6 w-full max-w-md">
            <h3 className="text-xl font-bold mb-4">Edit User: {editingUser.firstName} {editingUser.lastName}</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Balance</label>
                <input
                  type="number"
                  value={editForm.balance}
                  onChange={(e) => setEditForm({...editForm, balance: parseFloat(e.target.value)})}
                  className="w-full bg-slate-700 border border-slate-600 rounded px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Bonus</label>
                <input
                  type="number"
                  value={editForm.bonus}
                  onChange={(e) => setEditForm({...editForm, bonus: parseFloat(e.target.value)})}
                  className="w-full bg-slate-700 border border-slate-600 rounded px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Total Profit</label>
                <input
                  type="number"
                  value={editForm.totalProfit}
                  onChange={(e) => setEditForm({...editForm, totalProfit: parseFloat(e.target.value)})}
                  className="w-full bg-slate-700 border border-slate-600 rounded px-3 py-2"
                />
              </div>
            </div>
            <div className="flex space-x-3 mt-6">
              <button
                onClick={handleUpdateUser}
                className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded"
              >
                Update
              </button>
              <button
                onClick={() => setEditingUser(null)}
                className="bg-slate-600 hover:bg-slate-700 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminUsers;