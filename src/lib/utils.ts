import { PrismaClient } from '@prisma/client';
import { ITEMS_PER_PAGE } from './constants';
import { unstable_cache } from 'next/cache';

const prisma = new PrismaClient();

export const capitalize = (str: string) => {
  return str.charAt(0).toLocaleUpperCase() + str.slice(1);
};

export const getEvents = unstable_cache(
  async (city: string, currPage: number) => {
    const events = await prisma.eventoEvent.findMany({
      where: {
        city: city === 'all' ? undefined : capitalize(city),
      },
      orderBy: {
        date: 'asc',
      },
      take: ITEMS_PER_PAGE,
      skip: (currPage - 1) * +ITEMS_PER_PAGE,
    });
    const totalEvents = await prisma.eventoEvent.count({
      where: {
        city: city === 'all' ? undefined : capitalize(city),
      },
    });
    return { events, totalEvents };
  }
);

export const getEvent = unstable_cache((eventSlug: string) => {
  const event = prisma.eventoEvent.findUnique({
    where: {
      slug: eventSlug,
    },
  });
  return event;
});
