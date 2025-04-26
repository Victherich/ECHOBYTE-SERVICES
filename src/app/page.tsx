'use client';

import { useState } from "react";
import Swal from "sweetalert2";

export default function LandingPage() {

  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');
    Swal.fire({text:"Please wait..."});
    Swal.showLoading();

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setStatus('Message sent!');
      setForm({ name: '', email: '', phone: '', message: '' }); // Clear form on success
      Swal.fire({text:"Congratulations, your message has been sent and we shall get back to you as soon as possible. Thanks", icon:"success"});
    } else {
      setStatus('Something went wrong. Please try again.');
      Swal.close();
    }
  };






  return (
    <div className="bg-gray-950 text-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 py-24 px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6">ECHOBYTE CONCEPT</h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto">
          We build stunning, high-performing websites & web apps that power businesses, Organizations, schools, and ideas across the globe.
        </p>
        <div className="mt-10 flex justify-center gap-6 flex-wrap">
        <button
  onClick={() => {
    const servicesSection = document.getElementById("services");
    servicesSection?.scrollIntoView({ behavior: "smooth" });
  }}
  className="bg-yellow-400 hover:bg-yellow-300 text-black py-3 px-6 rounded-full font-bold text-lg transition duration-300"
>
  View Our Services
</button>

    
        </div>
      </section>    

    {/* Services Section */}
<section  id="services"  className="py-20 px-6 bg-gray-900">
  <h2 className="text-4xl font-bold text-center mb-16 text-white tracking-tight">
    Our Web Development Services
  </h2>
  <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
    {[
      "Website Design & Development",
      "Business Websites",
      "E-Commerce Platforms",
      "School & University Portals",
      "Online Academies",
      "Academic Journals",
      "Financial Web Apps",
      "Accounting Applications",
      "Booking Systems",
      "Custom Web Applications",
    ].map((service, idx) => (
      <div
        key={idx}
        className="bg-gradient-to-br from-gray-800 to-gray-700 border border-gray-600 hover:border-yellow-400 p-6 rounded-2xl shadow-xl transform transition-all hover:scale-105 hover:shadow-yellow-500/20"
      >
        <h3 className="text-xl font-semibold text-white text-center mb-2">
          {service}
        </h3>
        <div className="h-1 w-16 bg-yellow-400 mx-auto mb-4 rounded-full" />
       
      </div>
    ))}
  </div>
</section>


      {/* Why Choose Us Section */}
      <section className="bg-gradient-to-br from-gray-800 to-gray-900 py-20 px-8 text-center">
        <h2 className="text-4xl font-bold mb-8">Why ECHOBYTE CONCEPT?</h2>
        <div className="max-w-4xl mx-auto text-lg text-gray-300 space-y-6">
          <p>✅ 100% custom-built, responsive, and scalable solutions.</p>
          <p>✅ Expertise in React, Next.js, Tailwind, Firebase, and more.</p>
          <p>✅ Fast delivery, great communication, and full post-launch support.</p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-8 bg-gray-950 text-center">
        <h2 className="text-4xl font-bold mb-12">What Our Clients Say</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {[
            {
              quote: "ECHOBYTE transformed our school portal — parents and students love it!",
              name: "Dr. Felix A., University Director",
            },
            {
              quote: "Our accounting app was built flawlessly and on time. Highly recommended!",
              name: "Ngozi U., CFO",
            },
          ].map((testimonial, i) => (
            <div
              key={i}
              className="bg-gray-800 p-6 rounded-2xl max-w-sm text-left shadow-md"
            >
              <p className="text-lg italic mb-4">&quot;{testimonial.quote}&quot;</p>

              <p className="font-semibold text-yellow-400">– {testimonial.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-8 bg-gray-900 text-white">
      <h2 className="text-4xl font-bold text-center mb-10">Get a free Quote / Contact Us</h2>
      <div className="max-w-2xl mx-auto bg-gray-800 p-8 rounded-2xl shadow-xl">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 placeholder-gray-400 text-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 placeholder-gray-400 text-white"
          />
          <input
            type="text"
            name="phone"
            placeholder="Your Phone Number"
            value={form.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 placeholder-gray-400 text-white"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 placeholder-gray-400 text-white"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-3 px-6 rounded-lg transition duration-300"
          >
            Send Message
          </button>
        </form>
        <div className="mt-8 text-center text-gray-300 text-sm">
          📞 +234 706 348 0314 &nbsp;|&nbsp; 📧 echobyteconcept@gmail.com
        </div>
        {status && (
          <div className="mt-4 text-center text-lg text-yellow-300">{status}</div>
        )}
      </div>
    </section>

      {/* Call to Action */}
      <section className="py-20 bg-indigo-800 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Let&apos;s Build Something Amazing For You.</h2>

        <p className="mb-8 text-lg md:text-xl max-w-2xl mx-auto">
  Whether you&apos;re a startup, institution, or enterprise — we&apos;re ready to bring your vision to life.
</p>

       
      </section>

      {/* Footer */}
      <footer className="bg-black py-6 text-center text-gray-400">
        
        <p className="text-sm mt-2">📧 echobyteconcept@gmail.com &nbsp;|&nbsp; 📞 +234 706 348 0314</p>
        <p>&copy; {new Date().getFullYear()} ECHOBYTE CONCEPT. All rights reserved.</p>
      </footer>
    </div>
  );
}
