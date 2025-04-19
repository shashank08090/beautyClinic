import Link from "next/link";
import { Button } from "@/components/ui/button";
import ServiceList from "@/components/services/ServiceList";
import { serviceCategories } from "@/lib/data";

export default function ServicesPage() {
  return (
    <div className="pt-28 pb-16">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="font-cormorant text-3xl md:text-5xl font-semibold mb-4">
            Our Beauty Services
          </h1>
          <p className="text-muted-foreground text-lg mb-8">
            Discover our comprehensive range of treatments designed to enhance your natural beauty
            and restore your skin's radiance.
          </p>
          <Button asChild size="lg">
            <Link href="/booking">Book Appointment</Link>
          </Button>
        </div>

        {serviceCategories.map((category) => (
          <section key={category.id} id={category.id} className="mb-20 scroll-mt-24">
            <h2 className="font-cormorant text-2xl md:text-3xl font-semibold mb-8 text-center">
              {category.name}
            </h2>
            <ServiceList services={category.services} />
          </section>
        ))}

        <div className="bg-secondary/20 rounded-lg p-8 mt-12">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-cormorant text-2xl md:text-3xl font-semibold mb-4">
              Not Sure Which Treatment Is Right For You?
            </h2>
            <p className="text-muted-foreground mb-6">
              Our skincare experts can help determine the perfect treatment plan based on your skin's
              unique needs and your personal beauty goals.
            </p>
            <Button asChild>
              <Link href="/contact">Schedule a Consultation</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}