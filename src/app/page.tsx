"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Gift, Heart, Search, ShoppingCart } from "lucide-react";
import CategoryCard from "@/components/CategoryCard";
import FeaturedProduct from "@/components/FeaturedProduct";
import TestimonialCard from "@/components/TestimonialCard";
import GiftFinderBanner from "@/components/GifitFinderBanner";
import { ProductType } from "@/types/products";

export default function Home() {
  const [featuredProducts, setFeaturedProducts] = useState<ProductType[]>([]);
  const [newArrivals, setNewArrivals] = useState<ProductType[]>([]);
  
  // Mock data - would be fetched from API
  useEffect(() => {
    // Simulate API fetch
    setFeaturedProducts([
      {
        id: "1",
        name: "Personalized Gift Box",
        price: 85000,
        currency: "UGX",
        image: "/products/gift-box-1.jpg",
        category: "gift-boxes",
      },
      {
        id: "2",
        name: "Handcrafted Journal",
        price: 45000,
        currency: "UGX",
        image: "/products/journal-1.jpg",
        category: "stationery",
      },
      {
        id: "3",
        name: "Artisan Candle Set",
        price: 65000,
        currency: "UGX",
        image: "/products/candle-set-1.jpg",
        category: "home-decor",
      },
      {
        id: "4",
        name: "Inspirational Wall Art",
        price: 55000,
        currency: "UGX",
        image: "/products/wall-art-1.jpg",
        category: "home-decor",
      },
    ]);
    
    setNewArrivals([
      {
        id: "5",
        name: "Limited Edition Gift Set",
        price: 95000,
        currency: "UGX",
        image: "/products/gift-set-1.jpg",
        category: "gift-boxes",
      },
      {
        id: "6",
        name: "Handmade Greeting Cards",
        price: 25000,
        currency: "UGX",
        image: "/products/cards-1.jpg",
        category: "stationery",
      },
      {
        id: "7",
        name: "Premium Diffuser",
        price: 75000,
        currency: "UGX",
        image: "/products/diffuser-1.jpg",
        category: "home-decor",
      },
      {
        id: "8",
        name: "Conversation Cards",
        price: 35000,
        currency: "UGX",
        image: "/products/conversation-cards-1.jpg",
        category: "wellness",
      },
    ]);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-pink-50 to-pink-100 py-16">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0 space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Thoughtful Gifts for<br />Every Occasion
            </h1>
            <p className="text-gray-700 text-lg max-w-md">
              Discover unique, handcrafted gifts that create meaningful moments and lasting memories.
            </p>
            <div className="flex space-x-4 pt-4">
              <Button className="bg-pink-500 hover:bg-pink-600">
                Shop Now
              </Button>
              <Button variant="outline" className="border-pink-500 text-pink-500 hover:bg-pink-50">
                Gift Finder
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <img
              src="/hero-image.jpg"
              alt="Curated gift collection"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-semibold text-center mb-12">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <CategoryCard 
              title="Gift Boxes" 
              image="/categories/gift-boxes.jpg"
              count={12}
              slug="gift-boxes"
            />
            <CategoryCard 
              title="Stationery" 
              image="/categories/stationery.jpg"
              count={24}
              slug="stationery"
            />
            <CategoryCard 
              title="Home Decor" 
              image="/categories/home-decor.jpg"
              count={18}
              slug="home-decor"
            />
            <CategoryCard 
              title="Wellness" 
              image="/categories/wellness.jpg"
              count={15}
              slug="wellness"
            />
          </div>
        </div>
      </section>

      {/* Gift Finder */}
      <GiftFinderBanner />

      {/* Featured & New Arrivals Tabs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <Tabs defaultValue="featured" className="w-full">
            <div className="flex justify-between items-center mb-8">
              <TabsList>
                <TabsTrigger value="featured">Featured Products</TabsTrigger>
                <TabsTrigger value="new">New Arrivals</TabsTrigger>
              </TabsList>
              <Link href="/products" className="text-pink-500 hover:text-pink-600 flex items-center">
                View All <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            
            <TabsContent value="featured">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {featuredProducts.map(product => (
                  <FeaturedProduct key={product.id} product={product} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="new">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {newArrivals.map(product => (
                  <FeaturedProduct key={product.id} product={product} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img 
                src="/about-image.jpg" 
                alt="Our Story" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-3xl font-semibold">Our Story</h2>
              <p className="text-gray-700">
                Muno Journey began with a simple idea: to create meaningful gifts that help people connect. 
                What started as a small passion project has grown into a curated collection of thoughtful items 
                designed to celebrate special moments and everyday joy.
              </p>
              <p className="text-gray-700">
                Each product in our collection is carefully selected to bring warmth, joy, and meaning 
                to your life and the lives of those you cherish.
              </p>
              <Button variant="outline" className="border-pink-500 text-pink-500 hover:bg-pink-50">
                Read More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Badges */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-3">
              <div className="flex justify-center">
                <img src="/icons/handcrafted.svg" alt="Handcrafted" className="h-16 w-16" />
              </div>
              <h3 className="font-semibold">Handcrafted</h3>
              <p className="text-sm text-gray-600">Each item is made with care and attention to detail</p>
            </div>
            <div className="space-y-3">
              <div className="flex justify-center">
                <img src="/icons/sustainable.svg" alt="Sustainable" className="h-16 w-16" />
              </div>
              <h3 className="font-semibold">Sustainable</h3>
              <p className="text-sm text-gray-600">Eco-friendly materials and practices</p>
            </div>
            <div className="space-y-3">
              <div className="flex justify-center">
                <img src="/icons/local.svg" alt="Locally Inspired" className="h-16 w-16" />
              </div>
              <h3 className="font-semibold">Locally Inspired</h3>
              <p className="text-sm text-gray-600">Designs inspired by Ugandan culture and beauty</p>
            </div>
            <div className="space-y-3">
              <div className="flex justify-center">
                <img src="/icons/quality.svg" alt="Premium Quality" className="h-16 w-16" />
              </div>
              <h3 className="font-semibold">Premium Quality</h3>
              <p className="text-sm text-gray-600">Only the finest materials and craftsmanship</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-semibold text-center mb-12">What Our Customers Say</h2>
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              <CarouselItem>
                <TestimonialCard 
                  quote="The gift box I ordered was beautifully wrapped and the items inside were perfect. My friend loved it!"
                  author="Sarah K."
                  location="Kampala"
                />
              </CarouselItem>
              <CarouselItem>
                <TestimonialCard 
                  quote="The gift finder tool helped me choose the perfect gift for my mother when I was completely stuck. Highly recommend!"
                  author="David M."
                  location="Entebbe"
                />
              </CarouselItem>
              <CarouselItem>
                <TestimonialCard 
                  quote="The quality of each item is exceptional. I keep coming back because I know I'll find unique gifts every time."
                  author="Rachel T."
                  location="Jinja"
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-pink-50">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-2xl">
          <h2 className="text-3xl font-semibold mb-4">Stay Updated</h2>
          <p className="text-gray-700 mb-8">
            Subscribe to our newsletter for gift ideas, new arrivals, and special offers.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-300 flex-grow"
            />
            <Button className="bg-pink-500 hover:bg-pink-600">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}