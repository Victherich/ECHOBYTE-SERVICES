// 'use client';

// import Image from 'next/image';
// import Link from 'next/link';
// import React from 'react';

// const quickLinks = [
//   { name: 'Home', href: '/' },
//   { name: 'About Us', href: '/aboutus' },
//   // { name: 'Our Clients', href: '/ourclients' },
//   { name: 'Web Services', href: '/services' },
//   { name: 'Mobile Services', href: '/mobileservices' },
//   { name: 'Digital Store', href: 'https://courses.echobyteconcept.com' },
//   { name: 'Portfolio Builder', href: '/comingsoon' },
//   { name: 'Website / ECommerce Builder', href: '/comingsoon' },
//   { name: 'Affiliate', href: '/comingsoon' },
//   { name: 'Partnership', href: '/comingsoon' },
// ];

// const Footer: React.FC = () => {
//   return (
//     <footer className="bg-gray-900 text-gray-300 px-6 py-16 border-t-4 border-yellow-400">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
//         {/* About Section */}
//         <div>
//           <div className="flex items-center gap-2 mb-4">
//             <Image
//               src='/logo.jpeg'
//               alt="Echobyte Logo"
//               width={50}
//               height={50}
//               className="rounded-full"
//             />
//             <span className="text-white font-semibold text-xl">ECHOBYTE</span>
//           </div>
//           <p className="text-gray-400 text-sm">
//             We build scalable web, mobile and AI-powered digital solutions that help businesses,
//             professionals, and organizations work better, grow faster, and
//             compete confidently in the digital economy.
//           </p>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h4 className="text-white font-semibold text-lg mb-4">Quick Links</h4>
//           <ul className="space-y-2 text-sm">
//             {quickLinks.map((link) => (
//               <li key={link.name}>
//                 <Link
//                   href={link.href}
//                   className="hover:text-yellow-400 transition-colors"
//                   target={link.href.startsWith('http') ? '_blank' : undefined}
//                 >
//                   {link.name}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Contact + Social */}
//         <div>
//           <h4 className="text-white font-semibold text-lg mb-4">Connect With Us</h4>
//           <ul className="text-sm space-y-2 mb-4">
//             <li>Phone: +234 706 348 0314</li>
//             <li>Email: echobyteconcept@gmail.com</li>
//             <li>Website: echobyteconcept.com</li>
//           </ul>

//           <div className="flex gap-4">
//             <a
//               href="https://web.facebook.com/profile.php?id=61577637016110"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="px-3 py-1 border border-gray-700 rounded-md text-gray-300 hover:bg-blue-600 hover:text-white transition"
//             >
//               Facebook
//             </a>
//             <a
//               href="https://github.com/Victherich"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="px-3 py-1 border border-gray-700 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white transition"
//             >
//               GitHub
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Divider */}
//       <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm space-y-2">
//         <Image
//           src='/logo.jpeg'
//           alt="Echobyte Logo"
//           width={50}
//           height={50}
//           className="rounded-full mx-auto mb-2"
//         />
//         <p>© {new Date().getFullYear()} ECHOBYTE CONCEPT. All rights reserved.</p>
//         <p>Empowering growth through technology, automation, and innovation.</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/aboutus' },
  { name: 'Web Services', href: '/services' },
  { name: 'Mobile Services', href: '/mobileservices' },
  { name: 'Digital Store', href: 'https://courses.echobyteconcept.com' },
  { name: 'Portfolio Builder', href: '/comingsoon' },
  { name: 'Website / ECommerce Builder', href: '/comingsoon' },
  { name: 'Affiliate', href: '/comingsoon' },
  { name: 'Partnership', href: '/comingsoon' },
];

const Footer: React.FC = () => {
  return (
    <footer className="w-full text-black-500 px-[10px] py-[10px]" style={{ background: "#e4ecf3" }}>
      <div className="w-full max-w-7xl mx-auto p-[10px] rounded-2xl bg-white/70 backdrop-blur-md border border-white/60 shadow-xl flex flex-col gap-[10px]">
        
        {/* Top Bar: Brand, Quick Links, and Contact in a single sleek flow */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[10px] p-[10px] rounded-xl bg-white/50 border border-white/80">
          
          {/* Brand Info */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-[10px] mb-[10px]">
                <Image
                  src='/logo.jpeg'
                  alt="Echobyte Logo"
                  width={36}
                  height={36}
                  className="rounded-full shadow-sm"
                />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-extrabold text-base">ECHOBYTE</span>
              </div>
              <p className="text-gray-600 text-xs leading-relaxed mb-[10px]">
                Empowering businesses and organizations through scalable web, mobile, and AI-powered digital solutions.
              </p>
            </div>
            <div className="flex gap-[10px]">
              <a
                href="https://web.facebook.com/profile.php?id=61577637016110"
                target="_blank"
                rel="noopener noreferrer"
                className="px-[10px] py-1 text-[11px] rounded-lg bg-white/80 border border-gray-200 text-gray-700 hover:bg-blue-600 hover:text-white transition shadow-sm font-semibold"
              >
                Facebook
              </a>
              <a
                href="https://github.com/Victherich"
                target="_blank"
                rel="noopener noreferrer"
                className="px-[10px] py-1 text-[11px] rounded-lg bg-white/80 border border-gray-200 text-gray-700 hover:bg-gray-900 hover:text-white transition shadow-sm font-semibold"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Quick Links List (Compact grid) */}
          <div>
            <h4 className="text-gray-900 font-bold text-xs uppercase tracking-wider mb-[10px]">Quick Links</h4>
            <ul className="grid grid-cols-2 gap-x-[10px] gap-y-[6px] text-xs">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-blue-600 font-medium transition-colors block truncate"
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-gray-900 font-bold text-xs uppercase tracking-wider mb-[10px]">Get in Touch</h4>
            <ul className="text-xs text-gray-600 space-y-[6px] font-medium mb-[10px]">
              <li>📞 +234 706 348 0314</li>
              <li>📧 echobyteconcept@gmail.com</li>
              <li>🌐 echobyteconcept.com</li>
            </ul>
            <div className="p-[10px] rounded-lg bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-200/150 text-[11px] text-gray-700 bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-semibold">
              ✨ Innovation & Excellence Combined
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="p-[10px] rounded-xl bg-white/50 backdrop-blur-md border border-white/60 text-center text-gray-500 text-[11px] flex flex-col sm:flex-row items-center justify-between gap-[10px]">
          <p className="font-semibold text-gray-700">© {new Date().getFullYear()} ECHOBYTE CONCEPT. All rights reserved.</p>
          <p className="text-gray-500">Designed for the modern digital economy.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;