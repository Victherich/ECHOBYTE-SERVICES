

// import Link from 'next/link';

// const services = [
//   {
//     title: 'Web Development Services',
//     description:
//       'We build beautiful and powerful websites and web applications to bring your vision to life and grow your online presence as an individual, organization or business owner.',
//     link: '/services',
//     buttonText:"Explore"
//   },

//    {
//     title: 'Mobile Development Services',
//     description:
//       'We build beautiful and powerful Mobile Apps to bring your vision to life as an individual, organization or business owner.',
//     link: '/mobileservices',
//     buttonText:"Explore"
//   },

//   {
//     title: 'Our Digital Store',
//     description:
//       'Discover our collection of Digital products, including eBooks, courses, and templates designed to help you grow and succeed.',
//     link: 'https://products.echobyteconcept.com',
//      buttonText:"Explore"
//   },

//      {
//     title: 'Make Money with Echobyte',
//     description:
//       'Register for free and start earning big with our affiliate program!.',
//     link: '/comingsoon',
//      buttonText:"Explore"
//   },
  
//   {
//     title: 'Portfolio Builder',
//     description:
//       'Get your personalized portfolio website and be noticed. CVs are now outdated!.',
//     link: '/comingsoon',
//      buttonText:"Explore"
//   },

//       {
//     title: 'Empower your Business with Echobyte Partnership',
//     description:
//       'Register for free and start earning big with our partnership program!.',
//     link: '/comingsoon',
//      buttonText:"Explore"
//   },


  
// ];

// const ServicesSection = () => {
//   return (
//     <section id="services" className="bg-gray-950 px-6 py-20">
//       <h2 className="text-white text-3xl font-bold text-center mb-16 tracking-tight">
//         Our Services and Digital Products
//       </h2>

//       <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
//         {services.map((service, index) => (
//           <div key={index} className="cursor-pointer">
//             <div className="bg-gradient-to-br from-gray-800 to-gray-700 border border-gray-600 p-6 rounded-2xl shadow-lg text-center transition-transform transform hover:scale-105 hover:border-yellow-400 hover:shadow-yellow-200/20">
//               <h3 className="text-white text-xl font-semibold mb-2">{service.title}</h3>
//               <div className="h-1 w-16 bg-yellow-400 rounded-full mx-auto mb-4" />
//               <p className="text-gray-300 mb-6 text-sm">{service.description}</p>
//               <Link href={service.link}>
//                 <span className="text-black cursor-pointer inline-block px-6 py-1 bg-yellow-400 rounded-full text-center font-semibold transition duration-300 hover:bg-yellow-500 focus:outline-none">
//                   {service.buttonText}
//                 </span>
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ServicesSection;




import React from 'react';

// NOTE: Replaced Next.js's 'Link' component with a standard 'a' tag
// to make the code runnable in this environment.
// For your Next.js project, you can switch back to the 'Link' component
// if you prefer.

// The services array now includes an 'icon' property with an SVG element.
const services = [
  {
    title: 'Web Development Services',
    description:
      'We build beautiful and powerful websites and web applications to bring your vision to life and grow your online presence as an individual, organization or business owner.',
    link: '/services',
    buttonText: "Explore",
    // Icon representing web development
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 text-yellow-400 mx-auto mb-4">
        <path d="m18 16 4-4-4-4" />
        <path d="m6 8-4 4 4 4" />
        <path d="m14.5 4-5 16" />
      </svg>
    )
  },
  {
    title: 'Mobile Development Services',
    description:
      'We build beautiful and powerful Mobile Apps to bring your vision to life as an individual, organization or business owner.',
    link: '/mobileservices',
    buttonText: "Explore",
    // Icon representing mobile development
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 text-yellow-400 mx-auto mb-4">
        <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
        <path d="M12 18h.01" />
      </svg>
    )
  },
  {
    title: 'Our Digital Store',
    description:
      'Discover our collection of Digital products, including eBooks, courses, and templates designed to help you grow and succeed.',
    link: 'https://products.echobyteconcept.com',
    buttonText: "Explore",
    // Icon representing a digital store
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 text-yellow-400 mx-auto mb-4">
        <path d="m21 8-2 2-2-2" />
        <path d="M5.337 13.921c-.812-.406-1.337-1.29-1.337-2.221 0-1.104.896-2 2-2h12c1.104 0 2 .896 2 2 0 .931-.525 1.815-1.337 2.221L19 14.5v3.5c0 1.104-.896 2-2 2H7c-1.104 0-2-.896-2-2v-3.5L5.337 13.921z" />
        <path d="M17 19.5v-3.5" />
        <path d="M7 19.5v-3.5" />
      </svg>
    )
  },
  {
    title: 'Make Money with Echobyte',
    description:
      'Register for free and start earning big with our affiliate program!.',
    link: '/comingsoon',
    buttonText: "Explore",
    // Icon representing money/affiliate
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 text-yellow-400 mx-auto mb-4">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5a5.4 5.4 0 015.4-5.4c1.87 0 3.6 0.95 4.6 2.5a5.4 5.4 0 014.6-2.5c2.97 0 5.4 2.43 5.4 5.4 0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
      </svg>
    )
  },
  {
    title: 'Portfolio Builder',
    description:
      'Get your personalized portfolio website and be noticed. CVs are now outdated!.',
    link: '/comingsoon',
    buttonText: "Explore",
    // Icon representing a portfolio
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 text-yellow-400 mx-auto mb-4">
        <path d="M22 10a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.4-6-2-3-3-5.2-6.5-6-8-1-1.3-.8-4.3-.2-5.5.8-1.5 2.5-2 4-2H10" />
        <path d="M10 2a2 2 0 0 1 2 2c0 2.2-1.8 4-4 4-2.2 0-4-1.8-4-4a2 2 0 0 1 2-2h4z" />
        <path d="M16 11a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
      </svg>
    )
  },
  {
    title: 'Empower your Business with Echobyte Partnership',
    description:
      'Register for free and start earning big with our partnership program!.',
    link: '/comingsoon',
    buttonText: "Explore",
    // Icon representing a partnership
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 text-yellow-400 mx-auto mb-4">
        <path d="M14 11a2 2 0 0 1-2-2V3a1 1 0 0 0-2 0v6a2 2 0 0 1-2 2H3a1 1 0 0 0 0 2h5a2 2 0 0 1 2 2v6a1 1 0 0 0 2 0v-6a2 2 0 0 1 2-2h5a1 1 0 0 0 0-2h-5z"/>
      </svg>
    )
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="bg-gray-950 px-6 py-20">
      <h2 className="text-white text-4xl font-bold text-center mb-16 tracking-tight">
        Our Services and Digital Products
      </h2>
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div key={index} className="cursor-pointer">
            <div className="bg-gradient-to-br from-gray-800 to-gray-700 border border-gray-600 p-8 rounded-2xl shadow-lg text-center transition-all duration-300 transform hover:scale-105 hover:border-yellow-400 hover:shadow-yellow-200/20">
              {/* Render the icon here */}
              {service.icon}
              <h3 className="text-white text-xl font-semibold mb-2">{service.title}</h3>
              <div className="h-1 w-16 bg-yellow-400 rounded-full mx-auto mb-4" />
              <p className="text-gray-300 mb-6 text-sm">{service.description}</p>
              <a href={service.link} className="inline-block px-6 py-2 bg-yellow-400 text-gray-900 rounded-full text-center font-semibold transition duration-300 hover:bg-yellow-500 focus:outline-none">
                {service.buttonText}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection


