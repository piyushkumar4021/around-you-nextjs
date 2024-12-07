import Link from 'next/link';

export default function Home() {
  return (
    <main className='max-w-6xl mx-auto text-center my-auto'>
      <h1 className='text-6xl tracking-wide capitalize font-semibold text-slate-200'>
        Find events around you
      </h1>

      <p className='text-2xl mt-2 text-slate-400'>
        Browser more than{' '}
        <span className='text-lime-400 italic underline font-semibold'>
          10,000 events
        </span>{' '}
        around you
      </p>

      <input
        className='w-full max-w-xl mt-6 bg-gray-800 py-4 px-5 rounded-lg outline-none focus:bg-slate-700 transition-colors'
        type='text'
        placeholder='Search events in any city...'
        spellCheck={false}
      />

      <div className='text-slate-500 flex justify-center gap-2 mt-5'>
        <span>Popular: </span>
        <div className='font-semibold space-x-2'>
          <Link href='/event/seattle'>Seattle</Link>
          <Link href='/event/austin'>Austin</Link>
        </div>
      </div>
    </main>
  );
}
