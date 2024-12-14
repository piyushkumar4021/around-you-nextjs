import Link from 'next/link';

export default function PaginationControls({
  previousPath,
  nextPath,
}: TPaginationControls) {
  const className =
    'bg-slate-800/50 mt-6 px-4 py-2 rounded-lg hover:bg-slate-800/80 hover:text-slate-300 hover:scale-110 active:scale-[1.02] transition';

  return (
    <div className='flex justify-between w-full'>
      {typeof previousPath === 'string' && (
        <Link href={previousPath}>
          <button className={className}>Previous</button>
        </Link>
      )}
      <div />
      {typeof nextPath === 'string' && (
        <Link href={nextPath}>
          <button className={className}>Next</button>
        </Link>
      )}
    </div>
  );
}

type TPaginationControls = {
  previousPath: boolean | string;
  nextPath: boolean | string;
};
