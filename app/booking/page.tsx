"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import BookingForm from "@/components/booking/BookingForm";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth } from "@/hooks/use-auth";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { serviceCategories } from "@/lib/data";

export default function BookingPage() {
  const { user } = useAuth();
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState(serviceCategories[0].id);

  // If not logged in, we'd redirect to login
  // For demo purposes, we'll just show a message
  if (!user) {
    return (
      <div className="pt-28 pb-16 container">
        <Button asChild variant="ghost" className="mb-8">
          <Link href="/" className="inline-flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
        
        <Card className="max-w-md mx-auto p-8">
          <h1 className="text-2xl font-semibold mb-4">Sign in Required</h1>
          <p className="text-muted-foreground mb-6">
            Please sign in to book an appointment.
          </p>
          <div className="flex gap-4">
            <Button asChild>
              <Link href="/auth/login">Sign In</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/auth/signup">Create Account</Link>
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-16 container">
      <Button asChild variant="ghost" className="mb-8">
        <Link href="/" className="inline-flex items-center">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Services
        </Link>
      </Button>
      
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-cormorant font-semibold mb-2">Book Your Appointment</h1>
        <p className="text-muted-foreground mb-8">
          Select a treatment and choose your preferred date and time.
        </p>
        
        <Tabs defaultValue={selectedCategory} onValueChange={setSelectedCategory}>
          <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
            {serviceCategories.map((category) => (
              <TabsTrigger key={category.id} value={category.id}>
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {serviceCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <BookingForm 
                services={category.services}
                categoryName={category.name}
              />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}