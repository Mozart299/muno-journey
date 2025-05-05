// components/TestimonialCard.tsx
import { Card, CardContent } from "@/components/ui/card";
import { StarIcon } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  location?: string;
  rating?: number;
  image?: string;
}

export default function TestimonialCard({
  quote,
  author,
  location,
  rating = 5,
  image,
}: TestimonialCardProps) {
  return (
    <Card className="bg-white border-pink-100 shadow-sm">
      <CardContent className="p-6">
        {/* Top section with rating */}
        <div className="flex justify-between items-start mb-4">
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon
                key={i}
                className={`h-5 w-5 ${
                  i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-200"
                }`}
              />
            ))}
          </div>
          <div className="text-pink-500 text-2xl font-serif">"</div>
        </div>
        
        {/* Quote */}
        <div className="mb-6">
          <p className="text-gray-600 italic">{quote}</p>
        </div>
        
        {/* Author info */}
        <div className="flex items-center">
          {image ? (
            <div className="mr-3 h-10 w-10 rounded-full overflow-hidden">
              <img
                src={image}
                alt={author}
                className="h-full w-full object-cover"
              />
            </div>
          ) : (
            <div className="mr-3 h-10 w-10 rounded-full bg-pink-100 flex items-center justify-center">
              <span className="text-pink-500 font-medium">
                {author.split(" ").map(name => name[0]).join("")}
              </span>
            </div>
          )}
          
          <div>
            <p className="font-medium">{author}</p>
            {location && <p className="text-gray-500 text-sm">{location}</p>}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}