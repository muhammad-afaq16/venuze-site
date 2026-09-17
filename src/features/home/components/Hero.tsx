'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronDown, Search, User } from 'lucide-react';

export default function Hero() {
  const [activeTab, setActiveTab] = useState<'venue' | 'vendors'>('venue');

  return (
    <section className='relative w-full h-[560px] md:h-[620px] overflow-hidden rounded-b-2xl'>
      {/* Background image */}
      <Image
        src='/images/home/hero-bg.png'
        alt='People celebrating at a venue'
        fill
        priority
        className='object-cover object-center'
      />

      {/* Top navbar */}
      <div className='relative z-10 flex items-center justify-between px-6 md:px-10 pt-6'>
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
          <button className='flex items-center gap-1 rounded-[10px] bg-white px-4 py-2 text-sm font-medium text-[#FF5037] hover:bg-white/90 transition-colors'>
            Add your listing
            <ChevronDown className='h-4 w-4 text-[#6B7280]' />
          </button>

          <button className='flex items-center gap-1 rounded-[10px] bg-white px-3 py-2 text-sm font-medium text-[#FF5037] hover:bg-white/90 transition-colors'>
            EN
            <ChevronDown className='h-4 w-4 text-[#6B7280]' />
          </button>

          <button className='flex items-center justify-center rounded-[10px] bg-white h-9 w-9 text-[#FF5037] hover:bg-white/90 transition-colors'>
            <User className='h-4 w-4' />
          </button>
        </div>
      </div>

      <div className='h-full flex flex-col items-center justify-center'>
        {/* Hero content */}
        <div className='relative z-10 mb-9 flex flex-col items-center text-center'>
          <h1 className='text-white font-semibold text-3xl sm:text-4xl tracking-[-0.03em] md:text-[3.15rem] leading-tight max-w-2xl'>
            Celebrate in venues
            <br />
            big and small
          </h1>
        </div>

        {/* Search card */}
        <div className='z-10 w-[92%] max-w-3xl'>
          {/* Venue / Vendors toggle */}
          <div className='flex justify-center'>
            <div className='flex rounded-[10px] bg-white py-[.44rem] px-2 shadow-md -mb-3 relative z-20'>
              <button
                onClick={() => setActiveTab('venue')}
                className={`flex items-center cursor-pointer gap-1.5 rounded-[10px] px-4 py-2 text-sm font-medium transition-colors ${
                  activeTab === 'venue'
                    ? 'bg-[#FF5037] text-white'
                    : 'text-black hover:bg-gray-100'
                }`}
              >
                <Image
                  src='/svgs/venue.svg'
                  alt='Venuze'
                  width={20}
                  height={20}
                />{' '}
                Venue
              </button>
              <button
                onClick={() => setActiveTab('vendors')}
                className={`flex items-center cursor-pointer gap-1.5 rounded-[10px] px-4 py-2 text-sm font-medium transition-colors ${
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
                />{' '}
                Vendors
              </button>
            </div>
          </div>

          {/* Search bar */}
          <div className='flex flex-col md:flex-row items-stretch md:items-center gap-3 md:gap-0 rounded-2xl md:rounded-[10px] bg-white p-3 md:p-3 shadow-xl'>
            {/* Where */}
            <div className='flex-1 px-4 py-2 text-left border-b md:border-b-0 md:border-r border-gray-200'>
              <p className='text-xs text-[#808080]'>Where</p>
              <button className='flex items-center justify-between w-full text-sm font-medium text-black mt-0.5'>
                Dubai, UAE
                <ChevronDown className='h-4 w-4 text-[#6B7280]' />
              </button>
            </div>

            {/* When */}
            <div className='flex-1 px-4 py-2 text-left border-b md:border-b-0 md:border-r border-gray-200'>
              <p className='text-xs text-[#808080]'>When</p>
              <button className='flex items-center justify-between w-full text-sm font-medium text-black mt-0.5'>
                Anytime
                <ChevronDown className='h-4 w-4 text-[#6B7280]' />
              </button>
            </div>

            {/* Guests */}
            <div className='flex-1 px-4 py-2 text-left'>
              <p className='text-xs text-[#808080]'>Guests</p>
              <button className='flex items-center justify-between w-full text-sm font-medium text-black mt-0.5'>
                10-20
                <ChevronDown className='h-4 w-4 text-[#6B7280]' />
              </button>
            </div>

            {/* Search button */}
            <button className='flex cursor-pointer self-end items-center tracking-[-0.02em] justify-center gap-2 rounded-[10px] bg-[#FF5037] px-6 py-3 text-[1.5rem] font-semibold text-white hover:bg-[#e8452f] transition-colors'>
              <Image
                src='/svgs/search.svg'
                alt='Search'
                width={22}
                height={22}
              />
              Search
            </button>
          </div>

          {/* Pagination dots */}
          {/* <div className="flex justify-center gap-1.5 mt-4">
          <span className="h-1.5 w-5 rounded-[10px] bg-[#FF5037]" />
          <span className="h-1.5 w-1.5 rounded-[10px] bg-white/60" />
          <span className="h-1.5 w-1.5 rounded-[10px] bg-white/60" />
        </div> */}
        </div>
      </div>
    </section>
  );
}
