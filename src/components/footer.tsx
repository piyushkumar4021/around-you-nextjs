import Link from 'next/link';

const routes = [
  { name: 'Terms & Conditions', path: '/terms-conditions' },
  { name: 'Privacy Policy', path: '/privacy-policy' },
];

export default function Footer() {
  return (
    <footer className='mt-auto border-t border-t-slate-700 px-6 py-4 text-slate-500 flex justify-between items-center'>
      <small>@ 2030 Copyright by Piyush Kumar</small>
      <div>
        <ul className='flex justify-between items-center gap-x-5 text-sm'>
          {routes.map((route) => (
            <li key={route.path}>
              <Link href={route.path}>{route.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
