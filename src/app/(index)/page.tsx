'use client';

// import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

import clsxm from '@src/lib/clsxm';
import logger from '@src/lib/logger';

import IconButton from '@src/components/buttons/icon-button';
import { Icons } from '@src/components/default-icons';
import UnderlineLink from '@src/components/links/underline-link';
import UnstyledLink from '@src/components/links/unstyled-link';
import Typography from '@src/components/typography/default-typography';

function SocmedFooterSection() {
  return (
    <div className='text-arsaranatitle mt-8 flex space-x-6'>
      <UnstyledLink
        className='hover:opacity-75'
        href='#'
        target='_blank'
        rel='noreferrer'
      >
        <span className='sr-only'> Facebook </span>
        <svg
          className='h-6 w-6'
          fill='currentColor'
          viewBox='0 0 24 24'
          aria-hidden='true'
        >
          <path
            fillRule='evenodd'
            d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
            clipRule='evenodd'
          />
        </svg>
      </UnstyledLink>
      <UnstyledLink
        className='hover:opacity-75'
        href='#'
        target='_blank'
        rel='noreferrer'
      >
        <span className='sr-only'> Instagram </span>
        <svg
          className='h-6 w-6'
          fill='currentColor'
          viewBox='0 0 24 24'
          aria-hidden='true'
        >
          <path
            fillRule='evenodd'
            d='M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z'
            clipRule='evenodd'
          />
        </svg>
      </UnstyledLink>
      <UnstyledLink
        className='hover:opacity-75'
        href='#'
        target='_blank'
        rel='noreferrer'
      >
        <span className='sr-only'> Twitter </span>
        <svg
          className='h-6 w-6'
          fill='currentColor'
          viewBox='0 0 24 24'
          aria-hidden='true'
        >
          <path d='M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' />
        </svg>
      </UnstyledLink>
      <UnstyledLink
        className='hover:opacity-75'
        href='#'
        target='_blank'
        rel='noreferrer'
      >
        <span className='sr-only'> GitHub </span>
        <svg
          className='h-6 w-6'
          fill='currentColor'
          viewBox='0 0 24 24'
          aria-hidden='true'
        >
          <path
            fillRule='evenodd'
            d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
            clipRule='evenodd'
          />
        </svg>
      </UnstyledLink>
      <UnstyledLink
        className='hover:opacity-75'
        href='#'
        target='_blank'
        rel='noreferrer'
      >
        <span className='sr-only'> Dribbble </span>
        <svg
          className='h-6 w-6'
          fill='currentColor'
          viewBox='0 0 24 24'
          aria-hidden='true'
        >
          <path
            fillRule='evenodd'
            d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z'
            clipRule='evenodd'
          />
        </svg>
      </UnstyledLink>
    </div>
  );
}

export default function IndexPage() {
  const { theme } = useTheme();
  // const url = '/images/8.jpg';
  const url2 = '/images/16-bgr.png';
  // const url = null;
  const [mounted, setMounted] = useState(false);

  const carouselitems = [
    {
      imgsource: '/images/10.jpg',
      title: 'TRAFFIC COUNTING SURVEY',
      ctatitle: 'Project Details',
      ctahref: '/project-1',
    },
    {
      imgsource: '/images/5.jpg',
      title: 'TRAFFIC MODELLING',
      ctatitle: 'More Details',
      ctahref: '/traffic-modelling',
    },
    {
      imgsource: '/images/13.jpg',
      title: 'ORIGIN-DESTINATION SURVEY',
      ctatitle: '',
      ctahref: '',
    },
  ];

  const servicesitems = [
    {
      id: 1,
      numbering: '01.',
      title: 'Transportation Engineering Design',
      description:
        'Description for Transportation Engineering Design, preferable 3-4 line long for better message and best look.',
    },
    {
      id: 2,
      numbering: '02.',
      title: 'Transport Feasibility Study',
      description:
        'Description for Transport Feasibility Study, preferable 3-4 line long for better message and best look.',
    },
    {
      id: 3,
      numbering: '03.',
      title: 'Transportation Survey and GIS',
      description:
        'Description for Transportation Survey and GIS, preferable 3-4 line long for better message and best look.',
    },
    {
      id: 4,
      numbering: '04.',
      title: 'Transport Transaction Advisory',
      description:
        'Description for Transport Transaction Advisory, preferable 3-4 line long for better message and best look.',
    },
    {
      id: 5,
      numbering: '05.',
      title: 'Transportation Technology',
      description:
        'Description for Transportation Technology, preferable 3-4 line long for better message and best look.',
    },
    {
      id: 6,
      numbering: `${' '}${' '}${' '}`,
      title: 'See More',
      href: '/our-services',
      description: `${' '}${' '}${' '}`,
    },
  ];

  const experiencesitems = [
    {
      id: 1,
      title: 'Traffic Volume Review Consultancy Services',
      href: '/portfolio/traffic-volume-review-consultancy-services',
      imagelocation: '/images/9.jpg',
      description:
        'Description for Traffic Volume Review Consultancy Services, preferable 3-4 line long for better message and best look. Traffic Volume Review Consultancy Services for Serang Panimbang Toll Road 2023',
    },
    {
      id: 2,
      title: 'Transportation Consultancy Services for Government Cooperation',
      href: '/portfolio/transportation-consultancy-services-for-government-corporation',
      imagelocation: '/images/11.jpg',
      description:
        'Description for Transportation Consultancy Services for Government Cooperation, preferable 3-4 line long for better message and best look. Transportation Consultancy Services for Government Cooperation Projects with Business Entities (PPP) for the Provision of 60 Residential Towers for State Security Defense Personnel in WP 1A and 95 Residential Towers for State Civil Apparatus in WP 1B',
    },
    {
      id: 3,
      title: 'Christmas and New Year Data Analysis Study',
      href: '/portfolio/christmast-and-new-year-data-analysis-study',
      imagelocation: '/images/12.jpg',
      description:
        'Description for Christmas and New Year Data Analysis Study, preferable 3-4 line long for better message and best look. Christmas and New Year Data Analysis Study in Jabodetabek Area',
    },
    {
      id: 4,
      title: 'Project Management Consultant Bus Rapid Transit (PMC BRT)',
      href: '/portfolio/project-management-consultant-bus-rapid-transit',
      imagelocation: '/images/15.jpg',
      description:
        'Description for Project Management Consultant Bus Rapid Transit (PMC BRT), preferable 3-4 line long for better message and best look. Project Management Consultant Bus Rapid Transit (PMC BRT) Medan and Bandung',
    },
  ];

  const teamitems = [
    {
      id: 1,
      imgsource: '/images/10.jpg',
      firstname: 'M. Saifullah',
      lastname: '',
      position: 'Commissioner',
      expertise: 'Transport and Financial Specialist',
    },
    {
      id: 2,
      imgsource: '/images/10.jpg',
      firstname: 'Noviana',
      position: 'President Director',
      expertise: 'PPP and Economic Specialist',
    },
    {
      id: 3,
      imgsource: '/images/',
      firstname: 'Aris Wibowo',
      position: 'Director',
      expertise: 'Transport Engineering Specialist',
    },
  ];

  const footercompanyitems = [
    {
      id: 1,
      title: 'About',
      href: '#',
    },
    {
      id: 2,
      title: 'Meet the Team',
      href: '#',
    },
    {
      id: 3,
      title: 'History',
      href: '#',
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
      href: '#',
    },
    {
      id: 2,
      title: 'Transport Feasibility Study',
      href: '#',
    },
    {
      id: 3,
      title: 'Trasportation Survey and GIS',
      href: '#',
    },
    {
      id: 4,
      title: 'Transport Transaction Advisory',
      href: '#',
    },
    {
      id: 5,
      title:
        'Monitoring and Evaluation for Transportation Facilities and Operation',
      href: '#',
    },
    {
      id: 6,
      title: 'Transportation System Management',
      href: '#',
    },
    {
      id: 7,
      title: 'Transportation Technology',
      href: '#',
    },
    {
      id: 8,
      title: 'Transportation Environment',
      href: '#',
    },
  ];

  const footerhelpfullinksitems = [
    {
      id: 1,
      title: 'Contact',
      href: '#',
    },
    {
      id: 2,
      title: 'FAQs',
      href: '#',
    },
    {
      id: 3,
      title: 'Live Chat',
      href: '#',
    },
  ];

  const footerlegalitems = [
    {
      id: 1,
      title: 'Privacy Policy',
      href: '#',
    },
    {
      id: 1,
      title: 'Terms & Conditions',
      href: '#',
    },
  ];

  const [currentcarouselitem, setCurrentCarouselItem] = useState(
    carouselitems[0]
  );

  function changeCarouselItem(buttoType: string) {
    const itemToFind = currentcarouselitem.title;
    const index = carouselitems.findIndex((item) => item.title === itemToFind);

    if (index < 0) {
      setCurrentCarouselItem(carouselitems[0]);
      return;
    }
    if (buttoType === 'next') {
      index === carouselitems.length - 1
        ? setCurrentCarouselItem(carouselitems[0])
        : setCurrentCarouselItem(carouselitems[index + 1]);
    } else {
      index === 0
        ? setCurrentCarouselItem(carouselitems[carouselitems.length])
        : setCurrentCarouselItem(carouselitems[index - 1]);
    }

    logger(currentcarouselitem);
  }

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <></>;
  }

  return (
    <>
      <section
        key={1}
        className={clsxm(
          'flex max-h-[93vh] min-h-[93vh] w-full flex-col overflow-hidden',
          `bg-arsaranaforeground bg-cover bg-no-repeat backdrop-blur-sm`
        )}
      >
        <div
          className='bg-image flex max-h-[93vh] min-h-[93vh] w-full items-center justify-center bg-cover bg-no-repeat p-5'
          style={{
            backgroundImage: `url(${currentcarouselitem.imgsource})`,
            height: '93vh',
          }}
        >
          <div
            className='mask w-full'
            style={{
              backgroundColor: `${
                theme === 'dark'
                  ? 'rgba(0, 0, 0, 0.6)'
                  : 'rgba(255, 255, 255, 0.6)'
              }`,
            }}
          >
            <div className='h-100 container my-4 flex min-w-full flex-row items-center justify-between lg:mx-4 lg:gap-20 lg:pr-10 xl:pr-16'>
              <div className='flex flex-row items-center gap-4 lg:gap-20'>
                <IconButton
                  iconClassName='h-10 w-10 text-foreground'
                  icon={Icons.chevronLeft}
                  variant='ghost'
                  onClick={() => {
                    changeCarouselItem('previous');
                  }}
                />
                <div>
                  <Typography
                    variant='j1'
                    color='arsarana-title'
                    className='my-3 text-lg xl:text-4xl'
                  >
                    {currentcarouselitem.title}
                  </Typography>
                  <UnderlineLink href={currentcarouselitem.ctahref}>
                    <Typography variant='b1' color='arsarana-title'>
                      {currentcarouselitem.ctatitle}
                    </Typography>
                  </UnderlineLink>
                </div>
              </div>
              <IconButton
                iconClassName='h-10 w-10 text-foreground'
                icon={Icons.chevronRight}
                variant='ghost'
                onClick={() => {
                  changeCarouselItem('next');
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <section
        key={2}
        className={clsxm(
          'flex max-h-[70vh] w-full flex-col overflow-hidden',
          `bg-arsaranabackground bg-cover bg-no-repeat backdrop-blur-sm`
        )}
      >
        <Image
          src={url2}
          alt='circular-image'
          width={400}
          height={400}
          className='absolute right-0 -z-10 -mr-28 mt-10 rotate-[30deg] bg-transparent opacity-60'
        />
        <div className='mx-auto -mt-16 flex h-[70vh] w-full max-w-full flex-col items-center justify-center'>
          <Typography
            variant='j1'
            color='arsarana-title'
            className='w-full text-center'
          >
            OUR SOLUTIONS
          </Typography>
          <div className='mt-8 flex w-full flex-col items-center justify-center lg:flex-row'>
            <Typography
              variant='j1'
              color='arsarana-title'
              className='xl:text-5xl'
            >
              One Stop
            </Typography>

            <Typography
              variant='j1'
              color='theme'
              className='xl:ms-2 text-foreground flex items-center justify-center text-center xl:mt-2'
            >
              Transportation Analysis and Planning Solution For You
            </Typography>
          </div>
        </div>
      </section>

      <section
        key={3}
        className={clsxm(
          'flex max-h-fit min-h-[60vh] w-full flex-col overflow-hidden',
          `bg-arsaranaforeground bg-cover bg-no-repeat backdrop-blur-sm`
        )}
      >
        <div className='bg-arsaranaforeground mx-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0'>
          <div className='mr-auto place-self-center lg:col-span-7'>
            <h1 className='text-arsaranatitleinverse mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl'>
              Our History Begins
            </h1>
            <p className='text-background mb-6 max-w-2xl font-light md:text-lg lg:mb-8 lg:text-xl'>
              PT Arneva Akasa Terra Magna (ARSARANA) was established in 2020 to
              bring new perspectives and solutions for transportation sector
              improvement in Indonesia. ARSARANA is a subsidiary of ADHIKARI
              GROUP, a well known infrastructure consulting company, who has
              been heavily participating in Indonesia infrastructure sector
              development since 2012.
            </p>
            <UnstyledLink
              href='#'
              className={clsxm(
                'bg-arsaranabackground hover:bg-primary-600 mr-3 inline-flex items-center justify-center rounded-lg px-5 py-3',
                'text-arsaranatitle text-center text-base font-medium',
                'focus:ring-primary-300 dark:focus:ring-primary-900 focus:ring-4'
              )}
            >
              Get started
              <svg
                className='ml-2 -mr-1 h-5 w-5'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                  clip-rule='evenodd'
                ></path>
              </svg>
            </UnstyledLink>
            <UnstyledLink
              href='#'
              className={clsxm(
                'inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3',
                'text-arsaranatitleinverse text-base font-medium',
                'hover:text-arsaranatitle hover:bg-gray-100',
                'dark:border-arsaranabackground dark:hover:bg-arsaranabackground dark:focus:ring-arsaranabackground',
                'focus:ring-4 focus:ring-gray-100'
              )}
            >
              Speak to Sales
            </UnstyledLink>
          </div>
          <div className='hidden rounded-lg lg:col-span-5 lg:mt-0 lg:flex'>
            <Image
              height={400}
              width={550}
              src='https://lp-cms-production.imgix.net/2019-06/554369495_full.jpg'
              alt='mockup'
              className='rounded-lg'
            />
          </div>
        </div>
      </section>

      <section
        key={4}
        className={clsxm(
          'flex max-h-fit min-h-[60vh] w-full flex-col overflow-hidden',
          `bg-arsaranabackground bg-cover bg-no-repeat backdrop-blur-sm`
        )}
      >
        <div className='my-8 inline-flex flex-col items-center justify-center p-4'>
          <Typography variant='j1' color='arsarana-title' className='mb-8'>
            Our Services
          </Typography>

          <ul className='grid place-content-center gap-8 sm:grid-cols-2'>
            {servicesitems &&
              servicesitems.map((item) => {
                if (item.id < 6) {
                  return (
                    <li className='flex' key={item.id}>
                      <Typography
                        variant='b1'
                        color='arsarana-title'
                        className='px-4 text-5xl font-extralight'
                      >
                        {item.numbering}
                      </Typography>
                      <div>
                        <div className='text-arsaranatitle text-xl font-bold'>
                          {item.title}
                        </div>
                        <p className='text-foreground max-w-xs py-2 text-sm'>
                          {item.description}
                        </p>
                      </div>
                    </li>
                  );
                } else {
                  return (
                    <li className='flex' key={item.id}>
                      <Typography
                        variant='b1'
                        color='arsarana-title'
                        className='px-4 text-5xl font-extralight'
                      >
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </Typography>
                      <div>
                        <UnstyledLink
                          href={item.href || '#'}
                          className='mt-4 flex flex-row gap-4'
                        >
                          <div className='text-arsaranatitle text-xl font-bold'>
                            {item.title}
                          </div>
                          <Icons.arrowRight className='text-arsaranatitle mr-4 h-8 w-10' />
                        </UnstyledLink>
                      </div>
                    </li>
                  );
                }
              })}
          </ul>
        </div>
      </section>

      <section
        key={5}
        className={clsxm(
          'flex max-h-fit min-h-[60vh] w-full flex-col overflow-hidden',
          `bg-arsaranaforeground bg-cover bg-no-repeat backdrop-blur-sm`
        )}
      >
        <div className='sticky z-50 my-20 w-full rounded-3xl px-6'>
          <Typography
            variant='j1'
            color='arsarana-title-inverse'
            className='text-center'
          >
            Our Experiences
          </Typography>
          {experiencesitems &&
            experiencesitems.map((item) => {
              if (item.id % 2 === 0) {
                return (
                  <div
                    key={item.id}
                    className='mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20'
                  >
                    <div className='mb-10 flex w-full flex-col items-center justify-between lg:flex-row'>
                      <div className='mb-16 lg:mb-0 lg:max-w-lg lg:pr-5'>
                        <div className='mb-6 max-w-xl'>
                          <h2 className='text-arsaranatitleinverse mb-6 max-w-lg font-sans text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none'>
                            {item.title}
                          </h2>
                          <p className='text-background text-base md:text-lg'>
                            {' '}
                            {item.description}
                          </p>
                        </div>
                        <div className='flex items-center space-x-3'>
                          <Link href='/comingsoon'>
                            <span className='mr-32 flex w-full items-center justify-center rounded-lg border border-2 bg-black object-cover object-top py-4 font-black leading-6 text-white sm:mr-64 sm:px-10'>
                              Get Started
                            </span>
                          </Link>
                        </div>
                      </div>
                      <Image
                        alt='logo'
                        width={450}
                        height={450}
                        src={item.imagelocation}
                      />
                    </div>
                  </div>
                );
              } else {
                return (
                  <div
                    key={item.id}
                    className='mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20'
                  >
                    <div className='mb-10 flex w-full flex-col items-center justify-between lg:flex-row'>
                      <Image
                        alt='logo'
                        width={450}
                        height={450}
                        src={item.imagelocation}
                      />

                      <div className='mb-16 lg:mb-0 lg:max-w-lg lg:pr-5'>
                        <div className='mb-6 max-w-xl'>
                          <h2 className='text-arsaranatitleinverse mt-6 mb-6 max-w-lg font-sans text-3xl font-bold tracking-tight sm:mt-0 sm:text-4xl sm:leading-none'>
                            {item.title}
                          </h2>
                          <p className='text-background text-base md:text-lg'>
                            {item.description}
                          </p>
                        </div>
                        <div className='flex items-center space-x-3'>
                          <Link href={item.href}>
                            <span className='mr-32 flex w-full items-center justify-center rounded-lg border border-2 bg-black object-cover object-top py-4 font-black leading-6 text-white sm:mr-64 sm:px-10'>
                              Get Started
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
        </div>
      </section>

      <section
        key={6}
        className={clsxm(
          'flex max-h-fit min-h-[60vh] w-full flex-col overflow-hidden',
          `bg-arsaranabackground bg-cover bg-no-repeat backdrop-blur-sm`
        )}
      >
        <div className='bg-arsaranabackground py-20'>
          <div className='container mx-auto px-6 md:px-12 xl:px-32'>
            <div className='mb-16 text-center'>
              <h2 className='text-arsaranatitle mb-4 text-center text-2xl font-bold md:text-4xl'>
                Our Team
              </h2>
              <p className='text-foreground lg:mx-auto lg:w-8/12'>
                ARSARANA has a pool of talents consisted of young and dynamic
                experts who have extensive experience to deliver successful
                transportation infrastructure projects with engineering,
                management environment, technology, and policy excellent.
              </p>
            </div>
            <div className='grid items-center gap-12 md:grid-cols-3'>
              {teamitems &&
                teamitems.map((item) => {
                  return (
                    <div key={item.id} className='space-y-4 text-center'>
                      <Image
                        className='mx-auto h-64 w-64 rounded-xl object-cover md:h-40 md:w-40 lg:h-64 lg:w-64'
                        src='https://tailus.io/sources/blocks/classic/preview/images/woman1.jpg'
                        alt='woman'
                        loading='lazy'
                        width='640'
                        height='805'
                      />
                      <div>
                        <h4 className='text-arsaranatitle text-2xl'>
                          {item.firstname}
                        </h4>
                        <span className='text-foreground block text-sm'>
                          {item.position} - {item.expertise}
                        </span>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </section>

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
            <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4'>
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
              <div>
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
              </div>
            </div>
          </div>
          <p className='text-foreground mt-8 text-xs'>
            © {new Date().getFullYear()} By{' '}
            <UnstyledLink href='#'>Arsarana</UnstyledLink>
          </p>
        </div>
      </footer>
    </>
  );
}
