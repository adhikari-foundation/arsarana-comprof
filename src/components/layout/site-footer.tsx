import Image from 'next/image';
import { useTheme } from 'next-themes';
import * as React from 'react';

import { Icons } from '../default-icons';
import UnstyledLink from '../links/unstyled-link';
// import { ModeToggle } from '@src/components/mode-toggle';

function DownloadPortfolioSection() {
  return (
    <div className='bg-arsaranaforeground w-full'>
      <div className='mx-auto max-w-2xl py-10 text-white'>
        <div className='text-center'>
          <h3 className='text-arsaranatitleinverse mb-3 text-3xl'>
            {' '}
            Download Our Profile{' '}
          </h3>
          <p className='text-arsaranatitleinverse'>
            {' '}
            See more on our company profile by clicking download button below
          </p>
          <div className='text-arsaranatitleinverse my-10 flex justify-center hover:cursor-pointer'>
            <UnstyledLink
              className='border-arsaranabackground mx-2 flex w-auto items-center rounded-lg border px-4 py-2'
              href='/files/comprof.pdf'
              target='_blank'
            >
              {/* <UnstyledLink
                href='/files/comprof.pdf'
                target='_blank'
                rel='noopener noreferrer'
              > */}
              <Icons.download />
              <div className='ml-3 text-left'>
                <p className='text-lg font-bold'>Download on </p>
                <p className='text-sm font-bold md:text-base'> PDF </p>
              </div>
              {/* </UnstyledLink> */}
            </UnstyledLink>
          </div>
        </div>
      </div>
    </div>
  );
}

function SocmedFooterSection() {
  return (
    <div className='text-arsaranatitle mt-8 flex flex-col gap-4'>
      <div className='flex flex-row items-center gap-6'>
        <Icons.phone className='h-8 w-8' />
        <span> +62 212526316 </span>
      </div>
      <div className='flex flex-row items-center gap-6'>
        <Icons.mail className='h-8 w-8' />
        <span> info@arsarana.com </span>
      </div>
      <div className='flex flex-row items-center gap-6'>
        <Icons.globe className='h-8 w-8' />
        <span> arsarana.com </span>
      </div>
    </div>
  );
}

// eslint-disable-next-line unused-imports/no-unused-vars
export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  const { theme } = useTheme();

  const footercompanyitems = [
    // {
    //   id: 1,
    //   title: 'About',
    //   href: '#',
    // },
    {
      id: 2,
      title: 'Meet the Team',
      href: '/our-team',
    },
    {
      id: 3,
      title: 'Tabloid',
      href: '/tabloid',
    },
    {
      id: 4,
      title: 'Careers',
      href: '#',
    },
  ];

  const footerservicesitems = [
    {
      id: 1,
      title: 'Transport Engineering Design',
      href: '/services',
    },
    {
      id: 2,
      title: 'Transport Feasibility Study',
      href: '/services',
    },
    {
      id: 3,
      title: 'Transportation Management System',
      href: '/services',
    },
    {
      id: 4,
      title: 'Trasportation Survey and GIS',
      href: '/services',
    },
    // {
    //   id: 4,
    //   title: 'Transport Transaction Advisory',
    //   href: '#',
    // },
    // {
    //   id: 5,
    //   title:
    //     'Monitoring and Evaluation for Transportation Facilities and Operation',
    //   href: '#',
    // },
    {
      id: 6,
      title: 'Transportation Technology',
      href: '/services',
    },
    {
      id: 5,
      title: 'Transportation Environment',
      href: '/services',
    },
  ];

  const footerhelpfullinksitems = [
    {
      id: 1,
      title: 'Contact',
      href: '/contact',
    },
    // {
    //   id: 3,
    //   title: 'Live Chat',
    //   href: '#',
    // },
  ];

  // const footerlegalitems = [
  //   // {
  //   //   id: 1,
  //   //   title: 'Privacy Policy',
  //   //   href: '#',
  //   // },
  //   // {
  //   //   id: 2,
  //   //   title: 'Terms & Conditions',
  //   //   href: '#',
  //   // },
  // ];
  return (
    <footer className='bg-arsaranabackground'>
      <DownloadPortfolioSection />
      <div className='mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 gap-8 lg:grid-cols-3'>
          <div>
            <Image
              src={
                theme === 'dark'
                  ? '/icons/arsarana_kuning.png'
                  : '/icons/logo-arsarana.png'
              }
              width={100}
              height={100}
              className='mr-5 h-24 w-24'
              alt='logo'
            />
            <p className='text-arsaranatitle mt-4 max-w-xs text-sm'>
              PT Arneva Akasa Terra Magna
            </p>
            <SocmedFooterSection />
          </div>
          <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3'>
            <div>
              <p className='text-arsaranatitle font-medium'>Company</p>
              <nav className='text-foreground mt-4 flex flex-col space-y-2 text-sm'>
                {footercompanyitems &&
                  footercompanyitems.map((item) => {
                    return (
                      <UnstyledLink
                        key={item.id}
                        className='hover:opacity-75'
                        href={item.href}
                      >
                        {' '}
                        {item.title}{' '}
                      </UnstyledLink>
                    );
                  })}
              </nav>
            </div>
            <div>
              <p className='text-arsaranatitle font-medium'>Services</p>
              <nav className='text-foreground mt-4 flex flex-col space-y-2 text-sm'>
                {footerservicesitems &&
                  footerservicesitems.map((item) => {
                    return (
                      <UnstyledLink
                        key={item.id}
                        className='hover:opacity-75'
                        href={item.href}
                      >
                        {' '}
                        {item.title}{' '}
                      </UnstyledLink>
                    );
                  })}
              </nav>
            </div>
            <div>
              <p className='text-arsaranatitle font-medium'>Helpful Links</p>
              <nav className='text-foreground mt-4 flex flex-col space-y-2 text-sm'>
                {footerhelpfullinksitems &&
                  footerhelpfullinksitems.map((item) => {
                    return (
                      <UnstyledLink
                        key={item.id}
                        className='hover:opacity-75'
                        href={item.href}
                      >
                        {' '}
                        {item.title}{' '}
                      </UnstyledLink>
                    );
                  })}
              </nav>
            </div>
            {/* <div>
              <p className='text-arsaranatitle font-medium'>Legal</p>
              <nav className='text-foreground mt-4 flex flex-col space-y-2 text-sm'>
                {footerlegalitems &&
                  footerlegalitems.map((item) => {
                    return (
                      <UnstyledLink
                        key={item.id}
                        className='hover:opacity-75'
                        href={item.href}
                      >
                        {' '}
                        {item.title}{' '}
                      </UnstyledLink>
                    );
                  })}
              </nav>
            </div> */}
          </div>
        </div>
        <p className='text-foreground mt-8 text-xs'>
          © {new Date().getFullYear()} By{' '}
          <UnstyledLink href='#'>Arsarana</UnstyledLink>
        </p>
      </div>
    </footer>
  );
}
