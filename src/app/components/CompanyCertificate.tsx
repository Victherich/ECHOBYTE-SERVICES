
// components/CompanyCertificate.tsx
'use client'

import React, { useState } from "react";
import Image from "next/image";
import certificateImage from '../../assets/certificate.jpeg'; // Your certificate image

const CompanyCertificate = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle modal
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Thumbnail of the certificate, positioned at the bottom right */}
      <div className="fixed bottom-20 right-2 cursor-pointer z-50">
        <Image
          src={certificateImage}
          alt="Company Registration Certificate"
          width={50} // Small size for the thumbnail
          height={50}
          className="rounded-lg shadow-lg"
          onClick={toggleModal} // Open modal when clicked
        />
      </div>

      {/* Modal for displaying larger certificate */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
          onClick={toggleModal} // Close modal when clicked outside
        >
          <div className="bg-white p-6 rounded-lg">
            <div className="relative">
              <Image
                src={certificateImage}
                alt="Company Registration Certificate"
              width={320}
              height={550}
                className="rounded-lg"
              />
              <button
                onClick={toggleModal} // Close the modal
                className="absolute top-4 right-4 bg-red-500 text-white p-2 rounded-full"
              >
                X
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompanyCertificate;
