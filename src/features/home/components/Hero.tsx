'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { ChevronDown, User } from 'lucide-react';
import Link from 'next/link';
import MobileNavbar from './MobileNavbar';

const LISTING_OPTIONS = [
  { label: 'List your Venue', href: '/list/venue' },
  { label: 'List your Vendor Service', href: '/list/vendor' },
];

const LANGUAGE_OPTIONS = [
  { label: 'English', code: 'EN' },
  { label: 'العربية', code: 'AR' },
  { label: 'Français', code: 'FR' },
];

const LOCATION_OPTIONS = ['Dubai, UAE', 'Abu Dhabi, UAE', 'Sharjah, UAE'];
const DATE_OPTIONS = ['Anytime', 'Today', 'This weekend', 'Next weekend'];
const GUEST_OPTIONS = ['1-10', '10-20', '20-50', '50+'];

// Background carousel images
const HERO_SLIDES = [
  '/images/home/hero-bg.png',
  '/images/home/hero-bg-2.jpg',
  '/images/home/hero-bg-3.jpg',
];

const AUTOPLAY_INTERVAL = 4000; // ms

type DropdownKey = 'listing' | 'lang' | 'location' | 'date' | 'guests';

export default function Hero() {
  const [openDropdown, setOpenDropdown] = useState<DropdownKey | null>(null);

  const [selectedLang, setSelectedLang] = useState(LANGUAGE_OPTIONS[0]);
  const [selectedLocation, setSelectedLocation] = useState(LOCATION_OPTIONS[0]);
  const [selectedDate, setSelectedDate] = useState(DATE_OPTIONS[0]);
  const [selectedGuests, setSelectedGuests] = useState(GUEST_OPTIONS[1]);

  // Carousel state
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target;

      if (target instanceof Element && !target.closest('[data-dropdown]')) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Autoplay carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, AUTOPLAY_INTERVAL);
    return () => clearInterval(timer);
  }, []);

  const toggle = (key: DropdownKey) =>
    setOpenDropdown((prev) => (prev === key ? null : key));

  return (
    <section className='relative w-full min-h-[70vh] md:h-155 overflow-hidden md:rounded-b-2xl'>
      {/* Background image carousel */}
      {HERO_SLIDES.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt='People celebrating at a venue'
          fill
          priority={index === 0}
          className={`object-cover object-center transition-opacity duration-700 ${
            index === activeSlide ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      {/* Mobile navbar */}
      <div className='md:hidden'>
        <MobileNavbar />
      </div>

      {/* Top navbar */}
      <div className='relative z-30 hidden items-center justify-between px-6 pt-6 md:flex md:px-10'>
        <div className='flex items-center gap-2'>
          <Image
            src='/images/home/venuze-logo.png'
            alt='Venuze'
            width={120}
            height={40}
          />
        </div>

        <div className='flex items-center gap-3'>
          {/* Add your listing dropdown */}
          <div data-dropdown className='relative'>
            <button
              onClick={() => toggle('listing')}
              className='flex cursor-pointer items-center gap-1 rounded-[10px] bg-white px-4 py-2 text-sm font-medium text-[#FF5037] transition-colors hover:bg-white/90'
            >
              Add your listing
              <ChevronDown
                className={`h-4 w-4 text-[#6B7280] transition-transform ${
                  openDropdown === 'listing' ? 'rotate-180' : ''
                }`}
              />
            </button>

            {openDropdown === 'listing' && (
              <div className='absolute right-0 mt-2 w-52 overflow-hidden rounded-[10px] bg-white py-1 shadow-lg'>
                {LISTING_OPTIONS.map((option) => (
                  <Link
                    key={option.href}
                    href={option.href}
                    onClick={() => setOpenDropdown(null)}
                    className='block px-4 py-3 text-sm text-gray-700 transition-colors hover:bg-gray-100'
                  >
                    {option.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Language dropdown */}
          <div data-dropdown className='relative'>
            <button
              onClick={() => toggle('lang')}
              className='flex cursor-pointer items-center gap-1 rounded-[10px] bg-white px-3 py-2 text-sm font-medium text-[#FF5037] transition-colors hover:bg-white/90'
            >
              {selectedLang.code}
              <ChevronDown
                className={`h-4 w-4 text-[#6B7280] transition-transform ${
                  openDropdown === 'lang' ? 'rotate-180' : ''
                }`}
              />
            </button>

            {openDropdown === 'lang' && (
              <div className='absolute right-0 mt-2 w-36 overflow-hidden rounded-[10px] bg-white py-1 shadow-lg'>
                {LANGUAGE_OPTIONS.map((language) => (
                  <button
                    key={language.code}
                    onClick={() => {
                      setSelectedLang(language);
                      setOpenDropdown(null);
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

          <button className='flex h-9 w-9 cursor-pointer items-center justify-center rounded-[10px] bg-white text-[#FF5037] transition-colors hover:bg-white/90'>
            <User className='h-4 w-4' />
          </button>
        </div>
      </div>

      {/* Hero content */}
      <div className='absolute mt-9 md:mt-0 inset-0 z-10 flex flex-col items-center justify-center'>
        <div className='relative z-10 mb-5 md:mb-9 flex flex-col items-center text-center'>
          <h1 className='max-w-2xl text-3xl font-semibold leading-none tracking-[-0.03em] text-white sm:text-4xl md:text-[3.15rem]'>
            Celebrate in venues
            <br />
            big and small
          </h1>
        </div>

        <div className='z-10 w-[92%] max-w-3xl'>
          <div className='flex justify-center'>
            <div className='relative hidden md:flex z-20 -mb-3 rounded-[10px] bg-white px-2 py-[.44rem] shadow-md'>
              <button className='flex items-center gap-1.5 rounded-[10px] bg-[#FF5037] px-4 py-2 text-sm font-medium text-white'>
                <Image
                  src='/svgs/venue.svg'
                  alt='Venue'
                  width={20}
                  height={20}
                />
                Venue
              </button>
              <button className='flex items-center gap-1.5 rounded-[10px] px-4 py-2 text-sm font-medium text-black'>
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

          <div className='flex flex-col items-stretch gap-3 rounded-2xl bg-white p-3 shadow-xl md:flex-row md:items-center md:gap-0 md:rounded-[10px]'>
            <div className='md:hidden flex gap-2'>
              <button className='flex flex-1 items-center justify-center gap-1.5 rounded-[10px] bg-[#FF5037] px-4 py-2 text-sm font-medium text-white'>
                <Image
                  src='/svgs/venue.svg'
                  alt='Venue'
                  width={18}
                  height={18}
                />
                Venue
              </button>

              <button className='flex flex-1 items-center justify-center gap-1.5 rounded-[10px] bg-[#EEEEF0] px-4 py-2 text-sm font-medium text-[#666]'>
                <Image
                  src='/svgs/vendors.svg'
                  alt='Vendors'
                  width={18}
                  height={18}
                />
                Vendors
              </button>
            </div>

            {/* Where */}
            <div
              data-dropdown
              className='relative flex-1 border-b border-gray-200 px-4 py-2 text-left md:border-b-0 md:border-r'
            >
              <p className='text-xs text-[#808080]'>Where</p>
              <button
                onClick={() => toggle('location')}
                className='mt-0.5 flex w-full items-center justify-between text-sm font-medium text-black'
              >
                {selectedLocation}
                <ChevronDown className='h-4 w-4 text-[#6B7280]' />
              </button>

              {openDropdown === 'location' && (
                <div className='absolute left-0 right-0 top-full z-20 mt-2 overflow-hidden rounded-[10px] bg-white py-1 shadow-lg'>
                  {LOCATION_OPTIONS.map((location) => (
                    <button
                      key={location}
                      onClick={() => {
                        setSelectedLocation(location);
                        setOpenDropdown(null);
                      }}
                      className='flex w-full px-4 py-3 text-left text-sm text-gray-700 transition-colors hover:bg-gray-100'
                    >
                      {location}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* When */}
            <div
              data-dropdown
              className='relative flex-1 border-b border-gray-200 px-4 py-2 text-left md:border-b-0 md:border-r'
            >
              <p className='text-xs text-[#808080]'>When</p>
              <button
                onClick={() => toggle('date')}
                className='mt-0.5 flex w-full items-center justify-between text-sm font-medium text-black'
              >
                {selectedDate}
                <ChevronDown className='h-4 w-4 text-[#6B7280]' />
              </button>

              {openDropdown === 'date' && (
                <div className='absolute left-0 right-0 top-full z-20 mt-2 overflow-hidden rounded-[10px] bg-white py-1 shadow-lg'>
                  {DATE_OPTIONS.map((date) => (
                    <button
                      key={date}
                      onClick={() => {
                        setSelectedDate(date);
                        setOpenDropdown(null);
                      }}
                      className='flex w-full px-4 py-3 text-left text-sm text-gray-700 transition-colors hover:bg-gray-100'
                    >
                      {date}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Guests */}
            <div data-dropdown className='relative flex-1 px-4 py-2 text-left'>
              <p className='text-xs text-[#808080]'>Guests</p>
              <button
                onClick={() => toggle('guests')}
                className='mt-0.5 flex w-full items-center justify-between text-sm font-medium text-black'
              >
                {selectedGuests}
                <ChevronDown className='h-4 w-4 text-[#6B7280]' />
              </button>

              {openDropdown === 'guests' && (
                <div className='absolute left-0 right-0 top-full z-20 mt-2 overflow-hidden rounded-[10px] bg-white py-1 shadow-lg'>
                  {GUEST_OPTIONS.map((guests) => (
                    <button
                      key={guests}
                      onClick={() => {
                        setSelectedGuests(guests);
                        setOpenDropdown(null);
                      }}
                      className='flex w-full px-4 py-3 text-left text-sm text-gray-700 transition-colors hover:bg-gray-100'
                    >
                      {guests}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button className='flex lg:transform translate-y-1 cursor-pointer items-center justify-center gap-2 md:self-end rounded-[10px] bg-[#FF5037] px-6 py-2 text-[1.5rem] font-semibold tracking-[-0.02em] text-white transition-colors hover:bg-[#e8452f]'>
              <Image
                src='/svgs/search.svg'
                alt='Search'
                width={22}
                height={22}
              />
              Search
            </button>
          </div>

          {/* Carousel dots */}
          <div className='mt-4 absolute left-0 right-0 bottom-5 md:static flex items-center justify-center gap-1.5'>
            {HERO_SLIDES.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  index === activeSlide
                    ? 'w-6 bg-[#FF5037]'
                    : 'w-1.5 bg-white/60 hover:bg-white/80'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
