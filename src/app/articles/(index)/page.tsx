/* eslint-disable unused-imports/no-unused-vars */
'use client';

// import { useTheme } from 'next-themes';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

import logger from '@src/lib/logger';

// import { SiteFooter } from '@src/components/layout/site-footer';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ArticlesPage({ params }: any) {
  const { theme } = useTheme();
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
      <section className='mx-auto mb-12 max-w-7xl px-4 sm:px-6 lg:px-4'>
        <article>
          <h2 className='text-2xl font-extrabold text-gray-900'>BLOG</h2>
          <section className='mt-6 grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-1 lg:grid-cols-3'>
            <article className="group relative h-64 w-full overflow-hidden rounded-lg bg-[url('https://images.unsplash.com/photo-1623479322729-28b25c16b011?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80')] bg-cover bg-center shadow-lg  transition duration-300 ease-in-out hover:shadow-2xl">
              <div className='absolute inset-0 bg-black bg-opacity-50 transition duration-300 ease-in-out group-hover:opacity-75'></div>
              <div className='relative flex h-full w-full items-center justify-center px-4 sm:px-6 lg:px-4'>
                <h3 className='text-center'>
                  <a
                    className='text-center text-2xl font-bold text-white'
                    href='#'
                  >
                    <span className='absolute inset-0'></span>
                    Top 10 highest paid programming languages of 2021
                  </a>
                </h3>
              </div>
            </article>
            <article className="group relative h-64 w-full overflow-hidden rounded-lg bg-[url('https://images.unsplash.com/photo-1569012871812-f38ee64cd54c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')] bg-cover bg-center shadow-lg  transition duration-300 ease-in-out hover:shadow-2xl">
              <div className='absolute inset-0 bg-black bg-opacity-50 transition duration-300 ease-in-out group-hover:opacity-75'></div>
              <div className='relative flex h-full w-full items-center justify-center px-4 sm:px-6 lg:px-4'>
                <h3 className='text-center'>
                  <a
                    className='text-center text-2xl font-bold text-white'
                    href='#'
                  >
                    <span className='absolute inset-0'></span>
                    Python Frameworks
                  </a>
                </h3>
              </div>
            </article>
            <article className="group relative h-64 w-full overflow-hidden rounded-lg bg-[url('https://images.unsplash.com/photo-1511376777868-611b54f68947?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80')] bg-cover bg-center shadow-lg  transition duration-300 ease-in-out hover:shadow-2xl">
              <div className='absolute inset-0 bg-black bg-opacity-50 transition duration-300 ease-in-out group-hover:opacity-75'></div>
              <div className='relative flex h-full w-full items-center justify-center px-4 sm:px-6 lg:px-4'>
                <h3 className='text-center'>
                  <a
                    className='text-center text-2xl font-bold text-white'
                    href='#'
                  >
                    <span className='absolute inset-0'></span>
                    The best plugins for Visual Studio Code
                  </a>
                </h3>
              </div>
            </article>
          </section>
        </article>
      </section>
    </>
  );
}
