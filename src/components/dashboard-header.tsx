import Typography from './typography/default-typography';

interface DashboardHeaderProps {
  heading: string;
  text?: string;
  small?: boolean;
  children?: React.ReactNode;
}

export function DashboardHeader({
  heading,
  text,
  children,
  small,
}: DashboardHeaderProps) {
  return (
    <div className='flex items-center justify-between px-2'>
      <div className='grid'>
        {small ? (
          <Typography variant='h1' color='theme'>
            {heading}
          </Typography>
        ) : (
          <h1 className='font-heading text-3xl md:text-4xl'>{heading}</h1>
        )}
        {text && <p className='text-muted-foreground text-lg'>{text}</p>}
      </div>
      {children}
    </div>
  );
}
