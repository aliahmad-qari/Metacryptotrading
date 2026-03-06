import React, { useState } from 'react';
import { apiCall } from '../../api';

const Deposit: React.FC = () => {
  const [selectedMethod, setSelectedMethod] = useState('');
  const [amount, setAmount] = useState('');
  const [transactionId, setTransactionId] = useState('');
  const [proofUrl, setProofUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const methods = [
    { 
      name: 'PayPal', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg',
      address: 'payments@metacryptotrading.net'
    },
    { 
      name: 'Bitcoin', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/4/46/Bitcoin.svg',
      address: 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh'
    },
    { 
      name: 'USDT', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Tether_Logo.svg',
      address: 'TXYZopYRdj2D9XRtbG4uXBcPvJA5Qd4PjX'
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    try {
      const token = localStorage.getItem('token');
      const data = await apiCall('/api/deposits/create', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          amount: parseFloat(amount),
          method: selectedMethod,
          transactionId,
          proofUrl
        })
      });

      if (data.success) {
        setSuccess('Deposit request submitted successfully!');
        setAmount('');
        setTransactionId('');
        setProofUrl('');
        setSelectedMethod('');
      }
    } catch (error: any) {
      setError(error.message || 'Failed to submit deposit');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#e6e6fa] flex flex-col items-center py-0 animate-in fade-in duration-500">
      <div className="w-full bg-[#d09683] py-2 px-6 flex items-center space-x-4">
        <div className="text-cyan-400 text-xl">
           <i className="fa-solid fa-atom"></i>
        </div>
        <span className="text-slate-800 font-medium text-sm">Connect your wallet for Fast Deposit</span>
        <button className="bg-[#ff9800] hover:bg-orange-600 text-white font-bold px-4 py-1.5 rounded text-sm transition-colors shadow-sm">
          Wallet connect
        </button>
      </div>

      <div className="w-full max-w-6xl mt-12 px-4">
        <div className="bg-[#fafff0] rounded shadow-lg overflow-hidden border border-blue-400/30 mb-10">
          <div className="bg-[#453c90] p-3 text-white font-bold text-center text-sm">
            We accept bitcoin payments and other cryptocurrencies are available
          </div>

          <div className="p-8">
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
              <div>
                <label className="block text-sm font-bold mb-3 text-slate-800">Select Payment Method</label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {methods.map((method) => (
                    <div
                      key={method.name}
                      onClick={() => setSelectedMethod(method.name)}
                      className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                        selectedMethod === method.name
                          ? 'border-orange-500 bg-orange-50'
                          : 'border-gray-300 hover:border-orange-300'
                      }`}
                    >
                      <div className="flex flex-col items-center space-y-2">
                        <img src={method.logo} alt={method.name} className="h-12 object-contain" />
                        <span className="font-bold text-sm text-slate-800">{method.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {selectedMethod && (
                <>
                  <div className="bg-blue-50 border border-blue-300 rounded p-4">
                    <p className="text-sm font-bold text-slate-800 mb-2">Payment Address:</p>
                    <p className="text-xs text-slate-600 break-all">
                      {methods.find(m => m.name === selectedMethod)?.address}
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-bold mb-2 text-slate-800">Amount (USD)</label>
                    <input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      required
                      min="10"
                      step="0.01"
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-orange-500 text-slate-800"
                      placeholder="Enter amount"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold mb-2 text-slate-800">Transaction ID</label>
                    <input
                      type="text"
                      value={transactionId}
                      onChange={(e) => setTransactionId(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-orange-500 text-slate-800"
                      placeholder="Enter transaction ID"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold mb-2 text-slate-800">Proof URL (Optional)</label>
                    <input
                      type="url"
                      value={proofUrl}
                      onChange={(e) => setProofUrl(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-orange-500 text-slate-800"
                      placeholder="Screenshot or proof URL"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded transition-colors disabled:opacity-50"
                  >
                    {loading ? 'Submitting...' : 'Submit Deposit Request'}
                  </button>
                </>
              )}
            </form>
          </div>
        </div>

        <div className="text-[10px] text-slate-800 text-left pb-10 leading-normal font-medium max-w-5xl mx-auto px-4">
          Metacryptotrading Trade is licensed under FSA - Metacryptotrading is the trade name of Metacryptotrading Trade LLC, a company regulated as a Securities and Exchange Commission By the Financial Services Authority of Washington DC
        </div>
      </div>
    </div>
  );
};

export default Deposit;
