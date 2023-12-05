/* eslint-disable @typescript-eslint/no-explicit-any */
import { notion } from '@src/lib/notion';

import { env } from '@/env.mjs';

const getPageMetaData = (tabloid: any) => {
  // logger(tabloid.properties);
  return {
    tabloidName: tabloid.properties.Name.title[0]?.text.content,
    tabloidEdition: tabloid.properties.Edition.date?.start,
    tabloidFileLocation:
      tabloid.properties.TabloidFileName.rich_text[0]?.text.content,
    tabloidCoverImage: tabloid.properties.CoverImage.files[0]?.file.url,
  };
};

export const getAllTabloids = async () => {
  const tabloids = await notion.databases.query({
    database_id: env.NOTION_TABLOID_DB_ID,

    sorts: [
      {
        property: 'Edition',
        direction: 'descending',
      },
    ],
  });

  const allTabloids = tabloids.results;

  return allTabloids.map((tabloid) => {
    return getPageMetaData(tabloid);
  });
};
