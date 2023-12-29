/* eslint-disable @typescript-eslint/no-explicit-any */
// import logger from '@src/lib/logger';
import { notion } from '@src/lib/notion';

import { env } from '@/env.mjs';

const getPageMetaData = (service: any) => {
  const objectservice = {
    // id: service.id,
    id: service.properties.id.title[0].plain_text,
    serviceDescription:
      service.properties.ServiceDescription.rich_text[0].plain_text,
    serviceBottomDescription:
      service.properties.ServiceBottomDescription.rich_text[0].plain_text,
    serviceName: service.properties.ServiceName.rich_text[0].plain_text,
    serviceImage: service.properties.ServiceImage.files[0]?.file.url,
  };
  // logger(service);
  return objectservice;
};

export const getAllServices = async () => {
  const services = await notion.databases.query({
    database_id: env.NOTION_SERVICES_DB_ID,

    sorts: [
      {
        property: 'id',
        direction: 'ascending',
      },
    ],
  });

  const allServices = services.results;
  // logger(allServices);

  return allServices.map((service) => {
    return getPageMetaData(service);
  });
};
