import { Skeleton } from '@/components/skeleton';
import SkeletonCard from '@/components/skeleton-card';

export default function Loading() {
  return (
    <div>
      <Skeleton className='mx-auto mt-12 h-9' />
      <div className='flex justify-center gap-12 mt-12 flex-wrap'>
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>
    </div>
  );
}
