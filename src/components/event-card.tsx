import { TEvent } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';

type TEventCardProps = {
  event: TEvent;
};

function EventCard({ event }: TEventCardProps) {
  return (
    <Link href={`/event/${event.slug}`}>
      <div className='relative max-w-[345px] min-w-[275px] rounded-lg overflow-hidden bg-slate-900/70 transition hover:scale-105 active:scale-[1.02]'>
        <EventImage imageUrl={event.imageUrl} />
        <EventBody event={event} />
      </div>
    </Link>
  );
}

export const EventImage = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <Image
      className='w-full'
      src={imageUrl}
      width={700}
      height={600}
      alt='Event Image'
    />
  );
};

export const EventBody = ({ event }: { event: TEvent }) => {
  const eventDate = new Date(event.date);
  const day = eventDate.toLocaleString('en-us', { day: '2-digit' });
  const month = eventDate
    .toLocaleString('en-US', { month: 'short' })
    .toUpperCase();

  return (
    <div>
      <div className='text-center py-6 px-4'>
        <h2 className='text-xl tracking-wide font-bold mb-1'>{event.name}</h2>
        <p className='italic text-white/75'>{event.organizerName}</p>
        <p className='text-sm mt-3 text-white/50'>{event.location}</p>
      </div>
      <div className='absolute top-3 right-3 bg-black/60 rounded-lg p-2'>
        <p className='text-center font-bold tracking-wider'>{day}</p>
        <p className='text-sm text-accent'>{month}</p>
      </div>
    </div>
  );
};

export default EventCard;
