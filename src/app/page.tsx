
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
import JournalFinderBanner from "@/components/JournalFinderBanner";
import FeaturedJournalsSection from "@/components/FeaturedJournalsSection";
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
        name: "Premium Daily Prayer Journal",
        price: 55000,
        currency: "UGX",
        image: "/products/premium-daily-journal.jpg",
        category: "premium-daily-journals",
      },
      {
        id: "2",
        name: "Kids Prayer Journal",
        price: 35000,
        currency: "UGX",
        image: "/products/kids-journal.jpg",
        category: "kids-prayer-journal",
      },
      {
        id: "3",
        name: "Weekly Prayer Journal",
        price: 45000,
        currency: "UGX",
        image: "/products/weekly-journal.jpg",
        category: "weekly-prayer-journal",
      },
      {
        id: "4",
        name: "Teens Prayer Journal",
        price: 40000,
        currency: "UGX",
        image: "/products/teens-journal.jpg",
        category: "teens-prayer-journal",
      },
    ]);
    
    setNewArrivals([
      {
        id: "5",
        name: "Timeless Prayer Box",
        price: 95000,
        currency: "UGX",
        image: "/products/timeless-prayer-box.jpg",
        category: "timeless-prayer-box",
      },
      {
        id: "6",
        name: "Alphabetical Verse Cards",
        price: 25000,
        currency: "UGX",
        image: "/products/verse-cards.jpg",
        category: "alphabetical-verse-cards",
      },
      {
        id: "7",
        name: "Journal Bookmarks",
        price: 15000,
        currency: "UGX",
        image: "/products/journal-bookmarks.jpg",
        category: "journal-bookmarks",
      },
      {
        id: "8",
        name: "Journal Supplies Set",
        price: 35000,
        currency: "UGX",
        image: "/products/journal-supplies.jpg",
        category: "journal-supplies",
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
              Deepen Your Spiritual Journey
            </h1>
            <p className="text-gray-700 text-lg max-w-md">
              Discover our beautifully crafted prayer journals and spiritual gifts designed to enrich your faith and daily practice.
            </p>
            <div className="flex space-x-4 pt-4">
              <Button className="bg-pink-500 hover:bg-pink-600" asChild>
                <Link href="/products">
                  Shop Journals
                </Link>
              </Button>
              <Button variant="outline" className="border-pink-500 text-pink-500 hover:bg-pink-50" asChild>
                <Link href="/journal-finder">
                  Journal Finder
                </Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <img
              src="/hero-image.jpg"
              alt="Prayer journal collection"
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
              title="Daily Journals" 
              image="/categories/daily-journals.jpg"
              count={12}
              slug="daily-journals"
            />
            <CategoryCard 
              title="Journal Supplies" 
              image="/categories/journal-supplies.jpg"
              count={24}
              slug="journal-supplies"
            />
            <CategoryCard 
              title="Verse Cards" 
              image="/categories/verse-cards.jpg"
              count={18}
              slug="alphabetical-verse-cards"
            />
            <CategoryCard 
              title="Prayer Boxes" 
              image="/categories/prayer-boxes.jpg"
              count={15}
              slug="timeless-prayer-box"
            />
          </div>
        </div>
      </section>

      {/* Journal Finder */}
      <JournalFinderBanner />

      {/* Featured Journals Section */}
      <FeaturedJournalsSection />

      {/* Gift Finder - Keep this if you also want to offer general gifts */}
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
                Muno Journey began with a simple idea: to create meaningful prayer journals that help 
                people grow in their spiritual walk. What started as a small passion project has grown 
                into a collection of thoughtfully designed journals and spiritual gifts.
              </p>
              <p className="text-gray-700">
                Each product in our collection is carefully created to enhance your spiritual journey, 
                helping you build consistency in prayer and reflection.
              </p>
              <Button variant="outline" className="border-pink-500 text-pink-500 hover:bg-pink-50" asChild>
                <Link href="/about">
                  Read More
                </Link>
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
                <img src="/icons/beautifully-designed.svg" alt="Beautifully Designed" className="h-16 w-16" />
              </div>
              <h3 className="font-semibold">Beautifully Designed</h3>
              <p className="text-sm text-gray-600">Thoughtful layouts that enhance your prayer practice</p>
            </div>
            <div className="space-y-3">
              <div className="flex justify-center">
                <img src="/icons/scripture-based.svg" alt="Scripture Based" className="h-16 w-16" />
              </div>
              <h3 className="font-semibold">Scripture Based</h3>
              <p className="text-sm text-gray-600">Integrated Bible verses and references</p>
            </div>
            <div className="space-y-3">
              <div className="flex justify-center">
                <img src="/icons/quality-materials.svg" alt="Quality Materials" className="h-16 w-16" />
              </div>
              <h3 className="font-semibold">Quality Materials</h3>
              <p className="text-sm text-gray-600">Premium paper and binding that lasts</p>
            </div>
            <div className="space-y-3">
              <div className="flex justify-center">
                <img src="/icons/guided-prompts.svg" alt="Guided Prompts" className="h-16 w-16" />
              </div>
              <h3 className="font-semibold">Guided Prompts</h3>
              <p className="text-sm text-gray-600">Thoughtful prompts to deepen your reflection</p>
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
                  quote="My prayer journal has transformed my spiritual life. I used to struggle with consistency in prayer, but writing in my journal daily has helped me develop a meaningful practice."
                  author="Sarah K."
                  location="Kampala"
                />
              </CarouselItem>
              <CarouselItem>
                <TestimonialCard 
                  quote="The structure of Muno Journey's prayer journals has been perfect for me. I never knew what to write before, but the prompts and scripture references guide me each day."
                  author="David M."
                  location="Entebbe"
                />
              </CarouselItem>
              <CarouselItem>
                <TestimonialCard 
                  quote="I bought prayer journals for my whole family, including ones designed for my kids. It's become a beautiful shared practice, and we often discuss what God is teaching us."
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
          <h2 className="text-3xl font-semibold mb-4">Join Our Community</h2>
          <p className="text-gray-700 mb-8">
            Subscribe to our newsletter for prayer prompts, journal tips, and special offers.
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