import React from 'react';

const TrustSection: React.FC = () => {
  return (
    <section className="py-16 px-6 bg-gray-900 text-white">
      <div className="container mx-auto text-center">
        {/* Heading */}
        <div className="mb-8 opacity-100 transition-opacity duration-1000 ease-in-out">
          <h2 className="text-4xl font-bold mb-4">Your Trust is Our Priority!</h2>
          {/* <p className="text-lg mb-4">
            We guarantee delivery before payment. We’re committed to delivering the highest quality
            in web development, design, and more. Your satisfaction is what matters most to us!
          </p> */}
        </div>

        {/* Trust Message with Shield */}
        <div className="flex justify-center items-center bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 rounded-lg shadow-lg p-6 max-w-md mx-auto transition-all duration-1000 transform hover:scale-105">
          <div className="flex items-center justify-center">
            <div className="text-6xl mr-4">
              <span role="img" aria-label="shield" className="animate-pulse">
                🛡️
              </span>
            </div>
            <div>
              <h3 className="text-3xl font-semibold">No Payment Until You Approve!</h3>
              <p className="text-lg mt-2">
                With our services, you don’t have to worry about paying upfront. Only pay once you
                are completely satisfied with the final product.
              </p>
            </div>
          </div>
        </div>
        <div style={{height:"4px", backgroundColor:"lightgray", width:"100%",marginTop:"50px"}}></div>
      </div>
    </section>
  );
}

export default TrustSection;
