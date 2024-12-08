'use client';

import { useRouter } from 'next/navigation';
import { FormEvent, useRef } from 'react';

function SearchForm() {
  const queryRef = useRef<HTMLInputElement | null>(null);
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const query = queryRef.current?.value;
    if (!query) return;
    router.push(`/events/${query}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={queryRef}
        className='w-full max-w-xl mt-6 bg-gray-800 py-4 px-5 rounded-lg outline-none focus:ring-1 focus:ring-accent duration-300'
        type='text'
        placeholder='Search events in any city...'
        spellCheck={false}
      />
    </form>
  );
}

export default SearchForm;
