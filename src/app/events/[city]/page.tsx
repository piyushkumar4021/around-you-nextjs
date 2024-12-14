import EventList from '@/components/event-list';
import H1 from '@/components/h1';
import { capitalize, getEvents } from '@/lib/utils';
import next, { Metadata } from 'next';
import PaginationControls from './../../../components/pagination-controls';
import { ITEMS_PER_PAGE } from '@/lib/constants';

type Props = {
  params: {
    city: string;
  };
};

type TEvents = Props & {
  searchParams: {
    page: string;
  };
};

export function generateMetadata({ params }: Props): Metadata {
  const city = params.city;

  return {
    title: city === 'all' ? 'All Events' : `Events in ${capitalize(city)}`,
  };
}

export default async function Events({ params, searchParams }: TEvents) {
  const city = params.city;
  const currPage = +searchParams.page || 1;
  const { events, totalEvents } = await getEvents(city, currPage);

  const previousPath = currPage > 1 && `/events/${city}?page=${currPage - 1}`;
  const nextPath =
    currPage * ITEMS_PER_PAGE < totalEvents &&
    `/events/${city}?page=${currPage + 1}`;

  return (
    <main className='flex flex-col items-center max-w-6xl mx-auto py-8 px-4'>
      <H1 className='mb-20'>
        {city === 'all' && 'All Events'}
        {city !== 'all' && `Events in ${capitalize(city)}`}
      </H1>

      <EventList events={events} />

      <PaginationControls previousPath={previousPath} nextPath={nextPath} />
    </main>
  );
}
