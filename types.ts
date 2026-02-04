
export interface User {
  id: string;
  name: string;
  email: string;
  balance: number;
  totalProfit: number;
  activeInvestments: number;
  country?: string;
  currency?: string;
  phone?: string;
}

export interface InvestmentPlan {
  id: string;
  name: string;
  minAmount: number;
  maxAmount: number;
  durationDays: number;
  roiPercent: number;
  referralPercent: number;
  color: string;
}

export interface Transaction {
  id: string;
  type: 'Deposit' | 'Withdrawal';
  amount: number;
  user: string;
  status: 'Pending' | 'Completed' | 'Rejected';
  date: string;
  coin: string;
}
