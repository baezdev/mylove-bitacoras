'use client'

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { AddIcon, BitacoraIcon, CloseIcon, MenuIcon } from './Icons'

export const NavItems = () => {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <>
      <button className='md:hidden' onClick={() => setOpenMenu(!openMenu)}>
        {
          openMenu
            ? <CloseIcon />
            : <MenuIcon />
        }
      </button>
      <div className={`absolute top-24 md:top-0 md:bg-inherit border-b-2 border-pink-400 rounded-[3px] border-opacity-50 md:border-none w-full md:w-min left-0 py-10 md:py-0 md:relative flex ${openMenu ? 'translate-x-0' : '-translate-x-full'} items-center flex-col md:flex-row gap-10 md:gap-5 font-medium text-lg transition-transform duration-300 md:translate-x-0 z-50 bg-inherit`}>
        <NavLink to='/'>
          Agregar <AddIcon />
        </NavLink>
        <NavLink to='/bitacoras'>
          Bitacoras <BitacoraIcon />
        </NavLink>
        <div className='flex items-center justify-end gap-3 text-lg font-medium md:ml-24'>
          <span>Ari</span>
          <Image src='/ari.jpeg' alt='La mas preciosa' width={48} height={48} className='object-cover w-12 rounded-full aspect-square' />
        </div>
      </div>
    </>
  )
}

interface Props {
  to: string
  children: React.ReactNode
}

export const NavLink: React.FC<Props> = ({ to, children }) => {
  return (
    <Link
      href={to}
      className="px-2 after:content-[''] after:h-[3px] after:bg-pink-400 after:w-0 hover:after:w-full after:absolute relative after:-bottom-[4px] after:left-0 after:rounded after:transition-all after:duration-200 after:opacity-0 hover:after:opacity-100 flex items-center gap-1 font-semibold text-base"
    >
      {children}
    </Link>
  )
}