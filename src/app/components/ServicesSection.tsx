// 'use client';

// import Link from 'next/link';

// const services = [
//   { title: 'Web Development Services', link: '/services' },
//   { title: 'Portfolio Builder', link: '/services/portfolio-builder' },
//   { title: 'Digital Store', link: '/services/digital-store' },
// ];

// const ServicesSection = () => {
//   return (
//     <section id="services" className="bg-gray-900 px-6 py-20">
//       <h2 className="text-white text-3xl font-bold text-center mb-16 tracking-tight">
//         Our Services and Digital Products
//       </h2>

//       <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
//         {services.map((service, index) => (
//           <Link key={index} href={service.link}>
//             <div className="cursor-pointer">
//               <div className="bg-gradient-to-br from-gray-800 to-gray-700 border border-gray-600 p-6 rounded-2xl shadow-lg text-center transition-transform transform hover:scale-105 hover:border-yellow-400 hover:shadow-yellow-200/20">
//                 <h3 className="text-white text-xl font-semibold mb-2">{service.title}</h3>
//                 <div className="h-1 w-16 bg-yellow-400 rounded-full mx-auto mb-4" />
//                 <span className="text-white">Explore</span>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ServicesSection;


'use client';

import Link from 'next/link';

const services = [
  { title: 'Web Development Services', link: '/services' },
  { title: 'Portfolio Builder', link: '/comingsoon' },
  { title: 'Digital Store', link: '/comingsoon' },
];

const ServicesSection = () => {
  return (
    <section id="services" className="bg-gray-900 px-6 py-20">
      <h2 className="text-white text-3xl font-bold text-center mb-16 tracking-tight">
        Our Services and Digital Products
      </h2>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div key={index} className="cursor-pointer">
            <div className="bg-gradient-to-br from-gray-800 to-gray-700 border border-gray-600 p-6 rounded-2xl shadow-lg text-center transition-transform transform hover:scale-105 hover:border-yellow-400 hover:shadow-yellow-200/20">
              <h3 className="text-white text-xl font-semibold mb-2">{service.title}</h3>
              <div className="h-1 w-16 bg-yellow-400 rounded-full mx-auto mb-4" />
              {/* Styled Explore as a button */}
              <Link href={service.link}>
                <span className="text-black cursor-pointer inline-block px-6 py-1 mt-2 bg-yellow-400 rounded-full text-center font-semibold transition duration-300 hover:bg-yellow-500 focus:outline-none">
                  Explore
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
