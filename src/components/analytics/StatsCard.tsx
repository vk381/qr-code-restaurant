import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  change: string;
  changeColor?: string;
}

export const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  icon: Icon,
  change,
  changeColor = 'text-green-600'
}) => (
  <div className="bg-white rounded-lg shadow-sm p-6">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-600">{title}</p>
        <p className="text-2xl font-bold mt-1">{value}</p>
      </div>
      <div className="bg-indigo-50 p-3 rounded-lg">
        <Icon className="w-6 h-6 text-indigo-600" />
      </div>
    </div>
    <div className="mt-2">
      <span className={`${changeColor} text-sm font-medium`}>{change}</span>
      <span className="text-gray-600 text-sm"> vs last week</span>
    </div>
  </div>
);