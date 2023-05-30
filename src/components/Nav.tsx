import Link from 'next/link'
import { NavItems } from './NavItems'

export function Nav () {
  return (
    <div className='h-24'>
      <nav className='flex items-center justify-between w-11/12 h-full mx-auto bg-white md:px-20 md:w-full'>
        <Link href='/'>
          <h1 className='flex justify-center gap-2 text-2xl font-semibold basis-24'><span className='font-black text-pink-400'>MyLove</span> Bitacoras</h1>
        </Link>
        <NavItems />
      </nav>
    </div>
  )
}
