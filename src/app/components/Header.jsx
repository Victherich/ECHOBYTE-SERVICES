



// 'use client';

// import React, { useState, useRef, useEffect } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';

// const mainNav = [
//   { name: 'Home', href: '/' },
//   { name: 'About', href: '/about' },
//   { name: 'Promo', href: '/promo' },
//   { name: 'Contact', href: '/contact' },
// ];

// const moreNav = [
//   { name: 'Build your Websites', href: '/webservices' },
//   { name: 'Build your Mobile Apps', href: '/mobileservices' },
//   { name: 'Learn Skills', href: 'https://echobytedigitalstore.vercel.app' },
//   { name: 'Build your Portfolio', href: 'https://myportfolioechobyte.vercel.app' },
//   { name: 'Sell Digital Products & Services', href: 'https://echobytedigitalmarketplace.vercel.app' },
//   // { name: 'Website / ECommerce Builder', href: '/comingsoon' },
//   // { name: 'Affiliate', href: '/contactus' },
//   // { name: 'Partnership', href: '/contactus' },
// ];

// const isExternal = (url: string): boolean =>
//   url.startsWith('http://') || url.startsWith('https://');

// // Helper style for gradient text
// const gradientTextStyle = "text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-600 to-purple-600";

// export default function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [moreOpen, setMoreOpen] = useState(false);
//   const pathname = usePathname();
//   const [isMounted, setIsMounted] = useState(false);
//   const moreRef = useRef<HTMLDivElement>(null);
//   const mobileMenuRef = useRef<HTMLDivElement>(null); // Add this line

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (moreRef.current && !moreRef.current.contains(event.target as Node)) {
//         setMoreOpen(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);


//   // Separate effect for closing the mobile menu on outside clicks
//   useEffect(() => {
//     const handleMobileClickOutside = (event: MouseEvent) => {
//       if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
//         setMenuOpen(false);
//       }
//     };

//     if (menuOpen) {
//       document.addEventListener('mousedown', handleMobileClickOutside);
//     }
    
//     return () => {
//       document.removeEventListener('mousedown', handleMobileClickOutside);
//     };
//   }, [menuOpen]);
  

//   // Mark as mounted on the client
//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   // Prevent mismatch by not rendering dynamic paths/state until mounted
//   if (!isMounted) {
//     return (
//       <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50 h-16" />
//     );
//   }

//   return (
//     <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50 shadow-sm">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="flex items-center justify-between h-16">

//           {/* Logo */}
//           <Link href="/" className="flex items-center gap-2 group">
//             <Image
//               src="/logo.jpeg"
//               alt="Echobyte Logo"
//               width={36}
//               height={36}
//               priority
//               className="object-contain rounded-full border border-gray-200"
//             />
//             <span className={`text-lg font-semibold ${gradientTextStyle}`}>
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
//                     ? gradientTextStyle // Active link gets gradient
//                     : 'text-gray-700 hover:text-blue-600'
//                 }`}
//               >
//                 {item.name}
//               </Link>
//             ))}

//             {/* Desktop Dropdown */}
//             <div className="relative" ref={moreRef}>
//               <button
//                 onClick={() => setMoreOpen(!moreOpen)}
//                 className={`text-sm font-medium flex items-center gap-1 transition-colors ${
//                     moreOpen ? gradientTextStyle : 'text-gray-900 hover:text-blue-600'
//                 }`}
//               >
//                 More
//                 <span className="text-xs">▾</span>
//               </button>

//               {moreOpen && (
//                 <div className="absolute right-0 mt-2 w-56 bg-white/90 backdrop-blur-md border border-gray-100 rounded-xl shadow-xl py-2 z-50">
//                   <div className={`px-4 py-2 text-xs font-bold uppercase tracking-wider ${gradientTextStyle} border-b border-gray-100 mb-1`}>
//                     Services & More
//                   </div>
//                   {moreNav.map((item) => {
//                     const external = isExternal(item.href);
//                     return (
//                       <Link
//                         key={item.name}
//                         href={item.href}
//                         onClick={() => setMoreOpen(false)}
//                         target={external ? "_blank" : undefined}
//                         rel={external ? "noopener noreferrer" : undefined}
//                         className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50/80 hover:text-blue-700 transition-colors"
//                       >
//                         {item.name}
//                       </Link>
//                     );
//                   })}
//                 </div>
//               )}
//             </div>
//           </nav>

//           {/* Mobile Hamburger */}
//           <button
//             onClick={() => setMenuOpen(!menuOpen)}
//             className="md:hidden flex flex-col gap-1.5 p-1"
//             aria-label="Toggle menu"
//           >
//             <span className="w-6 h-0.5 bg-gray-800 rounded"></span>
//             <span className="w-6 h-0.5 bg-gray-800 rounded"></span>
//             <span className="w-6 h-0.5 bg-gray-800 rounded"></span>
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div ref={mobileMenuRef} className="md:hidden bg-white/90 backdrop-blur-md border-t border-gray-100 shadow-lg absolute w-full left-0">
//           <nav className="flex flex-col px-4 py-3">
//             {mainNav.map((item) => (
//               <Link
//                 key={item.name}
//                 href={item.href}
//                 onClick={() => setMenuOpen(false)}
//                 className={`py-3 text-sm font-medium border-b border-gray-50 ${
//                     pathname === item.href
//                     ? gradientTextStyle
//                     : 'text-gray-700'
//                 }`}
//               >
//                 {item.name}
//               </Link>
//             ))}

//             {/* Mobile Dropdown */}
//             <button
//               onClick={() => setMoreOpen(!moreOpen)}
//               className="py-3 text-left text-sm font-medium text-gray-700 flex items-center justify-between border-b border-gray-50"
//             >
//               <span className={moreOpen ? gradientTextStyle : ''}>More</span>
//               <span className={moreOpen ? gradientTextStyle : 'text-gray-400'}>▾</span>
//             </button>

//             {moreOpen && (
//               <div className="pl-4 bg-gray-50/80 backdrop-blur-sm rounded-lg my-2 py-2" ref={moreRef}>
//                 {moreNav.map((item) => {
//                   const external = isExternal(item.href);
//                   return (
//                     <Link
//                       key={item.name}
//                       href={item.href}
//                       onClick={() => { setMoreOpen(false); setMenuOpen(false); }}
//                       target={external ? "_blank" : undefined}
//                       rel={external ? "noopener noreferrer" : undefined}
//                       className="block py-2.5 text-sm text-gray-600 hover:text-blue-600"
//                     >
//                       {item.name}
//                     </Link>
//                   );
//                 })}
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
import styled from 'styled-components';

const mainNav = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Promo', href: '/promo' },
  { name: 'Contact', href: '/contact' },
];

const moreNav = [
  { name: 'Build your Websites', href: '/webservices' },
  { name: 'Build your Mobile Apps', href: '/mobileservices' },
  { name: 'Learn Money-Making Skills', href: 'https://echobytedigitalstore.vercel.app' },
  { name: 'Build your Portfolio', href: 'https://myportfolioechobyte.vercel.app' },
  { name: 'Sell Digital Products & Services', href: 'https://echobytedigital.vercel.app' },
];

const isExternal = (url) =>
  url.startsWith('http://') || url.startsWith('https://');

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);
  const moreRef = useRef(null);
  const mobileMenuRef = useRef(null);

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

  useEffect(() => {
    const handleMobileClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('mousedown', handleMobileClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleMobileClickOutside);
    };
  }, [menuOpen]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <PlaceholderHeader />;
  }

  return (
    <HeaderContainer>
      <InnerContainer>
        <NavWrapper>
          {/* Logo */}
          <LogoLink href="/">
            <ImageWrapper>
              <Image
                src="/logo.jpeg"
                alt="Echobyte Logo"
                width={36}
                height={36}
                priority
              />
            </ImageWrapper>
            <BrandText>Echobyte Concept</BrandText>
          </LogoLink>

          {/* Desktop Menu */}
          <DesktopNav>
            {mainNav.map((item) => {
              const active = pathname === item.href;
              return (
                <NavLink key={item.name} href={item.href} $active={active}>
                  {item.name}
                </NavLink>
              );
            })}

            {/* Desktop Dropdown */}
            <DropdownContainer ref={moreRef}>
              <DropdownButton onClick={() => setMoreOpen(!moreOpen)} $isOpen={moreOpen}>
                More
                <DropdownArrow>▾</DropdownArrow>
              </DropdownButton>

              {moreOpen && (
                <DropdownMenu>
                  <DropdownHeader>
                    Services & More
                  </DropdownHeader>
                  {moreNav.map((item) => {
                    const external = isExternal(item.href);
                    return (
                      <DropdownItem
                        key={item.name}
                        href={item.href}
                        onClick={() => setMoreOpen(false)}
                        target={external ? "_blank" : undefined}
                        rel={external ? "noopener noreferrer" : undefined}
                      >
                        {item.name}
                      </DropdownItem>
                    );
                  })}
                </DropdownMenu>
              )}
            </DropdownContainer>
          </DesktopNav>

          {/* Mobile Hamburger */}
          <MobileMenuButton
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <HamburgerBar />
            <HamburgerBar />
            <HamburgerBar />
          </MobileMenuButton>
        </NavWrapper>
      </InnerContainer>

      {/* Mobile Menu */}
      {menuOpen && (
        <MobileMenuContainer ref={mobileMenuRef}>
          <MobileNavList>
            {mainNav.map((item) => {
              const active = pathname === item.href;
              return (
                <MobileNavLink
                  key={item.name}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  $active={active}
                >
                  {item.name}
                </MobileNavLink>
              );
            })}

            {/* Mobile Dropdown */}
            <MobileDropdownButton
              onClick={() => setMoreOpen(!moreOpen)}
              $isOpen={moreOpen}
            >
              <span className={moreOpen ? 'gradient-text' : ''}>More</span>
              <span className={moreOpen ? 'gradient-text' : 'muted-arrow'}>▾</span>
            </MobileDropdownButton>

            {moreOpen && (
              <MobileSubMenu ref={moreRef}>
                {moreNav.map((item) => {
                  const external = isExternal(item.href);
                  return (
                    <MobileSubItem
                      key={item.name}
                      href={item.href}
                      onClick={() => { setMoreOpen(false); setMenuOpen(false); }}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                    >
                      {item.name}
                    </MobileSubItem>
                  );
                })}
              </MobileSubMenu>
            )}
          </MobileNavList>
        </MobileMenuContainer>
      )}
    </HeaderContainer>
  );
}

/* ==================== STYLED COMPONENTS (LIGHT THEME) ==================== */

const PlaceholderHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 50;
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(226, 232, 240, 0.5);
  // height: 60px;
`;

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 50;
  background-color: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(226, 232, 240, 0.6);
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.03);
  box-sizing: border-box;
`;

const InnerContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 5px;
  box-sizing: border-box;
`;

const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  gap: 10px;
`;

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
`;

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid #e2e8f0;
  overflow: hidden;
  width: 36px;
  height: 36px;
`;

const BrandText = styled.span`
  font-size: 1.1rem;
  font-weight: 700;
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  background-image: linear-gradient(to right, #3b82f6, #2563eb, #9333ea);
`;

const DesktopNav = styled.nav`
  display: none;
  align-items: center;
  gap: 20px;

  @media (min-width: 768px) {
    display: flex;
  }
`;

const NavLink = styled(Link)`
  font-size: 0.875rem;
  font-weight: 700;
  text-decoration: none;
  transition: color 0.2s ease;
  color: ${(props) => (props.$active ? 'transparent' : '#334155')};
  background-image: ${(props) =>
    props.$active ? 'linear-gradient(to right, #3b82f6, #2563eb, #9333ea)' : 'none'};
  -webkit-background-clip: ${(props) => (props.$active ? 'text' : 'unset')};
  background-clip: ${(props) => (props.$active ? 'text' : 'unset')};

  &:hover {
    color: #2563eb;
  }
`;

const DropdownContainer = styled.div`
  position: relative;
`;

const DropdownButton = styled.button`
  background: none;
  border: none;
  font-size: 0.875rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  padding: 0;
  transition: color 0.2s ease;
  color: ${(props) => (props.$isOpen ? '#2563eb' : '#0f172a')};

  &:hover {
    color: #2563eb;
  }
`;

const DropdownArrow = styled.span`
  font-size: 0.75rem;
`;

const DropdownMenu = styled.div`
  position: absolute;
  right: 0;
  top: 100%;
  margin-top: 8px;
  width: 240px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(12px);
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.08);
  padding: 6px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  z-index: 50;
`;

const DropdownHeader = styled.div`
  padding: 8px 10px;
  font-size: 0.7rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #2563eb;
  border-bottom: 1px solid #f1f5f9;
  margin-bottom: 4px;
`;

const DropdownItem = styled(Link)`
  display: block;
  padding: 8px 10px;
  font-size: 0.85rem;
  color: #334155;
  text-decoration: none;
  border-radius: 6px;
  transition: all 0.15s ease;

  &:hover {
    background-color: #eff6ff;
    color: #2563eb;
  }
`;

const MobileMenuButton = styled.button`
  display: flex;
  flex-direction: column;
  gap: 4px;
  background: none;
  border: none;
  padding: 4px;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`;

const HamburgerBar = styled.span`
  width: 22px;
  height: 2px;
  background-color: #1e293b;
  border-radius: 2px;
`;

const MobileMenuContainer = styled.div`
  position: absolute;
  top: 60px;
  left: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(12px);
  border-top: 1px solid #e2e8f0;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.08);
  box-sizing: border-box;

  @media (min-width: 768px) {
    display: none;
  }
`;

const MobileNavList = styled.nav`
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 6px;
  box-sizing: border-box;
`;

const MobileNavLink = styled(Link)`
  padding: 8px 10px;
  font-size: 0.875rem;
  font-weight: 500;
  text-decoration: none;
  border-radius: 6px;
  border-bottom: 1px solid #f1f5f9;
  color: ${(props) => (props.$active ? '#2563eb' : '#334155')};
  background-color: ${(props) => (props.$active ? '#eff6ff' : 'transparent')};

  &:hover {
    background-color: #eff6ff;
    color: #2563eb;
  }
`;

const MobileDropdownButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 8px 10px;
  background: none;
  border: none;
  border-bottom: 1px solid #f1f5f9;
  font-size: 0.875rem;
  font-weight: 500;
  color: #334155;
  cursor: pointer;
  text-align: left;

  .gradient-text {
    color: #2563eb;
    font-weight: 700;
  }

  .muted-arrow {
    color: #94a3b8;
  }
`;

const MobileSubMenu = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 12px;
  gap: 4px;
  background-color: #f8fafc;
  border-radius: 6px;
  padding-top: 6px;
  padding-bottom: 6px;
  border: 1px solid #e2e8f0;
`;

const MobileSubItem = styled(Link)`
  display: block;
  padding: 6px 8px;
  font-size: 0.825rem;
  color: #475569;
  text-decoration: none;
  border-radius: 4px;
  transition: color 0.15s ease;

  &:hover {
    color: #2563eb;
    background-color: #eff6ff;
  }
`;