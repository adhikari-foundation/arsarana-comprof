/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable unused-imports/no-unused-vars */
'use client';

// import { useTheme } from 'next-themes';
// import Link from 'next/link';
import { useQueryState } from 'nuqs';
import { useEffect, useState } from 'react';

import { SiteFooter } from '@src/components/layout/site-footer';

import CarouselSection from './carousel';
import ExperiencesSections from './experiences';
import HistorySection from './history';
import ServicesSections from './services';
import SolutionsSection from './solutions';
// import UnderlineLink from '@src/components/links/underline-link';
// import UnstyledLink from '@src/components/links/unstyled-link';
import TeamSection from './team';
// import ArticlesPage from '../articles/(index)/page';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function IndexPage({ params }: any) {
  const [mounted, setMounted] = useState(false);
  const [selectedTeams, setSelectedTeams] = useState<any>(null);
  const [carousels, setCarousels] = useState<any>(null);
  const [services, setServices] = useState<any>(null);
  const [experiences, setExperiences] = useState<any>(null);

  const [newLn, setNewLn] = useQueryState('ln');

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (params && params.selectedTeams) {
      setSelectedTeams(params.selectedTeams);
    }

    if (params && params.carousels) {
      setCarousels(params.carousels);
    }

    if (params && params.services) {
      setServices(params.services);
    }

    if (params && params.experiences) {
      setExperiences(params.experiences);
    }
  }, [params]);

  if (!mounted) {
    return <></>;
  }

  return (
    <>
      <CarouselSection ln={newLn} carouselItems={carousels} />

      <SolutionsSection ln={newLn} />

      <HistorySection ln={newLn} />

      <ServicesSections ln={newLn} services={services} />

      <ExperiencesSections ln={newLn} experiences={experiences} />

      <TeamSection ln={newLn} selectedTeams={selectedTeams} />

      <SiteFooter ln={newLn} services={services} />
    </>
  );
}
