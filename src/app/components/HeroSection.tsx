


import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  // A function to handle smooth scrolling to the services section.
  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    // The main section container. It's relative so we can place an overlay inside.
    <section className="relative min-h-screen flex items-center justify-center text-white p-4 sm:p-8">
      {/* Background Image Container with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-top"
        style={{
          // Use your actual image path here.
          backgroundImage: "url('/h3.png')",
          // A semi-transparent dark overlay to make text more readable.
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
          backgroundBlendMode: 'multiply'
        }}
      />
      
      {/* Main content, placed above the background image layer. */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Main heading with a large, bold font. */}
<div className="relative mx-auto mb-6 w-30 h-30 sm:w-30 sm:h-30 md:w-30 md:h-30">
  <Image
    src="/logo.jpeg"
    alt="Echobyte Logo"
    fill
    priority
    className="object-contain rounded-full drop-shadow-xl"
  />
</div>


<h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-[10px]">
  <span 
    className="text-white inline-block" 
    style={{ textShadow: '0 4px 12px rgba(0, 0, 0, 0.9), 0 2px 4px rgba(0, 0, 0, 0.8)' }}
  >
    ECHOBYTE
  </span>{' '}
   <span
  style={{WebkitTextStroke: '1px white',}}
   className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
 
    CONCEPT
  </span>
</h1>

        
        {/* Subheading text with improved styling. */}
        <p
          className=" text-gray-300 font-medium leading-relaxed max-w-2xl mx-auto"
          style={{ textShadow: '2px 2px 5px rgb(0, 0, 0)' }}
        >
         
          We Build Websites, Mobile Applications, AI-powered and automated digital platforms that help businesses, professionals, and organizations improve productivity, visibility, and growth in the digital economy.
          
          
             </p>

        {/* Call-to-action buttons */}
        <div className="mt-12 flex justify-center flex-wrap gap-6">
        <button
        onClick={scrollToServices}
        className="relative px-8 py-3.5 rounded-full font-semibold text-sm sm:text-base text-white bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-purple-500/30 hover:scale-105 active:scale-95 transition-all duration-300 border border-white/15 cursor-pointer flex items-center gap-2 group">
  <span>Explore Services</span>
  <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
</button>
      
        </div>
      </div>
    </section>
  );
};

export default HeroSection

