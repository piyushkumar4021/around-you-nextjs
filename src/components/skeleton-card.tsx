import { Skeleton } from './skeleton';

export default function SkeletonCard() {
  return (
    <div className='space-y-4 flex flex-col items-center'>
      <Skeleton className='h-52 w-80 rounded-lg' />
      <Skeleton className='w-72' />
      <Skeleton className='w-44' />
    </div>
  );
}
