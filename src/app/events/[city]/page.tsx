import H1 from '@/components/h1';

type TEventsProps = {
  params: {
    city: string;
  };
};

export default function Events({ params }: TEventsProps) {
  const city = params.city.charAt(0).toLocaleUpperCase() + params.city.slice(1);

  return (
    <main className='max-w-6xl mx-auto pt-8'>
      <H1>
        {city === 'All' && 'All Events'}
        {city !== 'All' && `Events in ${city}`}
      </H1>
    </main>
  );
}
