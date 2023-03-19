import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';


export default function Header() {
  return (
    <section className='sticky top-0 z-30 bg-gradient-to-r from-black to-zinc-200 text-white w-screen px-14'>  
      <div className="flex md:flex-row sm:flex-col justify-between items-center">

        <div className='flex items-center justify-evenly'>
        <Image className='py-2' src={'/images/rr1.png'} alt='nlogo' width={60} height={5}/>
        <h1 className="font-autograph mx-7 my-4 pt-1 md:text-4xl text-xl">Rashid Rasheed</h1>
        <div className='md:hidden '>
        <GiHamburgerMenu size={22}/>
        </div>
        </div>

          <ul className="hidden md:flex items-center text-black">
            <li className="mx-5 text-xl font-pacifico"><Link href={'/'}>Home</Link></li>
            <li className="mx-5 text-xl font-pacifico"><Link href={'/'}>About</Link></li>
            <li className="mx-5 text-xl font-pacifico"><Link href={'/'}>Portfolio</Link></li>
            {/* <li className="mx-5 text-xl font-pacifico"><Link href={'/'}>Skill</Link></li> */}                    
            <button className="mx-5 text-xl font-sans bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-3 rounded-full"><Link href={'/'}>Contact</Link></button>
        </ul>
        

        </div>    

    </section>
  )
}
