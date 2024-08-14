/* eslint-disable unused-imports/no-unused-vars */
'use client';

// import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
// import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

import clsxm from '@src/lib/clsxm';
import logger from '@src/lib/logger';

import IconButton from '@src/components/buttons/icon-button';
import ImageCard from '@src/components/cards/image-card';
import { Icons } from '@src/components/default-icons';
import { SiteFooter } from '@src/components/layout/site-footer';
// import UnderlineLink from '@src/components/links/underline-link';
// import UnstyledLink from '@src/components/links/unstyled-link';
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
      imgsource: '/images/tc_survey.jpg',
      title: 'TRAFFIC COUNTING SURVEY',
      ctatitle: 'Project Details',
      ctahref: '/project-1',
    },
    {
      imgsource: '/images/atp_wtp_survey.png',
      title: 'ATP-WTP SURVEY',
      ctatitle: 'More Details',
      ctahref: '/traffic-modelling',
    },
    {
      imgsource: '/images/od_survey.png',
      title: 'ORIGIN-DESTINATION SURVEY',
      ctatitle: '',
      ctahref: '',
    },
    {
      imgsource: '/images/road_inventory_survey.png',
      title: 'ROAD INVENTORY SURVEY',
      ctatitle: '',
      ctahref: '',
    },
  ];

  const servicesitems = [
    {
      id: 1,
      numbering: '01.',
      title: 'Transportation Engineering Design',
      description: '',
      href: '/services?id=0',
    },
    {
      id: 2,
      numbering: '02.',
      title: 'Transport Feasibility Study',
      description: '',
      href: '/services?id=1',
    },
    {
      id: 3,
      numbering: '03.',
      title: 'Transport Management System',
      description: '',
      href: '/services?id=2',
    },
    {
      id: 4,
      numbering: '04.',
      title: 'Transportation Survey and GIS',
      description: '',
      href: '/services?id=3',
    },
    {
      id: 5,
      numbering: '05.',
      title: 'Transportation Environment',
      description: '',
      href: '/services?id=4',
    },
    {
      id: 6,
      numbering: `06.`,
      title: 'Transportation Technology',
      description: ``,
      href: '/services?id=5',
    },
    {
      id: 7,
      numbering: `${' '}${' '}${' '}`,
      title: 'See Details',
      href: '/services',
      description: `${' '}${' '}${' '}`,
    },
  ];

  const experiencesitems = [
    {
      id: 1,
      title: 'Pavement Condition Index (PCI) Training',
      href: '/experiences?id=0',
      imagelocation: '/images/experiences/pci_training.png',
      description:
        'ARSARANA trained PT Angkasa Pura II airside infrastructure personnel to improve their competency in preparing PCI reports at each branch office.',
    },
    {
      id: 2,
      title: 'Road Network Modelling',
      href: '/experiences?id=1',
      imagelocation: '/images/experiences/road_network_modelling.png',
      description:
        'ARSARANA support WIKA Serang-Panimbang in conducting a road network modeling on the Serang-Panimbang Toll Road.',
    },
    {
      id: 3,
      title: 'Data Analysis Study',
      href: '/experiences?id=2',
      imagelocation: '/images/experiences/data_analysis_study.png',
      description:
        'ARSARANA assist the Jabodetabek Transportation Management Agency (BPTJ) to develop an integrated transportation system that makes it easier for BPTJ to determine transportation management policies in Greater Jakarta/Jabodetabek.',
    },
    {
      id: 4,
      title: 'Key Performance Indicators (KPIs) Study',
      href: '/experiences?id=3',
      imagelocation: '/images/experiences/kpi_study.png',
      description:
        'ARSARANA supports Amethys Utama in the work of the Key Performance Indicators (KPIs) Study of the South Sumatera Light Railway Management Center (BPKARSS).',
    },
    {
      id: 5,
      title: 'Project Management Consultant (PMC)',
      href: '/experiences?id=4',
      imagelocation: '/images/experiences/pmc.png',
      description:
        'ARSARANA together with Egis International Indonesia supported the Directorate General of Land Transportation as Project Management Consultant of the Implementation Project of National Mass Transit Program (IPNMTP).',
    },
    {
      id: 6,
      title: 'Development Plan Study',
      href: '/experiences?id=5',
      imagelocation: '/images/experiences/development_plan_study.png',
      description:
        'ARSARANA supports the initiation of the development plan for the northern part of Jakarta through the preparation of the Marunda Area Development Plan Study.',
    },
    {
      id: 7,
      title: 'Feasibility Study for Railway Planning',
      href: '/experiences?id=6',
      imagelocation: '/images/fgd_pmc_brt.jpeg',
      description:
        'ARSARANA together with Atlas Internasional Indah supported the Directorate General of Railways in preparing guidelines for railway planning in the Capital City of Nusantara (IKN).',
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
            <p className='mb-6 max-w-2xl font-light text-black md:text-lg lg:mb-8 lg:text-xl'>
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
              src='/icons/logo-arsarana.png'
              alt='mockup'
              className='rounded-none'
            />
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section
        id='service'
        key={4}
        className={clsxm(
          'flex max-h-fit min-h-[60vh] w-full flex-col overflow-hidden',
          `bg-arsaranabackground items-center justify-center bg-cover bg-no-repeat backdrop-blur-sm`
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
                    <Link href={item.href} key={item.id}>
                      <li className='flex'>
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
                          {/* <p className='text-foreground max-w-xs py-2 text-sm'>
                          {item.description}
                        </p> */}
                        </div>
                      </li>
                    </Link>
                  );
                } else {
                  return (
                    // <Link href={item.href} key={item.id}>
                    //   <li className='flex items-end justify-end sm:col-span-2'>
                    //     <Typography
                    //       variant='b1'
                    //       color='arsarana-title'
                    //       className='px-4 text-5xl font-extralight'
                    //     >
                    //       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    //     </Typography>
                    //     <div>
                    //       <UnstyledLink
                    //         href={item.href || '#'}
                    //         className='mt-4 flex flex-row gap-4'
                    //       >
                    //         <div className='text-arsaranatitle text-xl font-bold'>
                    //           {item.title}
                    //         </div>
                    //         <Icons.arrowRight className='text-arsaranatitle mr-4 h-8 w-10' />
                    //       </UnstyledLink>
                    //     </div>
                    //   </li>
                    // </Link>
                    <></>
                  );
                }
              })}
          </ul>
        </div>
      </section>

      {/* <ArticlesPage params={params} /> */}

      {/* Our Experiences */}
      <section
        key={5}
        className={clsxm(
          'flex max-h-fit min-h-[60vh] w-full flex-row overflow-hidden',
          `bg-arsaranaforeground bg-cover bg-no-repeat backdrop-blur-sm`
        )}
      >
        <div className='sticky z-50 my-20 flex w-full flex-col items-center justify-center rounded-3xl px-6'>
          <Typography
            variant='j1'
            color='arsarana-title-inverse'
            className='text-center'
          >
            Our Experiences
          </Typography>

          <div className='grid w-full items-center justify-center gap-2 lg:w-[65vw] lg:grid-cols-3'>
            {experiencesitems &&
              experiencesitems.map((item) => {
                return (
                  <div className='mr-8 mt-8' key={item.id}>
                    <Link href={item.href}>
                      <ImageCard
                        href={item.href}
                        imagelocation={item.imagelocation}
                        title={item.title}
                        description={item.description}
                      />
                    </Link>
                  </div>
                );
              })}
          </div>
        </div>
      </section>

      <TeamSection />
      <SiteFooter />
    </>
  );
}
