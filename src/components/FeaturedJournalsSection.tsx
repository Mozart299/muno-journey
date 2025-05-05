import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import FeaturedProduct from "@/components/FeaturedProduct";
import { ProductType } from "@/types/products";

// Sample featured journals data
const featuredJournals: ProductType[] = [
  {
    id: "journal-1",
    name: "Premium Daily Prayer Journal",
    price: 55000,
    currency: "UGX",
    image: "/products/premium-daily-journal.jpg",
    category: "premium-daily-journals",
    description: "Our flagship daily prayer journal with scripture references, reflection prompts, and gratitude sections. Perfect for developing a consistent prayer habit."
  },
  {
    id: "journal-2",
    name: "Kids Prayer Journal",
    price: 35000,
    currency: "UGX",
    image: "/products/kids-journal.jpg",
    category: "kids-prayer-journal",
    description: "Colorful and engaging prayer journal designed specifically for children. Includes fun activities, simple prompts, and space for drawings."
  },
  {
    id: "journal-3",
    name: "Weekly Prayer Journal",
    price: 45000,
    currency: "UGX",
    image: "/products/weekly-journal.jpg",
    category: "weekly-prayer-journal",
    description: "Structured weekly prayer journal with dedicated sections for different prayer focuses, scripture study, and reflections."
  },
  {
    id: "journal-4",
    name: "Teens Prayer Journal",
    price: 40000,
    currency: "UGX",
    image: "/products/teens-journal.jpg",
    category: "teens-prayer-journal",
    description: "Prayer journal designed for teenagers with age-appropriate prompts, scripture exploration, and space for personal reflection."
  }
];

export default function FeaturedJournalsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Featured Prayer Journals</h2>
          <Link href="/products?category=journals" className="text-pink-500 hover:text-pink-600 flex items-center">
            View All Journals <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredJournals.map(journal => (
            <FeaturedProduct key={journal.id} product={journal} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">Why Choose Muno Journey Journals?</h3>
            <p className="text-gray-600 mb-6">
              Our journals are thoughtfully designed to enhance your spiritual journey. Each one combines 
              beautiful aesthetics with practical features to make prayer and reflection a meaningful daily habit.
            </p>
            <Button 
              className="bg-pink-500 hover:bg-pink-600"
              asChild
            >
              <Link href="/journal-finder">
                Find Your Perfect Journal Match
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}