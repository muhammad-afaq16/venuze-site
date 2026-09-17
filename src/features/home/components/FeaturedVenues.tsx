'use client';

import { useRef, useState } from 'react';
import type { MouseEvent } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Autoplay, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import {
  Heart,
  MapPin,
  UsersRound,
  Maximize2,
  CarFront,
  Share2,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

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
      <div className='relative aspect-[4/3] overflow-hidden'>
        <img
          src={venue.images[index]}
          alt={venue.title}
          className='w-full object-cover'
        />

        {/* Verified */}
        {venue.verified && (
          <span className='absolute left-2.5 top-2.5 rounded-full bg-black/60 px-3 py-1 text-[11px] font-medium text-white backdrop-blur-sm'>
            Verified
          </span>
        )}

        {/* Share + Heart */}
        <div className='absolute right-2.5 top-2.5 flex gap-2'>
          <button
            type='button'
            aria-label='Share venue'
            className='flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition hover:bg-black/70'
          >
            <Share2 className='h-4 w-4' />
          </button>

          <button
            type='button'
            aria-label={saved ? 'Remove from saved' : 'Save venue'}
            onClick={() => setSaved((s) => !s)}
            className='flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition hover:bg-black/70'
          >
            <Heart className='h-4 w-4' fill={saved ? 'currentColor' : 'none'} />
          </button>
        </div>

        {/* Image arrows */}
        {total > 1 && (
          <>
            <button
              type='button'
              aria-label='Previous image'
              onClick={(e) => go(e, -1)}
              className='absolute left-2 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white opacity-0 transition group-hover:opacity-100 focus-visible:opacity-100'
            >
              <ChevronLeft className='h-4 w-4 text-white' />
            </button>

            <button
              type='button'
              aria-label='Next image'
              onClick={(e) => go(e, 1)}
              className='absolute right-2 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white opacity-0 transition group-hover:opacity-100 focus-visible:opacity-100'
            >
              <ChevronRight className='h-4 w-4 text-white' />
            </button>

            {/* Dots */}
            <div className='absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5'>
              {venue.images.map((img, i) => (
                <span
                  key={img}
                  className={`h-1.5 rounded-full transition-all ${
                    i === index ? 'w-1.5 bg-white' : 'w-1.5 bg-white/60'
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
        <p className='mt-1.5 flex items-center font-medium gap-1 text-[13px] text-[#E63946]'>
          <MapPin className='h-3.5 w-3.5' />
          {venue.location}
        </p>

        {/* Details */}
        <ul className='mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] text-[#364153]'>
          <li className='flex bg-[#F9FAFB] py-[0.32rem] rounded-full px-2 items-center gap-1'>
            <UsersRound className='h-3.5 w-3.5' />
            {venue.capacity}
          </li>

          <li className='flex bg-[#F9FAFB] py-[0.32rem] rounded-full px-2 items-center gap-1'>
            <Maximize2 className='h-3.5 w-3.5' />
            {venue.area}
          </li>

          <li className='flex bg-[#F9FAFB] py-[0.32rem] rounded-full px-2 items-center gap-1'>
            <CarFront className='h-3.5 w-3.5' />
            {venue.parking}
          </li>
        </ul>

        {/* Extra count */}
        <p className='mt-2 text-[11px] bg-[#F9FAFB] py-[0.32rem] rounded-full px-2 text-[#364153]'>
          +{venue.extraCount} more
        </p>

        {/* Price */}
        <div className='mt-3 flex items-center justify-between border-t border-[#C5C5C5] pt-3'>
          <p className='text-[13px] text-neutral-700'>
            From{' '}
            <span className='font-semibold text-[#111111]'>
              {venue.price}/{venue.unit}
            </span>
          </p>

          <a
            href={`/venues/${venue.id}`}
            className='rounded-[10px] border border-[#E63946] px-3 py-1.5 text-[12px] font-medium text-[#E63946] transition hover:bg-[#E63946] hover:text-white'
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

  const [activeFilter, setActiveFilter] = useState('Outdoor');

  const visibleVenues = venues.filter(
    (venue) => venue.category === activeFilter,
  );

  const slides = visibleVenues.length ? visibleVenues : venues;

  return (
    <section className='relative overflow-hidden bg-[#1b1512] px-6 py-16 sm:py-20'>
      {/* Background */}
      <img
        src='/images/home/featured-venues/bg.png'
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
                className={`rounded-md cursor-pointer px-5 py-2 text-[13px] font-medium uppercase tracking-wide transition ${
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
              <ChevronLeft className='h-5 w-5' />
            </button>

            <button
              ref={nextRef}
              type='button'
              aria-label='Next'
              className='flex h-10 w-10 items-center justify-center rounded-full border border-white/60 text-white transition hover:bg-white hover:text-neutral-900 disabled:opacity-40'
            >
              <ChevronRight className='h-5 w-5' />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
