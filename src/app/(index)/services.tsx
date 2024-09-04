import Link from 'next/link';

import clsxm from '@src/lib/clsxm';
import logger from '@src/lib/logger';

import Typography from '@src/components/typography/default-typography';

interface IServicesSections {
  ln: string | null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  services?: any;
}

export default function ServicesSections({ ln, services }: IServicesSections) {
  if (!services) {
    return <></>;
  }

  logger(services);
  return (
    <section
      id='service'
      key={4}
      className={clsxm(
        'flex max-h-fit min-h-[60vh] w-full flex-col overflow-hidden',
        `bg-arsaranabackground items-center justify-center bg-cover bg-no-repeat backdrop-blur-sm`
      )}
    >
      <div className='my-8 inline-flex flex-col items-center justify-center p-4'>
        <Typography variant='j1' color='arsarana-title' className='mb-8'>
          {ln && ln.toLowerCase() === 'id' ? 'Servis Kami' : 'Our Service'}
        </Typography>

        <ul className='grid max-w-[100%] place-content-center gap-8 sm:grid-cols-2 lg:max-w-[65%]'>
          {services &&
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            services.map((item: any) => {
              return (
                <Link href={`${item.href}&ln=${ln}`} key={item.id}>
                  <li className='flex' key={item.id}>
                    <Typography
                      variant='b1'
                      color='arsarana-title'
                      className='px-4 text-5xl font-extralight'
                    >
                      {item.numbering}
                    </Typography>
                    <div>
                      <div className='text-arsaranatitle flex h-full items-center justify-center text-xl font-bold'>
                        {item.title}
                        {ln && ln.toLowerCase() === 'id'
                          ? item.namaServis
                          : item.serviceName}
                      </div>
                    </div>
                  </li>
                </Link>
              );
            })}

          <Link
            href={`/services?ln=${ln}`}
            className='col-span-2 justify-self-end pr-8'
          >
            <li className='flex'>
              <Typography
                variant='b1'
                color='arsarana-title'
                className='px-4 text-5xl font-extralight'
              >
                {' '}
              </Typography>
              <div>
                <div className='text-arsaranatitle text-xl font-bold'>
                  {ln && ln.toLowerCase() === 'id'
                    ? 'Lihat Detail >'
                    : 'See Details >'}
                </div>
              </div>
            </li>
          </Link>
        </ul>
      </div>
    </section>
  );
}
