


// 'use client';

// import React from 'react';
// import styled from 'styled-components';
// import {
//   FaMobileAlt,
//   FaAndroid,
//   FaApple,
//   FaTabletAlt,
//   FaCogs,
//   FaRocket,
//   FaDatabase,
//   FaLock,
//   FaBug,
// } from 'react-icons/fa';

// import ContactForm from '../components/ContactForm';


// // Mobile App Services Data
// const services = [
//   { title: 'iOS App Development', icon: <FaApple /> },
//   { title: 'Android App Development', icon: <FaAndroid /> },
//   { title: 'Cross-Platform Apps', icon: <FaMobileAlt /> },
//   { title: 'Tablet App Design', icon: <FaTabletAlt /> },
//   { title: 'UI/UX for Mobile', icon: <FaCogs /> },
//   { title: 'App Store Deployment', icon: <FaRocket /> },
//   { title: 'Backend Integration', icon: <FaDatabase /> },
//   { title: 'App Security Services', icon: <FaLock /> },
//   { title: 'App Testing & QA', icon: <FaBug /> },
//   { title: 'And Lots More...', icon: <FaRocket /> },
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
//   background-image: url('/mobile-app.jpg');
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
//   max-width: 720px;
//   margin: 0 auto 30px;
//   color: black;
// `;

// const CTAButton = styled.a`
//   display: inline-block;
//   background-color: gray;
//   color: white;
//   padding: 12px 34px;
//   border-radius: 999px;
//   font-weight: bold;
//   text-decoration: none;
//   transition: all 0.3s ease;

//   &:hover {
//     background-color:rgb(96, 165, 250);
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
//   color:rgb(96, 165, 250);
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
//           <HeroTitle>Innovative Mobile App Solutions</HeroTitle>
//           <HeroText>
//             We build cutting-edge mobile applications designed for performance,
//             scalability, and user experience across all platforms.
//           </HeroText>
//           <CTAButton href="#services">Explore Services</CTAButton>
//         </HeroContent>
//       </HeroSection>

//       {/* Services */}
//       <ServicesSection id="services">
//         <Title>Our Mobile App Development Services</Title>
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


'use client';

import React from 'react';
import Link from 'next/link';

import ContactForm from '../components/ContactForm';

// Mobile App Services Data with Unsplash imagery
const services = [
  { 
    title: 'iOS App Development', 
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80' 
  },
  { 
    title: 'Android App Development', 
    image: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?auto=format&fit=crop&w=600&q=80' 
  },
  { 
    title: 'Cross-Platform Apps', 
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=600&q=80' 
  },
  { 
    title: 'Tablet App Design', 
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80' 
  },
  { 
    title: 'UI/UX for Mobile', 
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=600&q=80' 
  },
  { 
    title: 'App Store Deployment', 
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=600&q=80' 
  },
  { 
    title: 'Backend Integration', 
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80' 
  },
  { 
    title: 'App Security Services', 
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80' 
  },
  { 
    title: 'App Testing & QA', 
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80' 
  },
  { 
    title: 'And Lots More...', 
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80' 
  },
];

const MobileAppServicesPage = () => {
  return (
    <section className="w-full text-gray-900 px-[10px] py-[10px] font-sans" style={{ background: "#e4ecf3" }}>
      
      {/* Hero Section */}
      <div
        className="relative w-full h-[60vh] flex items-center justify-center bg-cover bg-center rounded-3xl overflow-hidden shadow-xl border border-white/60 mb-[10px]"
        style={{ backgroundImage: 'url(/s2.png)' }}
      >
        {/* Crisp glassmorphism overlay */}
        <div className="absolute inset-0 bg-white/70 backdrop-blur-xs" />

        <div className="relative z-10 p-[10px] rounded-2xl text-center max-w-3xl ">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-wider mb-[10px]" >
            <span 
              className="text-gray-900 inline-block italic" 
              style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.2)' }}
            >
              MOBILE
            </span>{' '}
            <span
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 inline-block italic"
              style={{
                WebkitTextStroke: '1px rgba(255, 255, 255, 0.9)',
                filter: 'drop-shadow(0 2px 6px rgba(0, 0, 0, 0.3))',
              }}
            >
              SOLUTIONS
            </span>
          </h1>

          <p className="text-gray-700 text-xs sm:text-sm font-medium leading-relaxed max-w-xl mx-auto mb-[10px]">
            We build cutting-edge mobile applications designed for performance, scalability, and user experience across all platforms.
          </p>

          <a href="#services" className="inline-block w-full sm:w-auto">
            <button className="w-full sm:w-auto px-6 py-3 text-xs sm:text-sm bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 mx-auto">
              <span>Explore Services</span>
              <span>📱</span>
            </button>
          </a>
        </div>
      </div>

      {/* Services Section */}
      <div id="services" className="w-full max-w-5xl mx-auto space-y-[10px]">
        
        {/* Section Header Card */}
        <div className="p-[10px] rounded-2xl bg-white/70 backdrop-blur-md border border-white/60 shadow-xl text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-[6px]">
            Mobile App Development Services 🚀
          </h2>
          <p className="text-xs text-gray-600">
            Engineered for elite mobile performance, high responsiveness, and fluid user engagement.
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

export default MobileAppServicesPage;
