// components/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { 
  Heart, 
  Menu, 
  Search, 
  ShoppingCart, 
  User, 
  X,
  Gift
} from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Shop All", href: "/products" },
  { name: "Categories", href: "#", dropdown: true },
  { name: "Gift Finder", href: "/gift-finder" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const categoryLinks = [
  { name: "Daily Journals", href: "/products?category=daily-journals" },
  { name: "Premium Daily Journals", href: "/products?category=premium-daily-journals" },
  { name: "Kids Prayer Journal", href: "/products?category=kids-prayer-journal" },
  { name: "Weekly Prayer Journals", href: "/products?category=weekly-prayer-journal" },
  { name: "Teens Prayer Journal", href: "/products?category=teens-prayer-journal" },
  { name: "Timeless Prayer Box", href: "/products?category=timeless-prayer-box" },
  { name: "Alphabetical Verse Cards", href: "/products?category=alphabetical-verse-cards" },
  { name: "Journal Personalisation", href: "/products?category=journal-personalisation" },
  { name: "Journal Bookmarks", href: "/products?category=journal-bookmarks" },
  { name: "Journal Supplies", href: "/products?category=journal-supplies" },
  { name: "Gratitude Jars", href: "/products?category=gratitude-jars" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  
  // Handle scroll event to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/products?search=${encodeURIComponent(searchQuery)}`;
      setIsSearchOpen(false);
    }
  };
  
  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white shadow-sm" : "bg-white/90"
      }`}
    >
      {/* Announcement bar */}
      <div className="bg-pink-500 text-white py-2 text-center text-sm">
        Free delivery on orders over UGX 150,000
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Mobile menu button */}
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="-ml-4">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[350px]">
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-center py-4 border-b">
                  <Link href="/" className="font-bold text-xl">Muno Journey</Link>
                  <SheetClose asChild>
                    <Button variant="ghost" size="icon">
                      <X className="h-5 w-5" />
                    </Button>
                  </SheetClose>
                </div>
                
                <nav className="flex-1 overflow-auto">
                  <ul className="flex flex-col py-4 space-y-2">
                    {navLinks.map((link) => (
                      <li key={link.name}>
                        {link.dropdown ? (
                          <div className="px-4 py-2 font-medium">{link.name}</div>
                        ) : (
                          <SheetClose asChild>
                            <Link 
                              href={link.href}
                              className={`block px-4 py-2 ${
                                pathname === link.href ? "text-pink-600 font-medium" : ""
                              }`}
                            >
                              {link.name}
                            </Link>
                          </SheetClose>
                        )}
                        
                        {link.dropdown && (
                          <div className="pl-8 space-y-1 my-2">
                            {categoryLinks.map((category) => (
                              <SheetClose key={category.name} asChild>
                                <Link 
                                  href={category.href}
                                  className="block py-1.5 text-gray-600 hover:text-pink-600"
                                >
                                  {category.name}
                                </Link>
                              </SheetClose>
                            ))}
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
                
                <div className="border-t py-4">
                  <Button asChild className="w-full">
                    <Link href="/account/login">
                      <User className="mr-2 h-4 w-4" />
                      Sign In / Register
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
          
          {/* Logo */}
          <div className="flex-1 lg:flex-initial">
            <Link href="/" className="font-bold text-2xl">
              Muno Journey
            </Link>
          </div>
          
          {/* Desktop navigation */}
          <nav className="hidden lg:flex mx-4 flex-1 justify-center">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.name} className="relative group">
                  {link.dropdown ? (
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="link" className="p-0 font-medium">
                          {link.name}
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuLabel>Categories</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        {categoryLinks.map((category) => (
                          <DropdownMenuItem key={category.name} asChild>
                            <Link href={category.href}>{category.name}</Link>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  ) : (
                    <Link 
                      href={link.href}
                      className={`font-medium ${
                        pathname === link.href ? "text-pink-600" : "hover:text-pink-600"
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          
          {/* Actions - search, wishlist, cart, account */}
          <div className="flex items-center space-x-2">
            {/* Search dialog */}
            <Dialog open={isSearchOpen} onOpenChange={setIsSearchOpen}>
              <DialogTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Search className="h-5 w-5" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Search Products</DialogTitle>
                  <DialogDescription>
                    Find the perfect gift
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSearch} className="flex gap-2 mt-4">
                  <Input
                    placeholder="Search gifts, occasions..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1"
                  />
                  <Button type="submit">Search</Button>
                </form>
              </DialogContent>
            </Dialog>
            
            {/* Wishlist button */}
            <Link href="/wishlist">
              <Button variant="ghost" size="icon">
                <Heart className="h-5 w-5" />
              </Button>
            </Link>
            
            {/* Cart button */}
            <Link href="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-pink-500 text-xs text-white">
                  2
                </span>
              </Button>
            </Link>
            
            {/* Account button */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/account/profile">Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/account/orders">Orders</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/account/wishlist">Wishlist</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/account/logout">Logout</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
}