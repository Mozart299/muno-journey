// app/contact/page.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Clock, MessageSquare } from "lucide-react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-50 to-purple-50 py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-gray-700 max-w-xl mx-auto">
            Have questions about our products or services? We're here to help!
          </p>
        </div>
      </section>
      
      {/* Contact Info & Form */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
              <p className="text-gray-700 mb-8">
                We'd love to hear from you! Whether you have a question about our products, 
                custom orders, delivery, or anything else, our team is ready to answer all your queries.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-pink-100 p-3 rounded-full mr-4">
                    <Phone className="h-5 w-5 text-pink-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Phone</h3>
                    <p className="text-gray-700">+256 726 393 568</p>
                    <p className="text-gray-700">Monday-Friday, 9am-6pm</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-pink-100 p-3 rounded-full mr-4">
                    <Mail className="h-5 w-5 text-pink-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Email</h3>
                    <p className="text-gray-700">hello@munojourney.com</p>
                    <p className="text-gray-700">We aim to respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-pink-100 p-3 rounded-full mr-4">
                    <MapPin className="h-5 w-5 text-pink-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Visit Us</h3>
                    <p className="text-gray-700">Kampala Road, City Center</p>
                    <p className="text-gray-700">Acacia Mall, Kisementi</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-pink-100 p-3 rounded-full mr-4">
                    <Clock className="h-5 w-5 text-pink-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Opening Hours</h3>
                    <p className="text-gray-700">Monday-Friday: 9am-6pm</p>
                    <p className="text-gray-700">Saturday: 10am-4pm</p>
                    <p className="text-gray-700">Sunday: Closed</p>
                  </div>
                </div>
              </div>
              
              <Separator className="my-8" />
              
              {/* Social Links */}
              <h3 className="font-bold text-lg mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-100 hover:bg-pink-100 p-3 rounded-full transition duration-300"
                >
                  <svg className="h-5 w-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                  </svg>
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-100 hover:bg-pink-100 p-3 rounded-full transition duration-300"
                >
                  <svg className="h-5 w-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-gray-100 hover:bg-pink-100 p-3 rounded-full transition duration-300"
                >
                  <svg className="h-5 w-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-gray-100 hover:bg-pink-100 p-3 rounded-full transition duration-300"
                >
                  <svg className="h-5 w-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <Tabs defaultValue="contact" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="contact">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Contact Form
                  </TabsTrigger>
                  <TabsTrigger value="map">
                    <MapPin className="h-4 w-4 mr-2" />
                    Find Us
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="contact" className="mt-6">
                  {isSubmitted ? (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                      <svg 
                        className="h-12 w-12 text-green-500 mx-auto mb-4" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
                        />
                      </svg>
                      <h3 className="text-xl font-bold text-green-800 mb-2">Message Sent!</h3>
                      <p className="text-green-700">
                        Thank you for contacting us. We'll get back to you as soon as possible.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="name">Your Name</Label>
                          <Input 
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your name"
                            required
                            className="mt-1"
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="email">Email Address</Label>
                          <Input 
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                            className="mt-1"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="subject">Subject</Label>
                        <Select 
                          value={subject} 
                          onValueChange={setSubject}
                        >
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select a subject" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">General Inquiry</SelectItem>
                            <SelectItem value="order">Order Information</SelectItem>
                            <SelectItem value="custom">Custom Orders</SelectItem>
                            <SelectItem value="feedback">Feedback</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label htmlFor="message">Message</Label>
                        <Textarea 
                          id="message"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="How can we help you?"
                          rows={6}
                          required
                          className="mt-1"
                        />
                      </div>
                      
                      <Button
                        type="submit"
                        className="w-full bg-pink-500 hover:bg-pink-600"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </Button>
                    </form>
                  )}
                </TabsContent>
                
                <TabsContent value="map" className="mt-6">
                  <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7575908657376!2d32.58232071427646!3d0.3131364997959287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbc0caf7b3ebd%3A0x80f76a5db0676f45!2sKampala%20Road%2C%20Kampala%2C%20Uganda!5e0!3m2!1sen!2sus!4v1651233427245!5m2!1sen!2sus"
                      className="w-full h-full"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                  
                  <div className="mt-6 bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">Store Locations</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div className="bg-white p-4 rounded-md shadow-sm">
                        <h4 className="font-medium">City Center Location</h4>
                        <p className="text-gray-600 text-sm">Kampala Road, Main Street</p>
                        <p className="text-gray-600 text-sm">Kampala, Uganda</p>
                        <p className="text-gray-600 text-sm">Mon-Fri: 9am-6pm</p>
                      </div>
                      
                      <div className="bg-white p-4 rounded-md shadow-sm">
                        <h4 className="font-medium">Acacia Mall</h4>
                        <p className="text-gray-600 text-sm">Floor 2, Shop 42</p>
                        <p className="text-gray-600 text-sm">Kisementi, Kampala</p>
                        <p className="text-gray-600 text-sm">Mon-Sat: 10am-8pm</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-2">Do you offer custom gift boxes?</h3>
              <p className="text-gray-700">
                Yes! We specialize in creating custom gift boxes tailored to your specific needs.
                You can choose the items, packaging, and even add a personalized message.
                Contact us with your requirements, and we'll work with you to create the perfect gift.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-2">What are your delivery options?</h3>
              <p className="text-gray-700">
                We offer free delivery within Kampala for orders over UGX 150,000. 
                For other areas, shipping costs are calculated at checkout based on your location. 
                We also offer express delivery for urgent orders at an additional cost.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-2">How long does delivery take?</h3>
              <p className="text-gray-700">
                Standard delivery usually takes 1-3 business days within Kampala, 
                and 3-5 business days for other locations in Uganda. Express delivery 
                is available for same-day or next-day delivery in select areas.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-2">Can I return or exchange my purchase?</h3>
              <p className="text-gray-700">
                We want you to be completely satisfied with your purchase. If you're not happy with 
                your order, you can return it within 7 days of delivery for a full refund or exchange. 
                Please note that personalized items cannot be returned unless damaged or defective.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-pink-100">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to surprise someone special?</h2>
          <p className="text-lg text-gray-700 max-w-xl mx-auto mb-8">
            Explore our curated collection of thoughtful gifts for every occasion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-pink-500 hover:bg-pink-600">
              Shop Now
            </Button>
            <Button variant="outline" className="border-pink-500 text-pink-500 hover:bg-pink-50">
              Gift Finder
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}