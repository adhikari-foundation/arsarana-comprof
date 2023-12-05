import Image from 'next/image';

import clsxm from '@src/lib/clsxm';

import { Icons } from '@src/components/default-icons';
import UnstyledLink from '@src/components/links/unstyled-link';
import Typography from '@src/components/typography/default-typography';

export default function TeamSection() {
  const teamitems = [
    {
      id: 1,
      imgsource: '/images/saifullah.jpg',
      firstname: 'M. Saifullah',
      lastname: '',
      position: 'Commissioner',
      expertise: 'Transport and Financial Specialist',
    },
    {
      id: 2,
      imgsource: '/images/noviana.jpeg',
      firstname: 'Noviana',
      position: 'President Director',
      expertise: 'PPP and Economic Specialist',
    },
    {
      id: 3,
      imgsource: '/images/aris_wibowo.jpeg',
      firstname: 'Aris Wibowo',
      position: 'Director',
      expertise: 'Transport Engineering Specialist',
    },
  ];
  return (
    <section
      key={6}
      className={clsxm(
        'flex max-h-fit min-h-[60vh] w-full flex-col overflow-hidden',
        `bg-arsaranabackground bg-cover bg-no-repeat backdrop-blur-sm`
      )}
    >
      <div className='bg-arsaranabackground py-20'>
        <div className='container mx-auto px-6 md:px-12 xl:px-32'>
          <div className='mb-16 text-center'>
            <h2 className='text-arsaranatitle mb-4 text-center text-2xl font-bold md:text-4xl'>
              Our Team
            </h2>
            {/* <p className='text-foreground lg:mx-auto lg:w-8/12'>
              ARSARANA has a pool of talents consisted of young and dynamic
              experts who have extensive experience to deliver successful
              transportation infrastructure projects with engineering,
              management environment, technology, and policy excellent.
            </p> */}
          </div>
          <div className='grid items-center gap-12 md:grid-cols-3'>
            {teamitems &&
              teamitems.map((item) => {
                return (
                  <div key={item.id} className='space-y-4 text-center'>
                    <Image
                      className='mx-auto h-64 w-64 rounded-none object-cover md:h-40 md:w-40 lg:h-64 lg:w-64'
                      src={`${item.imgsource}`}
                      alt={item.imgsource}
                      loading='lazy'
                      width='640'
                      height='805'
                      key={item.id}
                      style={{ objectFit: 'contain' }}
                    />
                    <div>
                      <h4 className='text-arsaranatitle text-2xl'>
                        {item.firstname}
                      </h4>
                      <span className='text-foreground block text-sm'>
                        {item.position} - {item.expertise}
                      </span>
                    </div>
                  </div>
                );
              })}
            <div></div>
            <div></div>
            <UnstyledLink
              className='text-arsaranatitle flex w-full flex-row items-center justify-end pr-8'
              href='/our-team'
            >
              <Typography variant='h2' className='text-arsaranatitle'>
                See All
              </Typography>
              <Icons.arrowRight />
            </UnstyledLink>
          </div>
        </div>
      </div>
    </section>
  );
}
