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


'use client';

import React from 'react';

const ProjectsMilestoneBadge: React.FC = () => {
  return (
    <section className="w-full text-gray-900 px-[10px] py-[10px]" style={{ background: "#e4ecf3" }}>
      <div className="w-full max-w-4xl mx-auto">

        {/* Badge Container */}
        <div className="relative bg-white/70 backdrop-blur-md border border-white/60 rounded-2xl px-[10px] py-[10px] shadow-xl transition-transform duration-300 hover:scale-[1.01]">
          
          <h3 className="text-gray-900 text-xl sm:text-2xl font-extrabold mb-[10px] text-center">
            Celebrating a Major <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Milestone</span>
          </h3>

          <p className="text-gray-600 text-xs sm:text-sm font-medium mb-[10px] text-center">
            We&apos;re proud to have successfully delivered impactful solutions.
          </p>

          {/* Milestone Number and Content Card */}
          <div className="p-[10px] rounded-xl bg-gradient-to-br from-blue-900/10 via-purple-900/5 to-white/80 border border-white/80 shadow-sm flex flex-col items-center justify-center gap-[10px] my-[10px]">
            <div className="flex items-center justify-center gap-[10px]">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 text-4xl sm:text-5xl font-extrabold tracking-tight leading-none">
                110+
              </span>
              <span className="text-gray-900 text-2xl sm:text-3xl font-bold">
                Projects
              </span>
            </div>

            <p className="text-gray-600 text-xs sm:text-sm font-medium text-center max-w-xl">
              Delivered for amazing clients — helping businesses grow, scale, and succeed with confidence.
            </p>
          </div>

          {/* Bottom Accent */}
          <div className="mt-[10px] flex justify-center">
            <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsMilestoneBadge;