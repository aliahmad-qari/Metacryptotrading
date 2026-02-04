import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Home: React.FC<{ user: any }> = ({ user }) => {
  const [offerSlide, setOfferSlide] = useState(0);
  const offerData = [
    { img: '/images/news1.jpg', title: 'CRYPTOCURRENCY EXCHANGE', text: 'Trade various cryptocurrencies with our secure and reliable exchange platform.' },
    { img: '/images/news2.jpg', title: 'INVESTMENT PORTFOLIO', text: 'Diversify your investments with our professionally managed portfolio options.' },
    { img: '/images/news3.jpg', title: 'TRADING SIGNALS', text: 'Get expert trading signals and market analysis to maximize your profits.' },
    { img: '/images/cryptoexchange.jpeg', title: 'CRYPTO EXCHANGE', text: 'Advanced trading tools and features for professional cryptocurrency trading.' }
  ];

  const [featureSlide, setFeatureSlide] = useState(0);
  const features = [
    { number: 1, title: "SAFE AND SECURE", description: "Trade with 100% peace of mind as we have the best system security team onboard." },
    { number: 2, title: "INSTANT TRADING", description: "With our lightning speed servers, you are sure to get the best out of your investments." },
    { number: 3, title: "PROGRESSIVE REVENUE", description: "Watch your accruals grow in real time and monitor how much revenue is being generated from your investment." },
    { number: 4, title: "COVERED BY INSURANCE", description: "You have zero chances of losing your investments as all our assets are duly covered by insurance." }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [view, setView] = useState<'home' | 'contact' | 'faq'>('home');
  const [currentEarning, setCurrentEarning] = useState({
    name: 'Lucas',
    country: 'CHINA',
    amount: '5820',
  });
  const [showEarning, setShowEarning] = useState(true);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [offerIndex, setOfferIndex] = useState(0);
  
  // FAQ Accordion state
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [openFaqRight, setOpenFaqRight] = useState<number | null>(0);

  const testimonials = [
    { name: 'Jessica Smith', role: 'Verified Client', text: 'Their expertise in Stocks trading and market liquidity has been instrumental in my success.' },
    { name: 'Mark Willson', role: 'Verified Client', text: 'We have transacted with 1000Xelite in amounts well over $2,000,000 with intention of scaling that figure even further.' },
    { name: 'David Chen', role: 'Verified Client', text: 'The platform is intuitive and the returns are consistent. Highly recommend.' },
  ];

  const offers = [
    { title: 'Liquidity Pools', text: 'Our goal is to provide one of the deepest and widest liquidity pools in the crypto market. We strive to accomplish this by aggregating liquidity from multiple connected venues like exchanges.', img: 'https://images.unsplash.com/photo-1642104704074-907c0698cbd9?auto=format&fit=crop&q=80&w=400' },
    { title: 'Custodial Services', text: 'For the crypto assets in your account, we use Metacryptotrading Trades custodial services and applications. Metacryptotrading Trades is trusted by institutions in the digital assets industry for security.', img: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=400' },
    { title: 'Buy Bitcoins', text: 'We also buy bitcoins from our investors. We provide several payment methods to enable you quickly convert your cash to coin without any hassle.', img: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&q=80&w=400' },
  ];

  const leftFaqs = [
    { q: "What is this website about? Is this an ICO?", a: "No. This is not an Initial Coin Offering. We believe that ICO's should be approached with caution as the majority of \"Alt coins\" do not offer any benefits to more established crypto currencies such as Bitcoin, Ethereum, etc. Metacryptotrading Trade is a managed cryptocurrency trading platform with user friendly interface and attractive offer." },
    { q: "What Markets do you trade?", a: "Our experts trade in the most liquid and volatile markets including Cryptocurrency, Forex, and major Stock indices to maximize returns for our investors." },
    { q: "What is the risk for my investment?", a: "While all trading involves risk, we use advanced risk management protocols and stop-loss algorithms. Furthermore, all accounts are covered by our internal insurance fund to mitigate potential losses." },
    { q: "How can I access the account?", a: "You can access your account through our secure member dashboard using your email and password. Our platform is mobile-responsive, allowing you to monitor your investments from any device." }
  ];

  const rightFaqs = [
    { q: "I forgot my password. What should I do?", a: "Go to Password Reminder section, enter your registration e-mail address and follow the instructions." },
    { q: "How to create a new account?", a: "Simply click on the Register button at the top of the page, fill in your details, and you'll have immediate access to your trading dashboard." },
    { q: "May I create more than one account?", a: "No, to maintain the security and integrity of our platform, we only allow one account per individual user. Multiple accounts may result in suspension." }
  ];

  const topStories = [
    { icon: 'fa-google', color: 'text-white', time: '10 hours ago', title: 'GOOGL: Alphabet Stock at Record $350? Traders Ramp Up Long Bets Ahead of Earnings' },
    { icon: 'fa-circle-dot', color: 'text-slate-500', time: '10 hours ago', title: 'PLTR: Palantir Stock Rallies After Stellar Q4 Earnings, Revenue Spikes 70%' },
    { icon: 'fa-circle-info', color: 'text-blue-400', time: '11 hours ago', title: 'DJI: Dow Jones Climbs 500 Points as Traders Shake Off Growth Fears After Strong Data' },
    { icon: 'fa-discord', color: 'text-slate-400', time: 'yesterday', title: 'Discord Stock Set for Market Debut in March IPO: What Traders Should Know' },
    { icon: 'fa-bitcoin', color: 'text-orange-500', time: 'yesterday', title: "BTC/USD: Bitcoin Prices Hit Lowest Level Since Trump's Tariff Rollout in 2025" },
    { icon: 'fa-circle', color: 'text-slate-300', time: 'yesterday', title: 'XAG/USD: Silver Plummets Another 12% as Crashing Prices Keep Hammering Long Bets' },
    { icon: 'fa-coins', color: 'text-yellow-500', time: '4 days ago', title: 'XAU/USD: Gold Plunges 9% in Aggressive Whiplash, Wiping Out Trillions of Dollars' },
    { icon: 'fa-apple', color: 'text-slate-400', time: '4 days ago', title: 'AAPL: Apple Stock Steady Despite Best-Ever Quarter, Revenue Jumps 16% to Record' },
    { icon: 'fa-microsoft', color: 'text-blue-500', time: '4 days ago', title: 'MSFT: Microsoft Stock Sheds $360 Billion in Steep Post-Earnings Selloff' },
    { icon: 'fa-circle', color: 'text-red-500', time: '5 days ago', title: 'SPX: S&P 500 Hits 7,000 as Investors Take on Risk Amid Rush Hour Earnings' },
    { icon: 'fa-arrow-trend-up', color: 'text-yellow-600', time: '6 days ago', title: 'XAU/USD: Gold Goes Vertical as Prices Slice Through $5,300 on Global Rush to Safety' },
    { icon: 'fa-dollar-sign', color: 'text-green-500', time: '6 days ago', title: 'DXY: Dollar Hits Four-Year Low After Trump Says US Currency Is "Doing Great"' },
    { icon: 'fa-circle', color: 'text-red-500', time: '6 days ago', title: 'SPX: S&P 500 Breaks into Record High as Magnificent Seven Rallies (with One Exception)' },
    { icon: 'fa-gamepad', color: 'text-red-600', time: '7 days ago', title: 'GME: GameStop Adds to Strong Start of Year After Michael Burry Reveals Stake' },
    { icon: 'fa-server', color: 'text-blue-600', time: '7 days ago', title: 'CRWV: CoreWeave Pops 6% After Nvidia Vows to Invest $2 Billion for Faster Buildout' },
  ];

  const latestDeposits = [
    { amount: '$500', hash: '00db85ef40da34f3ea76aa60f0b2053eec2d901', status: 'Confirmed' },
    { amount: '$240,000', hash: 'b21a418a44ed8b56118facefe7aa8d26541dff6', status: 'Confirmed' },
    { amount: '$17,000', hash: '1e652d2899a1d058a20041a9faaeb5dc009101', status: 'Confirmed' },
    { amount: '$51,000', hash: '6a49e66a66f75e72e6bd383ac798792af204a66', status: 'Pending' },
    { amount: '$21,000', hash: '8a2b9781aa4995625af7d2b008f020ac74e7e0', status: 'Confirmed' },
    { amount: '$6,000', hash: '797ba039291417fdbdb411ea0a102d23090cde', status: 'Pending' },
    { amount: '$9,000', hash: 'f0b66ce7a33bbc63bf50050beaf52be71709c39', status: 'Confirmed' },
    { amount: '$23,000', hash: '2083e95ada3c584471ba5982e16c5dc2a6e4644', status: 'Confirmed' },
    { amount: '$51,000', hash: '8a2b9781aa4995625af7d2b008f020ac74e7e0', status: 'Confirmed' },
  ];

  const latestWithdrawals = [
    { amount: '$17,000', hash: '1e652d2899a1d058a20041a9faaeb5dc009101', status: 'Confirmed' },
    { amount: '$51,000', hash: '6a49e66a66f75e72e6bd383ac798792af204a66', status: 'Pending' },
    { amount: '$21,000', hash: '8a2b9781aa4995625af7d2b008f020ac74e7e0', status: 'Confirmed' },
    { amount: '$6,000', hash: '797ba039291417fdbdb411ea0a102d23090cde', status: 'Pending' },
    { amount: '$9,000', hash: 'f0b66ce7a33bbc63bf50050beaf52be71709c39', status: 'Confirmed' },
    { amount: '$23,000', hash: '2083e95ada3c584471ba5982e16c5dc2a6e4644', status: 'Confirmed' },
    { amount: '$51,000', hash: '8a2b9781aa4995625af7d2b008f020ac74e7e0', status: 'Confirmed' },
    { amount: '$5,000', hash: '8a2b9781aa4995625af7d2b008f020ac74e7e0', status: 'Confirmed' },
  ];

  // Offer carousel rotation
  useEffect(() => {
    const offerInterval = setInterval(() => {
      setOfferSlide((prev) => (prev + 1) % offerData.length);
    }, 4000);
    return () => clearInterval(offerInterval);
  }, []);

  // Feature carousel rotation
  useEffect(() => {
    const featureInterval = setInterval(() => {
      setFeatureSlide((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(featureInterval);
  }, []);

  // Hero slide rotation
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 2);
    }, 4000);
    return () => clearInterval(slideInterval);
  }, []);

  // Earning toast rotation
  useEffect(() => {
    const names = ['Johnny', 'Aiden', 'John', 'Sarah', 'Ahmed', 'Elena'];
    const countries = ['USA', 'CAMBODIA', 'SOUTH AFRICA', 'GERMANY', 'UAE', 'USA'];
    const interval = setInterval(() => {
      setShowEarning(false);
      setTimeout(() => {
        const rand = Math.floor(Math.random() * names.length);
        setCurrentEarning({
          name: names[rand],
          country: countries[rand],
          amount: (Math.floor(Math.random() * 9000) + 1000).toString(),
        });
        setShowEarning(true);
      }, 500);
    }, 12000);
    return () => clearInterval(interval);
  }, []);

  // Carousel rotations
  useEffect(() => {
    const tInterval = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    const oInterval = setInterval(() => {
      setOfferIndex((prev) => (prev + 1) % offers.length);
    }, 6000);
    return () => {
      clearInterval(tInterval);
      clearInterval(oInterval);
    };
  }, []);

  const handleNavClick = (v: 'home' | 'contact' | 'faq', sectionId?: string) => {
    if (sectionId) {
      if (view !== 'home') {
        setView('home');
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      setView(v);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-orange-500" style={{backgroundImage: 'url("/images/bghome.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed'}}>
      
      {/* Add Navbar Component */}
      <Navbar user={user} />
      
      {/* Add padding for large screens to account for fixed navbar */}
      <div className="lg:pt-16">
      
      {/* GLOBAL NAVBAR - Keep for mobile fallback */}
      <header className="lg:hidden relative z-50 px-6 py-4 flex items-center justify-between bg-slate-900 shadow-lg mx-0 rounded-none">
        <button onClick={() => handleNavClick('home')} className="flex items-center">
          <img src="/images/auth-logo.png" alt="Metacryptotrading" className="h-10 object-contain" />
        </button>
        <div className="flex items-center space-x-4">
          <Link to="/login" className="bg-slate-800 text-white px-4 py-2 text-xs hover:bg-black transition-all">Login</Link>
          <Link to="/register" className="bg-slate-800 text-white px-4 py-2 text-xs hover:bg-black transition-all">Register</Link>
        </div>
      </header>

      {view === 'home' ? (
        <>
          {/* 1. HERO SECTION */}
          <section className="relative min-h-[600px] flex flex-col">
            <div className="absolute inset-0 z-0">
              <div className="relative w-full h-full overflow-hidden">
                <img 
                  src="/images/home1-banner2.jpg" 
                  alt="Hero Background 1" 
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${currentSlide === 0 ? 'opacity-40' : 'opacity-0'}`}
                />
                <img 
                  src="/images/home3-banner3.jpg" 
                  alt="Hero Background 2" 
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${currentSlide === 1 ? 'opacity-40' : 'opacity-0'}`}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b "></div>
            </div>
            <div className="relative z-10 flex-grow flex flex-col justify-center px-6 lg:px-40 py-20">
              <div className={`transition-opacity duration-500 ${currentSlide === 0 ? 'opacity-100' : 'opacity-0'} ${currentSlide === 0 ? 'block' : 'hidden'}`}>
                <h1 className="text-4xl lg:text-6xl font-black mb-4">
                  Efficient <span className="text-orange-500">And Reliable</span>
                </h1>
                <p className="text-lg lg:text-xl text-slate-300 max-w-xl mb-10 leading-relaxed font-medium">
                  24/7 Live Support. Our support channels are available anytime everyday
                </p>
              </div>
              <div className={`transition-opacity duration-500 ${currentSlide === 1 ? 'opacity-100' : 'opacity-0'} ${currentSlide === 1 ? 'block' : 'hidden'}`}>
                <h1 className="text-4xl lg:text-6xl font-black mb-4">
                  Easy Way <span className="text-orange-500">To Trade</span>
                </h1>
                <p className="text-lg lg:text-xl text-slate-300 max-w-xl mb-10 leading-relaxed font-medium">
                  Trade in the most popular currencies of your choice; USD, GBD, AUD, BTC, CNY, EUR, CAD
                </p>
              </div>
              <div className="flex space-x-4">
                <Link to="/login" className="bg-green-600 hover:bg-green-700 text-white px-10 py-3 rounded-sm font-black text-xs uppercase tracking-widest transition-all shadow-xl">Login</Link>
                <Link to="/register" className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-3 rounded-sm font-black text-xs uppercase tracking-widest transition-all shadow-xl">Register</Link>
              </div>
            </div>
          </section>

          {/* 2. MARKET OVERVIEW */}
          <section className=" py-12 px-6 lg:px-20 text-slate-800">
            <div className="max-w-7xl mx-auto border border-slate-100 shadow-sm rounded-md overflow-hidden bg-white">
              <div className="flex space-x-6 px-6 py-4 border-b border-slate-50 text-[11px] font-bold">
                <button className="text-slate-900 border-b-2 border-slate-900 pb-1">Active</button>
                <button className="text-slate-400 hover:text-slate-600 pb-1">Gainers</button>
                <button className="text-slate-400 hover:text-slate-600 pb-1">Losers</button>
              </div>
              <div className="relative h-40 w-full  from-blue-50/20  px-2">
                <svg className="w-full h-full" viewBox="0 0 1000 100" preserveAspectRatio="none">
                  <path d="M0,85 C50,82 100,78 150,84 C200,90 250,75 300,72 C350,68 400,65 450,58 C500,50 550,55 600,48 C650,42 700,35 750,28 C800,35 850,38 900,42 C950,45 1000,48 1000,48" fill="none" stroke="#3b82f6" strokeWidth="1.5" />
                </svg>
                <div className="absolute bottom-2 left-0 w-full flex justify-between px-6 text-[9px] text-slate-300 font-bold uppercase">
                   <span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>17</span><span>Aug</span><span>Sep</span><span>Oct</span><span>16</span><span>Nov</span><span>Dec</span><span>16</span><span>2026</span><span>Feb</span>
                </div>
              </div>
              <div className="flex space-x-5 px-6 py-3 border-y border-slate-50 text-[10px] font-bold text-slate-400">
                <button className="hover:text-slate-800">1D</button>
                <button className="hover:text-slate-800">1M</button>
                <button className="hover:text-slate-800">3M</button>
                <button className="bg-slate-100 text-slate-900 px-2.5 py-1 rounded-sm">1Y</button>
                <button className="hover:text-slate-800">5Y</button>
                <button className="hover:text-slate-800">All</button>
              </div>
              <div className="divide-y divide-slate-50">
                {[
                  { symbol: 'NVDA', name: 'NVIDIA Corporation', price: '179.23', chgP: '-3.44%', chgV: '-6.38', negative: true, active: true },
                  { symbol: 'PYPL', name: 'PayPal Holdings, Inc.', price: '41.58', chgP: '-20.54%', chgV: '-10.75', negative: true },
                  { symbol: 'PLTR', name: 'Palantir Technologies Inc.', price: '157.69', chgP: '+6.72%', chgV: '+9.93', negative: false },
                  { symbol: 'INTC', name: 'Intel Corporation', price: '49.02', chgP: '+0.43%', chgV: '+0.21', negative: false },
                ].map((asset, i) => (
                  <div key={i} className={`flex items-center justify-between px-6 py-4 transition-colors ${asset.active ? 'bg-blue-50/40' : 'hover:bg-slate-50/40'}`}>
                    <div className="flex flex-col">
                      <div className="flex items-center space-x-1.5">
                        <span className="text-[12px] font-black text-slate-900 tracking-tight">{asset.symbol}</span>
                        <span className="text-[8px] text-orange-400 font-bold bg-orange-50 px-1 rounded-sm border border-orange-100">D</span>
                      </div>
                      <span className="text-[10px] text-slate-400 font-bold">{asset.name}</span>
                    </div>
                    <div className="flex items-center space-x-12">
                       <span className="text-[12px] font-black text-slate-900">{asset.price}</span>
                       <div className="flex flex-col items-end min-w-[70px]">
                          <span className={`text-[11px] font-black ${asset.negative ? 'text-red-500' : 'text-green-500'}`}>{asset.chgP}</span>
                          <span className={`text-[10px] font-bold ${asset.negative ? 'text-red-400' : 'text-green-400'}`}>{asset.chgV}</span>
                       </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 3. STOCKS TODAY BY TRADINGVIEW */}
          <section id="plans" className="bg-[#020617] py-16 overflow-hidden relative border-t border-white/5">
            <div className="text-center mb-10">
              <span className="text-blue-500 text-[10px] font-bold uppercase tracking-widest">Stocks today <span className="text-white/40 font-medium">by TradingView</span></span>
            </div>
            <div className="max-w-7xl mx-auto px-4 lg:px-20 mb-4">
              <div className="relative overflow-hidden">
                <div className="flex space-x-4 pb-4" style={{animation: 'scrollRight 20s linear infinite'}}>
                  <style jsx>{`
                    @keyframes scrollRight {
                      0% { transform: translateX(0); }
                      100% { transform: translateX(-50%); }
                    }
                  `}</style>
                  {[...Array(2)].map((_, repeat) => (
                    <div key={repeat} className="flex space-x-4">
                      {[
                        { name: 'Bitcoin', price: '$74,644.77', chg: '-4.98%', icon: 'fa-bitcoin', color: 'text-orange-500' },
                        { name: 'Litecoin', price: '$57.88', chg: '-3.69%', icon: 'fa-l', color: 'text-blue-500' },
                        { name: 'XRP', price: '$1.55', chg: '-5.19%', icon: 'fa-x', color: 'text-slate-400' },
                        { name: 'Dogecoin', price: '$0.103863', chg: '-3.98%', icon: 'fa-paw', color: 'text-yellow-600' },
                        { name: 'Tether USDt', price: '$0.999023', chg: '-0.03%', icon: 'fa-dollar-sign', color: 'text-teal-500' },
                        { name: 'Ethereum', price: '$2,166.49', chg: '-7.41%', icon: 'fa-ethereum', color: 'text-blue-400' },
                        { name: 'Bitcoin Cash', price: '$517.22', chg: '-3.52%', icon: 'fa-bitcoin', color: 'text-green-500' },
                        { name: 'BNB', price: '$712.10', chg: '-2.41%', icon: 'fa-bitcoin', color: 'text-yellow-500' },
                      ].map((coin, i) => (
                        <div key={`${repeat}-${i}`} className="flex-shrink-0 w-40 bg-white p-5 rounded-md text-slate-800 text-center shadow-lg border border-slate-100 flex flex-col items-center">
                          <i className={`fa-solid ${coin.icon} ${coin.color} text-3xl mb-3`}></i>
                          <div className="font-black text-[12px] mb-0.5">{coin.name}</div>
                          <div className="text-[10px] text-slate-400 mb-3 font-medium">{coin.price}</div>
                          <div className="bg-red-500 text-white text-[9px] font-bold py-1 px-3 rounded-sm flex items-center space-x-1">
                            <i className="fa-solid fa-caret-down"></i>
                            <span>{coin.chg}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full h-1 bg-white/10 rounded-full mt-4 relative">
                <div className="absolute left-1/4 w-1/2 h-full bg-slate-400 rounded-full"></div>
              </div>
            </div>
            <div className="max-w-7xl mx-auto px-6 lg:px-20 flex items-center justify-between mt-2">
               <div className="flex items-center space-x-1 opacity-60">
                  <img src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg" className="w-4 h-3 object-cover rounded-sm" alt="US" />
               </div>
               <div className="text-[9px] font-bold text-slate-500 uppercase flex items-center">
                  Powered by <span className="text-slate-400 ml-1">CoinMarketCap</span>
               </div>
            </div>
            <div className="mt-16 relative py-20 px-6 lg:px-20 bg-[url('https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center">
              <div className="absolute inset-0 "></div>
              <div className="relative z-10 max-w-7xl mx-auto">
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                  <div className="flex space-x-8 text-[11px] font-black uppercase tracking-tight">
                    <button className="text-white border-b-2 border-white pb-4">Indices</button>
                    <button className="text-slate-500 hover:text-white pb-4 transition-colors">Commodities</button>
                    <button className="text-slate-500 hover:text-white pb-4 transition-colors">Bonds</button>
                    <button className="text-slate-500 hover:text-white pb-4 transition-colors">Forex</button>
                  </div>
                </div>
                <div className="flex flex-col space-y-8">
                  <div className="flex space-x-4 text-[10px] font-bold text-slate-500">
                    {['1D', '1M', '3M', '1Y', '5Y', 'All'].map((t) => (
                      <button key={t} className={`px-2 py-1 rounded ${t === '1Y' ? 'bg-slate-800 text-white' : 'hover:text-white'}`}>{t}</button>
                    ))}
                  </div>
                  <div className="h-40 relative">
                     <svg className="w-full h-full" viewBox="0 0 1000 100" preserveAspectRatio="none">
                        <path d="M0,60 C50,55 100,65 150,55 C200,45 250,50 300,40 C350,35 400,32 450,30 C500,28 550,32 600,30 C650,25 700,20 750,15 C800,22 850,25 900,20 C950,18 1000,15 1000,15" fill="none" stroke="#3b82f6" strokeWidth="2" opacity="0.8" />
                     </svg>
                     <div className="absolute bottom-0 w-full flex justify-between text-[9px] text-slate-600 font-bold uppercase tracking-widest mt-4">
                        <span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>17</span><span>Aug</span><span>Sep</span><span>Oct</span><span>16</span><span>Nov</span><span>Dec</span><span>16</span><span>2026</span><span>Feb</span>
                     </div>
                  </div>
                  <div className="divide-y divide-white/5 bg-black/40 backdrop-blur-sm rounded-lg border border-white/5">
                    {[
                      { sym: 'SPX500USD', name: 'S&P 500', price: '6,897.7', chgP: '-1.24%', chgV: '-86.70', color: 'bg-red-500', val: '500', negative: true, active: true },
                      { sym: 'NAS100USD', name: 'Nasdaq 100', price: '25,265.1', chgP: '-2.02%', chgV: '-520.90', color: 'bg-cyan-500', val: '100', negative: true },
                      { sym: 'DJI', name: 'Dow 30', price: '48,998.0', chgP: '-0.76%', chgV: '-375.00', color: 'bg-cyan-600', val: '30', negative: true },
                      { sym: 'NKY', name: 'Nikkei 225', price: '54,720.66', chgP: '+3.92%', chgV: '+2,065.48', color: 'bg-blue-600', val: '225', negative: false },
                      { sym: 'DEU30', name: 'DAX 30', price: '24,312.45', chgP: '+1.05%', chgV: '+252.12', color: 'bg-blue-500', val: '30', negative: false },
                    ].map((idx, i) => (
                      <div key={i} className={`flex items-center justify-between px-6 py-4 ${idx.active ? 'bg-white/5' : ''}`}>
                         <div className="flex items-center space-x-4">
                            <div className={`w-10 h-10 rounded-full ${idx.color} flex items-center justify-center text-white font-black text-[10px]`}>{idx.val}</div>
                            <div className="flex flex-col">
                               <span className="text-white text-[12px] font-black">{idx.sym}</span>
                               <span className="text-slate-500 text-[10px] font-bold">{idx.name}</span>
                            </div>
                         </div>
                         <div className="flex items-center space-x-12">
                            <span className="text-white text-[12px] font-black">{idx.price}</span>
                            <div className="flex flex-col items-end min-w-[70px]">
                               <span className={`text-[11px] font-black ${idx.negative ? 'text-red-500' : 'text-green-500'}`}>{idx.chgP}</span>
                               <span className={`text-[10px] font-bold ${idx.negative ? 'text-red-400' : 'text-green-400'}`}>{idx.chgV}</span>
                            </div>
                         </div>
                      </div>
                    ))}
                  </div>
                  <div className="text-center">
                    <span className="text-blue-500 text-[9px] font-bold uppercase tracking-widest">Market Data <span className="text-slate-500">by TradingView</span></span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 4. THREE EASY STEPS */}
          <section className="relative py-24 px-6 lg:px-20 overflow-hidden bg-[url('https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center">
            <div className="absolute inset-0 "></div>
            <div className="relative z-10 text-center max-w-7xl mx-auto">
              <h2 className="text-3xl font-black uppercase mb-2 tracking-tighter text-white">Three Easy <span className="text-orange-500">Steps</span></h2>
              <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-16">Its fast and easy to Register with us in three simple steps</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-black text-xl mb-6 shadow-2xl transition-transform hover:scale-110">
                    <i className="fa-solid fa-user-plus"></i>
                  </div>
                  <h4 className="font-black text-sm uppercase mb-3">Create An Account</h4>
                  <p className="text-[10px] text-slate-400 leading-relaxed max-w-[220px]">Simply click on the register button to create a free account for yourself. Its quick and easy.</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-black text-xl mb-6 shadow-2xl transition-transform hover:scale-110">
                    <i className="fa-solid fa-gift"></i>
                  </div>
                  <h4 className="font-black text-sm uppercase mb-3">Make Deposit</h4>
                  <p className="text-[10px] text-slate-400 leading-relaxed max-w-[220px]">Pick a plan of your choice from our investment plans. Make a deposit to your personal wallet.</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-black text-xl mb-6 shadow-2xl transition-transform hover:scale-110">
                    <i className="fa-solid fa-chart-line"></i>
                  </div>
                  <h4 className="font-black text-sm uppercase mb-3">Financial Growth</h4>
                  <p className="text-[10px] text-slate-400 leading-relaxed max-w-[220px]">Watch your daily earnings live. Be ready to place a withdrawal as soon as your investment is completed.</p>
                </div>
              </div>

              {/* Statistics Row Below */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12 border-t border-white/5">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-black text-xl mb-6 shadow-2xl transition-transform hover:scale-110">
                    <i className="fa-solid fa-money-bill-1-wave"></i>
                  </div>
                  <h4 className="font-black text-sm uppercase mb-2">Total Deposit</h4>
                  <p className="text-sm font-black text-white">$7B</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-black text-xl mb-6 shadow-2xl transition-transform hover:scale-110">
                    <i className="fa-solid fa-clock-rotate-left"></i>
                  </div>
                  <h4 className="font-black text-sm uppercase mb-2">Proceeded Transactions</h4>
                  <p className="text-sm font-black text-white">$4B</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-black text-xl mb-6 shadow-2xl transition-transform hover:scale-110">
                    <i className="fa-solid fa-dollar-sign"></i>
                  </div>
                  <h4 className="font-black text-sm uppercase mb-2">Total Withdrawal</h4>
                  <p className="text-sm font-black text-white">$33B</p>
                </div>
              </div>
            </div>
          </section>

          {/* 5. TOP STORIES */}
          <section className="py-24 bg-black px-6 lg:px-20 relative border-t border-white/5">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-black text-white mb-14 uppercase tracking-tighter">Top Stories</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-12">
                {topStories.map((story, i) => (
                  <div key={i} className="group cursor-pointer">
                    <div className="flex items-center space-x-3 mb-3">
                       <div className={`w-5 h-5 rounded-full bg-white flex items-center justify-center border border-slate-100`}>
                          <i className={`fa-solid ${story.icon} ${story.color.startsWith('text-white') ? 'text-blue-600' : story.color} text-[10px]`}></i>
                       </div>
                       <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{story.time}</span>
                    </div>
                    <h4 className="text-[12px] font-medium leading-relaxed group-hover:text-blue-400 transition-colors text-white line-clamp-3">
                      {story.title}
                    </h4>
                  </div>
                ))}
                
                {/* Keep Reading Link Slot */}
                <div className="flex items-end pb-1">
                  <button className="text-blue-500 font-bold text-xs flex items-center hover:underline transition-all">
                    Keep reading <i className="fa-solid fa-chevron-right ml-2 text-[10px]"></i>
                  </button>
                </div>
              </div>

              {/* Centered Bottom Label */}
              <div className="mt-16 text-center">
                <span className="text-blue-500 text-[9px] font-bold uppercase tracking-widest">Daily news roundup <span className="text-slate-500">by Mt5fxtrading</span></span>
              </div>
            </div>
          </section>

          {/* 6. SAFE AND SECURE CAROUSEL */}
          <section className="py-24 bg-slate-900 flex justify-center items-center">
            <div className="max-w-5xl w-full flex flex-col md:flex-row items-center bg-white rounded-sm overflow-hidden shadow-2xl mx-6">
              <div className="md:w-1/2 h-[350px]">
                <img src="/images/good-plans.jpg" alt="Secure" className="w-full h-full object-cover" />
              </div>
              <div className="md:w-1/2 p-12 text-slate-800 relative">
                <div className="absolute top-6 left-12 w-10 h-10 bg-cyan-600 text-white flex items-center justify-center rounded-full font-black">
                  {features[featureSlide].number}
                </div>
                <h3 className="text-3xl font-black uppercase mb-6 mt-10 tracking-widest">
                  {features[featureSlide].title.split(' ').map((word, i) => 
                    i === features[featureSlide].title.split(' ').length - 1 ? 
                    <span key={i} className="text-cyan-600">{word}</span> : 
                    <span key={i}>{word} </span>
                  )}
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed mb-10 italic">
                  {features[featureSlide].description}
                </p>
                <div className="flex space-x-2">
                  {features.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setFeatureSlide(i)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        i === featureSlide ? 'bg-cyan-600' : 'bg-slate-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* 7. GROW YOUR MONEY & GRID */}
          <section className="py-24 px-6 lg:px-20 text-center relative">
            <div className="relative z-10 max-w-6xl mx-auto">
              <h2 className="text-3xl font-black mb-6 uppercase">Grow <span className="text-orange-500">Your Money</span></h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
                <div className="flex flex-col"><span className="text-6xl font-black mb-2">6</span><span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Years of Experience</span></div>
                <div className="flex flex-col"><span className="text-6xl font-black mb-2">875k</span><span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Happy Clients</span></div>
                <div className="flex flex-col"><span className="text-6xl font-black mb-2">100%</span><span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Satisfaction</span></div>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                <img src="/images/grid1.jpg" alt="1" className="rounded shadow-xl hover:scale-105 transition-transform duration-300" />
                <img src="/images/security.jpg" alt="2" className="rounded shadow-xl lg:col-span-1 lg:row-span-2 hover:scale-110 transition-transform duration-500 w-full h-full object-cover" />
                <img src="/images/grid2.jpg" alt="3" className="rounded shadow-xl hover:scale-105 transition-transform duration-300" />
                <img src="/images/grid3.jpg" alt="4" className="rounded shadow-xl hover:scale-105 transition-transform duration-300" />
                <img src="/images/grid5.jpg" alt="5" className="rounded shadow-xl hover:scale-105 transition-transform duration-300" />
              </div>
            </div>
          </section>

          {/* 8. ABOUT */}
          <section id="about" className="py-24 px-6 lg:px-40 bg-[#262626] flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <img 
                src="/images/video-img.jpg" 
                alt="About Team" 
                className="w-full rounded-sm shadow-2xl opacity-80" 
              />
            </div>
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-4xl font-serif font-bold text-white">About</h2>
              <div className="text-slate-300 text-[13px] leading-relaxed space-y-6 font-medium">
                <p>
                  Metacryptotrading Trades International Investment Corporate Company Limited is a very experienced and promising organization in the field of trustee administration and long-haul ventures. The joining of distinctive systems and techniques add to income, gainful collaboration, and organized advancement. The most developed territory of Metacryptotrading Trades International Investment Corporate Company Limited movement is multicurrency trading on the Forex market.
                </p>
                <p>
                  It was established by a group of professional traders and investors, who have fore seen the future of International Capital Market
                </p>
                <p>
                  Since 2013, we offer the best conditions for financial specialists from Great England and will be prepared to see you among them. Various organization workers are proficient money related investigators and experienced specialists in remote trade trading and hypothesis with securities and shares of various UK organizations. They have all the information and abilities that are important to be required in beneficial trade and expand the benefit with sensible risk
                </p>
              </div>
              <button className="mt-4 bg-white text-black font-bold py-3 px-8 rounded-sm text-xs hover:bg-slate-200 transition-colors uppercase tracking-tight">
                More About Us
              </button>
            </div>
          </section>

          {/* 9. WHY CHOSE US */}
          <section className="relative py-24 px-6 lg:px-20 text-center overflow-hidden bg-[url('https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center">
            <div className="absolute inset-0 "></div>
            <div className="relative z-10 max-w-7xl mx-auto">
              <h2 className="text-3xl font-serif font-bold mb-3 text-white">Why <span className="text-orange-500">Chose Us</span></h2>
              <p className="text-[10px] text-slate-400 uppercase tracking-widest mb-16">With our innovative traders, you have many more reasons to chose us.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 border border-white/10">
                {[
                  { 
                    title: 'SAFE AND SECURE', 
                    icon: 'fa-lock', 
                    desc: 'Trade with 100% peace of mind as we have the best system security team onboard.' 
                  },
                  { 
                    title: 'INSTANT TRADING', 
                    icon: 'fa-bolt-lightning', 
                    desc: 'With our lightning speed servers, you are sure to get the best out of your investments.' 
                  },
                  { 
                    title: 'PROGRESSIVE REVENUE', 
                    icon: 'fa-layer-group', 
                    desc: 'Watch your accruals grow in real time and monitor how much revenue is being generated for you..' 
                  },
                  { 
                    title: 'INVESTMENT FOR ALL', 
                    icon: 'fa-users', 
                    desc: 'With different packages, Our system is modelled to accommodate everyone no matter how much you have to invest.' 
                  },
                  { 
                    title: 'COVERED BY INSURANCE', 
                    icon: 'fa-shield-halved', 
                    desc: 'You have zero chances of losing your investments as all our assets are duly covered by inssurance..' 
                  },
                  { 
                    title: 'BITCOIN TRANSACTION', 
                    icon: 'fa-bitcoin', 
                    desc: "Invest in the world's most popular cryptocurrency and enjoy all the benefits that come with it.." 
                  },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center p-12 border border-white/5 hover:bg-white/5 transition-colors">
                    <i className={`fa-solid ${item.icon} text-3xl text-cyan-400 mb-6`}></i>
                    <h4 className="font-black text-[13px] text-white uppercase mb-4 tracking-tight">{item.title}</h4>
                    <p className="text-[10px] text-slate-500 leading-relaxed max-w-[240px]">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 10. TESTIMONIALS */}
          <section className="py-24  px-6 lg:px-20 text-center relative overflow-hidden">
            <h2 className="text-3xl font-black mb-4 uppercase">What People Are <span className="text-orange-500">Saying</span></h2>
            <div className="max-w-6xl mx-auto mt-16 transition-all duration-700">
               <div className="bg-white p-12 rounded-sm shadow-2xl relative text-slate-800 max-w-2xl mx-auto">
                  <p className="text-xs leading-relaxed italic mb-8 font-medium">"{testimonials[testimonialIndex].text}"</p>
                  <div className="font-black text-xs uppercase">{testimonials[testimonialIndex].name}</div>
               </div>
            </div>
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setTestimonialIndex(i)} className={`w-3 h-3 rounded-full ${testimonialIndex === i ? 'bg-orange-500 w-6' : 'bg-slate-700'}`}></button>
              ))}
            </div>
          </section>

          {/* 11. WHAT WE OFFER CAROUSEL */}
          <section className="py-24 bg-[#0a0f1e] px-6 lg:px-20 text-center">
            <h2 className="text-3xl font-black mb-4 uppercase tracking-tighter">What We <span className="text-orange-500">Offer</span></h2>
            <div className="max-w-4xl mx-auto mt-12">
              <div className="bg-white text-slate-800 rounded-sm overflow-hidden shadow-2xl transition-all duration-500">
                <div className="h-64 overflow-hidden">
                  <img src={offerData[offerSlide].img} alt={offerData[offerSlide].title} className="w-full h-full object-cover transition-all duration-500" />
                </div>
                <div className="p-8 text-center">
                  <h4 className="font-black text-lg uppercase mb-4">{offerData[offerSlide].title}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">{offerData[offerSlide].text}</p>
                  <div className="flex justify-center space-x-2">
                    {offerData.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setOfferSlide(i)}
                        className={`w-3 h-3 rounded-full transition-colors ${
                          i === offerSlide ? 'bg-orange-500' : 'bg-slate-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 12. RECENT DEPOSITS AND WITHDRAWALS */}
          <section className="relative py-24 px-6 lg:px-20 overflow-hidden bg-[url('https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center">
            <div className="absolute inset-0 bg-black/90"></div>
            <div className="relative z-10 max-w-7xl mx-auto">
              <h3 className="text-xl font-bold text-red-600 text-center uppercase tracking-widest mb-16">Recent Deposits and Withdrawals</h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* Latest Deposits Column */}
                <div className="bg-black/40 backdrop-blur-sm rounded-sm border border-white/10 overflow-hidden flex flex-col h-[480px]">
                  <div className="bg-green-100 p-4 flex items-center space-x-3 text-[#333] font-black uppercase text-sm">
                    <i className="fa-solid fa-plus text-yellow-600 text-lg"></i>
                    <span className="text-yellow-600">Latest Deposits</span>
                  </div>
                  <div className="flex-grow overflow-hidden p-2">
                    <div className="h-full space-y-1" style={{animation: 'marqueeUp 30s linear infinite'}}>
                      <style jsx>{`
                        @keyframes marqueeUp {
                          0% { transform: translateY(100%); }
                          100% { transform: translateY(-100%); }
                        }
                      `}</style>
                      {[...Array(3)].map((_, repeat) => (
                        <div key={repeat}>
                          {[
                            { status: 'Confirmed', amount: '$10,000.00', hash: '3a17c5984af22cd7a443f14457841b3b19a51ea75a30e18bc6a82e4f8732dbca' },
                            { status: 'Pending', amount: '$51,000.00', hash: '8a2b9781aa4995625af7d2b008f020ac74e7e0d2a599e93ed995f7c3bc2be9f2' },
                            { status: 'Confirmed', amount: '$24,100.00', hash: 'f007e92cc9f82ba9c8c40c481eec7315fa9abcd85e7249a6cb57e38a2cf22d3e' },
                            { status: 'Confirmed', amount: '$4,000.00', hash: '8a2b9781aa4995625af7d2b008f020ac74e7e0d2a599e93ed995f7c3bc2be9f2' },
                            { status: 'Confirmed', amount: '$500', hash: '00db85ef40da34f3ea76aa60f0b2053eec2d90121e450791c18d8edbfedde6f1' },
                            { status: 'Confirmed', amount: '$240,000', hash: 'b21a418a44ed8b56118facefe7aa8d26541dff811b8a8ca65cfa1346d62c5c48' },
                            { status: 'Confirmed', amount: '$17,000', hash: '1e652d2899a1d058a20041a9faaeb5dc009101ca412ff09c387e6b281bd1db8b' },
                            { status: 'Pending', amount: '$51,000', hash: '6a49e66a66f75e72e6bd383ac798792af204a6693708912ad0d48e363a2ab7a7' },
                            { status: 'Confirmed', amount: '$21,000', hash: '8a2b9781aa4995625af7d2b008f020ac74e7e0d2a599e93ed995f7c3bc2be9f2' },
                            { status: 'Pending', amount: '$6,000', hash: '797ba039291417fdbdb411ea0a102d23090cde9ac7799ff605f40b5db484891d' },
                            { status: 'Confirmed', amount: '$9,000', hash: 'f0b66ce7a33bbc63bf50050beaf52be71709c359aa1d344bb90f943690485661' },
                            { status: 'Confirmed', amount: '$23,000', hash: '2083e95ada3c584471ba5982e16c5dc2a6e464d3c170555ea8c708668be9383b' },
                            { status: 'Confirmed', amount: '$51,000', hash: '8a2b9781aa4995625af7d2b008f020ac74e7e0d2a599e93ed995f7c3bc2be9f2' },
                            { status: 'Confirmed', amount: '$5,000', hash: '8a2b9781aa4995625af7d2b008f020ac74e7e0d2a599e93ed995f7c3bc2be9f2' },
                            { status: 'Confirmed', amount: '$5,000', hash: '15c3a97edbd606bd1e455aa2875677f5c6cd2b804e9054e898f640d313e39781' },
                            { status: 'Pending', amount: '$18,000', hash: '66c13496e9d53a2402fd49bbe91df298164472679cc868bbfebbabb4844d784c' },
                            { status: 'Confirmed', amount: '$2,500', hash: 'ce972a6b82135fcba0890ea0c8668bdddf782fd580672daa6616c3b1af40ca9f' },
                            { status: 'Confirmed', amount: '$9,000', hash: '376e809b02e6ef044f6d5cf5b72111f25f3c3e16a93dce865a178e2e0f5c484c' },
                            { status: 'Pending', amount: '$43,000', hash: 'aa14458f8082d9c4265ef491ca0b5d4801c16bbf7a4aece7b70a0b4824ffdfea' }
                          ].map((item, i) => (
                            <div key={`${repeat}-${i}`} className="flex items-center justify-between p-3 border-b border-white/5 hover:bg-white/5 transition-colors">
                              <div className="flex items-center space-x-3 min-w-[120px]">
                                <div className={`flex items-center space-x-1.5 px-2 py-1 rounded-sm text-[9px] font-black uppercase shadow-sm ${
                                  item.status === 'Confirmed' ? 'bg-green-600 text-white' : 'bg-blue-600 text-white'
                                }`}>
                                  <i className={`fa-solid ${item.status === 'Confirmed' ? 'fa-check' : 'fa-info'}`}></i>
                                  <span>{item.status}</span>
                                </div>
                                <span className="text-blue-400 font-bold text-xs">{item.amount}</span>
                              </div>
                              <span className="text-slate-500 font-mono text-[10px] truncate ml-4 flex-grow text-right opacity-80">{item.hash}</span>
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Latest Withdrawals Column */}
                <div className="bg-black/40 backdrop-blur-sm rounded-sm border border-white/10 overflow-hidden flex flex-col h-[480px]">
                  <div className="bg-red-100 p-4 flex items-center space-x-3 text-[#333] font-black uppercase text-sm">
                    <i className="fa-solid fa-minus text-red-600 text-lg"></i>
                    <span className="text-green-600">Latest Withdrawals</span>
                  </div>
                  <div className="flex-grow overflow-hidden p-2">
                    <div className="h-full space-y-1" style={{animation: 'marqueeDown 30s linear infinite'}}>
                      <style jsx>{`
                        @keyframes marqueeDown {
                          0% { transform: translateY(-100%); }
                          100% { transform: translateY(100%); }
                        }
                      `}</style>
                      {[...Array(3)].map((_, repeat) => (
                        <div key={repeat}>
                          {[
                            { status: 'Confirmed', amount: '$10,000.00', hash: '3a17c5984af22cd7a443f14457841b3b19a51ea75a30e18bc6a82e4f8732dbca' },
                            { status: 'Pending', amount: '$51,000.00', hash: '8a2b9781aa4995625af7d2b008f020ac74e7e0d2a599e93ed995f7c3bc2be9f2' },
                            { status: 'Confirmed', amount: '$24,100.00', hash: 'f007e92cc9f82ba9c8c40c481eec7315fa9abcd85e7249a6cb57e38a2cf22d3e' },
                            { status: 'Confirmed', amount: '$4,000.00', hash: '8a2b9781aa4995625af7d2b008f020ac74e7e0d2a599e93ed995f7c3bc2be9f2' },
                            { status: 'Confirmed', amount: '$500', hash: '00db85ef40da34f3ea76aa60f0b2053eec2d90121e450791c18d8edbfedde6f1' },
                            { status: 'Confirmed', amount: '$240,000', hash: 'b21a418a44ed8b56118facefe7aa8d26541dff811b8a8ca65cfa1346d62c5c48' },
                            { status: 'Confirmed', amount: '$17,000', hash: '1e652d2899a1d058a20041a9faaeb5dc009101ca412ff09c387e6b281bd1db8b' },
                            { status: 'Pending', amount: '$51,000', hash: '6a49e66a66f75e72e6bd383ac798792af204a6693708912ad0d48e363a2ab7a7' },
                            { status: 'Confirmed', amount: '$21,000', hash: '8a2b9781aa4995625af7d2b008f020ac74e7e0d2a599e93ed995f7c3bc2be9f2' },
                            { status: 'Pending', amount: '$6,000', hash: '797ba039291417fdbdb411ea0a102d23090cde9ac7799ff605f40b5db484891d' },
                            { status: 'Confirmed', amount: '$9,000', hash: 'f0b66ce7a33bbc63bf50050beaf52be71709c359aa1d344bb90f943690485661' },
                            { status: 'Confirmed', amount: '$23,000', hash: '2083e95ada3c584471ba5982e16c5dc2a6e464d3c170555ea8c708668be9383b' },
                            { status: 'Confirmed', amount: '$51,000', hash: '8a2b9781aa4995625af7d2b008f020ac74e7e0d2a599e93ed995f7c3bc2be9f2' },
                            { status: 'Confirmed', amount: '$5,000', hash: '8a2b9781aa4995625af7d2b008f020ac74e7e0d2a599e93ed995f7c3bc2be9f2' },
                            { status: 'Confirmed', amount: '$5,000', hash: '15c3a97edbd606bd1e455aa2875677f5c6cd2b804e9054e898f640d313e39781' },
                            { status: 'Pending', amount: '$18,000', hash: '66c13496e9d53a2402fd49bbe91df298164472679cc868bbfebbabb4844d784c' },
                            { status: 'Confirmed', amount: '$2,500', hash: 'ce972a6b82135fcba0890ea0c8668bdddf782fd580672daa6616c3b1af40ca9f' },
                            { status: 'Confirmed', amount: '$9,000', hash: '376e809b02e6ef044f6d5cf5b72111f25f3c3e16a93dce865a178e2e0f5c484c' },
                            { status: 'Pending', amount: '$43,000', hash: 'aa14458f8082d9c4265ef491ca0b5d4801c16bbf7a4aece7b70a0b4824ffdfea' }
                          ].map((item, i) => (
                            <div key={`${repeat}-${i}`} className="flex items-center justify-between p-3 border-b border-white/5 hover:bg-white/5 transition-colors">
                              <div className="flex items-center space-x-3 min-w-[120px]">
                                <div className={`flex items-center space-x-1.5 px-2 py-1 rounded-sm text-[9px] font-black uppercase shadow-sm ${
                                  item.status === 'Confirmed' ? 'bg-green-600 text-white' : 'bg-blue-600 text-white'
                                }`}>
                                  <i className={`fa-solid ${item.status === 'Confirmed' ? 'fa-check' : 'fa-info'}`}></i>
                                  <span>{item.status}</span>
                                </div>
                                <span className="text-blue-400 font-bold text-xs">{item.amount}</span>
                              </div>
                              <span className="text-slate-500 font-mono text-[10px] truncate ml-4 flex-grow text-right opacity-80">{item.hash}</span>
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 13. BE OUR PARTNERS */}
          <section className="relative py-24 px-6 lg:px-20 text-center overflow-hidden bg-[url('https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center">
            <div className="absolute inset-0 bg-black/90"></div>
            <div className="relative z-10 max-w-7xl mx-auto">
              <h2 className="text-3xl font-serif font-bold mb-4 text-white">Be Our <span className="text-orange-500">Partners</span></h2>
              <p className="text-[12px] text-slate-300 max-w-4xl mx-auto leading-relaxed mb-16">
                Are you passionate about working with us? We are glad to let you know that we will always welcome you with an open arm ready to work with you in the best way
              </p>
              
              <div className="flex flex-wrap justify-center gap-16 opacity-30 grayscale hover:opacity-100 transition-all duration-700 mb-10">
                <i className="fa-brands fa-cc-visa text-5xl"></i>
                <i className="fa-brands fa-cc-mastercard text-5xl"></i>
                <i className="fa-brands fa-cc-paypal text-5xl"></i>
                <i className="fa-brands fa-stripe text-5xl"></i>
              </div>
            </div>
          </section>
        </>
      ) : view === 'faq' ? (
        <>
          {/* FAQ PAGE CONTENT */}
          <section className="relative min-h-[400px] flex flex-col items-center justify-center text-center">
            <div className="absolute inset-0 z-0">
               <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" alt="Hero" className="w-full h-full object-cover opacity-30" />
               <div className="absolute inset-0 bg-black/70"></div>
            </div>
            <div className="relative z-10">
               <span className="text-xs font-bold text-white/70 uppercase tracking-widest block mb-4">How it works</span>
               <h1 className="text-5xl lg:text-7xl font-serif font-black mb-6">FAQ'S</h1>
               <div className="text-[11px] font-bold flex items-center justify-center space-x-2 text-white/50 uppercase">
                 <button onClick={() => setView('home')} className="hover:text-orange-500">Home</button>
                 <span>/</span>
                 <span className="text-orange-500">faq's</span>
               </div>
            </div>
          </section>

          <section className="py-24 px-6 lg:px-40 bg-[#0c0c0c]">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl mx-auto">
                <div className="space-y-4">
                  {leftFaqs.map((faq, i) => (
                    <div key={i} className="border border-white/20">
                       <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className={`w-full flex items-center justify-between p-4 text-left transition-colors font-black text-xs uppercase tracking-tighter ${openFaq === i ? 'bg-[#00bcd4] text-white' : 'text-white'}`}>
                         <span>{faq.q}</span>
                         <i className={`fa-solid ${openFaq === i ? 'fa-minus' : 'fa-plus'} text-[10px]`}></i>
                       </button>
                       {openFaq === i && <div className="p-6 text-slate-400 text-[11px] italic leading-relaxed">{faq.a}</div>}
                    </div>
                  ))}
                </div>
                <div className="space-y-4">
                  {rightFaqs.map((faq, i) => (
                    <div key={i} className="border border-white/20">
                       <button onClick={() => setOpenFaqRight(openFaqRight === i ? null : i)} className={`w-full flex items-center justify-between p-4 text-left transition-colors font-black text-xs uppercase tracking-tighter ${openFaqRight === i ? 'bg-[#00bcd4] text-white' : 'text-white'}`}>
                         <span>{faq.q}</span>
                         <i className={`fa-solid ${openFaqRight === i ? 'fa-minus' : 'fa-plus'} text-[10px]`}></i>
                       </button>
                       {openFaqRight === i && <div className="p-6 text-slate-400 text-[11px] italic leading-relaxed">{faq.a}</div>}
                    </div>
                  ))}
                </div>
             </div>
          </section>
        </>
      ) : (
        <>
          {/* CONTACT PAGE CONTENT */}
          <section className="relative min-h-[400px] flex flex-col items-center justify-center text-center">
            <div className="absolute inset-0 z-0">
               <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" alt="Hero" className="w-full h-full object-cover opacity-30" />
               <div className="absolute inset-0 bg-black/70"></div>
            </div>
            <div className="relative z-10">
               <span className="text-xs font-bold text-white/70 uppercase tracking-widest block mb-4">We'll love to hear from you</span>
               <h1 className="text-5xl lg:text-7xl font-serif font-black mb-6">Contact Us</h1>
            </div>
          </section>

          <section className="py-24 px-6 lg:px-40 bg-[#0c0c0c]">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 max-w-7xl mx-auto">
                <div className="space-y-12">
                   <div>
                      <h2 className="text-2xl font-black uppercase mb-8 border-b border-white/10 pb-4">Contact us</h2>
                      <p className="text-slate-400 text-[13px] leading-relaxed mb-6 italic">Want to work with us or need more details about our platform, you can fill the form below...</p>
                   </div>
                   <div className="space-y-8">
                      <div className="flex items-center space-x-6">
                         <div className="w-14 h-14 rounded-full bg-cyan-600 flex items-center justify-center text-white text-xl shadow-lg"><i className="fa-solid fa-envelope"></i></div>
                         <div className="font-black text-sm uppercase">support@metacryptotrading.net</div>
                      </div>
                      <div className="flex items-center space-x-6">
                         <div className="w-14 h-14 rounded-full bg-cyan-600 flex items-center justify-center text-white text-xl shadow-lg"><i className="fa-solid fa-location-dot"></i></div>
                         <div className="font-black text-sm uppercase">No 346 New Road xxxxxdefaultxxxxx</div>
                      </div>
                   </div>
                </div>
                <div>
                   <h2 className="text-2xl font-black uppercase mb-12 border-b border-white/10 pb-4">Let's Talk To Us</h2>
                   <form className="space-y-8">
                      <div className="space-y-2">
                         <label className="text-[11px] font-black text-green-600 uppercase tracking-tighter">Your Name *</label>
                         <input type="text" className="w-full bg-white text-slate-800 py-3.5 px-4 outline-none" />
                      </div>
                      <div className="space-y-2">
                         <label className="text-[11px] font-black text-green-600 uppercase tracking-tighter">Email Address *</label>
                         <input type="email" className="w-full bg-white text-slate-800 py-3.5 px-4 outline-none" />
                      </div>
                      <div className="space-y-2">
                         <label className="text-[11px] font-black text-green-600 uppercase tracking-tighter">Message *</label>
                         <textarea rows={6} className="w-full bg-white text-slate-800 py-3.5 px-4 outline-none resize-none"></textarea>
                      </div>
                      <button className="bg-orange-500 text-white font-black text-[11px] px-8 py-3.5 uppercase tracking-widest flex items-center space-x-2 transition-all shadow-xl">
                         <span>Send Message</span>
                         <i className="fa-solid fa-paper-plane"></i>
                      </button>
                   </form>
                </div>
             </div>
          </section>
        </>
      )}

      {/* 14. FOOTER & CONTACT BAR */}
      <div className="px-6 lg:px-40 py-0 bg-black relative">
         {/* Floating Orange Info Bar */}
         <div className="bg-[#ff9800] p-8 md:p-10 rounded-sm grid grid-cols-1 md:grid-cols-3 gap-10 shadow-2xl relative overflow-hidden -mb-16 z-20">
            {/* Subtle Map Overlay */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <img src="https://metacryptotrading.net/img/world-map.png" alt="Map" className="w-full h-full object-cover" />
            </div>
            <div className="flex items-center space-x-6 relative z-10 text-white">
               <i className="fa-solid fa-phone text-3xl"></i>
               <div className="flex flex-col">
                 <span className="font-black text-sm">+14357306576</span>
                 <span className="text-xs text-white/80 font-bold">support@metacryptotrading.net</span>
               </div>
            </div>
            <div className="flex items-center space-x-6 relative z-10 text-white">
               <i className="fa-solid fa-clock text-3xl"></i>
               <div className="flex flex-col">
                 <span className="font-black text-sm uppercase">Mon - Sun 8.00 - 20.00</span>
                 <span className="text-xs text-white/80 font-bold">Sunday Closed</span>
               </div>
            </div>
            <div className="flex items-center space-x-6 relative z-10 text-white">
               <i className="fa-solid fa-location-dot text-3xl"></i>
               <div className="flex flex-col">
                 <span className="font-black text-sm uppercase leading-tight">No 346 New Road xxxxxdefaultxxxxx</span>
               </div>
            </div>
         </div>
      </div>

      <footer className="bg-[#111] pt-32 pb-12 px-6 lg:px-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-20">
          <div>
            <img src="/images/auth-logo.png" alt="Logo" className="h-10 mb-8 grayscale brightness-200" />
            <p className="text-slate-400 text-[13px] leading-relaxed max-w-lg font-medium">
              Metacryptotrading Trades LTD is a financial investment company established by a group of professional traders and investors, who have fore seen the future of International Capital Market. The company has direct contracts with professional traders and miners around the world that guarantees the best services and ensures profits are made and remitted to investors daily.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-10 border-b border-white/10 pb-4">Useful <span className="text-orange-500">Links</span></h3>
            <div className="grid grid-cols-2 gap-x-12 gap-y-6">
              <div className="flex flex-col space-y-4">
                <button onClick={() => handleNavClick('home')} className="text-slate-300 hover:text-orange-500 text-[13px] font-bold flex items-center transition-colors"><i className="fa-solid fa-chevron-right text-[8px] mr-3"></i>Home</button>
                <button onClick={() => setView('faq')} className="text-slate-300 hover:text-orange-500 text-[13px] font-bold flex items-center transition-colors"><i className="fa-solid fa-chevron-right text-[8px] mr-3"></i>FAQ</button>
                <Link to="/terms" className="text-slate-300 hover:text-orange-500 text-[13px] font-bold flex items-center transition-colors"><i className="fa-solid fa-chevron-right text-[8px] mr-3"></i>Terms & Conditions</Link>
                <Link to="/privacy" className="text-slate-300 hover:text-orange-500 text-[13px] font-bold flex items-center transition-colors"><i className="fa-solid fa-chevron-right text-[8px] mr-3"></i>Privacy Policy</Link>
                <Link to="/register" className="text-slate-300 hover:text-orange-500 text-[13px] font-bold flex items-center transition-colors"><i className="fa-solid fa-chevron-right text-[8px] mr-3"></i>Start Investing</Link>
              </div>
              <div className="flex flex-col space-y-4">
                <button onClick={() => handleNavClick('home', 'about')} className="text-slate-300 hover:text-orange-500 text-[13px] font-bold flex items-center transition-colors"><i className="fa-solid fa-chevron-right text-[8px] mr-3"></i>Company</button>
                <button onClick={() => setView('contact')} className="text-slate-300 hover:text-orange-500 text-[13px] font-bold flex items-center text-left transition-colors"><i className="fa-solid fa-chevron-right text-[8px] mr-3"></i>Contact Us</button>
                <Link to="/aml" className="text-slate-300 hover:text-orange-500 text-[13px] font-bold flex items-center transition-colors"><i className="fa-solid fa-chevron-right text-[8px] mr-3"></i>AML Policy</Link>
                <Link to="/payment-policy" className="text-slate-300 hover:text-orange-500 text-[13px] font-bold flex items-center transition-colors"><i className="fa-solid fa-chevron-right text-[8px] mr-3"></i>Payment Policy</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-white/5 pt-10 text-center flex flex-col md:flex-row justify-between items-center gap-6">
           <p className="text-slate-500 text-[11px] font-bold uppercase tracking-widest">Copyright © 2022 Metacryptotrading Trades. All rights reserved.</p>
           <div className="bg-white/5 border border-white/10 rounded px-4 py-2 flex items-center space-x-3">
              <span className="text-slate-500 text-[11px] font-bold">Select Language</span>
              <select className="bg-transparent text-white text-[11px] outline-none cursor-pointer"><option>English</option><option>Spanish</option></select>
           </div>
        </div>
      </footer>

      {/* Floating Widgets */}
      {showEarning && (
        <div className="fixed bottom-32 left-6 z-[150] animate-in slide-in-from-left duration-500">
          <div className="bg-[#3b82f6]/95 border border-orange-500 p-4 rounded-sm flex items-center space-x-4 shadow-2xl min-w-[320px]">
            <div className="text-white text-xl"><i className="fa-solid fa-wallet"></i></div>
            <div className="flex flex-col">
              <span className="text-white font-black text-[10px] uppercase">Earning</span>
              <span className="text-white text-[11px] font-bold italic leading-tight">{currentEarning.name} from {currentEarning.country} has just Earned <span className="text-orange-400 font-black">${currentEarning.amount}</span></span>
            </div>
          </div>
        </div>
      )}
      <div className="fixed bottom-6 left-6 z-[100]"><button className="bg-[#bdcc00] hover:bg-[#a8b800] text-slate-800 px-6 py-3 rounded-full font-bold shadow-xl flex items-center space-x-2 transition-transform hover:scale-105 active:scale-95"><i className="fa-brands fa-whatsapp text-xl"></i><span>WhatsApp Us</span></button></div>

      {/* Back to Top */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 z-[100] bg-slate-800/80 p-3 rounded hover:bg-orange-500 transition-colors shadow-xl"
      >
        <i className="fa-solid fa-chevron-up text-white"></i>
      </button>

      <style>{`
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-marquee { animation: marquee 30s linear infinite; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #3b82f6;
          border-radius: 10px;
        }
      `}</style>
      </div> {/* Close lg:pt-16 wrapper */}
    </div>
  );
};

export default Home;