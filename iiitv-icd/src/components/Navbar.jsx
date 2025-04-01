import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <header className="w-full">
      {/* Top bar */}
      <div className="bg-gray-100">
        <div className="container mx-auto py-2 px-4 flex justify-between items-center">
          <div>
            <Link href="https://iiitvadodara.ac.in/index.php" target="_blank" className="text-sm font-semibold text-yellow-600 hover:text-yellow-700">
              Gandhinagar Campus
            </Link>
          </div>
          <div className="flex space-x-4">
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
      <div className="bg-white border-b">
        <div className="container mx-auto py-4 px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center">
            <Link href="/">
              <div className="flex items-center">
                <div className="w-16 h-16 relative mr-3">
                  <Image 
                    src="http://diu.iiitvadodara.ac.in/img/Logo5.png" 
                    alt="IIIT Vadodara Logo" 
                    width={64} 
                    height={64}
                  />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-[#800000]">IIIT Vadodara-International Campus Diu</h1>
                  <p className="text-sm text-gray-600">(Satellite campus of IIIT Vadodara)</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-[#800000] text-white">
        <div className="container mx-auto px-4">
          <div className="relative">
            <button className="md:hidden py-3 px-4 text-white">
              Menu
            </button>
            <ul className="hidden md:flex">
              {/* Institute dropdown */}
              <li className="group relative">
                <a href="#" className="block px-4 py-3 font-medium hover:bg-[#5d0000]">
                  Institute <span>▼</span>
                </a>
                <ul className="absolute hidden group-hover:block left-0 bg-white shadow-md min-w-[200px] z-10">
                  <li>
                    <Link href="/about" className="block px-4 py-2 text-[#800000] hover:bg-gray-100">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/director" className="block px-4 py-2 text-[#800000] hover:bg-gray-100">
                      Director
                    </Link>
                  </li>
                  <li>
                    <Link href="http://iiitvadodara.ac.in/bog.php" target="_blank" className="block px-4 py-2 text-[#800000] hover:bg-gray-100">
                      Board of Governors
                    </Link>
                  </li>
                  <li>
                    <Link href="/rti" className="block px-4 py-2 text-[#800000] hover:bg-gray-100">
                      RTI
                    </Link>
                  </li>
                </ul>
              </li>
              
              {/* Academics dropdown */}
              <li className="group relative">
                <a href="#" className="block px-4 py-3 font-medium hover:bg-[#5d0000]">
                  Academics <span>▼</span>
                </a>
                <ul className="absolute hidden group-hover:block left-0 bg-white shadow-md min-w-[200px] z-10">
                  <li>
                    <Link href="/btech" className="block px-4 py-2 text-[#800000] hover:bg-gray-100">
                      B.Tech
                    </Link>
                  </li>
                  <li>
                    <Link href="/mca" className="block px-4 py-2 text-[#800000] hover:bg-gray-100">
                      Post Graduate (MCA)
                    </Link>
                  </li>
                </ul>
              </li>
              
              {/* People dropdown */}
              <li className="group relative">
                <a href="#" className="block px-4 py-3 font-medium hover:bg-[#5d0000]">
                  People <span>▼</span>
                </a>
                <ul className="absolute hidden group-hover:block left-0 bg-white shadow-md min-w-[200px] z-10">
                  <li>
                    <Link href="/faculty" className="block px-4 py-2 text-[#800000] hover:bg-gray-100">
                      Faculty
                    </Link>
                  </li>
                  <li>
                    <Link href="/staff" className="block px-4 py-2 text-[#800000] hover:bg-gray-100">
                      Staff
                    </Link>
                  </li>
                </ul>
              </li>
              
              {/* Other menu items */}
              <li>
                <Link href="/hostel" className="block px-4 py-3 font-medium hover:bg-[#5d0000]">
                  Hostel
                </Link>
              </li>
              <li>
                <Link href="/tender" className="block px-4 py-3 font-medium hover:bg-[#5d0000]">
                  Tender
                </Link>
              </li>
              <li>
                <Link href="/faq" className="block px-4 py-3 font-medium hover:bg-[#5d0000]">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar; 