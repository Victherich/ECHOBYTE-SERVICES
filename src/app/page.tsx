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
    <div className="bg-white text-white min-h-screen font-sans">
      <HeroSection/>
      <ServicesSection/>
      {/* <ContactForm/> */}
      <WhyChooseSection/>

      <Testimonials/>
<TrustSection/>
<ContactForm/>
<ProjectsMilestoneBadge/>

 {/* <h2 className="text-3xl sm:text-3xl font-bold text-center text-white mb-4" onClick={()=>router.push('/ourclients')}>
          Meet our <span className="text-yellow-400">Clients...</span>
        </h2> */}

      {/* Call to Action */}
   <section className="py-24 px-6 bg-white text-center">
      <div className="max-w-3xl mx-auto space-y-8">
        
        <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Let's Build Something <span className="text-blue-600">Amazing</span> Together.
        </h2>
        
        <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-xl mx-auto">
          Whether you're a startup, institution, or enterprise — we're ready to bring your vision to life with precision and purpose.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/contactus" className="inline-block">
<button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all duration-300 shadow-md hover:shadow-blue-200 active:scale-95"
          
          >
            Get Started
          </button>
          </a>
          
          {/* <button className="px-8 py-4 bg-white hover:bg-slate-50 text-slate-900 font-semibold rounded-full border border-slate-200 transition-all duration-300 hover:border-slate-300">
            View Our Work
          </button> */}
        </div>
        
      </div>
    </section>

     {/* <JobAd/> */}

     {/* <QRCodeDisplay/> */}

    </div>
  );
}


