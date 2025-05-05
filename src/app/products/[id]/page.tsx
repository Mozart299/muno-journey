// app/products/[id]/page.tsx
"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Heart, ShoppingCart, Share2, ChevronLeft, ChevronRight, Minus, Plus } from "lucide-react";

import FeaturedProduct from "@/components/FeaturedProduct";
import { ProductType } from "@/types/products";

const mockProduct: ProductType = {
  id: "1",
  name: "Personalized Gift Box",
  price: 85000,
  currency: "UGX",
  category: "gift-boxes",
  description: "This beautiful handcrafted gift box contains a carefully curated selection of premium items. Perfect for birthdays, anniversaries, or any special occasion. Each item is thoughtfully selected to create a memorable gifting experience.",
  image: "/products/gift-box-1.jpg",
  inStock: true,
  occasions: ["birthday", "anniversary", "thank-you"],
  recipients: ["for-her", "for-friends"]
};

// Mock related products
const relatedProducts: ProductType[] = [
  {
    id: "2",
    name: "Artisan Candle Set",
    price: 65000,
    currency: "UGX",
    image: "/products/candle-set-1.jpg",
    category: "home-decor",
  },
  {
    id: "3",
    name: "Handcrafted Journal",
    price: 45000,
    currency: "UGX",
    image: "/products/journal-1.jpg",
    category: "stationery",
  },
  {
    id: "4",
    name: "Premium Diffuser",
    price: 75000,
    currency: "UGX",
    image: "/products/diffuser-1.jpg",
    category: "home-decor",
  },
];

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const productId = params.id as string;
  
  const [product, setProduct] = useState<ProductType | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  
  useEffect(() => {
    // Simulate API fetch
    setTimeout(() => {
      // In a real app, you'd fetch product data based on productId
      setProduct(mockProduct);
    }, 500);
  }, [productId]);
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center">
          <div className="h-12 w-12 border-4 border-pink-200 border-t-pink-500 rounded-full animate-spin"></div>
          <p className="mt-4 text-gray-600">Loading product...</p>
        </div>
      </div>
    );
  }
  
  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };
  
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };
  
  const addToCart = () => {
    // In a real app, this would add the product to cart
    console.log(`Adding ${quantity} of ${product.name} to cart`);
    // You could redirect to cart or show a toast notification
  };
  
  // Product images (in a real app, these would come from the product data)
  const productImages = [
    product.image,
    "/products/gift-box-2.jpg",
    "/products/gift-box-3.jpg",
    "/products/gift-box-4.jpg",
  ];
  
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <div className="mb-6">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/products">Products</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href={`/products?category=${product.category}`}>
                  {product.category.replace('-', ' ')}
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink>{product.name}</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        
        {/* Product Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden relative">
              <img
                src={productImages[activeImage]}
                alt={product.name}
                className="h-full w-full object-cover"
              />
              
              {/* Image navigation arrows */}
              <div className="absolute inset-0 flex items-center justify-between px-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-10 w-10 rounded-full bg-white/80 text-gray-800"
                  onClick={() => setActiveImage((prev) => (prev === 0 ? productImages.length - 1 : prev - 1))}
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-10 w-10 rounded-full bg-white/80 text-gray-800"
                  onClick={() => setActiveImage((prev) => (prev === productImages.length - 1 ? 0 : prev + 1))}
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </div>
            </div>
            
            {/* Thumbnail images */}
            <div className="grid grid-cols-4 gap-2">
              {productImages.map((image, index) => (
                <div
                  key={index}
                  className={`aspect-square bg-gray-100 rounded-md overflow-hidden cursor-pointer ${
                    index === activeImage ? "ring-2 ring-pink-500" : ""
                  }`}
                  onClick={() => setActiveImage(index)}
                >
                  <img
                    src={image}
                    alt={`${product.name} thumbnail ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold">{product.name}</h1>
              <p className="text-2xl font-semibold mt-2">
                {product.currency} {product.price.toLocaleString()}
              </p>
            </div>
            
            {/* Product badges */}
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
              {product.inStock && (
                <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                  In Stock
                </Badge>
              )}
            </div>
            
            <p className="text-gray-700">{product.description}</p>
            
            <Separator />
            
            {/* Quantity selector */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
              <div className="flex items-center w-36">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-10 w-10 rounded-l-md"
                  onClick={decrementQuantity}
                  disabled={quantity <= 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <div className="h-10 flex-1 flex items-center justify-center border-y">
                  {quantity}
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-10 w-10 rounded-r-md"
                  onClick={incrementQuantity}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            {/* Action buttons */}
            <div className="flex gap-4">
              <Button
                className="flex-1 bg-pink-500 hover:bg-pink-600"
                onClick={addToCart}
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
              <Button
                variant="outline"
                size="icon"
                className={isWishlisted ? "text-pink-500" : ""}
                onClick={toggleWishlist}
              >
                <Heart
                  className="h-5 w-5"
                  fill={isWishlisted ? "currentColor" : "none"}
                />
              </Button>
              <Button variant="outline" size="icon">
                <Share2 className="h-5 w-5" />
              </Button>
            </div>
            
            {/* Product specs */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium mb-2">Product Details</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between">
                  <span className="text-gray-500">Material</span>
                  <span>Premium cardboard, fabric lining</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-500">Dimensions</span>
                  <span>30cm x 20cm x 10cm</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-500">Weight</span>
                  <span>1.2 kg</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-500">Handcrafted</span>
                  <span>Yes</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-500">Customizable</span>
                  <span>Yes</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Product Tabs */}
        <div className="mb-16">
          <Tabs defaultValue="description">
            <TabsList className="w-full mb-6">
              <TabsTrigger value="description" className="flex-1">Description</TabsTrigger>
              <TabsTrigger value="whats-included" className="flex-1">What's Included</TabsTrigger>
              <TabsTrigger value="reviews" className="flex-1">Reviews</TabsTrigger>
              <TabsTrigger value="shipping" className="flex-1">Shipping & Returns</TabsTrigger>
            </TabsList>
            
            <TabsContent value="description" className="p-4">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">About this gift box</h3>
                <p>
                  This beautiful handcrafted gift box contains a carefully curated selection 
                  of premium items. Perfect for birthdays, anniversaries, or any special occasion. 
                  Each item is thoughtfully selected to create a memorable gifting experience.
                </p>
                <p>
                  Our gift boxes are designed with care and attention to detail. The box itself 
                  is made from premium materials and can be reused or repurposed after the 
                  gifting moment. We focus on sustainability and quality in every aspect of 
                  our products.
                </p>
                <p>
                  Whether you're celebrating a milestone or simply showing someone you care, 
                  our gift boxes are the perfect choice for meaningful, thoughtful giving.
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="whats-included" className="p-4">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Box Contents</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Handcrafted scented candle (100g)</li>
                  <li>Premium journal with lined pages</li>
                  <li>Set of 2 artisan chocolates</li>
                  <li>Handmade soap with essential oils</li>
                  <li>Inspirational quote card</li>
                  <li>Personalized gift message (optional)</li>
                </ul>
              </div>
            </TabsContent>
            
            <TabsContent value="reviews" className="p-4">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium">Customer Reviews</h3>
                  <Button>Write a Review</Button>
                </div>
                
                <div className="space-y-4">
                  {/* Sample reviews */}
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex justify-between mb-2">
                        <div>
                          <h4 className="font-medium">Sarah K.</h4>
                          <p className="text-gray-500 text-sm">Purchased 2 weeks ago</p>
                        </div>
                        <div className="flex">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <svg
                              key={i}
                              className="w-5 h-5 text-yellow-400 fill-current"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                      <p>
                        The gift box was beautifully wrapped and the items inside were perfect. 
                        My friend loved it! The quality of every item was exceptional.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex justify-between mb-2">
                        <div>
                          <h4 className="font-medium">David M.</h4>
                          <p className="text-gray-500 text-sm">Purchased 1 month ago</p>
                        </div>
                        <div className="flex">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <svg
                              key={i}
                              className={`w-5 h-5 ${
                                i < 4 ? "text-yellow-400" : "text-gray-300"
                              } fill-current`}
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                      <p>
                        I was looking for a gift for my wife's birthday and this was perfect. 
                        The presentation was great and the items were high quality. Would recommend!
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="shipping" className="p-4">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Shipping Information</h3>
                <p>
                  We offer free delivery within Kampala for orders over UGX 150,000. 
                  For other areas, shipping costs are calculated at checkout based on 
                  your location.
                </p>
                <p>
                  Standard delivery usually takes 1-3 business days within Kampala, 
                  and 3-5 business days for other locations in Uganda.
                </p>
                
                <h3 className="text-lg font-medium mt-6">Returns Policy</h3>
                <p>
                  We want you to be completely satisfied with your purchase. If you're 
                  not happy with your order, you can return it within 7 days of delivery 
                  for a full refund or exchange.
                </p>
                <p>
                  Please note that personalized items cannot be returned unless damaged 
                  or defective.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        {/* Related Products */}
        <div>
          <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {relatedProducts.map(product => (
              <FeaturedProduct key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}