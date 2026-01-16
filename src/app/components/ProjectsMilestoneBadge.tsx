// import React from 'react';

// // This component is a celebratory badge to highlight a milestone.
// const ProjectsMilestoneBadge = () => {
//   return (
//     <section className="bg-gray-950 py-16 px-4 sm:px-8">
//       <div className="max-w-4xl mx-auto text-center">
//         {/* The main badge container. */}
//         <div className=" from-gray-800 to-gray-700 border-4 border-yellow-400 p-8 sm:p-12 rounded-3xl shadow-2xl transition-all duration-300 transform hover:scale-105">
//           <h3 className="text-white text-3xl sm:text-4xl font-bold mb-4">
//             Celebrating a Major Milestone
//           </h3>
//           <p className="text-gray-400 text-lg sm:text-xl font-medium mb-6">
//             Within our first year, we&apos;re proud to have successfully delivered...
//           </p>
          
//           {/* The main celebratory number with a custom, large font size. */}
//           <div className="flex items-center justify-center">
//             <span className="text-yellow-400 text-6xl sm:text-7xl md:text-8xl font-extrabold leading-none tracking-tight">
//               40+
//             </span>
//             <p className="text-white text-4xl sm:text-5xl font-bold ml-4">
//               Projects
//             </p>
//           </div>
          
//           <p className="text-gray-400 text-lg sm:text-xl font-medium mt-6">
//             ...for our amazing clients, helping them grow and achieve their goals.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProjectsMilestoneBadge;




import React from 'react';

const ProjectsMilestoneBadge = () => {
  return (
    <section className="py-20 px-4 sm:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto text-center">

        {/* Badge Container */}
        <div className="relative bg-blue-400/10 border-4 border-gray-800 rounded-3xl px-8 py-14 sm:px-14 shadow-xl transition-transform duration-300 hover:scale-[1.03]">
          
          {/* Decorative glow */}
          <div className="absolute -inset-1 rounded-3xl bg-blue-400/0 blur-xl -z-10" />

          <h3 className="text-gray-900 text-3xl sm:text-4xl font-extrabold mb-4">
            Celebrating a Major Milestone
          </h3>

          <p className="text-gray-600 text-lg sm:text-xl font-medium mb-10">
            Within our first year, we&apos;re proud to have successfully delivered
            impactful solutions.
          </p>

          {/* Milestone Number */}
          <div className="flex items-center justify-center gap-4">
            <span className="text-yellow-500 text-6xl sm:text-7xl md:text-8xl font-extrabold tracking-tight leading-none">
              40+
            </span>
            <span className="text-gray-900 text-4xl sm:text-5xl font-bold">
              Projects
            </span>
          </div>

          <p className="text-gray-600 text-lg sm:text-xl font-medium mt-10 max-w-2xl mx-auto">
            Delivered for amazing clients — helping businesses grow, scale,
            and succeed with confidence.
          </p>

          {/* Bottom Accent */}
          <div className="mt-12 flex justify-center">
            <div className="h-1 w-28 bg-yellow-400 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsMilestoneBadge;
