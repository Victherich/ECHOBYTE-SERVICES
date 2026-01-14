'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/aboutus' },
  { name: 'Our Clients', href: '/ourclients' },
  { name: 'Web Services', href: '/services' },
  { name: 'Mobile Services', href: '/mobileservices' },
  { name: 'Digital Store', href: 'https://products.echobyteconcept.com' },
  { name: 'Portfolio Builder', href: '/comingsoon' },
  { name: 'Academic Portal', href: '/comingsoon' },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 px-6 py-16 border-t-4 border-yellow-400">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
        {/* About Section */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Image
              src='/logo.jpeg'
              alt="Echobyte Logo"
              width={50}
              height={50}
              className="rounded-full"
            />
            <span className="text-white font-semibold text-xl">ECHOBYTE</span>
          </div>
          <p className="text-gray-400 text-sm">
            We build scalable, AI-powered digital solutions that help businesses,
            professionals, and organizations work better, grow faster, and
            compete confidently in the digital economy.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold text-lg mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="hover:text-yellow-400 transition-colors"
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact + Social */}
        <div>
          <h4 className="text-white font-semibold text-lg mb-4">Connect With Us</h4>
          <ul className="text-sm space-y-2 mb-4">
            <li>Phone: +234 706 348 0314</li>
            <li>Email: echobyteconcept@gmail.com</li>
            <li>Website: echobyteconcept.com</li>
          </ul>

          <div className="flex gap-4">
            <a
              href="https://web.facebook.com/profile.php?id=61577637016110"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 border border-gray-700 rounded-md text-gray-300 hover:bg-blue-600 hover:text-white transition"
            >
              Facebook
            </a>
            <a
              href="https://github.com/Victherich"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 border border-gray-700 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white transition"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm space-y-2">
        <Image
          src='/logo.jpeg'
          alt="Echobyte Logo"
          width={50}
          height={50}
          className="rounded-full mx-auto mb-2"
        />
        <p>© {new Date().getFullYear()} ECHOBYTE CONCEPT. All rights reserved.</p>
        <p>Empowering growth through technology, automation, and innovation.</p>
      </div>
    </footer>
  );
};

export default Footer;
