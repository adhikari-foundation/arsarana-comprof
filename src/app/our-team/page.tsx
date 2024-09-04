/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable unused-imports/no-unused-vars */
'use client';

// import { useTheme } from 'next-themes';
// import { revalidatePath } from 'next/cache';
import Image from 'next/image';
import { useQueryState } from 'nuqs';
import { useEffect, useState } from 'react';

import { SiteFooter } from '@src/components/layout/site-footer';
// import UnstyledLink from '@src/components/links/unstyled-link';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function OurTeamPage({ params }: any) {
  // revalidatePath('/', 'layout');
  const [newLn, setNewLn] = useQueryState('ln');
  // const url = null;
  const [mounted, setMounted] = useState(false);
  const [teamMembers, setTeamMembers] = useState<any>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (params && params.teamMembers) {
      setTeamMembers(params.teamMembers);
    }
  }, [params]);

  if (!mounted || !teamMembers) {
    return <></>;
  }

  return (
    <>
      <section className='mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-4'>
        <div className='pb-12 text-center'>
          <h2 className='text-arsaranatitle mb-4 text-center text-2xl font-bold md:text-4xl'>
            {newLn && newLn.toLowerCase() === 'id' ? 'Tim Kami' : 'Our Team'}
          </h2>
          <p className='text-foreground lg:mx-auto lg:w-8/12'>
            {newLn && newLn.toLowerCase() === 'id'
              ? `ARSARANA didukung oleh tim ahli muda yang dinamis dan berpengalaman luas dalam berbagai proyek infrastruktur transportasi. 
							Dengan keahlian di bidang teknik, manajemen lingkungan, teknologi, dan kebijakan, 
							mereka siap memberikan solusi terbaik untuk setiap tantangan yang dihadapi.`
              : `ARSARANA has a pool of talents consisted of young and dynamic
            experts who have extensive experience to deliver successful
            transportation infrastructure projects with engineering, management
            environment, technology, and policy excellent.`}
          </p>
        </div>

        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3'>
          {teamMembers &&
            teamMembers.map((team: any) => {
              return (
                <div
                  key={team.id}
                  className='sahdow-lg bg-arsaranabackground flex w-full flex-col items-center justify-center overflow-hidden rounded-none'
                >
                  <div>
                    <Image
                      width={150}
                      height={300}
                      className='h-auto w-full object-cover object-center'
                      src={
                        `/images/teams/${team.id}.png` || '/images/avatar.png'
                      }
                      alt='photo'
                    />
                  </div>
                  <div className='py-8 text-center sm:py-6'>
                    <p className='text-arsaranatitle mb-2 text-xl font-bold'>
                      {team.fullname}
                    </p>
                    <p className='text-foreground text-base font-normal'>
                      {newLn && newLn.toLowerCase() === 'id'
                        ? team.posisi
                        : team.position}
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
      </section>
      <SiteFooter ln={newLn} services={params.services} />
    </>
  );
}
