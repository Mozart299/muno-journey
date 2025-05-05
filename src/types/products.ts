// types/product.ts

export interface ProductType {
    id: string;
    name: string;
    price: number;
    currency: string;
    image?: string;
    category: string;
    forWhom?: string[];
    description?: string;
    inStock?: boolean;
    occasions?: string[];
    recipients?: string[];
    features?: string[];
  }
  
  export interface CategoryType {
    id: string;
    name: string;
    slug: string;
    count: number;
    image?: string;
  }
  
  export interface CartItemType {
    id: string;
    productId: string;
    name: string;
    price: number;
    quantity: number;
    image?: string;
  }
  
  export interface OrderType {
    id: string;
    items: CartItemType[];
    subtotal: number;
    shipping: number;
    discount: number;
    total: number;
    status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
    createdAt: string;
    customerInfo: {
      name: string;
      email: string;
      phone?: string;
      address?: string;
    };
    paymentMethod?: string;
    deliveryMethod: 'delivery' | 'pickup';
  }