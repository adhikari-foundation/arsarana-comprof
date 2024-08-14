/* eslint-disable @typescript-eslint/no-explicit-any */
// import logger from '@src/lib/logger';
import { notion } from '@src/lib/notion';

import { env } from '@/env.mjs';
// import logger from '@src/lib/logger';

const getPageMetaData = (experience: any) => {
  const objectexperience = {
    // id: service.id,
    id: experience.properties.id.title[0].plain_text,
    experienceDescription:
      experience.properties.ExperienceDescription.rich_text[0].plain_text,
    projectName: experience.properties.ProjectName.rich_text[0].plain_text,
    client: experience.properties.Client.rich_text[0].plain_text,
    scopes: experience.properties.Scopes.rich_text[0].plain_text,
    experienceTitle:
      experience.properties.ExperienceTitle.rich_text[0].plain_text,
    experienceImage: experience.properties.ImageName.rich_text[0].plain_text,
  };
  // logger(experience.properties.ExperienceBottomDescription);
  return objectexperience;
};

export const getAllExperiences = async () => {
  const experiences = await notion.databases.query({
    database_id: env.NOTION_EXPERIENCES_DB_ID,

    sorts: [
      {
        property: 'id',
        direction: 'ascending',
      },
    ],
  });

  const allExperiences = experiences.results;
  // logger(allExperiences);

  return allExperiences.map((experience) => {
    return getPageMetaData(experience);
  });
};

export async function getStaticExperiences() {
  return [
    {
      id: '1',
      experienceDescription:
        'ARSARANA trained PT Angkasa Pura II airside infrastructure personnel to improve their competency in preparing PCI reports at each branch office.',
      projectName: 'Pavement Condition Index Training 2023',
      client: 'Angkasa Pura II ',
      scopes:
        '[Basic Pavement Maintenance;Introduction to Pavement;Condition Index (PCI) and APCI;Type and severity of airport pavement distress;Pavement Condition Index Survey (Field);Pavement Condition Index (PCI) and APCI;Calculation and Analysis;Pavement Condition Index Output;Discussion and Case Study]',
      experienceTitle: 'Pavement Condition Index (PCI) Training',
      experienceImage: 'pci_training.png',
    },
    {
      id: '2',
      experienceDescription:
        'ARSARANA support WIKA Serang-Panimbang in conducting a road network modeling on the Serang-Panimbang Toll Road.',
      projectName:
        'Review of Average Daily Traffic Volume of Serang-Panimbang Toll Road.',
      client: 'WIKA Serang-Panimbang',
      scopes:
        '[Updating the traffic model;Traffic counting survey;Ability to Pay and Willingness to Pay (ATP/WTP) survey and analysis;Surveys on development areas;OD survey in Tanjung Lesung SEZ;Developing network scenarios;Analysis of Serang-Panimbang transaction toll gate]',
      experienceTitle: 'Road Network Modelling',
      experienceImage: 'road_network_modelling.png',
    },
    {
      id: '3',
      experienceDescription:
        'ARSARANA assist the Jabodetabek Transportation Management Agency (BPTJ) to develop an integrated transportation system that makes it easier for BPTJ to determine transportation management policies in Greater Jakarta/Jabodetabek. \n',
      projectName: 'Christmas and New Year Data Analysis Study in Jabodetabek',
      client: 'Badan Pengelola Transportasi Jabodetabek (BPTJ)',
      scopes:
        '[Collecting traffic data using IT technology;Data analysis based on CCTV footage, google maps usage data, and social media user data;Building a traffic data analytics dashboard]',
      experienceTitle: 'Data Analysis Study',
      experienceImage: 'data_analysis_study.png',
    },
    {
      id: '4',
      experienceDescription:
        'ARSARANA supports Amethys Utama in the work of the Key Performance Indicators (KPIs) Study of the South Sumatera Light Railway Management Center (BPKARSS). ',
      projectName:
        'Key Performance Indicators (KPIs) Study of the South Sumatera Light Railway Management Center (BPKARSS)',
      client: 'Ardi Widya Utama',
      scopes:
        '[Review the rules and regulations;Analyze the organizational structure and identify the optimal man power;Analyzing KPI indicators for each work unit and operational officers;Create monitoring tools for performance appraisal analysis;Create a calculation formula in providing incentives;Determine the method of career advancement/promotion/talent pool;Determine methods for recruiting or hiring non-civil servant employees]',
      experienceTitle: 'Key Performance Indicators (KPIs) Study \n',
      experienceImage: 'kpi_study.png',
    },
    {
      id: '5',
      experienceDescription:
        'ARSARANA together with Egis International Indonesia supported the Directorate General of Land Transportation as Project Management Consultant of the Implementation Project of National Mass Transit Program (IPNMTP).\n',
      projectName:
        'Project Management Consultant Bus Rapid Transit (PMC BRT) Medan and Bandung',
      client: 'Egis International Indonesia',
      scopes:
        '[Conducting corridor and terminal surveys in Medan and Bandung;Meeting, consultation, Focus Group Discussion, and workshop with World Bank, Ministry of Transportation, Bappenas, Ministry of Finance, Ministry of Transportation, Government of North Sumatera and West Java]',
      experienceTitle: 'Project Management Consultant (PMC)',
      experienceImage: 'pmc.png',
    },
    {
      id: '6',
      experienceDescription:
        'ARSARANA supports the initiation of the development plan for the northern part of Jakarta through the preparation of the Marunda Area Development Plan Study. \n',
      projectName:
        'Consultant Services for Preparation of Marunda Area Development Plan Study',
      client: 'Confidential',
      scopes:
        '[Study on potential development;Study on improving the accessibility;Government relations and stakeholder mapping communications]',
      experienceTitle: 'Development Plan Study',
      experienceImage: 'development_plan_study.png',
    },
    {
      id: '7',
      experienceDescription:
        'ARSARANA together with Atlas Internasional Indah supported the Directorate General of Railways in preparing guidelines for railway planning in the Capital City of Nusantara (IKN).\n',
      projectName:
        'Project Name: Feasibility Study on the Implementation of Railways in Support of the New Capital City',
      client: 'Atlas Internasional Indah',
      scopes:
        '[Railroad demand forecasting;Feasibility analysis;Perform basic design of railway track;Basic design of depot and railway supporting facilities;Conduct environmental and social studies]',
      experienceTitle: 'Feasibility Study for Railway Planning',
      experienceImage: '-',
    },
  ];
}
