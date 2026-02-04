
import { InvestmentPlan, Transaction } from './types';

export const INVESTMENT_PLANS: InvestmentPlan[] = [
  {
    id: 'starter',
    name: 'Starter Plan',
    minAmount: 100,
    maxAmount: 4999,
    durationDays: 7,
    roiPercent: 15,
    referralPercent: 5,
    color: 'blue'
  },
  {
    id: 'silver',
    name: 'Silver Plan',
    minAmount: 5000,
    maxAmount: 19999,
    durationDays: 14,
    roiPercent: 35,
    referralPercent: 7,
    color: 'gray'
  },
  {
    id: 'gold',
    name: 'Gold Plan',
    minAmount: 20000,
    maxAmount: 49999,
    durationDays: 30,
    roiPercent: 75,
    referralPercent: 10,
    color: 'amber'
  },
  {
    id: 'platinum',
    name: 'Platinum Plan',
    minAmount: 50000,
    maxAmount: 1000000,
    durationDays: 60,
    roiPercent: 150,
    referralPercent: 15,
    color: 'emerald'
  }
];

export const MOCK_TRANSACTIONS: Transaction[] = [
  { id: '1', type: 'Deposit', amount: 1500, user: 'John D.', status: 'Completed', date: '2023-10-25', coin: 'BTC' },
  { id: '2', type: 'Withdrawal', amount: 800, user: 'Sarah M.', status: 'Completed', date: '2023-10-24', coin: 'ETH' },
  { id: '3', type: 'Deposit', amount: 5000, user: 'Alex W.', status: 'Completed', date: '2023-10-24', coin: 'USDT' },
  { id: '4', type: 'Withdrawal', amount: 1200, user: 'Emma L.', status: 'Pending', date: '2023-10-23', coin: 'BNB' },
  { id: '5', type: 'Deposit', amount: 300, user: 'Robert K.', status: 'Completed', date: '2023-10-23', coin: 'SOL' }
];

export const COUNTRIES = [
  "United States", "United Kingdom", "Canada", "Australia", "Germany", "France", "Japan", "Brazil", "India", "Nigeria", "South Africa", "United Arab Emirates"
];

export const CURRENCIES = ["USD", "EUR", "GBP", "BTC", "ETH", "USDT"];
