import { MenuItem, Category } from '../types';

export const categories: Category[] = [
  { id: 'starters', name: 'Starters', icon: 'soup' },
  { id: 'mains', name: 'Main Course', icon: 'utensils' },
  { id: 'desserts', name: 'Desserts', icon: 'cake' },
  { id: 'drinks', name: 'Drinks', icon: 'wine' }
];

export const menuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Truffle Mushroom Risotto',
    description: 'Creamy Arborio rice with wild mushrooms and truffle oil',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1633964913295-ceb43826a07f',
    category: 'mains',
    rating: 4.8,
    reviews: 127,
    isFamous: true
  },
  {
    id: '2',
    name: 'Seared Tuna Tartare',
    description: 'Fresh tuna with avocado, sesame seeds, and wasabi aioli',
    price: 18.99,
    image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351',
    category: 'starters',
    rating: 4.9,
    reviews: 84,
    isSpecial: true
  },
  {
    id: '3',
    name: 'Chocolate Lava Cake',
    description: 'Warm chocolate cake with molten center and vanilla ice cream',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c',
    category: 'desserts',
    rating: 4.7,
    reviews: 156,
    isFamous: true
  }
];