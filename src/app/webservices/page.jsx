

// 'use client';

// import React from 'react';


// import ContactForm from '../components/ContactForm';
// import { FaArrowAltCircleLeft } from 'react-icons/fa';

// // Services Data with high-quality Unsplash image URLs used as standard background/img tags to bypass next.config.js domain restrictions
// const services = [
//   { 
//     title: 'Website Design & Development', 
//     image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80' 
//   },
//   { 
//     title: 'Business Websites', 
//     image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80' 
//   },
//   { 
//     title: 'E-Commerce Platforms', 
//     image: '/ecom.png' 
//   },
//   { 
//     title: 'School & University Portals', 
//     image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80' 
//   },
//   { 
//     title: 'Online Academies', 
//     image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=600&q=80' 
//   },
//   { 
//     title: 'Academic Journals', 
//     image: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=600&q=80' 
//   },
//   { 
//     title: 'Financial Web Apps', 
//     image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80' 
//   },
//   { 
//     title: 'Accounting Applications', 
//     image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80' 
//   },
//   { 
//     title: 'Booking Systems', 
//     image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=600&q=80' 
//   },
//   { 
//     title: 'Lots More...', 
//     image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80' 
//   },
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

//         <div className="relative z-10 p-[10px] rounded-2xl text-center max-w-3xl  mx-[10px]">
//           <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-wider mb-[10px]" >
//             <span 
//               className="text-gray-900 inline-block italic" 
//               style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.2)' }}
//             >
//             Website
//             </span>{' '}
//             <span
//               className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 inline-block italic"
//               style={{
//                 WebkitTextStroke: '1px rgba(255, 255, 255, 0.9)',
//                 filter: 'drop-shadow(0 2px 6px rgba(0, 0, 0, 0.3))',
//               }}
//             >
//               Developments
//             </span>
//           </h1>

//           <p className="text-gray-700 text-xs sm:text-sm font-medium leading-relaxed max-w-xl mx-auto mb-[10px]">
//            We build the best websites, business websites, e-commerce, advanced web applications and lots more. We craft tailored digital experiences that drive results. Explore our wide range of professional web development services.
//           </p>

//           <a href="#services" className="inline-block w-full sm:w-auto">
//             <button className="w-full sm:w-auto px-6 py-3 text-xs sm:text-sm bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 mx-auto">
//               <span>Explore</span>
//               <span>👇</span>
//             </button>
//           </a>
//           <button>
//             Back to Home <FaArrowAltCircleLeft/>
//           </button>
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
//               className="p-[10px] rounded-2xl bg-white/70 backdrop-blur-md border border-white/60 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 flex flex-col items-center text-center cursor-pointer group overflow-hidden"
//             >
//               <div 
//                 className="w-full h-36 rounded-xl overflow-hidden mb-[10px] shadow-md bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
//                 style={{ backgroundImage: `url(${service.image})` }}
//               />
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
import { useRouter } from 'next/navigation';
import styled from 'styled-components';
import ContactForm from '../components/ContactForm';
import { FaArrowAltCircleLeft } from 'react-icons/fa';

// Services Data
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
    image: '/ecom.png' 
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
  const router = useRouter();

  const scrollToServices = () => {
    const el = document.getElementById("services");
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <PageWrapper>
      
      {/* Hero Section */}
      <HeroSection>
        <HeroOverlay />
        <HeroContent>
          <HeroTitle>
            <HeroTitleMain>Website</HeroTitleMain>{' '}
            <HeroTitleGradient>Developments</HeroTitleGradient>
          </HeroTitle>

          <HeroDescription>
            We build the best websites, business websites, e-commerce, advanced web applications and lots more. We craft tailored digital experiences that drive results. Explore our wide range of professional web development services.
          </HeroDescription>

          <ButtonGroup>
            <ExploreButton onClick={scrollToServices}>
              <span>Explore</span>
              <span>👇</span>
            </ExploreButton>
            
            <BackButton onClick={() => router.push('/')}>
              Back to Home <FaArrowAltCircleLeft />
            </BackButton>
          </ButtonGroup>
        </HeroContent>
      </HeroSection>

      {/* Services Section */}
      <MainContainer id="services">
        
        {/* Section Header Card */}
        <HeaderCard>
          <SectionHeading>Web Development Services 💼</SectionHeading>
          <SectionSubtext>
             We build the best of all kinds of websites, business websites, e-commerce, advanced web applications and lots more. 
             Just contact or send us a message below.       
          </SectionSubtext>
        </HeaderCard>

        {/* Services Grid */}
        <Grid>
          {services.map((service, index) => (
            <ServiceCard key={index}>
              <ServiceImage $bgImage={service.image} />
              <ServiceTitle>{service.title}</ServiceTitle>
            </ServiceCard>
          ))}
        </Grid>

        {/* Contact Form Wrapper Component Container */}
        <FormCard>
          <ContactForm />
        </FormCard>

      </MainContainer>
    </PageWrapper>
  );
};

export default ServicesPage;

/* ==================== STYLED COMPONENTS ==================== */

const PageWrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  color: #111827;
  padding: 16px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: #e4ecf3;
  box-sizing: border-box;
  overflow-x: hidden;
`;

const HeroSection = styled.div`
  position: relative;
  width: 100%;
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('/techp.jpg');
  background-size: cover;
  background-position: center;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.6);
  margin-bottom: 24px;
  padding: 40px 16px;
  box-sizing: border-box;
`;

const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  // backdrop-filter: blur(4px);
  // -webkit-backdrop-filter: blur(4px);
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 10;
  padding: 24px;
  border-radius: 20px;
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const HeroTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 950;
  letter-spacing: -0.02em;
  line-height: 1.2;
  margin: 0;

  @media (min-width: 640px) {
    font-size: 3.5rem;
  }
`;

const HeroTitleMain = styled.span`
  color:white;
  font-style: italic;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`;

const HeroTitleGradient = styled.span`
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  background-image: linear-gradient(to right, #2563eb, #4f46e5, #9333ea);
  font-style: italic;
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.9);
  filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.25));
`;

const HeroDescription = styled.p`
  color: white;
  font-size: 0.9rem;
  font-weight: 500;
  line-height: 1.6;
  max-width: 580px;
  margin: 0;

  @media (min-width: 640px) {
    font-size: 1rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  sm-flex-direction: row;
  gap: 12px;
  width: 100%;
  max-width: 380px;
  justify-content: center;
  align-items: center;
  margin-top: 8px;

  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

const ExploreButton = styled.button`
  width: 100%;
  padding: 12px 24px;
  font-size: 0.9rem;
  font-weight: 700;
  background: linear-gradient(to right, #2563eb, #9333ea);
  color: #ffffff;
  border: none;
  border-radius: 12px;
  box-shadow: 0 10px 15px -3px rgba(37, 99, 235, 0.3);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 250ms ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 15px 20px -3px rgba(37, 99, 235, 0.4);
  }

  &:active {
    transform: translateY(0);
  }
`;

const BackButton = styled.button`
  width: 100%;
  padding: 12px 20px;
  font-size: 0.9rem;
  font-weight: 700;
  background: rgba(255, 255, 255, 0.8);
  color: #1f2937;
  border: 1px solid rgba(209, 213, 219, 0.8);
  border-radius: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 250ms ease;
  backdrop-filter: blur(4px);

  &:hover {
    background: #ffffff;
    border-color: #9ca3af;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

const MainContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-sizing: border-box;
  padding-top:50px;
`;

const HeaderCard = styled.div`
  padding: 24px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.8);
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05);
  text-align: center;
`;

const SectionHeading = styled.h2`
  font-size: 1.5rem;
  font-weight: 800;
  color: #111827;
  margin: 0 0 8px 0;

  @media (min-width: 640px) {
    font-size: 1.85rem;
  }
`;

const SectionSubtext = styled.p`
  font-size: 0.9rem;
  color: #4b5563;
  margin: 0;
  font-weight: 500;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ServiceCard = styled.div`
  padding: 16px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.8);
  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  cursor: pointer;
  overflow: hidden;
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 30px -10px rgba(0, 0, 0, 0.12);
    border-color: rgba(37, 99, 235, 0.4);
  }

  &:hover div {
    transform: scale(1.05);
  }
`;

const ServiceImage = styled.div`
  width: 100%;
  height: 160px;
  border-radius: 14px;
  margin-bottom: 14px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  background-image: ${({ $bgImage }) => `url(${$bgImage})`};
  background-size: cover;
  background-position: center;
  transition: transform 500ms ease;
`;

const ServiceTitle = styled.h3`
  font-size: 0.95rem;
  font-weight: 700;
  color: #1f2937;
  margin: 0;
`;

const FormCard = styled.div`
  padding: 24px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.8);
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05);
`;