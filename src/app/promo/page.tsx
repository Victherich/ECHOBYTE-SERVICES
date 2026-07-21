'use client';


import React from 'react';
import { FaLaptopCode, FaShieldAlt, FaDatabase, FaCreditCard, FaStore, FaChartLine, FaCheckCircle, FaRocket } from 'react-icons/fa';

const EmpowermentPromo= () => {
  const checkoutUrl = "https://courses.echobyteconcept.com"; // Replace with your exact external payment or registration URL

  return (
    <section className="w-full text-gray-900 px-[10px] py-[10px] font-sans" style={{ background: "#e4ecf3" }}>
      
      {/* Hero Section */}
      <div
        className="relative w-full h-[60vh] flex items-center justify-center bg-cover bg-center rounded-3xl overflow-hidden shadow-xl border border-white/60 mb-[10px]"
        style={{ backgroundImage: 'url(/h2.png)' }}
      >
        <div className="absolute inset-0 bg-white/70 backdrop-blur-sm" />

        <div className="relative z-10 p-[10px] rounded-2xl text-center max-w-3xl bg-white/60 backdrop-blur-md shadow-xl border border-white/80 mx-[10px]">
          <span className="inline-block px-3 py-1 mb-[10px] text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-md">
            🔥 Limited-Time Empowerment Promo
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-wider mb-[10px]" style={{ fontFamily: 'cursive, sans-serif' }}>
            <span 
              className="text-gray-900 inline-block italic" 
              style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.2)' }}
            >
              RESELLER
            </span>{' '}
            <span
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 inline-block italic"
              style={{
                WebkitTextStroke: '1px rgba(255, 255, 255, 0.9)',
                filter: 'drop-shadow(0 2px 6px rgba(0, 0, 0, 0.3))',
              }}
            >
              EMPOWERMENT
            </span>
          </h1>

          <p className="text-gray-600 text-xs sm:text-sm font-medium leading-relaxed max-w-xl mx-auto mb-[10px]">
            Get 3 professionally built, high-end websites for just <strong className="text-gray-900 font-bold">₦50,000</strong>. Keep 100% of the profits when you resell them!
          </p>

          <a href={checkoutUrl} target="_blank" rel="noopener noreferrer" className="inline-block w-full sm:w-auto">
            <button className="w-full sm:w-auto px-6 py-3 text-sm bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer flex items-center justify-center gap-2">
              <FaRocket />
              <span>Enroll & Secure Your 3 Slots Now</span>
            </button>
          </a>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="w-full max-w-5xl mx-auto space-y-[10px]">

        {/* The Big Hook / Intro */}
        <div className="p-[10px] rounded-2xl bg-white/70 backdrop-blur-md border border-white/60 shadow-xl text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-[10px]">
            Attention Business Owners, Freelancers, Students, & Aspiring Designers! 🚀
          </h2>
          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
            What if I told you that with just <strong className="text-gray-900">50,000 naira</strong>, you could get <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-bold">three professionally built websites</span> and make hundreds of thousands of naira from them?
          </p>
        </div>

        {/* How It Works Grid */}
        <div className="p-[10px] rounded-2xl bg-white/70 backdrop-blur-md border border-white/60 shadow-xl">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-[10px] text-center">
            How It Works 💡
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[10px]">
            <div className="p-[10px] rounded-xl bg-white/50 border border-white/80 flex flex-col justify-between">
              <div>
                <span className="text-xl font-black text-blue-600 mb-2 block">01</span>
                <h3 className="font-bold text-gray-900 text-sm mb-[6px]">Pay Once (₦50,000)</h3>
                <p className="text-xs text-gray-600">Secure your package instantly with a one-time payment of ₦50,000 to lock in your slots.</p>
              </div>
            </div>

            <div className="p-[10px] rounded-xl bg-white/50 border border-white/80 flex flex-col justify-between">
              <div>
                <span className="text-xl font-black text-blue-600 mb-2 block">02</span>
                <h3 className="font-bold text-gray-900 text-sm mb-[6px]">We Build All 3 Sites</h3>
                <p className="text-xs text-gray-600">Use one for yourself, and keep two reserved for clients. Don&apos;t have clients yet? No problem—they stay reserved indefinitely!</p>
              </div>
            </div>

            <div className="p-[10px] rounded-xl bg-white/50 border border-white/80 flex flex-col justify-between">
              <div>
                <span className="text-xl font-black text-purple-600 mb-2 block">03</span>
                <h3 className="font-bold text-gray-900 text-sm mb-[6px]">Keep 100% Profit</h3>
                <p className="text-xs text-gray-600">Charge your clients ₦200k, ₦300k, or more. We handle technical delivery, you keep all the cash.</p>
              </div>
            </div>
          </div>
        </div>

        {/* What's Included */}
        <div className="p-[10px] rounded-2xl bg-white/70 backdrop-blur-md border border-white/60 shadow-xl">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-[10px] text-center">
            What&apos;s Included In Your Package 🌟
          </h2>
          <p className="text-xs text-gray-500 text-center mb-[10px]">It&apos;s not just a website—it&apos;s a fully functional digital business engine:</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[10px]">
            <div className="p-[10px] rounded-xl bg-white/50 border border-white/80 flex items-start gap-[10px]">
              <div className="text-blue-600 text-lg mt-0.5"><FaLaptopCode /></div>
              <div>
                <h4 className="font-bold text-xs sm:text-sm text-gray-900">Professional Hosting</h4>
                <p className="text-[11px] text-gray-600">High-speed reliable hosting setup included for every site.</p>
              </div>
            </div>

            <div className="p-[10px] rounded-xl bg-white/50 border border-white/80 flex items-start gap-[10px]">
              <div className="text-blue-600 text-lg mt-0.5"><FaShieldAlt /></div>
              <div>
                <h4 className="font-bold text-xs sm:text-sm text-gray-900">Advanced Security</h4>
                <p className="text-[11px] text-gray-600">SSL certificates and security layers to protect user data.</p>
              </div>
            </div>

            <div className="p-[10px] rounded-xl bg-white/50 border border-white/80 flex items-start gap-[10px]">
              <div className="text-blue-600 text-lg mt-0.5"><FaDatabase /></div>
              <div>
                <h4 className="font-bold text-xs sm:text-sm text-gray-900">Database Integration</h4>
                <p className="text-[11px] text-gray-600">Robust backend database management built for scalability.</p>
              </div>
            </div>

            <div className="p-[10px] rounded-xl bg-white/50 border border-white/80 flex items-start gap-[10px]">
              <div className="text-purple-600 text-lg mt-0.5"><FaStore /></div>
              <div>
                <h4 className="font-bold text-xs sm:text-sm text-gray-900">E-Commerce Ready</h4>
                <p className="text-[11px] text-gray-600">Full online store setup to sell products or services seamlessly.</p>
              </div>
            </div>

            <div className="p-[10px] rounded-xl bg-white/50 border border-white/80 flex items-start gap-[10px]">
              <div className="text-purple-600 text-lg mt-0.5"><FaCreditCard /></div>
              <div>
                <h4 className="font-bold text-xs sm:text-sm text-gray-900">Online Payments</h4>
                <p className="text-[11px] text-gray-600">Integrated payment gateways so clients can pay you instantly.</p>
              </div>
            </div>

            <div className="p-[10px] rounded-xl bg-white/50 border border-white/80 flex items-start gap-[10px]">
              <div className="text-purple-600 text-lg mt-0.5"><FaChartLine /></div>
              <div>
                <h4 className="font-bold text-xs sm:text-sm text-gray-900">Admin Dashboard</h4>
                <p className="text-[11px] text-gray-600">Custom control panel to manage orders, content, and users easily.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Urgency / CTA Card */}
        <div className="p-[10px] rounded-2xl bg-gradient-to-br from-blue-900/10 via-purple-900/5 to-white/90 backdrop-blur-md border border-white/80 shadow-xl text-center">
          <h2 className="text-xl sm:text-2xl font-black text-gray-900 mb-[10px]">
            Hurry! Limited Slots Available ⏳
          </h2>
          <p className="text-gray-600 text-xs sm:text-sm font-medium leading-relaxed max-w-xl mx-auto mb-[10px]">
            This is a strict <span className="text-red-500 font-bold">limited-time empowerment offer</span>. Only a few reseller slots remain open for this batch. Secure your spots today before they fill up!
          </p>

          <a href={checkoutUrl} target="_blank" rel="noopener noreferrer" className="inline-block w-full sm:w-auto">
            <button className="w-full sm:w-auto px-8 py-3 text-sm bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 mx-auto">
              <FaCheckCircle />
              <span>Make Payment & Claim Your 3 Websites</span>
            </button>
          </a>

          <div className="mt-[10px] text-xs font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            ECHOBYTE CONCEPT... Building websites and empowering entrepreneurs.
          </div>
        </div>

      </div>
    </section>
  );
};

export default EmpowermentPromo;