/* eslint-disable @typescript-eslint/no-explicit-any */
// import logger from '@src/lib/logger';
// import logger from '@src/lib/logger';
import { notion } from '@src/lib/notion';

import { env } from '@/env.mjs';

const getPageMetaData = (service: any) => {
  // logger(service);
  const objectservice = {
    // id: service.id,
    id: service.properties.id.title[0].plain_text,
    serviceDescription:
      service.properties.ServiceDescription.rich_text[0].plain_text,
    serviceBottomDescription:
      service.properties.ServiceBottomDescription.rich_text[0].plain_text,
    serviceName: service.properties.ServiceName.rich_text[0].plain_text,
    serviceImage: service.properties.ServiceImage.files[0]?.file.url,
    deskripsiServis: service.properties.DeskripsiServis.rich_text[0].plain_text,
    deskripsiBawahServis:
      service.properties.DeskripsiBawahServis.rich_text[0].plain_text,
    namaServis: service.properties.NamaServis.rich_text[0].plain_text,
    numbering: service.properties.Numbering.rich_text[0].plain_text,
    href: service.properties.Href.rich_text[0].plain_text,
  };
  //
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

export async function getStaticServices() {
  return [
    {
      id: '1',
      serviceDescription:
        'ARSARANA memiliki tim yang siap berkontribusi pada penyusunan desain infrastruktur transportasi seperti jalan raya, jalan rel, terminal, pelabuhan, dan bandar udara.',
      serviceBottomDescription:
        'ARSARANA memiliki jaringan tim konsultan yang saling mensupport pada kegiatan-kegiatan yang kompleks dan memerlukan kebutuhan pakar di berbagai bidang.',
      serviceName: 'Transport Engineering Design',
      serviceImage:
        'https://prod-files-secure.s3.us-west-2.amazonaws.com/a2950181-f083-4232-a670-bc4d2b616bfe/740410ac-83aa-4855-b7b3-098cc8d69022/Transport_Engineering_Design.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240814T071535Z&X-Amz-Expires=3600&X-Amz-Signature=98d59c025443803303aed80cceb17d9ae370e2e0e94b870db4e59aee03d6a686&X-Amz-SignedHeaders=host&x-id=GetObject',
    },
    {
      id: '2',
      serviceDescription:
        'ARSARANA memiliki tim yang siap berkontribusi pada penyusunan studi kelayakan infrastruktur transportasi seperti jalan raya, jalan rel, terminal, pelabuhan, dan bandar udara.',
      serviceBottomDescription:
        'ARSARANA memiliki jaringan tim konsultan yang saling mensupport pada kegiatan-kegiatan yang kompleks dan memerlukan kebutuhan pakar di berbagai bidang.',
      serviceName: 'Transport Feasibility Study',
      serviceImage:
        'https://prod-files-secure.s3.us-west-2.amazonaws.com/a2950181-f083-4232-a670-bc4d2b616bfe/66187a25-f9b5-4a86-b552-1fca97852bfb/Transport_Feasibility_Study.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240814T071535Z&X-Amz-Expires=3600&X-Amz-Signature=b4a48b6806f7b4d17860223a9aa8389efc6a06536f4d62572d234c0778ba1243&X-Amz-SignedHeaders=host&x-id=GetObject',
    },
    {
      id: '3',
      serviceDescription:
        'ARSARANA memiliki tim yang siap berkontribusi pada sistem manajement transportasi (TMS) seperti jalan raya, jalan rel, terminal, pelabuhan, dan bandar udara.',
      serviceBottomDescription:
        'Setelah proses implementasi sistem manajemen transportasi, dilakukan integrasi TMS dengan sistem yang sudah tersedia untuk memastikan keberhasilan dan efisiensi dari adanya sistem tersebut. Kemudian, peningkatan kapasitas sumber daya manusia (SDM) melalui pelatihan guna memastikan SDM dapat memanfaatkan sistem dan fitur secara optimal (efektif dan efisien).\n\nARSARANA memiliki jaringan tim konsultan yang saling mensupport pada kegiatan-kegiatan yang kompleks dan memerlukan kebutuhan pakar di berbagai bidang.',
      serviceName: 'Transport Management System',
      serviceImage:
        'https://prod-files-secure.s3.us-west-2.amazonaws.com/a2950181-f083-4232-a670-bc4d2b616bfe/1813f0e7-7839-4822-a399-c876901d2e90/Transport_Management_System.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240814T071535Z&X-Amz-Expires=3600&X-Amz-Signature=3c99bc4655a1ecdb99fb964291535543f1df6d70ba6068d54773e5972068979a&X-Amz-SignedHeaders=host&x-id=GetObject',
    },
    {
      id: '4',
      serviceDescription:
        'ARSARANA memiliki tim yang siap berkontribusi pada kegiatan survey dan GIS seperti survey pada jalan raya, jalan rel, terminal, pelabuhan, dan bandar udara.',
      serviceBottomDescription:
        'Survey merupakan alat yang sangat penting untuk pengumpulan data. Kualitas data yang baik dan teknik survey yang sesuai sangat membantu dalam merumuskan kebijaka transportasi dan memitigasi permasalahan transportasi yang ada.\n\nARSARANA memiliki jaringan tim konsultan yang saling mensupport pada kegiatan-kegiatan yang kompleks dan memerlukan kebutuhan pakar di berbagai bidang.',
      serviceName: 'Transportation Survey and GIS',
      serviceImage:
        'https://prod-files-secure.s3.us-west-2.amazonaws.com/a2950181-f083-4232-a670-bc4d2b616bfe/b70100e2-9b34-4f09-9e7a-b5ea05bd4fdd/Transportation_Survey_and_GIS.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240814T071535Z&X-Amz-Expires=3600&X-Amz-Signature=7d27eefe2f09125eaef7952873383eec2f38e62c49fa76b62745c756cf45c94b&X-Amz-SignedHeaders=host&x-id=GetObject',
    },
    {
      id: '5',
      serviceDescription:
        'ARSARANA memiliki tim yang siap berkontribusi dalam kegiatan transportasi yang ramah lingkungan. Kegiatan transportasi dapat diidentifikasi menggunakan pendekatan yang sesuai untuk menyelaraskan kebijakan transportasi dan lingkungan.',
      serviceBottomDescription:
        'Transportasi yang berwawasan lingkungan dapat dianalisis melalui aspek sistem, sarana dan prasarana transportasi, penerapan di lapangan serta monitoring dan evaluasi yang didukung oleh peraturan perundang-undangan dan kelembagaan.\n\nARSARANA memiliki jaringan tim konsultan yang saling mensupport pada kegiatan-kegiatan yang kompleks dan memerlukan kebutuhan pakar di berbagai bidang.',
      serviceName: 'Transportation Environment',
      serviceImage:
        'https://prod-files-secure.s3.us-west-2.amazonaws.com/a2950181-f083-4232-a670-bc4d2b616bfe/2286d509-5859-45d3-bf27-8b7dcaf1ecdd/Transportation_Environment.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240814T071535Z&X-Amz-Expires=3600&X-Amz-Signature=4cd2e38668b0880414dbd0df9212b0adfa22540b30e94253ce48adeb3b79ab3e&X-Amz-SignedHeaders=host&x-id=GetObject',
    },
    {
      id: '6',
      serviceDescription:
        'ARSARANA memiliki tim yang siap berkontribusi untuk memastikan bahwa teknologi dan infrastruktur dalam bidang transportasi memperhatikan aspek efisiensi, kemudahan dan keselamatan.',
      serviceBottomDescription:
        'Perkembangan teknologi transportasi memiliki tantangan tersendiri dari masa ke masa. Mobilitas manusia dalam berbagai macam aktivitas selalu berkembang sesuai pada zamannya. Teknologi trasportasi harus mempertimbangkan banyak hal supaya teknologi tersebut tepat guna.\n\nARSARANA memiliki jaringan tim konsultan yang saling mensupport pada kegiatan-kegiatan yang kompleks dan memerlukan kebutuhan pakar di berbagai bidang.',
      serviceName: 'Transportation Technology',
      serviceImage:
        'https://prod-files-secure.s3.us-west-2.amazonaws.com/a2950181-f083-4232-a670-bc4d2b616bfe/50a6769c-4c69-405e-bdc6-0472d99a0c6c/Transportation_Technology.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240814T071535Z&X-Amz-Expires=3600&X-Amz-Signature=938e494b40668a4f6672b82c2cd9d944dcd226a448e266bd1e4c24b3fdabb91e&X-Amz-SignedHeaders=host&x-id=GetObject',
    },
  ];
}
