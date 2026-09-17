'use client';

import { useRef, useState } from 'react';
import type { MouseEvent, SVGProps } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Autoplay, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

/* ---------------- Types ---------------- */

type Venue = {
  id: string;
  title: string;
  location: string;
  category: string;
  capacity: string;
  area: string;
  parking: string;
  extraCount: number;
  price: string;
  unit: string;
  verified: boolean;
  images: string[];
};

type IconProps = SVGProps<SVGSVGElement>;

type HeartIconProps = IconProps & {
  filled: boolean;
};

type ChevronProps = IconProps & {
  dir?: 'left' | 'right';
};

type VenueCardProps = {
  venue: Venue;
};

/* ---------------- Data ---------------- */

const filters = [
  'Rooftop',
  'Gallery',
  'Restaurant',
  'Outdoor',
  'Studio',
  'Terrace',
  'Ballroom',
];

const venues: Venue[] = [
  {
    id: 'clapham-1',
    title: 'High-Spec Room in Trendy Home Clapham/ Stockwell',
    location: 'London, SW1',
    category: 'Gallery',
    capacity: '300+',
    area: '2,000 sq ft',
    parking: 'Free parking',
    extraCount: 25,
    price: '$50',
    unit: 'hour',
    verified: true,
    images: [
      '/images/home/venue-card/card-1.png',
      '/images/home/venue-card/card-2.png',
      '/images/home/venue-card/card-3.png',
    ],
  },
  {
    id: 'clapham-2',
    title: 'High-Spec Room in Trendy Home Clapham/ Stockwell',
    location: 'London, SW1',
    category: 'Gallery',
    capacity: '300+',
    area: '2,000 sq ft',
    parking: 'Free parking',
    extraCount: 25,
    price: '$50',
    unit: 'hour',
    verified: true,
    images: [
      '/images/home/venue-card/card-2.png',
      '/images/home/venue-card/card-3.png',
      '/images/home/venue-card/card-4.png',
    ],
  },
  {
    id: 'clapham-3',
    title: 'High-Spec Room in Trendy Home Clapham/ Stockwell',
    location: 'London, SW1',
    category: 'Studio',
    capacity: '300+',
    area: '2,000 sq ft',
    parking: 'Free parking',
    extraCount: 25,
    price: '$50',
    unit: 'hour',
    verified: true,
    images: [
      '/images/home/venue-card/card-3.png',
      '/images/home/venue-card/card-4.png',
      '/images/home/venue-card/card-5.png',
    ],
  },
  {
    id: 'clapham-4',
    title: 'High-Spec Room in Trendy Home Clapham/ Stockwell',
    location: 'London, SW1',
    category: 'Rooftop',
    capacity: '300+',
    area: '2,000 sq ft',
    parking: 'Free parking',
    extraCount: 25,
    price: '$50',
    unit: 'hour',
    verified: true,
    images: [
      '/images/home/venue-card/card-4.png',
      '/images/home/venue-card/card-5.png',
      '/images/home/venue-card/card-6.png',
    ],
  },
  {
    id: 'clapham-5',
    title: 'High-Spec Room in Trendy Home Clapham/ Stockwell',
    location: 'London, SW1',
    category: 'Terrace',
    capacity: '300+',
    area: '2,000 sq ft',
    parking: 'Free parking',
    extraCount: 25,
    price: '$50',
    unit: 'hour',
    verified: true,
    images: [
      '/images/home/venue-card/card-5.png',
      '/images/home/venue-card/card-6.png',
      '/images/home/venue-card/card-1.png',
    ],
  },
  {
    id: 'clapham-6',
    title: 'High-Spec Room in Trendy Home Clapham/ Stockwell',
    location: 'London, SW1',
    category: 'Ballroom',
    capacity: '300+',
    area: '2,000 sq ft',
    parking: 'Free parking',
    extraCount: 25,
    price: '$50',
    unit: 'hour',
    verified: true,
    images: [
      '/images/home/venue-card/card-6.png',
      '/images/home/venue-card/card-1.png',
      '/images/home/venue-card/card-2.png',
    ],
  },
];

/* ---------------- Icons ---------------- */

function PinIcon(props: IconProps) {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      {...props}
    >
      <path
        d='M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Z'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <circle cx='12' cy='10' r='2.5' />
    </svg>
  );
}

function GuestsIcon(props: IconProps) {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='1.8'
      {...props}
    >
      <circle cx='9' cy='8' r='3.2' />
      <path d='M3.5 19a5.5 5.5 0 0 1 11 0' strokeLinecap='round' />
      <path d='M16 5.5a3.2 3.2 0 0 1 0 5' strokeLinecap='round' />
      <path d='M17.5 14.2A5.5 5.5 0 0 1 20.5 19' strokeLinecap='round' />
    </svg>
  );
}

function AreaIcon(props: IconProps) {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='1.8'
      {...props}
    >
      <path d='M4 9V4h5' strokeLinecap='round' strokeLinejoin='round' />
      <path d='M20 15v5h-5' strokeLinecap='round' strokeLinejoin='round' />
      <path d='M4 4l6 6' strokeLinecap='round' />
      <path d='M20 20l-6-6' strokeLinecap='round' />
    </svg>
  );
}

function ParkingIcon(props: IconProps) {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='1.8'
      {...props}
    >
      <path
        d='M3 16v-3.2l1.8-4A2 2 0 0 1 6.6 7.6h10.8a2 2 0 0 1 1.8 1.2l1.8 4V16'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path d='M3 16h18' strokeLinecap='round' />
      <circle cx='7' cy='16.5' r='1.5' />
      <circle cx='17' cy='16.5' r='1.5' />
    </svg>
  );
}

function ShareIcon(props: IconProps) {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='1.8'
      {...props}
    >
      <path d='M12 15V4' strokeLinecap='round' />

      <path
        d='M8.5 7.5L12 4l3.5 3.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />

      <path
        d='M5 13v5.5A1.5 1.5 0 0 0 6.5 20h11a1.5 1.5 0 0 0 1.5-1.5V13'
        strokeLinecap='round'
      />
    </svg>
  );
}

function HeartIcon({ filled, ...props }: HeartIconProps) {
  return (
    <svg
      viewBox='0 0 24 24'
      fill={filled ? 'currentColor' : 'none'}
      stroke='currentColor'
      strokeWidth='1.8'
      {...props}
    >
      <path
        d='M12 20s-7-4.4-7-9.2A4 4 0 0 1 12 8a4 4 0 0 1 7-1.2c0 4.8-7 9.2-7 9.2Z'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

function Chevron({ dir = 'left', ...props }: ChevronProps) {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      {...props}
    >
      <path
        d={dir === 'left' ? 'M15 18l-6-6 6-6' : 'M9 18l6-6-6-6'}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

/* ---------------- Venue Card ---------------- */

function VenueListingCard({ venue }: VenueCardProps) {
  const [index, setIndex] = useState(0);
  const [saved, setSaved] = useState(false);

  const total = venue.images.length;

  const go = (e: MouseEvent<HTMLButtonElement>, step: number) => {
    e.preventDefault();

    setIndex((i) => (i + step + total) % total);
  };

  return (
    <article className='group overflow-hidden rounded-2xl bg-white shadow-lg'>
      {/* Image */}
      <div className='relative m-2 aspect-[4/3] overflow-hidden rounded-xl'>
        <img
          src={venue.images[index]}
          alt={venue.title}
          className='h-full w-full object-cover'
        />

        {/* Verified */}
        {venue.verified && (
          <span className='absolute left-2.5 top-2.5 rounded-md bg-black/60 px-2 py-1 text-[10px] font-medium text-white backdrop-blur-sm'>
            Verified
          </span>
        )}

        {/* Share + Heart */}
        <div className='absolute right-2.5 top-2.5 flex gap-2'>
          <button
            type='button'
            aria-label='Share venue'
            className='flex h-7 w-7 items-center justify-center rounded-md bg-black/50 text-white backdrop-blur-sm transition hover:bg-black/70'
          >
            <ShareIcon className='h-4 w-4' />
          </button>

          <button
            type='button'
            aria-label={saved ? 'Remove from saved' : 'Save venue'}
            onClick={() => setSaved((s) => !s)}
            className='flex h-7 w-7 items-center justify-center rounded-md bg-black/50 text-white backdrop-blur-sm transition hover:bg-black/70'
          >
            <HeartIcon filled={saved} className='h-4 w-4' />
          </button>
        </div>

        {/* Image arrows */}
        {total > 1 && (
          <>
            <button
              type='button'
              aria-label='Previous image'
              onClick={(e) => go(e, -1)}
              className='absolute left-2 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-neutral-800 opacity-0 transition group-hover:opacity-100 focus-visible:opacity-100'
            >
              <Chevron dir='left' className='h-4 w-4' />
            </button>

            <button
              type='button'
              aria-label='Next image'
              onClick={(e) => go(e, 1)}
              className='absolute right-2 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-neutral-800 opacity-0 transition group-hover:opacity-100 focus-visible:opacity-100'
            >
              <Chevron dir='right' className='h-4 w-4' />
            </button>

            {/* Dots */}
            <div className='absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5'>
              {venue.images.map((img, i) => (
                <span
                  key={img}
                  className={`h-1.5 rounded-full transition-all ${
                    i === index ? 'w-4 bg-white' : 'w-1.5 bg-white/60'
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Body */}
      <div className='px-4 pb-4 pt-1'>
        <h3 className='text-[15px] font-semibold leading-snug text-[#111111]'>
          {venue.title}
        </h3>

        {/* Location */}
        <p className='mt-1.5 flex items-center gap-1 text-[13px] text-[#E63946]'>
          <PinIcon className='h-3.5 w-3.5' />
          {venue.location}
        </p>

        {/* Details */}
        <ul className='mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] text-neutral-600'>
          <li className='flex items-center gap-1'>
            <GuestsIcon className='h-3.5 w-3.5' />
            {venue.capacity}
          </li>

          <li className='flex items-center gap-1'>
            <AreaIcon className='h-3.5 w-3.5' />
            {venue.area}
          </li>

          <li className='flex items-center gap-1'>
            <ParkingIcon className='h-3.5 w-3.5' />
            {venue.parking}
          </li>
        </ul>

        {/* Extra count */}
        <p className='mt-2 text-[11px] text-neutral-400'>
          +{venue.extraCount} more
        </p>

        {/* Price */}
        <div className='mt-3 flex items-center justify-between border-t border-neutral-200 pt-3'>
          <p className='text-[13px] text-neutral-700'>
            From{' '}
            <span className='font-semibold text-[#111111]'>
              {venue.price}/{venue.unit}
            </span>
          </p>

          <a
            href={`/venues/${venue.id}`}
            className='rounded-md border border-[#E63946] px-3 py-1.5 text-[12px] font-medium text-[#E63946] transition hover:bg-[#E63946] hover:text-white'
          >
            View details
          </a>
        </div>
      </div>
    </article>
  );
}

/* ---------------- Featured Venues ---------------- */

export default function FeaturedVenues() {
  const prevRef = useRef<HTMLButtonElement | null>(null);

  const nextRef = useRef<HTMLButtonElement | null>(null);

  const [activeFilter, setActiveFilter] = useState('Gallery');

  const visibleVenues = venues.filter(
    (venue) => venue.category === activeFilter,
  );

  const slides = visibleVenues.length ? visibleVenues : venues;

  return (
    <section className='relative overflow-hidden bg-[#1b1512] px-6 py-16 sm:py-20'>
      {/* Background */}
      <img
        src='/images/home/venue-card/featured-bg.png'
        alt=''
        aria-hidden='true'
        className='absolute inset-0 h-full w-full object-cover'
      />

      {/* Overlay */}
      <div className='absolute inset-0 bg-black/55' />

      <div className='relative mx-auto max-w-6xl'>
        {/* Heading */}
        <h2 className='text-center text-3xl font-semibold text-white sm:text-[2.3rem]'>
          Featured Venues
        </h2>

        {/* Filters */}
        <div className='mt-6 flex flex-wrap justify-center gap-2'>
          {filters.map((filter) => {
            const isActive = filter === activeFilter;

            return (
              <button
                key={filter}
                type='button'
                onClick={() => setActiveFilter(filter)}
                aria-pressed={isActive}
                className={`rounded-md px-5 py-2 text-[13px] font-medium uppercase tracking-wide transition ${
                  isActive
                    ? 'bg-[#E63946] text-white'
                    : 'bg-white/15 text-white/90 backdrop-blur-sm hover:bg-white/25'
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* Carousel */}
        <div className='mt-8'>
          <Swiper
            key={activeFilter}
            modules={[Navigation, Autoplay]}
            loop={slides.length > 4}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            onBeforeInit={(swiper: SwiperType) => {
              if (typeof swiper.params.navigation !== 'boolean') {
                swiper.params.navigation.prevEl = prevRef.current;

                swiper.params.navigation.nextEl = nextRef.current;
              }
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            spaceBetween={20}
            slidesPerView={1.1}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
          >
            {slides.map((venue) => (
              <SwiperSlide key={venue.id} className='h-auto pb-2'>
                <VenueListingCard venue={venue} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation */}
          <div className='mt-6 flex justify-end gap-3'>
            <button
              ref={prevRef}
              type='button'
              aria-label='Previous'
              className='flex h-10 w-10 items-center justify-center rounded-full border border-white/60 text-white transition hover:bg-white hover:text-neutral-900 disabled:opacity-40'
            >
              <Chevron dir='left' className='h-5 w-5' />
            </button>

            <button
              ref={nextRef}
              type='button'
              aria-label='Next'
              className='flex h-10 w-10 items-center justify-center rounded-full border border-white/60 text-white transition hover:bg-white hover:text-neutral-900 disabled:opacity-40'
            >
              <Chevron dir='right' className='h-5 w-5' />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
