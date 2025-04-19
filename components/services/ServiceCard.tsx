import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Clock, DollarSign } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  duration: string;
  price: string;
  slug?: string;
}

export default function ServiceCard({
  title,
  description,
  image,
  duration,
  price,
  slug,
}: ServiceCardProps) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="relative h-60 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardContent className="pt-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center text-muted-foreground">
            <Clock className="h-4 w-4 mr-1" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center font-medium">
            <DollarSign className="h-4 w-4 mr-1" />
            <span>{price}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-2 pb-6">
        <Button asChild className="w-full">
          <Link href={slug ? `/services/${slug}` : "/booking"}>Book Now</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}