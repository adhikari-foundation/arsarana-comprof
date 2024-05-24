/* eslint-disable unused-imports/no-unused-vars */
'use client';

// import { useTheme } from 'next-themes';
import Image from 'next/image';
// import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

import clsxm from '@src/lib/clsxm';
import logger from '@src/lib/logger';

import IconButton from '@src/components/buttons/icon-button';
import { Icons } from '@src/components/default-icons';
import { SiteFooter } from '@src/components/layout/site-footer';
// import UnderlineLink from '@src/components/links/underline-link';
import UnstyledLink from '@src/components/links/unstyled-link';
import Typography from '@src/components/typography/default-typography';

import TeamSection from './team';
// import ArticlesPage from '../articles/(index)/page';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function IndexPage({ params }: any) {
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
      imgsource: '/images/proyek_modelling.jpeg',
      title: 'TRAFFIC MODELLING',
      ctatitle: 'More Details',
      ctahref: '/traffic-modelling',
    },
    {
      imgsource: '/images/origin_destination.jpeg',
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
        'ARSARANA memiliki tim yang siap berkontribusi pada penyusunan desain infrastruktur transportasi seperti jalan raya, jalan rel, terminal, pelabuhan, dan bandar udara. ',
    },
    {
      id: 2,
      numbering: '02.',
      title: 'Transport Feasibility Study',
      description:
        'ARSARANA memiliki tim yang siap berkontribusi pada penyusunan studi kelayakan infrastruktur transportasi seperti jalan raya, jalan rel, terminal, pelabuhan, dan bandar udara. ',
    },
    {
      id: 3,
      numbering: '03.',
      title: 'Transport Management System',
      description:
        'ARSARANA memiliki tim yang siap berkontribusi pada sistem manajement transportasi (TMS) seperti jalan raya, jalan rel, terminal, pelabuhan, dan bandar udara. ',
    },
    {
      id: 4,
      numbering: '04.',
      title: 'Transportation Survey and GIS',
      description:
        'ARSARANA memiliki tim yang siap berkontribusi pada kegiatan survey dan GIS seperti survey pada jalan raya, jalan rel, terminal, pelabuhan, dan bandar udara. ',
    },
    {
      id: 5,
      numbering: '05.',
      title: 'Transportation Environment',
      description:
        'ARSARANA memiliki tim yang siap berkontribusi dalam kegiatan transportasi yang ramah lingkungan. Kegiatan transportasi dapat diidentifikasi menggunakan pendekatan yang sesuai untuk menyelaraskan kebijakan transportasi dan lingkungan.',
    },
    {
      id: 6,
      numbering: `06.`,
      title: 'Transportation Technology',
      description: `ARSARANA memiliki tim yang siap berkontribusi untuk memastikan bahwa teknologi dan infrastruktur dalam bidang transportasi memperhatikan aspek efisiensi, kemudahan dan keselamatan. `,
    },
    {
      id: 7,
      numbering: `${' '}${' '}${' '}`,
      title: 'See Details',
      href: '#',
      description: `${' '}${' '}${' '}`,
    },
  ];

  const experiencesitems = [
    {
      id: 1,
      title: 'Traffic Volume Review Consultancy Services',
      href: '/portfolio/traffic-volume-review-consultancy-services',
      imagelocation: '/images/serang.jpeg',
      description:
        'Traffic Volume Review Consultancy Services for Serang Panimbang Toll Road 2023',
    },
    {
      id: 2,
      title: 'Transportation Consultancy Services for Government Cooperation',
      href: '/portfolio/transportation-consultancy-services-for-government-corporation',
      imagelocation: '/images/survey_blu_lrt_palembang.jpeg',
      description:
        'Transportation Consultancy Services for Government Cooperation Projects with Business Entities (PPP) for the Provision of 60 Residential Towers for State Security Defense Personnel in WP 1A and 95 Residential Towers for State Civil Apparatus in WP 1B',
    },
    {
      id: 3,
      title: 'Christmas and New Year Data Analysis Study',
      href: '/portfolio/christmast-and-new-year-data-analysis-study',
      imagelocation: '/images/proyek_modelling.jpeg',
      description:
        'Christmas and New Year Data Analysis Study in Jabodetabek Area',
    },
    {
      id: 4,
      title: 'Project Management Consultant Bus Rapid Transit (PMC BRT)',
      href: '/portfolio/project-management-consultant-bus-rapid-transit',
      imagelocation: '/images/fgd_pmc_brt.jpeg',
      description:
        'Project Management Consultant Bus Rapid Transit (PMC BRT) Medan and Bandung',
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
                  {/* <UnderlineLink href={currentcarouselitem.ctahref}>
                    <Typography variant='b1' color='arsarana-title'>
                      {currentcarouselitem.ctatitle}
                    </Typography>
                  </UnderlineLink> */}
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
              className='text-foreground flex items-center justify-center text-center xl:ms-2 xl:mt-2'
            >
              Transportation Analysis and Planning Solution For You
            </Typography>
          </div>
        </div>
      </section>

      <section
        key={3}
        className={clsxm(
          'flex max-h-fit min-h-[60vh] w-full flex-col items-center justify-center overflow-hidden',
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
            {/* <UnstyledLink
              href='#'
              className={clsxm(
                'bg-arsaranabackground hover:bg-primary-600 mr-3 inline-flex items-center justify-center rounded-lg px-5 py-3',
                'text-arsaranatitle text-center text-base font-medium',
                'focus:ring-primary-300 dark:focus:ring-primary-900 focus:ring-4'
              )}
            >
              Get started
              <svg
                className='-mr-1 ml-2 h-5 w-5'
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
            </UnstyledLink> */}
          </div>
          <div className='hidden rounded-none lg:col-span-5 lg:mt-0 lg:flex'>
            <Image
              height={400}
              width={550}
              src='/images/fgd_pmc_brt.jpeg'
              alt='mockup'
              className='rounded-none'
            />
          </div>
        </div>
      </section>

      <section
        id='service'
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
                if (item.id < 7) {
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
                    <li
                      className='flex items-end justify-end sm:col-span-2'
                      key={item.id}
                    >
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

      {/* <ArticlesPage params={params} /> */}

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
                        {/* <div className='flex items-center space-x-3'>
                          <Link href='/comingsoon'>
                            <span className='mr-32 flex w-full items-center justify-center rounded-lg border border-2 bg-black object-cover object-top py-4 font-black leading-6 text-white sm:mr-64 sm:px-10'>
                              Get Started
                            </span>
                          </Link>
                        </div> */}
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
                          <h2 className='text-arsaranatitleinverse mb-6 mt-6 max-w-lg font-sans text-3xl font-bold tracking-tight sm:mt-0 sm:text-4xl sm:leading-none'>
                            {item.title}
                          </h2>
                          <p className='text-background text-base md:text-lg'>
                            {item.description}
                          </p>
                        </div>
                        {/* <div className='flex items-center space-x-3'>
                          <Link href={item.href}>
                            <span className='mr-32 flex w-full items-center justify-center rounded-lg border border-2 bg-black object-cover object-top py-4 font-black leading-6 text-white sm:mr-64 sm:px-10'>
                              Get Started
                            </span>
                          </Link>
                        </div> */}
                      </div>
                    </div>
                  </div>
                );
              }
            })}
        </div>
      </section>

      <TeamSection />
      <SiteFooter />
    </>
  );
}
