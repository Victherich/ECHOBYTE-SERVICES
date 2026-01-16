
import React from 'react';

const ClientsHeroSection = () => {
  return (
    // This container holds the background image and a semi-transparent overlay for better text readability.
    <section className="relative min-h-screen bg-gray-950 text-white flex items-center justify-center p-4 sm:p-8 overflow-hidden">
      {/* Background Image Container */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          // Replace this URL with the path to your own background image
          backgroundImage: "url('./echohero.jpg')",
          // A semi-transparent overlay to ensure text is highly readable
          backgroundColor: 'rgba(26, 32, 44, 0.7)',
          backgroundBlendMode: 'multiply'
        }}
      />
      
      {/* Main content, placed above the background image layer. */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-4">
          Our Valued Clients 
           {/* <span className="text-yellow-400">Partners</span> */}
        </h1>
        
        <div className="h-2 w-24 bg-yellow-400 rounded-full mx-auto mb-8" />
        
        <p className=" text-gray-300 font-medium leading-relaxed">
          Celebrating the successful and powerful stories that have shaped our journey. We are proud to work with visionary clients and to bring great ideas to life.
        </p>

        <div className="mt-12">
          <a
            href="#testimonials"
            className="inline-block bg-yellow-400 text-gray-900 font-semibold text-lg py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-yellow-500 focus:ring-opacity-50"
          style={{background:"gray", color:"white"}}
          >
            See Our Success Stories
          </a>
        </div>
      </div>
    </section>
  );
};

export default ClientsHeroSection
