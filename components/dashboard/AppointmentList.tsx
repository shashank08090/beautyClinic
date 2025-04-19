"use client";

import { useState } from "react";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarIcon, Clock, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { serviceCategories } from "@/lib/data";
import { useToast } from "@/hooks/use-toast";

// Mock appointments - in a real app, these would come from your backend
const mockAppointments = [
  {
    id: "1",
    userId: "1",
    serviceId: "laser-rejuvenation",
    date: "2025-06-15",
    timeSlot: "10:00 AM",
    status: "scheduled",
    notes: "",
    createdAt: "2025-06-01T12:00:00Z",
  },
  {
    id: "2",
    userId: "1",
    serviceId: "dark-spot-reduction",
    date: "2025-05-20",
    timeSlot: "2:30 PM",
    status: "completed",
    notes: "Client arrived 5 minutes early",
    createdAt: "2025-05-01T10:30:00Z",
  },
  {
    id: "3",
    userId: "1",
    serviceId: "luxury-facial",
    date: "2025-04-10",
    timeSlot: "11:00 AM",
    status: "completed",
    notes: "",
    createdAt: "2025-03-28T09:15:00Z",
  },
];

// Flatten the services array for easier lookup
const allServices = serviceCategories.flatMap((category) => category.services);

export default function AppointmentList() {
  const [appointments] = useState(mockAppointments);
  const { toast } = useToast();

  const upcomingAppointments = appointments.filter(
    (appointment) => appointment.status === "scheduled"
  );
  
  const pastAppointments = appointments.filter(
    (appointment) => appointment.status === "completed"
  );

  const getServiceById = (id: string) => {
    return allServices.find((service) => service.id === id);
  };

  const handleCancel = (appointmentId: string) => {
    // In a real app, you would send a request to your backend
    toast({
      title: "Appointment Cancelled",
      description: "Your appointment has been cancelled successfully.",
    });
  };

  const renderAppointment = (appointment: any) => {
    const service = getServiceById(appointment.serviceId);
    
    if (!service) return null;
    
    return (
      <div key={appointment.id} className="bg-card border rounded-lg p-4 mb-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
          <div>
            <h3 className="text-lg font-medium">{service.name}</h3>
            <p className="text-muted-foreground">{service.description}</p>
          </div>
          <Badge
            className={`mt-2 md:mt-0 ${
              appointment.status === "completed" ? "bg-muted" : "bg-primary"
            }`}
          >
            {appointment.status === "completed" ? "Completed" : "Scheduled"}
          </Badge>
        </div>
        <Separator className="my-4" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center">
            <CalendarIcon className="h-4 w-4 mr-2 text-muted-foreground" />
            <span>{format(new Date(appointment.date), "MMMM d, yyyy")}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
            <span>{appointment.timeSlot}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
            <span>Main Clinic</span>
          </div>
        </div>
        {appointment.status === "scheduled" && (
          <div className="mt-4 flex justify-end">
            <Button variant="outline" size="sm" onClick={() => handleCancel(appointment.id)}>
              Cancel Appointment
            </Button>
          </div>
        )}
      </div>
    );
  };

  return (
    <Tabs defaultValue="upcoming">
      <TabsList className="mb-6">
        <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
        <TabsTrigger value="past">Past</TabsTrigger>
      </TabsList>
      
      <TabsContent value="upcoming">
        {upcomingAppointments.length > 0 ? (
          <div>{upcomingAppointments.map(renderAppointment)}</div>
        ) : (
          <div className="text-center py-8">
            <p className="text-muted-foreground mb-4">You have no upcoming appointments</p>
            <Button asChild>
              <a href="/booking">Book an Appointment</a>
            </Button>
          </div>
        )}
      </TabsContent>
      
      <TabsContent value="past">
        {pastAppointments.length > 0 ? (
          <div>{pastAppointments.map(renderAppointment)}</div>
        ) : (
          <div className="text-center py-8">
            <p className="text-muted-foreground">You have no past appointments</p>
          </div>
        )}
      </TabsContent>
    </Tabs>
  );
}