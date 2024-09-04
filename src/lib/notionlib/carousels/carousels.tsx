/* eslint-disable @typescript-eslint/no-explicit-any */
// import logger from '@src/lib/logger';
import { notion } from '@src/lib/notion';

import { env } from '@/env.mjs';
// import logger from '@src/lib/logger';

const getPageMetaData = (carousel: any) => {
  const objectcarousel = {
    // id: service.id,
    id: carousel.properties.Id.title[0].plain_text,
    title: carousel.properties.Title.rich_text[0].plain_text,
    judul: carousel.properties.Judul.rich_text[0].plain_text,
    imagePath: carousel.properties.ImagePath.rich_text[0].plain_text,
  };
  // logger(experience.properties.ExperienceBottomDescription);
  return objectcarousel;
};

export const getAllCarousels = async () => {
  const carousels = await notion.databases.query({
    database_id: env.NOTION_CAROUSELS_DB_ID,

    sorts: [
      {
        property: 'Id',
        direction: 'ascending',
      },
    ],
  });

  const allCarousels = carousels.results;
  // logger(allExperiences);

  return allCarousels.map((carousel) => {
    return getPageMetaData(carousel);
  });
};
