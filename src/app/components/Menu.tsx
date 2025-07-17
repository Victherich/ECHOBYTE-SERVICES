'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';


const menuItems = [
  { name: 'Home', link: '/' },
  { name: 'Web Services', link: '/services' },
  { name: 'Mobile Services', link: '/mobileservices' },
  {name:'Our Digital Store', link:'https://products.echobyteconcept.com' },
  {name:'Make Money with Echobyte', link:'/comingsoon' },
  {name:'Portfolio builder', link:'/comingsoon' },
  { name: 'About Echobyte', link: '/aboutus' },
];

const Menu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (!target.closest('#menu-container')) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', closeMenu);
    return () => {
      document.removeEventListener('click', closeMenu);
    };
  }, []);

  return (
    <div
      id="menu-container"
      className="fixed top-2.5 right-2.5 z-[1000]"
    >
      <div
        onClick={toggleMenu}
        onMouseEnter={() => setIsOpen(true)}
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold text-sm px-5 py-1.5 rounded-full shadow-lg cursor-pointer select-none transition-colors duration-300 md:px-2.5"
      >
        📜 Menu
      </div>

      <ul
        className={`absolute right-0 top-12 w-48 bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-out ${
          isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
        }`}
      >
        {menuItems.map((item, index) => (
          <li
            key={index}
            onClick={() => {
              setIsOpen(false);
              router.push(item.link);
            }}
            className="px-4 py-3 text-sm font-medium text-gray-800 hover:bg-gray-200 cursor-pointer flex items-center gap-2"
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
