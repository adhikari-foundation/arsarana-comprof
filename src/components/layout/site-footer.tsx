import Image from 'next/image';
import { useTheme } from 'next-themes';
import * as React from 'react';

import { Icons } from '../default-icons';
import UnstyledLink from '../links/unstyled-link';
// import { ModeToggle } from '@src/components/mode-toggle';

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

interface ISiteFooter {
  className?: string;
  ln: string | null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  services?: any | null;
}

// eslint-disable-next-line unused-imports/no-unused-vars
export function SiteFooter({ className, ln, services }: ISiteFooter) {
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
      title_id: 'Tim Ahli',
      href: '/our-team',
    },
    {
      id: 3,
      title: 'Tabloid',
      title_id: 'Tabloid',
      href: '/tabloid',
    },
    {
      id: 4,
      title: 'Careers',
      title_id: 'Karir',
      href: '#',
    },
  ];

  const footerhelpfullinksitems = [
    {
      id: 1,
      title: 'Contact',
      title_id: 'Kontak',
      href: '/contact',
    },
    {
      id: 2,
      title: 'Profile',
      title_id: 'Profil',
      href: '/profiles',
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
              <p className='text-arsaranatitle font-medium'>
                {ln && ln.toLowerCase() === 'id' ? 'Perusahaan' : 'Company'}
              </p>
              <nav className='text-foreground mt-4 flex flex-col space-y-2 text-sm'>
                {footercompanyitems &&
                  footercompanyitems.map((item) => {
                    return (
                      <UnstyledLink
                        key={item.id}
                        className='hover:opacity-75'
                        href={`${item.href}?ln=${ln}`}
                      >
                        {' '}
                        {ln && ln.toLowerCase() === 'id'
                          ? item.title_id
                          : item.title}{' '}
                      </UnstyledLink>
                    );
                  })}
              </nav>
            </div>
            <div>
              <p className='text-arsaranatitle font-medium'>
                {ln && ln.toLowerCase() === 'id' ? 'Servis' : 'Service'}
              </p>
              <nav className='text-foreground mt-4 flex flex-col space-y-2 text-sm'>
                {services &&
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  services.map((item: any) => {
                    return (
                      <UnstyledLink
                        key={item.id}
                        className='hover:opacity-75'
                        href={`${item.href}&ln=${ln}`}
                      >
                        {' '}
                        {ln && ln.toLowerCase() === 'id'
                          ? item.namaServis
                          : item.serviceName}{' '}
                      </UnstyledLink>
                    );
                  })}
              </nav>
            </div>
            <div>
              <p className='text-arsaranatitle font-medium'>
                {ln && ln.toLowerCase() === 'id' ? 'Link' : 'Helpful Links'}
              </p>
              <nav className='text-foreground mt-4 flex flex-col space-y-2 text-sm'>
                {footerhelpfullinksitems &&
                  footerhelpfullinksitems.map((item) => {
                    return (
                      <UnstyledLink
                        key={item.id}
                        className='hover:opacity-75'
                        href={`${item.href}?ln=${ln}`}
                      >
                        {' '}
                        {ln && ln.toLowerCase() === 'id'
                          ? item.title_id
                          : item.title}{' '}
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
