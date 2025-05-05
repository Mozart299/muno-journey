import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Book, HelpCircle } from "lucide-react";
import JournalFinder from "./JournalFinder";

export default function JournalFinderBanner() {
  const router = useRouter();
  const [isFinderOpen, setIsFinderOpen] = useState(false);
  
  return (
    <section className="py-16 bg-gradient-to-r from-pink-50 to-purple-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Image Column */}
            <div className="md:w-1/3 bg-pink-100 relative hidden md:block">
              <img
                src="/journal-finder-image.jpg"
                alt="Prayer journals collection"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            
            {/* Content Column */}
            <div className="md:w-2/3 p-8 md:p-12">
              <div className="flex items-start mb-4">
                <Book className="h-10 w-10 text-pink-500 mr-4" />
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">
                    Find Your Perfect Prayer Journal
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Not sure which journal to choose? Answer a few simple questions and 
                    we'll help you find the perfect companion for your spiritual journey.
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <div className="h-8 w-8 rounded-full bg-pink-100 flex items-center justify-center text-pink-500 font-medium">
                    1
                  </div>
                  <p>Select your journal type</p>
                </div>
                
                <div className="flex items-center space-x-2">
                  <div className="h-8 w-8 rounded-full bg-pink-100 flex items-center justify-center text-pink-500 font-medium">
                    2
                  </div>
                  <p>Choose who it's for</p>
                </div>
                
                <div className="flex items-center space-x-2">
                  <div className="h-8 w-8 rounded-full bg-pink-100 flex items-center justify-center text-pink-500 font-medium">
                    3
                  </div>
                  <p>Select your preferred features</p>
                </div>
              </div>
              
              <div className="mt-8">
                <Button 
                  size="lg" 
                  className="bg-pink-500 hover:bg-pink-600"
                  onClick={() => setIsFinderOpen(true)}
                >
                  <Book className="mr-2 h-4 w-4" />
                  Find Your Perfect Journal
                </Button>
                
                <p className="text-sm text-gray-500 mt-4 flex items-center">
                  <HelpCircle className="h-4 w-4 mr-1" />
                  Not sure what you need? Our journal finder will guide you
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Journal Finder Sheet */}
      <Sheet open={isFinderOpen} onOpenChange={setIsFinderOpen}>
        <SheetContent side="right" className="sm:max-w-lg">
          <SheetHeader>
            <SheetTitle>Journal Finder</SheetTitle>
            <SheetDescription>
              Find the perfect journal for your spiritual journey
            </SheetDescription>
          </SheetHeader>
          
          <div className="mt-6">
            <JournalFinder />
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
}