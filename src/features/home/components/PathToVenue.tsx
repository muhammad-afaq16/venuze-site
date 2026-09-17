import Image from 'next/image';

const steps = [
  {
    number: '1',
    title: 'Search & filter',
    description:
      'Browse our curated collection of venues and event professionals. Use smart filters, high-quality visuals, and authentic reviews to find options that fit your needs, style, and budget.',
  },
  {
    number: '2',
    title: 'Compare & message',
    description:
      'Communicate directly with venue hosts and service providers. Request tailored quotes, discuss requirements, and design every detail of your event or project with confidence.',
  },
  {
    number: '3',
    title: 'Book & add services',
    description:
      'Secure your choices with ease through our protected booking system. With clear agreements, secure payments, and ongoing support, you can move forward knowing everything is handled.',
  },
];

const collageImages = {
  topLeft: '/images/home/path-to-venue/card-1.png',
  topRight: '/images/home/path-to-venue/card-2.png',
  bottomLeft: '/images/home/path-to-venue/card-3.png',
  bottomRight: '/images/home/path-to-venue/card-4.png',
};

function IconVenue(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='1.6'
      {...props}
    >
      <rect x='3' y='6' width='18' height='12' rx='1.5' />
      <path
        d='M3 10h18M3 14h18M8 6v4M8 14v4M16 6v4M16 14v4'
        strokeLinecap='round'
      />
      <circle cx='12' cy='12' r='1.4' fill='currentColor' stroke='none' />
    </svg>
  );
}

export default function PathToVenue() {
  return (
    <section className='bg-white px-6 py-16 sm:py-20'>
      <div className='mx-auto max-w-6xl'>
        {/* Heading */}
        <div className='mx-auto max-w-3xl text-center'>
          <h2 className='text-3xl font-bold text-neutral-900 sm:text-4xl'>
            Your Path to the Perfect Venue
          </h2>
          <p className='mt-4 text-neutral-600'>
            Planning an event, production, or gathering shouldn&apos;t feel
            complicated. Our streamlined process connects you with the right
            venues and trusted professionals, taking the stress out of logistics
            so you can focus on what matters most&nbsp;&mdash; making it a
            success.
          </p>
        </div>

        {/* Content */}
        <div className='mt-14 grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-0'>
          {/* Image collage */}
          <div className='relative mx-auto w-full max-w-md'>
            <div className='grid grid-cols-2 gap-2'>
              <div className='space-y-2'>
                <img
                  src={collageImages.topLeft}
                  alt=''
                  className='aspect-[4/3] w-full rounded-2xl object-cover shadow-md'
                />
                <img
                  src={collageImages.bottomLeft}
                  alt=''
                  className='aspect-[4/3] w-full rounded-2xl object-cover shadow-md'
                />
              </div>
              <div className='translate-y-8 space-y-2'>
                <img
                  src={collageImages.topRight}
                  alt=''
                  className='aspect-square w-full rounded-2xl object-cover shadow-md'
                />
                <img
                  src={collageImages.bottomRight}
                  alt=''
                  className='aspect-[4/3] w-full rounded-2xl object-cover shadow-md'
                />
              </div>
            </div>

            {/* Center badge */}
            <div className='absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-xl'>
              <Image
                src='/svgs/college.svg'
                alt=''
                width={36}
                height={36}
              />
            </div>
          </div>

          {/* Steps */}
          <div className='relative'>
            <div className='absolute left-5 top-5 bottom-5 border-l-2 border-dashed border-[#A1A1A1]' />
            <div className='space-y-10'>
              {steps.map((step) => (
                <div key={step.number} className='relative flex gap-5'>
                  <div className='z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-orange-600 font-bold text-white shadow-md'>
                    {step.number}
                  </div>
                  <div>
                    <h3 className='text-lg font-bold text-neutral-900'>
                      {step.title}
                    </h3>
                    <p className='mt-1.5 text-sm text-neutral-600'>
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
