// Swap `image` with your real image paths/URLs whenever they're ready.
const destinations = [
  {
    id: 'new-york',
    image: '/images/home/destinations/usa.png',
    venueCount: 24,
    city: 'New York, USA',
    tagline: 'Coastal energy, modern Venue',
    popularCategory: 'Rooftop',
    price: '$50 per hour',
  },
  {
    id: 'london',
    image: '/images/home/destinations/uk.png',
    venueCount: 108,
    city: 'London, UK',
    tagline: 'Coastal energy, modern Venue',
    popularCategory: 'Rooftop',
    price: '$25 per hour',
  },
  {
    id: 'dubai',
    image: '/images/home/destinations/uAE.png',
    venueCount: 17,
    city: 'Dubai, UAE',
    tagline: 'Coastal energy, modern Venue',
    popularCategory: 'Rooftop',
    price: '$50 per hour',
  },
];

export default function DiscoverDestinations() {
  return (
    <section className='bg-white px-6 py-16 sm:py-20'>
      <div className='mx-auto max-w-350'>
        {/* Heading */}
        <div className='mx-auto max-w-2xl text-center'>
          <h2 className='text-3xl font-bold text-neutral-900 sm:text-4xl'>
            Discover Exceptional Destinations Across the Region
          </h2>
          <p className='mt-4 text-neutral-500'>
            From cosmopolitan cityscapes to cultural treasures, explore where
            celebrations come alive with local flavor.
          </p>
        </div>

        {/* Cards */}
        <div className='mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {destinations.map((destination) => (
            <a
              key={destination.id}
              href={`/destinations/${destination.id}`}
              className='group relative block aspect-[4/5] w-full overflow-hidden rounded-2xl sm:aspect-[3/4]'
            >
              {/* Image */}
              <img
                src={destination.image}
                alt={destination.city}
                className='h-full w-full object-cover transition-transform duration-300 group-hover:scale-105'
              />

              {/* Gradient overlay for text legibility */}
              <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent' />

              {/* Count badge */}
              <span className='absolute left-4 top-4 rounded-full bg-black/50 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm'>
                {destination.venueCount} Venues
              </span>

              {/* Bottom content */}
              <div className='absolute inset-x-0 bottom-0 p-4'>
                <h3 className='text-xl font-bold text-white'>
                  {destination.city}
                </h3>
                <p className='mt-1 text-sm text-white/80'>
                  {destination.tagline}
                </p>
                <div className='mt-2 flex items-center justify-between text-sm'>
                  <span className='text-white/80'>
                    Popular: {destination.popularCategory}
                  </span>
                  <span className='font-bold text-white'>
                    From {destination.price}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
