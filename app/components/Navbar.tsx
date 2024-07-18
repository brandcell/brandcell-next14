import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Navbar() {
  return (
    <div className='p-4 flex z-40 relative top-0 items-center justify-between'>
      <div className="flex items-end">
        <Link href={"/"}> <Image alt='brandcell-logo' src={'/brandcell.png'} width={155} height={31} /></Link>
        <ul className='hidden sm:flex gap-5 ml-12'><Link href='/about'>About Page</Link>
          <Link href='/blog'>Blog Page</Link>
          {/* <Link href='/users'>Users Page</Link> */}

        </ul>
      </div>

      <button className='hidden sm:block'>Get Free Site Audit</button>




    </div>



  )
}

export default Navbar