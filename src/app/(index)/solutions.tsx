import Image from 'next/image';

import clsxm from '@src/lib/clsxm';

import Typography from '@src/components/typography/default-typography';

interface ISolutionSection {
  ln: string | null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
}

export default function SolutionsSection({ ln }: ISolutionSection) {
  const circularImageUrl = '/images/16-bgr.png';

  return (
    <section
      key={2}
      className={clsxm(
        'flex max-h-[70vh] w-full flex-col overflow-hidden',
        `bg-arsaranabackground bg-cover bg-no-repeat backdrop-blur-sm`
      )}
    >
      <Image
        src={circularImageUrl}
        alt='arsarana-circular-image'
        width={400}
        height={400}
        className='absolute right-0 -z-10 -mr-28 mt-10 rotate-[30deg] bg-transparent opacity-60'
      />
      <div className='mx-auto -mt-16 flex h-[70vh] w-full max-w-full flex-col items-center justify-center'>
        <Typography
          variant='j1'
          color='arsarana-title'
          className='w-full text-center'
        >
          {ln && ln.toLowerCase() === 'id'
            ? 'SOLUSI DARI KAMI'
            : 'OUR SOLUTIONS'}
        </Typography>
        <div className='mt-8 flex w-full flex-col items-center justify-center lg:flex-row'>
          {ln && ln.toLowerCase() === 'id' ? (
            <>
              <Typography
                variant='j1'
                color='arsarana-title'
                className='xl:text-5xl'
              >
                Solusi Analisis dan Perencanaan Transportasi Terpadu untuk Anda
              </Typography>
            </>
          ) : (
            <>
              <Typography
                variant='j1'
                color='arsarana-title'
                className='xl:text-5xl'
              >
                One Stop
              </Typography>

              <Typography
                variant='j1'
                color='theme'
                className='text-foreground flex items-center justify-center text-center xl:ms-2 xl:mt-2'
              >
                Transportation Analysis and Planning Solution For You
              </Typography>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
