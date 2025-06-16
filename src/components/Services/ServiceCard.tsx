import React from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  image,
}) => {
  return (
    <div className="relative bg-white rounded-xl shadow-md p-6 text-center transition-all duration-500 cursor-pointer group overflow-hidden hover:shadow-lg">
      <div className="absolute inset-0 rounded-xl before:absolute before:bottom-0 before:left-0 before:w-full before:h-0 before:border-2 before:border-[#FF69B4] before:rounded-xl before:transition-all before:duration-700 before:ease-in-out before:origin-bottom group-hover:before:h-full"></div>
      <div className="mb-6 relative z-10">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover rounded-lg"
        />
      </div>
      <h3 className="text-xl font-semibold text-[#1F2A44] mb-3 relative z-10 group-hover:text-[#FF69B4] transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed relative z-10">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
