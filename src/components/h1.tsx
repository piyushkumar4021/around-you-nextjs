import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type TH1Props = {
  children: ReactNode;
  className?: string;
};

function H1({ children, className }: TH1Props) {
  return (
    <h1
      className={twMerge(
        'text-4xl md:text-5xl lg:text-6xl tracking-wide font-semibold text-slate-200',
        className
      )}
    >
      {children}
    </h1>
  );
}

export default H1;
