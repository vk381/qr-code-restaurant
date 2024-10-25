import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { QRCodeSVG } from 'qrcode.react';
import { MenuCard } from '../components/MenuCard';
import { CategoryBar } from '../components/CategoryBar';
import { categories, menuItems } from '../data/menu';
import { Utensils } from 'lucide-react';

function Menu() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredItems = selectedCategory === 'all'
    ? menuItems
    : menuItems.filter(item => item.category === selectedCategory);

  return (
    <>
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Utensils className="h-8 w-8 text-indigo-600" />
              <h1 className="text-2xl font-bold text-gray-900">Gourmet QR Menu</h1>
            </div>
            <QRCodeSVG
              value={window.location.href}
              size={64}
              className="border-2 border-gray-200 rounded-lg p-1"
            />
          </div>
        </div>
      </header>

      {/* Category Filter */}
      <CategoryBar
        categories={[{ id: 'all', name: 'All Items', icon: 'menu' }, ...categories]}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      {/* Menu Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredItems.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </motion.div>
        </AnimatePresence>
      </main>
    </>
  );
}

export default Menu;