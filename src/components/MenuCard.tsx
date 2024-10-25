import React from 'react';
import { motion } from 'framer-motion';
import { Star, Award, Flame } from 'lucide-react';
import { MenuItem } from '../types';

interface MenuCardProps {
  item: MenuItem;
}

export const MenuCard: React.FC<MenuCardProps> = ({ item }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
        {(item.isSpecial || item.isFamous) && (
          <div className="absolute top-4 right-4">
            {item.isSpecial && (
              <div className="bg-red-500 text-white px-3 py-1 rounded-full flex items-center gap-1">
                <Flame size={16} />
                <span className="text-sm font-medium">Special</span>
              </div>
            )}
            {item.isFamous && (
              <div className="bg-yellow-500 text-white px-3 py-1 rounded-full flex items-center gap-1 mt-2">
                <Award size={16} />
                <span className="text-sm font-medium">Famous</span>
              </div>
            )}
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
        <p className="text-gray-600 mt-2">{item.description}</p>
        <div className="mt-4 flex justify-between items-center">
          <div className="flex items-center gap-1">
            <Star className="text-yellow-400 fill-current" size={18} />
            <span className="font-medium">{item.rating}</span>
            <span className="text-gray-500 text-sm">({item.reviews})</span>
          </div>
          <span className="text-xl font-bold text-gray-900">${item.price}</span>
        </div>
      </div>
    </motion.div>
  );
};