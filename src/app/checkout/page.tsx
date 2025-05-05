// app/checkout/page.tsx
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { ChevronDown, Truck, Home } from "lucide-react";
import CheckoutSummary from "@/components/CheckoutSummary";

type FormData = {
  email: string;
  phoneNumber: string;
  deliveryMethod: "delivery" | "pickup";
  country: string;
  firstName: string;
  lastName: string;
  address: string;
  apartment?: string;
  city: string;
  specialInstructions?: string;
  newsletter: boolean;
};

export default function Checkout() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<FormData>({
    defaultValues: {
      deliveryMethod: "delivery",
      country: "Uganda",
      newsletter: false
    }
  });
  
  const [loading, setLoading] = useState(false);
  const deliveryMethod = watch("deliveryMethod");
  
  const onSubmit = async (data: FormData) => {
    setLoading(true);
    
    // Simulate API call
    console.log("Form data:", data);
    
    // This would be an API call in a real app
    setTimeout(() => {
      setLoading(false);
      // Redirect to success page
      window.location.href = "/checkout/success";
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-pink-50/20">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">Muno Journey</h1>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Checkout Form */}
          <div className="lg:w-2/3">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              {/* Contact Information */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-medium">Contact</h2>
                  <Button variant="link" className="text-blue-600 p-0">Log in</Button>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="email">Email or mobile phone number</Label>
                    <Input 
                      id="email" 
                      {...register("email", { required: "Email is required" })}
                      className="mt-1"
                      placeholder="example@email.com"
                    />
                    {errors.email && (
                      <span className="text-red-500 text-sm">{errors.email.message}</span>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Checkbox id="newsletter" {...register("newsletter")} />
                    <Label htmlFor="newsletter" className="text-sm text-gray-600">
                      Email me with news and offers
                    </Label>
                  </div>
                </div>
              </div>
              
              {/* Delivery Method */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-medium mb-6">Delivery</h2>
                
                <RadioGroup 
                  defaultValue="delivery" 
                  {...register("deliveryMethod")}
                  className="space-y-3"
                >
                  <div className="flex items-center justify-between border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="delivery" id="delivery" />
                      <Label htmlFor="delivery" className="cursor-pointer">Deliver to me</Label>
                    </div>
                    <Truck className="w-5 h-5 text-gray-500" />
                  </div>
                  
                  <div className="flex items-center justify-between border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="pickup" id="pickup" />
                      <Label htmlFor="pickup" className="cursor-pointer">Pickup in store</Label>
                    </div>
                    <Home className="w-5 h-5 text-gray-500" />
                  </div>
                </RadioGroup>
              </div>
              
              {/* Shipping Information */}
              {deliveryMethod === "delivery" && (
                <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
                  <div>
                    <Label htmlFor="country">Country/Region</Label>
                    <Select defaultValue="Uganda">
                      <SelectTrigger>
                        <SelectValue placeholder="Select country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Uganda">Uganda</SelectItem>
                        <SelectItem value="Kenya">Kenya</SelectItem>
                        <SelectItem value="Tanzania">Tanzania</SelectItem>
                        <SelectItem value="Rwanda">Rwanda</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First name (optional)</Label>
                      <Input 
                        id="firstName" 
                        {...register("firstName")}
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="lastName">Last name</Label>
                      <Input 
                        id="lastName" 
                        {...register("lastName", { required: "Last name is required" })}
                        className="mt-1"
                      />
                      {errors.lastName && (
                        <span className="text-red-500 text-sm">{errors.lastName.message}</span>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="address">Address</Label>
                    <Input 
                      id="address" 
                      {...register("address", { required: "Address is required" })}
                      className="mt-1"
                    />
                    {errors.address && (
                      <span className="text-red-500 text-sm">{errors.address.message}</span>
                    )}
                  </div>
                  
                  <div>
                    <Label htmlFor="apartment">Apartment, suite, etc. (optional)</Label>
                    <Input 
                      id="apartment" 
                      {...register("apartment")}
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="city">City</Label>
                    <Input 
                      id="city" 
                      {...register("city", { required: "City is required" })}
                      className="mt-1"
                    />
                    {errors.city && (
                      <span className="text-red-500 text-sm">{errors.city.message}</span>
                    )}
                  </div>
                  
                  <div>
                    <Label htmlFor="specialInstructions">Special delivery instructions (optional)</Label>
                    <Textarea 
                      id="specialInstructions"
                      {...register("specialInstructions")}
                      className="mt-1"
                      placeholder="Landmark, delivery preferences, etc."
                    />
                  </div>
                </div>
              )}
              
              {/* Store Pickup Information */}
              {deliveryMethod === "pickup" && (
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-medium mb-4">Available Pickup Locations:</h3>
                  
                  <RadioGroup defaultValue="main-store">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
                        <div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="main-store" id="main-store" />
                            <Label htmlFor="main-store" className="cursor-pointer font-medium">Muno Journey Main Store</Label>
                          </div>
                          <p className="text-sm text-gray-500 ml-6">Kampala Road, City Center</p>
                        </div>
                        <span className="text-green-600 text-sm">Available Now</span>
                      </div>
                      
                      <div className="flex items-center justify-between border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
                        <div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="mall-branch" id="mall-branch" />
                            <Label htmlFor="mall-branch" className="cursor-pointer font-medium">Acacia Mall Branch</Label>
                          </div>
                          <p className="text-sm text-gray-500 ml-6">Kisementi, Kampala</p>
                        </div>
                        <span className="text-green-600 text-sm">Available Now</span>
                      </div>
                    </div>
                  </RadioGroup>
                </div>
              )}
              
              <div className="lg:hidden">
                <CheckoutSummary />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
                disabled={loading}
              >
                {loading ? "Processing..." : "Complete Order"}
              </Button>
            </form>
          </div>
          
          {/* Order Summary */}
          <div className="lg:w-1/3 hidden lg:block">
            <CheckoutSummary />
          </div>
        </div>
      </main>
    </div>
  );
}