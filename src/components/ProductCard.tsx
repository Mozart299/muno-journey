// components/ProductCard.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Eye, Heart, ShoppingCart } from "lucide-react";
import { ProductType } from "@/types/products";

interface ProductCardProps {
  product: ProductType;
  viewMode: "grid" | "list";
}

export default function ProductCard({ product, viewMode }: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  
  const toggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
  };
  
  if (viewMode === "list") {
    return (
      <Card className="overflow-hidden border border-gray-200 hover:border-pink-200 transition-all duration-300">
        <Link href={`/products/${product.id}`} className="flex h-full">
          <div className="w-1/3 bg-gray-100">
            <img
              src={product.image || "/placeholder-product.jpg"}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-between flex-1 p-4">
            <div className="space-y-3">
              <div className="flex justify-between">
                <h3 className="font-medium text-lg">{product.name}</h3>
                <Button
                  variant="ghost"
                  size="icon"
                  className={`${isWishlisted ? 'text-pink-500' : 'text-gray-400'} hover:text-pink-500`}
                  onClick={toggleWishlist}
                >
                  <Heart className="h-5 w-5" fill={isWishlisted ? "currentColor" : "none"} />
                </Button>
              </div>
              <p className="text-lg font-semibold">
                {product.currency} {product.price.toLocaleString()}
              </p>
              <p className="text-gray-500 text-sm">{product.description}</p>
              
              {/* Product tags */}
              <div className="flex flex-wrap gap-2">
                {product.occasions?.map(occasion => (
                  <Badge key={occasion} variant="outline" className="bg-gray-50">
                    {occasion.replace('-', ' ')}
                  </Badge>
                ))}
                {product.recipients?.map(recipient => (
                  <Badge key={recipient} variant="outline" className="bg-gray-50">
                    {recipient.replace('-', ' ')}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div className="flex gap-2 mt-4">
              <Button variant="outline" size="sm" className="flex-1">
                <Eye className="mr-2 h-4 w-4" />
                Quick View
              </Button>
              <Button className="flex-1 bg-pink-500 hover:bg-pink-600">
                <ShoppingCart className="mr-2 h-4 w-4" />
                Add to Cart
              </Button>
            </div>
          </div>
        </Link>
      </Card>
    );
  }
  
  return (
    <Card className="overflow-hidden border border-gray-200 hover:border-pink-200 transition-all duration-300">
      <Link href={`/products/${product.id}`}>
        <div className="relative aspect-square bg-gray-100">
          <img
            src={product.image || "/placeholder-product.jpg"}
            alt={product.name}
            className="h-full w-full object-cover"
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
          
          {/* Quick shop button - visible on hover */}
          <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 
            py-2 px-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300 hidden group-hover:block">
            <Button className="w-full bg-pink-500 hover:bg-pink-600 text-sm py-1 h-auto">
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add to Cart
            </Button>
          </div>
        </div>
        
        <CardContent className="p-4">
          <div className="space-y-2">
            <h3 className="font-medium">{product.name}</h3>
            <p className="text-lg font-semibold">
              {product.currency} {product.price.toLocaleString()}
            </p>
            
            {/* Product status and category */}
            <div className="flex flex-wrap gap-2">
              {!product.inStock && (
                <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
                  Out of Stock
                </Badge>
              )}
              <Badge variant="outline" className="bg-gray-50">
                {product.category.replace('-', ' ')}
              </Badge>
            </div>
          </div>
        </CardContent>
        
        <CardFooter className="p-4 pt-0">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="sm" className="w-full">
                  <Eye className="mr-2 h-4 w-4" />
                  Quick View
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Preview product details</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </CardFooter>
      </Link>
    </Card>
  );
}