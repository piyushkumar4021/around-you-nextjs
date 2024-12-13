import EventList from '@/components/event-list';
import H1 from '@/components/h1';
import { capitalize, getEvents } from '@/lib/utils';
import { Metadata } from 'next';

type Props = {
  params: {
    city: string;
  };
};

export function generateMetadata({ params }: Props): Metadata {
  const city = params.city;

  return {
    title: city === 'all' ? 'All Events' : `Events in ${capitalize(city)}`,
  };
}

export default async function Events({ params }: Props) {
  const city = params.city;
  const events = await getEvents(city);

  return (
    <main className='flex flex-col items-center max-w-6xl mx-auto py-8 px-4'>
      <H1 className='mb-20'>
        {city === 'all' && 'All Events'}
        {city !== 'all' && `Events in ${capitalize(city)}`}
      </H1>

      <EventList events={events} />
    </main>
  );
}
