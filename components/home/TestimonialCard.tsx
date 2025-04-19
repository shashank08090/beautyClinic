import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  image?: string;
  rating: number;
}

export default function TestimonialCard({
  quote,
  author,
  role,
  image,
  rating,
}: TestimonialCardProps) {
  return (
    <Card className="bg-card hover:shadow-md transition-shadow duration-300">
      <CardContent className="pt-6">
        <div className="flex justify-center mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-5 w-5 ${
                i < rating ? "text-amber-400 fill-amber-400" : "text-gray-300"
              }`}
            />
          ))}
        </div>
        <blockquote className="text-center mb-6">
          <p className="text-muted-foreground italic">"{quote}"</p>
        </blockquote>
        <div className="flex flex-col items-center">
          <Avatar className="h-12 w-12 mb-3">
            <AvatarImage src={image} alt={author} />
            <AvatarFallback>{author[0]}</AvatarFallback>
          </Avatar>
          <div className="text-center">
            <p className="font-medium">{author}</p>
            <p className="text-sm text-muted-foreground">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}