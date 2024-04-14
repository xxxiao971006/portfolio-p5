import Link from 'next/link'

export default function NavBar() {
    return (
      <nav className='flex justify-center items-center'>
        <div className='place-self-center'>
          <ul className='flex'>
            <li className="m-3 hover:text-gray-400">
              <a href="/">Home</a>
            </li>
            <li className="m-3 hover:text-gray-400">
              <a href="/about">About</a>
            </li>
            <li className="m-3 hover:text-gray-400">
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

    )
}