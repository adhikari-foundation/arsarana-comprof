import { dashboardConfig } from '@src/config/dashboard';
import { Metadata } from 'next';

import { MainNav } from '@src/components/layout/navigation/topnav/main-nav';
// import { SiteFooter } from '@src/components/layout/site-footer';

interface CareerPageProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Arsarana Company Profile Website',
};

export default async function CareerLayout({ children }: CareerPageProps) {
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
