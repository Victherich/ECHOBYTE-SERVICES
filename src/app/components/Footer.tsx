'use client';

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-center text-gray-400 py-6 px-4">
      <p className="text-sm mt-2">📧 echobyteconcept@gmail.com</p>
      <p className="text-sm mt-2">📞 +234 706 348 0314</p>
      <p className="text-sm mt-2">&copy; {new Date().getFullYear()} ECHOBYTE CONCEPT.</p>
      <p className="text-sm mt-2">All rights reserved.</p>
    </footer>
  );
};

export default Footer;
