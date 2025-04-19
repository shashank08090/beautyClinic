export interface User {
  id: string;
  name?: string;
  email?: string;
  phone?: string;
  image?: string;
}

export interface Service {
  id: string;
  name: string;
  slug: string;
  description: string;
  fullDescription?: string;
  duration: string;
  price: string;
  image: string;
  categoryId: string;
}

export interface ServiceCategory {
  id: string;
  name: string;
  description?: string;
  services: Service[];
}

export interface TimeSlot {
  id: string;
  time: string;
  available: boolean;
}

export interface Appointment {
  id: string;
  userId: string;
  serviceId: string;
  date: string;
  timeSlot: string;
  status: 'scheduled' | 'completed' | 'cancelled';
  notes?: string;
  createdAt: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  image?: string;
  rating: number;
}