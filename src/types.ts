export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  isSpecial?: boolean;
  isFamous?: boolean;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}