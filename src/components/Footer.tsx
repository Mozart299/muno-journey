// components/Footer.tsx
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Muno Journey</h3>
            <p className="text-gray-600 mb-4">
            Discover our beautifully crafted prayer journals and spiritual gifts designed to enrich your faith and daily practice.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook className="h-5 w-5 text-gray-600 hover:text-pink-500" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="h-5 w-5 text-gray-600 hover:text-pink-500" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter className="h-5 w-5 text-gray-600 hover:text-pink-500" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-pink-500">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-pink-500">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/journal-finder" className="text-gray-600 hover:text-pink-500">
                  Journal Finder
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-600 hover:text-pink-500">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-pink-500">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Customer Service */}
          <div>
            <h3 className="font-bold text-lg mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/shipping-delivery" className="text-gray-600 hover:text-pink-500">
                  Shipping & Delivery
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-gray-600 hover:text-pink-500">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link href="/terms-conditions" className="text-gray-600 hover:text-pink-500">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-600 hover:text-pink-500">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/track-order" className="text-gray-600 hover:text-pink-500">
                  Track Your Order
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-4">Stay Connected</h3>
            <p className="text-gray-600 mb-4">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="flex-grow"
              />
              <Button className="bg-pink-500 hover:bg-pink-600">
                <Mail className="mr-2 h-4 w-4" />
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Muno Journey. All rights reserved.</p>
          
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/terms-conditions" className="hover:text-pink-500">
              Terms
            </Link>
            <Link href="/privacy-policy" className="hover:text-pink-500">
              Privacy
            </Link>
            <Link href="/cookies" className="hover:text-pink-500">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}