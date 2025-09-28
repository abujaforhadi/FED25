'use client';

import {  MenuIcon, Search, ShoppingCart, User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white text-black font-medium text-md md:px-20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className=" md:hidden"
            >
              <MenuIcon />
            </button>
            <Link href="/" className="flex items-center">
             <Image src="/logo.png" alt="Logo" width={20} height={20} className='mr-2' />
              <span className="text-2xl font-bold ">PIMJO</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <Link href="#" className="flex items-center gap-2 0">
              Deals of the Week
              <span className="bg-red-100 text-red-600 text-xs  px-2 py-0.5 rounded-full">Hot</span>
            </Link>
            <Link href="#" className="0">New Arrivals</Link>
            <Link href="#" className="0">Men</Link>
            <Link href="#" className="0">Women</Link>
            <Link href="#" className="0">Kids</Link>
            <Link href="#" className="flex items-center gap-2 0">
              Sale
              <span className="bg-blue-100 text-blue-600 text-xs  px-2 py-0.5 rounded-md">20% OFF</span>
            </Link>
          </div>

          {/* Right Section: Action Icons */}
          <div className="flex items-center gap-4 ">
            <button className="">
              <Search />
            </button>
            <button className="">
              <User />
            </button>
            <button className="relative ">
              <ShoppingCart />
              <span className="absolute -top-2 -right-2 w-5 h-5 bg-blue-600 text-white text-xs flex items-center justify-center rounded-full">
                3
              </span>
            </button>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden px-4 pt-2 pb-4 space-y-2">
            <Link href="#" className="block 0">Deals of the Week</Link>
            <Link href="#" className="block 0">New Arrivals</Link>
            <Link href="#" className="block 0">Men</Link>
            <Link href="#" className="block 0">Women</Link>
            <Link href="#" className="block 0">Kids</Link>
            <Link href="#" className="block 0">Sale</Link>
        </div>
      )}
    </nav>
  );
}