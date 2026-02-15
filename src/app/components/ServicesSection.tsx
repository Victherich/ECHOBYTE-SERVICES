
// import React from 'react';
// import Image from 'next/image';

// const services = [
//   {
//     title: 'Web Development Services',
//     description:
//       'We build beautiful and powerful websites and web applications to bring your vision to life and grow your online presence.',
//     link: '/services',
//     buttonText: 'Explore',
//     image: '/s1.png',
//   },
//   {
//     title: 'Mobile Development Services',
//     description:
//       'We build high-quality mobile applications for Android and iOS platforms.',
//     link: '/mobileservices',
//     buttonText: 'Explore',
//     image: '/s2.png',
//   },
//   {
//     title: 'Our Digital Store',
//     description:
//       'Discover our collection of digital products including eBooks, courses, and templates.',
//     link: 'https://products.echobyteconcept.com',
//     buttonText: 'Explore',
//     image: '/s3.png',
//   },
//   {
//     title: 'Portfolio Builder',
//     description:
//       'Get a modern personal portfolio website that helps you stand out professionally.',
//     link: '/comingsoon',
//     buttonText: 'Explore',
//     image: '/s4.png',
//   },
//   {
//     title: 'Academic Portal',
//     description:
//       'A smart academic portal for students and institutions to manage courses, results, resources, and communication.',
//     link: '/comingsoon',
//     buttonText: 'Explore',
//     image: '/s5.png',
//   },
// ];


// const ServicesSection = () => {
//   return (
// <section id="services" className="bg-gray-950 px-6 py-20">
//   <h2 className="text-white text-4xl font-bold text-center mb-16 tracking-tight">
//     Our Services and Digital Products
//   </h2>

//   <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
//     {services.map((service, index) => (
//       <div key={index} className="cursor-pointer">
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
//     <h3 className="text-white text-lg font-semibold mb-1">{service.title}</h3>
//     <p className="text-gray-200 text-sm mb-2">{service.description}</p>
//     <a
//       href={service.link}
//       className="inline-block px-4 py-2 bg-yellow-400 text-gray-900 rounded-full font-semibold transition hover:bg-yellow-500"
//     >
//       {service.buttonText}
//     </a>
//   </div>
// </div>

//       </div>
//     ))}
//   </div>
// </section>


//   );
// };

// export default ServicesSection


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
    link: 'https://products.echobyteconcept.com',
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
    title: 'Academic Portal',
    description:
      'A smart and automated academic portal for students and institutions to run and manage all academic activities, exams, lectures, payments etc.',
    link: '/comingsoon',
    buttonText: 'Explore',
    image: '/s5.png',
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className=" px-6 py-20" style={{background:"#e4ecf3"}}>
      <h2 className="text-gray-900 text-4xl font-bold text-center mb-8 tracking-tight">
        Our Services
      </h2>

      <div className="mb-16" style={{borderBottom:"4px solid lightblue",
        //  paddingBottom:"80px",
         display:"flex",
         justifyContent:"space-around",
         flexWrap:"wrap",
         gap:"40px"
         }}>
         {services.map((service, index) => (
      <div key={index} className="cursor-pointer w-full max-w-[550px]">
    <div className=" relative h-[250px] rounded-2xl overflow-hidden border border-gray-700 shadow-lg transition-all duration-300 transform hover:scale-105 hover:border-yellow-400 hover:shadow-yellow-200/20">
  
  {/* Background Image */}
  <Image
    src={service.image}
    alt={service.title}
    fill
    unoptimized
    className="object-cover"
  />

  {/* Slight Dark Overlay */}
  <div className="absolute inset-0 bg-black/60" />

  {/* Content Positioned at Bottom */}
  <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
    <h3 className="text-white text-lg font-semibold" style={{fontSize:"1.5rem"}}>{service.title}</h3>
    <p className="text-gray-200 text-sm mb-2">{service.description}</p>
   <a
  href={service.link}
  target={service.link.startsWith('http') ? '_blank' : '_self'}
  rel={service.link.startsWith('http') ? 'noopener noreferrer' : undefined}
  className="inline-block px-6 py-1 rounded-full font-semibold transition hover:bg-yellow-500"
  style={{ background: 'gray', color: 'white', fontSize: '0.9rem' }}
>
  {service.buttonText}
</a>
  </div>
</div>

      </div>
    ))}



     
<ContactForm/>


      </div>

 <h2 className="text-gray-900 text-4xl font-bold text-center mb-8 tracking-tight">
        Our Products
      </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
         {products.map((service, index) => (
      <div key={index} className="cursor-pointer w-full max-w-[360px]">
    <div className=" relative h-[250px] rounded-2xl overflow-hidden border border-gray-700 shadow-lg transition-all duration-300 transform hover:scale-105 hover:border-yellow-400 hover:shadow-yellow-200/20">
  
  {/* Background Image */}
  <Image
    src={service.image}
    alt={service.title}
    fill
    unoptimized
    className="object-cover"
  />

  {/* Slight Dark Overlay */}
  <div className="absolute inset-0 bg-black/60" />

  {/* Content Positioned at Bottom */}
  <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
    <h3 className="text-white text-lg font-semibold" style={{fontSize:"1.5rem"}}>{service.title}</h3>
    <p className="text-gray-200 text-sm mb-2">{service.description}</p>
   <a
  href={service.link}
  target={service.link.startsWith('http') ? '_blank' : '_self'}
  rel={service.link.startsWith('http') ? 'noopener noreferrer' : undefined}
  className="inline-block px-6 py-1 rounded-full font-semibold transition hover:bg-yellow-500"
  style={{ background: 'gray', color: 'white', fontSize: '0.9rem' }}
>
  {service.buttonText}
</a>
  </div>
</div>

      </div>
    ))}



     



      </div>

    </section>
  );
};

export default ServicesSection;
