'use client';

import React, { useState } from 'react';
import Swal from 'sweetalert2';
import Link from 'next/link';

const PromoContactForm= () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    Swal.fire({ text: 'Please wait...' });
    Swal.showLoading();

    // 1. Create the final payload with the prefix automatically added
    const finalPayload = {
      ...form,
      message: `3 WEBSITE PROMO: ${form.message}`,
    };

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(finalPayload),
    });

    if (res.ok) {
      setStatus('Slot reserved successfully!');
      setForm({ name: '', email: '', phone: '', message: '' });
      Swal.fire({
        text: 'Congratulations, your promo slot has been reserved! We shall get back to you as soon as possible. Thanks',
        icon: 'success',
      });
    } else {
      setStatus('Something went wrong. Please try again.');
      Swal.close();
    }
  };

  return (
    <section className="w-full min-h-screen text-gray-900 px-[10px] py-[100px] flex flex-col justify-center" style={{ background: "#e4ecf3" }}>
      
      {/* Promo Header & Details Banner */}
      <div className="w-full max-w-7xl mx-auto mb-6 text-center">
        <span className="inline-block bg-blue-600 text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm mb-3">
          🔥 Limited Time Promo Offer
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-3">
          Get <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">3 Websites</span> for Just ₦50,000!
        </h2>
        <p className="text-sm sm:text-base text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Scale your business or personal brand online today. Reserve your promotional slot now by filling out the form below. 
          <strong className="text-blue-700" style={{fontSize:"2rem"}}> No upfront payment required!</strong> You only get to pay after the first website is successfully delivered to you.
        </p>
      </div>

      {/* Main Two-Column Layout */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-1 gap-[10px] items-start">
        
        {/* Left Side: Promo Highlights & Value Elements */}
        {/* <div className="flex flex-col justify-between gap-[10px] p-2 sm:p-4">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-[10px]">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Echobyte Concept?</span>
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-[10px]">
              We empower businesses, professionals, and organizations to scale new heights in the digital economy through cutting-edge technology and tailored solutions.
            </p>
          </div>

          <div className="space-y-[10px]">
            <div className="p-[10px] rounded-xl backdrop-blur-sm border border-white/80 shadow-sm flex items-center gap-[10px] hover:scale-[1.01] transition-all">
              <span className="text-blue-600 text-base">🛡️</span>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-gray-900">Pay After Delivery Policy</h4>
                <p className="text-[11px] text-gray-500">Zero financial risk: receive your first website before making payment.</p>
              </div>
            </div>

            <div className="p-[10px] rounded-xl  backdrop-blur-sm border border-white/80 shadow-sm flex items-center gap-[10px] hover:scale-[1.01] transition-all">
              <span className="text-purple-600 text-base">⚡</span>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-gray-900">3 Complete Web Solutions</h4>
                <p className="text-[11px] text-gray-500">Get three professional platforms for individuals or business growth at ₦50,000.</p>
              </div>
            </div>

            <div className="p-[10px] rounded-xl backdrop-blur-sm border border-white/80 shadow-sm flex items-center gap-[10px] hover:scale-[1.01] transition-all">
              <span className="text-blue-600 text-base">🚀</span>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-gray-900">High-Performance & Mobile Responsive</h4>
                <p className="text-[11px] text-gray-500">Built for speed, user experience, and maximum conversion rates.</p>
              </div>
            </div>
          </div>

   

         
        <div className="text-center py-4 text-xs text-slate-500">
          By enrolling or making a payment, you agree to Our{' '}
          <Link 
            href="/promo-terms"
            className="text-blue-600 font-semibold underline hover:text-purple-600 transition-colors"
          >
            Promotional Terms & Conditions
          </Link>
        </div>
        </div> */}

        {/* Right Side: Exact Reservation Form */}
        <div className="p-[10px] sm:p-6 rounded-2xl bg-white/80 backdrop-blur-md border border-white/60 shadow-xl">
          <div className="mb-4">
            <h3 className="text-xl font-bold text-gray-900 mb-1">Reserve Your Promo Slot</h3>
            <p className="text-xs text-gray-500">Submit your details below to lock in the ₦50,000 for 3 websites promo.</p>
          </div>

          <form onSubmit={handleSubmit} className="w-full">
            <div className="mb-[10px]">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full p-[10px] text-sm rounded-xl bg-white/90 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all shadow-sm"
              />
            </div>

            <div className="mb-[10px]">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full p-[10px] text-sm rounded-xl bg-white/90 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all shadow-sm"
              />
            </div>

            <div className="mb-[10px]">
              <input
                type="text"
                name="phone"
                placeholder="Your Phone Number"
                value={form.phone}
                onChange={handleChange}
                required
                className="w-full p-[10px] text-sm rounded-xl bg-white/90 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all shadow-sm"
              />
            </div>

            <div className="mb-[10px]">
              <textarea
                name="message"
                placeholder="Briefly describe your FIRST website need. (e.g., business type, purpose, features)"
                rows={4}
                value={form.message}
                onChange={handleChange}
                required
                className="w-full p-[10px] text-sm rounded-xl bg-white/90 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all shadow-sm resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full text-white font-semibold py-[10px] px-[10px] rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-blue-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 cursor-pointer flex items-center justify-center gap-[10px]"
            >
              <span>Reserve My Promo Slot</span>
              <span>→</span>
            </button>
          </form>

           {/* Terms & Conditions Inline Notice / Link */}
        <div className="text-center py-4 text-xs text-slate-500">
          By enrolling, you agree to Our{' '}
          <Link 
            href="/promo-terms" /* Replace with your exact terms page route, e.g., /promo-terms */
            className="text-blue-600 font-semibold underline hover:text-purple-600 transition-colors"
          >
            Promotional Terms & Conditions
          </Link>
        </div>

          <div className="mt-[10px] text-center text-xs sm:text-sm text-gray-600 font-medium">
            📞 +234 706 348 0314 &nbsp;|&nbsp; 📧 echobyteconcept@gmail.com
          </div>

          {status && (
            <div className="mt-[10px] text-center text-sm text-blue-600 font-semibold">
              {status}
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default PromoContactForm;