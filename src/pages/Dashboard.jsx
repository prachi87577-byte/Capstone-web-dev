// src/pages/Dashboard.jsx
import StatCard from '../components/dashboard/StatCard';
import OverviewCharts from '../components/dashboard/OverviewCharts';
import { DollarSign, Users, ShoppingCart, TrendingUp } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Dashboard Overview</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">Welcome back</p>
      </div>

      {/* Statistics Cards */}
      <div className="grid bg-gray-100 dark:bg-gray-800 gap-6 p-4 rounded-lg md:grid-cols-2 lg:grid-cols-4">
        <StatCard 
          title="Total Revenue" 
          value="₹8,45,290" 
          change={12.5} 
          icon={DollarSign} 
          color="emerald" 
        />
        <StatCard 
          title="Total Users" 
          value="12,458" 
          change={8.2} 
          icon={Users} 
          color="blue" 
        />
        <StatCard 
          title="Total Orders" 
          value="3,284" 
          change={-3.1} 
          icon={ShoppingCart} 
          color="violet" 
        />
        <StatCard 
          title="Growth Rate" 
          value="24.8%" 
          change={15.4} 
          icon={TrendingUp} 
          color="amber" 
        />
      </div>

      {/* Charts */}
      <OverviewCharts />
    </div>
  );
}