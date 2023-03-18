import React from 'react';
import { VscGithub } from 'react-icons/vsc';
import { IoLogoTwitter, } from 'react-icons/io';
import { IoLogoFacebook } from 'react-icons/io';
import { RxInstagramLogo } from 'react-icons/rx';
import Image from 'next/image';
import Link from 'next/link';

export default function HomeHero() {
  return (
    <>
    {/* bg-gradient-to-r from-yellow-200 via-pink-200 to-pink-400 */}
    <section className='bg-[url(/images/background/1.jpg)] bg-cover w-screen bg-fixed'>
      <div className='md:pl-[160px] pl-8 md:pt-24 pt-8 text-lg font-bold '>Hello</div>
        <div className='md:flex p-5'>
          <div >
            <ul className='flex md:flex-col md:gap-4 gap-12 md:pl-10 pl-4'>
              <li><Link href={'/'}><VscGithub size={22} /></Link></li>
              <li><Link href={'/'}><IoLogoTwitter size={22} /></Link></li>
              <li><Link href={'/'}><IoLogoFacebook size={22}/></Link></li>
              <li><Link href={'/'}><RxInstagramLogo size={22}/></Link></li>
            </ul>
          </div>

          <div className='md:w-1/2 '>
        <h1 className=' md:pl-[80px] pl-4 text-4xl font-extrabold pt-8'>I am Rashid R. </h1>
        <p className='md:pl-[80px] pl-4 pt-8 pb-6 text-xl font-bold md:text-justify md:pr-[60px] pr-4 space-y-4'>I&apos;m a Web Developer , Working towards creating web apps and web developments that makes life easier and more meaningful.</p>
        <button className='md:ml-[80px] ml-4 md:mt-6 mt-2 mb-20 py-2 px-4 font-bold rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white'><Link href={'/'}>Profile</Link></button>

        </div>
        <div className='md:w-1/2 container flex  justify-center -mt-12 '>
          <div className='pt-4 w-64 h-64 object-cover rounded-full bg-blue-400 drop-shadow-2xl 	'>
            <div >
            <Image className='w-60 h-60 object-contain rounded-full bg-black ' src='/images/1.png' alt='myimage' width={200} height={200}/>
            </div>
          </div>        
        </div>        
        </div>      
    </section>
    </>
  )
}
