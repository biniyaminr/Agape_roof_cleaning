import React from "react";
import { Link } from "react-router-dom";
import ServiceCard from "./ServiceCard";
import { services } from "./servicesData";

const ServicesList: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => (
        <Link key={service.id} to={`/services/${service.id}`}>
          <ServiceCard
            title={service.title}
            description={service.description}
            image={service.image}
          />
        </Link>
      ))}
    </div>
  );
};

export default ServicesList;
