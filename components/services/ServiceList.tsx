import ServiceCard from "./ServiceCard";
import { Service } from "@/lib/types";

interface ServiceListProps {
  services: Service[];
}

export default function ServiceList({ services }: ServiceListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service) => (
        <ServiceCard
          key={service.id}
          title={service.name}
          description={service.description}
          image={service.image}
          duration={service.duration}
          price={service.price}
          slug={service.slug}
        />
      ))}
    </div>
  );
}