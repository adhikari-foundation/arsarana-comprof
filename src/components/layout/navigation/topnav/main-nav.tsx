'use client';

// import { siteConfig } from '@src/config/site';
import Image from 'next/image';
import { useSelectedLayoutSegment } from 'next/navigation';
import { useTheme } from 'next-themes';
import { useQueryState } from 'nuqs';
import * as React from 'react';

// import logger from '@src/lib/logger';
import { clsxm } from '@src/lib/utils';

import { Icons } from '@src/components/default-icons';
import { LanguageToggle } from '@src/components/language-toggle';
import UnstyledLink from '@src/components/links/unstyled-link';

// import { ModeToggle } from '@src/components/mode-toggle';
import { MobileNav } from '../mobilenav/mobile-nav';

// import { siteConfig } from "@src/config/site"
import { MainNavItem } from '@src/types';

import logo_kuning from '~/icons/arsarana_kuning.png';
import logo from '~/icons/logo-arsarana.jpg';

interface MainNavProps {
  items?: MainNavItem[];
  children?: React.ReactNode;
}

export function MainNav({ items, children }: MainNavProps) {
  const { theme } = useTheme();
  const segment = useSelectedLayoutSegment();
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);

  // eslint-disable-next-line unused-imports/no-unused-vars
  const [ln, setLn] = useQueryState('ln');

  // logger(`wew, new ln in navigation: ${ln}`);

  return (
    <div className='flex w-full items-center justify-between'>
      <UnstyledLink
        href={`/?ln=${ln}`}
        className='hidden items-center space-x-2 md:flex'
      >
        <Image
          src={theme === 'dark' ? logo_kuning : logo}
          alt='logo'
          className='h-16 w-16'
          priority
        />
        {/* <span className='hidden font-bold sm:inline-block'>
          {siteConfig.name}
        </span> */}
      </UnstyledLink>
      <div className='flex flex-row gap-6'>
        {items?.length ? (
          <nav className='hidden gap-6 md:flex'>
            {items?.map((item, index) => (
              <UnstyledLink
                key={index}
                href={item.disabled ? '#' : `${item.href}?ln=${ln}`}
                className={clsxm(
                  'hover:text-arsaranatitle/80 text-arsaranatitle flex items-center text-lg font-medium transition-colors sm:text-sm',
                  item.href.startsWith(`/${segment}`)
                    ? 'text-arsaranatitle'
                    : 'text-arsaranatitle',
                  item.disabled &&
                    'text-arsaranatitle cursor-not-allowed opacity-80'
                )}
              >
                {ln && ln.toLowerCase() === 'id' ? item.title_id : item.title}
              </UnstyledLink>
            ))}
          </nav>
        ) : null}
        <LanguageToggle />
      </div>

      <button
        className='flex items-center space-x-2 md:hidden'
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        {showMobileMenu ? <Icons.close /> : <Icons.logo />}
        <span className='font-bold'>Menu</span>
      </button>
      {showMobileMenu && items && (
        <MobileNav items={items}>{children}</MobileNav>
      )}
    </div>
  );
}
