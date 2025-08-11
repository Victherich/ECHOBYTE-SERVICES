'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';


const menuItems = [
  { name: 'Echobyte Home', link: '/' },
   {name:'Digital Store Home', link:'https://products.echobyteconcept.com' },
     {name:'Portfolio Builder', link:'/comingsoon' },
  {name:'Echobyte Affiliate', link:'/comingsoon' },
 {name:'Echobyte Partnership', link:'/comingsoon' },
];



const menuItems2 = [

  { name: 'Web Services', link: '/services' },
  { name: 'Mobile Services', link: '/mobileservices' },

];



const menuItems3 = [


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



  useEffect(() => {
  const interval = setInterval(() => {
    setIsOpen(true);
  }, 20000);
  return () => clearInterval(interval);
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
        className={`absolute right-0 top-12 w-48 bg-gray-100 rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-out ${
          isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
        }`}
      >
        <p style={{fontWeight:"bold", paddingLeft:"5px", paddingTop:"20px", textDecoration:"underline", fontSize:"0.8rem", color:"#222"}}>HOME PAGES</p>
        {menuItems.map((item, index) => (
          <li
            key={index}
            onClick={() => {
              setIsOpen(false);
              router.push(item.link);
            }}
            className="px-4 py-1 text-sm font-medium text-blue-900 hover:bg-gray-200 cursor-pointer flex items-center gap-2"
          >
            {item.name}
          </li>
        ))}
<p style={{fontWeight:"bold", paddingLeft:"5px", paddingTop:"20px", textDecoration:"underline", fontSize:"0.8rem", color:"#222" }}>SERVICES</p>
         {menuItems2.map((item, index) => (
          <li
            key={index}
            onClick={() => {
              setIsOpen(false);
              router.push(item.link);
            }}
            className="px-4 py-1 text-sm font-medium text-blue-900 hover:bg-gray-200 cursor-pointer flex items-center gap-2"
          >
            {item.name}
          </li>
        ))}

        <p style={{fontWeight:"bold", paddingLeft:"5px", paddingTop:"20px", textDecoration:"underline", fontSize:"0.8rem", color:"#222"}}>OTHER</p>
         {menuItems3.map((item, index) => (
          <li
            key={index}
            onClick={() => {
              setIsOpen(false);
              router.push(item.link);
            }}
            className="px-4 py-2 text-sm font-medium text-blue-900 hover:bg-gray-200 cursor-pointer flex items-center gap-2"
          >
            {item.name}
          </li>
        ))}
      </ul>



    </div>
  );
};

export default Menu;
