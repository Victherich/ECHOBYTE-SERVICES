'use client';

import Image from 'next/image';

const logoPath = '/logo.jpeg';

const HeroSection = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    servicesSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-gradient-to-r from-indigo-700 via-purple-800 to-pink-700 py-24 px-8 text-center">
      <div className="flex justify-center mb-6">
        <Image
          src={logoPath}
          alt="Echobyte Concept Logo"
          width={100}
          height={100}
          className="object-contain rounded-full"
        />
      </div>
      <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-white">
        ECHOBYTE CONCEPT
      </h1>
      <p className="text-lg md:text-xl max-w-4xl mx-auto text-white">
        We build stunning, high-performing websites & web apps that power businesses, organizations, schools, and ideas across the globe.
      </p>
      <div className="mt-10 flex justify-center flex-wrap gap-6">
        <button
          onClick={scrollToServices}
          className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold text-lg py-3 px-6 rounded-full transition-colors"
        >
          View Our Services
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
