'use client';

import Link from 'next/link';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-center text-gray-400 py-6 px-4">
      <p className="text-sm mt-2">📧 echobyteconcept@gmail.com</p>
      <p className="text-sm mt-2">📞 +234 706 348 0314</p>
      <Link href='/termsandconditions' className="text-lg mt-2 text-yellow-400" style={{textDecoration:"underline", cursor:"pointer"}}>Terms and Conditions</Link> <br/>        
      <Link href='/privacypolicy' className="text-lg mt-2 text-yellow-400" style={{textDecoration:"underline", cursor:"pointer"}}>Privacy Policy</Link>
      <p className="text-sm mt-2">&copy; {new Date().getFullYear()} ECHOBYTE CONCEPT.</p>
      <p className="text-sm mt-2">All rights reserved.</p>
    </footer>
  );
};

export default Footer;
