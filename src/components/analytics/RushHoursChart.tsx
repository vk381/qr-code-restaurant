import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const rushHoursData = [
  { time: '10:00', customers: 15 },
  { time: '11:00', customers: 25 },
  { time: '12:00', customers: 80 },
  { time: '13:00', customers: 95 },
  { time: '14:00', customers: 65 },
  { time: '15:00', customers: 35 },
  { time: '16:00', customers: 30 },
  { time: '17:00', customers: 45 },
  { time: '18:00', customers: 85 },
  { time: '19:00', customers: 90 },
  { time: '20:00', customers: 75 },
  { time: '21:00', customers: 40 },
  { time: '22:00', customers: 20 },
];

export const RushHoursChart = () => (
  <div className="bg-white rounded-lg shadow-sm p-6">
    <h2 className="text-lg font-semibold mb-4">Rush Hours Analysis</h2>
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={rushHoursData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Area 
            type="monotone" 
            dataKey="customers" 
            stroke="#4f46e5" 
            fill="#818cf8" 
            fillOpacity={0.3}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
    <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
      <div className="bg-indigo-50 p-3 rounded-lg">
        <p className="font-semibold text-indigo-700">Peak Hours</p>
        <p className="text-gray-600">12:00 - 14:00, 18:00 - 20:00</p>
      </div>
      <div className="bg-green-50 p-3 rounded-lg">
        <p className="font-semibold text-green-700">Suggested Staff</p>
        <p className="text-gray-600">Peak: 5-6 servers, Off-peak: 2-3 servers</p>
      </div>
    </div>
  </div>
);