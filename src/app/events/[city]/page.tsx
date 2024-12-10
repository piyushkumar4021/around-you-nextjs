import EventList from '@/components/event-list';
import H1 from '@/components/h1';
import { API_URL } from '@/lib/constants';
import { TEvent } from '@/lib/types';

type TEventsProps = {
  params: {
    city: string;
  };
};

export default async function Events({ params }: TEventsProps) {
  const city = params.city;

  const resp = await fetch(`${API_URL}?city=${city}`);
  const events: TEvent[] = await resp.json();

  return (
    <main className='flex flex-col items-center max-w-6xl mx-auto pt-8 px-4'>
      <H1 className='mb-20'>
        {city === 'all' && 'All Events'}
        {city !== 'all' &&
          `Events in ${city.charAt(0).toLocaleUpperCase() + city.slice(1)}`}
      </H1>

      <EventList events={events} />
    </main>
  );
}
