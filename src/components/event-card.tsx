import { TEvent } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';

type TEventCardProps = {
  event: TEvent;
};

function EventCard({ event }: TEventCardProps) {
  const eventDate = new Date(event.date);
  return (
    <Link href={`/event/${event.slug}`}>
      <div className='relative max-w-[345px] min-w-[275px] rounded-lg overflow-hidden bg-slate-900/70 transition hover:scale-105 active:scale-[1.02]'>
        <Image
          className='w-full'
          src={event.imageUrl}
          width={700}
          height={600}
          alt='Event Image'
        />

        <div className='text-center py-6 px-4'>
          <h2 className='text-xl tracking-wide font-bold mb-1'>{event.name}</h2>
          <p className='italic text-white/75'>{event.organizerName}</p>
          <p className='text-sm mt-3 text-white/50'>{event.location}</p>
        </div>

        <div className='absolute top-3 right-3 bg-black/60 rounded-lg p-2'>
          <p className='text-center font-bold tracking-wider'>
            {eventDate.toLocaleString('en-us', { day: '2-digit' })}
          </p>
          <p className='text-sm text-accent'>
            {eventDate
              .toLocaleString('en-US', { month: 'short' })
              .toUpperCase()}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default EventCard;
