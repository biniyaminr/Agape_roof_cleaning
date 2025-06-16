import React, { useState } from "react";

const images = [
  {
    url: "https://i.ibb.co/KzB0Nfgv/Whats-App-Image-2025-03-05-at-21-37-49.jpg",
    alt: "Professional roof cleaning",
  },
  {
    url: "https://i.ibb.co/wrhhmff7/Whats-App-Image-2025-03-05-at-21-37-49-2.jpg",
    alt: "Worker cleaning roof",
  },
  {
    url: "https://i.ibb.co/LDYN2WJ2/Whats-App-Image-2025-03-05-at-21-37-49-1.jpg",
    alt: "Roof cleaning in progress",
  },
  {
    url: "https://i.ibb.co/3mG59pjX/Whats-App-Image-2025-03-05-at-21-37-48.jpg",
    alt: "Roof cleaning near vents",
  },
  {
    url: "https://i.ibb.co/pjNgcKw8/Whats-App-Image-2025-03-05-at-21-37-48-4.jpg",
    alt: "Roof cleaning with water runoff",
  },
  {
    url: "https://i.ibb.co/N2mhw9MG/Whats-App-Image-2025-03-05-at-21-37-48-3.jpg",
    alt: "Roof cleaning near chimney",
  },
  {
    url: "https://i.ibb.co/cKgfGmrx/Whats-App-Image-2025-03-05-at-21-37-48-2.jpg",
    alt: "Roof cleaning with solution streaks",
  },
  {
    url: "https://i.ibb.co/Fk91SbX5/Whats-App-Image-2025-03-05-at-21-37-48-1.jpg",
    alt: "Roof cleaning near edge",
  },
  {
    url: "https://i.ibb.co/cc1DCyxL/Whats-App-Image-2025-03-05-at-21-37-47-2.jpg",
    alt: "Roof cleaning with water flow",
  },
  {
    url: "https://i.ibb.co/8DcKSqTm/Whats-App-Image-2025-03-05-at-21-37-47.jpg",
    alt: "Roof cleaning near skylight",
  },
  {
    url: "https://i.ibb.co/5X9SZ36K/Whats-App-Image-2025-03-05-at-21-37-47-1.jpg",
    alt: "Roof cleaning near vent",
  },
  {
    url: "https://i.ibb.co/kVGNyq4F/Whats-App-Image-2025-03-05-at-21-36-17.jpg",
    alt: "Roof cleaning with greenery view",
  },
  {
    url: "https://i.ibb.co/fVDXVsqN/Whats-App-Image-2025-03-05-at-21-36-17-3.jpg",
    alt: "Roof cleaning with blue solution",
  },
  {
    url: "https://i.ibb.co/LzYgp3cK/Whats-App-Image-2025-03-05-at-21-36-17-2.jpg",
    alt: "Roof cleaning with worker shadow",
  },
  {
    url: "https://i.ibb.co/7JHLyRzQ/Whats-App-Image-2025-03-05-at-21-36-17-1.jpg",
    alt: "Roof cleaning near edge",
  },
  {
    url: "https://i.ibb.co/kVBdWb6H/Whats-App-Image-2025-03-05-at-21-36-16.jpg",
    alt: "Roof cleaning with water spray",
  },
  {
    url: "https://i.ibb.co/9Fyx9JX/Whats-App-Image-2025-03-05-at-21-36-16-5.jpg",
    alt: "Roof cleaning with water runoff",
  },
  {
    url: "https://i.ibb.co/Zz5Q7fNB/Whats-App-Image-2025-03-05-at-21-36-16-3.jpg",
    alt: "Roof cleaning near vent",
  },
  {
    url: "https://i.ibb.co/8gybnVjj/Whats-App-Image-2025-03-05-at-21-36-16-4.jpg",
    alt: "Roof cleaning with water flow",
  },
  {
    url: "https://i.ibb.co/Cpmwp32G/Whats-App-Image-2025-03-05-at-21-36-16-2.jpg",
    alt: "Roof cleaning near chimney",
  },
  {
    url: "https://i.ibb.co/YTqQgV3J/Whats-App-Image-2025-03-05-at-21-36-16-1.jpg",
    alt: "Roof cleaning with solution streaks",
  },
  {
    url: "https://i.ibb.co/m5fqHf5c/Whats-App-Image-2025-03-05-at-21-36-15.jpg",
    alt: "Wide view of roof cleaning",
  },
  {
    url: "https://i.ibb.co/8nYz6KtQ/Whats-App-Image-2025-03-05-at-21-34-56.jpg",
    alt: "Roof cleaning with neighborhood view",
  },
  {
    url: "https://i.ibb.co/5X18KpxG/Whats-App-Image-2025-03-05-at-21-36-15-1.jpg",
    alt: "Roof cleaning with water runoff",
  },
  {
    url: "https://i.ibb.co/h1fV5ghX/Whats-App-Image-2025-03-05-at-21-34-56-4.jpg",
    alt: "Roof cleaning with water flow",
  },
  {
    url: "https://i.ibb.co/gMLDXhy6/Whats-App-Image-2025-03-05-at-21-34-56-3.jpg",
    alt: "Roof cleaning near vent",
  },
  {
    url: "https://i.ibb.co/4njddYgP/Whats-App-Image-2025-03-05-at-21-34-56-2.jpg",
    alt: "Roof cleaning with solution streaks",
  },
  {
    url: "https://i.ibb.co/KpTCJvwm/Whats-App-Image-2025-03-05-at-21-34-55.jpg",
    alt: "Roof cleaning with house view",
  },
  {
    url: "https://i.ibb.co/BVBBYD2j/Whats-App-Image-2025-03-05-at-21-34-56-1.jpg",
    alt: "Roof cleaning near skylight",
  },
  {
    url: "https://i.ibb.co/H5V4Bp0/Whats-App-Image-2025-03-05-at-21-34-55-1.jpg",
    alt: "Roof cleaning with water runoff",
  },
  {
    url: "https://i.ibb.co/sdtYwr5M/Whats-App-Image-2025-03-05-at-21-34-55-2.jpg",
    alt: "Roof cleaning near edge",
  },
  {
    url: "https://i.ibb.co/Kz3gcz1w/Whats-App-Image-2025-03-05-at-21-34-21.jpg",
    alt: "Roof cleaning with greenery view",
  },
  {
    url: "https://i.ibb.co/r2LJD8nv/Whats-App-Image-2025-03-05-at-21-34-21-3.jpg",
    alt: "Roof cleaning with water flow",
  },
  {
    url: "https://i.ibb.co/8D6yq39H/Whats-App-Image-2025-03-05-at-21-34-21-2.jpg",
    alt: "Roof cleaning near vent",
  },
  {
    url: "https://i.ibb.co/SwCmwZVV/Whats-App-Image-2025-03-05-at-21-34-21-1.jpg",
    alt: "Roof cleaning with solution streaks",
  },
  {
    url: "https://i.ibb.co/93Z2vcLf/Whats-App-Image-2025-03-05-at-21-34-20.jpg",
    alt: "Roof cleaning with neighborhood view",
  },
  {
    url: "https://i.ibb.co/hRjD63ww/Whats-App-Image-2025-03-05-at-21-34-20-1.jpg",
    alt: "Roof cleaning near chimney",
  },
  {
    url: "https://i.ibb.co/gLmgcYkN/Whats-App-Image-2025-03-05-at-21-33-02.jpg",
    alt: "Roof cleaning with water runoff",
  },
  {
    url: "https://i.ibb.co/4Zq5h6LL/Whats-App-Image-2025-03-05-at-21-33-02-2.jpg",
    alt: "Roof cleaning near vent",
  },
  {
    url: "https://i.ibb.co/BK65X0HJ/Whats-App-Image-2025-03-05-at-21-33-02-1.jpg",
    alt: "Roof cleaning with solution streaks",
  },
  {
    url: "https://i.ibb.co/DPpjSS8z/Whats-App-Image-2025-03-05-at-21-33-01.jpg",
    alt: "Roof cleaning with house view",
  },
  {
    url: "https://i.ibb.co/QvhPKWGB/Whats-App-Image-2025-03-05-at-21-33-01-5.jpg",
    alt: "Worker cleaning roof with pole",
  },
  {
    url: "https://i.ibb.co/cc2cCWgj/Whats-App-Image-2025-03-05-at-21-33-01-4.jpg",
    alt: "Roof cleaning with water flow",
  },
  {
    url: "https://i.ibb.co/mV4YvcjM/Whats-App-Image-2025-03-05-at-21-33-01-3.jpg",
    alt: "Roof cleaning near vent",
  },
  {
    url: "https://i.ibb.co/9kq99RRK/Whats-App-Image-2025-03-05-at-21-33-01-2.jpg",
    alt: "Roof cleaning with solution streaks",
  },
  {
    url: "https://i.ibb.co/KpzxQBb0/Whats-App-Image-2025-03-05-at-21-33-01-1.jpg",
    alt: "Roof cleaning with greenery view",
  },
  {
    url: "https://i.ibb.co/5ZCQnW3/Whats-App-Image-2025-03-05-at-21-33-00.jpg",
    alt: "Roof cleaning near chimney",
  },
  {
    url: "https://i.ibb.co/Pvcp912y/Whats-App-Image-2025-03-05-at-21-33-00-4.jpg",
    alt: "Roof cleaning with water runoff",
  },
  {
    url: "https://i.ibb.co/vvRpV8gW/Whats-App-Image-2025-03-05-at-21-33-00-2.jpg",
    alt: "Roof cleaning near vent",
  },
  {
    url: "https://i.ibb.co/BkHrpyr/Whats-App-Image-2025-03-05-at-21-33-00-3.jpg",
    alt: "Roof cleaning with solution streaks",
  },
  {
    url: "https://i.ibb.co/1fWjrzs5/Whats-App-Image-2025-03-05-at-21-32-59.jpg",
    alt: "Roof cleaning with neighborhood view",
  },
  {
    url: "https://i.ibb.co/HL3Mwf1z/Whats-App-Image-2025-03-05-at-21-33-00-1.jpg",
    alt: "Worker on roof with safety harness",
  },
  {
    url: "https://i.ibb.co/6RJw8m9x/Whats-App-Image-2025-03-05-at-21-32-59-6.jpg",
    alt: "Worker on roof with safety harness",
  },
  {
    url: "https://i.ibb.co/cK8wXwTN/Whats-App-Image-2025-03-05-at-21-32-59-5.jpg",
    alt: "Roof cleaning near edge",
  },
  {
    url: "https://i.ibb.co/0jr8WhvW/Whats-App-Image-2025-03-05-at-21-32-59-4.jpg",
    alt: "Roof cleaning with water flow",
  },
  {
    url: "https://i.ibb.co/dsGRk9hd/Whats-App-Image-2025-03-05-at-21-32-59-3.jpg",
    alt: "Roof cleaning near vent",
  },
  {
    url: "https://i.ibb.co/cKMzQmdT/Whats-App-Image-2025-03-05-at-21-32-59-1.jpg",
    alt: "Roof cleaning with solution streaks",
  },
  {
    url: "https://i.ibb.co/KcXFgx26/Whats-App-Image-2025-03-05-at-21-32-59-2.jpg",
    alt: "Roof cleaning with greenery view",
  },
  {
    url: "https://i.ibb.co/tMWpM1tj/Roof-Clean.jpg",
    alt: "Clean roof after service",
  },
  {
    url: "https://i.ibb.co/yFM8RFQF/Roof-Cleaning.jpg",
    alt: "Roof cleaning process",
  },
];

const Portfolio: React.FC = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );

  const openModal = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  const goToPreviousImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null && selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    }
  };

  const goToNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null && selectedImageIndex < images.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
  };

  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1F2A44] tracking-tight">
            Our Portfolio
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-700 font-medium">
            Showcasing Excellence in Roof Cleaning and Maintenance
          </p>
          <p className="mt-6 text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At Agape Roof Cleaning, our portfolio reflects our dedication to
            quality and precision. Each project highlights our expertise in
            transforming roofs with eco-friendly solutions, meticulous care, and
            outstanding results. Browse our work to see the difference we make.
          </p>
          <div className="mt-8 h-1 w-20 bg-[#FF69B4] rounded-full mx-auto"></div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => openModal(index)}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {image.alt}
              </p>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImageIndex !== null && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            onClick={handleBackgroundClick}
          >
            <div className="relative max-w-4xl w-full mx-4">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white bg-gray-800 bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all duration-300"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Previous Arrow */}
              {selectedImageIndex > 0 && (
                <button
                  onClick={goToPreviousImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-gray-800 bg-opacity-50 rounded-full p-3 hover:bg-opacity-75 transition-all duration-300"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
              )}

              {/* Modal Image */}
              <img
                src={images[selectedImageIndex].url}
                alt={images[selectedImageIndex].alt}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />

              {/* Next Arrow */}
              {selectedImageIndex < images.length - 1 && (
                <button
                  onClick={goToNextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-gray-800 bg-opacity-50 rounded-full p-3 hover:bg-opacity-75 transition-all duration-300"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              )}

              {/* Caption */}
              <p className="mt-4 text-center text-white text-lg font-medium">
                {images[selectedImageIndex].alt}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
