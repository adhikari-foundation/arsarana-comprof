import { DashboardConfig } from '@src/types';

export const dashboardConfig: DashboardConfig = {
  mainNav: [
    // {
    //   title: 'About Us',
    //   href: '/about-us',
    //   disabled: true,
    // },
    // {
    //   title: 'Our Services',
    //   href: '/',
    //   disabled: true,
    // },
    {
      title: 'Our Team',
      title_id: 'Tim Kami',
      href: '/our-team',
      disabled: false,
    },
    {
      title: 'Services',
      title_id: 'Servis',
      href: '/services',
      disabled: false,
    },
    {
      title: 'Experiences',
      title_id: 'Pengalaman',
      href: '/experiences',
      disabled: false,
    },
    {
      title: 'Careers',
      title_id: 'Karir',
      href: '/careers',
      disabled: false,
    },
    {
      title: 'Tabloid',
      title_id: 'Tabloid',
      href: '/tabloid',
    },
    {
      title: 'Contact Us',
      title_id: 'Kontak',
      href: '/contact',
    },
    {
      title: 'Profile',
      title_id: 'Profil',
      href: '/profiles',
    },
  ],
};
