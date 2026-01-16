'use client';

import React, { useState } from 'react';
import ContactForm from '../components/ContactForm';

const faqs = [
  {
    question: 'How can I get a quote for my project?',
    answer: 'You can fill out the contact form below or send us an email. We will get back to you within 24 hours.',
  },
  {
    question: 'Do you offer mobile app development?',
    answer: 'Yes! We develop iOS, Android, and cross-platform apps tailored to your needs.',
  },
  {
    question: 'What is your pricing model?',
    answer: 'Our pricing is flexible depending on the scope and complexity of the project. Contact us for a custom quote.',
  },
  {
    question: 'Can you help with ongoing support and maintenance?',
    answer: 'Absolutely! We provide post-launch support, updates, and maintenance packages.',
  },
];

const ContactPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 min-h-screen font-sans">
      
      {/* Hero Section with background image + overlay */}
      <div
        className="relative w-full h-[60vh] flex items-center justify-center px-6 text-center"
        style={{
          backgroundImage: "url('/h2.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Get in Touch with Us
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Have questions, ideas, or want to start a project? We’re here to help you grow digitally.
          </p>
          <a
            href="#contact-form"
            className="inline-block bg-blue-400 text-white font-bold px-6 py-3 rounded-full transition hover:bg-bue-500"
          >
            Contact Us Now
          </a>
        </div>
      </div>

      {/* Contact Form */}
      <div id="contact-form" className="py-20 px-6 md:px-12 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
          Send Us a Message
        </h2>
        <ContactForm />
      </div>

      {/* FAQ Section */}
      <div className="bg-white py-20 px-6 md:px-12">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg shadow-sm">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-4 text-left focus:outline-none"
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                <span className="text-gray-500 text-xl">
                  {openIndex === index ? '-' : '+'}
                </span>
              </button>
              {openIndex === index && (
                <div className="p-4 text-gray-700 border-t border-gray-200">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default ContactPage;
