"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Gift, HelpCircle, Search, Book } from "lucide-react";
import Link from "next/link";

export default function GiftFinderBanner() {
  const router = useRouter();
  
  return (
    <section className="py-16 bg-gradient-to-r from-pink-50 to-purple-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Image Column */}
            <div className="md:w-1/3 bg-pink-100 relative hidden md:block">
              <img
                src="/gift-finder-image.jpg"
                alt="Spiritual gift selection"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            
            {/* Content Column */}
            <div className="md:w-2/3 p-8 md:p-12">
              <div className="flex items-start mb-4">
                <Gift className="h-10 w-10 text-pink-500 mr-4" />
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">
                    Find the Perfect Spiritual Gift
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Looking for a meaningful gift to encourage spiritual growth? Answer a few 
                    simple questions and we'll help you find the perfect prayer journal or devotional gift.
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <div className="h-8 w-8 rounded-full bg-pink-100 flex items-center justify-center text-pink-500 font-medium">
                    1
                  </div>
                  <p>Select the occasion</p>
                </div>
                
                <div className="flex items-center space-x-2">
                  <div className="h-8 w-8 rounded-full bg-pink-100 flex items-center justify-center text-pink-500 font-medium">
                    2
                  </div>
                  <p>Tell us who it's for</p>
                </div>
                
                <div className="flex items-center space-x-2">
                  <div className="h-8 w-8 rounded-full bg-pink-100 flex items-center justify-center text-pink-500 font-medium">
                    3
                  </div>
                  <p>Choose gift type</p>
                </div>
                
                <div className="flex items-center space-x-2">
                  <div className="h-8 w-8 rounded-full bg-pink-100 flex items-center justify-center text-pink-500 font-medium">
                    4
                  </div>
                  <p>Set your budget</p>
                </div>
              </div>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-pink-500 hover:bg-pink-600"
                  onClick={() => router.push('/gift-finder')}
                >
                  <Gift className="mr-2 h-4 w-4" />
                  Find a Spiritual Gift
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-pink-500 text-pink-500 hover:bg-pink-50"
                  asChild
                >
                  <Link href="/journal-finder">
                    <Book className="mr-2 h-4 w-4" />
                    Try Our Journal Finder
                  </Link>
                </Button>
              </div>
              
              <p className="text-sm text-gray-500 mt-4 flex items-center">
                <HelpCircle className="h-4 w-4 mr-1" />
                Looking specifically for a prayer journal? Our Journal Finder will give you more personalized options.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}