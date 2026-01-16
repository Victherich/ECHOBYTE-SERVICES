
// import React from 'react';

// // An array of project objects. Replace this with your actual project data.
// const projects = [
//   {
//     title: "THE GLORY AND CHILDREN FOUNDATION",
//     description: "A stunning website for a foundation Empowering Women, Uplifting Children and Transforming Futures..",
//     link: "https://thegloryandchildrenfoundation.vercel.app/", // Replace with actual project link
//     image: "./p1.png"
//   },
//   {
//     title: "QAUDRIK DIGIT MARKETING [QDM]",
//     description: "A powerful platform for a Nigerian-owned tech company in Dubai.",
//     link: "https://www.qaudrikdigitmarketing.com/", // Replace with actual project link
//     image: "./p2.png"
//   },
//   {
//     title: "MATTHEW CAR WASH AND CLEANING [MCC]",
//     description: "Platform with booking system and website with mobile app for a premium Car cleaning company based in the UAE.",
//     link: "https://matthewcarwashandcleaning.vercel.app/", // Replace with actual project link
//     image: "./p4.png"
//   },
//   {
//     title: "PAYSPHERE",
//     description: "An Upcoming modern payment platform for a Nigerian tech group which allows payments in multi currencies and several innovative and modern methods.",
//     link: "https://paysphere.vercel.app/", // Replace with actual project link
//     image: "./p6.png"
//   },
//   {
//     title: "BILLION WOMEN GLOBAL FELLOWSHIP (BWGF)",
//     description: "A beautifully designed website for a WOMEN GLOBAL FELLOWSHIP.",
//     link: "https://www.billionwomenglobal.com/", // Replace with actual project link
//     image: "./p5.png"
//   },
//   {
//     title: "ENGR (DR) EMMANUEL Portfolio",
//     description: "A personalized portfolio website for a Renowned CIVIL ENGINEER, built to showcase works, experiences and attract new clients.",
//     link: "https://engrdremmanueloaniekwena.vercel.app/", // Replace with actual project link
//     image: "./p3.png"
//   },
// ];

// // This component displays a list of completed projects.
// const ProjectsSection = () => {
//   return (
//     <section id="projects" className="bg-gray-950 py-20 px-4 sm:px-8">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-4xl sm:text-5xl font-bold text-center text-white mb-4">
//           Just Some of Our <span className="text-yellow-400">Projects</span>
//         </h2>
//         <p className="text-lg text-gray-400 text-center mb-16 max-w-2xl mx-auto">
//           Take a look at some of the real-world projects we've built, currently being used by our satisfied clients.
//         </p>

//         <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//           {projects.map((project, index) => (
//             <div
//               key={index}
//               className="bg-gray-900 border border-gray-800 rounded-3xl overflow-hidden shadow-xl transition-all duration-300 transform hover:scale-105 hover:shadow-yellow-300/10"
//             >
//               <div className="relative w-full h-48">
//                 <img
//                   src={project.image}
//                   alt={`Screenshot of ${project.title}`}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div className="p-8">
//                 <h3 className="text-white text-2xl font-semibold mb-2">{project.title}</h3>
//                 <p className="text-gray-400 mb-4">{project.description}</p>
//                 <a
//                   href={project.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-block bg-yellow-400 text-gray-900 font-semibold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105 hover:bg-yellow-500 focus:outline-none"
//                 >
//                   View Live Project
//                 </a>
//               </div>
//             </div>
//           ))}
//     <br/>
//         </div>
//          <h2 className="text-3xl sm:text-3xl font-bold text-left text-white mb-4">
//           And Lots <span className="text-yellow-400">More...</span>
//         </h2>
        
//       </div>
//     </section>
//   );
// };

// export default ProjectsSection


import React from 'react';

const projects = [
  {
    title: "THE GLORY AND CHILDREN FOUNDATION",
    description:
      "A stunning website for a foundation empowering women, uplifting children, and transforming futures.",
    link: "https://thegloryandchildrenfoundation.vercel.app/",
    image: "./p1.png",
  },
  {
    title: "QAUDRIK DIGIT MARKETING (QDM)",
    description:
      "A powerful platform for a Nigerian-owned tech company based in Dubai.",
    link: "https://www.qaudrikdigitmarketing.com/",
    image: "./p2.png",
  },
  {
    title: "MATTHEW CAR WASH & CLEANING (MCC)",
    description:
      "A premium booking platform and mobile-ready website for a UAE-based car cleaning company.",
    link: "https://matthewcarwashandcleaning.vercel.app/",
    image: "./p4.png",
  },
  {
    title: "PAYSPHERE",
    description:
      "An upcoming modern payment platform supporting multi-currency transactions and innovative payment methods.",
    link: "https://paysphere.vercel.app/",
    image: "./p6.png",
  },
  {
    title: "BILLION WOMEN GLOBAL FELLOWSHIP (BWGF)",
    description:
      "A beautifully designed website for a global women-focused fellowship.",
    link: "https://www.billionwomenglobal.com/",
    image: "./p5.png",
  },
  {
    title: "ENGR (DR) EMMANUEL – Portfolio",
    description:
      "A professional portfolio website for a renowned civil engineer to showcase expertise and projects.",
    link: "https://engrdremmanueloaniekwena.vercel.app/",
    image: "./p3.png",
  },
];

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="bg-white py-20 px-4 sm:px-8"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-gray-900 mb-4">
          Just Some of Our <span className="text-yellow-500">Projects</span>
        </h2>

        <p className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          A selection of real-world projects we’ve designed and built for clients
          across different industries and countries.
        </p>

        {/* Projects Grid */}
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-50 border border-gray-200 rounded-3xl overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="relative w-full h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={`Screenshot of ${project.title}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition" />
              </div>

              {/* Content */}
              <div className="p-8" >
                <h3 className="text-gray-900 text-xl font-semibold mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  {project.description}
                </p>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-yellow-400 text-gray-900 font-semibold py-2.5 px-6 rounded-full transition-all duration-300 hover:bg-yellow-500 hover:scale-105"
                style={{background:"gray", color:"white"}}
                >
                  View Live Project →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects Text */}
        <div className="mt-16 text-center">
          <h3 className="text-3xl font-bold text-gray-900">
            And Lots <span className="text-yellow-500">More...</span>
          </h3>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
