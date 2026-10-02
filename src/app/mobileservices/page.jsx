'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';
import ContactForm from '../components/ContactForm';
import { FaArrowAltCircleLeft } from 'react-icons/fa';

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
            <HeroTitleMain>Mobile App</HeroTitleMain>{' '}
            <HeroTitleGradient>Developments</HeroTitleGradient>
          </HeroTitle>

          <HeroDescription>
            We build the best mobile applications designed for performance, scalability, and user experience across all platforms.
          </HeroDescription>

          <ButtonGroup>
            <ExploreButton onClick={scrollToServices}>
              <span>Explore</span>
              <span>📱</span>
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
          <SectionHeading>Mobile App Development Services 🚀</SectionHeading>
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

export default MobileAppServicesPage;

/* ==================== STYLED COMPONENTS ==================== */

const PageWrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  color: #111827;
  padding: 10px;
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
  background-image: url('/s2.png');
  background-size: cover;
  background-position: center;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.6);
  margin-bottom: 10px;
  padding: 40px 10px;
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
  padding: 10px;
  border-radius: 16px;
  text-align: center;
  max-width: 768px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const HeroTitle = styled.h1`
  font-size: 1.875rem;
  font-weight: 950;
  letter-spacing: 0.05em;
  line-height: 1.2;
  margin: 0 0 10px 0;

  @media (min-width: 640px) {
    font-size: 2.25rem;
  }

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const HeroTitleMain = styled.span`
  color:white;
  font-style: italic;
  display: inline-block;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
`;

const HeroTitleGradient = styled.span`
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  background-image: linear-gradient(to right, #2563eb, #4f46e5, #9333ea);
  font-style: italic;
  display: inline-block;
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.9);
  filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.3));
`;

const HeroDescription = styled.p`
  color: white;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.6;
  max-width: 576px;
  margin: 0 auto 10px auto;

  @media (min-width: 640px) {
    font-size: 0.875rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  max-width: 380px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  @media (min-width: 640px) {
    flex-direction: row;
    max-width: none;
  }
`;

const ExploreButton = styled.button`
  width: 100%;
  padding: 12px 24px;
  font-size: 0.75rem;
  font-weight: 600;
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
  transition: all 300ms ease;

  @media (min-width: 640px) {
    width: auto;
    font-size: 0.875rem;
  }

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 15px 20px -3px rgba(37, 99, 235, 0.4);
  }

  &:active {
    transform: scale(0.98);
  }
`;

const BackButton = styled.button`
  width: 100%;
  padding: 12px 20px;
  font-size: 0.75rem;
  font-weight: 600;
  background: rgba(255, 255, 255, 0.8);
  color: #1f2937;
  border: 1px solid rgba(209, 213, 219, 0.8);
  border-radius: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 300ms ease;
  backdrop-filter: blur(4px);

  @media (min-width: 640px) {
    width: auto;
    font-size: 0.875rem;
  }

  &:hover {
    background: #ffffff;
    border-color: #9ca3af;
    transform: scale(1.02);
  }

  &:active {
    transform: scale(0.98);
  }
`;

const MainContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  box-sizing: border-box;
  padding-top:50px;
`;

const HeaderCard = styled.div`
  padding: 10px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.6);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const SectionHeading = styled.h2`
  font-size: 1.25rem;
  font-weight: 700;
  color: #111827;
  margin: 0 0 6px 0;

  @media (min-width: 640px) {
    font-size: 1.5rem;
  }
`;

const SectionSubtext = styled.p`
  font-size: 0.75rem;
  color: #4b5563;
  margin: 0;
  font-weight: 500;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ServiceCard = styled.div`
  padding: 10px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.6);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  cursor: pointer;
  overflow: hidden;
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 25px 30px -10px rgba(0, 0, 0, 0.15);
    border-color: rgba(37, 99, 235, 0.4);
  }

  &:hover div {
    transform: scale(1.05);
  }
`;

const ServiceImage = styled.div`
  width: 100%;
  height: 144px;
  border-radius: 12px;
  margin-bottom: 10px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  background-image: ${({ $bgImage }) => `url(${$bgImage})`};
  background-size: cover;
  background-position: center;
  transition: transform 500ms ease;
`;

const ServiceTitle = styled.h3`
  font-size: 0.75rem;
  font-weight: 700;
  color: #111827;
  margin: 0;

  @media (min-width: 640px) {
    font-size: 0.875rem;
  }
`;

const FormCard = styled.div`
  padding: 10px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.6);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
`;