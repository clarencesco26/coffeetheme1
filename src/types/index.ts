// This folder contains TypeScript type definitions and interfaces
// Organize your types by domain: user types, product types, API types, etc.

// Example: Menu item type
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'coffee' | 'tea' | 'pastry' | 'snack';
  image?: string;
  available: boolean;
}

// Example: User type
export interface User {
  id: string;
  name: string;
  email: string;
  preferences?: {
    favoriteItems: string[];
    dietaryRestrictions: string[];
  };
}

// Example: Order type
export interface Order {
  id: string;
  userId: string;
  items: OrderItem[];
  total: number;
  status: 'pending' | 'preparing' | 'ready' | 'completed';
  createdAt: Date;
}

export interface OrderItem {
  menuItemId: string;
  quantity: number;
  customizations?: string[];
}
