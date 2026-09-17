import Link from 'next/link';

function ArrowDoodle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox='0 0 120 60' fill='none' {...props}>
      <path
        d='M4 40C30 8 70 4 108 22'
        stroke='currentColor'
        strokeWidth='2'
        strokeDasharray='5 5'
        strokeLinecap='round'
      />
      <path
        d='M96 14l14 8-4 15'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        fill='none'
      />
    </svg>
  );
}

export default function VendorCTA() {
  return (
    <div className='-mt-16 mx-auto max-w-6xl overflow-hidden rounded-2xl bg-[linear-gradient(90deg,#FF786A_0%,#FF4F37_50%,#FFC331_100%)]'>
      <div className='flex flex-col md:flex-row md:items-stretch md:justify-between'>
        {/* Copy */}
        <div className='relative flex flex-col justify-center px-8 py-8 text-center sm:px-10 md:py-10 md:text-left'>
          <h3 className='text-2xl font-semibold leading-[30px] tracking-normal text-white sm:text-[1.75rem]'>
            Grow Your Business with <br /> Venuze
          </h3>

          <p className='mt-3 text-[14px] font-medium leading-relaxed text-white/95'>
            Showcase your services to thousands of event organizers and creators
            <br /> searching for talent like yours.
          </p>

          <Link
            href='/vendors/join'
            className='mt-5 inline-block w-fit self-center rounded-[10px] bg-[#111111] px-6.5 py-2 text-[13px] font-medium text-white transition hover:bg-black md:self-start'
          >
            Join as a Vendor
          </Link>

          {/* Arrow — sits between the copy and the illustration */}
          <ArrowDoodle className='pointer-events-none absolute right-[-56px] top-[62%] hidden h-10 w-28 text-white/90 sm:block' />
        </div>

        <div className='relative flex shrink-0 items-end justify-center px-6 pt-4 md:w-[360px] md:px-4 md:pt-0'>
          <img
            src='/images/home/cta-illustration.png'
            alt=''
            aria-hidden='true'
            className='h-full max-h-[260px] w-auto object-contain object-bottom'
          />
        </div>
      </div>
    </div>
  );
}
