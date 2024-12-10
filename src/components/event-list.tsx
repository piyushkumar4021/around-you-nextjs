import { TEvent } from '@/lib/types';
import EventCard from './event-card';

type TEventList = {
  events: TEvent[];
};

function EventList({ events }: TEventList) {
  return (
    <section className='flex flex-wrap justify-center gap-10'>
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
}

export default EventList;
