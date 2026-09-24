


// import React from 'react';
// import Image from 'next/image';

// const HeroSection = () => {
//   // A function to handle smooth scrolling to the services section.
//   const scrollToServices = () => {
//     const servicesSection = document.getElementById("services");
//     if (servicesSection) {
//       servicesSection.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     // The main section container. It's relative so we can place an overlay inside.
//     <section className="relative min-h-screen flex items-center justify-center text-white p-4 sm:p-8">
//       {/* Background Image Container with Overlay */}
//       <div 
//         className="absolute inset-0 z-0 bg-cover bg-top"
//         style={{
//           // Use your actual image path here.
//           backgroundImage: "url('/h3.png')",
//           // A semi-transparent dark overlay to make text more readable.
//           backgroundColor: 'rgba(0, 0, 0, 0.2)',
//           backgroundBlendMode: 'multiply'
//         }}
//       />
      
//       {/* Main content, placed above the background image layer. */}
//       <div className="relative z-10 text-center max-w-4xl mx-auto">
//         {/* Main heading with a large, bold font. */}
// <div className="relative mx-auto mb-6 w-30 h-30 sm:w-30 sm:h-30 md:w-30 md:h-30">
//   <Image
//     src="/logo.jpeg"
//     alt="Echobyte Logo"
//     fill
//     priority
//     className="object-contain rounded-full drop-shadow-xl"
//   />
// </div>


// <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-[10px]">
//   <span 
//     className="text-white inline-block" 
//     style={{ textShadow: '0 4px 12px rgba(0, 0, 0, 0.9), 0 2px 4px rgba(0, 0, 0, 0.8)' }}
//   >
//     ECHOBYTE
//   </span>{' '}
//    <span
//   style={{WebkitTextStroke: '1px white',}}
//    className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
 
//     CONCEPT
//   </span>
// </h1>

        
//         {/* Subheading text with improved styling. */}
//         <p
//           className=" text-gray-300 font-medium leading-relaxed max-w-2xl mx-auto"
//           style={{ textShadow: '2px 2px 5px rgb(0, 0, 0)' }}
//         >
         
//           We Build Websites, Mobile Applications, AI-powered and automated digital platforms that help businesses, professionals, and organizations improve productivity, visibility, and growth in the digital economy.
          
          
//              </p>

//         {/* Call-to-action buttons */}
//         <div className="mt-12 flex justify-center flex-wrap gap-6">
//         <button
//         onClick={scrollToServices}
//         className="relative px-8 py-3.5 rounded-full font-semibold text-sm sm:text-base text-white bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-purple-500/30 hover:scale-105 active:scale-95 transition-all duration-300 border border-white/15 cursor-pointer flex items-center gap-2 group">
//   <span>Explore Services</span>
//   <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
// </button>
      
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection




import React from 'react';
// import Image from 'next/image';

const HeroSection = () => {
  // A function to handle smooth scrolling to the services section.
  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Define your 6 platforms here
  const platforms = [
    { name: "Build Your Websites", description: "Click & get your Websites built", url: "#", icon: "🌐" },
    { name: "Build Your Mobile Apps", description: "Click & get your mobile apps built", url: "#", icon: "📱" },
    { name: "Build Your Personal Portfolio", description: "Click & build your porfolio with our powerful portfolio builder", url: "#", icon: "🤖" },
    { name: "Sell Digital Products", description: "Click & get your digital store to sell digital products & services", url: "#", icon: "⚡" },
    { name: "Acquire Digital Skills", description: "Clikc & learn money-making skills", url: "#", icon: "🎨" },
    { name: "Get Remote jobs", description: "Click & find your remote jobs", url: "#", icon: "🚀" },
  ];

  return (
    // The main section container. It's relative so we can place an overlay inside.
    <section className="relative min-h-screen flex items-center justify-center text-white p-4 sm:p-8">
      {/* Background Image Container with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-top"
        style={{
          backgroundImage: "url('/h3.png')",
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          backgroundBlendMode: 'multiply'
        }}
      />
      
      {/* Main content, placed above the background image layer. */}
      <div className="relative z-10 text-center max-w-5xl mx-auto py-12">
        {/* Logo */}
        {/* <div className="relative mx-auto mb-6 w-24 h-24 sm:w-30 sm:h-30">
          <Image
            src="/logo.jpeg"
            alt="Echobyte Logo"
            fill
            priority
            className="object-contain rounded-full drop-shadow-xl"
          />
        </div> */}

          <p
          className="text-gray-300 font-medium leading-relaxed max-w-2xl mx-auto"
          style={{ textShadow: '2px 2px 5px rgb(0, 0, 0)' }}
        >
          WELCOME TO
        </p>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-[10px]">
          <span 
            className="text-white inline-block" 
            style={{ textShadow: '0 4px 12px rgba(0, 0, 0, 0.9), 0 2px 4px rgba(0, 0, 0, 0.8)' }}
          >
            ECHOBYTE
          </span>{' '}
          <span
            style={{ WebkitTextStroke: '1px white' }}
            className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600"
          >
            CONCEPT
          </span>
        </h1>
        
        {/* Subheading text */}
        <p
          className="text-gray-300 font-medium leading-relaxed max-w-2xl mx-auto mb-10"
          style={{ textShadow: '2px 2px 5px rgb(0, 0, 0)' }}
        >
YOUR ALL IN ONE DIGITAL SOLUTIONS
        </p>

        {/* Big Platforms Grid / Buttons */}
        <div className="w-full max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-white-400 font-bold mb-4">
            Explore Our Services and Platforms
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {platforms.map((platform, index) => (
              <a
                key={index}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col items-start p-5 rounded-2xl bg-neutral-900/60 backdrop-blur-md border border-white/10 hover:border-blue-500/50 shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-1.5 transition-all duration-300 text-left cursor-pointer"
              >
                <div className="flex items-center justify-between w-full mb-3">
                  <span className="text-3xl p-2 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                    {platform.icon}
                  </span>
                  <span className="text-white/40 group-hover:text-white transition-colors duration-300 font-semibold text-lg">
                    ↗
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                  {platform.name}
                </h3>
                <p className="text-xs text-gray-400 mt-1">
                  {platform.description}
                </p>
              </a>
            ))}
          </div>
        </div>

        {/* Optional Secondary Action (Explore Services Scroll) */}
        <div className="mt-10 flex justify-center">
          <button
            onClick={scrollToServices}
            className="text-xs sm:text-sm text-gray-400 hover:text-white underline underline-offset-4 transition-colors cursor-pointer"
          >
            learn more about Echobyte Concept
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;