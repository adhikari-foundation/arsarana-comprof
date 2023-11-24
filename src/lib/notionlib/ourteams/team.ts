/* eslint-disable @typescript-eslint/no-explicit-any */
import { notion } from '@src/lib/notion';

import { env } from '@/env.mjs';

const getPageMetaData = (team: any) => {
  return {
    id: team.id,
    fullname: team.properties.Name.title[0].plain_text,
    // description: post.properties.Id.number,
    position: team.properties.Position.rich_text[0].plain_text,
    positionExtra: team.properties.PositionExtra.rich_text[0]?.plain_text,
    profileImage: team.properties.Photo.files[0]?.file.url,
  };
};

export const getAllTeams = async () => {
  const teams = await notion.databases.query({
    database_id: env.NOTION_TEAM_DB_ID,

    sorts: [
      {
        property: 'Id',
        direction: 'ascending',
      },
    ],
  });

  const allTeams = teams.results;

  return allTeams.map((team) => {
    return getPageMetaData(team);
  });
};
