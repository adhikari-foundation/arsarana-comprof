/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable unused-imports/no-unused-vars */
'use client';

// import { useTheme } from 'next-themes';
// import { revalidatePath } from 'next/cache';
// import Image from 'next/image';
import { isParamValidNumber } from '@utils/params-wildcard-utils';
import clsx from 'clsx';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

import clsxm from '@src/lib/clsxm';
import logger from '@src/lib/logger';

import { SiteFooter } from '@src/components/layout/site-footer';
import Typography from '@src/components/typography/default-typography';
// import IconButton from '@src/components/buttons/icon-button';
import { Button } from '@src/components/ui/default-ui-button';
// import UnstyledLink from '@src/components/links/unstyled-link';

function renderScopes(scopes: string) {
  // Remove the square brackets at the start and end, and split the string by semicolons
  const items = scopes.slice(1, -1).split(';');

  // Render the items as a <ul> with <li> elements
  return (
    <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
      {items.map((item, index) => (
        <li key={index}>{item.trim()}</li>
      ))}
    </ul>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ExperiencesPage({ params }: any) {
  // revalidatePath('/', 'layout');
  const { theme } = useTheme();
  // const url = null;

  const searchParams = useSearchParams();

  let id = searchParams.get('id');
  id = isParamValidNumber(id ?? 0, 0, 6, 0);

  const [mounted, setMounted] = useState(false);
  const [selectedExperiences, setSelectedExperiences] = useState<any | null>(
    null
  );
  logger(selectedExperiences);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!selectedExperiences && params?.experiences?.length > 0) {
      setSelectedExperiences(params.experiences[id ?? 0]);
    }
  }, [params, selectedExperiences, id]);

  if (!mounted || !params?.experiences) {
    return <></>;
  }

  logger(params.experiences);

  return (
    <>
      <section
        key={1}
        className={clsxm(
          'flex max-h-[45vh] min-h-[45vh] w-full flex-col overflow-hidden',
          `bg-arsaranaforeground bg-cover bg-no-repeat backdrop-blur-sm`
        )}
      >
        <div
          className='bg-image flex max-h-[45vh] min-h-[45vh] w-full items-center justify-center bg-cover bg-no-repeat p-5'
          style={{
            backgroundImage: `url('/images/8.jpg')`,
            height: '93vh',
          }}
        >
          <div className='w-full'>
            <div className='h-100 container my-4 flex min-w-full flex-row items-center justify-between lg:mx-4 lg:gap-20 lg:pr-10 xl:pr-16'>
              <div className='flex flex-row items-center gap-4 lg:gap-20'>
                <div>
                  <Typography
                    variant='j1'
                    color='main'
                    className='my-3 text-lg xl:text-4xl'
                  >
                    OUR EXPERIENCES
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='mb-10 flex h-full w-full flex-row flex-wrap gap-8 bg-slate-200 px-10 py-10'>
        {params.experiences &&
          params.experiences.map((item: any) => {
            // logger(item);
            return (
              <Button
                key={item.id}
                className={clsx(
                  selectedExperiences.id === item.id
                    ? 'bg-foreground text-background'
                    : 'bg-arsaranabackground text-arsaranatitle hover:text-background'
                )}
                onClick={() => {
                  setSelectedExperiences(item);
                }}
              >
                {item.experienceTitle}
              </Button>
            );
          })}
      </section>

      <section className='container'>
        <div className='mb-32 w-full'>
          {selectedExperiences ? (
            <>
              <div className='text-arsaranatitle text-3xl font-bold'>
                {selectedExperiences.experienceTitle}
              </div>
              <p className='text-foreground my-4 max-w-4xl py-2 text-lg'>
                {selectedExperiences.experienceDescription}
              </p>
              {selectedExperiences.experienceImage &&
                selectedExperiences.experienceImage !== '-' && (
                  <Image
                    width={600}
                    height={800}
                    // fill
                    // objectFit='none'
                    className='bg-foreground h-auto w-auto'
                    src={
                      `/images/experiences/${selectedExperiences.experienceImage}` ||
                      '/images/avatar.png'
                    }
                    alt='photo'
                  />
                )}
              <p className='text-foreground my-4 max-w-4xl py-2 text-lg'>
                <b>Project Name: </b>
                {selectedExperiences.projectName}
              </p>
              <p className='text-foreground my-4 max-w-4xl py-2 text-lg'>
                <b>Client: </b>
                {selectedExperiences.client}
              </p>
              <p className='text-foreground my-4 max-w-4xl py-2 text-lg'>
                <b>Scopes: </b>
                <p>{renderScopes(selectedExperiences.scopes)}</p>
              </p>
            </>
          ) : (
            <></>
          )}
        </div>
      </section>
      <SiteFooter />
    </>
  );
}

{
  /* <ul className='grid w-full gap-8 sm:grid-cols-2 lg:px-20'>
            {params.experiences &&
              params.experiences.map((item: any) => {
                logger('wubbalubba experiences');
                return (
                  <li className='flex w-full sm:col-span-2' key={item.id}>
                   
                    <div className='w-full'>
                      <div className='text-arsaranatitle text-3xl font-bold'>
                        {item.experienceTitle}
                      </div>
                      <p className='text-foreground max-w-4xl py-2 text-sm'>
                        {item.serviceDescription}
                      </p>
                      <Image
                        width={150}
                        height={300}
                        className='h-auto w-auto object-cover object-center '
                        src={item.serviceImage || '/images/avatar.png'}
                        alt='photo'
                      />
                    </div>
                  </li>
                );
              })}
          </ul> */
}
