import Link from 'next/link';
import localFont from 'next/font/local';

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
  return (
    <header className='flex justify-between items-center px-6 py-4 border-b border-b-slate-700'>
      <Link className={`${jaroFont.className} text-2xl`} href='/'>
        AROUND YOU
      </Link>

      <nav>
        <ul className='flex gap-x-5'>
          {routes.map((route) => (
            <li
              key={route.path}
              className='hover:text-slate-600 transition-colors'
            >
              <Link href={route.path}>{route.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
