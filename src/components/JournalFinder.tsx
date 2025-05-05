import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, Book, Heart, Calendar, User, FileText, Search } from "lucide-react";

// Define types for our options
type JournalType = "daily" | "weekly" | "premium" | "prayer" | "devotional" | "";
type ForWhom = "adults" | "teens" | "kids" | "couples" | "family" | "";
type JournalFeature = "scripture-references" | "gratitude-section" | "reflection-prompts" | "goal-setting" | "monthly-themes" | "prayer-tracking";

const journalTypes = [
  { id: "daily" as const, label: "Daily Journal", icon: <Calendar className="h-5 w-5" /> },
  { id: "weekly" as const, label: "Weekly Journal", icon: <Calendar className="h-5 w-5" /> },
  { id: "premium" as const, label: "Premium Journal", icon: <Book className="h-5 w-5" /> },
  { id: "prayer" as const, label: "Prayer Journal", icon: <Heart className="h-5 w-5" /> },
  { id: "devotional" as const, label: "Devotional Journal", icon: <FileText className="h-5 w-5" /> },
];

const forWhomOptions = [
  { id: "adults" as const, label: "For Adults", icon: <User className="h-5 w-5" /> },
  { id: "teens" as const, label: "For Teens", icon: <User className="h-5 w-5" /> },
  { id: "kids" as const, label: "For Kids", icon: <User className="h-5 w-5" /> },
  { id: "couples" as const, label: "For Couples", icon: <User className="h-5 w-5" /> },
  { id: "family" as const, label: "For Family", icon: <User className="h-5 w-5" /> },
];

const journalFeatures = [
  { id: "scripture-references" as const, label: "Scripture References" },
  { id: "gratitude-section" as const, label: "Gratitude Section" },
  { id: "reflection-prompts" as const, label: "Reflection Prompts" },
  { id: "goal-setting" as const, label: "Goal Setting" },
  { id: "monthly-themes" as const, label: "Monthly Themes" },
  { id: "prayer-tracking" as const, label: "Prayer Tracking" },
];

export default function JournalFinder() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [selectedJournalType, setSelectedJournalType] = useState<JournalType>("");
  const [selectedForWhom, setSelectedForWhom] = useState<ForWhom>("");
  const [selectedFeatures, setSelectedFeatures] = useState<JournalFeature[]>([]);
  
  // Toggle feature selection
  const toggleFeature = (id: JournalFeature) => {
    setSelectedFeatures(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };
  
  // Handle next step
  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Build the search query
      const searchParams = new URLSearchParams();
      
      if (selectedJournalType) {
        searchParams.append("type", selectedJournalType);
      }
      
      if (selectedForWhom) {
        searchParams.append("for", selectedForWhom);
      }
      
      if (selectedFeatures.length > 0) {
        searchParams.append("features", selectedFeatures.join(","));
      }
      
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
        return selectedJournalType !== "";
      case 2:
        return selectedForWhom !== "";
      case 3:
        return true; // Features are optional
      default:
        return false;
    }
  };
  
  return (
    <Card className="shadow-md border-0">
      <CardContent className="p-6 md:p-8">
        {/* Step indicator */}
        <div className="flex items-center justify-between mb-10">
          {[1, 2, 3].map((i) => (
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
              {i < 3 && (
                <div 
                  className={`h-1 w-20 md:w-36 ${
                    i < step ? "bg-pink-300" : "bg-gray-200"
                  }`}
                ></div>
              )}
            </div>
          ))}
        </div>
        
        {/* Step content */}
        <div className="min-h-[320px]">
          {step === 1 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-medium">What type of journal?</h2>
              <p className="text-gray-500">Select the type of journal you're looking for</p>
              
              <RadioGroup 
                value={selectedJournalType} 
                onValueChange={(value) => setSelectedJournalType(value as JournalType)}
                className="grid grid-cols-1 sm:grid-cols-2 gap-3"
              >
                {journalTypes.map((journal) => (
                  <div key={journal.id} className="col-span-1">
                    <RadioGroupItem 
                      value={journal.id} 
                      id={`journal-${journal.id}`}
                      className="peer sr-only"
                    />
                    <Label
                      htmlFor={`journal-${journal.id}`}
                      className="flex items-center gap-2 border rounded-lg p-3 
                        cursor-pointer hover:bg-gray-50 peer-data-[state=checked]:border-pink-500 
                        peer-data-[state=checked]:bg-pink-50"
                    >
                      {journal.icon}
                      <span>{journal.label}</span>
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          )}
          
          {step === 2 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-medium">Who is it for?</h2>
              <p className="text-gray-500">Select who will be using the journal</p>
              
              <RadioGroup 
                value={selectedForWhom} 
                onValueChange={(value) => setSelectedForWhom(value as ForWhom)}
                className="grid grid-cols-1 sm:grid-cols-2 gap-3"
              >
                {forWhomOptions.map((option) => (
                  <div key={option.id} className="col-span-1">
                    <RadioGroupItem 
                      value={option.id} 
                      id={`for-${option.id}`}
                      className="peer sr-only"
                    />
                    <Label
                      htmlFor={`for-${option.id}`}
                      className="flex items-center gap-2 border rounded-lg p-3 
                        cursor-pointer hover:bg-gray-50 peer-data-[state=checked]:border-pink-500 
                        peer-data-[state=checked]:bg-pink-50"
                    >
                      {option.icon}
                      <span>{option.label}</span>
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          )}
          
          {step === 3 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-medium">Preferred Features</h2>
              <p className="text-gray-500">Select the features you'd like (optional)</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {journalFeatures.map((feature) => (
                  <div key={feature.id} className="flex items-center space-x-2">
                    <Checkbox 
                      id={`feature-${feature.id}`} 
                      checked={selectedFeatures.includes(feature.id as JournalFeature)}
                      onCheckedChange={() => toggleFeature(feature.id as JournalFeature)}
                    />
                    <Label 
                      htmlFor={`feature-${feature.id}`}
                      className="cursor-pointer"
                    >
                      {feature.label}
                    </Label>
                  </div>
                ))}
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
            {step < 3 ? (
              <>
                Next
                <ChevronRight className="ml-2 h-4 w-4" />
              </>
            ) : (
              <>
                Find Journals
                <Search className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}