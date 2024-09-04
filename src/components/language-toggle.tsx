'use client';

import { GB, ID } from 'country-flag-icons/react/3x2';
import { useQueryState } from 'nuqs';
import * as React from 'react';

import { Button } from '@src/components/ui/default-ui-button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@src/components/ui/dropdown-menu';

export function LanguageToggle() {
  const [newLn, setNewLn] = useQueryState('ln');

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' size='sm' className='h-8 w-8 px-0'>
          {newLn && newLn.toLowerCase() === 'id' ? (
            <ID
              title='Indonesia'
              className='text-arsaranatitle rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0'
            />
          ) : (
            <GB
              title='English'
              className='text-arsaranatitle rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0'
            />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end' className='bg-background'>
        <DropdownMenuItem
          onClick={() => {
            setNewLn('id');
          }}
        >
          {/* <Icons.sun className='text-arsaranatitle mr-2 h-4 w-4' /> */}
          <ID title='Indonesia' className='text-arsaranatitle mr-2 h-4 w-4' />
          <span className='text-arsaranatitle'>Indonesia</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            setNewLn('en');
          }}
        >
          <GB title='English' className='text-arsaranatitle mr-2 h-4 w-4' />
          <span className='text-arsaranatitle'>English</span>
        </DropdownMenuItem>
        {/* <DropdownMenuItem onClick={() => setTheme('system')}>
          <Icons.laptop className='mr-2 h-4 w-4' />
          <span>System</span>
        </DropdownMenuItem> */}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
