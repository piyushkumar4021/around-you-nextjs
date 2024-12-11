import { twMerge } from 'tailwind-merge';

type TSkeleton = {
  className?: string;
};

export const Skeleton = ({ className }: TSkeleton) => {
  return (
    <div className={twMerge('animate-pulse h-4 w-96 bg-white/5', className)} />
  );
};
