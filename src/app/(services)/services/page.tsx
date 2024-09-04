/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable unused-imports/no-unused-vars */
'use client';

// import { useTheme } from 'next-themes';
// import Image from 'next/image';
import { isParamValidNumber } from '@utils/params-wildcard-utils';
import clsx from 'clsx';
// import { revalidatePath } from 'next/cache';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { useQueryState } from 'nuqs';
import { useEffect, useState } from 'react';

import clsxm from '@src/lib/clsxm';

// import logger from '@src/lib/logger';
import { SiteFooter } from '@src/components/layout/site-footer';
import Typography from '@src/components/typography/default-typography';
// import IconButton from '@src/components/buttons/icon-button';
import { Button } from '@src/components/ui/default-ui-button';
// import UnstyledLink from '@src/components/links/unstyled-link';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function OurServicesPage({ params }: any) {
  // revalidatePath('/', 'page');
  const [pageLn, setPageLn] = useQueryState('ln');
  // const url = null;

  const searchParams = useSearchParams();

  let id = searchParams.get('id');
  id = isParamValidNumber(
    id ?? 0,
    0,
    params?.services?.length ? params.services.length - 1 : 7,
    0
  );

  const [mounted, setMounted] = useState(false);
  const [selectedService, setSelectedService] = useState<any | null>(null);
  // logger(selectedService);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!selectedService && params?.services?.length > 0) {
      setSelectedService(params.services[id ?? 0]);
    }
  }, [params, selectedService, id]);

  if (!mounted || !params?.services) {
    return <></>;
  }

  // logger(params.services);

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
                    {pageLn && pageLn.toLowerCase() === 'id'
                      ? 'SERVIS KAMI'
                      : 'OUR SERVICES'}
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='mb-10 flex h-full w-full flex-row flex-wrap gap-8 bg-slate-200 px-10 py-10'>
        {params.services &&
          params.services.map((item: any) => {
            return (
              <Button
                key={item.id}
                className={clsx(
                  selectedService.id === item.id
                    ? 'bg-foreground text-background'
                    : 'bg-arsaranabackground text-arsaranatitle hover:text-background'
                )}
                onClick={() => {
                  setSelectedService(item);
                }}
              >
                {pageLn && pageLn.toLowerCase() === 'id'
                  ? item.namaServis
                  : item.serviceName}
              </Button>
            );
          })}
      </section>

      <section className='container'>
        <div className='mb-32 w-full'>
          {selectedService ? (
            <>
              <div className='text-arsaranatitle text-3xl font-bold'>
                {pageLn && pageLn.toLowerCase() === 'id'
                  ? selectedService.namaServis
                  : selectedService.serviceName}
              </div>
              <p className='text-foreground my-4 max-w-4xl py-2 text-lg'>
                {pageLn && pageLn.toLowerCase() === 'id'
                  ? selectedService.deskripsiServis
                  : selectedService.serviceDescription}
              </p>
              <Image
                width={600}
                height={800}
                // fill
                // objectFit='none'
                className='bg-foreground h-auto w-auto'
                src={
                  `/images/services/${
                    pageLn && pageLn.toLowerCase() === 'id'
                      ? selectedService.namaServis
                      : selectedService.serviceName
                  }.png` || '/images/avatar.png'
                }
                alt='photo'
              />
              <p className='text-foreground my-4 max-w-4xl py-2 text-lg'>
                {pageLn && pageLn.toLowerCase() === 'id'
                  ? selectedService.deskripsiBawahServis
                  : selectedService.serviceBottomDescription}
              </p>
            </>
          ) : (
            <></>
          )}
        </div>
      </section>
      <SiteFooter ln={pageLn} services={params.services} />
    </>
  );
}

{
  /* <ul className='grid w-full gap-8 sm:grid-cols-2 lg:px-20'>
            {params.services &&
              params.services.map((item: any) => {
                logger('wubbalubba services');
                return (
                  <li className='flex w-full sm:col-span-2' key={item.id}>
                   
                    <div className='w-full'>
                      <div className='text-arsaranatitle text-3xl font-bold'>
                        {item.serviceName}
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
