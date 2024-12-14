import { getEvent } from '@/lib/utils';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ReactNode } from 'react';

type TEventProps = {
  params: {
    slug: string;
  };
};

export default async function Event({ params }: TEventProps) {
  const eventSlug = params.slug;
  const event = await getEvent(eventSlug);
  if (!event) return notFound();
  const date = new Date(event.date).toLocaleString('en-us', {
    day: '2-digit',
    month: 'long',
    weekday: 'long',
  });

  return (
    <main className='max-w-6xl mx-auto bg-slate-900/30 w-full'>
      <div className='relative overflow-hidden'>
        <EventBackgroundImage imageUrl={event.imageUrl} />

        <div className='flex gap-x-10 justify-center py-16 flex-col md:flex-row px-4 items-center md:items-stretch'>
          <EventImage imageUrl={event.imageUrl} />

          <div className='flex flex-col'>
            <p>{date}</p>
            <h2 className='text-2xl sm:text-4xl font-bold tracking-wide mt-2'>
              {event.name}
            </h2>
            <p className='mt-1 mb-3'>
              Organized by <span className='italic'>{event.organizerName}</span>
            </p>
            <button className='mt-auto bg-white/20 hover:scale-105 active:scale-[1.02] hover:bg-white/30 transition border-white/10 border-2 rounded-lg py-2'>
              Get Tickets
            </button>
          </div>
        </div>
      </div>

      <div className='py-24'>
        <Section>
          <H3>About this Event</H3>
          <P>{event.description}</P>
        </Section>
        <Section>
          <H3>Location</H3>
          <P>{event.location}</P>
        </Section>
      </div>
    </main>
  );
}

const H3 = ({ children }: { children: ReactNode }) => {
  return <h3 className='text-2xl mb-3 tracking-wide font-bold'>{children}</h3>;
};

const P = ({ children }: { children: ReactNode }) => {
  return <p className='max-w-4xl leading-7 mx-auto px-4'>{children}</p>;
};

const Section = ({ children }: { children: ReactNode }) => {
  return <section className='text-center mb-5'>{children}</section>;
};

const EventBackgroundImage = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <Image
      src={imageUrl}
      className='blur-2xl -z-10 object-cover'
      sizes='100%'
      alt='Event Background Image'
      fill
      priority
    />
  );
};

const EventImage = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <Image
      className='border-2 border-white rounded-xl mb-5 md:mb-0'
      src={imageUrl}
      width={300}
      height={201}
      alt='Event Image'
    />
  );
};
