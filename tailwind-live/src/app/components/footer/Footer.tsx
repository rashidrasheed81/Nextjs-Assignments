import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <>
    <div className='md:flex align-middle gap-[30px] px-[60px] py-[40px]  bg-black'>
        <div className='md:w-1/4 mb-[20px] md:mb-[0px] '>
            <h1 className='text-white text-xl font-bold mb-5 border-l-blue-500 border-l-[6px] pl-3'>ABOUT US</h1>
            <Image src='/images/panaverse.png' alt='panaverse' width={120} height={120}/>
            <p className='text-gray-400 pr-[36px] mt-5 text-justify'>The Future of the Web is Web 3.0, Metaverse, and Edge Computing. Panaverse DAO is a movement to spread these technologies globally.</p>
        </div>
        <div className='md:w-1/4 mb-[20px] md:mb-[0px] '>
            <h1 className='text-white text-xl font-bold border-l-blue-500 border-l-[6px] pl-3'>USEFUL LINKS</h1>
            <ul className='text-gray-600 pt-7'>
                <li><Link href={'/'} className='hover:text-white'>Home</Link></li>
                <li><Link href={'/'} className='hover:text-white'>Explore</Link></li>
                <li><Link href={'/'} className='hover:text-white'>About</Link></li>
                <li><Link href={'/'} className='hover:text-white'>Contact</Link></li>
            </ul>
        </div>
        <div className='md:w-1/4 mb-[20px] md:mb-[0px] '>
            <h1 className='text-white text-xl font-bold border-l-blue-500 border-l-[6px] pl-3'>FOLLOW US</h1>
            <ul className='text-gray-600 pt-7'>
                <li><Link href={'/'} className='hover:text-white'>Facebook</Link></li>
                <li><Link href={'/'} className='hover:text-white'>Youtube</Link></li>
                <li><Link href={'/'} className='hover:text-white'>Twitter</Link></li>
                <li><Link href={'/'} className='hover:text-white'>Linkedin</Link></li>
                <li><Link href={'/'} className='hover:text-white'>Github</Link></li>

            </ul>
        </div>
        <div className='md:w-1/4 mb-[20px] md:mb-[0px] '>
            <h1 className='text-white text-xl font-bold border-l-blue-500 border-l-[6px] pl-3'>CONTACT US</h1>
            <ul className='text-gray-600 pt-7'>
                <li><Link href={'/'} className='hover:text-white'>+923167634620</Link></li>
                <li><Link href={'/'} className='hover:text-white'>rashidrasheed81@gmail.com</Link></li>
                <li><Link href={'/'} className='hover:text-white'>Kot Radha Kishen, Pakistan</Link></li>

            </ul>
        </div>
    </div>
    <div className='md:flex md:justify-between md:px-[60px] py-[10px] text-center'>
        <p className='font-bold'><Link href={'/'} target='_blank'>All Rights Reserved © | <br className='md:hidden'/> Rashid Rasheed</Link></p>
        <div>
            <Link href={'/'}>Legal </Link>|
            <Link href={'/'}> Terms of Use </Link>|
            <Link href={'/'}> Privacy Policy</Link>
        </div>
    </div>
    </>
  )
}
