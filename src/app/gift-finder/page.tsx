"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Gift, Search, Heart, CalendarDays, User, ChevronRight } from "lucide-react";

// Define types for our options
type OccasionId = "birthday" | "anniversary" | "wedding" | "graduation" | "housewarming" | "thank-you" | "congratulations" | "other" | "";
type RecipientId = "for-her" | "for-him" | "for-couples" | "for-kids" | "for-friends" | "for-family" | "";
type InterestId = "reading" | "cooking" | "self-care" | "home-decor" | "travel" | "faith" | "writing" | "art" | "coffee";

// Questions and options
const occasions = [
  { id: "birthday" as const, label: "Birthday", icon: <CalendarDays className="h-5 w-5" /> },
  { id: "anniversary" as const, label: "Anniversary", icon: <CalendarDays className="h-5 w-5" /> },
  { id: "wedding" as const, label: "Wedding", icon: <Gift className="h-5 w-5" /> },
  { id: "graduation" as const, label: "Graduation", icon: <Gift className="h-5 w-5" /> },
  { id: "housewarming" as const, label: "Housewarming", icon: <Gift className="h-5 w-5" /> },
  { id: "thank-you" as const, label: "Thank You", icon: <Heart className="h-5 w-5" /> },
  { id: "congratulations" as const, label: "Congratulations", icon: <Gift className="h-5 w-5" /> },
  { id: "other" as const, label: "Other", icon: <Gift className="h-5 w-5" /> },
];

const recipients = [
  { id: "for-her" as const, label: "For Her", icon: <User className="h-5 w-5" /> },
  { id: "for-him" as const, label: "For Him", icon: <User className="h-5 w-5" /> },
  { id: "for-couples" as const, label: "For Couples", icon: <User className="h-5 w-5" /> },
  { id: "for-kids" as const, label: "For Kids", icon: <User className="h-5 w-5" /> },
  { id: "for-friends" as const, label: "For Friends", icon: <User className="h-5 w-5" /> },
  { id: "for-family" as const, label: "For Family", icon: <User className="h-5 w-5" /> },
];

const interests = [
  { id: "reading" as const, label: "Reading" },
  { id: "cooking" as const, label: "Cooking" },
  { id: "self-care" as const, label: "Self-care" },
  { id: "home-decor" as const, label: "Home Decor" },
  { id: "travel" as const, label: "Travel" },
  { id: "faith" as const, label: "Faith & Spirituality" },
  { id: "writing" as const, label: "Writing & Journaling" },
  { id: "art" as const, label: "Art & Creativity" },
  { id: "coffee" as const, label: "Coffee & Tea" },
];

export default function GiftFinderPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [selectedOccasion, setSelectedOccasion] = useState<OccasionId>("");
  const [selectedRecipient, setSelectedRecipient] = useState<RecipientId>("");
  const [selectedInterests, setSelectedInterests] = useState<InterestId[]>([]);
  const [priceRange, setPriceRange] = useState<number[]>([100000]);
  const [customOccasion, setCustomOccasion] = useState("");
  
  // Toggle interest selection
  const toggleInterest = (id: InterestId) => {
    setSelectedInterests(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };
  
  // Handle next step
  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
    } else {
      // Build the search query
      const searchParams = new URLSearchParams();
      
      if (selectedOccasion) {
        const occasionValue = selectedOccasion === "other" ? customOccasion : selectedOccasion;
        searchParams.append("occasion", occasionValue);
      }
      
      if (selectedRecipient) {
        searchParams.append("recipient", selectedRecipient);
      }
      
      if (selectedInterests.length > 0) {
        searchParams.append("interests", selectedInterests.join(","));
      }
      
      searchParams.append("priceMax", priceRange[0].toString());
      
      // Navigate to products page with filters
      router.push(`/products?${searchParams.toString()}`);
    }
  };
  
  // Handle back step
  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };
  
  // Check if can proceed
  const canProceed = () => {
    switch (step) {
      case 1:
        return selectedOccasion !== "" && (selectedOccasion !== "other" || customOccasion !== "");
      case 2:
        return selectedRecipient !== "";
      case 3:
        return selectedInterests.length > 0;
      case 4:
        return true;
      default:
        return false;
    }
  };

  // Format price for display
  const formatPrice = (price: number): string => {
    return `UGX ${price.toLocaleString()}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Gift Finder</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Answer a few simple questions and we'll help you find the perfect gift
              for any occasion. Our Gift Finder makes shopping stress-free!
            </p>
          </div>
          
          <Card className="shadow-lg border-0">
            <CardContent className="p-6 md:p-8">
              {/* Step indicator */}
              <div className="flex items-center justify-between mb-10">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex items-center">
                    <div 
                      className={`rounded-full h-10 w-10 flex items-center justify-center ${
                        i === step 
                          ? "bg-pink-500 text-white" 
                          : i < step 
                            ? "bg-pink-100 text-pink-500" 
                            : "bg-gray-100 text-gray-400"
                      }`}
                    >
                      {i < step ? "✓" : i}
                    </div>
                    {i < 4 && (
                      <div 
                        className={`h-1 w-12 sm:w-20 md:w-32 ${
                          i < step ? "bg-pink-300" : "bg-gray-200"
                        }`}
                      ></div>
                    )}
                  </div>
                ))}
              </div>
              
              {/* Step content */}
              <div className="min-h-[400px]">
                {step === 1 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-medium">What's the occasion?</h2>
                    <p className="text-gray-500">Select the occasion you're shopping for</p>
                    
                    <RadioGroup 
                      value={selectedOccasion} 
                      onValueChange={(value) => setSelectedOccasion(value as OccasionId)}
                      className="grid grid-cols-2 md:grid-cols-3 gap-3"
                    >
                      {occasions.map((occasion) => (
                        <div key={occasion.id} className="col-span-1">
                          <RadioGroupItem 
                            value={occasion.id} 
                            id={`occasion-${occasion.id}`}
                            className="peer sr-only"
                          />
                          <Label
                            htmlFor={`occasion-${occasion.id}`}
                            className="flex items-center gap-2 border rounded-lg p-3 
                              cursor-pointer hover:bg-gray-50 peer-data-[state=checked]:border-pink-500 
                              peer-data-[state=checked]:bg-pink-50"
                          >
                            {occasion.icon}
                            <span>{occasion.label}</span>
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                    
                    {selectedOccasion === "other" && (
                      <div>
                        <Label htmlFor="custom-occasion">Please specify</Label>
                        <Input 
                          id="custom-occasion"
                          value={customOccasion}
                          onChange={(e) => setCustomOccasion(e.target.value)}
                          placeholder="Enter occasion"
                          className="mt-1"
                        />
                      </div>
                    )}
                  </div>
                )}
                
                {step === 2 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-medium">Who's it for?</h2>
                    <p className="text-gray-500">Select who you're shopping for</p>
                    
                    <RadioGroup 
                      value={selectedRecipient} 
                      onValueChange={(value) => setSelectedRecipient(value as RecipientId)}
                      className="grid grid-cols-2 md:grid-cols-3 gap-3"
                    >
                      {recipients.map((recipient) => (
                        <div key={recipient.id} className="col-span-1">
                          <RadioGroupItem 
                            value={recipient.id} 
                            id={`recipient-${recipient.id}`}
                            className="peer sr-only"
                          />
                          <Label
                            htmlFor={`recipient-${recipient.id}`}
                            className="flex items-center gap-2 border rounded-lg p-3 
                              cursor-pointer hover:bg-gray-50 peer-data-[state=checked]:border-pink-500 
                              peer-data-[state=checked]:bg-pink-50"
                          >
                            {recipient.icon}
                            <span>{recipient.label}</span>
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                )}
                
                {step === 3 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-medium">What are their interests?</h2>
                    <p className="text-gray-500">Select all that apply</p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {interests.map((interest) => (
                        <div key={interest.id} className="flex items-center space-x-2">
                          <Checkbox 
                            id={`interest-${interest.id}`} 
                            checked={selectedInterests.includes(interest.id as InterestId)}
                            onCheckedChange={() => toggleInterest(interest.id as InterestId)}
                          />
                          <Label 
                            htmlFor={`interest-${interest.id}`}
                            className="cursor-pointer"
                          >
                            {interest.label}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {step === 4 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-medium">What's your budget?</h2>
                    <p className="text-gray-500">Slide to set your maximum budget</p>
                    
                    <div className="pt-6 px-2">
                      <Slider
                        defaultValue={[100000]}
                        max={300000}
                        step={5000}
                        value={priceRange}
                        onValueChange={(value) => setPriceRange(value)}
                      />
                      
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-sm text-gray-500">{formatPrice(0)}</span>
                        <span className="text-sm text-gray-500">{formatPrice(300000)}</span>
                      </div>
                      
                      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                        <p className="text-center font-medium">Your maximum budget:</p>
                        <p className="text-center text-2xl font-bold text-pink-500">
                          {formatPrice(priceRange[0])}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Navigation buttons */}
              <div className="mt-10 flex justify-between">
                {step > 1 ? (
                  <Button variant="outline" onClick={handleBack}>
                    Back
                  </Button>
                ) : (
                  <Button variant="outline" onClick={() => router.push("/")}>
                    Cancel
                  </Button>
                )}
                
                <Button 
                  onClick={handleNext}
                  disabled={!canProceed()}
                  className="bg-pink-500 hover:bg-pink-600"
                >
                  {step < 4 ? (
                    <>
                      Next
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </>
                  ) : (
                    <>
                      Find Gifts
                      <Search className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}