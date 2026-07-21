'use client';

import TrustSection from "./components/TrustSection";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import WhyChooseSection from "./components/WhyChooseSection";
import ContactForm from "./components/ContactForm";
import Testimonials from "./components/Testimonials";
import ProjectsMilestoneBadge from "./components/ProjectsMilestoneBadge";
import PromoBannerCard from "./components/PromoBannerCard";
// import { useRouter } from "next/router";




export default function LandingPage() {

  // const router = useRouter();






  return (
    <div className="bg-white text-white min-h-screen font-sans">
      <HeroSection/>
      <PromoBannerCard/>
      <ServicesSection/>
     
      <WhyChooseSection/>

      <Testimonials/>
<TrustSection/>

<ProjectsMilestoneBadge/>
<ContactForm/>

 {/* <h2 className="text-3xl sm:text-3xl font-bold text-center text-white mb-4" onClick={()=>router.push('/ourclients')}>
          Meet our <span className="text-yellow-400">Clients...</span>
        </h2> */}

 

     {/* <JobAd/> */}

     {/* <QRCodeDisplay/> */}

    </div>
  );
}


