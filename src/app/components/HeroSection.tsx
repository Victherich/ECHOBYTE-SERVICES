


// // import Image from 'next/image';

// // const logoPath = '/logo.jpeg';

// const HeroSection = () => {
//   const scrollToServices = () => {
//     const servicesSection = document.getElementById("services");
//     servicesSection?.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <section
//       className="py-40 px-8 text-white relative"
//       style={{
//         backgroundImage: "url('/echohero2.jpg')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       {/* Top-left logo */}
     

//       {/* Main Content */}
//       <div className="text-center max-w-4xl mx-auto">
//         <h1
//           className="text-4xl md:text-5xl font-extrabold mb-6"
//           style={{ textShadow: '2px 2px 5px rgba(0, 0, 0, 0.9)' }}
//         >
//           ECHOBYTE CONCEPT
//         </h1>
//         <p
//           className="text-lg md:text-xl mb-6"
//           style={{ textShadow: '2px 2px 5px rgba(0, 0, 0, 0.9)' }}
//         >
//           We help you stand out with powerful websites, Mobile Apps, Digital products and Services, a Modern Portfolio Builder — everything you need to grow in today’s digital world.
//         </p>
      

//         <div className="mt-10 flex justify-center flex-wrap gap-6">
//           <button
//             onClick={scrollToServices}
//             className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold text-lg py-3 px-6 rounded-full transition-colors"
//             style={{ cursor: "pointer" }}
//           >
//             View Our Services
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;




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
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          // Use your actual image path here.
          backgroundImage: "url('/h1.png')",
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


        <h1
          className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-4"
          style={{ textShadow: '2px 2px 5px rgba(0, 0, 0, 0.9)' }}
        >
          ECHOBYTE <span className="text-blue-400"
          
          >CONCEPT</span>
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
            className="inline-block bg-yellow-400 text-gray-900 font-semibold text-lg py-2 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50"
          style={{background:"gray",color:"white",fontSize:"0.9rem",cursor:"pointer", border:'4px solid white'}}
          >
            View Our Services
          </button>
          {/* <a
            onClick={scrollToServices} // Replace with your actual contact page link
            className="inline-block bg-transparent border-2 border-yellow-400 text-yellow-400 font-semibold text-lg py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:bg-yellow-400 hover:text-gray-900 focus:outline-none focus:ring-4 focus:ring-yellow-500 focus:ring-opacity-50"
          >
            Contact Us
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection

