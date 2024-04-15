"use client";

import Link from 'next/link'
import { usePathname  } from 'next/navigation';

export default function NavBar() {
  const pathname = usePathname();

    return (
      <nav className='flex justify-center items-center'>
      <div className='place-self-center'>
        <ul className='flex'>
          <li className={`m-3 hover:text-gray-400 ${pathname === '/' ? 'font-bold' : ''}`}>
            <Link href='/'>Home</Link>
          </li>
          <li className={`m-3 hover:text-gray-400 ${pathname === '/about' ? 'font-bold' : ''}`}>
            <Link href='/about'>About</Link>
          </li>
          <li className={`m-3 hover:text-gray-400 ${pathname === '/contact' ? 'font-bold' : ''}`}>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>

    )
}