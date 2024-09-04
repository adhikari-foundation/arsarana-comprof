/* eslint-disable @typescript-eslint/no-explicit-any */
import { dashboardConfig } from '@src/config/dashboard';
import { Metadata } from 'next';

// import logger from '@src/lib/logger';
import { notion } from '@src/lib/notion';

import { MainNav } from '@src/components/layout/navigation/topnav/main-nav';

import { env } from '@/env.mjs';
// import { SiteFooter } from '@src/components/layout/site-footer';

interface ArticlesPageProps {
  children: React.ReactNode;
  params: any;
}

export const metadata: Metadata = {
  title: 'Home',
  description: 'Arsarana Company Profile Website',
};

function getToday(datestring: any) {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  let date = new Date();

  if (datestring) {
    date = new Date(datestring);
  }

  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  const today = `${month} ${day}, ${year}`;

  return today;
}

const getPageMetaData = (post: any) => {
  const getTags = (tags: any) => {
    const allTags = tags.map((tag: any) => {
      return tag.name;
    });

    return allTags;
  };

  return {
    id: post.id,
    title: post.properties.Name.title[0].plain_text,
    tags: getTags(post.properties.Tags.multi_select),
    description: post.properties.Description.rich_text[0].plain_text,
    date: getToday(post.properties.Date.last_edited_time),
    slug: post.properties.Slug.rich_text[0].plain_text,
    coverImage: post.properties.CoverImage.files[0].file.url,
  };
};

const getAllPublished = async () => {
  const posts = await notion.databases.query({
    database_id: env.NOTION_ARTICLE_DB_ID,
    filter: {
      property: 'Published',
      checkbox: {
        equals: true,
      },
    },
    sorts: [
      {
        property: 'Date',
        direction: 'descending',
      },
    ],
  });

  const allPosts = posts.results;

  return allPosts.map((post) => {
    return getPageMetaData(post);
  });
};

export default async function ArticlesLayout({
  children,
  params,
}: ArticlesPageProps) {
  const gg = await getAllPublished();

  params.pages = gg;
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
