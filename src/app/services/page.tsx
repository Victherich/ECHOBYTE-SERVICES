
// 'use client';

// import React from 'react';
// import styled from 'styled-components';
// import {
//   FaCode,
//   FaGlobe,
//   FaShoppingCart,
//   FaUniversity,
//   FaSchool,
//   FaBook,
//   FaChartLine,
//   FaCalculator,
//   FaCalendarAlt,
// } from 'react-icons/fa';

// import ContactForm from '../components/ContactForm';


// // Services Data
// const services = [
//   { title: 'Website Design & Development', icon: <FaCode /> },
//   { title: 'Business Websites', icon: <FaGlobe /> },
//   { title: 'E-Commerce Platforms', icon: <FaShoppingCart /> },
//   { title: 'School & University Portals', icon: <FaUniversity /> },
//   { title: 'Online Academies', icon: <FaSchool /> },
//   { title: 'Academic Journals', icon: <FaBook /> },
//   { title: 'Financial Web Apps', icon: <FaChartLine /> },
//   { title: 'Accounting Applications', icon: <FaCalculator /> },
//   { title: 'Booking Systems', icon: <FaCalendarAlt /> },
//   { title: 'Lots More...', icon: <FaChartLine /> },
// ];

// /* =========================
//    Styled Components (Light)
// ========================= */

// const PageWrapper = styled.div`
//   min-height: 100vh;
//   background: #f9fafb;
//   display: flex;
//   flex-direction: column;
// `;

// const HeroSection = styled.section`
//   width: 100%;
//   padding: 110px 30px;
//   text-align: center;
//   background-image: url('/techp.jpg');
//   background-size: cover;
//   background-position: center;
//   position: relative;

//   &::before {
//     content: '';
//     position: absolute;
//     inset: 0;
//     background: rgba(255, 255, 255, 0.6);
//   }
// `;

// const HeroContent = styled.div`
//   position: relative;
//   z-index: 1;
// `;

// const HeroTitle = styled.h1`
//   font-size: 3rem;
//   font-weight: 800;
//   color: #111827;
//   margin-bottom: 20px;
// `;

// const HeroText = styled.p`
//   font-size: 1.2rem;
//   max-width: 700px;
//   margin: 0 auto 30px;
//   // color: #374151;
//   color:rgba(0,0,0,1);
// `;

// const CTAButton = styled.a`
//   display: inline-block;
//   background-color:gray;
//   color:white;
//   padding: 12px 34px;
//   border-radius: 999px;
//   font-weight: bold;
//   text-decoration: none;
//   transition: all 0.3s ease;

//   &:hover {
//     background-color: rgb(96, 165, 250);
//     transform: translateY(-2px);
//   }
// `;

// const ServicesSection = styled.section`
//   padding: 90px 30px;
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const Title = styled.h2`
//   font-size: 2.6rem;
//   font-weight: 700;
//   color: #111827;
//   margin-bottom: 50px;
//   text-align: center;
// `;

// const Grid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
//   gap: 32px;
//   width: 100%;
//   max-width: 1200px;
// `;

// const Card = styled.div`
//   background: #ffffff;
//   border-radius: 18px;
//   padding: 34px 22px;
//   text-align: center;
//   box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
//   transition: all 0.35s ease;
//   cursor: pointer;
//   display: flex;
//   flex-direction: column;
//   align-items: center;

//   &:hover {
//     transform: translateY(-10px);
//     box-shadow: 0 18px 40px rgba(250, 204, 21, 0.25);
//   }
// `;

// const IconWrapper = styled.div`
//   font-size: 3rem;
//   color: #facc15;
//    color:rgb(96, 165, 250);
//   margin-bottom: 16px;
// `;

// const ServiceTitle = styled.h3`
//   font-size: 1.25rem;
//   font-weight: 600;
//   color: #111827;
// `;

// /* =========================
//    Component
// ========================= */

// const ServicesPage = () => {
//   return (
//     <PageWrapper>
//       {/* Hero */}
//       <HeroSection>
//         <HeroContent>
//           <HeroTitle>Empowering Your Online Presence</HeroTitle>
//           <HeroText>
//             From sleek business websites to advanced web applications, we craft
//             tailored digital experiences that drive results. Explore our wide
//             range of professional web development services.
//           </HeroText>
//           <CTAButton href="#services">View Services</CTAButton>
//         </HeroContent>
//       </HeroSection>

//       {/* Services */}
//       <ServicesSection id="services">
//         <Title>Our Web Development Services</Title>
//         <Grid>
//           {services.map((service, index) => (
//             <Card key={index}>
//               <IconWrapper>{service.icon}</IconWrapper>
//               <ServiceTitle>{service.title}</ServiceTitle>
//             </Card>
//           ))}
//         </Grid>
//       </ServicesSection>

//       {/* Contact */}
//       <ContactForm />
//     </PageWrapper>
//   );
// };

// export default ServicesPage;



// 'use client';

// import React from 'react';
// import Link from 'next/link';

// import ContactForm from '../components/ContactForm';

// // Services Data with engaging emojis for instant rendering and visual pop
// const services = [
//   { title: 'Website Design & Development', emoji: '💻' },
//   { title: 'Business Websites', emoji: '🌐' },
//   { title: 'E-Commerce Platforms', emoji: '🛒' },
//   { title: 'School & University Portals', emoji: '🎓' },
//   { title: 'Online Academies', emoji: '🏫' },
//   { title: 'Academic Journals', emoji: '📚' },
//   { title: 'Financial Web Apps', emoji: '📈' },
//   { title: 'Accounting Applications', emoji: '🧮' },
//   { title: 'Booking Systems', emoji: '📅' },
//   { title: 'Lots More...', emoji: '🚀' },
// ];

// const ServicesPage = () => {
//   return (
//     <section className="w-full text-gray-900 px-[10px] py-[10px] font-sans" style={{ background: "#e4ecf3" }}>
      
//       {/* Hero Section */}
//       <div
//         className="relative w-full h-[60vh] flex items-center justify-center bg-cover bg-center rounded-3xl overflow-hidden shadow-xl border border-white/60 mb-[10px]"
//         style={{ backgroundImage: 'url(/techp.jpg)' }}
//       >
//         {/* Crisp glassmorphism overlay */}
//         <div className="absolute inset-0 bg-white/70 backdrop-blur-xs" />

//         <div className="relative z-10 p-[10px] rounded-2xl text-center max-w-3xl bg-white/60 backdrop-blur-md shadow-xl border border-white/80 mx-[10px]">
//           <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-wider mb-[10px]" style={{ fontFamily: 'cursive, sans-serif' }}>
//             <span 
//               className="text-gray-900 inline-block italic" 
//               style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.2)' }}
//             >
//               OUR
//             </span>{' '}
//             <span
//               className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 inline-block italic"
//               style={{
//                 WebkitTextStroke: '1px rgba(255, 255, 255, 0.9)',
//                 filter: 'drop-shadow(0 2px 6px rgba(0, 0, 0, 0.3))',
//               }}
//             >
//               SERVICES
//             </span>
//           </h1>

//           <p className="text-gray-700 text-xs sm:text-sm font-medium leading-relaxed max-w-xl mx-auto mb-[10px]">
//             From sleek business websites to advanced web applications, we craft tailored digital experiences that drive results. Explore our wide range of professional web development services.
//           </p>

//           <a href="#services" className="inline-block w-full sm:w-auto">
//             <button className="w-full sm:w-auto px-6 py-3 text-xs sm:text-sm bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 mx-auto">
//               <span>View Services</span>
//               <span>👇</span>
//             </button>
//           </a>
//         </div>
//       </div>

//       {/* Services Section */}
//       <div id="services" className="w-full max-w-5xl mx-auto space-y-[10px]">
        
//         {/* Section Header Card */}
//         <div className="p-[10px] rounded-2xl bg-white/70 backdrop-blur-md border border-white/60 shadow-xl text-center">
//           <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-[6px]">
//             Web Development Services 💼
//           </h2>
//           <p className="text-xs text-gray-600">
//             Engineered with modern stacks, high performance, and unmatched aesthetics.
//           </p>
//         </div>

//         {/* Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[10px]">
//           {services.map((service, index) => (
//             <div 
//               key={index}
//               className="p-[10px] rounded-2xl bg-white/70 backdrop-blur-md border border-white/60 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 flex flex-col items-center text-center cursor-pointer group"
//             >
//               <div className="text-4xl mb-[10px] group-hover:scale-110 transition-transform duration-300">
//                 {service.emoji}
//               </div>
//               <h3 className="text-xs sm:text-sm font-bold text-gray-900">
//                 {service.title}
//               </h3>
//             </div>
//           ))}
//         </div>

//         {/* Contact Form Wrapper Component Container */}
//         <div className="p-[10px] rounded-2xl bg-white/70 backdrop-blur-md border border-white/60 shadow-xl">
//           <ContactForm />
//         </div>

//       </div>
//     </section>
//   );
// };

// export default ServicesPage;




'use client';

import React from 'react';
import Link from 'next/link';

import ContactForm from '../components/ContactForm';

// Services Data with high-quality Unsplash image URLs used as standard background/img tags to bypass next.config.js domain restrictions
const services = [
  { 
    title: 'Website Design & Development', 
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80' 
  },
  { 
    title: 'Business Websites', 
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80' 
  },
  { 
    title: 'E-Commerce Platforms', 
    image: 'https://images.unsplash.com/photo-1556742049-0a67d553c2a5?auto=format&fit=crop&w=600&q=80' 
  },
  { 
    title: 'School & University Portals', 
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80' 
  },
  { 
    title: 'Online Academies', 
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=600&q=80' 
  },
  { 
    title: 'Academic Journals', 
    image: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=600&q=80' 
  },
  { 
    title: 'Financial Web Apps', 
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80' 
  },
  { 
    title: 'Accounting Applications', 
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80' 
  },
  { 
    title: 'Booking Systems', 
    image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=600&q=80' 
  },
  { 
    title: 'Lots More...', 
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80' 
  },
];

const ServicesPage = () => {
  return (
    <section className="w-full text-gray-900 px-[10px] py-[10px] font-sans" style={{ background: "#e4ecf3" }}>
      
      {/* Hero Section */}
      <div
        className="relative w-full h-[60vh] flex items-center justify-center bg-cover bg-center rounded-3xl overflow-hidden shadow-xl border border-white/60 mb-[10px]"
        style={{ backgroundImage: 'url(/techp.jpg)' }}
      >
        {/* Crisp glassmorphism overlay */}
        <div className="absolute inset-0 bg-white/70 backdrop-blur-xs" />

        <div className="relative z-10 p-[10px] rounded-2xl text-center max-w-3xl  mx-[10px]">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-wider mb-[10px]" >
            <span 
              className="text-gray-900 inline-block italic" 
              style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.2)' }}
            >
              OUR
            </span>{' '}
            <span
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 inline-block italic"
              style={{
                WebkitTextStroke: '1px rgba(255, 255, 255, 0.9)',
                filter: 'drop-shadow(0 2px 6px rgba(0, 0, 0, 0.3))',
              }}
            >
              SERVICES
            </span>
          </h1>

          <p className="text-gray-700 text-xs sm:text-sm font-medium leading-relaxed max-w-xl mx-auto mb-[10px]">
            From sleek business websites to advanced web applications, we craft tailored digital experiences that drive results. Explore our wide range of professional web development services.
          </p>

          <a href="#services" className="inline-block w-full sm:w-auto">
            <button className="w-full sm:w-auto px-6 py-3 text-xs sm:text-sm bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 mx-auto">
              <span>View Services</span>
              <span>👇</span>
            </button>
          </a>
        </div>
      </div>

      {/* Services Section */}
      <div id="services" className="w-full max-w-5xl mx-auto space-y-[10px]">
        
        {/* Section Header Card */}
        <div className="p-[10px] rounded-2xl bg-white/70 backdrop-blur-md border border-white/60 shadow-xl text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-[6px]">
            Web Development Services 💼
          </h2>
          <p className="text-xs text-gray-600">
            Engineered with modern stacks, high performance, and unmatched aesthetics.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[10px]">
          {services.map((service, index) => (
            <div 
              key={index}
              className="p-[10px] rounded-2xl bg-white/70 backdrop-blur-md border border-white/60 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 flex flex-col items-center text-center cursor-pointer group overflow-hidden"
            >
              <div 
                className="w-full h-36 rounded-xl overflow-hidden mb-[10px] shadow-md bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                style={{ backgroundImage: `url(${service.image})` }}
              />
              <h3 className="text-xs sm:text-sm font-bold text-gray-900">
                {service.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Contact Form Wrapper Component Container */}
        <div className="p-[10px] rounded-2xl bg-white/70 backdrop-blur-md border border-white/60 shadow-xl">
          <ContactForm />
        </div>

      </div>
    </section>
  );
};

export default ServicesPage;