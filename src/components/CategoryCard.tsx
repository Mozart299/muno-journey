// components/CategoryCard.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CategoryCardProps {
  title: string;
  image: string;
  count: number;
  slug: string;
}

export default function CategoryCard({ title, image, count, slug }: CategoryCardProps) {
  return (
    <Link 
      href={`/products?category=${slug}`} 
      className="group relative overflow-hidden rounded-lg"
    >
      <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        
        <div className="absolute bottom-0 left-0 p-4 text-white">
          <h3 className="text-lg font-medium">{title}</h3>
          <p className="text-sm text-gray-200">{count} Products</p>
        </div>
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 
          scale-75 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100">
          <Button className="bg-white text-gray-900 hover:bg-gray-100">
            Shop Now <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </Link>
  );
}