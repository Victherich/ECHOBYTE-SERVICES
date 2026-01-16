// // 'use client';

// import React from 'react';

// const TrustSection: React.FC = () => {
//   return (
//     <section className="py-16 px-6 bg-gray-900 text-white">
//       <div className="max-w-screen-xl mx-auto text-center">
//         <div className="mb-8 opacity-100 transition-opacity duration-1000 ease-in-out">
//           <h2 className="text-3xl font-bold mb-4">Your Trust is Our Priority!</h2>
//         </div>

//         <div className="flex justify-center items-center bg-gradient-to-r from-blue-600 to-blue-400 via-blue-500 rounded-lg shadow-xl p-6 max-w-4xl mx-auto transition-transform duration-1000 transform hover:scale-105">
//           <div className="flex items-center justify-center">
//             <span className="text-4xl mr-4 animate-pulse" role="img" aria-label="shield">🛡️</span>
//             <div>
//               {/* <h3 className="text-2xl font-semibold">No Payment Until You Approve!</h3> */}
//               <p className="text-xl mt-2">
//                 With our services, you don’t have to worry about trust because your satisfaction is our priority.
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="h-1 bg-gray-300 w-full mt-12"></div>
//       </div>
//     </section>
//   );
// };

// export default TrustSection;
import React from 'react';

const TrustSection: React.FC = () => {
  return (
    <section className="relative py-24 px-6 bg-gradient-to-br from-gray-300 to-gray-500 overflow-hidden">
      
      {/* Decorative background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(253,224,71,0.15),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(59,130,246,0.12),transparent_40%)]" />

      <div className="relative max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Your Trust Is Our Priority
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-14 text-lg">
          We operate with transparency, reliability, and a deep commitment to your satisfaction.
        </p>

        {/* Trust Card */}
        <div className="relative  rounded-3xl shadow-xl border border-gray-200 px-8 py-14 md:px-16 md:py-20">
          
          {/* Big Shield */}
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-yellow-400/20 flex items-center justify-center shadow-inner">
              <span
                className="text-6xl md:text-7xl"
                role="img"
                aria-label="shield"
              >
                🛡️
              </span>
            </div>
          </div>

          {/* Message */}
          <p className="text-gray-800 text-xl md:text-2xl font-medium leading-relaxed max-w-3xl mx-auto">
            With Echobyte, you don’t have to worry about trust.
            <br />
            <span className="text-white font-semibold">
              Your satisfaction always comes first.
            </span>
          </p>

          {/* Accent line */}
          <div className="mt-10 flex justify-center">
            <div className="h-1 w-24 bg-yellow-400 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
