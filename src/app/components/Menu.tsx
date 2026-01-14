// 'use client';

// import React, { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';


// const menuItems = [
//   { name: 'Echobyte Home', link: '/' },
//    {name:'Digital Store Home', link:'https://products.echobyteconcept.com' },
//      {name:'Portfolio Builder', link:'/comingsoon' },
//   {name:'Echobyte Affiliate', link:'/comingsoon' },
//  {name:'Echobyte Partnership', link:'/comingsoon' },
// ];



// const menuItems2 = [

//   { name: 'Web Services', link: '/services' },
//   { name: 'Mobile Services', link: '/mobileservices' },

// ];



// const menuItems3 = [


//   { name: 'About Echobyte', link: '/aboutus' },
//   { name: 'Our Clients / Partners', link: '/ourclients' },
// ];

// const Menu: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const router = useRouter();

//   const toggleMenu = () => setIsOpen(!isOpen);

//   const closeMenu = (e: MouseEvent) => {
//     const target = e.target as HTMLElement;
//     if (!target.closest('#menu-container')) {
//       setIsOpen(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener('click', closeMenu);
//     return () => {
//       document.removeEventListener('click', closeMenu);
//     };
//   }, []);



//   useEffect(() => {
//   const interval = setInterval(() => {
//     setIsOpen(true);
//   },1*60*1000);
//   return () => clearInterval(interval);
// }, []);


//   return (
//     <div
//       id="menu-container"
//       className="fixed top-2.5 right-2.5 z-[1000]"
//     >
//       <div
//         onClick={toggleMenu}
//         onMouseEnter={() => setIsOpen(true)}
//         className="bg-blue-500 hover:bg-blue-600 text-white font-semibold text-sm px-5 py-1.5 rounded-full shadow-lg cursor-pointer select-none transition-colors duration-300 md:px-2.5"
//       >
//         📜 Menu
//       </div>

//       <ul
//         className={`absolute right-0 top-12 w-48 bg-gray-100 rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-out ${
//           isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
//         }`}
//       >
//         <p style={{fontWeight:"bold", paddingLeft:"5px", paddingTop:"20px", textDecoration:"underline", fontSize:"0.8rem", color:"#222"}}>HOME PAGES</p>
//         {menuItems.map((item, index) => (
//           <li
//             key={index}
//             onClick={() => {
//               setIsOpen(false);
//               router.push(item.link);
//             }}
//             className="px-4 py-1 text-sm font-medium text-blue-900 hover:bg-gray-200 cursor-pointer flex items-center gap-2"
//           >
//             {item.name}
//           </li>
//         ))}
// <p style={{fontWeight:"bold", paddingLeft:"5px", paddingTop:"20px", textDecoration:"underline", fontSize:"0.8rem", color:"#222" }}>SERVICES</p>
//          {menuItems2.map((item, index) => (
//           <li
//             key={index}
//             onClick={() => {
//               setIsOpen(false);
//               router.push(item.link);
//             }}
//             className="px-4 py-1 text-sm font-medium text-blue-900 hover:bg-gray-200 cursor-pointer flex items-center gap-2"
//           >
//             {item.name}
//           </li>
//         ))}

//         <p style={{fontWeight:"bold", paddingLeft:"5px", paddingTop:"20px", textDecoration:"underline", fontSize:"0.8rem", color:"#222"}}>OTHER</p>
//          {menuItems3.map((item, index) => (
//           <li
//             key={index}
//             onClick={() => {
//               setIsOpen(false);
//               router.push(item.link);
//             }}
//             className="px-4 py-2 text-sm font-medium text-blue-900 hover:bg-gray-200 cursor-pointer flex items-center gap-2"
//           >
//             {item.name}
//           </li>
//         ))}
//       </ul>



//     </div>
//   );
// };

// export default Menu;
'use client';

import React, { useState, useRef, useEffect } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const mainNav = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/aboutus' },
  { name: 'Clients', href: '/ourclients' },
  { name: 'Contact Us', href: '/contactus' },
];

const moreNav = [
   { name: 'Web Services', href: '/services' },
  { name: 'Mobile Services', href: '/mobileservices' },
  { name: 'Digital Store', href: 'https://products.echobyteconcept.com' },
  { name: 'Portfolio Builder', href: '/comingsoon' },
   { name: 'Academic Portal', href: '/comingsoon' },
  

  { name: 'Affiliate', href: '/comingsoon' },
  { name: 'Partnership', href: '/comingsoon' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const pathname = usePathname();
  const moreRef = useRef<HTMLDivElement | null>(null);

useEffect(() => {
  const handleClickOutside = (event: MouseEvent) => {
    if (
      moreRef.current &&
      !moreRef.current.contains(event.target as Node)
    ) {
      setMoreOpen(false);
    }
  };

  document.addEventListener('mousedown', handleClickOutside);
  return () => {
    document.removeEventListener('mousedown', handleClickOutside);
  };
}, []);


  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gray-900 border-b border-gray-800 shadow-[0_4px_20px_0_rgba(0,0,255,0.6)]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.jpeg"
              alt="Echobyte Logo"
              width={36}
              height={36}
              priority
              className="object-contain rounded-full"
            />
            <span className="text-lg font-semibold text-white">
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
                    ? 'text-blue-400'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Desktop Dropdown */}
            <div className="relative" ref={moreRef}>
              <button
                onClick={() => setMoreOpen(!moreOpen)}
                className="text-sm font-medium text-gray-300 hover:text-white flex items-center gap-1"
              >
                More
                <span className="text-xs">▾</span>
              </button>

              {moreOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-gray-800 border border-gray-700 rounded-md shadow-lg">
                  {moreNav.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setMoreOpen(false)}
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5"
            aria-label="Toggle menu"
          >
            <span className="w-6 h-0.5 bg-gray-200"></span>
            <span className="w-6 h-0.5 bg-gray-200"></span>
            <span className="w-6 h-0.5 bg-gray-200"></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800">
          <nav className="flex flex-col px-4 py-3">

            {mainNav.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="py-2 text-sm font-medium text-gray-300 hover:text-white"
              >
                {item.name}
              </Link>
            ))}

            {/* Mobile Dropdown */}
            <button
              onClick={() => setMoreOpen(!moreOpen)}
              className="py-2 text-left text-sm font-medium text-gray-300 hover:text-white flex items-center justify-between"
            >
              More
              <span>▾</span>
            </button>

            {moreOpen && (
              <div className="pl-4 border-l border-gray-700" ref={moreRef}>
                {moreNav.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-2 text-sm text-gray-400 hover:text-white"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}

          </nav>
        </div>
      )}
    </header>
  );
}
