import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Sparkles } from "lucide-react";

export default function JournalSubscriptionSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Journal Subscription Plans</h2>
          <p className="text-gray-600">
            Never run out of journal space again. Subscribe to receive fresh journals 
            delivered right to your door on your schedule. Save money and stay consistent 
            with your spiritual practice.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quarterly Plan */}
          <Card className="border border-gray-200 hover:border-pink-200 transition-all duration-300">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl">Quarterly Delivery</CardTitle>
              <CardDescription>Perfect for daily journalers</CardDescription>
              <div className="mt-2">
                <div className="text-3xl font-bold">UGX 135,000</div>
                <div className="text-sm text-gray-500">per quarter (3 months)</div>
              </div>
              <Badge variant="outline" className="mt-2 bg-green-50 text-green-700 border-green-200">
                Save 10%
              </Badge>
            </CardHeader>
            <CardContent className="pb-4">
              <p className="text-sm text-gray-600 mb-4">
                Receive a new prayer journal every 3 months, perfectly timed for when you'll need it.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-pink-500 mr-2 shrink-0" />
                  <span>One premium journal every 3 months</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-pink-500 mr-2 shrink-0" />
                  <span>10% discount on regular pricing</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-pink-500 mr-2 shrink-0" />
                  <span>Free shipping on all deliveries</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-pink-500 mr-2 shrink-0" />
                  <span>Surprise bonus items 2x per year</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-pink-500 mr-2 shrink-0" />
                  <span>Cancel or pause anytime</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-pink-500 hover:bg-pink-600" asChild>
                <Link href="/subscription/quarterly">
                  Subscribe Now
                </Link>
              </Button>
            </CardFooter>
          </Card>
          
          {/* Bi-Annual Plan */}
          <Card className="border-2 border-pink-500 shadow-lg relative">
            <div className="absolute -top-4 left-0 right-0 flex justify-center">
              <Badge className="bg-pink-500 text-white">
                <Sparkles className="h-3.5 w-3.5 mr-1" />
                Most Popular
              </Badge>
            </div>
            <CardHeader className="pb-4">
              <CardTitle className="text-xl">Bi-Annual Delivery</CardTitle>
              <CardDescription>Best value for most journalers</CardDescription>
              <div className="mt-2">
                <div className="text-3xl font-bold">UGX 255,000</div>
                <div className="text-sm text-gray-500">per 6 months</div>
              </div>
              <Badge variant="outline" className="mt-2 bg-green-50 text-green-700 border-green-200">
                Save 15%
              </Badge>
            </CardHeader>
            <CardContent className="pb-4">
              <p className="text-sm text-gray-600 mb-4">
                Perfect for weekly journalers or those who want to try different journal styles.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-pink-500 mr-2 shrink-0" />
                  <span>Two premium journals every 6 months</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-pink-500 mr-2 shrink-0" />
                  <span>15% discount on regular pricing</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-pink-500 mr-2 shrink-0" />
                  <span>Free shipping on all deliveries</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-pink-500 mr-2 shrink-0" />
                  <span>Journal personalization option</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-pink-500 mr-2 shrink-0" />
                  <span>Surprise bonus items with each delivery</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-pink-500 mr-2 shrink-0" />
                  <span>Cancel or pause anytime</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-pink-500 hover:bg-pink-600" asChild>
                <Link href="/subscription/biannual">
                  Subscribe Now
                </Link>
              </Button>
            </CardFooter>
          </Card>
          
          {/* Annual Plan */}
          <Card className="border border-gray-200 hover:border-pink-200 transition-all duration-300">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl">Annual Delivery</CardTitle>
              <CardDescription>Biggest savings for dedicated journalers</CardDescription>
              <div className="mt-2">
                <div className="text-3xl font-bold">UGX 480,000</div>
                <div className="text-sm text-gray-500">per year</div>
              </div>
              <Badge variant="outline" className="mt-2 bg-green-50 text-green-700 border-green-200">
                Save 20%
              </Badge>
            </CardHeader>
            <CardContent className="pb-4">
              <p className="text-sm text-gray-600 mb-4">
                Our best value plan for dedicated journalers who want variety and premium features.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-pink-500 mr-2 shrink-0" />
                  <span>Four premium journals per year</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-pink-500 mr-2 shrink-0" />
                  <span>20% discount on regular pricing</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-pink-500 mr-2 shrink-0" />
                  <span>Free shipping on all deliveries</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-pink-500 mr-2 shrink-0" />
                  <span>Free journal personalization</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-pink-500 mr-2 shrink-0" />
                  <span>Exclusive seasonal journal designs</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-pink-500 mr-2 shrink-0" />
                  <span>Premium journal accessories included</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-pink-500 mr-2 shrink-0" />
                  <span>Cancel or pause anytime</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-pink-500 hover:bg-pink-600" asChild>
                <Link href="/subscription/annual">
                  Subscribe Now
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
        
        <div className="mt-12 bg-gray-50 p-6 rounded-lg max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold mb-4">Subscription FAQ</h3>
          <div className="space-y-4">
            <div>
              <p className="font-medium">Can I change my journal type with each delivery?</p>
              <p className="text-gray-600 text-sm">
                Yes! You can customize each delivery by logging into your account up to 10 days before your next shipment.
              </p>
            </div>
            <div>
              <p className="font-medium">How does billing work?</p>
              <p className="text-gray-600 text-sm">
                Your subscription will be billed at the beginning of each period (quarterly, bi-annually, or annually). 
                You can cancel anytime before your next billing cycle.
              </p>
            </div>
            <div>
              <p className="font-medium">Can I pause my subscription?</p>
              <p className="text-gray-600 text-sm">
                Absolutely! You can pause your subscription for up to 3 months and resume when you're ready.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}