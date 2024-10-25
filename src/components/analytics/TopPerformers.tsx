import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

const topItems = [
  { 
    name: 'Truffle Mushroom Risotto',
    revenue: 2499.00,
    orders: 100,
    trend: 'up',
    change: '+15%'
  },
  { 
    name: 'Seared Tuna Tartare',
    revenue: 1899.00,
    orders: 95,
    trend: 'up',
    change: '+12%'
  },
  { 
    name: 'Chocolate Lava Cake',
    revenue: 1299.00,
    orders: 85,
    trend: 'down',
    change: '-3%'
  }
];

export const TopPerformers = () => (
  <div className="bg-white rounded-lg shadow-sm p-6">
    <h2 className="text-lg font-semibold mb-4">Top Performing Items</h2>
    <div className="space-y-4">
      {topItems.map((item) => (
        <div key={item.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <div>
            <h3 className="font-medium">{item.name}</h3>
            <div className="flex items-center gap-4 mt-1 text-sm text-gray-600">
              <span>${item.revenue.toLocaleString()} revenue</span>
              <span>{item.orders} orders</span>
            </div>
          </div>
          <div className={`flex items-center gap-1 ${
            item.trend === 'up' ? 'text-green-600' : 'text-red-600'
          }`}>
            {item.trend === 'up' ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
            <span className="font-medium">{item.change}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);