
// import Image from 'next/image';

// const AboutUs= () => {
//   return (
//     <section className="w-full text-gray-900 px-[10px] py-[10px] font-sans" style={{ background: "#e4ecf3" }}>
      
//       {/* Hero Section */}
//       <div
//         className="relative w-full h-[50vh] flex items-center justify-center bg-cover bg-center rounded-3xl overflow-hidden shadow-xl border border-white/60 mb-[10px]"
//         style={{ backgroundImage: 'url(/h2.png)' }}
//       >
//         {/* Light overlay */}
//         <div className="absolute inset-0 bg-white/70 backdrop-blur-sm" />

//         <div className="relative z-10 p-[10px] rounded-2xl text-center max-w-2xl bg-white/60 backdrop-blur-md shadow-xl border border-white/80 mx-[10px]">
//           <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-wider mb-[10px]">
//             <span 
//               className="text-gray-900 inline-block italic" 
//               style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.2)' }}
//             >
//               ABOUT
//             </span>{' '}
//             <span
//               className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 inline-block italic"
//               style={{
//                 WebkitTextStroke: '1px rgba(255, 255, 255, 0.9)',
//                 filter: 'drop-shadow(0 2px 6px rgba(0, 0, 0, 0.3))',
//               }}
//             >
//               ECHOBYTE
//             </span>
//           </h1>
//         </div>
//       </div>

//       {/* About Content Container */}
//       <div className="w-full max-w-5xl mx-auto space-y-[10px]">

//         {/* Who We Are */}
//         <div className="p-[10px] rounded-2xl bg-white/70 backdrop-blur-md border border-white/60 shadow-xl">
//           <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-[10px]">
//             Who We Are 👋
//           </h2>
//           <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
//             <strong className="text-gray-900">Echobyte Concept</strong> is a creative
//             digital agency with a passion for building cutting-edge solutions that
//             transform ideas into real-world success. From sleek websites 🖥️ and
//             intuitive mobile apps 📱 to curated digital products 🎓,
//             revenue-generating platforms 💰, AI-powered, and automated digital solutions — we do it all.
//           </p>
//         </div>

//         {/* Image 1 */}
//         <div className="p-[10px] rounded-2xl bg-white/70 backdrop-blur-md border border-white/60 shadow-xl overflow-hidden flex justify-center">
//           <Image
//             src="/staff.jpg"
//             alt="Devices Showcasing Echobyte's Work"
//             width={1200}
//             height={600}
//             className="rounded-xl shadow-md w-full object-cover max-h-[400px]"
//           />
//         </div>

//         {/* Our Mission */}
//         <div className="p-[10px] rounded-2xl bg-white/70 backdrop-blur-md border border-white/60 shadow-xl">
//           <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-[10px]">
//             Our Mission 🎯
//           </h2>
//           <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
//             To provide accessible, affordable, and high-impact digital tools and
//             services that help our clients stand out in today’s fast-evolving
//             digital world.
//           </p>
//         </div>

//         {/* What We Do */}
//         <div className="p-[10px] rounded-2xl bg-white/70 backdrop-blur-md border border-white/60 shadow-xl">
//           <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-[10px]">
//             What We Do 💼
//           </h2>
//           <ul className="grid grid-cols-1 sm:grid-cols-2 gap-[10px] text-xs sm:text-sm">
//             <li className="p-[10px] rounded-xl bg-white/50 border border-white/80"><strong className="text-gray-900">Web Development:</strong> Modern, responsive websites and web applications.</li>
//             <li className="p-[10px] rounded-xl bg-white/50 border border-white/80"><strong className="text-gray-900">Mobile App Development:</strong> Beautiful, user-friendly mobile apps.</li>
//             <li className="p-[10px] rounded-xl bg-white/50 border border-white/80"><strong className="text-gray-900">Digital Products Store:</strong> eBooks, templates, courses, and tools.</li>
//             <li className="p-[10px] rounded-xl bg-white/50 border border-white/80"><strong className="text-gray-900">Affiliate Program:</strong> Earn by referring others — zero investment.</li>
//             <li className="p-[10px] rounded-xl bg-white/50 border border-white/80"><strong className="text-gray-900">Partnerships:</strong> Partner with us and build your brand.</li>
//             <li className="p-[10px] rounded-xl bg-white/50 border border-white/80"><strong className="text-gray-900">Portfolio Builder:</strong> Replace your CV with a modern personal website.</li>
//             <li className="p-[10px] rounded-xl bg-white/50 border border-white/80 sm:col-span-2"><strong className="text-gray-900">Custom Solutions:</strong> We build digital solutions tailored to your specific needs.</li>
//           </ul>
//         </div>

//         {/* Why Choose Us */}
//         <div className="p-[10px] rounded-2xl bg-white/70 backdrop-blur-md border border-white/60 shadow-xl">
//           <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-[10px]">
//             Why Choose Us? 💡
//           </h2>
//           <ul className="grid grid-cols-1 sm:grid-cols-2 gap-[10px] text-xs sm:text-sm">
//             <li className="p-[10px] rounded-xl bg-white/50 border border-white/80">🔧 Fast, reliable, and scalable solutions</li>
//             <li className="p-[10px] rounded-xl bg-white/50 border border-white/80">🎨 Clean and visually appealing UI/UX</li>
//             <li className="p-[10px] rounded-xl bg-white/50 border border-white/80">🧠 Experienced and forward-thinking team</li>
//             <li className="p-[10px] rounded-xl bg-white/50 border border-white/80">📈 Growth-driven digital strategies</li>
//             <li className="p-[10px] rounded-xl bg-white/50 border border-white/80 sm:col-span-2">🤝 Client-first and affordable approach</li>
//           </ul>
//         </div>

//         {/* Image 2 */}
//         <div className="p-[10px] rounded-2xl bg-white/70 backdrop-blur-md border border-white/60 shadow-xl overflow-hidden flex justify-center">
//           <Image
//             src="/team.jpeg"
//             alt="Team Collaboration"
//             width={1200}
//             height={600}
//             className="rounded-xl shadow-md w-full object-cover max-h-[400px]"
//           />
//         </div>

//         {/* Let's Build Something Amazing Together */}
//         <div className="p-[10px] rounded-2xl bg-white/70 backdrop-blur-md border border-white/60 shadow-xl text-center">
//           <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-[10px]">
//             Let’s Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Amazing Together</span> 🛠️
//           </h2>
//           <p className="text-gray-600 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto mb-[10px]">
//             Whether you are a startup founder, freelancer, small business owner,
//             or someone with a big vision — <strong className="text-gray-900">Echobyte Concept</strong>
//             is here to support your journey into the digital frontier.
//           </p>
          
//           <div className="pt-[10px] border-t border-gray-200/60 flex flex-col sm:flex-row items-center justify-center gap-[10px] text-xs sm:text-sm font-semibold text-gray-600">
//             <span>💌 Contact us:</span>
//             <a
//               href="mailto:echobyteconcept@gmail.com"
//               className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 underline"
//             >
//               echobyteconcept@gmail.com
//             </a>
//             <span className="hidden sm:inline">|</span>
//             <span>📞 +234 706 348 0314</span>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default AboutUs;





'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import styled from 'styled-components';

const EchobyteLandingPage = () => {
  const router=useRouter();
  const servicesAndPlatforms = [
    {
      title: "Website & Web App Building",
      description: "We engineer lightning-fast, highly scalable, and responsive custom websites and powerful web applications tailored to elevate your brand and business operations.",
      badge: "Development Service",
      actionText: "Request Website Build",
      url: "/webservices",
      external: false
    },
    {
      title: "Mobile App Building",
      description: "We transform your ideas into high-performance, feature-rich iOS and Android mobile applications built using modern cross-platform frameworks.",
      badge: "Development Service",
      actionText: "Request Mobile App",
      url: "/mobileservices",
      external: false
    },
    {
      title: "Portfolio Builder Platform",
      description: "Build a stunning, professional personal or business showcase in minutes. Display your projects, skills, and resume with clean, modern layouts.",
      badge: "Platform & Tool",
      actionText: "Build Your Portfolio",
      url: "https://myportfolioechobyte.vercel.app/",
      external: true
    },
    {
      title: "Digital Marketplace Platform",
      description: "Create your own digital store effortlessly. Register, list your digital products or services, and let customers purchase securely from you online.",
      badge: "Platform & Tool",
      actionText: "Create Digital Store",
      url: "https://echobytedigital.vercel.app/",
      external: true
    },
    {
      title: "Course Platform for Video Courses",
      description: "A specialized platform of online video courses with a seamless learning experience.",
      badge: "Platform & Tool",
      actionText: "Explore Course Platform",
      url: "https://echobytedigitalstore.vercel.app/",
      external: true
    }
  ];

const handleActionClick = (url) => {
    if (url.startsWith('https://') || url.startsWith('http://')) {
      window.open(url, "_blank", "noopener,noreferrer");
    } else {
      router.push(url);
    }
  };

  return (
    <PageWrapper>
      {/* Hero Section */}
      <HeroSection>
        <HeroOverlay />
        <HeroContent>
          <WelcomeBadge>WELCOME TO</WelcomeBadge>
          <HeroHeading>
            <BrandName>ECHOBYTE</BrandName>{' '}
            <BrandConcept>CONCEPT</BrandConcept>
          </HeroHeading>
          <HeroSub>YOUR ALL IN ONE DIGITAL SOLUTIONS</HeroSub>
          <HeroDescription>
            We empower creators, businesses, and entrepreneurs with state-of-the-art web apps, mobile apps, portfolios, marketplaces, and e-learning platforms.
          </HeroDescription>
          <HeroButton onClick={() => {
            const el = document.getElementById("services-section");
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}>
            Explore Our Solutions ↗
          </HeroButton>
        </HeroContent>
      </HeroSection>

      {/* Main Content / Services Section */}
      <MainContainer id="services-section">
        <SectionHeader>
          <SectionSubtitle>What We Do</SectionSubtitle>
          <SectionTitle>Our Core Services & Platforms</SectionTitle>
          <SectionDesc>
            Discover everything Echobyte Concept offers to scale your digital presence and revenue.
          </SectionDesc>
        </SectionHeader>

        <ServicesGrid>
          {servicesAndPlatforms.map((item, index) => (
            <ServiceCard key={index}>
              <CardTopRow>
                <CardBadge>{item.badge}</CardBadge>
                <CardArrow>↗</CardArrow>
              </CardTopRow>
              <CardTitle>{item.title}</CardTitle>
              <CardDesc>{item.description}</CardDesc>
              <CardButton onClick={() => handleActionClick(item.url, item.external)}>
                {item.actionText} ↗
              </CardButton>
            </ServiceCard>
          ))}
        </ServicesGrid>

        {/* About / Value Proposition Section */}
        <AboutSection id="contact">
          <AboutTitle>Why Choose Echobyte Concept?</AboutTitle>
          <AboutText>
            At Echobyte Concept, we combine technical excellence with robust digital infrastructure. Whether you need custom full-stack software development or plug-and-play platforms to sell products, services, and video courses, we provide the ultimate ecosystem for your digital success.
          </AboutText>
        </AboutSection>
      </MainContainer>
    </PageWrapper>
  );
};

export default EchobyteLandingPage;

/* ==================== LIGHT THEME STYLED COMPONENTS ==================== */

const PageWrapper = styled.div`
  background-color: #f8fafc;
  color: #0f172a;
  min-height: 100vh;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  overflow-x: hidden;
`;

const HeroSection = styled.section`
  position: relative;
  min-height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: #0f172a;
  text-align: center;
`;

const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  background-image: url('/h3.png');
  background-size: cover;
  background-position: top;
  background-color: rgba(15, 23, 42, 0.85);
  background-blend-mode: multiply;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 10;
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
`;

const WelcomeBadge = styled.span`
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  color: #93c5fd;
  text-transform: uppercase;
`;

const HeroHeading = styled.h1`
  font-size: 2.25rem;
  font-weight: 900;
  line-height: 1.1;
  margin: 0;

  @media (min-width: 640px) {
    font-size: 3rem;
  }
`;

const BrandName = styled.span`
  color: #ffffff;
  text-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
`;

const BrandConcept = styled.span`
  -webkit-text-stroke: 1px #ffffff;
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  background-image: linear-gradient(to right, #3b82f6, #6366f1, #a855f7);
`;

const HeroSub = styled.p`
  font-size: 0.95rem;
  font-weight: 700;
  color: #e2e8f0;
  letter-spacing: 0.05em;
  margin: 0;
`;

const HeroDescription = styled.p`
  font-size: 0.9rem;
  color: #cbd5e1;
  line-height: 1.5;
  margin: 0;
`;

const HeroButton = styled.button`
  background: linear-gradient(to right, #2563eb, #4f46e5, #7e22ce);
  color: #ffffff;
  font-weight: 700;
  font-size: 0.95rem;
  padding: 10px 16px;
  border-radius: 8px;
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);
  box-shadow: 0 4px 0 #1e1b4b, 0 8px 12px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: all 150px ease-in-out;
  margin-top: 10px;

  &:hover {
    transform: translateY(2px);
    box-shadow: 0 2px 0 #1e1b4b, 0 4px 8px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: translateY(4px);
    box-shadow: 0 0px 0 #1e1b4b, 0 2px 4px rgba(0, 0, 0, 0.3);
  }
`;

const MainContainer = styled.main`
  max-width: 900px;
  margin: 0 auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const SectionHeader = styled.div`
  text-align: center;
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const SectionSubtitle = styled.span`
  font-size: 0.75rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: #2563eb;
`;

const SectionTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 900;
  color: #0f172a;
  margin: 0;

  @media (min-width: 640px) {
    font-size: 2.25rem;
  }
`;

const SectionDesc = styled.p`
  font-size: 0.95rem;
  color: #475569;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.5;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ServiceCard = styled.div`
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
  transition: transform 150px ease, box-shadow 150px ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.08);
  }
`;

const CardTopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

const CardBadge = styled.span`
  background-color: #eff6ff;
  color: #2563eb;
  font-size: 0.7rem;
  font-weight: 700;
  padding: 4px 8px;
  border-radius: 4px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const CardArrow = styled.span`
  color: #64748b;
  font-size: 1rem;
  font-weight: bold;
`;

const CardTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 800;
  color: #0f172a;
  margin: 0;
  line-height: 1.3;
`;

const CardDesc = styled.p`
  font-size: 0.85rem;
  color: #475569;
  line-height: 1.45;
  margin: 0;
  flex-grow: 1;
`;

const CardButton = styled.button`
  background: linear-gradient(to right, #2563eb, #4f46e5, #7e22ce);
  color: #ffffff;
  font-weight: 700;
  font-size: 0.85rem;
  padding: 8px 10px;
  border-radius: 6px;
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);
  box-shadow: 0 3px 0 #1e1b4b, 0 6px 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: all 150px ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  &:hover {
    transform: translateY(1px);
    box-shadow: 0 1px 0 #1e1b4b, 0 3px 6px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(2px);
    box-shadow: 0 0px 0 #1e1b4b, 0 1px 3px rgba(0, 0, 0, 0.2);
  }
`;

const AboutSection = styled.section`
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
`;

const AboutTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 900;
  color: #0f172a;
  margin: 0;
`;

const AboutText = styled.p`
  font-size: 0.9rem;
  color: #475569;
  line-height: 1.5;
  max-width: 700px;
  margin: 0 auto;
`;