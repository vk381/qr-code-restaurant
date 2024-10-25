import React from 'react';
import { motion } from 'framer-motion';
import { Menu, Soup, Utensils, Cake, Wine } from 'lucide-react';
import { Category } from '../types';

interface CategoryBarProps {
  categories: Category[];
  selectedCategory: string;
  onSelectCategory: (id: string) => void;
}

const iconMap = {
  menu: Menu,
  soup: Soup,
  utensils: Utensils,
  cake: Cake,
  wine: Wine
};

export const CategoryBar: React.FC<CategoryBarProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <div className="flex gap-4 overflow-x-auto py-4 px-6 bg-white shadow-sm">
      {categories.map((category) => {
        const Icon = iconMap[category.icon as keyof typeof iconMap];
        return (
          <motion.button
            key={category.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onSelectCategory(category.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
              selectedCategory === category.id
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {Icon && <Icon size={20} />}
            <span className="font-medium">{category.name}</span>
          </motion.button>
        );
      })}
    </div>
  );
};