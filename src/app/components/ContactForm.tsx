

// 'use client';

// import React, { useState } from 'react';
// import Swal from 'sweetalert2';

// const ContactForm: React.FC = () => {
//   const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
//   const [status, setStatus] = useState('');

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setStatus('Sending...');
//     Swal.fire({ text: 'Please wait...' });
//     Swal.showLoading();

//     const res = await fetch('/api/contact', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(form),
//     });

//     if (res.ok) {
//       setStatus('Message sent!');
//       setForm({ name: '', email: '', phone: '', message: '' });
//       Swal.fire({
//         text: 'Congratulations, your message has been sent and we shall get back to you as soon as possible. Thanks',
//         icon: 'success',
//       });
//     } else {
//       setStatus('Something went wrong. Please try again.');
//       Swal.close();
//     }
//   };

//   return (
//     <section className="text-gray-900 px-2 py-4" style={{ background: "#e4ecf3" }}>
//       <h2 className="text-2xl sm:text-3xl font-extrabold text-center mb-2 tracking-tight">
//         Get a free <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Quote</span> / Contact Us Now
//       </h2>

//       <div className="mx-auto max-w-xl p-3 sm:p-4 rounded-2xl bg-white/70 backdrop-blur-md border border-white/60 shadow-xl">
//         <form onSubmit={handleSubmit}>
          
//           <div className="mb-2">
//             <input
//               type="text"
//               name="name"
//               placeholder="Your Name"
//               value={form.name}
//               onChange={handleChange}
//               required
//               className="w-full p-2.5 text-sm rounded-xl bg-white/80 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all shadow-sm"
//             />
//           </div>

//           <div className="mb-2">
//             <input
//               type="email"
//               name="email"
//               placeholder="Your Email"
//               value={form.email}
//               onChange={handleChange}
//               required
//               className="w-full p-2.5 text-sm rounded-xl bg-white/80 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all shadow-sm"
//             />
//           </div>

//           <div className="mb-2">
//             <input
//               type="text"
//               name="phone"
//               placeholder="Your Phone Number"
//               value={form.phone}
//               onChange={handleChange}
//               required
//               className="w-full p-2.5 text-sm rounded-xl bg-white/80 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all shadow-sm"
//             />
//           </div>

//           <div className="mb-2">
//             <textarea
//               name="message"
//               placeholder="Your Message"
//               rows={4}
//               value={form.message}
//               onChange={handleChange}
//               required
//               className="w-full p-2.5 text-sm rounded-xl bg-white/80 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all shadow-sm resize-none"
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full text-white font-semibold py-2.5 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-blue-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
//           >
//             <span>Send Message</span>
//             <span>→</span>
//           </button>
//         </form>

//         <div className="mt-2 text-center text-xs sm:text-sm text-gray-600 font-medium">
//           📞 +234 706 348 0314 &nbsp;|&nbsp; 📧 echobyteconcept@gmail.com
//         </div>

//         {status && (
//           <div className="mt-2 text-center text-sm text-blue-600 font-semibold">
//             {status}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default ContactForm;



// 'use client';

// import React, { useState } from 'react';
// import Swal from 'sweetalert2';

// const ContactForm: React.FC = () => {
//   const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
//   const [status, setStatus] = useState('');

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setStatus('Sending...');
//     Swal.fire({ text: 'Please wait...' });
//     Swal.showLoading();

//     const res = await fetch('/api/contact', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(form),
//     });

//     if (res.ok) {
//       setStatus('Message sent!');
//       setForm({ name: '', email: '', phone: '', message: '' });
//       Swal.fire({
//         text: 'Congratulations, your message has been sent and we shall get back to you as soon as possible. Thanks',
//         icon: 'success',
//       });
//     } else {
//       setStatus('Something went wrong. Please try again.');
//       Swal.close();
//     }
//   };

//   return (
//     <section className="text-gray-900 px-2 py-4" style={{ background: "#e4ecf3" }}>
//       <h2 className="text-2xl sm:text-3xl font-extrabold text-center mb-2 tracking-tight">
//         Get a free <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Quote</span> / Contact Us Now
//       </h2>

//       {/* Main Two-Column Layout with Maximum Gap & Margins set to 10px */}
//       <div className="mx-auto max-w-5xl p-2 sm:p-2.5 rounded-2xl bg-white/70 backdrop-blur-md border border-white/60 shadow-xl grid grid-cols-1 lg:grid-cols-2 gap-[10px]">
        
//         {/* Left Side: Contact Form */}
//         <div className="p-1 sm:p-2">
//           <form onSubmit={handleSubmit}>
            
//             <div className="mb-[10px]">
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Your Name"
//                 value={form.name}
//                 onChange={handleChange}
//                 required
//                 className="w-full p-2.5 text-sm rounded-xl bg-white/80 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all shadow-sm"
//               />
//             </div>

//             <div className="mb-[10px]">
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Your Email"
//                 value={form.email}
//                 onChange={handleChange}
//                 required
//                 className="w-full p-2.5 text-sm rounded-xl bg-white/80 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all shadow-sm"
//               />
//             </div>

//             <div className="mb-[10px]">
//               <input
//                 type="text"
//                 name="phone"
//                 placeholder="Your Phone Number"
//                 value={form.phone}
//                 onChange={handleChange}
//                 required
//                 className="w-full p-2.5 text-sm rounded-xl bg-white/80 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all shadow-sm"
//               />
//             </div>

//             <div className="mb-[10px]">
//               <textarea
//                 name="message"
//                 placeholder="Your Message"
//                 rows={4}
//                 value={form.message}
//                 onChange={handleChange}
//                 required
//                 className="w-full p-2.5 text-sm rounded-xl bg-white/80 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all shadow-sm resize-none"
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full text-white font-semibold py-2.5 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-blue-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
//             >
//               <span>Send Message</span>
//               <span>→</span>
//             </button>
//           </form>

//           <div className="mt-[10px] text-center text-xs sm:text-sm text-gray-600 font-medium">
//             📞 +234 706 348 0314 &nbsp;|&nbsp; 📧 echobyteconcept@gmail.com
//           </div>

//           {status && (
//             <div className="mt-[10px] text-center text-sm text-blue-600 font-semibold">
//               {status}
//             </div>
//           )}
//         </div>

//         {/* Right Side: Echobyte Highlights & Value Elements */}
//         <div className="p-3 sm:p-4 rounded-xl bg-gradient-to-br from-blue-900/10 via-purple-900/5 to-white/80 border border-white/80 flex flex-col justify-between gap-[10px]">
//           <div>
//             <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-[10px]">
//               Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Echobyte Concept?</span>
//             </h3>
//             <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-[10px]">
//               We empower businesses, professionals, and organizations to scale new heights in the digital economy through cutting-edge technology and tailored solutions.
//             </p>
//           </div>

//           <div className="space-y-[10px]">
//             <div className="p-2.5 rounded-lg bg-white/80 border border-gray-100 shadow-sm flex items-center gap-2">
//               <span className="text-blue-600 text-base">⚡</span>
//               <div>
//                 <h4 className="text-xs sm:text-sm font-bold text-gray-900">Custom Web & Mobile Apps</h4>
//                 <p className="text-[11px] text-gray-500">Built for speed, user experience, and conversion growth.</p>
//               </div>
//             </div>

//             <div className="p-2.5 rounded-lg bg-white/80 border border-gray-100 shadow-sm flex items-center gap-2">
//               <span className="text-purple-600 text-base">🤖</span>
//               <div>
//                 <h4 className="text-xs sm:text-sm font-bold text-gray-900">AI-Powered Platforms</h4>
//                 <p className="text-[11px] text-gray-500">Automate your workflow and maximize business productivity.</p>
//               </div>
//             </div>

//             <div className="p-2.5 rounded-lg bg-white/80 border border-gray-100 shadow-sm flex items-center gap-2">
//               <span className="text-blue-600 text-base">🚀</span>
//               <div>
//                 <h4 className="text-xs sm:text-sm font-bold text-gray-900">Professional Portfolios & E-Commerce</h4>
//                 <p className="text-[11px] text-gray-500">Stand out in the modern market with stellar digital visibility.</p>
//               </div>
//             </div>
//           </div>

//           <div className="p-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center text-xs font-medium shadow-md">
//             ✨ Let's transform your vision into reality today!
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default ContactForm;


'use client';

import React, { useState } from 'react';
import Swal from 'sweetalert2';

const ContactForm: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');
    Swal.fire({ text: 'Please wait...' });
    Swal.showLoading();

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setStatus('Message sent!');
      setForm({ name: '', email: '', phone: '', message: '' });
      Swal.fire({
        text: 'Congratulations, your message has been sent and we shall get back to you as soon as possible. Thanks',
        icon: 'success',
      });
    } else {
      setStatus('Something went wrong. Please try again.');
      Swal.close();
    }
  };

  return (
    <section className="w-full min-h-screen text-gray-900 px-[10px] py-[10px] flex flex-col justify-center">
      <h2 className="text-2xl sm:text-4xl font-extrabold text-center mb-[10px] tracking-tight">
        Get a free <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Quote</span> / Contact Us Now
      </h2>

      {/* Main Two-Column Layout filling the component with max 10px gaps/margins */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[10px] items-start">
        
      
        {/* Right Side: Free floating elements showcasing Echobyte highlights */}
        <div className="flex flex-col justify-between gap-[10px]">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-[10px]">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Echobyte Concept?</span>
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-[10px]">
              We empower businesses, professionals, and organizations to scale new heights in the digital economy through cutting-edge technology and tailored solutions.
            </p>
          </div>

          <div className="space-y-[10px]">
            <div className="p-[10px] rounded-xl bg-white/60 backdrop-blur-sm border border-white/80 shadow-sm flex items-center gap-[10px] hover:scale-[1.01] transition-all">
              <span className="text-blue-600 text-base">⚡</span>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-gray-900">Custom Web & Mobile Apps</h4>
                <p className="text-[11px] text-gray-500">Built for speed, user experience, and conversion growth.</p>
              </div>
            </div>

            <div className="p-[10px] rounded-xl bg-white/60 backdrop-blur-sm border border-white/80 shadow-sm flex items-center gap-[10px] hover:scale-[1.01] transition-all">
              <span className="text-purple-600 text-base">🤖</span>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-gray-900">AI-Powered Platforms</h4>
                <p className="text-[11px] text-gray-500">Automate your workflow and maximize business productivity.</p>
              </div>
            </div>

            <div className="p-[10px] rounded-xl bg-white/60 backdrop-blur-sm border border-white/80 shadow-sm flex items-center gap-[10px] hover:scale-[1.01] transition-all">
              <span className="text-blue-600 text-base">🚀</span>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-gray-900">Professional Portfolios & E-Commerce</h4>
                <p className="text-[11px] text-gray-500">Stand out in the modern market with stellar digital visibility.</p>
              </div>
            </div>
          </div>

          <div className="p-[10px] rounded-xl bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-200/50 text-blue-900 text-center text-xs font-semibold shadow-sm">
            ✨ Let's transform your vision into reality today!
          </div>
        </div>
  {/* Left Side: Contact Form inside a gorgeous card */}
        <div className="p-[10px] rounded-2xl bg-white/70 backdrop-blur-md border border-white/60 shadow-xl">
          <form onSubmit={handleSubmit} className="w-full">
            
            <div className="mb-[10px]">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full p-[10px] text-sm rounded-xl bg-white/80 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all shadow-sm"
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
                className="w-full p-[10px] text-sm rounded-xl bg-white/80 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all shadow-sm"
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
                className="w-full p-[10px] text-sm rounded-xl bg-white/80 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all shadow-sm"
              />
            </div>

            <div className="mb-[10px]">
              <textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                required
                className="w-full p-[10px] text-sm rounded-xl bg-white/80 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all shadow-sm resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full text-white font-semibold py-[10px] px-[10px] rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-blue-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 cursor-pointer flex items-center justify-center gap-[10px]"
            >
              <span>Send Message</span>
              <span>→</span>
            </button>
          </form>

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

export default ContactForm;