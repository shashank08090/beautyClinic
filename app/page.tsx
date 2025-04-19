import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/services/ServiceCard";
import TestimonialCard from "@/components/home/TestimonialCard";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center px-4">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center" 
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/3997404/pexels-photo-3997404.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.6)"
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="font-cormorant text-4xl md:text-6xl lg:text-7xl font-semibold text-white mb-6">
            Reveal Your Natural Beauty
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-8 max-w-xl mx-auto">
            Premium skincare treatments tailored to your unique needs by certified experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="rounded-full px-8 py-6 text-base">
              <Link href="/booking">Book Your Treatment</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-8 py-6 text-base bg-transparent text-white border-white hover:bg-white/10">
              <Link href="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-cormorant text-3xl md:text-4xl font-semibold mb-6">
                Welcome to Luminous Beauty Clinic
              </h2>
              <p className="text-muted-foreground mb-6">
                At Luminous, we believe in enhancing your natural beauty through personalized, 
                science-backed treatments. Our clinic combines cutting-edge technology with 
                luxury experiences to deliver exceptional results.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 mr-2" />
                  <div>
                    <h3 className="font-medium">Certified Professionals</h3>
                    <p className="text-muted-foreground">Our team consists of board-certified dermatologists and licensed estheticians.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 mr-2" />
                  <div>
                    <h3 className="font-medium">Advanced Technology</h3>
                    <p className="text-muted-foreground">We use state-of-the-art equipment and medical-grade products.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 mr-2" />
                  <div>
                    <h3 className="font-medium">Personalized Care</h3>
                    <p className="text-muted-foreground">Every treatment is tailored to your unique skin needs and goals.</p>
                  </div>
                </div>
              </div>
              <Button asChild className="mt-8">
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image 
                src="https://images.pexels.com/photos/5069433/pexels-photo-5069433.jpeg"
                alt="Luxury clinic interior" 
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-24 px-4 bg-secondary/10">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-cormorant text-3xl md:text-4xl font-semibold mb-4">
              Our Premium Services
            </h2>
            <p className="text-muted-foreground">
              Discover our range of specialized treatments designed to address your unique skincare needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              title="Laser Skin Rejuvenation"
              description="Advanced laser technology that stimulates collagen production and reduces signs of aging."
              image="https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg"
              duration="60 min"
              price="$250"
            />
            <ServiceCard 
              title="Dark Spot Reduction"
              description="Targeted treatments to fade hyperpigmentation and even skin tone for a radiant complexion."
              image="https://images.pexels.com/photos/3764013/pexels-photo-3764013.jpeg"
              duration="45 min"
              price="$180"
            />
            <ServiceCard 
              title="Luxury Facial"
              description="Comprehensive facial treatment that cleanses, exfoliates, and nourishes for glowing skin."
              image="https://images.pexels.com/photos/3865548/pexels-photo-3865548.jpeg"
              duration="75 min"
              price="$195"
            />
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="outline" className="group">
              <Link href="/services" className="inline-flex items-center">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-cormorant text-3xl md:text-4xl font-semibold mb-4">
              Client Experiences
            </h2>
            <p className="text-muted-foreground">
              Hear from our satisfied clients about their transformative experiences at Luminous.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="The laser treatment completely transformed my skin. The staff was professional and made me feel comfortable throughout the procedure."
              author="Emma Johnson"
              role="Laser Treatment Client"
              image="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150"
              rating={5}
            />
            <TestimonialCard 
              quote="I've struggled with dark spots for years. After just three sessions, I saw a dramatic improvement. I'm finally confident in my skin again!"
              author="Michael Chen"
              role="Dark Spot Reduction Client"
              image="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150"
              rating={5}
            />
            <TestimonialCard 
              quote="The luxury facial was truly an indulgent experience. My skin has never looked better, and the relaxing atmosphere made it all the more enjoyable."
              author="Sophia Rodriguez"
              role="Facial Treatment Client"
              image="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150"
              rating={5}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="font-cormorant text-3xl md:text-4xl font-semibold mb-6">
            Begin Your Beauty Journey Today
          </h2>
          <p className="text-primary-foreground/90 mb-8 text-lg">
            Schedule your consultation and discover the perfect treatment plan for your unique needs.
          </p>
          <Button asChild size="lg" variant="secondary" className="rounded-full px-8 py-6 text-base">
            <Link href="/booking">Book Your Appointment</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}