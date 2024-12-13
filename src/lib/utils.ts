import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const capitalize = (str: string) => {
  return str.charAt(0).toLocaleUpperCase() + str.slice(1);
};

export const getEvents = async (city: string) => {
  const events = prisma.eventoEvent.findMany({
    where: {
      city: city === 'all' ? undefined : capitalize(city),
    },
  });
  return events;
};

export const getEvent = async (eventSlug: string) => {
  const event = prisma.eventoEvent.findUnique({
    where: {
      slug: eventSlug,
    },
  });
  return event;
};
