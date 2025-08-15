'use client';

import TrustSection from "./components/TrustSection";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import WhyChooseSection from "./components/WhyChooseSection";
import ContactForm from "./components/ContactForm";
import Testimonials from "./components/Testimonials";
import ProjectsMilestoneBadge from "./components/ProjectsMilestoneBadge";
// import { useRouter } from "next/router";




export default function LandingPage() {

  // const router = useRouter();






  return (
    <div className="bg-gray-950 text-white min-h-screen font-sans">
      <HeroSection/>
      <ServicesSection/>
      <WhyChooseSection/>

      <Testimonials/>
<TrustSection/>
<ContactForm/>
<ProjectsMilestoneBadge/>

 {/* <h2 className="text-3xl sm:text-3xl font-bold text-center text-white mb-4" onClick={()=>router.push('/ourclients')}>
          Meet our <span className="text-yellow-400">Clients...</span>
        </h2> */}

      {/* Call to Action */}
      <section className="py-20 bg-indigo-800 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Let&apos;s Build Something Amazing For You.</h2>

        <p className="mb-8 text-lg md:text-xl max-w-2xl mx-auto">
  Whether you&apos;re a startup, institution, or enterprise — we&apos;re ready to bring your vision to life.
</p>
      </section>

     {/* <JobAd/> */}

     {/* <QRCodeDisplay/> */}

    </div>
  );
}


