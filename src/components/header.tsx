'use client';

import Link from 'next/link';
import localFont from 'next/font/local';
import { usePathname } from 'next/navigation';
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
    <header className='flex justify-between items-center px-3 sm:px-6 py-4 border-b border-b-slate-700'>
      <Link className={`${jaroFont.className} text-xl md:text-2xl`} href='/'>
        AROUND YOU
      </Link>

      <nav>
        <ul className='flex text-sm md:text-base gap-x-5 text-slate-400'>
          {routes.map((route) => (
            <li
              key={route.path}
              className={`hover:text-slate-100 transition-colors relative ${
                route.path === activePath ? 'text-slate-100' : ''
              }`}
            >
              <Link href={route.path}>{route.name}</Link>
              {activePath === route.path && (
                <motion.div
                  layoutId='active-link'
                  className='absolute -bottom-5 h-1 w-full bg-accent'
                />
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
