'use client';
import Link from 'next/link';
import { FaFacebookMessenger } from 'react-icons/fa';
import { CiInstagram } from 'react-icons/ci';
import { FaTwitter } from 'react-icons/fa';
import { useState } from 'react';

import Authlinks from '../authlinks/Authlinks';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-800 py-4 px-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left side: Social Icons */}
        <div className="flex space-x-4">
          <a href="#" className="text-gray-300 hover:text-white">
            <FaFacebookMessenger />
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            <CiInstagram />
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            <FaTwitter />
          </a>
        </div>

        {/* Middle: Website Name */}
        <div className="text-white text-xl font-bold">
          <Link href="/">NazneenBlog</Link>
        </div>

        {/* Right side: Menu */}
        <div className="hidden md:flex space-x-6">
        
          <Link href="/" className="text-gray-300 hover:text-white">Home</Link>
          <Link href="/about" className="text-gray-300 hover:text-white">About</Link>
          <Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link>
          <Authlinks></Authlinks>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="text-gray-300 focus:outline-none">
            <i className="fas fa-bars"></i> {/* FontAwesome menu icon */}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <Link href="/" className="block text-gray-300 hover:bg-gray-700 px-2 py-1">Home</Link>
          <Link href="/about" className="block text-gray-300 hover:bg-gray-700 px-2 py-1">About</Link>
          <Link href="/contact" className="block text-gray-300 hover:bg-gray-700 px-2 py-1">Contact</Link>
          <Authlinks></Authlinks>
        </div>
      )}
    </nav>
  );
}
