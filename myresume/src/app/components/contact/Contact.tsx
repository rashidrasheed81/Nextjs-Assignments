import Link from 'next/link'
import { BsTelephone } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { BiMap } from 'react-icons/bi';


export default function Contact() {
  return (
    <>
<section className='bg-[url(/images/background/606.jpg)] bg-cover w-screen bg-fixed '>
<h2 className='text-3xl font-bold text-center md:mb-8 mb-2 md:pt-10 pt-6'>Get in Touch</h2>

    <div className='flex md:flex-row flex-col'>

    <div className='md:w-1/2  md:pl-[160px] pl-4 md:pr-0 pr-4  justify-center items-center'>
        <ul className='text-gray-600 pt-7 '>
                <li><Link href={'/'} className='hover:text-green-600 flex items-center font-semibold md:text-xl text-lg'><BsTelephone size={18} className='mr-2 '/>+923167634620</Link></li>
                <li><Link href={'/'} className='hover:text-green-600 flex items-center font-semibold md:text-xl text-lg pt-2'><AiOutlineMail size={18} className='mr-2'/>rashidrasheed81@gmail.com</Link></li>
                <li><Link href={'/'} className='hover:text-green-600 flex items-center font-semibold md:text-xl text-lg pt-2 md:mb-0 mb-8'><BiMap size={18} className='mr-2 '/>Kot Radha Kishen, Pakistan</Link></li>

            </ul>
        </div>


    <div className='md:w-1/2 md:pr-[160px] pr-4 md:pl-0 pl-4 mb-14'> 
        <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
        <form className="grid grid-rows-2 gap-4 md:grid-cols-2 text-left container">
        <div className="grid grid-rows-2 "><label className="font-semibold pb-3">First Name</label>
        <input placeholder="First Name" type="text"className=" p-2 border-solid border-2 outline-none focus:border-orange-400 min-w-0 rounded"/></div>
        <div className="grid grid-rows-2 "><label className="font-semibold pb-3 ">Last Name</label>
        <input placeholder="Last Name" type="text" className="p-2 border-solid border-2 outline-none focus:border-orange-400 min-w-0 rounded "/></div>
        <div className="grid grid-rows-2 md:col-span-2"><label className="font-semibold pb-3">Email</label>
        <input placeholder="Email here" type="email" className="p-2 border-solid border-2 outline-none focus:border-orange-400 rounded "/></div>
        <div className="grid grid-rows-2"><label className="font-semibold pb-3">City</label>
        <input placeholder="Where are you from?" type="email" className="p-2 border-solid border-2 outline-none focus:border-orange-400 min-w-0 rounded "/></div>
        <div className="grid grid-rows-2"><label className="font-semibold pb-3">Phone</label>
        <input placeholder="Phone number" type="number" className="p-2 border-solid border-2 outline-none focus:border-orange-400 min-w-0 rounded "/></div>
        <label className="font-semibold">Message</label>
        <textarea typeof="2xl" rows={4} placeholder="Write your notes or question here..." className="p-2 md:col-span-2 border-solid border-2 outline-none focus:border-orange-400 rounded"></textarea>
        <div className="md:col-span-2">
            <a href="#">
            <button className="p-2 text-neutral-100 font-semibold px-6 py-3 bg-orange-400 rounded hover:bg-orange-500 w-full" type="submit">Send Message</button>
            </a></div></form></div>

        </div>


        </div>
        </section>
    

    </>
  )
}
