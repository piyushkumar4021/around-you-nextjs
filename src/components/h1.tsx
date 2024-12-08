import { ReactNode } from 'react';

type TH1Props = {
  children: ReactNode;
};

function H1({ children }: TH1Props) {
  return (
    <h1 className='text-6xl tracking-wide font-semibold text-slate-200'>
      {children}
    </h1>
  );
}

export default H1;
