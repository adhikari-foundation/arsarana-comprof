'use client';

import { US } from 'country-flag-icons/react/3x2';
import { useTheme } from 'next-themes';
import * as React from 'react';

import { Icons } from '@src/components/default-icons';
import { Button } from '@src/components/ui/default-ui-button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@src/components/ui/dropdown-menu';

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' size='sm' className='h-8 w-8 px-0'>
          <Icons.sun className='text-arsaranatitle rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
          <Icons.moon className='text-arsaranatitle absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
          <span className='sr-only'>Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end' className='bg-background'>
        <DropdownMenuItem onClick={() => setTheme('light')}>
          {/* <Icons.sun className='text-arsaranatitle mr-2 h-4 w-4' /> */}
          <US
            title='United States'
            className='text-arsaranatitle mr-2 h-4 w-4'
          />
          <span className='text-arsaranatitle'>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>
          <Icons.moon className='text-arsaranatitle mr-2 h-4 w-4' />
          <span className='text-arsaranatitle'>Dark</span>
        </DropdownMenuItem>
        {/* <DropdownMenuItem onClick={() => setTheme('system')}>
          <Icons.laptop className='mr-2 h-4 w-4' />
          <span>System</span>
        </DropdownMenuItem> */}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
