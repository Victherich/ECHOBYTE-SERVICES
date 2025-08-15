import React from 'react';

// An array of partner objects with names and placeholder image URLs.
const partners = [
  { name: 'Partner Two', logo: './pp2.png' },
  { name: 'Partner One', logo: './pp1.png' },
  { name: 'Partner Three', logo: './pp3.jpeg' },
];

// This component displays the logos of your business partners.
const PartnersSection = () => {
  return (
    // Section with a consistent dark background and padding.
    <section id="partners" className="bg-gray-950 py-20 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section heading */}
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-white mb-4">
          Our Valued <span className="text-yellow-400">Partners</span>
        </h2>
        {/* Subheading */}
        <p className="text-lg text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          We collaborate with leading companies and innovative minds to deliver exceptional results.
        </p>

       {/* Responsive grid for partner logos */}
      <div className="flex flex-wrap justify-center items-center gap-6">
  {partners.map((partner, index) => (
    <div
      key={index}
      className="bg-gray-900 border border-gray-800 rounded-lg p-4 transition-all duration-300 transform hover:scale-110 hover:border-yellow-400 hover:shadow-yellow-300/10 flex items-center justify-center w-32 sm:w-40 md:w-48 lg:w-56"
    >
      <img
        src={partner.logo}
        alt={`${partner.name} logo`}
        className="w-full h-auto object-contain"
      />
    </div>
  ))}
</div>

      </div>
    </section>
  );
};

export default PartnersSection;
