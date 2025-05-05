// app/journal-tips/page.tsx
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Book, Calendar, Clock, Heart, PenTool, Sun } from "lucide-react";

export default function JournalTipsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-50 to-purple-50 py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Prayer Journal Guide</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Discover how to make the most of your prayer journal with these helpful tips, 
            prompts, and strategies for creating a meaningful spiritual practice.
          </p>
        </div>
      </section>
      
      {/* Tabs Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <Tabs defaultValue="getting-started" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-4 mb-8">
              <TabsTrigger value="getting-started">Getting Started</TabsTrigger>
              <TabsTrigger value="daily-practice">Daily Practice</TabsTrigger>
              <TabsTrigger value="prompts">Prayer Prompts</TabsTrigger>
              <TabsTrigger value="advanced">Advanced Techniques</TabsTrigger>
            </TabsList>
            
            <TabsContent value="getting-started" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Getting Started with Your Prayer Journal</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Choose the Right Time</h3>
                      <p className="text-gray-700">
                        Find a consistent time each day when you can spend 10-15 minutes with your journal. 
                        Many people prefer early morning or just before bed, but the best time is whenever 
                        you can be fully present and undistracted.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Create Your Space</h3>
                      <p className="text-gray-700">
                        Designate a comfortable, quiet space for your prayer journaling practice. Keep your 
                        journal, Bible, and a pen in this space so they're always ready when you are. This 
                        helps create a ritual that signals to your mind it's time for prayer and reflection.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Start Simple</h3>
                      <p className="text-gray-700">
                        Begin with just a few minutes of writing. You don't need to fill pages - even a 
                        few sentences about what you're grateful for or what's on your heart can be powerful. 
                        Your practice can grow naturally over time.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-2">No Rules, Just Write</h3>
                      <p className="text-gray-700">
                        Remember there's no "right way" to keep a prayer journal. It's a personal conversation 
                        with God. Don't worry about perfect grammar, spelling, or eloquent phrases. Simply write 
                        from your heart in whatever way feels natural to you.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                    <img
                      src="/images/journal-getting-started.jpg"
                      alt="Woman writing in prayer journal"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <Card className="mt-8 bg-pink-50 border-0">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-4">Beginner's Checklist</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <span className="text-pink-500 mr-2">✓</span>
                          <span>Set aside 10-15 minutes daily</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-pink-500 mr-2">✓</span>
                          <span>Create a comfortable, quiet journaling space</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-pink-500 mr-2">✓</span>
                          <span>Keep your journal visible as a reminder</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-pink-500 mr-2">✓</span>
                          <span>Start with simple gratitude entries</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-pink-500 mr-2">✓</span>
                          <span>Don't worry about "doing it right"</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-pink-500 mr-2">✓</span>
                          <span>Be consistent but gracious with yourself</span>
                        </li>
                      </ul>
                      
                      <div className="mt-6">
                        <Button className="bg-pink-500 hover:bg-pink-600" asChild>
                          <Link href="/products?category=daily-journals">
                            Browse Daily Journals
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="daily-practice" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Establishing a Daily Practice</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">The P.R.A.Y Method</h3>
                      <p className="text-gray-700">
                        This simple structure can help guide your daily journaling practice:
                      </p>
                      <ul className="mt-4 space-y-4">
                        <li className="flex">
                          <div className="h-8 w-8 rounded-full bg-pink-100 flex items-center justify-center text-pink-500 font-medium mr-3 mt-0.5">
                            P
                          </div>
                          <div>
                            <span className="font-semibold">Praise:</span> Begin by writing what you're thankful for and acknowledging God's goodness
                          </div>
                        </li>
                        <li className="flex">
                          <div className="h-8 w-8 rounded-full bg-pink-100 flex items-center justify-center text-pink-500 font-medium mr-3 mt-0.5">
                            R
                          </div>
                          <div>
                            <span className="font-semibold">Repent:</span> Write about areas where you're seeking forgiveness or growth
                          </div>
                        </li>
                        <li className="flex">
                          <div className="h-8 w-8 rounded-full bg-pink-100 flex items-center justify-center text-pink-500 font-medium mr-3 mt-0.5">
                            A
                          </div>
                          <div>
                            <span className="font-semibold">Ask:</span> Note specific requests for yourself and others
                          </div>
                        </li>
                        <li className="flex">
                          <div className="h-8 w-8 rounded-full bg-pink-100 flex items-center justify-center text-pink-500 font-medium mr-3 mt-0.5">
                            Y
                          </div>
                          <div>
                            <span className="font-semibold">Yield:</span> Reflect on scripture and listen for guidance
                          </div>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Track Prayer Answers</h3>
                      <p className="text-gray-700">
                        Leave space to come back and note when and how prayers were answered. This creates 
                        a powerful record of God's faithfulness that you can look back on in times of doubt.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Incorporate Scripture</h3>
                      <p className="text-gray-700">
                        Write down verses that speak to you during your Bible reading. Reflect on how they 
                        apply to your current situation or what they reveal about God's character.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <Card className="bg-white p-6 rounded-lg shadow-sm mb-8">
                    <h3 className="text-xl font-semibold mb-4">Sample Daily Journal Schedule</h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <Clock className="h-5 w-5 text-pink-500 mr-3 mt-0.5" />
                        <div>
                          <p className="font-medium">Morning (5-15 minutes)</p>
                          <p className="text-gray-600 text-sm">
                            Start your day with gratitude, scripture reading, and setting intentions
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Sun className="h-5 w-5 text-pink-500 mr-3 mt-0.5" />
                        <div>
                          <p className="font-medium">Midday (2-5 minutes)</p>
                          <p className="text-gray-600 text-sm">
                            Brief check-in for prayer requests that have come up during the day
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Heart className="h-5 w-5 text-pink-500 mr-3 mt-0.5" />
                        <div>
                          <p className="font-medium">Evening (10-20 minutes)</p>
                          <p className="text-gray-600 text-sm">
                            Reflect on the day, record answered prayers, and write gratitude entries
                          </p>
                        </div>
                      </div>
                    </div>
                  </Card>
                  
                  <div className="bg-pink-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">Consistency Tips</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-pink-500 mr-2">•</span>
                        <span>Set a reminder on your phone until it becomes a habit</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-pink-500 mr-2">•</span>
                        <span>Pair journaling with an existing habit (like morning coffee)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-pink-500 mr-2">•</span>
                        <span>Consider journaling with a friend or spouse for accountability</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-pink-500 mr-2">•</span>
                        <span>Keep your journal visible as a physical reminder</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-pink-500 mr-2">•</span>
                        <span>Don't break the chain - try to maintain a streak</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-pink-500 mr-2">•</span>
                        <span>If you miss a day, just pick up where you left off</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="prompts" className="mt-6">
              <h2 className="text-3xl font-bold mb-8">Prayer Journal Prompts</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Calendar className="h-5 w-5 text-pink-500 mr-2" />
                    Daily Reflection Prompts
                  </h3>
                  <ul className="space-y-3">
                    <li className="text-gray-700">What am I most grateful for today?</li>
                    <li className="text-gray-700">Where did I see God's presence in my day?</li>
                    <li className="text-gray-700">What challenged me today, and how can I invite God into that challenge?</li>
                    <li className="text-gray-700">What is one thing I learned about God or myself today?</li>
                    <li className="text-gray-700">Who needs my prayers right now, and what specifically can I pray for them?</li>
                    <li className="text-gray-700">What scripture verse spoke to me today, and why?</li>
                    <li className="text-gray-700">What is one way I can show God's love to someone tomorrow?</li>
                  </ul>
                </Card>
                
                <Card className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Heart className="h-5 w-5 text-pink-500 mr-2" />
                    Spiritual Growth Prompts
                  </h3>
                  <ul className="space-y-3">
                    <li className="text-gray-700">What area of my character is God developing right now?</li>
                    <li className="text-gray-700">What is a spiritual discipline I want to grow in, and how?</li>
                    <li className="text-gray-700">What lies am I believing that contradict God's truth?</li>
                    <li className="text-gray-700">What is God teaching me through my current season?</li>
                    <li className="text-gray-700">How have I seen myself grow spiritually in the past year?</li>
                    <li className="text-gray-700">What is one area where I need to surrender control to God?</li>
                    <li className="text-gray-700">What does it mean to me that I am loved unconditionally by God?</li>
                  </ul>
                </Card>
                
                <Card className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Book className="h-5 w-5 text-pink-500 mr-2" />
                    Scripture Meditation Prompts
                  </h3>
                  <ul className="space-y-3">
                    <li className="text-gray-700">What does this scripture reveal about God's character?</li>
                    <li className="text-gray-700">How does this passage challenge or comfort me today?</li>
                    <li className="text-gray-700">What promises can I find in this scripture?</li>
                    <li className="text-gray-700">If I truly believed this verse, how would it change my actions?</li>
                    <li className="text-gray-700">What specific words or phrases stand out to me, and why?</li>
                    <li className="text-gray-700">How might I apply this scripture to a current challenge?</li>
                    <li className="text-gray-700">How does this passage connect to other scriptures I know?</li>
                  </ul>
                </Card>
              </div>
              
              <div className="mt-10 p-6 bg-pink-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Monthly Prayer Focus Ideas</h3>
                <p className="text-gray-700 mb-4">
                  Consider dedicating each month to a specific prayer theme. This provides structure and helps broaden your prayer life:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-white p-3 rounded-md shadow-sm">
                    <p className="font-medium">January: New Beginnings</p>
                    <p className="text-sm text-gray-600">Vision for the year ahead</p>
                  </div>
                  <div className="bg-white p-3 rounded-md shadow-sm">
                    <p className="font-medium">February: Relationships</p>
                    <p className="text-sm text-gray-600">Family, friends, community</p>
                  </div>
                  <div className="bg-white p-3 rounded-md shadow-sm">
                    <p className="font-medium">March: Spiritual Growth</p>
                    <p className="text-sm text-gray-600">Disciplines and practices</p>
                  </div>
                  <div className="bg-white p-3 rounded-md shadow-sm">
                    <p className="font-medium">April: Renewal</p>
                    <p className="text-sm text-gray-600">Restoration and rebirth</p>
                  </div>
                  <div className="bg-white p-3 rounded-md shadow-sm">
                    <p className="font-medium">May: Service</p>
                    <p className="text-sm text-gray-600">Helping others and giving back</p>
                  </div>
                  <div className="bg-white p-3 rounded-md shadow-sm">
                    <p className="font-medium">June: Joy & Gratitude</p>
                    <p className="text-sm text-gray-600">Celebrating blessings</p>
                  </div>
                  <div className="bg-white p-3 rounded-md shadow-sm">
                    <p className="font-medium">July: Rest</p>
                    <p className="text-sm text-gray-600">Sabbath and restoration</p>
                  </div>
                  <div className="bg-white p-3 rounded-md shadow-sm">
                    <p className="font-medium">August: Creation</p>
                    <p className="text-sm text-gray-600">Nature and stewardship</p>
                  </div>
                  <div className="bg-white p-3 rounded-md shadow-sm">
                    <p className="font-medium">September: Wisdom</p>
                    <p className="text-sm text-gray-600">Discernment and guidance</p>
                  </div>
                  <div className="bg-white p-3 rounded-md shadow-sm">
                    <p className="font-medium">October: Courage</p>
                    <p className="text-sm text-gray-600">Facing fears with faith</p>
                  </div>
                  <div className="bg-white p-3 rounded-md shadow-sm">
                    <p className="font-medium">November: Thankfulness</p>
                    <p className="text-sm text-gray-600">Cultivating gratitude</p>
                  </div>
                  <div className="bg-white p-3 rounded-md shadow-sm">
                    <p className="font-medium">December: Hope</p>
                    <p className="text-sm text-gray-600">Anticipation and trust</p>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="advanced" className="mt-6">
              <h2 className="text-3xl font-bold mb-8">Advanced Prayer Journaling Techniques</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <PenTool className="h-5 w-5 text-pink-500 mr-2" />
                      Scripture Meditation Journaling
                    </h3>
                    <p className="text-gray-700 mb-4">
                      This technique involves deep engagement with scripture through writing:
                    </p>
                    <ol className="space-y-3 list-decimal pl-5">
                      <li className="text-gray-700">
                        <span className="font-medium">Select a verse or passage</span> that resonates with you or relates to your current season.
                      </li>
                      <li className="text-gray-700">
                        <span className="font-medium">Write it out by hand</span> in your journal, taking time to notice each word.
                      </li>
                      <li className="text-gray-700">
                        <span className="font-medium">Break it down</span> phrase by phrase, reflecting on the meaning of each section.
                      </li>
                      <li className="text-gray-700">
                        <span className="font-medium">Ask questions</span> in your journal: What does this reveal about God? About me? What is God saying through this passage?
                      </li>
                      <li className="text-gray-700">
                        <span className="font-medium">Write a response</span> to God based on what you've discovered.
                      </li>
                      <li className="text-gray-700">
                        <span className="font-medium">Create an application step</span> - one specific way you'll live out this scripture today.
                      </li>
                    </ol>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Prayer Mapping</h3>
                    <p className="text-gray-700 mb-4">
                      Prayer mapping is a visual approach to prayer that helps you see connections between different prayer concerns:
                    </p>
                    <ul className="space-y-3">
                      <li className="text-gray-700">
                        Start with a central prayer focus in the middle of your journal page (e.g., "My Family").
                      </li>
                      <li className="text-gray-700">
                        Draw branches out to specific areas (e.g., "Marriage," "Children," "Extended Family").
                      </li>
                      <li className="text-gray-700">
                        From each branch, add more specific prayer points (e.g., under "Children": "Michael's school decision," "Sarah's health").
                      </li>
                      <li className="text-gray-700">
                        Add scripture verses that relate to each area around the branches.
                      </li>
                      <li className="text-gray-700">
                        Use different colors to represent different types of prayers (thanksgiving, requests, spiritual growth).
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Prayer Calendars</h3>
                    <p className="text-gray-700 mb-4">
                      Create a structured system to ensure you're regularly praying for all the important areas of your life:
                    </p>
                    <div className="bg-white p-5 rounded-lg shadow-sm">
                      <h4 className="font-medium mb-2">Sample Weekly Prayer Calendar</h4>
                      <ul className="space-y-2">
                        <li className="flex justify-between">
                          <span className="font-medium">Monday:</span>
                          <span className="text-gray-600">Family</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="font-medium">Tuesday:</span>
                          <span className="text-gray-600">Friends & Community</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="font-medium">Wednesday:</span>
                          <span className="text-gray-600">Church & Ministry</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="font-medium">Thursday:</span>
                          <span className="text-gray-600">Work & Finances</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="font-medium">Friday:</span>
                          <span className="text-gray-600">World Events & Leaders</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="font-medium">Saturday:</span>
                          <span className="text-gray-600">Personal Growth</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="font-medium">Sunday:</span>
                          <span className="text-gray-600">Praise & Thanksgiving</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Intercessory Prayer Journaling</h3>
                    <p className="text-gray-700 mb-4">
                      Dedicated sections for praying for others can transform your prayer life:
                    </p>
                    <ul className="space-y-3">
                      <li className="text-gray-700">
                        Create a dedicated section in your journal for each person or group you regularly pray for.
                      </li>
                      <li className="text-gray-700">
                        Record specific prayer requests with dates.
                      </li>
                      <li className="text-gray-700">
                        Note any scriptures God brings to mind for each person.
                      </li>
                      <li className="text-gray-700">
                        Leave space to record answers to prayers and dates when they occur.
                      </li>
                      <li className="text-gray-700">
                        Set reminders to follow up with people about their prayer requests.
                      </li>
                    </ul>
                    
                    <div className="mt-6">
                      <Button className="bg-pink-500 hover:bg-pink-600" asChild>
                        <Link href="/journal-finder">
                          Find Your Perfect Journal
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-pink-50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Journal Journey Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white p-6 rounded-lg shadow-sm text-left">
              <div className="text-pink-500 text-4xl font-serif mb-4">"</div>
              <p className="text-gray-700 mb-6">
                My prayer journal has transformed my spiritual life. I used to struggle with consistency in prayer, 
                but writing in my journal daily has helped me develop a meaningful practice. I can see God's 
                faithfulness as I look back at answered prayers.
              </p>
              <Separator className="mb-4" />
              <p className="font-medium">Sarah K.</p>
              <p className="text-sm text-gray-500">Journaling for 2 years</p>
            </Card>
            
            <Card className="bg-white p-6 rounded-lg shadow-sm text-left">
              <div className="text-pink-500 text-4xl font-serif mb-4">"</div>
              <p className="text-gray-700 mb-6">
                The structure of Muno Journey's prayer journals has been perfect for me. I never knew what to write 
                before, but the prompts and scripture references guide me each day. My relationship with God has 
                deepened significantly through this practice.
              </p>
              <Separator className="mb-4" />
              <p className="font-medium">David T.</p>
              <p className="text-sm text-gray-500">Journaling for 8 months</p>
            </Card>
            
            <Card className="bg-white p-6 rounded-lg shadow-sm text-left">
              <div className="text-pink-500 text-4xl font-serif mb-4">"</div>
              <p className="text-gray-700 mb-6">
                I bought prayer journals for my whole family, including ones designed for my kids. It's become a 
                beautiful shared practice, and we often discuss what God is teaching us through our journaling. 
                I'm amazed at the spiritual growth I've seen in all of us.
              </p>
              <Separator className="mb-4" />
              <p className="font-medium">Rachel M.</p>
              <p className="text-sm text-gray-500">Journaling with family for 1 year</p>
            </Card>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-pink-500 to-purple-600 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Begin Your Journal Journey Today</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Transform your prayer life with a beautiful, thoughtfully designed journal 
            from Muno Journey. Find the perfect one for your spiritual practice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-pink-500 hover:bg-gray-100" asChild>
              <Link href="/products?category=daily-journals">
                Shop Journals
              </Link>
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10" asChild>
              <Link href="/journal-finder">
                Find Your Perfect Match
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}