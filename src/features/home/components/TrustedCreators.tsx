'use client';

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import Link from 'next/link';

// Swap `image` with your real image paths/URLs whenever they're ready.
const vendors = [
  {
    id: 'caterers',
    title: 'Caterers',
    image: '/images/home/trusted-vendors/card-1.png',
  },
  {
    id: 'decorators',
    title: 'Decorators',
    image: '/images/home/trusted-vendors/card-2.png',
  },
  {
    id: 'photographers',
    title: 'Photographers',
    image: '/images/home/trusted-vendors/card-3.png',
  },
  {
    id: 'entertainment',
    title: 'Entertainment',
    image: '/images/home/trusted-vendors/card-4.png',
  },
  {
    id: 'florists',
    title: 'Florists',
    image: '/images/home/trusted-vendors/card-5.png',
  },
  {
    id: 'djs',
    title: 'DJs & Music',
    image: '/images/home/trusted-vendors/card-6.png',
  },
];

function Chevron({ dir = 'left', ...props }) {
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

export default function TrustedCreators() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className='mb-20'>
      <div className='bg-[#FDF1D2] px-6 py-16 sm:pt-12 sm:pb-26'>
        {/* Heading */}
        <div className='mx-auto text-center'>
          <h2 className='text-3xl font-bold text-[#111111] tracking-normal sm:text-[2.1rem]'>
            Complete Your Event with our Trusted Vendors
          </h2>
          <p className='mx-auto mt-3 max-w-[49rem] text-[15px] leading-relaxed text-[#000000]'>
            Venues are just the beginning. Discover caterers, decorators,
            photographers, entertainment, and more all in one place, ready to
            bring your event project to life.
          </p>
        </div>

        {/* Carousel */}
        <div className='mt-10 max-w-6xl mx-auto'>
          <Swiper
            modules={[Navigation, Autoplay]}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            spaceBetween={24}
            slidesPerView={1.15}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 4, spaceBetween: 24 },
            }}
          >
            {vendors.map((vendor) => (
              <SwiperSlide key={vendor.id}>
                <a
                  href={`/vendors/${vendor.id}`}
                  className='group relative block aspect-[4/5] w-full overflow-hidden rounded-xl'
                >
                  <img
                    src={vendor.image}
                    alt={vendor.title}
                    className='h-full w-full object-cover transition-transform duration-300 group-hover:scale-105'
                  />

                  {/* Gradient overlay for text legibility */}
                  <div className='absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent' />

                  <h3 className='absolute bottom-4 left-4 right-4 text-lg font-bold text-white'>
                    {vendor.title}
                  </h3>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Nav arrows */}
          <div className='mt-5 flex justify-end gap-3'>
            <button
              ref={prevRef}
              aria-label='Previous'
              className='flex h-9 w-9 items-center justify-center rounded-full bg-white text-neutral-700 shadow-sm transition hover:bg-neutral-100 disabled:opacity-40'
            >
              <Chevron dir='left' className='h-4 w-4' />
            </button>
            <button
              ref={nextRef}
              aria-label='Next'
              className='flex h-9 w-9 items-center justify-center rounded-full bg-white text-neutral-700 shadow-sm transition hover:bg-neutral-100 disabled:opacity-40'
            >
              <Chevron dir='right' className='h-4 w-4' />
            </button>
          </div>
        </div>
      </div>
      {/* Vendor CTA banner */}
      <div className='-mt-16 max-w-6xl mx-auto overflow-hidden rounded-2xl bg-gradient-to-r from-[#F4655A] via-[#F58236] to-[#F9C531]'>
        <div className='flex flex-col items-center gap-6 px-8 py-8 sm:px-10 md:flex-row md:justify-between'>
          {/* Copy */}
          <div className='max-w-lg text-center md:text-left'>
            <h3 className='text-2xl font-semibold leading-[30px] tracking-normal text-white sm:text-[1.75rem]'>
              Grow Your Business with <br /> Venuze
            </h3>
            <p className='mt-3 text-[14px] font-medium leading-relaxed text-white/95'>
              Showcase your services to thousands of event organizers and
              creators <br /> searching for talent like yours.
            </p>
            <Link
              href='/vendors/join'
              className='mt-5 inline-block rounded-[10px] bg-[#111111] px-9.25 py-3 text-[13px] font-medium text-white transition hover:bg-black'
            >
              Join as a Vendor
            </Link>
          </div>

          {/* Illustration */}
          <img
            src='/images/home/vendors/cta-illustration.png'
            alt=''
            aria-hidden='true'
            className='w-full max-w-[320px] md:max-w-[360px]'
          />
        </div>
      </div>
    </section>
  );
}
