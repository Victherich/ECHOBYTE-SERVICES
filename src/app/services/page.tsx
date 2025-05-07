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
  FaCalendarAlt
} from 'react-icons/fa';

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
];

// Styled Components

const PageWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0f172a, #1e293b);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeroSection = styled.section`
  width: 100%;
  padding: 100px 30px;
  text-align: center;
  color: white;
  background: linear-gradient(to bottom, #1f2937, #111827);
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  color: #facc15;
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
  color: #facc15;
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
    <PageWrapper>
      <HeroSection>
        <HeroTitle>Empowering Your Online Presence</HeroTitle>
        <HeroText>
          From sleek business websites to advanced web applications, we craft
          tailored digital experiences that drive results. Explore our wide
          range of professional web development services.
        </HeroText>
        <CTAButton href="#services">View Services</CTAButton>
      </HeroSection>

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
    </PageWrapper>
  );
};

export default ServicesPage;
