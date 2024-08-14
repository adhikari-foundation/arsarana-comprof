import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type ImageCardProps = {
  imagelocation?: string;
  title?: string;
  description?: string;
  buttontitle?: string;
  href?: string;
} & React.ComponentPropsWithoutRef<'div'>;

const truncateText = (text: string | undefined, maxLength: number) => {
  if (!text) return '';
  return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
};

export default function ImageCard({
  imagelocation,
  title,
  description,
  buttontitle,
  href,
}: ImageCardProps) {
  return (
    <div className='flex h-96 w-80 flex-col overflow-hidden rounded-lg bg-white shadow-md dark:bg-neutral-700'>
      <div className='h-48 w-full'>
        <Image
          className='h-full w-full object-cover'
          src={imagelocation ?? ''}
          width={320}
          height={192}
          alt={title || 'Card Image'}
        />
      </div>
      <div className='flex h-full flex-col p-4'>
        <h5 className='mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50'>
          {title}
        </h5>
        <p className='mb-4 text-base text-neutral-600 dark:text-neutral-200'>
          {truncateText(description, 100)}
        </p>
        {buttontitle && (
          <Link href={href ?? '/'}>
            <a>
              <button
                type='button'
                className='bg-primary hover:bg-primary-600 focus:bg-primary-600 active:bg-primary-700 inline-block rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out'
              >
                {buttontitle}
              </button>
            </a>
          </Link>
        )}
      </div>
    </div>
  );
}
