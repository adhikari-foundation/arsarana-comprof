import Image from 'next/image';

import clsxm from '@src/lib/clsxm';

interface IHistorySection {
  ln: string | null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
}

export default function HistorySection({ ln }: IHistorySection) {
  return (
    <section
      key={3}
      className={clsxm(
        'flex max-h-fit min-h-[60vh] w-full flex-col items-center justify-center overflow-hidden',
        `bg-arsaranaforeground bg-cover bg-no-repeat backdrop-blur-sm`
      )}
    >
      <div className='bg-arsaranaforeground mx-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0'>
        <div className='mr-auto place-self-center lg:col-span-7'>
          <h1 className='text-arsaranatitleinverse mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl'>
            {ln && ln.toLowerCase() === 'id'
              ? 'Sejarah Kami'
              : 'Our History Begins'}
          </h1>
          <p className='mb-6 max-w-2xl font-light text-black md:text-lg lg:mb-8 lg:text-xl'>
            {ln && ln.toLowerCase() === 'id'
              ? `PT Arneva Akasa Terra Magna (ARSARANA) didirikan pada tahun 2020 untuk 
								memberikan perspektif dan solusi baru bagi perbaikan sektor 
								transportasi di Indonesia. ARSARANA merupakan anak perusahaan dari 
								ADHIKARI GROUP, sebuah perusahaan konsultan infrastruktur ternama, 
								yang telah banyak berpartisipasi dalam pembangunan sektor infrastruktur di Indonesia sejak tahun 2012.`
              : `PT Arneva Akasa Terra Magna (ARSARANA) was established in 2020 to
              bring new perspectives and solutions for transportation sector
              improvement in Indonesia. ARSARANA is a subsidiary of ADHIKARI
              GROUP, a well known infrastructure consulting company, who has
              been heavily participating in Indonesia infrastructure sector
              development since 2012.`}
          </p>
          {/* <UnstyledLink
              href='#'
              className={clsxm(
                'bg-arsaranabackground hover:bg-primary-600 mr-3 inline-flex items-center justify-center rounded-lg px-5 py-3',
                'text-arsaranatitle text-center text-base font-medium',
                'focus:ring-primary-300 dark:focus:ring-primary-900 focus:ring-4'
              )}
            >
              Get started
              <svg
                className='-mr-1 ml-2 h-5 w-5'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                  clip-rule='evenodd'
                ></path>
              </svg>
            </UnstyledLink>
            <UnstyledLink
              href='#'
              className={clsxm(
                'inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3',
                'text-arsaranatitleinverse text-base font-medium',
                'hover:text-arsaranatitle hover:bg-gray-100',
                'dark:border-arsaranabackground dark:hover:bg-arsaranabackground dark:focus:ring-arsaranabackground',
                'focus:ring-4 focus:ring-gray-100'
              )}
            >
              Speak to Sales
            </UnstyledLink> */}
        </div>
        <div className='hidden rounded-none lg:col-span-5 lg:mt-0 lg:flex'>
          <Image
            height={400}
            width={550}
            src='/icons/logo-arsarana.png'
            alt='mockup'
            className='rounded-none'
          />
        </div>
      </div>
    </section>
  );
}
