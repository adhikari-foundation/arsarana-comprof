/* eslint-disable @typescript-eslint/no-explicit-any */
import logger from '@src/lib/logger';
import { notion } from '@src/lib/notion';

import { env } from '@/env.mjs';

const getPageMetaData = (team: any) => {
  const objectteam = {
    id: team.id,
    fullname: team.properties.Name.title[0].plain_text,
    // description: post.properties.Id.number,
    position: team.properties.Position.rich_text[0].plain_text,
    positionExtra: team.properties.PositionExtra.rich_text[0]?.plain_text,
    profileImage: team.properties.Photo.files[0]?.file.url,
  };
  logger(objectteam);
  return objectteam;
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

export async function getStaticTeams() {
  return {
    teamMembers: [
      {
        id: 'a1a12cda-4438-429b-a985-a16eebd0d61f',
        fullname: 'Muhammad Saifullah',
        position: 'Transport and Financial Specialist',
        positionExtra: 'Commissioner',
        profileImage:
          'https://prod-files-secure.s3.us-west-2.amazonaws.com/a2950181-f083-4232-a670-bc4d2b616bfe/fe76b5dd-0ef5-4a64-8dd1-dc6d22bb96d0/saifullah-bg-changed.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240814T071259Z&X-Amz-Expires=3600&X-Amz-Signature=f88433b328d78096d00562579aaf187d54033a12fb3e753bbd50944e84d06b6e&X-Amz-SignedHeaders=host&x-id=GetObject',
      },
      {
        id: '50d58967-b1a1-4373-98c4-317b96eb26aa',
        fullname: 'Noviana',
        position: 'PPP and Economic Specialist',
        positionExtra: 'President Director',
        profileImage:
          'https://prod-files-secure.s3.us-west-2.amazonaws.com/a2950181-f083-4232-a670-bc4d2b616bfe/883e2890-3d78-4685-b53d-209e62684991/WhatsApp_Image_2023-11-03_at_12.14.40.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240814T071259Z&X-Amz-Expires=3600&X-Amz-Signature=ed6d4ae8d71660946484a6ce0bb2ad8e20628f292870f87400694abee31ee122&X-Amz-SignedHeaders=host&x-id=GetObject',
      },
      {
        id: 'a05ce6cc-80da-41ff-b636-9402b8ccacf9',
        fullname: 'Aris Wibowo',
        position: 'Transport Engineering Specialist',
        positionExtra: 'Director',
        profileImage:
          'https://prod-files-secure.s3.us-west-2.amazonaws.com/a2950181-f083-4232-a670-bc4d2b616bfe/132df13b-679b-437e-bd38-98a0ea65234c/aris-wibowo-bg-changed.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240814T071259Z&X-Amz-Expires=3600&X-Amz-Signature=d31a774692ee813367cf4aceac5c48e6bdcf46e41293c757f518aba7f96e1c4b&X-Amz-SignedHeaders=host&x-id=GetObject',
      },
      {
        id: '07b40d2f-a1b5-49ed-b71d-a8bb0869c655',
        fullname: 'Stefanus Ayal',
        position: 'Transport Engineering Specialist',
        profileImage:
          'https://prod-files-secure.s3.us-west-2.amazonaws.com/a2950181-f083-4232-a670-bc4d2b616bfe/6dd1137e-9530-4df3-8096-b71ce3d45c06/Screenshot_2023-12-04_at_22.35.43.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240814T071259Z&X-Amz-Expires=3600&X-Amz-Signature=9b10c8481b963562216086090b9a03ba9865ec862cb460a1a27e00b60af079d3&X-Amz-SignedHeaders=host&x-id=GetObject',
      },
      {
        id: '314ae44c-6dc6-4bff-bab3-6334ee8fb71a',
        fullname: 'Gito Sugiyanto',
        position: 'Transport Engineering Specialist',
        profileImage:
          'https://prod-files-secure.s3.us-west-2.amazonaws.com/a2950181-f083-4232-a670-bc4d2b616bfe/341f2228-1e60-4af2-be46-e5bbec60f6f9/Screenshot_2023-12-04_at_22.32.37.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240814T071259Z&X-Amz-Expires=3600&X-Amz-Signature=5b3917827f4ffcc09039c3d49a8dccc17f0b65a283fef53792a3325785daaeab&X-Amz-SignedHeaders=host&x-id=GetObject',
      },
      {
        id: '45db5f77-236f-4308-9fc5-9e6962ac86fe',
        fullname: 'Titis Efrindu',
        position: 'Transport System Specialist',
        profileImage:
          'https://prod-files-secure.s3.us-west-2.amazonaws.com/a2950181-f083-4232-a670-bc4d2b616bfe/b3426c43-292e-41a3-af6d-fcc92d78f57a/Screenshot_2023-12-04_at_22.32.44.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240814T071259Z&X-Amz-Expires=3600&X-Amz-Signature=153c2b13159e9c9ee63a3a2b000c3e01f7a2e31f7e9dfc9894f3de533968dedd&X-Amz-SignedHeaders=host&x-id=GetObject',
      },
      {
        id: '7b7a35d4-da7e-4168-bb91-c5b6934fb673',
        fullname: 'Fitri Fauziah',
        position: 'Junior Transport Engineer',
        profileImage:
          'https://prod-files-secure.s3.us-west-2.amazonaws.com/a2950181-f083-4232-a670-bc4d2b616bfe/e36ee2ce-b6ba-4060-a5db-a0a04b6ed001/Screenshot_2023-12-04_at_22.32.52.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240814T071259Z&X-Amz-Expires=3600&X-Amz-Signature=d5cb408cbcf08f595f701105a34af5df2e1f7931c67221db1e5538cb5c03feaf&X-Amz-SignedHeaders=host&x-id=GetObject',
      },
      {
        id: '0f42ea7c-8815-4c1f-a44b-609e3c10ea2c',
        fullname: 'Teguh Wiji',
        position: 'Junior Transport Engineer',
        profileImage:
          'https://prod-files-secure.s3.us-west-2.amazonaws.com/a2950181-f083-4232-a670-bc4d2b616bfe/ff48172a-246d-4da8-be1f-bb53bb337603/Screenshot_2023-12-04_at_22.32.58.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240814T071259Z&X-Amz-Expires=3600&X-Amz-Signature=e01e18d0afe16e60185f71138133e5e747df8c365f91cffa51ffc825fb5f33c8&X-Amz-SignedHeaders=host&x-id=GetObject',
      },
      {
        id: '687a5407-bba1-4251-8f0c-72aa23468fa5',
        fullname: 'Wahyu Wi',
        position: 'Junior Transport Engineer',
        profileImage:
          'https://prod-files-secure.s3.us-west-2.amazonaws.com/a2950181-f083-4232-a670-bc4d2b616bfe/f94cc990-8365-41d1-935a-5874d9f0e442/Screenshot_2023-12-04_at_22.32.30.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240814T071259Z&X-Amz-Expires=3600&X-Amz-Signature=12c33d452f2f9954bba287ca559c99642a776f9763b049a32f564a64d0d86543&X-Amz-SignedHeaders=host&x-id=GetObject',
      },
    ],
  };
}
