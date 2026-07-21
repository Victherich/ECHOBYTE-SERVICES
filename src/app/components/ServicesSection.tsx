

// import React from 'react';
// import Image from 'next/image';
// import ContactForm from './ContactForm';

// const services = [
//   {
//     title: 'Web Development',
//     description:
//       'We build beautiful and powerful websites and web applications to bring your vision to life and grow your online presence.',
//     link: '/services',
//     buttonText: 'Explore',
//     image: '/s1.png',
//   },
//   {
//     title: 'Mobile App Development',
//     description:
//       'We build high-quality mobile applications for Android and iOS platforms.',
//     link: '/mobileservices',
//     buttonText: 'Explore',
//     image: '/s2.png',
//   },
 
// ];

// const products = [
//   {
//     title: 'Courses',
//     description:
//       'Discover our collection of courses for your Advancements',
//     link: 'https://courses.echobyteconcept.com',
//     buttonText: 'Explore',
//     image: '/s3.png',
//   },
//   {
//     title: 'Portfolio Builder',
//     description:
//       'Get a modern personal portfolio website that helps you stand out professionally; instead of the static manual CVs.',
//     link: '/comingsoon',
//     buttonText: 'Explore',
//     image: '/s4.png',
//   },

//     {
//     title: 'Business Website / E-Commerce Builder',
//     description:
//       'Get a modern Business / E-Commerce website that gives visibility to your business.',
//     link: '/comingsoon',
//     buttonText: 'Explore',
//     image: '/s5.png',
//   },

//   // {
//   //   title: 'Academic Portal',
//   //   description:
//   //     'A smart and automated academic portal for students and institutions to run and manage all academic activities, exams, lectures, payments etc.',
//   //   link: '/comingsoon',
//   //   buttonText: 'Explore',
//   //   image: '/s5.png',
//   // },
// ];

// const ServicesSection = () => {
//   return (
//     <section id="services" className=" px-6 py-20" style={{background:"#e4ecf3"}}>
//       <h2 className="text-gray-900 text-4xl font-bold text-center mb-8 tracking-tight">
//         Our Services
//       </h2>

//       <div className="mb-16" style={{borderBottom:"4px solid lightblue",
//         //  paddingBottom:"80px",
//          display:"flex",
//          justifyContent:"space-around",
//          flexWrap:"wrap",
//          gap:"40px"
//          }}>
//          {services.map((service, index) => (
//       <div key={index} className="cursor-pointer w-full max-w-[550px]">
//     <div className=" relative h-[250px] rounded-2xl overflow-hidden border border-gray-700 shadow-lg transition-all duration-300 transform hover:scale-105 hover:border-yellow-400 hover:shadow-yellow-200/20">
  
//   {/* Background Image */}
//   <Image
//     src={service.image}
//     alt={service.title}
//     fill
//     unoptimized
//     className="object-cover"
//   />

//   {/* Slight Dark Overlay */}
//   <div className="absolute inset-0 bg-black/60" />

//   {/* Content Positioned at Bottom */}
//   <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
//     <h3 className="text-white text-lg font-semibold" style={{fontSize:"1.5rem"}}>{service.title}</h3>
//     <p className="text-gray-200 text-sm mb-2">{service.description}</p>
//    <a
//   href={service.link}
//   target={service.link.startsWith('http') ? '_blank' : '_self'}
//   rel={service.link.startsWith('http') ? 'noopener noreferrer' : undefined}
//   className="inline-block px-6 py-1 rounded-full font-semibold transition hover:bg-yellow-500"
//   style={{ background: 'gray', color: 'white', fontSize: '0.9rem' }}
// >
//   {service.buttonText}
// </a>
//   </div>
// </div>

//       </div>
//     ))}



     
// <ContactForm/>


//       </div>

//  <h2 className="text-gray-900 text-4xl font-bold text-center mb-8 tracking-tight">
//         Our Products
//       </h2>

//         <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
//          {products.map((service, index) => (
//       <div key={index} className="cursor-pointer w-full max-w-[360px]">
//     <div className=" relative h-[250px] rounded-2xl overflow-hidden border border-gray-700 shadow-lg transition-all duration-300 transform hover:scale-105 hover:border-yellow-400 hover:shadow-yellow-200/20">
  
//   {/* Background Image */}
//   <Image
//     src={service.image}
//     alt={service.title}
//     fill
//     unoptimized
//     className="object-cover"
//   />

//   {/* Slight Dark Overlay */}
//   <div className="absolute inset-0 bg-black/60" />

//   {/* Content Positioned at Bottom */}
//   <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
//     <h3 className="text-white text-lg font-semibold" style={{fontSize:"1.5rem"}}>{service.title}</h3>
//     <p className="text-gray-200 text-sm mb-2">{service.description}</p>
//    <a
//   href={service.link}
//   target={service.link.startsWith('http') ? '_blank' : '_self'}
//   rel={service.link.startsWith('http') ? 'noopener noreferrer' : undefined}
//   className="inline-block px-6 py-1 rounded-full font-semibold transition hover:bg-yellow-500"
//   style={{ background: 'gray', color: 'white', fontSize: '0.9rem' }}
// >
//   {service.buttonText}
// </a>
//   </div>
// </div>

//       </div>
//     ))}



     



//       </div>

//     </section>
//   );
// };

// export default ServicesSection;
import React from 'react';
import Image from 'next/image';
import ContactForm from './ContactForm';

const services = [
  {
    title: 'Web Development',
    description:
      'We build beautiful and powerful websites and web applications to bring your vision to life and grow your online presence.',
    link: '/services',
    buttonText: 'Explore',
    image: '/s1.png',
  },
  {
    title: 'Mobile App Development',
    description:
      'We build high-quality mobile applications for Android and iOS platforms.',
    link: '/mobileservices',
    buttonText: 'Explore',
    image: '/s2.png',
  },
];

const products = [
  {
    title: 'Courses',
    description:
      'Discover our collection of courses for your Advancements',
    link: 'https://courses.echobyteconcept.com',
    buttonText: 'Explore',
    image: '/s3.png',
  },
  {
    title: 'Portfolio Builder',
    description:
      'Get a modern personal portfolio website that helps you stand out professionally; instead of the static manual CVs.',
    link: '/comingsoon',
    buttonText: 'Explore',
    image: '/s4.png',
  },
  {
    title: 'Business Website / E-Commerce Builder',
    description:
      'Get a modern Business / E-Commerce website that gives visibility to your business.',
    link: '/comingsoon',
    buttonText: 'Explore',
    image: '/s5.png',
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="relative px-6 py-24 bg-gradient-to-b from-gray-50 via-[#e4ecf3] to-gray-100 overflow-hidden">
      
      {/* Decorative Background Glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[500px] h-[500px] bg-purple-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading: Our Services */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Services</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <div key={index} className="group cursor-pointer w-full">
              <div className="relative h-[320px] rounded-3xl overflow-hidden border border-white/40 shadow-xl transition-all duration-500 transform group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-blue-500/20 bg-gray-900">
                
                {/* Background Image with Zoom Effect */}
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Modern Blue & Purple Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/50 to-transparent transition-opacity duration-300" />

                {/* Content Container */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-left">
                  <h3 className="text-white text-2xl font-bold tracking-tight mb-2 group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-6 line-clamp-2">
                    {service.description}
                  </p>
                  <div>
                    <a
                      href={service.link}
                      target={service.link.startsWith('http') ? '_blank' : '_self'}
                      rel={service.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold text-sm text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-md hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 group-hover:scale-105"
                    >
                      <span>{service.buttonText}</span>
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form Section Wrapper */}
        {/* <div className="mb-24 bg-white/60 backdrop-blur-md rounded-3xl p-6 sm:p-10 shadow-xl border border-white/80"> */}
          <ContactForm />
        {/* </div> */}

        {/* Section Heading: Our Products */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Products</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
        </div>

        {/* Products Cards Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <div key={index} className="group cursor-pointer w-full">
              <div className="relative h-[320px] rounded-3xl overflow-hidden border border-white/40 shadow-xl transition-all duration-500 transform group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-purple-500/20 bg-gray-900">
                
                {/* Background Image with Zoom Effect */}
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Modern Blue & Purple Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/50 to-transparent transition-opacity duration-300" />

                {/* Content Container */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-left">
                  <h3 className="text-white text-xl font-bold tracking-tight mb-2 group-hover:text-purple-400 transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6 line-clamp-3">
                    {product.description}
                  </p>
                  <div>
                    <a
                      href={product.link}
                      target={product.link.startsWith('http') ? '_blank' : '_self'}
                      rel={product.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold text-sm text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-md hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 group-hover:scale-105"
                    >
                      <span>{product.buttonText}</span>
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;