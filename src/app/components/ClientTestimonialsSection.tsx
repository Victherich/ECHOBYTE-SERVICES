//   {
//     quote: "The digital products from Echobyte Concept's store have been invaluable to our strategy. The quality is top-notch and the results are undeniable.",
//     name: "Ivert",
//     email: "Ivertking@gmail.com",
//     country: "Cameroon",
//     position: "Cheif Chef at Kfc Dubai",
//     image: "./" // Placeholder image for Alice Johnson
//   },


import React from 'react';

// An array of testimonial objects. You can replace this with your real data.
// A new 'image' property has been added to each object for the client's icon.
const testimonials = [
  {
    // quote: "Echobyte Concept delivered an outstanding website that perfectly captures our brand. Their communication was excellent, and the final product exceeded our expectations.",
    quote: "Echobyte Concept services have inspired and enlightened my life! Highly recommended!",
    name: "Cerens Anong",
    email: "Anongcerens4@gmail.com",
    country: "UAE",
    position: "Serial Entrepreneur",
    image: "./Cerens.jpeg" // Placeholder image for John Doe
  },
  {
    quote: "Working with Echobyte Concept is continually a fantastic experience. They were professional, responsive and Highly recommend!",
    name: "Kingsley Gbedzeker",
    email: "Kgbedzeker1@gmail.com",
    country: "Ghana",
    position: "CEO at KWASIKING",
    image: "./Kingsley.jpeg" // Placeholder image for Jane Smith
  },

    {
    quote: "Absolutely the best service, keep it up guys.",
    name: "Blessing Okereke",
    email: "bblife4kc@yahoo.com",
    country: "Netherlands",
    position: "Project Manager, Pro-Builders",
    image: "./Blessing.jpg" // Placeholder image for Robert Williams
  },
//   {
//     quote: "Their team's expertise in web development is second to none. We received a stunning, high-performance website that has significantly boosted our online presence.",
//     name: "Maria Garcia",
//     email: "mariag@example.com",
//     country: "Spain",
//     position: "Owner, Soluciones Creativas",
//     image: "https://placehold.co/64x64/2d3748/e2e8f0?text=MG" // Placeholder image for Maria Garcia
//   },
//   {
//     quote: "The personalized portfolio website they built for me was a game-changer. It helped me land my dream job! The design is sleek and modern.",
//     name: "David Lee",
//     email: "davidl@example.com",
//     country: "South Korea",
//     position: "Freelance Designer",
//     image: "https://placehold.co/64x64/2d3748/e2e8f0?text=DL" // Placeholder image for David Lee
//   },
];

// This component displays all the client testimonials.
const ClientTestimonialsSection = () => {
  return (
    // The section uses a dark background and has a responsive grid layout for the testimonials.
    <section id="testimonials" className="bg-gray-950 text-white py-20 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section heading */}
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">
          Our Top Clients <span className="text-yellow-400">Speak For Us</span>
        </h2>
        {/* Subheading */}
        <p className="text-lg text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          Hear from the amazing individuals and businesses we&apos;ve had the pleasure of working with. Their success is our success.
        </p>

        {/* This grid will automatically adjust based on screen size. */}
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-800 rounded-3xl p-8 shadow-xl transition-all duration-300 transform hover:scale-105 hover:shadow-yellow-300/10 flex flex-col justify-between"
            >
              <div>
                {/* Client image/icon, centered at the top of the card. */}
                <img
                  src={testimonial.image}
                  alt={`Profile picture of ${testimonial.name}`}
                  className="w-16 h-16 rounded-full mx-auto mb-4 object-cover border-2 border-yellow-400"
                />
                
                {/* Testimonial quote with a subtle quote icon */}
                <div className="flex justify-between items-start mb-4">
                  <p className="text-gray-300 text-lg italic leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</p>
                  <svg className="w-8 h-8 text-yellow-400 ml-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5a5.4 5.4 0 015.4-5.4c1.87 0 3.6 0.95 4.6 2.5a5.4 5.4 0 014.6-2.5c2.97 0 5.4 2.43 5.4 5.4 0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-700">
                {/* Testifier's details */}
                <h3 className="text-white text-xl font-semibold">{testimonial.name}</h3>
                <p className="text-yellow-400 text-sm mb-1">{testimonial.position}</p>
                <p className="text-gray-400 text-sm">Email: {testimonial.email}</p>
                <p className="text-gray-400 text-sm">Country: {testimonial.country}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonialsSection;
