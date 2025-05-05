// app/about/page.tsx
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { ArrowRight, Book, Heart, PenTool, Star } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-50 to-purple-50 py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Muno Journey</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We create thoughtfully designed prayer journals and devotional products to help you grow in your spiritual journey.
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
                Muno Journey began with a simple idea: to create meaningful prayer journals that help people connect with God. 
                What started as a small passion project in 2018 has grown into a curated collection of thoughtfully 
                designed spiritual tools for developing consistent prayer and devotional habits.
              </p>
              <p className="text-gray-700 mb-4">
                Our founder, Ruth Kyomuhendo, noticed that in our busy digital world, having dedicated space for spiritual 
                reflection was becoming increasingly valuable. She began creating personalized prayer journals for 
                friends and family, putting thought and care into each design.
              </p>
              <p className="text-gray-700">
                Word quickly spread, and soon Ruth was receiving requests from people all over Kampala. 
                From these humble beginnings, Muno Journey was born—a place where faith, quality craftsmanship, 
                and spiritual growth come together in every journal and devotional product we create.
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
      
      {/* Our Mission */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-gray-700 mb-6">
              To create beautiful, practical tools that help people develop meaningful spiritual habits and grow closer to God through consistent prayer and reflection.
            </p>
            <div className="flex justify-center">
              <Button className="bg-pink-500 hover:bg-pink-600" asChild>
                <Link href="/journal-finder">
                  Find Your Perfect Journal
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="h-16 w-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-pink-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Spiritual Growth</h3>
              <p className="text-gray-600">
                We believe that consistent, intentional prayer and reflection are transformative. Our products 
                are designed to encourage meaningful spiritual practices that lead to lasting growth.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="h-16 w-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Book className="h-8 w-8 text-pink-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Biblical Foundation</h3>
              <p className="text-gray-600">
                Scripture is at the heart of everything we create. We integrate Bible verses, references, and teachings 
                to help you engage with God's Word in meaningful ways through your journaling practice.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="h-16 w-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <PenTool className="h-8 w-8 text-pink-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Thoughtful Design</h3>
              <p className="text-gray-600">
                We believe that beauty matters. Each journal is crafted with care, combining aesthetic appeal 
                with practical functionality to enhance your spiritual practice.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Journal Philosophy */}
      <section className="py-16 bg-pink-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="aspect-video bg-white rounded-lg shadow-lg overflow-hidden">
                <img 
                  src="/journal-philosophy.jpg" 
                  alt="Person using prayer journal" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Our Journal Philosophy</h2>
              <p className="text-gray-700 mb-4">
                We believe that the simple act of writing down our prayers, reflections, and spiritual insights creates 
                space for deeper connection with God. Our journals are designed to:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-pink-500 mr-2 mt-0.5 shrink-0" />
                  <span>Provide helpful structure without being rigid</span>
                </li>
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-pink-500 mr-2 mt-0.5 shrink-0" />
                  <span>Encourage consistent prayer habits through thoughtful layouts</span>
                </li>
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-pink-500 mr-2 mt-0.5 shrink-0" />
                  <span>Integrate scripture to deepen your understanding of God's Word</span>
                </li>
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-pink-500 mr-2 mt-0.5 shrink-0" />
                  <span>Create space for authentic expression and reflection</span>
                </li>
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-pink-500 mr-2 mt-0.5 shrink-0" />
                  <span>Build a meaningful record of your spiritual journey over time</span>
                </li>
              </ul>
              <div className="mt-6">
                <Button variant="outline" className="border-pink-500 text-pink-500 hover:bg-pink-50" asChild>
                  <Link href="/journal-tips">
                    Journal Tips & Guidance
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
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
              <p className="text-gray-600">Journal Designer</p>
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
                  My Muno Journey prayer journal has completely transformed my relationship with God. 
                  The prompts and structure helped me develop a consistent prayer habit for the first time. 
                  I can look back at answered prayers and see God's faithfulness in my life!
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
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Journal Journey?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Find the perfect prayer journal to enhance your spiritual practice and deepen your connection with God.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-pink-500 hover:bg-gray-100" asChild>
              <Link href="/products">
                Shop Journals
              </Link>
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10" asChild>
              <Link href="/journal-finder">
                Journal Finder
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}