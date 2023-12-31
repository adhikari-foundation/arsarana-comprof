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
      href: '/our-team',
      disabled: false,
    },
    {
      title: 'Careers',
      href: '/careers',
      disabled: false,
    },
    {
      title: 'Tabloid',
      href: '/tabloid',
    },
    {
      title: 'Services',
      href: '/services',
      disabled: false,
    },
    {
      title: 'Contact Us',
      href: '/contact',
    },
  ],
  mainNavAuth: [
    {
      title: 'Account',
      href: '/user',
    },
    {
      title: 'Identities',
      href: '/identities',
    },
    {
      title: 'Documentation',
      href: '/docs',
      disabled: true,
    },
    {
      title: 'Support',
      href: '/support',
      disabled: true,
    },
  ],
  sidebarNav: [
    {
      category: 'Pages',
      catdesc:
        'Manage your posts here by select each category or type of the pages.',
      items: [
        {
          title: 'Public for everyone',
          href: '/dashboard',
          icon: 'post',
        },
        {
          title: 'Shared to you',
          href: '/dashboard/shared',
          icon: 'sharedfile',
        },
        {
          title: 'Private for you',
          href: '/dashboard/private',
          icon: 'privatepost',
        },
        {
          title: 'Page requests',
          href: '/dashboard/requests',
          icon: 'notifications',
        },
      ],
    },
  ],
  identitiesNav: [
    {
      category: 'Identities',
      catdesc: 'Manage your identities here',
      items: [
        {
          title: 'List identities',
          href: '/identities',
          icon: 'post',
        },
        {
          title: 'Identity request',
          href: '/identities/requests',
          icon: 'sharedfile',
          disabled: true,
        },
        {
          title: 'Request history',
          href: '/identities/requests/history',
          icon: 'privatepost',
          disabled: true,
        },
      ],
    },
  ],
  identitiesIdNav: [
    {
      category: 'Your identity',
      catdesc: 'Here is your identity info',
      items: [
        {
          title: 'Identity info',
          href: '/identities/[identitiesid]',
          icon: 'post',
        },
      ],
    },
  ],
  diariesNav: [
    {
      category: 'Diaries',
      catdesc: 'Manage your diaries here',
      items: [
        {
          title: 'List identities',
          href: '/identities',
          icon: 'post',
        },
        {
          title: 'Identity request',
          href: '/identities/requests',
          icon: 'sharedfile',
          disabled: true,
        },
        {
          title: 'Request history',
          href: '/identities/requests/history',
          icon: 'privatepost',
          disabled: true,
        },
      ],
    },
  ],
  userNav: [
    {
      category: 'Account',
      catdesc: 'Manage your account here',
      items: [
        {
          title: 'Your accounts',
          href: '/user',
          icon: 'user',
        },
        {
          title: 'Account relationships',
          href: '/user/relationships',
          icon: 'users',
          disabled: true,
        },
      ],
    },
  ],
};
