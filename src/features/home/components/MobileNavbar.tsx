'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown, Menu, X } from 'lucide-react';

const LISTING_OPTIONS = [
  { label: 'List your Venue', href: '/list/venue' },
  { label: 'List your Vendor Service', href: '/list/vendor' },
];

const MENU_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Venues', href: '/venues' },
  { label: 'Vendors', href: '/vendors' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

type OpenPanel = 'listing' | 'menu' | null;

export default function Navbar() {
  const [openPanel, setOpenPanel] = useState<OpenPanel>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpenPanel(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggle = (panel: OpenPanel) =>
    setOpenPanel((prev) => (prev === panel ? null : panel));

  return (
    <div
      ref={containerRef}
      className='relative z-30 flex items-center justify-between px-6 md:px-10 pt-6'
    >
      {/* Logo */}
      <Link href='/' className='flex items-center gap-2'>
        <Image
          src='/images/home/logo.png'
          alt='Venuze'
          width={51}
          height={34}
        />
      </Link>

      {/* Right nav actions */}
      <div className='flex items-center gap-3'>
        {/* Add your listing dropdown */}
        <div className='relative'>
          <button
            onClick={() => toggle('listing')}
            className='flex cursor-pointer items-center gap-1 rounded-[10px] bg-white px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-white/90'
          >
            Add your listing
            <ChevronDown
              className={`h-4 w-4 text-[#6B7280] transition-transform ${
                openPanel === 'listing' ? 'rotate-180' : ''
              }`}
            />
          </button>

          {openPanel === 'listing' && (
            <div className='absolute right-0 mt-2 w-52 overflow-hidden rounded-[10px] bg-white py-1 shadow-lg'>
              {LISTING_OPTIONS.map((option) => (
                <Link
                  key={option.href}
                  href={option.href}
                  onClick={() => setOpenPanel(null)}
                  className='block px-4 py-3 text-sm text-gray-700 transition-colors hover:bg-gray-100'
                >
                  {option.label}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Hamburger menu button */}
        <div className='relative'>
          <button
            onClick={() => toggle('menu')}
            aria-label='Toggle menu'
            className='flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white text-black transition-colors hover:bg-white/90'
          >
            {openPanel === 'menu' ? (
              <X className='h-4 w-4' />
            ) : (
              <Menu className='h-4 w-4' />
            )}
          </button>

          {openPanel === 'menu' && (
            <div className='absolute right-0 mt-2 w-48 overflow-hidden rounded-[10px] bg-white py-1 shadow-lg'>
              {MENU_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpenPanel(null)}
                  className='block px-4 py-3 text-sm text-gray-700 transition-colors hover:bg-gray-100'
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
