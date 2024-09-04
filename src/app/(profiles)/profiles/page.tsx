/* eslint-disable unused-imports/no-unused-vars */
'use client';

// import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useQueryState } from 'nuqs';
import { useEffect, useState } from 'react';

import { Icons } from '@src/components/default-icons';
import { SiteFooter } from '@src/components/layout/site-footer';
import UnstyledLink from '@src/components/links/unstyled-link';
// import UnstyledLink from '@src/components/links/unstyled-link';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ProfilesPage({ params }: any) {
  const [mounted, setMounted] = useState(false);
  const [newLn, setNewLn] = useQueryState('ln');

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <></>;
  }

  return (
    <>
      <section className='body-font relative text-gray-600'>
        <div className='container mx-auto flex items-center justify-center px-5 py-24'>
          <div className='flex min-h-[50vh] w-[100%] flex-col items-center justify-center lg:w-[60%]'>
            <Image
              className='rounded-small mx-auto h-64 w-64 object-cover md:h-40 md:w-40 lg:h-[60%] lg:w-[60%]'
              src='/images/profiles/2023.png'
              alt='arsarana company profiles'
              loading='lazy'
              width='640'
              height='805'
              style={{ objectFit: 'contain' }}
            />
            <>
              <div className='bg-arsaranabackground w-full'>
                <div className='mx-auto max-w-2xl py-10 text-white'>
                  <div className='text-center'>
                    <h3 className='text-arsaranatitleinverse mb-3 text-3xl'>
                      {' '}
                      {newLn && newLn.toLowerCase() === 'id'
                        ? 'Unduh Profil Kami'
                        : 'Download Our Profile '}
                    </h3>
                    <p className='text-arsaranatitleinverse'>
                      {' '}
                      {newLn && newLn.toLowerCase() === 'id'
                        ? 'Pelajari lebih lanjut mengenai profil perusahaan kami dengan menekan tombol unduh dibawah '
                        : 'See more on our company profile by clicking download button below '}
                    </p>
                    <div className='my-10 flex justify-center '>
                      <UnstyledLink
                        className='border-background bg-foreground text-yellowmain hover:text-arsaranatitleinverse hover:bg-background hover:border-foreground mx-2 flex w-auto items-center rounded-lg border px-4 py-2 hover:cursor-pointer'
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
                          <p className='text-lg font-bold'>
                            {newLn && newLn.toLowerCase() === 'id'
                              ? 'Unduh dalam'
                              : 'Download on '}
                          </p>
                          <p className='text-sm font-bold md:text-base'>
                            {' '}
                            PDF{' '}
                          </p>
                        </div>
                        {/* </UnstyledLink> */}
                      </UnstyledLink>
                    </div>
                  </div>
                </div>
              </div>
            </>
          </div>
        </div>
      </section>
      <SiteFooter ln={newLn} services={params.services} />
    </>
  );
}
