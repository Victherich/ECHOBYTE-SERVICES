
'use client';

import React from 'react';
import styled from 'styled-components';
import {
  FaMobileAlt,
  FaAndroid,
  FaApple,
  FaTabletAlt,
  FaCogs,
  FaRocket,
  FaDatabase,
  FaLock,
  FaBug
} from 'react-icons/fa';

import ContactForm from '../components/ContactForm';
import Link from 'next/link';

// Mobile App Services Data
const services = [
  { title: 'iOS App Development', icon: <FaApple /> },
  { title: 'Android App Development', icon: <FaAndroid /> },
  { title: 'Cross-Platform Apps', icon: <FaMobileAlt /> },
  { title: 'Tablet App Design', icon: <FaTabletAlt /> },
  { title: 'UI/UX for Mobile', icon: <FaCogs /> },
  { title: 'App Store Deployment', icon: <FaRocket /> },
  { title: 'Backend Integration', icon: <FaDatabase /> },
  { title: 'App Security Services', icon: <FaLock /> },
  { title: 'App Testing & QA', icon: <FaBug /> },
  { title: 'And Lots More...', icon: <FaRocket /> },
];

// Styled Components (Same as original)
const PageWrapper = styled.div`
  min-height: 100vh;
  // background: linear-gradient(135deg, #0f172a, #1e293b);
  display: flex;
  flex-direction: column;
`;

const HeroSection = styled.section`
  width: 100%;
  padding: 100px 30px;
  text-align: center;
  color: white;
  background-image: url('/mobile-app.jpg'); /* replace with a mobile-relevant image */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: -1;
  }
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  color: white;
  margin-bottom: 20px;
`;

const HeroText = styled.p`
  font-size: 1.2rem;
  max-width: 700px;
  margin: 0 auto 30px;
  color: #d1d5db;
`;

const CTAButton = styled.a`
  display: inline-block;
  background-color: #facc15;
  color: #111827;
  padding: 12px 30px;
  border-radius: 999px;
  font-weight: bold;
  font-size: 1rem;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #eab308;
  }
`;

const ServicesSection = styled.section`
  padding: 80px 30px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 40px;
  text-align: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 30px;
  width: 100%;
  max-width: 1200px;
`;

const Card = styled.div`
  background: linear-gradient(135deg, #1e293b, #334155);
  border-radius: 16px;
  padding: 30px 20px;
  color: white;
  text-align: center;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover {
    transform: translateY(-10px) scale(1.03);
    box-shadow: 0 12px 30px rgba(250, 204, 21, 0.2);
  }
`;

const IconWrapper = styled.div`
  font-size: 3rem;
  color: #facc15;
  margin-bottom: 15px;
`;

const ServiceTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
`;

const ServicesPage = () => {
  return (
    <PageWrapper className='bg-gray-950'>
      <HeroSection>
        <HeroTitle>Innovative Mobile App Solutions</HeroTitle>
        <HeroText>
      
          We build cutting-edge mobile apps that deliver real results. Discover our mobile-focused services.
        </HeroText>
        <CTAButton href="#services">Explore Services</CTAButton>
      </HeroSection>

      <ServicesSection id="services">
        <Title>Our Mobile App Development Services</Title>
        <Grid>
          {services.map((service, index) => (
            <Card key={index}>
              <IconWrapper>{service.icon}</IconWrapper>
              <ServiceTitle>{service.title}</ServiceTitle>
            </Card>
          ))}
        </Grid>
      </ServicesSection>

      <ContactForm />

      <div className="flex justify-center m-10">
        <Link
          href="/"
          className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-6 py-3 rounded-full transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </PageWrapper>
  );
};

export default ServicesPage;
