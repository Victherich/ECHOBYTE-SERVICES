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
//     <section className="bg-gray-900 text-white px-4 py-20">
//       <h2 className="text-4xl font-bold text-center mb-10">
//         Get a free Quote / Contact Us Now
//       </h2>

//       <div className="mx-auto max-w-2xl bg-gray-800 p-8 rounded-2xl shadow-2xl">
//         <form onSubmit={handleSubmit}>
//           <div className="mb-6">
//             <input
//               type="text"
//               name="name"
//               placeholder="Your Name"
//               value={form.name}
//               onChange={handleChange}
//               required
//               className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400"
//             />
//           </div>
//           <div className="mb-6">
//             <input
//               type="email"
//               name="email"
//               placeholder="Your Email"
//               value={form.email}
//               onChange={handleChange}
//               required
//               className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400"
//             />
//           </div>
//           <div className="mb-6">
//             <input
//               type="text"
//               name="phone"
//               placeholder="Your Phone Number"
//               value={form.phone}
//               onChange={handleChange}
//               required
//               className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400"
//             />
//           </div>
//           <div className="mb-6">
//             <textarea
//               name="message"
//               placeholder="Your Message"
//               rows={5}
//               value={form.message}
//               onChange={handleChange}
//               required
//               className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-yellow-400 text-black font-bold py-3 px-6 rounded-lg hover:bg-yellow-300 transition duration-300"
//           >
//             Send Message
//           </button>
//         </form>

//         <div className="mt-8 text-center text-sm text-gray-300">
//           📞 +234 706 348 0314 &nbsp;|&nbsp; 📧 echobyteconcept@gmail.com
//         </div>

//         {status && (
//           <div className="mt-4 text-center text-lg text-yellow-400">
//             {status}
//           </div>
//         )}
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
    <section className="bg-gray-50 text-gray-900 px-4 py-20" style={{background:"#e4ecf3"}}>
      <h2 className="text-4xl font-bold text-center mb-0">
        Get a free Quote / Contact Us Now
      </h2>

      <div className="mx-auto max-w-2xl p-8 rounded-2xl border border-gray-200"
      style={{background:"#e4ecf3"}}
      >
        <form onSubmit={handleSubmit}>
          <div className="mb-1">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div className="mb-1">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div className="mb-1">
            <input
              type="text"
              name="phone"
              placeholder="Your Phone Number"
              value={form.phone}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div className="mb-6">
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <button
            type="submit"
            className="w-full text-white font-bold py-3 px-6 rounded-lg hover:bg-yellow-500 transition duration-300"
         style={{background:"gray"}}
         >
            Send Message
          </button>
        </form>

        <div className="mt-8 text-center text-sm text-gray-600">
          📞 +234 706 348 0314 &nbsp;|&nbsp; 📧 echobyteconcept@gmail.com
        </div>

        {status && (
          <div className="mt-4 text-center text-lg text-yellow-500 font-semibold">
            {status}
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactForm;
