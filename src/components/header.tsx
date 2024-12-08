'use client';

import Link from 'next/link';
import localFont from 'next/font/local';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { motion } from 'framer-motion';

const jaroFont = localFont({
  src: '../fonts/Jaro-Regular-VariableFont_opsz.ttf',
});

const routes = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'All Events',
    path: '/events/all',
  },
];

export default function Header() {
  const activePath = usePathname();

  return (
    <header className='flex justify-between items-center px-6 py-4 border-b border-b-slate-700'>
      <Link className={`${jaroFont.className} text-2xl`} href='/'>
        AROUND YOU
      </Link>

      <nav>
        <ul className='flex gap-x-5 text-slate-400'>
          {routes.map((route) => (
            <li
              key={route.path}
              className={clsx(
                'hover:text-slate-100 transition-colors relative',
                {
                  'text-slate-100': activePath === route.path,
                }
              )}
            >
              <Link href={route.path}>{route.name}</Link>

              {activePath === route.path && (
                <motion.div
                  layoutId='active-link'
                  className='absolute -bottom-5 h-1 w-full bg-accent'
                ></motion.div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
