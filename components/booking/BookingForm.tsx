"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { format, addDays, isBefore, addMonths } from "date-fns";
import { useToast } from "@/hooks/use-toast";
import { Service } from "@/lib/types";
import TimeSlotPicker from "./TimeSlotPicker";

const BookingSchema = z.object({
  serviceId: z.string({
    required_error: "Please select a service",
  }),
  date: z.date({
    required_error: "Please select a date",
  }),
  timeSlot: z.string({
    required_error: "Please select a time",
  }),
  notes: z.string().optional(),
});

type BookingValues = z.infer<typeof BookingSchema>;

interface BookingFormProps {
  services: Service[];
  categoryName: string;
}

export default function BookingForm({ services, categoryName }: BookingFormProps) {
  const [step, setStep] = useState(1);
  const { toast } = useToast();
  
  const today = new Date();
  const maxDate = addMonths(today, 2);
  
  const form = useForm<BookingValues>({
    resolver: zodResolver(BookingSchema),
    defaultValues: {
      notes: "",
    },
  });

  const selectedService = form.watch("serviceId") 
    ? services.find(service => service.id === form.watch("serviceId"))
    : null;

  const onSubmit = (data: BookingValues) => {
    // In a real app, you would send this data to your backend
    console.log("Booking data:", data);
    
    toast({
      title: "Appointment Booked!",
      description: `Your appointment for ${selectedService?.name} on ${format(data.date, "EEEE, MMMM do")} at ${data.timeSlot} has been scheduled.`,
      duration: 5000,
    });
  };

  return (
    <div className="bg-card border rounded-lg p-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {step === 1 && (
            <>
              <h2 className="text-xl font-medium">Select a {categoryName} Treatment</h2>
              
              <FormField
                control={form.control}
                name="serviceId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Treatment</FormLabel>
                    <Select 
                      onValueChange={field.onChange} 
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a treatment" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service.id} value={service.id}>
                            {service.name} - {service.price}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              {selectedService && (
                <div className="bg-secondary/20 p-4 rounded-md">
                  <p className="font-medium">{selectedService.name}</p>
                  <p className="text-sm text-muted-foreground">{selectedService.description}</p>
                  <div className="flex justify-between mt-2 text-sm">
                    <span>Duration: {selectedService.duration}</span>
                    <span>Price: {selectedService.price}</span>
                  </div>
                </div>
              )}
              
              <Button
                type="button"
                onClick={() => setStep(2)}
                disabled={!form.watch("serviceId")}
                className="w-full"
              >
                Continue
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </>
          )}
          
          {step === 2 && (
            <>
              <h2 className="text-xl font-medium">Select Date & Time</h2>
              
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) => isBefore(date, addDays(today, -1)) || isBefore(maxDate, date)}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              {form.watch("date") && (
                <FormField
                  control={form.control}
                  name="timeSlot"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Time</FormLabel>
                      <TimeSlotPicker 
                        value={field.value} 
                        onChange={field.onChange} 
                      />
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}
              
              <FormField
                control={form.control}
                name="notes"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Special Instructions (Optional)</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Any special requirements or health concerns we should know about"
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="flex gap-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setStep(1)}
                >
                  Back
                </Button>
                <Button type="submit" className="flex-1">
                  Book Appointment
                </Button>
              </div>
            </>
          )}
        </form>
      </Form>
    </div>
  );
}