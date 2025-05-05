// components/CheckoutSummary.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { ChevronDown, ChevronUp } from "lucide-react";

// Mock cart items
const cartItems = [
  {
    id: "1",
    name: "Personalized Gift Box",
    price: 85000,
    quantity: 1,
    image: "/products/gift-box-1.jpg",
  },
  {
    id: "2",
    name: "Artisan Candle Set",
    price: 40000,
    quantity: 1,
    image: "/products/candle-set-1.jpg",
  },
];

export default function CheckoutSummary() {
  const [isOpen, setIsOpen] = useState(false);
  const [promoCode, setPromoCode] = useState("");
  const [isPromoApplied, setIsPromoApplied] = useState(false);
  
  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 15000; // Example shipping cost
  const discount = isPromoApplied ? Math.round(subtotal * 0.1) : 0; // 10% discount example
  const total = subtotal + shipping - discount;
  
  const applyPromoCode = () => {
    if (promoCode.toLowerCase() === "welcome10") {
      setIsPromoApplied(true);
    } else {
      alert("Invalid promo code");
    }
  };
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-medium">Order summary</h2>
        <Button 
          variant="ghost" 
          size="icon" 
          className="lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <ChevronUp /> : <ChevronDown />}
        </Button>
      </div>
      
      <div className={`space-y-6 ${isOpen || 'lg:block hidden'}`}>
        {/* Order items */}
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex gap-4">
              <div className="w-16 h-16 bg-gray-100 rounded-md flex-shrink-0 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-grow">
                <div className="flex justify-between">
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="font-semibold">UGX {item.price.toLocaleString()}</p>
                </div>
                <p className="text-gray-500 text-sm">Qty: {item.quantity}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Promo code */}
        <div>
          <div className="flex gap-2">
            <Input 
              placeholder="Gift card or discount code" 
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              disabled={isPromoApplied}
            />
            <Button 
              variant="outline" 
              onClick={applyPromoCode}
              disabled={!promoCode || isPromoApplied}
            >
              Apply
            </Button>
          </div>
          
          {isPromoApplied && (
            <p className="text-green-600 text-sm mt-2">
              Promo code applied successfully!
            </p>
          )}
        </div>
        
        {/* Order calculations */}
        <div className="space-y-3">
          <div className="flex justify-between text-gray-600">
            <span>Subtotal</span>
            <span>UGX {subtotal.toLocaleString()}</span>
          </div>
          
          <div className="flex justify-between text-gray-600">
            <span>Shipping</span>
            <span>UGX {shipping.toLocaleString()}</span>
          </div>
          
          {isPromoApplied && (
            <div className="flex justify-between text-green-600">
              <span>Discount (10%)</span>
              <span>- UGX {discount.toLocaleString()}</span>
            </div>
          )}
          
          <Separator />
          
          <div className="flex justify-between font-semibold text-lg">
            <span>Total</span>
            <span>UGX {total.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}