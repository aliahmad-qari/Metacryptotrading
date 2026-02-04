import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import AMLPolicy from './pages/AMLPolicy';
import PaymentPolicy from './pages/PaymentPolicy';
import Contact from './pages/Contact';
import Faq from './pages/Faq';
import Overview from './pages/dashboard/Overview';
import Fund from './pages/dashboard/Fund';
import Affiliate from './pages/dashboard/Affiliate';
import CopyTraders from './pages/dashboard/CopyTraders';
import Profile from './pages/dashboard/Profile';
import ActivityLog from './pages/dashboard/ActivityLog';
import Deposit from './pages/dashboard/Deposit';
import Withdraw from './pages/dashboard/Withdraw';
import BuyCrypto from './pages/dashboard/BuyCrypto';
import Mining from './pages/dashboard/Mining';
import TradeView from './pages/dashboard/TradeView';
import LiveTrade from './pages/dashboard/LiveTrade';
import { User } from './types';

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route path="/login" element={user ? <Navigate to="/dashboard" /> : <Login setUser={setUser} />} />
        <Route path="/register" element={user ? <Navigate to="/dashboard" /> : <Register setUser={setUser} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/aml" element={<AMLPolicy />} />
        <Route path="/payment-policy" element={<PaymentPolicy />} />
        
        <Route path="/dashboard" element={user ? <Dashboard user={user} setUser={setUser} /> : <Navigate to="/login" />}>
          <Route index element={<Overview user={user} />} />
          <Route path="fund" element={<Fund />} />
          <Route path="affiliate" element={<Affiliate user={user} />} />
          <Route path="copy-traders" element={<CopyTraders />} />
          <Route path="profile" element={<Profile user={user} />} />
          <Route path="activity" element={<ActivityLog />} />
          <Route path="deposit" element={<Deposit />} />
          <Route path="withdraw" element={<Withdraw />} />
          <Route path="buy-crypto" element={<BuyCrypto />} />
          <Route path="mining" element={<Mining />} />
          <Route path="trade-view" element={<TradeView />} />
          <Route path="live-trade" element={<LiveTrade />} />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;