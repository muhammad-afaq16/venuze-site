'use client';

import { useRef } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';

/* ---------------- Types ---------------- */

type Stat = {
  value: string;
  label: string;
  from: string;
  to: string;
};

type Testimonial = {
  id: string;
  image: string;
  quote: string;
  name: string;
  rating: number;
};

/* ---------------- Stats ---------------- */

const stats: Stat[] = [
  {
    value: '1,500+',
    label: 'Venues Vetted & Approved',
    from: 'from-red-300',
    to: 'to-red-400',
  },
  {
    value: '7,500+',
    label: 'Events Successfully Hosted',
    from: 'from-red-500',
    to: 'to-red-600',
  },
  {
    value: '35+',
    label: 'Cities Across the Region',
    from: 'from-orange-400',
    to: 'to-orange-500',
  },
  {
    value: '4.9★',
    label: 'Average Host Rating',
    from: 'from-amber-400',
    to: 'to-amber-500',
  },
];

/* ---------------- Testimonials ---------------- */

const testimonials: Testimonial[] = [
  {
    id: '1',
    image: '/images/home/testimonials/client-1.png',
    quote:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    name: 'Michael Carter',
    rating: 5,
  },
  {
    id: '2',
    image: '/images/home/testimonials/client-2.png',
    quote:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    name: 'by Ayesha M.',
    rating: 5,
  },
  {
    id: '3',
    image: '/images/home/testimonials/client-3.png',
    quote:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    name: 'John Reed',
    rating: 5,
  },
  {
    id: '4',
    image: '/images/home/testimonials/client-4.png',
    quote:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    name: 'by Hannah L.',
    rating: 5,
  },
];

/* ---------------- Component ---------------- */

export default function Testimonials() {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  return (
    <section className='bg-gradient-to-br from-amber-100 via-orange-100 to-pink-200 px-6 py-16 sm:py-20'>
      <div className='mx-auto max-w-6xl'>
        {/* Heading */}
        <div className='max-w-4xl mx-auto text-center'>
          <h2 className='text-3xl font-bold text-neutral-900 sm:text-4xl'>
            Trusted by Event Creators Who Demand Excellence
          </h2>

          <p className='mt-3 text-neutral-600'>
            Join thousands of planners and hosts who love our seamless discovery
            and booking experience.
          </p>
        </div>

        {/* Stats */}
        <div className='mt-8 grid grid-cols-2 gap-4 xl:grid-cols-4'>
          {stats.map((stat) => (
            <div
              key={stat.label}
              className={`rounded-2xl bg-gradient-to-br ${stat.from} ${stat.to} p-5 text-center text-white shadow-md`}
            >
              <p className='text-2xl font-extrabold sm:text-3xl'>
                {stat.value}
              </p>

              <p className='mt-1 text-xs font-medium sm:text-sm'>
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className='mt-10'>
          <Swiper
            modules={[Navigation]}
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
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
            }}
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id} className='h-auto'>
                <div className='flex h-full overflow-hidden rounded-2xl bg-white shadow-md'>
                  {/* Testimonial Image */}
                  <div className='w-2/5 shrink-0'>
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className='h-full w-full object-cover'
                    />
                  </div>

                  {/* Testimonial Content */}
                  <div className='flex flex-1 flex-col justify-center gap-3 p-6'>
                    <p className='text-neutral-700'>{testimonial.quote}</p>

                    <p className='font-bold text-neutral-900'>
                      {testimonial.name}
                    </p>

                    {/* Stars */}
                    <div
                      className='flex gap-0.5 text-amber-400'
                      aria-label={`${testimonial.rating} out of 5 stars`}
                    >
                      {Array.from({
                        length: testimonial.rating,
                      }).map((_, index) => (
                        <Star
                          key={index}
                          className='h-4 w-4'
                          fill='currentColor'
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows */}
          <div className='mt-6 hidden justify-end gap-3 lg:flex'>
            <button
              ref={prevRef}
              type='button'
              aria-label='Previous testimonial'
              className='flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white text-neutral-700 shadow transition hover:bg-neutral-100 disabled:opacity-40'
            >
              <ChevronLeft className='h-5 w-5' />
            </button>

            <button
              ref={nextRef}
              type='button'
              aria-label='Next testimonial'
              className='flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white text-neutral-700 shadow transition hover:bg-neutral-100 disabled:opacity-40'
            >
              <ChevronRight className='h-5 w-5' />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
