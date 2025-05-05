
"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Gift, HelpCircle, Search } from "lucide-react";

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
                alt="Gift selection"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            
            {/* Content Column */}
            <div className="md:w-2/3 p-8 md:p-12">
              <div className="flex items-start mb-4">
                <Gift className="h-10 w-10 text-pink-500 mr-4" />
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">
                    Not sure what to gift?
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Answer a few simple questions and we'll help you find the perfect gift 
                    for any occasion. Our Gift Finder makes shopping stress-free!
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <div className="h-8 w-8 rounded-full bg-pink-100 flex items-center justify-center text-pink-500 font-medium">
                    1
                  </div>
                  <p>Tell us the occasion</p>
                </div>
                
                <div className="flex items-center space-x-2">
                  <div className="h-8 w-8 rounded-full bg-pink-100 flex items-center justify-center text-pink-500 font-medium">
                    2
                  </div>
                  <p>Select who it's for</p>
                </div>
                
                <div className="flex items-center space-x-2">
                  <div className="h-8 w-8 rounded-full bg-pink-100 flex items-center justify-center text-pink-500 font-medium">
                    3
                  </div>
                  <p>Choose your budget</p>
                </div>
                
                <div className="flex items-center space-x-2">
                  <div className="h-8 w-8 rounded-full bg-pink-100 flex items-center justify-center text-pink-500 font-medium">
                    4
                  </div>
                  <p>Get personalized recommendations</p>
                </div>
              </div>
              
              <div className="mt-8">
                <Button 
                  size="lg" 
                  className="bg-pink-500 hover:bg-pink-600"
                  onClick={() => router.push('/gift-finder')}
                >
                  <Search className="mr-2 h-4 w-4" />
                  Find the Perfect Gift
                </Button>
                
                <p className="text-sm text-gray-500 mt-4 flex items-center">
                  <HelpCircle className="h-4 w-4 mr-1" />
                  Need more help? Contact our gift experts
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}