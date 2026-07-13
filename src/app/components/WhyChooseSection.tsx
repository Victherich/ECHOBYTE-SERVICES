// // 'use client';

// import React from 'react';

// const WhyChooseSection: React.FC = () => {
//   return (
//     <section className=" from-gray-100 to-gray-900 py-20 px-6 text-center" style={{background:"#a9c8e27e"}}>
//       <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose ECHOBYTE CONCEPT?</h2>
//       <div className="max-w-5xl mx-auto text-lg text-gray-900 space-y-6">
//         <p className="mb-6">✅ 100% custom-built, responsive, and scalable solutions.</p>
//         <p className="mb-6">✅ Fast delivery, great communication, and full post-launch support.</p>
//         <p className="mb-6">
//             ✅ We combine technical expertise with a deep understanding of business
//             needs. Our approach focuses on practical solutions that solve real
//             problems, rather than unnecessary complexity. This allows us to
//             deliver digital products that are both effective and easy to adopt.
//         </p>
//       </div>
//     </section>
//   );
// };

// export default WhyChooseSection;



'use client';

import React from 'react';

const WhyChooseSection: React.FC = () => {
  return (
    <section className="relative py-20 px-6 bg-slate-50 overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-indigo-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Why Choose <span className="text-blue-600">EchoByte Concept?</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            We transform complex business requirements into high-performance digital products.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 text-2xl">⚡</div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Custom & Scalable</h3>
            <p className="text-slate-600 leading-relaxed">
              100% bespoke development. We build responsive, scalable architectures that grow in lockstep with your business.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-6 text-2xl">🚀</div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Fast Delivery</h3>
            <p className="text-slate-600 leading-relaxed">
              Velocity meets quality. We prioritize clear communication and dedicated post-launch support to keep your operations running smoothly.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 text-2xl">💡</div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Problem-First</h3>
            <p className="text-slate-600 leading-relaxed">
              We bridge the gap between complex tech and simple business results, focusing on solutions that are easy to adopt and highly effective.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;