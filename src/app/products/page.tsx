// app/products/page.tsx
"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Slider } from "@/components/ui/slider";
import { Book, Filter, Grid3X3, LayoutGrid, SlidersHorizontal, BookOpen, User, ListChecks } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import JournalFinder from "@/components/JournalFinder";
import { ProductType } from "@/types/products";

// Updated filter options with journal-specific categories
const journalTypeOptions = [
  { id: "daily-journals", label: "Daily Journals" },
  { id: "premium-daily-journals", label: "Premium Daily Journals" },
  { id: "kids-prayer-journal", label: "Kids Prayer Journals" },
  { id: "weekly-prayer-journal", label: "Weekly Prayer Journals" },
  { id: "teens-prayer-journal", label: "Teens Prayer Journals" },
  { id: "timeless-prayer-box", label: "Timeless Prayer Boxes" },
];

const forWhomOptions = [
  { id: "for-adults", label: "For Adults" },
  { id: "for-teens", label: "For Teens" },
  { id: "for-kids", label: "For Kids" },
  { id: "for-couples", label: "For Couples" },
  { id: "for-family", label: "For Family" },
];

const featureOptions = [
  { id: "scripture-references", label: "Scripture References" },
  { id: "gratitude-section", label: "Gratitude Section" },
  { id: "reflection-prompts", label: "Reflection Prompts" },
  { id: "goal-setting", label: "Goal Setting" },
  { id: "monthly-themes", label: "Monthly Themes" },
  { id: "prayer-tracking", label: "Prayer Tracking" },
];

const accessoryOptions = [
  { id: "alphabetical-verse-cards", label: "Alphabetical Verse Cards" },
  { id: "journal-personalisation", label: "Journal Personalisation" },
  { id: "journal-bookmarks", label: "Journal Bookmarks" },
  { id: "journal-supplies", label: "Journal Supplies" },
  { id: "gratitude-jars", label: "Gratitude Jars" },
];

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const [products, setProducts] = useState<ProductType[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<ProductType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  // Filter states
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200000]);
  const [selectedJournalTypes, setSelectedJournalTypes] = useState<string[]>([]);
  const [selectedForWhom, setSelectedForWhom] = useState<string[]>([]);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [selectedAccessories, setSelectedAccessories] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState("featured");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [isJournalFinderOpen, setIsJournalFinderOpen] = useState(false);
  
  // Fetch products on mount (mock data)
  useEffect(() => {
    // Simulate API fetch with delay
    const timer = setTimeout(() => {
      // This would be an API call in a real app
      const mockProducts: ProductType[] = Array.from({ length: 24 }, (_, index) => ({
        id: `product-${index + 1}`,
        name: `Prayer Journal ${index + 1}`,
        price: Math.floor(Math.random() * 150000) + 25000, // Random price between 25k-175k UGX
        currency: "UGX",
        image: `/products/product-${(index % 8) + 1}.jpg`,
        category: journalTypeOptions[Math.floor(Math.random() * journalTypeOptions.length)].id,
        features: [
          featureOptions[Math.floor(Math.random() * featureOptions.length)].id,
          featureOptions[Math.floor(Math.random() * featureOptions.length)].id,
        ],
        forWhom: [
          forWhomOptions[Math.floor(Math.random() * forWhomOptions.length)].id,
        ],
        description: `This beautiful prayer journal features guided prompts, scripture references, and space for reflection. Perfect for establishing a consistent prayer practice.`,
        inStock: Math.random() > 0.2, // 80% chance of being in stock
      }));
      
      setProducts(mockProducts);
      setFilteredProducts(mockProducts);
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Apply filters when any filter changes
  useEffect(() => {
    if (products.length) {
      let result = [...products];
      
      // Filter by price range
      result = result.filter(
        product => product.price >= priceRange[0] && product.price <= priceRange[1]
      );
      
      // Filter by journal type
      if (selectedJournalTypes.length > 0) {
        result = result.filter(product => 
          selectedJournalTypes.includes(product.category)
        );
      }
      
      // Filter by for whom
      if (selectedForWhom.length > 0) {
        result = result.filter(product =>
          product.forWhom?.some(whom => selectedForWhom.includes(whom))
        );
      }
      
      // Filter by features
      if (selectedFeatures.length > 0) {
        result = result.filter(product =>
          product.features?.some(feature => selectedFeatures.includes(feature))
        );
      }
      
      // Filter by accessories
      if (selectedAccessories.length > 0) {
        result = result.filter(product =>
          selectedAccessories.includes(product.category)
        );
      }
      
      // Sort products
      switch (sortOption) {
        case "price-low-high":
          result.sort((a, b) => a.price - b.price);
          break;
        case "price-high-low":
          result.sort((a, b) => b.price - a.price);
          break;
        case "newest":
          // In a real app, you'd sort by date added
          result.sort((a, b) => parseInt(b.id.split('-')[1]) - parseInt(a.id.split('-')[1]));
          break;
        case "featured":
        default:
          // Featured would have its own logic in a real app
          break;
      }
      
      setFilteredProducts(result);
    }
  }, [products, priceRange, selectedJournalTypes, selectedForWhom, selectedFeatures, selectedAccessories, sortOption]);
  
  // Check for URL parameters (for journal finder results)
  useEffect(() => {
    const journalType = searchParams.get('type');
    const forWhom = searchParams.get('for');
    const features = searchParams.get('features');
    const priceMax = searchParams.get('priceMax');
    
    if (journalType) {
      setSelectedJournalTypes([journalType]);
    }
    
    if (forWhom) {
      setSelectedForWhom([forWhom]);
    }
    
    if (features) {
      setSelectedFeatures(features.split(','));
    }
    
    if (priceMax) {
      setPriceRange([0, parseInt(priceMax)]);
    }
  }, [searchParams]);
  
  // Toggle filter option
  const toggleFilter = (type: 'journal-type' | 'for-whom' | 'feature' | 'accessory', id: string) => {
    switch (type) {
      case 'journal-type':
        setSelectedJournalTypes(prev => 
          prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
        );
        break;
      case 'for-whom':
        setSelectedForWhom(prev => 
          prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
        );
        break;
      case 'feature':
        setSelectedFeatures(prev => 
          prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
        );
        break;
      case 'accessory':
        setSelectedAccessories(prev => 
          prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
        );
        break;
    }
  };
  
  // Clear all filters
  const clearFilters = () => {
    setPriceRange([0, 200000]);
    setSelectedJournalTypes([]);
    setSelectedForWhom([]);
    setSelectedFeatures([]);
    setSelectedAccessories([]);
    setSortOption("featured");
  };
  
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-pink-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Prayer Journals & Accessories</h1>
          <div className="flex flex-wrap gap-2">
            <Button 
              variant="outline" 
              className="bg-white" 
              onClick={() => setIsJournalFinderOpen(true)}
            >
              <Book className="mr-2 h-4 w-4" />
              Journal Finder
            </Button>
            {selectedJournalTypes.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {selectedJournalTypes.map(type => {
                  const journalType = journalTypeOptions.find(t => t.id === type);
                  return (
                    <Button 
                      key={type} 
                      variant="outline" 
                      className="bg-white"
                      onClick={() => toggleFilter('journal-type', type)}
                    >
                      {journalType?.label} &times;
                    </Button>
                  );
                })}
              </div>
            )}
            {(selectedForWhom.length > 0 || selectedFeatures.length > 0) && (
              <Button variant="link" onClick={clearFilters}>
                Clear all filters
              </Button>
            )}
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Filters (Desktop) */}
          <div className="hidden md:block w-64 flex-shrink-0">
            <div className="sticky top-8 space-y-8">
              <div>
                <h3 className="font-medium text-lg mb-4">Price Range</h3>
                <div className="space-y-6">
                  <Slider
                    defaultValue={[0, 200000]}
                    max={200000}
                    step={5000}
                    value={priceRange}
                    onValueChange={(value) => setPriceRange(value as [number, number])}
                  />
                  <div className="flex items-center justify-between">
                    <div className="border rounded-md px-3 py-2 w-24">
                      <p className="text-xs text-gray-500">Min</p>
                      <p>{priceRange[0].toLocaleString()} UGX</p>
                    </div>
                    <div className="border rounded-md px-3 py-2 w-24">
                      <p className="text-xs text-gray-500">Max</p>
                      <p>{priceRange[1].toLocaleString()} UGX</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <Accordion type="multiple" defaultValue={["journal-type", "for-whom", "features", "accessories"]} className="space-y-4">
                <AccordionItem value="journal-type" className="border-none">
                  <AccordionTrigger className="py-2 hover:no-underline">
                    <div className="flex items-center">
                      <BookOpen className="h-5 w-5 text-pink-500 mr-2" />
                      <h3 className="font-medium text-lg">Journal Type</h3>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      {journalTypeOptions.map(type => (
                        <div key={type.id} className="flex items-center space-x-2">
                          <Checkbox 
                            id={`type-${type.id}`} 
                            checked={selectedJournalTypes.includes(type.id)}
                            onCheckedChange={() => toggleFilter('journal-type', type.id)}
                          />
                          <Label 
                            htmlFor={`type-${type.id}`}
                            className="text-sm cursor-pointer"
                          >
                            {type.label}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="for-whom" className="border-none">
                  <AccordionTrigger className="py-2 hover:no-underline">
                    <div className="flex items-center">
                      <User className="h-5 w-5 text-pink-500 mr-2" />
                      <h3 className="font-medium text-lg">Who It's For</h3>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      {forWhomOptions.map(option => (
                        <div key={option.id} className="flex items-center space-x-2">
                          <Checkbox 
                            id={`whom-${option.id}`} 
                            checked={selectedForWhom.includes(option.id)}
                            onCheckedChange={() => toggleFilter('for-whom', option.id)}
                          />
                          <Label 
                            htmlFor={`whom-${option.id}`}
                            className="text-sm cursor-pointer"
                          >
                            {option.label}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="features" className="border-none">
                  <AccordionTrigger className="py-2 hover:no-underline">
                    <div className="flex items-center">
                      <ListChecks className="h-5 w-5 text-pink-500 mr-2" />
                      <h3 className="font-medium text-lg">Features</h3>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      {featureOptions.map(feature => (
                        <div key={feature.id} className="flex items-center space-x-2">
                          <Checkbox 
                            id={`feature-${feature.id}`} 
                            checked={selectedFeatures.includes(feature.id)}
                            onCheckedChange={() => toggleFilter('feature', feature.id)}
                          />
                          <Label 
                            htmlFor={`feature-${feature.id}`}
                            className="text-sm cursor-pointer"
                          >
                            {feature.label}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="accessories" className="border-none">
                  <AccordionTrigger className="py-2 hover:no-underline">
                    <div className="flex items-center">
                      <Book className="h-5 w-5 text-pink-500 mr-2" />
                      <h3 className="font-medium text-lg">Accessories</h3>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      {accessoryOptions.map(accessory => (
                        <div key={accessory.id} className="flex items-center space-x-2">
                          <Checkbox 
                            id={`accessory-${accessory.id}`} 
                            checked={selectedAccessories.includes(accessory.id)}
                            onCheckedChange={() => toggleFilter('accessory', accessory.id)}
                          />
                          <Label 
                            htmlFor={`accessory-${accessory.id}`}
                            className="text-sm cursor-pointer"
                          >
                            {accessory.label}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          
          {/* Mobile Filters */}
          <div className="md:hidden mb-4">
            <div className="flex gap-4 mb-4">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="flex-1">
                    <Filter className="mr-2 h-4 w-4" />
                    Filters
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-full sm:max-w-lg">
                  <SheetHeader>
                    <SheetTitle>Filters</SheetTitle>
                    <SheetDescription>
                      Find your perfect prayer journal
                    </SheetDescription>
                  </SheetHeader>
                  
                  <div className="mt-6 space-y-6">
                    <div>
                      <h3 className="font-medium text-lg mb-4">Price Range</h3>
                      <div className="space-y-6">
                        <Slider
                          defaultValue={[0, 200000]}
                          max={200000}
                          step={5000}
                          value={priceRange}
                          onValueChange={(value) => setPriceRange(value as [number, number])}
                        />
                        <div className="flex items-center justify-between">
                          <div className="border rounded-md px-3 py-2 w-24">
                            <p className="text-xs text-gray-500">Min</p>
                            <p>{priceRange[0].toLocaleString()} UGX</p>
                          </div>
                          <div className="border rounded-md px-3 py-2 w-24">
                            <p className="text-xs text-gray-500">Max</p>
                            <p>{priceRange[1].toLocaleString()} UGX</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h3 className="font-medium text-lg mb-4 flex items-center">
                        <BookOpen className="h-5 w-5 text-pink-500 mr-2" />
                        Journal Type
                      </h3>
                      <div className="space-y-2">
                        {journalTypeOptions.map(type => (
                          <div key={type.id} className="flex items-center space-x-2">
                            <Checkbox 
                              id={`mobile-type-${type.id}`} 
                              checked={selectedJournalTypes.includes(type.id)}
                              onCheckedChange={() => toggleFilter('journal-type', type.id)}
                            />
                            <Label 
                              htmlFor={`mobile-type-${type.id}`}
                              className="text-sm cursor-pointer"
                            >
                              {type.label}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h3 className="font-medium text-lg mb-4 flex items-center">
                        <User className="h-5 w-5 text-pink-500 mr-2" />
                        Who It's For
                      </h3>
                      <div className="space-y-2">
                        {forWhomOptions.map(option => (
                          <div key={option.id} className="flex items-center space-x-2">
                            <Checkbox 
                              id={`mobile-whom-${option.id}`} 
                              checked={selectedForWhom.includes(option.id)}
                              onCheckedChange={() => toggleFilter('for-whom', option.id)}
                            />
                            <Label 
                              htmlFor={`mobile-whom-${option.id}`}
                              className="text-sm cursor-pointer"
                            >
                              {option.label}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h3 className="font-medium text-lg mb-4 flex items-center">
                        <ListChecks className="h-5 w-5 text-pink-500 mr-2" />
                        Features
                      </h3>
                      <div className="space-y-2">
                        {featureOptions.map(feature => (
                          <div key={feature.id} className="flex items-center space-x-2">
                            <Checkbox 
                              id={`mobile-feature-${feature.id}`} 
                              checked={selectedFeatures.includes(feature.id)}
                              onCheckedChange={() => toggleFilter('feature', feature.id)}
                            />
                            <Label 
                              htmlFor={`mobile-feature-${feature.id}`}
                              className="text-sm cursor-pointer"
                            >
                              {feature.label}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-4 mt-6">
                      <Button variant="outline" onClick={clearFilters} className="flex-1">
                        Clear All
                      </Button>
                      <Button className="flex-1">Apply Filters</Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
              
              <Select value={sortOption} onValueChange={setSortOption}>
                <SelectTrigger className="flex-1">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low-high">Price: Low to High</SelectItem>
                  <SelectItem value="price-high-low">Price: High to Low</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                </SelectContent>
              </Select>
              
              <div className="flex border rounded-md">
                <Button 
                  variant={viewMode === "grid" ? "default" : "ghost"} 
                  size="icon"
                  onClick={() => setViewMode("grid")}
                  className="rounded-none rounded-l-md"
                >
                  <Grid3X3 className="h-4 w-4" />
                </Button>
                <Separator orientation="vertical" />
                <Button 
                  variant={viewMode === "list" ? "default" : "ghost"} 
                  size="icon"
                  onClick={() => setViewMode("list")}
                  className="rounded-none rounded-r-md"
                >
                  <LayoutGrid className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          
          {/* Main Product Grid */}
          <div className="flex-1">
            {/* Desktop sorting controls */}
            <div className="hidden md:flex justify-between items-center mb-8">
              <div>
                <p className="text-gray-500">
                  Showing {filteredProducts.length} of {products.length} products
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                <Select value={sortOption} onValueChange={setSortOption}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="price-low-high">Price: Low to High</SelectItem>
                    <SelectItem value="price-high-low">Price: High to Low</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                  </SelectContent>
                </Select>
                
                <div className="flex border rounded-md">
                  <Button 
                    variant={viewMode === "grid" ? "default" : "ghost"} 
                    size="icon"
                    onClick={() => setViewMode("grid")}
                    className="rounded-none rounded-l-md"
                  >
                    <Grid3X3 className="h-4 w-4" />
                  </Button>
                  <Separator orientation="vertical" />
                  <Button 
                    variant={viewMode === "list" ? "default" : "ghost"} 
                    size="icon"
                    onClick={() => setViewMode("list")}
                    className="rounded-none rounded-r-md"
                  >
                    <LayoutGrid className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
            
            {isLoading ? (
              // Loading skeleton
              <div className={`grid ${
                viewMode === "grid" 
                  ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-4" 
                  : "grid-cols-1"
              } gap-6`}>
                {Array.from({ length: 12 }).map((_, index) => (
                  <div key={index} className="space-y-3">
                    <div className="aspect-square bg-gray-200 rounded-md animate-pulse" />
                    <div className="h-4 bg-gray-200 rounded animate-pulse" />
                    <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
                  </div>
                ))}
              </div>
            ) : filteredProducts.length > 0 ? (
              <div className={`grid ${
                viewMode === "grid" 
                  ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-4" 
                  : "grid-cols-1"
              } gap-6`}>
                {filteredProducts.map(product => (
                  <ProductCard 
                    key={product.id}
                    product={product}
                    viewMode={viewMode}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <h3 className="text-lg font-medium mb-2">No journals found</h3>
                <p className="text-gray-500 mb-6">Try adjusting your filters to find what you're looking for.</p>
                <Button onClick={clearFilters}>Clear all filters</Button>
              </div>
            )}
            
            {/* Journal Subscription CTA */}
            {!isLoading && filteredProducts.length > 0 && (
              <div className="mt-16 bg-pink-50 rounded-lg p-6 shadow-sm">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="md:w-2/3">
                    <h3 className="text-xl font-bold mb-2">Never Run Out of Journal Space</h3>
                    <p className="text-gray-600 mb-4">
                      Subscribe to receive fresh journals delivered right to your door on your schedule. 
                      Save up to 20% and maintain your journaling practice without interruption.
                    </p>
                    <Button className="bg-pink-500 hover:bg-pink-600" asChild>
                      <Link href="/subscription">
                        View Subscription Plans
                      </Link>
                    </Button>
                  </div>
                  <div className="md:w-1/3">
                    <img 
                      src="/subscription-feature.jpg" 
                      alt="Journal subscription" 
                      className="rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Journal Finder Sheet */}
      <Sheet open={isJournalFinderOpen} onOpenChange={setIsJournalFinderOpen}>
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
    </div>
  );
}