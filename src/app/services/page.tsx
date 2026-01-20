
'use client';

import React from 'react';
import styled from 'styled-components';
import {
  FaCode,
  FaGlobe,
  FaShoppingCart,
  FaUniversity,
  FaSchool,
  FaBook,
  FaChartLine,
  FaCalculator,
  FaCalendarAlt,
} from 'react-icons/fa';

import ContactForm from '../components/ContactForm';


// Services Data
const services = [
  { title: 'Website Design & Development', icon: <FaCode /> },
  { title: 'Business Websites', icon: <FaGlobe /> },
  { title: 'E-Commerce Platforms', icon: <FaShoppingCart /> },
  { title: 'School & University Portals', icon: <FaUniversity /> },
  { title: 'Online Academies', icon: <FaSchool /> },
  { title: 'Academic Journals', icon: <FaBook /> },
  { title: 'Financial Web Apps', icon: <FaChartLine /> },
  { title: 'Accounting Applications', icon: <FaCalculator /> },
  { title: 'Booking Systems', icon: <FaCalendarAlt /> },
  { title: 'Lots More...', icon: <FaChartLine /> },
];

/* =========================
   Styled Components (Light)
========================= */

const PageWrapper = styled.div`
  min-height: 100vh;
  background: #f9fafb;
  display: flex;
  flex-direction: column;
`;

const HeroSection = styled.section`
  width: 100%;
  padding: 110px 30px;
  text-align: center;
  background-image: url('/techp.jpg');
  background-size: cover;
  background-position: center;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(255, 255, 255, 0.6);
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  color: #111827;
  margin-bottom: 20px;
`;

const HeroText = styled.p`
  font-size: 1.2rem;
  max-width: 700px;
  margin: 0 auto 30px;
  // color: #374151;
  color:rgba(0,0,0,1);
`;

const CTAButton = styled.a`
  display: inline-block;
  background-color:gray;
  color:white;
  padding: 12px 34px;
  border-radius: 999px;
  font-weight: bold;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgb(96, 165, 250);
    transform: translateY(-2px);
  }
`;

const ServicesSection = styled.section`
  padding: 90px 30px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 2.6rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 50px;
  text-align: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 32px;
  width: 100%;
  max-width: 1200px;
`;

const Card = styled.div`
  background: #ffffff;
  border-radius: 18px;
  padding: 34px 22px;
  text-align: center;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
  transition: all 0.35s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 18px 40px rgba(250, 204, 21, 0.25);
  }
`;

const IconWrapper = styled.div`
  font-size: 3rem;
  color: #facc15;
   color:rgb(96, 165, 250);
  margin-bottom: 16px;
`;

const ServiceTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
`;

/* =========================
   Component
========================= */

const ServicesPage = () => {
  return (
    <PageWrapper>
      {/* Hero */}
      <HeroSection>
        <HeroContent>
          <HeroTitle>Empowering Your Online Presence</HeroTitle>
          <HeroText>
            From sleek business websites to advanced web applications, we craft
            tailored digital experiences that drive results. Explore our wide
            range of professional web development services.
          </HeroText>
          <CTAButton href="#services">View Services</CTAButton>
        </HeroContent>
      </HeroSection>

      {/* Services */}
      <ServicesSection id="services">
        <Title>Our Web Development Services</Title>
        <Grid>
          {services.map((service, index) => (
            <Card key={index}>
              <IconWrapper>{service.icon}</IconWrapper>
              <ServiceTitle>{service.title}</ServiceTitle>
            </Card>
          ))}
        </Grid>
      </ServicesSection>

      {/* Contact */}
      <ContactForm />
    </PageWrapper>
  );
};

export default ServicesPage;
