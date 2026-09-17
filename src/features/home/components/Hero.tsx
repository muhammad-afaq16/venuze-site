'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ChevronDown, User } from 'lucide-react';
import Link from 'next/link';

const LISTING_OPTIONS = [
  { label: 'List your Venue', href: '/list/venue' },
  { label: 'List your Vendor Service', href: '/list/vendor' },
];

const LANGUAGE_OPTIONS = [
  { label: 'English', code: 'EN' },
  { label: 'العربية', code: 'AR' },
  { label: 'Français', code: 'FR' },
];

export default function Hero() {
  const [activeTab, setActiveTab] = useState<'venue' | 'vendors'>('venue');

  const [isListingOpen, setIsListingOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  const [selectedLang, setSelectedLang] = useState(LANGUAGE_OPTIONS[0]);

  const listingRef = useRef<HTMLDivElement>(null);
  const langRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        listingRef.current &&
        !listingRef.current.contains(event.target as Node)
      ) {
        setIsListingOpen(false);
      }

      if (
        langRef.current &&
        !langRef.current.contains(event.target as Node)
      ) {
        setIsLangOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <section className='relative w-full h-140 md:h-155 overflow-hidden rounded-b-2xl'>
      {/* Background image */}
      <Image
        src='/images/home/hero-bg.png'
        alt='People celebrating at a venue'
        fill
        priority
        className='object-cover object-center'
      />

      {/* Top navbar */}
      <div className='relative z-30 flex items-center justify-between px-6 md:px-10 pt-6'>
        {/* Logo */}
        <div className='flex items-center gap-2'>
          <Image
            src='/images/home/venuze-logo.png'
            alt='Venuze'
            width={120}
            height={40}
          />
        </div>

        {/* Right nav actions */}
        <div className='flex items-center gap-3'>
          {/* Add your listing dropdown */}
          <div ref={listingRef} className='relative'>
            <button
              onClick={() => {
                setIsListingOpen((prev) => !prev);
                setIsLangOpen(false);
              }}
              className='flex cursor-pointer items-center gap-1 rounded-[10px] bg-white px-4 py-2 text-sm font-medium text-[#FF5037] transition-colors hover:bg-white/90'
            >
              Add your listing

              <ChevronDown
                className={`h-4 w-4 text-[#6B7280] transition-transform ${
                  isListingOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {isListingOpen && (
              <div className='absolute right-0 mt-2 w-52 overflow-hidden rounded-[10px] bg-white py-1 shadow-lg'>
                {LISTING_OPTIONS.map((option) => (
                  <Link
                    key={option.href}
                    href={option.href}
                    onClick={() => setIsListingOpen(false)}
                    className='block px-4 py-3 text-sm text-gray-700 transition-colors hover:bg-gray-100'
                  >
                    {option.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Language dropdown */}
          <div ref={langRef} className='relative'>
            <button
              onClick={() => {
                setIsLangOpen((prev) => !prev);
                setIsListingOpen(false);
              }}
              className='flex cursor-pointer items-center gap-1 rounded-[10px] bg-white px-3 py-2 text-sm font-medium text-[#FF5037] transition-colors hover:bg-white/90'
            >
              {selectedLang.code}

              <ChevronDown
                className={`h-4 w-4 text-[#6B7280] transition-transform ${
                  isLangOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {isLangOpen && (
              <div className='absolute right-0 mt-2 w-36 overflow-hidden rounded-[10px] bg-white py-1 shadow-lg'>
                {LANGUAGE_OPTIONS.map((language) => (
                  <button
                    key={language.code}
                    onClick={() => {
                      setSelectedLang(language);
                      setIsLangOpen(false);
                    }}
                    className='flex w-full cursor-pointer items-center justify-between px-4 py-3 text-sm text-gray-700 transition-colors hover:bg-gray-100'
                  >
                    <span>{language.label}</span>

                    <span className='text-xs text-gray-400'>
                      {language.code}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* User button */}
          <button className='flex h-9 w-9 cursor-pointer items-center justify-center rounded-[10px] bg-white text-[#FF5037] transition-colors hover:bg-white/90'>
            <User className='h-4 w-4' />
          </button>
        </div>
      </div>

      {/* Hero content */}
      <div className='h-full flex flex-col items-center justify-center'>
        <div className='relative z-10 mb-9 flex flex-col items-center text-center'>
          <h1 className='max-w-2xl text-3xl font-semibold leading-tight tracking-[-0.03em] text-white sm:text-4xl md:text-[3.15rem]'>
            Celebrate in venues
            <br />
            big and small
          </h1>
        </div>

        {/* Search card */}
        <div className='z-10 w-[92%] max-w-3xl'>
          {/* Venue / Vendors toggle */}
          <div className='flex justify-center'>
            <div className='relative z-20 -mb-3 flex rounded-[10px] bg-white px-2 py-[.44rem] shadow-md'>
              <button
                onClick={() => setActiveTab('venue')}
                className={`flex cursor-pointer items-center gap-1.5 rounded-[10px] px-4 py-2 text-sm font-medium transition-colors ${
                  activeTab === 'venue'
                    ? 'bg-[#FF5037] text-white'
                    : 'text-black hover:bg-gray-100'
                }`}
              >
                <Image
                  src='/svgs/venue.svg'
                  alt='Venue'
                  width={20}
                  height={20}
                />
                Venue
              </button>

              <button
                onClick={() => setActiveTab('vendors')}
                className={`flex cursor-pointer items-center gap-1.5 rounded-[10px] px-4 py-2 text-sm font-medium transition-colors ${
                  activeTab === 'vendors'
                    ? 'bg-[#FF5037] text-white'
                    : 'text-black hover:bg-gray-100'
                }`}
              >
                <Image
                  src='/svgs/vendors.svg'
                  alt='Vendors'
                  width={20}
                  height={20}
                />
                Vendors
              </button>
            </div>
          </div>

          {/* Search bar */}
          <div className='flex flex-col items-stretch gap-3 rounded-2xl bg-white p-3 shadow-xl md:flex-row md:items-center md:gap-0 md:rounded-[10px]'>
            {/* Where */}
            <div className='flex-1 border-b border-gray-200 px-4 py-2 text-left md:border-b-0 md:border-r'>
              <p className='text-xs text-[#808080]'>Where</p>

              <button className='mt-0.5 flex w-full items-center justify-between text-sm font-medium text-black'>
                Dubai, UAE
                <ChevronDown className='h-4 w-4 text-[#6B7280]' />
              </button>
            </div>

            {/* When */}
            <div className='flex-1 border-b border-gray-200 px-4 py-2 text-left md:border-b-0 md:border-r'>
              <p className='text-xs text-[#808080]'>When</p>

              <button className='mt-0.5 flex w-full items-center justify-between text-sm font-medium text-black'>
                Anytime
                <ChevronDown className='h-4 w-4 text-[#6B7280]' />
              </button>
            </div>

            {/* Guests */}
            <div className='flex-1 px-4 py-2 text-left'>
              <p className='text-xs text-[#808080]'>Guests</p>

              <button className='mt-0.5 flex w-full items-center justify-between text-sm font-medium text-black'>
                10-20
                <ChevronDown className='h-4 w-4 text-[#6B7280]' />
              </button>
            </div>

            {/* Search button */}
            <button className='flex cursor-pointer items-center justify-center gap-2 self-end rounded-[10px] bg-[#FF5037] px-6 py-3 text-[1.5rem] font-semibold tracking-[-0.02em] text-white transition-colors hover:bg-[#e8452f]'>
              <Image
                src='/svgs/search.svg'
                alt='Search'
                width={22}
                height={22}
              />
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

