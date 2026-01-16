// 'use client';

import React from 'react';

const WhyChooseSection: React.FC = () => {
  return (
    <section className=" from-gray-100 to-gray-900 py-20 px-6 text-center" style={{background:"#a9c8e27e"}}>
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose ECHOBYTE CONCEPT?</h2>
      <div className="max-w-5xl mx-auto text-lg text-gray-900 space-y-6">
        <p className="mb-6">✅ 100% custom-built, responsive, and scalable solutions.</p>
        <p className="mb-6">✅ Fast delivery, great communication, and full post-launch support.</p>
        <p className="mb-6">
            ✅ We combine technical expertise with a deep understanding of business
            needs. Our approach focuses on practical solutions that solve real
            problems, rather than unnecessary complexity. This allows us to
            deliver digital products that are both effective and easy to adopt.
        </p>
      </div>
    </section>
  );
};

export default WhyChooseSection;
