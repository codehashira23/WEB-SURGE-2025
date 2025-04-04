"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  NavigationMenu, 
  NavigationMenuContent, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuList, 
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import { PlusGrid, PlusGridItem, PlusGridRow } from '@/components/eldoraui/plusgrid';
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

// Navigation links for mobile menu
const navLinks = [
  { name: 'Institute', href: '#', hasSubmenu: true, items: [
    { name: 'About', href: '/about' },
    { name: 'Director', href: '/director' },
    { name: 'Board of Governors', href: 'http://iiitvadodara.ac.in/bog.php' },
    { name: 'Senate', href: 'https://iiitvadodara.ac.in/senate.php' },
    { name: 'Finanace Committee', href: 'https://iiitvadodara.ac.in/finance_committee.php' },
  ]},
  { name: 'Academics', href: '#', hasSubmenu: true, items: [
    { name: 'B.Tech', href: '/btech' },
    { name: 'Post Graduate (MCA)', href: '#' },
    { name: 'BSc(online)', href: '#' },
    { name: 'Ordinance', href: '#' },
    { name: 'B.Tech. Curriculum(2018)', href: '#' },
    { name: 'Holiday list 2025', href: '#' },
    { name: 'Acadmic Calender', href: '#' },
    { name: 'Time Table', href: '#' },
  ]},
  { name: 'Admission', href: '#', hasSubmenu: true, items: [
    { name: 'Btech', href: '#' },
    { name: 'SII 2024', href: '#' },
    { name: 'NRI Admissions 2024 b.tech. (CSE)', href: '#' },
    { name: 'M.Tech.', href: '#' },
  ]},
  { name: 'People', href: '#', hasSubmenu: true, items: [
    { name: 'Faculty', href: '/faculty' },
    { name: 'Staff', href: '/staff' },
    { name: 'Officer', href: '/officer' },
  ]},
  { name: 'Career', href: '#' },
  { name: 'Hostel', href: '/hostel' },
  { name: 'Tender', href: '/tender' },
  { name: 'Committee', href: '/committee' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Placements', href: '/placement' },
];

const Navbar = () => {
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState(null);

  const toggleMobileSubmenu = (index) => {
    setOpenMobileSubmenu(openMobileSubmenu === index ? null : index);
  };

  return (
    <Disclosure as="header" className="w-full">
      {({ open }) => (
        <>
      {/* Top bar */}
      <div className="bg-gray-100">
            <div className="container mx-auto py-2 px-4 flex flex-wrap justify-between items-center">
              <div className="pl-0 md:pl-8 w-full md:w-auto text-center md:text-left mb-2 md:mb-0">
            <Link href="https://iiitvadodara.ac.in/index.php" target="_blank" className="text-sm font-semibold text-yellow-600 hover:text-yellow-700">
              Gandhinagar Campus
            </Link>
          </div>
              <div className="flex justify-center md:justify-end space-x-4 w-full md:w-auto">
            <a href="#" className="text-sm text-gray-600 hover:text-gray-800">
              <i className="fa fa-map-marker" aria-hidden="true"></i> Location
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-800">
              <i className="fa fa-phone" aria-hidden="true"></i> Contact
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-800">
              <i className="fa fa-envelope" aria-hidden="true"></i> Email
            </a>
          </div>
        </div>
      </div>

      {/* Logo and name */}
      <PlusGrid>
        <PlusGridRow className="relative flex justify-between items-center">
              <div className="relative flex pl-2 md:pl-8 py-3 w-full">
                <PlusGridItem className="py-0 md:py-3 w-full">
              <Link href="/">
                    <div className="flex flex-col md:flex-row items-center">
                      <div className="w-16 h-16 md:w-20 md:h-20 relative mr-0 md:mr-4 mb-2 md:mb-0">
                    <Image 
                      src="http://diu.iiitvadodara.ac.in/img/Logo5.png" 
                      alt="IIIT Vadodara Logo" 
                      width={80} 
                      height={80}
                    />
                  </div>
                      <div className="text-center md:text-left">
                        <h1 className="text-lg md:text-2xl font-bold text-[#800000]">IIIT Vadodara-International Campus Diu</h1>
                        <p className="text-xs md:text-sm text-gray-600">(Satellite campus of IIIT Vadodara)</p>
                  </div>
                </div>
              </Link>
            </PlusGridItem>
          </div>
        </PlusGridRow>
      </PlusGrid>

      {/* Mobile menu button - Moved below header */}
      <div className="flex justify-center lg:hidden py-2 bg-gray-50 border-t border-gray-200">
        <DisclosureButton
          className="flex items-center justify-center rounded-lg data-[hover]:bg-black/5 px-4 py-1.5"
          aria-label="Open main menu"
        >
          {open ? (
            <div className="flex items-center">
              <XMarkIcon className="size-5 mr-2" aria-hidden="true" />
              <span className="text-sm font-medium">Close Menu</span>
            </div>
          ) : (
            <div className="flex items-center">
              <Bars2Icon className="size-5 mr-2" aria-hidden="true" />
              <span className="text-sm font-medium">Menu</span>
            </div>
          )}
        </DisclosureButton>
      </div>

          {/* Main navigation using Radix UI NavigationMenu - Desktop only */}
          <div className="bg-[#800000] text-white relative z-40 hidden lg:block">
        <div className="container mx-auto px-4">
          <div className="nav-container relative">
            <NavigationMenu className="mx-auto max-w-none w-full justify-center" viewport={false}>
              <NavigationMenuList className="flex gap-0 text-white justify-center">
                {/* Institute dropdown */}
                <NavigationMenuItem className="relative">
                  <NavigationMenuTrigger className="font-medium text-white bg-[#800000] hover:bg-[#5d0000] focus:bg-[#5d0000] rounded-none h-auto py-3 px-4 data-[state=open]:bg-[#5d0000]">
                    Institute
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-white shadow-md rounded-b-md border-0 origin-top-center absolute left-1/2 -translate-x-1/2 z-50">
                        <ul className="grid w-[220px] gap-0">
                      <li>
                        <Link href="/about" legacyBehavior passHref>
                          <NavigationMenuLink className="block px-4 py-2 text-[#800000] hover:bg-gray-100">
                            About
                          </NavigationMenuLink>
                        </Link>
                      </li>
                      <li>
                        <Link href="/director" legacyBehavior passHref>
                          <NavigationMenuLink className="block px-4 py-2 text-[#800000] hover:bg-gray-100">
                            Director
                          </NavigationMenuLink>
                        </Link>
                      </li>
                      <li>
                        <Link href="http://iiitvadodara.ac.in/bog.php" target="_blank" legacyBehavior passHref>
                          <NavigationMenuLink className="block px-4 py-2 text-[#800000] hover:bg-gray-100">
                            Board of Governors
                          </NavigationMenuLink>
                        </Link>
                      </li>
                      <li>
                        <Link href="https://iiitvadodara.ac.in/senate.php" legacyBehavior passHref>
                          <NavigationMenuLink className="block px-4 py-2 text-[#800000] hover:bg-gray-100">
                            Senate
                          </NavigationMenuLink>
                        </Link>
                      </li>
                      <li>
                        <Link href="https://iiitvadodara.ac.in/finance_committee.php" legacyBehavior passHref>
                          <NavigationMenuLink className="block px-4 py-2 text-[#800000] hover:bg-gray-100">
                            Finanace Committee
                          </NavigationMenuLink>
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Academics dropdown */}
                <NavigationMenuItem className="relative">
                  <NavigationMenuTrigger className="font-medium text-white bg-[#800000] hover:bg-[#5d0000] focus:bg-[#5d0000] rounded-none h-auto py-3 px-4 data-[state=open]:bg-[#5d0000]">
                    Academics
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-white shadow-md rounded-b-md border-0 origin-top-center absolute left-1/2 -translate-x-1/2 z-50">
                    <ul className="grid w-[220px] gap-0">
                      <li>
                        <Link href="/btech" legacyBehavior passHref>
                          <NavigationMenuLink className="block px-4 py-2 text-[#800000] hover:bg-gray-100">
                            B.Tech
                          </NavigationMenuLink>
                        </Link>
                      </li>
                      <li>
                        <Link href="#" legacyBehavior passHref>
                          <NavigationMenuLink className="block px-4 py-2 text-[#800000] hover:bg-gray-100">
                            Post Graduate (MCA)
                          </NavigationMenuLink>
                        </Link>
                      </li>
                      <li>
                        <Link href="#" legacyBehavior passHref>
                          <NavigationMenuLink className="block px-4 py-2 text-[#800000] hover:bg-gray-100">
                            BSc(online)
                          </NavigationMenuLink>
                        </Link>
                      </li>
                      <li>
                        <Link href="#" legacyBehavior passHref>
                          <NavigationMenuLink className="block px-4 py-2 text-[#800000] hover:bg-gray-100">
                            Ordinance
                          </NavigationMenuLink>
                        </Link>
                      </li>
                      <li>
                        <Link href="#" legacyBehavior passHref>
                          <NavigationMenuLink className="block px-4 py-2 text-[#800000] hover:bg-gray-100">
                              B.Tech. Curriculum(2018) 
                          </NavigationMenuLink>
                        </Link>
                      </li>
                      <li>
                        <Link href="#" legacyBehavior passHref>
                          <NavigationMenuLink className="block px-4 py-2 text-[#800000] hover:bg-gray-100">
                             Holiday list 2025  
                          </NavigationMenuLink>
                        </Link>
                      </li>
                      <li>
                        <Link href="#" legacyBehavior passHref>
                          <NavigationMenuLink className="block px-4 py-2 text-[#800000] hover:bg-gray-100">
                              Acadmic Calender 
                          </NavigationMenuLink>
                        </Link>
                      </li>
                      <li>
                        <Link href="#" legacyBehavior passHref>
                          <NavigationMenuLink className="block px-4 py-2 text-[#800000] hover:bg-gray-100">
                          Time Table
                          </NavigationMenuLink>
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Admission dropdown */}
                <NavigationMenuItem className="relative">
                  <NavigationMenuTrigger className="font-medium text-white bg-[#800000] hover:bg-[#5d0000] focus:bg-[#5d0000] rounded-none h-auto py-3 px-4 data-[state=open]:bg-[#5d0000]">
                    Admission
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-white shadow-md rounded-b-md border-0 origin-top-center absolute left-1/2 -translate-x-1/2 z-50">
                    <ul className="grid w-[200px] gap-0">
                      <li>
                        <Link href="#" legacyBehavior passHref>
                          <NavigationMenuLink className="block px-4 py-2 text-[#800000] hover:bg-gray-100">
                            Btech
                          </NavigationMenuLink>
                        </Link>
                      </li>
                      <li>
                        <Link href="#" legacyBehavior passHref>
                          <NavigationMenuLink className="block px-4 py-2 text-[#800000] hover:bg-gray-100">
                            SII 2024
                          </NavigationMenuLink>
                        </Link>
                      </li>
                      <li>
                        <Link href="#" legacyBehavior passHref>
                          <NavigationMenuLink className="block px-4 py-2 text-[#800000] hover:bg-gray-100">
                            NRI Admissions 2024 b.tech. (CSE)
                          </NavigationMenuLink>
                        </Link>
                      </li>
                      <li>
                        <Link href="#" legacyBehavior passHref>
                          <NavigationMenuLink className="block px-4 py-2 text-[#800000] hover:bg-gray-100">
                            M.Tech. 
                          </NavigationMenuLink>
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* People dropdown */}
                <NavigationMenuItem className="relative">
                  <NavigationMenuTrigger className="font-medium text-white bg-[#800000] hover:bg-[#5d0000] focus:bg-[#5d0000] rounded-none h-auto py-3 px-4 data-[state=open]:bg-[#5d0000]">
                    People
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-white shadow-md rounded-b-md border-0 origin-top-center absolute left-1/2 -translate-x-1/2 z-50">
                    <ul className="grid w-[200px] gap-0">
                      <li>
                        <Link href="/faculty" legacyBehavior passHref>
                          <NavigationMenuLink className="block px-4 py-2 text-[#800000] hover:bg-gray-100">
                            Faculty
                          </NavigationMenuLink>
                        </Link>
                      </li>
                      <li>
                        <Link href="/staff" legacyBehavior passHref>
                          <NavigationMenuLink className="block px-4 py-2 text-[#800000] hover:bg-gray-100">
                            Staff
                          </NavigationMenuLink>
                        </Link>
                      </li>
                      <li>
                        <Link href="/officer" legacyBehavior passHref>
                          <NavigationMenuLink className="block px-4 py-2 text-[#800000] hover:bg-gray-100">
                            Officer
                          </NavigationMenuLink>
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Regular menu items */}
                <NavigationMenuItem>
                  <Link href="#" legacyBehavior passHref>
                    <NavigationMenuLink className={cn(
                      "block px-4 py-3 font-medium bg-[#800000] hover:bg-[#5d0000] focus:bg-[#5d0000] text-white"
                    )}>
                      Career
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/hostel" legacyBehavior passHref>
                    <NavigationMenuLink className={cn(
                      "block px-4 py-3 font-medium bg-[#800000] hover:bg-[#5d0000] focus:bg-[#5d0000] text-white"
                    )}>
                      Hostel
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/tender" legacyBehavior passHref>
                    <NavigationMenuLink className={cn(
                      "block px-4 py-3 font-medium bg-[#800000] hover:bg-[#5d0000] focus:bg-[#5d0000] text-white"
                    )}>
                      Tender
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/committee" legacyBehavior passHref>
                    <NavigationMenuLink className={cn(
                      "block px-4 py-3 font-medium bg-[#800000] hover:bg-[#5d0000] focus:bg-[#5d0000] text-white"
                    )}>
                      Committee
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/faq" legacyBehavior passHref>
                    <NavigationMenuLink className={cn(
                      "block px-4 py-3 font-medium bg-[#800000] hover:bg-[#5d0000] focus:bg-[#5d0000] text-white"
                    )}>
                      FAQ
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              
                <NavigationMenuItem>
                  <Link href="/placement" legacyBehavior passHref>
                    <NavigationMenuLink className={cn(
                      "block px-4 py-3 font-medium bg-[#800000] hover:bg-[#5d0000] focus:bg-[#5d0000] text-white"
                    )}>
                      Placements
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <style jsx global>{`
            /* Override Radix UI's default positioning */
            .nav-container [data-state="open"] > [data-radix-popper-content-wrapper] {
              transform: translate3d(0, 0, 0) !important;
              left: 50% !important;
              transform: translateX(-50%) !important;
              top: 100% !important;
              margin-top: 0 !important;
            }
          `}</style>
        </div>
      </div>

      {/* Mobile Navigation Panel */}
          <DisclosurePanel className="lg:hidden bg-white shadow-md">
            <div className="flex flex-col py-2">
              {navLinks.map((link, index) => (
                <div key={index} className="border-b border-gray-100">
                  {link.hasSubmenu ? (
                    <div>
                      <button 
                        onClick={() => toggleMobileSubmenu(index)}
                        className="flex w-full justify-between items-center py-3 px-4 text-[#800000] font-medium"
                      >
                        {link.name}
                        <svg 
                          className={`w-4 h-4 transition-transform ${openMobileSubmenu === index ? 'transform rotate-180' : ''}`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                      </button>
                      {openMobileSubmenu === index && (
                        <div className="bg-gray-50 pl-4">
                          {link.items.map((item, itemIndex) => (
                            <Link 
                              key={itemIndex} 
                              href={item.href}
                              className="block py-2 px-4 text-sm text-gray-800 hover:text-[#800000]"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link 
                      href={link.href}
                      className="block py-3 px-4 text-[#800000] font-medium"
                    >
                      {link.name}
                    </Link>
                  )}
        </div>
              ))}
        </div>
      </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar; 