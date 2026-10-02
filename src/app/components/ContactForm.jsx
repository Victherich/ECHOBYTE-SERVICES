


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
//     <section className="w-full min-h-screen text-gray-900 px-[10px] py-[10px] flex flex-col justify-center">
//       <h2 className="text-2xl sm:text-4xl font-extrabold text-center mb-[10px] tracking-tight">
//         Get a free <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Quote</span> / Contact Us Now
//       </h2>

//       {/* Main Two-Column Layout filling the component with max 10px gaps/margins */}
//       <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[10px] items-start">
        
      
//         {/* Right Side: Free floating elements showcasing Echobyte highlights */}
//         <div className="flex flex-col justify-between gap-[10px]">
//           <div>
//             <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-[10px]">
//               Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Echobyte Concept?</span>
//             </h3>
//             <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-[10px]">
//               We empower businesses, professionals, and organizations to scale new heights in the digital economy through cutting-edge technology and tailored solutions.
//             </p>
//           </div>

//           <div className="space-y-[10px]">
//             <div className="p-[10px] rounded-xl bg-white/60 backdrop-blur-sm border border-white/80 shadow-sm flex items-center gap-[10px] hover:scale-[1.01] transition-all">
//               <span className="text-blue-600 text-base">⚡</span>
//               <div>
//                 <h4 className="text-xs sm:text-sm font-bold text-gray-900">Custom Web & Mobile Apps</h4>
//                 <p className="text-[11px] text-gray-500">Built for speed, user experience, and conversion growth.</p>
//               </div>
//             </div>

//             <div className="p-[10px] rounded-xl bg-white/60 backdrop-blur-sm border border-white/80 shadow-sm flex items-center gap-[10px] hover:scale-[1.01] transition-all">
//               <span className="text-purple-600 text-base">🤖</span>
//               <div>
//                 <h4 className="text-xs sm:text-sm font-bold text-gray-900">AI-Powered Platforms</h4>
//                 <p className="text-[11px] text-gray-500">Automate your workflow and maximize business productivity.</p>
//               </div>
//             </div>

//             <div className="p-[10px] rounded-xl bg-white/60 backdrop-blur-sm border border-white/80 shadow-sm flex items-center gap-[10px] hover:scale-[1.01] transition-all">
//               <span className="text-blue-600 text-base">🚀</span>
//               <div>
//                 <h4 className="text-xs sm:text-sm font-bold text-gray-900">Professional Portfolios & E-Commerce</h4>
//                 <p className="text-[11px] text-gray-500">Stand out in the modern market with stellar digital visibility.</p>
//               </div>
//             </div>
//           </div>

//           <div className="p-[10px] rounded-xl bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-200/50 text-blue-900 text-center text-xs font-semibold shadow-sm">
//             ✨ Let us transform your vision into reality today!
//           </div>
//         </div>
//   {/* Left Side: Contact Form inside a gorgeous card */}
//         <div className="p-[10px] rounded-2xl bg-white/70 backdrop-blur-md border border-white/60 shadow-xl">
//           <form onSubmit={handleSubmit} className="w-full">
            
//             <div className="mb-[10px]">
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Your Name"
//                 value={form.name}
//                 onChange={handleChange}
//                 required
//                 className="w-full p-[10px] text-sm rounded-xl bg-white/80 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all shadow-sm"
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
//                 className="w-full p-[10px] text-sm rounded-xl bg-white/80 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all shadow-sm"
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
//                 className="w-full p-[10px] text-sm rounded-xl bg-white/80 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all shadow-sm"
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
//                 className="w-full p-[10px] text-sm rounded-xl bg-white/80 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all shadow-sm resize-none"
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full text-white font-semibold py-[10px] px-[10px] rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-blue-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 cursor-pointer flex items-center justify-center gap-[10px]"
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

        

//       </div>
//     </section>
//   );
// };

// export default ContactForm;


'use client';

import React, { useState } from 'react';
import Swal from 'sweetalert2';
import styled from 'styled-components';

const ContactForm = () => {
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
    <Section>
      <Heading>
        Get a free <GradientSpan>Quote</GradientSpan> / Contact Us Now
      </Heading>

      {/* Main Two-Column Layout */}
      <GridContainer>
        {/* Left Side: Replaced with Image */}
        <ImageWrapper>
          <StyledImage src="/h3.png" alt="Echobyte Concept Support" />
        </ImageWrapper>

        {/* Right Side: Contact Form inside a gorgeous card */}
        <FormCard>
          <form onSubmit={handleSubmit}>
            <InputGroup>
              <StyledInput
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </InputGroup>

            <InputGroup>
              <StyledInput
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </InputGroup>

            <InputGroup>
              <StyledInput
                type="text"
                name="phone"
                placeholder="Your Phone Number"
                value={form.phone}
                onChange={handleChange}
                required
              />
            </InputGroup>

            <InputGroup>
              <StyledTextarea
                name="message"
                placeholder="Your Message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                required
              />
            </InputGroup>

            <SubmitButton type="submit">
              <span>Send Message</span>
              <span>→</span>
            </SubmitButton>
          </form>

          <ContactInfo>
            📞 +234 706 348 0314 &nbsp;|&nbsp; 📧 echobyteconcept@gmail.com
          </ContactInfo>

          {status && (
            <StatusMessage>
              {status}
            </StatusMessage>
          )}
        </FormCard>
      </GridContainer>
    </Section>
  );
};

export default ContactForm;

/* ==================== STYLED COMPONENTS (LIGHT THEME) ==================== */

const Section = styled.section`
  width: 100%;
  min-height: 100vh;
  color: #0f172a;
  background-color: #f8fafc;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
`;

const Heading = styled.h2`
  font-size: 1.5rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 10px;
  letter-spacing: -0.025em;

  @media (min-width: 640px) {
    font-size: 2.25rem;
  }
`;

const GradientSpan = styled.span`
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  background-image: linear-gradient(to right, #2563eb, #9333ea);
`;

const GridContainer = styled.div`
  width: 100%;
  max-width: 80rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  align-items: center;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 350px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.08);
  border: 1px solid #e2e8f0;
  background-color: #ffffff;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const FormCard = styled.div`
  padding: 10px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  border: 1px solid #e2e8f0;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const InputGroup = styled.div`
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 0.875rem;
  border-radius: 8px;
  background: #ffffff;
  border: 1px solid #cbd5e1;
  color: #0f172a;
  outline: none;
  transition: all 0.2s ease;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.03);
  box-sizing: border-box;

  &::placeholder {
    color: #94a3b8;
  }

  &:focus {
    border-color: #2563eb;
    box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2);
  }
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  padding: 10px;
  font-size: 0.875rem;
  border-radius: 8px;
  background: #ffffff;
  border: 1px solid #cbd5e1;
  color: #0f172a;
  outline: none;
  transition: all 0.2s ease;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.03);
  resize: none;
  box-sizing: border-box;

  &::placeholder {
    color: #94a3b8;
  }

  &:focus {
    border-color: #2563eb;
    box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2);
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  color: #ffffff;
  font-weight: 600;
  padding: 10px;
  border-radius: 8px;
  background-image: linear-gradient(to right, #2563eb, #9333ea);
  box-shadow: 0 4px 6px -1px rgba(37, 99, 235, 0.25);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 8px 12px -2px rgba(37, 99, 235, 0.35);
  }

  &:active {
    transform: translateY(0);
  }
`;

const ContactInfo = styled.div`
  margin-top: 10px;
  text-align: center;
  font-size: 0.75rem;
  color: #475569;
  font-weight: 500;

  @media (min-width: 640px) {
    font-size: 0.875rem;
  }
`;

const StatusMessage = styled.div`
  margin-top: 10px;
  text-align: center;
  font-size: 0.875rem;
  color: #2563eb;
  font-weight: 600;
`;