// components/FeaturedProduct.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye, Heart, ShoppingCart } from "lucide-react";
import { ProductType } from "@/types/products";

interface FeaturedProductProps {
  product: ProductType;
}

export default function FeaturedProduct({ product }: FeaturedProductProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  
  const toggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
  };
  
  return (
    <Card className="group overflow-hidden border border-gray-200 hover:border-pink-200 transition-all duration-300">
      <Link href={`/products/${product.id}`}>
        <div className="relative aspect-square bg-gray-100">
          <img
            src={product.image || "/placeholder-product.jpg"}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          
          {/* Wishlist button */}
          <Button
            variant="ghost"
            size="icon"
            className={`absolute top-2 right-2 bg-white rounded-full h-8 w-8 
              shadow-sm ${isWishlisted ? 'text-pink-500' : 'text-gray-400'} hover:text-pink-500`}
            onClick={toggleWishlist}
          >
            <Heart className="h-4 w-4" fill={isWishlisted ? "currentColor" : "none"} />
          </Button>
          
          {/* Quick actions - visible on hover */}
          <div className="absolute bottom-0 left-0 right-0 flex flex-col gap-2 p-3 
            bg-gradient-to-t from-black/70 to-transparent opacity-0 translate-y-4 
            group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                size="sm" 
                className="flex-1 bg-white/90 hover:bg-white"
              >
                <Eye className="mr-1 h-3 w-3" />
                Quick View
              </Button>
              <Button 
                size="sm" 
                className="flex-1 bg-pink-500 hover:bg-pink-600"
              >
                <ShoppingCart className="mr-1 h-3 w-3" />
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </Link>
      
      <CardContent className="p-4">
        <div className="space-y-2">
          <div className="flex justify-between">
            <div>
              <Link 
                href={`/products/category/${product.category}`}
                className="text-xs uppercase text-gray-500 tracking-wider hover:text-pink-500"
                onClick={(e) => e.stopPropagation()}
              >
                {product.category.replace('-', ' ')}
              </Link>
              <Link href={`/products/${product.id}`}>
                <h3 className="font-medium line-clamp-1 mt-1 hover:text-pink-500">
                  {product.name}
                </h3>
              </Link>
            </div>
          </div>
          
          <div className="flex justify-between items-center">
            <p className="font-semibold text-lg">
              {product.currency} {product.price.toLocaleString()}
            </p>
            {product.inStock === false && (
              <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
                Out of Stock
              </Badge>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}