
// 'use client';

// import React, { useState, useRef, useEffect } from 'react';

// import Image from 'next/image';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';

// const mainNav = [
//   { name: 'Home', href: '/' },
//   { name: 'About Us', href: '/aboutus' },
//   // { name: 'Clients', href: '/ourclients' },
//   { name: 'Contact Us', href: '/contactus' },
// ];

// const moreNav = [
//    { name: 'Web Services', href: '/services' },
//   { name: 'Mobile Services', href: '/mobileservices' },
//   { name: 'Digital Store', href: 'https://courses.echobyteconcept.com' },
//   { name: 'Portfolio Builder', href: '/comingsoon' },
//    { name: 'Website / ECommerce Builder', href: '/comingsoon' },
  

//   { name: 'Affiliate', href: '/comingsoon' },
//   { name: 'Partnership', href: '/comingsoon' },
// ];

// const isExternal = (url: string) =>
//   url.startsWith('http://') || url.startsWith('https://');


// export default function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [moreOpen, setMoreOpen] = useState(false);
//   const pathname = usePathname();
//   const [isMounted, setIsMounted] = useState(false);
//   const moreRef = useRef<HTMLDivElement | null>(null);

// useEffect(() => {
//   const handleClickOutside = (event: MouseEvent) => {
//     if (
//       moreRef.current &&
//       !moreRef.current.contains(event.target as Node)
//     ) {
//       setMoreOpen(false);
//     }
//   };

//   document.addEventListener('mousedown', handleClickOutside);
//   return () => {
//     document.removeEventListener('mousedown', handleClickOutside);
//   };
// }, []);


// // Mark as mounted on the client
//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (moreRef.current && !moreRef.current.contains(event.target as Node)) {
//         setMoreOpen(false);
//       }
//     };
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   // Prevent mismatch by not rendering dynamic paths/state until mounted
//   if (!isMounted) {
//     return (
//       <header className="fixed top-0 left-0 w-full z-50 bg-gray-900 border-b border-gray-900 h-16" />
//     );
//   }


//   return (
//     <header className="fixed top-0 left-0 w-full z-50 bg-gray-900 border-b border-gray-900 
   
//     ">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="flex items-center justify-between h-16">

//           {/* Logo */}
//           <Link href="/" className="flex items-center gap-2">
//             <Image
//               src="/logo.jpeg"
//               alt="Echobyte Logo"
//               width={36}
//               height={36}
//               priority
//               className="object-contain rounded-full"
//             />
//             <span className="text-lg font-semibold text-white">
//               Echobyte
//             </span>
//           </Link>

//           {/* Desktop Menu */}
//           <nav className="hidden md:flex items-center gap-6">
//             {mainNav.map((item) => (
//               <Link
//                 key={item.name}
//                 href={item.href}
//                 className={`text-sm font-medium transition-colors ${
//                   pathname === item.href
//                     ? 'text-blue-400'
//                     : 'text-gray-300 hover:text-white'
//                 }`}
//               >
//                 {item.name}
//               </Link>
//             ))}

//             {/* Desktop Dropdown */}
//             <div className="relative" ref={moreRef}>
//               <button
//                 onClick={() => setMoreOpen(!moreOpen)}
//                 className="text-sm font-medium text-gray-300 hover:text-white flex items-center gap-1"
//               >
//                 More
//                 <span className="text-xs">▾</span>
//               </button>

//               {moreOpen && (
//                 <div className="absolute right-0 mt-2 w-48 bg-gray-800 border border-gray-700 rounded-md shadow-lg">
//                  {moreNav.map((item) => {
//   const external = isExternal(item.href);

//   return (
//     <Link
//       key={item.name}
//       href={item.href}
//       onClick={() => setMoreOpen(false)}
//       target={external ? "_blank" : undefined}
//       rel={external ? "noopener noreferrer" : undefined}
//       className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
//     >
//       {item.name}
//     </Link>
//   );
// })}

//                 </div>
//               )}
//             </div>
//           </nav>

//           {/* Mobile Hamburger */}
//           <button
//             onClick={() => setMenuOpen(!menuOpen)}
//             className="md:hidden flex flex-col gap-1.5"
//             aria-label="Toggle menu"
//           >
//             <span className="w-6 h-0.5 bg-gray-200"></span>
//             <span className="w-6 h-0.5 bg-gray-200"></span>
//             <span className="w-6 h-0.5 bg-gray-200"></span>
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="md:hidden bg-gray-900 border-t border-gray-800">
//           <nav className="flex flex-col px-4 py-3">

//             {mainNav.map((item) => (
//               <Link
//                 key={item.name}
//                 href={item.href}
//                 onClick={() => setMenuOpen(false)}
//                 className="py-2 text-sm font-medium text-gray-300 hover:text-white"
//               >
//                 {item.name}
//               </Link>
//             ))}

//             {/* Mobile Dropdown */}
//             <button
//               onClick={() => setMoreOpen(!moreOpen)}
//               className="py-2 text-left text-sm font-medium text-gray-300 hover:text-white flex items-center justify-between"
//             >
//               More
//               <span>▾</span>
//             </button>

//             {moreOpen && (
//               <div className="pl-4 border-l border-gray-700" ref={moreRef}>
//                {moreNav.map((item) => {
//   const external = isExternal(item.href);

//   return (
//     <Link
//       key={item.name}
//       href={item.href}
//       onClick={() => setMoreOpen(false)}
//       target={external ? "_blank" : undefined}
//       rel={external ? "noopener noreferrer" : undefined}
//       className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
//     >
//       {item.name}
//     </Link>
//   );
// })}

//               </div>
//             )}

//           </nav>
//         </div>
//       )}
//     </header>
//   );
// }



'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const mainNav = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/aboutus' },
  // { name: 'Clients', href: '/ourclients' },
  { name: 'Contact Us', href: '/contactus' },
];

const moreNav = [
  { name: 'Web Services', href: '/services' },
  { name: 'Mobile Services', href: '/mobileservices' },
  { name: 'Courses', href: 'https://courses.echobyteconcept.com' },
  { name: 'Portfolio Builder', href: 'https://myportfolioechobyte.vercel.app' },
  { name: 'Website / ECommerce Builder', href: '/comingsoon' },
  { name: 'Affiliate', href: '/contactus' },
  { name: 'Partnership', href: '/contactus' },
];

const isExternal = (url) =>
  url.startsWith('http://') || url.startsWith('https://');

// Helper style for gradient text
const gradientTextStyle = "text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-600 to-purple-600";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);
  const moreRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (moreRef.current && !moreRef.current.contains(event.target)) {
        setMoreOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Mark as mounted on the client
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Prevent mismatch by not rendering dynamic paths/state until mounted
  if (!isMounted) {
    return (
      <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50 h-16" />
    );
  }

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/logo.jpeg"
              alt="Echobyte Logo"
              width={36}
              height={36}
              priority
              className="object-contain rounded-full border border-gray-200"
            />
            <span className={`text-lg font-semibold ${gradientTextStyle}`}>
              Echobyte
            </span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-6">
            {mainNav.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? gradientTextStyle // Active link gets gradient
                    : 'text-black-700 hover:text-blue-600'
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Desktop Dropdown */}
            <div className="relative" ref={moreRef}>
              <button
                onClick={() => setMoreOpen(!moreOpen)}
                className={`text-sm font-medium flex items-center gap-1 transition-colors ${
                    moreOpen ? gradientTextStyle : 'text-gray-900 hover:text-blue-600'
                }`}
              >
                More
                <span className="text-xs">▾</span>
              </button>

              {moreOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white/90 backdrop-blur-md border border-gray-100 rounded-xl shadow-xl py-2 z-50">
                  <div className={`px-4 py-2 text-xs font-bold uppercase tracking-wider ${gradientTextStyle} border-b border-gray-100 mb-1`}>
                    Services & More
                  </div>
                  {moreNav.map((item) => {
                    const external = isExternal(item.href);
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setMoreOpen(false)}
                        target={external ? "_blank" : undefined}
                        rel={external ? "noopener noreferrer" : undefined}
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50/80 hover:text-blue-700 transition-colors"
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-1"
            aria-label="Toggle menu"
          >
            <span className="w-6 h-0.5 bg-gray-800 rounded"></span>
            <span className="w-6 h-0.5 bg-gray-800 rounded"></span>
            <span className="w-6 h-0.5 bg-gray-800 rounded"></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-md border-t border-gray-100 shadow-lg absolute w-full left-0">
          <nav className="flex flex-col px-4 py-3">
            {mainNav.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`py-3 text-sm font-medium border-b border-gray-50 ${
                    pathname === item.href
                    ? gradientTextStyle
                    : 'text-gray-700'
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Mobile Dropdown */}
            <button
              onClick={() => setMoreOpen(!moreOpen)}
              className="py-3 text-left text-sm font-medium text-gray-700 flex items-center justify-between border-b border-gray-50"
            >
              <span className={moreOpen ? gradientTextStyle : ''}>More</span>
              <span className={moreOpen ? gradientTextStyle : 'text-gray-400'}>▾</span>
            </button>

            {moreOpen && (
              <div className="pl-4 bg-gray-50/80 backdrop-blur-sm rounded-lg my-2 py-2" ref={moreRef}>
                {moreNav.map((item) => {
                  const external = isExternal(item.href);
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => { setMoreOpen(false); setMenuOpen(false); }}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                      className="block py-2.5 text-sm text-gray-600 hover:text-blue-600"
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            )}

          </nav>
        </div>
      )}
    </header>
  );
}