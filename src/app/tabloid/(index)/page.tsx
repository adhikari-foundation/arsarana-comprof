/* eslint-disable unused-imports/no-unused-vars */
'use client';

// import Link from 'next/link';
import { useQueryState } from 'nuqs';
import { useEffect, useState } from 'react';

// import clsxm from '@src/lib/clsxm';
import logger from '@src/lib/logger';

import { SiteFooter } from '@src/components/layout/site-footer';
import UnstyledLink from '@src/components/links/unstyled-link';
// import ArticlesPage from '../articles/(index)/page';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function TabloidPage({ params }: any) {
  const [newLn, setNewLn] = useQueryState('ln');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <></>;
  }

  logger(params);

  return (
    <>
      <section className='mx-auto mb-12 mt-10 max-w-7xl px-4 sm:px-6 lg:px-4'>
        <article>
          <h2 className='text-arsaranatitle text-2xl font-extrabold'>
            {newLn && newLn.toLowerCase() === 'id'
              ? 'Tabloid Terbaru'
              : 'Latest Tabloid'}
          </h2>
          <section className='mt-6 grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-1 lg:grid-cols-3'>
            {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              params.tabloids.map((tabloid: any, index: number) => {
                const bgimagepath = tabloid?.tabloidFileLocation.replace(
                  'pdf',
                  'png'
                );

                return (
                  <article
                    className='group relative h-64 w-full overflow-hidden rounded-lg bg-cover bg-center shadow-lg  transition duration-300 ease-in-out hover:shadow-2xl'
                    style={{
                      backgroundImage: `url('/tabloid_cover/${bgimagepath}')`,
                    }}
                    key={index}
                  >
                    <div className='absolute inset-0 bg-black bg-opacity-50 transition duration-300 ease-in-out group-hover:opacity-75'></div>
                    <div className='relative flex h-full w-full items-center justify-center px-4 sm:px-6 lg:px-4'>
                      <h3 className='text-center'>
                        <UnstyledLink
                          className='text-center text-2xl font-bold text-white'
                          href={`/files/${tabloid.tabloidFileLocation}`}
                          target='_blank'
                        >
                          <span className='absolute inset-0'></span>
                          {tabloid.tabloidName}
                        </UnstyledLink>
                      </h3>
                    </div>
                  </article>
                );
              })
            }
          </section>
        </article>
      </section>
      <SiteFooter ln={newLn} services={params.services} />
    </>
  );
}
