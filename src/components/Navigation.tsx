import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, BarChart2 } from 'lucide-react';

const Navigation: React.FC = () => {
  const location = useLocation();

  const links = [
    { to: '/', icon: Menu, label: 'Menu' },
    { to: '/analytics', icon: BarChart2, label: 'Analytics' },
  ];

  return (
    <nav className="bg-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold">QR Menu System</span>
          </div>
          <div className="flex space-x-4">
            {links.map(({ to, icon: Icon, label }) => (
              <Link
                key={to}
                to={to}
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                  location.pathname === to
                    ? 'bg-indigo-700'
                    : 'hover:bg-indigo-500'
                }`}
              >
                <Icon className="w-5 h-5 mr-2" />
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;