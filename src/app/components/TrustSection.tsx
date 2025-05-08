// 'use client';

import React from 'react';

const TrustSection: React.FC = () => {
  return (
    <section className="py-16 px-6 bg-gray-900 text-white">
      <div className="max-w-screen-xl mx-auto text-center">
        <div className="mb-8 opacity-100 transition-opacity duration-1000 ease-in-out">
          <h2 className="text-3xl font-bold mb-4">Your Trust is Our Priority!</h2>
        </div>

        <div className="flex justify-center items-center bg-gradient-to-r from-blue-600 to-blue-400 via-blue-500 rounded-lg shadow-xl p-6 max-w-4xl mx-auto transition-transform duration-1000 transform hover:scale-105">
          <div className="flex items-center justify-center">
            <span className="text-4xl mr-4 animate-pulse" role="img" aria-label="shield">🛡️</span>
            <div>
              <h3 className="text-2xl font-semibold">No Payment Until You Approve!</h3>
              <p className="text-xl mt-2">
                With our services, you don’t have to worry about paying upfront. Only pay once you are completely satisfied with the final product.
              </p>
            </div>
          </div>
        </div>

        <div className="h-1 bg-gray-300 w-full mt-12"></div>
      </div>
    </section>
  );
};

export default TrustSection;
