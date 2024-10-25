import React from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, Users, Star, DollarSign, Clock, Utensils } from 'lucide-react';
import { menuItems } from '../data/menu';
import { StatsCard } from '../components/analytics/StatsCard';
import { RushHoursChart } from '../components/analytics/RushHoursChart';
import { TopPerformers } from '../components/analytics/TopPerformers';

// Mock analytics data
const viewsData = [
  { name: 'Mon', views: 1200 },
  { name: 'Tue', views: 1800 },
  { name: 'Wed', views: 1600 },
  { name: 'Thu', views: 2100 },
  { name: 'Fri', views: 2400 },
  { name: 'Sat', views: 2800 },
  { name: 'Sun', views: 2200 },
];

const popularItems = menuItems
  .map(item => ({
    name: item.name,
    views: Math.floor(Math.random() * 1000) + 500,
    orders: Math.floor(Math.random() * 200) + 100,
  }))
  .sort((a, b) => b.orders - a.orders)
  .slice(0, 5);

function Analytics() {
  const stats = [
    { title: 'Total Views', value: '15.2K', icon: Users, change: '+12.3%' },
    { title: 'Avg. Rating', value: '4.8', icon: Star, change: '+0.2' },
    { title: 'Total Orders', value: '2.4K', icon: TrendingUp, change: '+18.5%' },
    { title: 'Revenue', value: '$32.5K', icon: DollarSign, change: '+22.4%' },
    { title: 'Avg. Service Time', value: '24 min', icon: Clock, change: '-8.5%' },
    { title: 'Menu Items', value: '42', icon: Utensils, change: '+4 new' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h1>
        <select className="bg-white border border-gray-300 rounded-md px-3 py-1.5 text-sm">
          <option>Last 7 days</option>
          <option>Last 30 days</option>
          <option>Last 90 days</option>
        </select>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {stats.map((stat) => (
          <StatsCard
            key={stat.title}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
            change={stat.change}
            changeColor={stat.title === 'Avg. Service Time' ? 'text-green-600' : undefined}
          />
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <RushHoursChart />
        <TopPerformers />
      </div>

      {/* Additional Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Views Over Time */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Views Over Time</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={viewsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="views" stroke="#4f46e5" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Popular Items */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Most Popular Items</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={popularItems}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="views" fill="#4f46e5" />
                <Bar dataKey="orders" fill="#60a5fa" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analytics;