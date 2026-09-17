'use client';

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import Link from 'next/link';
import Image from 'next/image';

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
          <div className='mt-5 hidden justify-end gap-3 lg:flex'>
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
      <div className='-mt-10 sm:-mt-16 mx-auto max-w-6xl px-4'>
        <div className='relative h-[280px] sm:h-[230px] md:h-[198px] overflow-hidden rounded-[13px] bg-[linear-gradient(105deg,#FF786A_0%,#FF4F37_48%,#FFC331_100%)]'>
          {/* Content */}
          {/* Content */}
          <div className='absolute left-1/2 top-[16px] z-20 w-full -translate-x-1/2 px-4 text-center sm:left-[7%] sm:top-[20px] sm:w-auto sm:translate-x-0 sm:px-0 sm:text-left'>
            <h3 className='text-[20px] font-semibold leading-[24px] tracking-[-0.3px] text-white sm:text-[24px] sm:leading-[28px] md:text-[28px] md:leading-[33px]'>
              Grow Your Business with
              <br />
              Venuze
            </h3>

            <p className='mx-auto mt-[9px] max-w-[260px] text-[12px] font-medium leading-[17px] text-white sm:mx-0 sm:max-w-[400px] sm:text-[13px] sm:leading-[19px] md:max-w-[500px] md:text-[14px] md:leading-[20px]'>
              Showcase your services to thousands of event organizers and
              creators
              <br className='hidden md:block' /> searching for talent like
              yours.
            </p>

            <Link
              href='/vendors/join'
              className='mt-[12px] inline-flex h-[30px] items-center rounded-[6px] bg-black px-[18px] text-[12px] font-medium text-white sm:mt-[14px] sm:h-[34px] sm:px-[25px] sm:text-[13px]'
            >
              Join as a Vendor
            </Link>
          </div>

          {/* Arrow */}
          <Image
            src='/svgs/arrow.png'
            alt=''
            aria-hidden='true'
            width={140}
            height={70}
            className='absolute left-[34%] hidden lg:block top-[165px] sm:top-[140px] md:top-[120px] z-10 w-[90px] sm:w-[110px] md:w-[135px]'
          />

          {/* Illustration */}
          <img
            src='/images/home/cta-illustration.png'
            alt=''
            aria-hidden='true'
            className='absolute bottom-0 left-1/2 z-10 w-[190px] -translate-x-1/2 sm:left-auto sm:right-[3%] sm:translate-x-0 sm:w-[260px] md:w-[320px] lg:w-[350px]'
          />
        </div>
      </div>
    </section>
  );
}
