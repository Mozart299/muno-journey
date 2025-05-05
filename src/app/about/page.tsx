// app/about/page.tsx
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-50 to-purple-50 py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Muno Journey</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We curate thoughtful, handcrafted gifts that create meaningful moments and lasting memories.
          </p>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Muno Journey began with a simple idea: to create meaningful gifts that help people connect. 
                What started as a small passion project in 2018 has grown into a curated collection of thoughtful 
                items designed to celebrate special moments and everyday joy.
              </p>
              <p className="text-gray-700 mb-4">
                Our founder, Ruby Nakimuli, noticed that in our fast-paced digital world, physical tokens of 
                appreciation were becoming increasingly valuable. She began creating personalized gift boxes for 
                friends and family, putting thought and care into each selection.
              </p>
              <p className="text-gray-700">
                Word quickly spread, and soon Ruby was receiving requests from people all over Kampala. 
                From these humble beginnings, Muno Journey was born—a place where thoughtfulness, 
                quality, and connection come together in every gift.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="/about-image.jpg" 
                  alt="Muno Journey founder" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="h-16 w-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Thoughtfulness</h3>
              <p className="text-gray-600">
                We believe that a truly great gift shows you really know someone. 
                Our products are selected with care and attention to create meaningful connections.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="h-16 w-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Quality</h3>
              <p className="text-gray-600">
                We partner with local artisans and source premium materials to ensure 
                that each gift meets our high standards for quality and craftsmanship.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="h-16 w-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Sustainability</h3>
              <p className="text-gray-600">
                We're committed to eco-friendly practices and packaging. 
                We believe that beautiful gifts shouldn't come at the expense of our planet.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Meet the Team */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Meet the Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="rounded-full overflow-hidden h-40 w-40 mx-auto mb-4">
                <img 
                  src="/team/ruby.jpg" 
                  alt="Ruby Nakimuli" 
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Ruby Nakimuli</h3>
              <p className="text-gray-600">Founder & Creative Director</p>
            </div>
            
            <div className="text-center">
              <div className="rounded-full overflow-hidden h-40 w-40 mx-auto mb-4">
                <img 
                  src="/team/david.jpg" 
                  alt="David Mugisha" 
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">David Mugisha</h3>
              <p className="text-gray-600">Operations Manager</p>
            </div>
            
            <div className="text-center">
              <div className="rounded-full overflow-hidden h-40 w-40 mx-auto mb-4">
                <img 
                  src="/team/sarah.jpg" 
                  alt="Sarah Tendo" 
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Sarah Tendo</h3>
              <p className="text-gray-600">Product Curator</p>
            </div>
            
            <div className="text-center">
              <div className="rounded-full overflow-hidden h-40 w-40 mx-auto mb-4">
                <img 
                  src="/team/john.jpg" 
                  alt="John Byamugisha" 
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">John Byamugisha</h3>
              <p className="text-gray-600">Customer Experience</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-pink-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex flex-col items-center text-center">
                <div className="text-4xl text-pink-500 mb-4">"</div>
                <p className="text-gray-700 text-lg mb-6">
                  Muno Journey saved my anniversary! I completely forgot until the day before, 
                  and they were able to put together a beautiful custom gift box that was delivered 
                  the next morning. My wife was so impressed, she thought I'd planned it for weeks!
                </p>
                <Separator className="mb-6" />
                <div className="flex items-center">
                  <div className="mr-4">
                    <div className="rounded-full overflow-hidden h-12 w-12">
                      <img 
                        src="/testimonials/michael.jpg" 
                        alt="Michael K." 
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="text-left">
                    <p className="font-bold">Michael K.</p>
                    <p className="text-gray-600 text-sm">Loyal customer since 2021</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-pink-500 to-purple-600 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Join the Muno Journey Family</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            We're always looking for new artisans, creators, and team members who share our passion 
            for thoughtful gifting and exceptional customer experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-pink-500 hover:bg-gray-100">
              Partner With Us
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10">
              Careers
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}