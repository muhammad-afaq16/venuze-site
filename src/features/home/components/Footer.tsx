'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const footerColumns = [
  {
    title: 'Venuze',
    links: ['About', 'News', 'Careers', 'Investors'],
  },
  {
    title: 'Support',
    links: ['Listing your venue', 'Listing your service', 'Help center', 'FAQ'],
  },
  {
    title: 'Explore',
    links: ['Venue types', 'Venue features', 'Service options', 'Locations'],
  },
  {
    title: 'Legal & Privacy',
    links: [
      'Terms of service',
      'Payment & refund policy',
      'Host agreement',
      'Vendor agreement',
    ],
  },
];

function IconX(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox='0 0 24 24' fill='currentColor' {...props}>
      <path d='M18.9 2H22l-7.6 8.7L23.3 22h-7l-5.5-7.2L4.5 22H1.4l8.1-9.3L1 2h7.2l5 6.6L18.9 2zm-1.2 18h1.7L7.4 3.9H5.6L17.7 20z' />
    </svg>
  );
}

function IconFacebook(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox='0 0 24 24' fill='currentColor' {...props}>
      <path d='M13.5 21v-8.1h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5H16.7V3.5C16.4 3.46 15.4 3.4 14.3 3.4c-2.3 0-3.9 1.4-3.9 4v2.4H7.7v3.1h2.7V21h3.1z' />
    </svg>
  );
}

function IconInstagram(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='1.8'
      {...props}
    >
      <rect x='3' y='3' width='18' height='18' rx='5' />
      <circle cx='12' cy='12' r='4' />
      <circle cx='17.2' cy='6.8' r='0.9' fill='currentColor' stroke='none' />
    </svg>
  );
}

export default function Footer() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);

  const handleSend = async () => {
    if (!email || !message) return;
    setSending(true);
    try {
      // Wire this up to your API route / email service.
      // await fetch("/api/contact", { method: "POST", body: JSON.stringify({ email, message }) });
      setEmail('');
      setMessage('');
    } finally {
      setSending(false);
    }
  };

  return (
    <section className='relative'>
      {/* Vendor CTA banner — same container + padding as the footer so edges line up */}
      <div className='relative z-20 mx-auto w-full max-w-6xl px-4 sm:px-6'>
        <div className='relative overflow-hidden rounded-[14px] bg-[linear-gradient(105deg,#FF786A_0%,#FF4F37_48%,#FFC331_100%)]'>
          <div className='grid grid-cols-1 items-end gap-2 md:grid-cols-[minmax(0,1fr)_auto] md:gap-6'>
            {/* Copy */}
            <div className='px-4 pb-4 pt-7 text-center sm:px-10 sm:pb-8 sm:pt-8 sm:text-left md:pb-10'>
              <h3 className='text-[20px] font-semibold leading-[24px] tracking-[-0.3px] text-white sm:text-[28px] sm:leading-[33px]'>
                Turn Your Venue into a
                <br />
                Destination
              </h3>

              <p className='mx-auto mt-2.5 max-w-[280px] text-[12px] font-medium leading-[17px] text-white/95 sm:mx-0 sm:max-w-[440px] sm:text-[14px] sm:leading-[20px]'>
                List your space on Venuze and unlock new revenue opportunities.
                Reach clients looking for venues just like yours.
              </p>

              <Link
                href='/vendors/join'
                className='mt-4 inline-flex h-[32px] items-center rounded-[7px] bg-black px-5 text-[12px] font-medium text-white transition hover:bg-neutral-800 sm:mt-5 sm:h-[38px] sm:rounded-[8px] sm:px-6 sm:text-[13px]'
              >
                List Your Venue
              </Link>
            </div>

            {/* Illustration */}
            <div className='relative flex justify-center self-end md:justify-end'>
              <img
                src='/images/home/cta-illustration.png'
                alt=''
                aria-hidden='true'
                className='block h-auto w-[190px] object-contain object-bottom sm:w-[300px] lg:w-[340px]'
              />
            </div>
          </div>

          {/* Arrow */}
          <Image
            src='/svgs/arrow.png'
            alt=''
            aria-hidden='true'
            width={140}
            height={70}
            className='pointer-events-none absolute bottom-[26px] right-[330px] hidden w-[120px] lg:right-[360px] lg:block'
          />
        </div>
      </div>

      {/* Footer — pulled up so the banner overlaps the rounded top edge */}
      <footer className='-mt-[70px] rounded-t-[50px] bg-black px-6 pb-12 pt-[110px]'>
        <div className='mx-auto w-full max-w-6xl'>
          <div className='grid grid-cols-1 gap-12 lg:grid-cols-[1.35fr_1fr] lg:gap-16'>
            {/* Left column */}
            <div>
              <div className='flex items-center gap-5'>
                <Image
                  src='/images/home/logo.png'
                  alt='Venuze'
                  width={67}
                  height={45}
                  className='h-[45px] w-auto shrink-0'
                />
                <p className='max-w-[420px] text-lg font-bold leading-snug text-white sm:text-xl'>
                  Make it memorable—book the perfect venue and the pros who make
                  it shine.
                </p>
              </div>

              <div className='mt-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4'>
                {footerColumns.map((column) => (
                  <div key={column.title}>
                    <h4 className='text-sm font-semibold text-[#A6A6A6]'>
                      {column.title}
                    </h4>
                    <ul className='mt-4 space-y-3'>
                      {column.links.map((link) => (
                        <li key={link}>
                          <Link
                            href='#'
                            className='text-sm text-[#FFFFFF] transition hover:text-neutral-300'
                          >
                            {link}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Right column — Get in touch */}
            <div className='lg:pt-1'>
              <h3 className='text-lg font-bold text-white'>Get in Touch</h3>

              <div className='mt-5 space-y-4'>
                <input
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='Email Address'
                  className='w-full rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-3 text-sm text-white placeholder-neutral-500 outline-none transition focus:border-neutral-500'
                />
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder='Message'
                  rows={4}
                  className='w-full resize-none rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-3 text-sm text-white placeholder-neutral-500 outline-none transition focus:border-neutral-500'
                />
                <div className='flex justify-end'>
                  <button
                    type='button'
                    onClick={handleSend}
                    disabled={sending}
                    className='cursor-pointer rounded-[10px] bg-[#FF5037] px-12 py-2 md:px-6 md:py-2.5 text-sm font-semibold text-white transition hover:bg-orange-600 disabled:opacity-60'
                  >
                    {sending ? 'Sending…' : 'Send'}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className='mt-14 border-t border-neutral-800 pt-6'>
            <div className='flex flex-col items-center justify-between gap-4 sm:flex-row'>
              <div className='flex items-center gap-3'>
                <a
                  href='#'
                  aria-label='X'
                  className='flex h-9 w-9 items-center justify-center rounded-full bg-neutral-800 text-white transition hover:bg-neutral-700'
                >
                  <IconX className='h-4 w-4' />
                </a>
                <a
                  href='#'
                  aria-label='Facebook'
                  className='flex h-9 w-9 items-center justify-center rounded-full bg-neutral-800 text-white transition hover:bg-neutral-700'
                >
                  <IconFacebook className='h-4 w-4' />
                </a>
                <a
                  href='#'
                  aria-label='Instagram'
                  className='flex h-9 w-9 items-center justify-center rounded-full bg-neutral-800 text-white transition hover:bg-neutral-700'
                >
                  <IconInstagram className='h-4 w-4' />
                </a>
              </div>

              <p className='text-sm text-neutral-500'>
                © {new Date().getFullYear()} Venuze. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
