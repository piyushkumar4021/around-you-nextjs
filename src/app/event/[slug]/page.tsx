import { API_URL } from '@/lib/constants';
import { TEvent } from '@/lib/types';

type TEventProps = {
  params: {
    slug: string;
  };
};

export default async function Event({ params }: TEventProps) {
  const eventSlug = params.slug;

  const resp = await fetch(`${API_URL}/${eventSlug}`);
  const event: TEvent = await resp.json();

  return <main>{event.name}</main>;
}
