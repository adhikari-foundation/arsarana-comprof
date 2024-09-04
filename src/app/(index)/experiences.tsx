import Link from 'next/link';

import clsxm from '@src/lib/clsxm';

import ImageCard from '@src/components/cards/image-card';
import Typography from '@src/components/typography/default-typography';

interface IExperiencesSections {
  ln: string | null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  experiences?: any;
}

export default function ExperiencesSections({
  ln,
  experiences,
}: IExperiencesSections) {
  if (!experiences) {
    return <></>;
  }
  return (
    <section
      key={5}
      className={clsxm(
        'flex max-h-fit min-h-[60vh] w-full flex-row overflow-hidden',
        `bg-arsaranaforeground bg-cover bg-no-repeat backdrop-blur-sm`
      )}
    >
      <div className='sticky z-50 my-20 flex w-full flex-col items-center justify-center rounded-3xl px-6'>
        <Typography
          variant='j1'
          color='arsarana-title-inverse'
          className='mb-24 text-center'
        >
          {ln && ln.toLowerCase() === 'id'
            ? 'Pengalaman Kami'
            : 'Our Experiences'}
        </Typography>

        <div className='grid w-full items-center justify-center gap-2 lg:w-[65vw] lg:grid-cols-3'>
          {experiences &&
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            experiences.map((item: any) => {
              return (
                <div className='mr-8 mt-8' key={item.id}>
                  <Link href={`${item.href}&ln=${ln}`}>
                    <ImageCard
                      href={item.href}
                      imagelocation={
                        `/images/experiences/${item.experienceImage}` ||
                        '/images/avatar.png'
                      }
                      title={
                        ln && ln.toLowerCase() === 'id'
                          ? item.judulPengalaman
                          : item.experienceTitle
                      }
                      description={
                        ln && ln.toLowerCase() === 'id'
                          ? item.deskripsiPengalaman
                          : item.experienceDescription
                      }
                    />
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}
