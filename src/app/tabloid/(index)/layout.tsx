import { dashboardConfig } from '@src/config/dashboard';
import { Metadata } from 'next';

import { getAllServices } from '@src/lib/notionlib/services/services';
// import logger from '@src/lib/logger';
import { getAllTabloids } from '@src/lib/notionlib/tabloids/tabloid';

import { MainNav } from '@src/components/layout/navigation/topnav/main-nav';

// import { SiteFooter } from '@src/components/layout/site-footer';

interface TabloidPageProps {
  children: React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params: any;
}

export const metadata: Metadata = {
  title: 'Tabloid',
  description: 'Tabloid company profile Arsarana',
};

export default async function TabloidLayout({
  children,
  params,
}: TabloidPageProps) {
  const tabloids = await getAllTabloids();
  const services = await getAllServices();

  params.services = services;
  params.tabloids = tabloids;
  return (
    <>
      <div className='flex min-w-full flex-col items-center justify-between'>
        <header className='bg-arsaranabackground sticky top-0 z-40 min-w-full shadow-md'>
          <div className='mx-8 flex h-16 items-center py-6 md:mx-10 lg:mx-12'>
            <MainNav items={dashboardConfig.mainNav} />
          </div>
        </header>
        <main className='bg-arsaranabackground text-foreground flex w-full flex-col'>
          {children}
        </main>
      </div>
    </>
  );
}
