import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { apiCall } from '../../api';

const AdminLogin: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const data = await apiCall('/api/auth/admin-login', {
        method: 'POST',
        body: JSON.stringify({
          ...formData,
          email: formData.email.toLowerCase()
        }),
      });

      if (data.success && data.user.role === 'admin') {
        localStorage.setItem('adminToken', data.token);
        localStorage.setItem('admin', JSON.stringify(data.user));
        navigate('/admin/dashboard');
      } else {
        setError('Admin access required');
      }
    } catch (error: any) {
      setError(error.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-slate-800 rounded-2xl p-8 shadow-2xl border border-slate-700">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Admin Panel</h1>
            <p className="text-slate-400 text-sm">Metacryptotrading</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-500/10 border border-red-500 text-red-500 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500"
                placeholder="admin@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Password</label>
              <input
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required
                className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-lg transition-colors disabled:opacity-50"
            >
              {loading ? 'Logging in...' : 'Login to Admin Panel'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <Link to="/" className="text-sm text-slate-400 hover:text-white">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
