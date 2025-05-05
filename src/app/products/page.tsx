// app/products/page.tsx
"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
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
import { Gift, Filter, Grid3X3, LayoutGrid, SlidersHorizontal } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import GiftFinderPanel from "@/components/GiftFinderPanel";
import { ProductType } from "@/types/products";

const occasionOptions = [
  { id: "birthday", label: "Birthday" },
  { id: "anniversary", label: "Anniversary" },
  { id: "wedding", label: "Wedding" },
  { id: "graduation", label: "Graduation" },
  { id: "housewarming", label: "Housewarming" },
  { id: "thank-you", label: "Thank You" },
  { id: "congratulations", label: "Congratulations" },
];

const recipientOptions = [
  { id: "for-her", label: "For Her" },
  { id: "for-him", label: "For Him" },
  { id: "for-couples", label: "For Couples" },
  { id: "for-kids", label: "For Kids" },
  { id: "for-friends", label: "For Friends" },
  { id: "for-family", label: "For Family" },
];

const categoryOptions = [
  { id: "gift-boxes", label: "Gift Boxes" },
  { id: "stationery", label: "Stationery" },
  { id: "home-decor", label: "Home Decor" },
  { id: "wellness", label: "Wellness" },
  { id: "accessories", label: "Accessories" },
  { id: "books", label: "Books" },
];

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const [products, setProducts] = useState<ProductType[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<ProductType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  // Filter states
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200000]);
  const [selectedOccasions, setSelectedOccasions] = useState<string[]>([]);
  const [selectedRecipients, setSelectedRecipients] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState("featured");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [isGiftFinderOpen, setIsGiftFinderOpen] = useState(false);
  
  // Fetch products on mount (mock data)
  useEffect(() => {
    // Simulate API fetch with delay
    const timer = setTimeout(() => {
      // This would be an API call in a real app
      const mockProducts: ProductType[] = Array.from({ length: 24 }, (_, index) => ({
        id: `product-${index + 1}`,
        name: `Gift Item ${index + 1}`,
        price: Math.floor(Math.random() * 150000) + 25000, // Random price between 25k-175k UGX
        currency: "UGX",
        image: `/products/product-${(index % 8) + 1}.jpg`,
        category: categoryOptions[Math.floor(Math.random() * categoryOptions.length)].id,
        occasions: [
          occasionOptions[Math.floor(Math.random() * occasionOptions.length)].id,
          occasionOptions[Math.floor(Math.random() * occasionOptions.length)].id,
        ],
        recipients: [
          recipientOptions[Math.floor(Math.random() * recipientOptions.length)].id,
        ],
        description: `This is a beautiful handcrafted gift perfect for any occasion. Made with premium materials and attention to detail.`,
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
      
      // Filter by category
      if (selectedCategories.length > 0) {
        result = result.filter(product => 
          selectedCategories.includes(product.category)
        );
      }
      
      // Filter by occasion
      if (selectedOccasions.length > 0) {
        result = result.filter(product =>
          product.occasions?.some(occasion => selectedOccasions.includes(occasion))
        );
      }
      
      // Filter by recipient
      if (selectedRecipients.length > 0) {
        result = result.filter(product =>
          product.recipients?.some(recipient => selectedRecipients.includes(recipient))
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
  }, [products, priceRange, selectedCategories, selectedOccasions, selectedRecipients, sortOption]);
  
  // Check for URL parameters (for gift finder results)
  useEffect(() => {
    const occasion = searchParams.get('occasion');
    const recipient = searchParams.get('recipient');
    const priceMax = searchParams.get('priceMax');
    
    if (occasion) {
      setSelectedOccasions([occasion]);
    }
    
    if (recipient) {
      setSelectedRecipients([recipient]);
    }
    
    if (priceMax) {
      setPriceRange([0, parseInt(priceMax)]);
    }
  }, [searchParams]);
  
  // Toggle filter option
  const toggleFilter = (type: 'occasion' | 'recipient' | 'category', id: string) => {
    switch (type) {
      case 'occasion':
        setSelectedOccasions(prev => 
          prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
        );
        break;
      case 'recipient':
        setSelectedRecipients(prev => 
          prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
        );
        break;
      case 'category':
        setSelectedCategories(prev => 
          prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
        );
        break;
    }
  };
  
  // Clear all filters
  const clearFilters = () => {
    setPriceRange([0, 200000]);
    setSelectedOccasions([]);
    setSelectedRecipients([]);
    setSelectedCategories([]);
    setSortOption("featured");
  };
  
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-pink-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">All Products</h1>
          <div className="flex flex-wrap gap-2">
            <Button 
              variant="outline" 
              className="bg-white" 
              onClick={() => setIsGiftFinderOpen(true)}
            >
              <Gift className="mr-2 h-4 w-4" />
              Gift Finder
            </Button>
            {selectedCategories.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {selectedCategories.map(cat => {
                  const category = categoryOptions.find(c => c.id === cat);
                  return (
                    <Button 
                      key={cat} 
                      variant="outline" 
                      className="bg-white"
                      onClick={() => toggleFilter('category', cat)}
                    >
                      {category?.label} &times;
                    </Button>
                  );
                })}
              </div>
            )}
            {(selectedOccasions.length > 0 || selectedRecipients.length > 0) && (
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
              
              <Accordion type="multiple" defaultValue={["category", "occasion", "recipient"]} className="space-y-4">
                <AccordionItem value="category" className="border-none">
                  <AccordionTrigger className="py-2 hover:no-underline">
                    <h3 className="font-medium text-lg">Category</h3>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      {categoryOptions.map(category => (
                        <div key={category.id} className="flex items-center space-x-2">
                          <Checkbox 
                            id={`category-${category.id}`} 
                            checked={selectedCategories.includes(category.id)}
                            onCheckedChange={() => toggleFilter('category', category.id)}
                          />
                          <Label 
                            htmlFor={`category-${category.id}`}
                            className="text-sm cursor-pointer"
                          >
                            {category.label}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="occasion" className="border-none">
                  <AccordionTrigger className="py-2 hover:no-underline">
                    <h3 className="font-medium text-lg">Occasion</h3>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      {occasionOptions.map(occasion => (
                        <div key={occasion.id} className="flex items-center space-x-2">
                          <Checkbox 
                            id={`occasion-${occasion.id}`} 
                            checked={selectedOccasions.includes(occasion.id)}
                            onCheckedChange={() => toggleFilter('occasion', occasion.id)}
                          />
                          <Label 
                            htmlFor={`occasion-${occasion.id}`}
                            className="text-sm cursor-pointer"
                          >
                            {occasion.label}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="recipient" className="border-none">
                  <AccordionTrigger className="py-2 hover:no-underline">
                    <h3 className="font-medium text-lg">Recipient</h3>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      {recipientOptions.map(recipient => (
                        <div key={recipient.id} className="flex items-center space-x-2">
                          <Checkbox 
                            id={`recipient-${recipient.id}`} 
                            checked={selectedRecipients.includes(recipient.id)}
                            onCheckedChange={() => toggleFilter('recipient', recipient.id)}
                          />
                          <Label 
                            htmlFor={`recipient-${recipient.id}`}
                            className="text-sm cursor-pointer"
                          >
                            {recipient.label}
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
                      Refine your product search
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
                      <h3 className="font-medium text-lg mb-4">Category</h3>
                      <div className="space-y-2">
                        {categoryOptions.map(category => (
                          <div key={category.id} className="flex items-center space-x-2">
                            <Checkbox 
                              id={`mobile-category-${category.id}`} 
                              checked={selectedCategories.includes(category.id)}
                              onCheckedChange={() => toggleFilter('category', category.id)}
                            />
                            <Label 
                              htmlFor={`mobile-category-${category.id}`}
                              className="text-sm cursor-pointer"
                            >
                              {category.label}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h3 className="font-medium text-lg mb-4">Occasion</h3>
                      <div className="space-y-2">
                        {occasionOptions.map(occasion => (
                          <div key={occasion.id} className="flex items-center space-x-2">
                            <Checkbox 
                              id={`mobile-occasion-${occasion.id}`} 
                              checked={selectedOccasions.includes(occasion.id)}
                              onCheckedChange={() => toggleFilter('occasion', occasion.id)}
                            />
                            <Label 
                              htmlFor={`mobile-occasion-${occasion.id}`}
                              className="text-sm cursor-pointer"
                            >
                              {occasion.label}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h3 className="font-medium text-lg mb-4">Recipient</h3>
                      <div className="space-y-2">
                        {recipientOptions.map(recipient => (
                          <div key={recipient.id} className="flex items-center space-x-2">
                            <Checkbox 
                              id={`mobile-recipient-${recipient.id}`} 
                              checked={selectedRecipients.includes(recipient.id)}
                              onCheckedChange={() => toggleFilter('recipient', recipient.id)}
                            />
                            <Label 
                              htmlFor={`mobile-recipient-${recipient.id}`}
                              className="text-sm cursor-pointer"
                            >
                              {recipient.label}
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
                <h3 className="text-lg font-medium mb-2">No products found</h3>
                <p className="text-gray-500 mb-6">Try changing your filters to find what you're looking for.</p>
                <Button onClick={clearFilters}>Clear all filters</Button>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Gift Finder Sheet */}
      <Sheet open={isGiftFinderOpen} onOpenChange={setIsGiftFinderOpen}>
        <SheetContent side="right" className="sm:max-w-lg">
          <SheetHeader>
            <SheetTitle>Gift Finder</SheetTitle>
            <SheetDescription>
              Answer a few questions to find the perfect gift
            </SheetDescription>
          </SheetHeader>
          
          <GiftFinderPanel onClose={() => setIsGiftFinderOpen(false)} />
        </SheetContent>
      </Sheet>
    </div>
  );
}