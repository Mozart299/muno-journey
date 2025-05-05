// components/GiftFinderPanel.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Gift, Search, Heart, DollarSign, CalendarDays, User, ChevronRight, ArrowRight } from "lucide-react";

// Questions and options
const occasions = [
  { id: "birthday", label: "Birthday", icon: <CalendarDays className="h-5 w-5" /> },
  { id: "anniversary", label: "Anniversary", icon: <CalendarDays className="h-5 w-5" /> },
  { id: "wedding", label: "Wedding", icon: <Gift className="h-5 w-5" /> },
  { id: "graduation", label: "Graduation", icon: <Gift className="h-5 w-5" /> },
  { id: "housewarming", label: "Housewarming", icon: <Gift className="h-5 w-5" /> },
  { id: "thank-you", label: "Thank You", icon: <Heart className="h-5 w-5" /> },
  { id: "congratulations", label: "Congratulations", icon: <Gift className="h-5 w-5" /> },
  { id: "other", label: "Other", icon: <Gift className="h-5 w-5" /> },
];

const recipients = [
  { id: "for-her", label: "For Her", icon: <User className="h-5 w-5" /> },
  { id: "for-him", label: "For Him", icon: <User className="h-5 w-5" /> },
  { id: "for-couples", label: "For Couples", icon: <User className="h-5 w-5" /> },
  { id: "for-kids", label: "For Kids", icon: <User className="h-5 w-5" /> },
  { id: "for-friends", label: "For Friends", icon: <User className="h-5 w-5" /> },
  { id: "for-family", label: "For Family", icon: <User className="h-5 w-5" /> },
];

const interests = [
  { id: "reading", label: "Reading" },
  { id: "cooking", label: "Cooking" },
  { id: "self-care", label: "Self-care" },
  { id: "home-decor", label: "Home Decor" },
  { id: "travel", label: "Travel" },
  { id: "faith", label: "Faith & Spirituality" },
  { id: "writing", label: "Writing & Journaling" },
  { id: "art", label: "Art & Creativity" },
  { id: "coffee", label: "Coffee & Tea" },
];

interface GiftFinderPanelProps {
  onClose: () => void;
}

export default function GiftFinderPanel({ onClose }: GiftFinderPanelProps) {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [selectedOccasion, setSelectedOccasion] = useState<string>("");
  const [selectedRecipient, setSelectedRecipient] = useState<string>("");
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<number[]>([100000]);
  const [customOccasion, setCustomOccasion] = useState("");
  
  // Toggle interest selection
  const toggleInterest = (id: string) => {
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
        searchParams.append("occasion", selectedOccasion);
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
      onClose();
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
        return selectedOccasion !== "" || (selectedOccasion === "other" && customOccasion !== "");
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
  
  return (
    <div className="h-full flex flex-col">
      <div className="flex-grow overflow-auto py-6">
        {/* Step indicator */}
        <div className="flex items-center justify-between mb-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center">
              <div 
                className={`rounded-full h-8 w-8 flex items-center justify-center ${
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
                  className={`h-1 w-12 ${
                    i < step ? "bg-pink-300" : "bg-gray-200"
                  }`}
                ></div>
              )}
            </div>
          ))}
        </div>
        
        {/* Step content */}
        <div>
          {step === 1 && (
            <div className="space-y-6">
              <h3 className="text-xl font-medium">What's the occasion?</h3>
              <p className="text-gray-500">Select the occasion you're shopping for</p>
              
              <RadioGroup 
                value={selectedOccasion} 
                onValueChange={setSelectedOccasion}
                className="grid grid-cols-2 gap-3"
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
              <h3 className="text-xl font-medium">Who's it for?</h3>
              <p className="text-gray-500">Select who you're shopping for</p>
              
              <RadioGroup 
                value={selectedRecipient} 
                onValueChange={setSelectedRecipient}
                className="grid grid-cols-2 gap-3"
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
              <h3 className="text-xl font-medium">What are their interests?</h3>
              <p className="text-gray-500">Select all that apply</p>
              
              <div className="grid grid-cols-2 gap-3">
                {interests.map((interest) => (
                  <div key={interest.id} className="flex items-center space-x-2">
                    <Checkbox 
                      id={`interest-${interest.id}`} 
                      checked={selectedInterests.includes(interest.id)}
                      onCheckedChange={() => toggleInterest(interest.id)}
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
              <h3 className="text-xl font-medium">What's your budget?</h3>
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
                  <span className="text-sm text-gray-500">UGX 0</span>
                  <span className="text-sm text-gray-500">UGX 300,000</span>
                </div>
                
                <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                  <p className="text-center font-medium">Your maximum budget:</p>
                  <p className="text-center text-2xl font-bold text-pink-500">
                    UGX {priceRange[0].toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Navigation buttons */}
      <div className="mt-auto pt-4 border-t flex justify-between">
        {step > 1 ? (
          <Button variant="outline" onClick={handleBack}>
            Back
          </Button>
        ) : (
          <Button variant="outline" onClick={onClose}>
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
    </div>
  );
}