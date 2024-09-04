import { useEffect, useState } from 'react';

import clsxm from '@src/lib/clsxm';

import IconButton from '@src/components/buttons/icon-button';
import { Icons } from '@src/components/default-icons';
import Typography from '@src/components/typography/default-typography';

interface ICarouselSection {
  ln: string | null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  carouselItems?: any;
}

export default function CarouselSection({
  ln,
  carouselItems,
}: ICarouselSection) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [currentcarouselitem, setCurrentCarouselItem] = useState<any>(null);

  useEffect(() => {
    if (carouselItems) {
      setCurrentCarouselItem(carouselItems[0]);
    }
  }, [carouselItems]);

  function changeCarouselItem(buttoType: string) {
    if (!currentcarouselitem) {
      return;
    }

    const itemToFind = currentcarouselitem.title;

    const index = carouselItems.findIndex(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (item: any) => item.title === itemToFind
    );

    if (index < 0) {
      setCurrentCarouselItem(carouselItems[0]);
      return;
    }
    if (buttoType === 'next') {
      index === carouselItems.length - 1
        ? setCurrentCarouselItem(carouselItems[0])
        : setCurrentCarouselItem(carouselItems[index + 1]);
    } else {
      index === 0
        ? setCurrentCarouselItem(carouselItems[carouselItems.length])
        : setCurrentCarouselItem(carouselItems[index - 1]);
    }
  }

  if (!carouselItems || !currentcarouselitem) {
    return <></>;
  }
  return (
    <section
      key={1}
      className={clsxm(
        'flex max-h-[93vh] min-h-[93vh] w-full flex-col overflow-hidden',
        `bg-arsaranaforeground bg-cover bg-no-repeat backdrop-blur-sm`
      )}
    >
      <div
        className='bg-image flex max-h-[93vh] min-h-[93vh] w-full items-center justify-center bg-cover bg-no-repeat p-5'
        style={{
          backgroundImage: `url(${currentcarouselitem.imagePath})`,
          height: '93vh',
        }}
      >
        <div
          className='mask w-full'
          style={{
            backgroundColor: `${'rgba(255, 255, 255, 0.6)'}`,
          }}
        >
          <div className='h-100 container my-4 flex min-w-full flex-row items-center justify-between lg:mx-4 lg:gap-20 lg:pr-10 xl:pr-16'>
            <div className='flex flex-row items-center gap-4 lg:gap-20'>
              <IconButton
                iconClassName='h-10 w-10 text-foreground'
                icon={Icons.chevronLeft}
                variant='ghost'
                onClick={() => {
                  changeCarouselItem('previous');
                }}
              />
              <div>
                <Typography
                  variant='j1'
                  color='arsarana-title'
                  className='my-3 text-lg xl:text-4xl'
                >
                  {ln && ln.toLowerCase() === 'id'
                    ? currentcarouselitem.judul
                    : currentcarouselitem.title}
                </Typography>
                {/* <UnderlineLink href={currentcarouselitem.ctahref}>
                    <Typography variant='b1' color='arsarana-title'>
                      {currentcarouselitem.ctatitle}
                    </Typography>
                  </UnderlineLink> */}
              </div>
            </div>
            <IconButton
              iconClassName='h-10 w-10 text-foreground'
              icon={Icons.chevronRight}
              variant='ghost'
              onClick={() => {
                changeCarouselItem('next');
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
