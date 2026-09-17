'use client';

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

// Swap `image` with your real image paths/URLs whenever they're ready.
const categories = [
  {
    id: 'celebration',
    title: 'Celebration\nVenues',
    count: 37,
    image: '/images/home/venue-card/card-1.png',
  },
  {
    id: 'private-party',
    title: 'Private Party\nVenues',
    count: 37,
    image: '/images/home/venue-card/card-2.png',
  },
  {
    id: 'corporate',
    title: 'Corporate\nMeetings',
    count: 37,
    image: '/images/home/venue-card/card-3.png',
  },
  {
    id: 'creative-studios',
    title: 'Creative\nStudios',
    count: 15,
    image: '/images/home/venue-card/card-4.png',
  },

  {
    id: 'outdoor',
    title: 'Outdoor\nSpaces',
    count: 20,
    image: '/images/home/venue-card/card-5.png',
  },
  {
    id: 'wedding',
    title: 'Wedding\nVenues',
    count: 4,
    image: '/images/home/venue-card/card-6.png',
  },
];

export default function VenueCard() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className='bg-white px-6 py-16 sm:py-20'>
      <div className='mx-auto max-w-6xl'>
        {/* Heading */}
        <div className='mx-auto text-center'>
          <h2 className='text-3xl font-semibold text-[#000000] sm:text-[2.3rem] tracking-normal'>
            Find The Best Venue For Any Occasion
          </h2>
          <p className='mt-2 max-w-4xl mx-auto text-[#000000]'>
            Explore venues by category, from timeless ballrooms and rooftops
            with a view to modern studios and outdoor gardens, discover spaces
            designed to inspire unforgettable experiences.
          </p>
        </div>

        {/* Carousel */}
        <div className='mt-10'>
          <Swiper
            modules={[Navigation, Autoplay]}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
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
            {categories.map((category) => (
              <SwiperSlide key={category.id}>
                <a
                  href={`/venues/${category.id}`}
                  className='group relative block aspect-[4/5] w-full overflow-hidden rounded-2xl'
                >
                  {/* Image */}
                  <img
                    src={category.image}
                    alt={category.title.replace('\n', ' ')}
                    className='h-full w-full object-cover transition-transform duration-300 group-hover:scale-105'
                  />

                  {/* Gradient overlay for text legibility */}
                  <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent' />

                  {/* Count badge */}
                  <span className='absolute left-4 top-4 rounded-full bg-black/50 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm'>
                    {category.count} Venues
                  </span>

                  {/* Title */}
                  <h3 className='absolute bottom-5 left-4 right-4 whitespace-pre-line text-xl font-bold leading-tight text-white'>
                    {category.title}
                  </h3>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Nav arrows */}
          {/* Nav arrows */}
          <div className='mt-6 hidden justify-end gap-3 lg:flex'>
            <button
              ref={prevRef}
              aria-label='Previous'
              className='flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 text-neutral-700 transition hover:bg-neutral-200 disabled:opacity-40'
            >
              <svg
                viewBox='0 0 24 24'
                fill='none'
                className='h-5 w-5'
                stroke='currentColor'
                strokeWidth='2'
              >
                <path
                  d='M15 18l-6-6 6-6'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </button>

            <button
              ref={nextRef}
              aria-label='Next'
              className='flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 text-neutral-700 transition hover:bg-neutral-200 disabled:opacity-40'
            >
              <svg
                viewBox='0 0 24 24'
                fill='none'
                className='h-5 w-5'
                stroke='currentColor'
                strokeWidth='2'
              >
                <path
                  d='M9 18l6-6-6-6'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
