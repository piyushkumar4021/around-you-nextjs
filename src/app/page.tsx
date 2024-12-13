import H1 from '@/components/h1';
import SearchForm from '@/components/search-form';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='max-w-6xl mx-auto text-center my-auto px-4'>
      <Headings />
      <SearchForm />
      <PopularEventCities />
    </main>
  );
}

export const Headings = () => {
  return (
    <>
      <H1 className='capitalize'>Find events around you</H1>
      <p className='text-lg md:text-2xl mt-2 text-slate-400'>
        Browser more than{' '}
        <span className='text-accent italic underline font-semibold'>
          10,000 events
        </span>{' '}
        around you
      </p>
    </>
  );
};

export const PopularEventCities = () => {
  return (
    <div className='text-slate-500 flex justify-center gap-2 mt-5'>
      <span>Popular: </span>
      <div className='font-semibold space-x-2'>
        <Link href='/events/seattle'>Seattle</Link>
        <Link href='/events/austin'>Austin</Link>
      </div>
    </div>
  );
};
