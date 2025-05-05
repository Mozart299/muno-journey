import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function JournalFAQSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <p className="text-gray-600 text-center mb-12">
            Find answers to common questions about our prayer journals and how to get the most out of them
          </p>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white rounded-lg shadow-sm">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <h3 className="text-lg font-medium text-left">How do I choose the right journal for me?</h3>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-0">
                <p className="text-gray-700">
                  The best journal depends on your personal spiritual goals and habits. Our Daily Journals are perfect 
                  for those who want to establish a consistent daily prayer routine. Weekly Journals provide a more 
                  spacious format for deeper reflection with less frequency. Premium Journals offer additional features 
                  like scripture indexes and guided prayer sections. For personalized recommendations, try our Journal 
                  Finder tool, which will suggest the perfect match based on your preferences.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="bg-white rounded-lg shadow-sm">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <h3 className="text-lg font-medium text-left">What's included in the Premium Daily Prayer Journal?</h3>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-0">
                <p className="text-gray-700">
                  Our Premium Daily Prayer Journal includes daily scripture verses, guided prayer sections, gratitude 
                  prompts, reflection questions, and space for personal notes. It features high-quality paper, a 
                  sturdy hardcover binding, two ribbon bookmarks, and a pocket for storing loose items. The journal 
                  covers 3 months of daily entries, making it perfect for establishing a consistent prayer practice.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="bg-white rounded-lg shadow-sm">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <h3 className="text-lg font-medium text-left">How are the kids' and teens' journals different?</h3>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-0">
                <p className="text-gray-700">
                  Our Kids Prayer Journal is designed with colorful illustrations, simpler prompts, and space for drawing 
                  prayers. It helps children ages 6-12 develop a prayer habit in an engaging way. The Teens Prayer Journal 
                  features age-appropriate prompts, questions that encourage deeper thinking, scripture exploration sections, 
                  and space for personal reflections. It's designed to resonate with teenagers while helping them develop 
                  meaningful spiritual practices.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4" className="bg-white rounded-lg shadow-sm">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <h3 className="text-lg font-medium text-left">Can I personalize my journal?</h3>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-0">
                <p className="text-gray-700">
                  Yes! We offer personalization options for most of our journals. You can add a name, initials, or a short 
                  message to the cover or inside page. Personalization makes your journal unique and also makes it a 
                  thoughtful gift for friends or family members. Simply select the personalization option when adding the 
                  journal to your cart and follow the instructions to specify your customization details.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5" className="bg-white rounded-lg shadow-sm">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <h3 className="text-lg font-medium text-left">How long does each journal last?</h3>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-0">
                <p className="text-gray-700">
                  Our Daily Prayer Journals typically last for 3 months, with one page per day. Weekly Prayer Journals are 
                  designed to last 6 months, with more space for each entry. Premium journals vary in duration depending on 
                  the specific model, but most cover 3-6 months of regular use. The duration is always clearly indicated in 
                  the product description so you can choose the option that best fits your needs.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-6" className="bg-white rounded-lg shadow-sm">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <h3 className="text-lg font-medium text-left">Do you offer journal subscriptions?</h3>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-0">
                <p className="text-gray-700">
                  Yes, we offer subscription options for our most popular journals. You can choose to receive a new journal 
                  every 3 or 6 months, depending on the journal type. Subscribers enjoy special benefits including a 10% 
                  discount on each journal, free shipping, and occasional surprise gifts. Subscriptions can be paused or 
                  canceled at any time, making it a flexible way to maintain your journaling practice.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}