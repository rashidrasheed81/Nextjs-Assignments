import Image from 'next/image'
import React from 'react'

export default function Home() {
  return (
    <>
    <div className='bg-[url(/images/bghome.jpg)] bg-cover bg-fixed text-center md:px-44 px-6 md:py-40 py-20 rounded-b-[30%]'>
        <h3 className='font-bold md:text-2xl text-lg font-serif'>Earn as you Learn Program</h3>
        <h1 className='text-black md:text-6xl text-2xl font-extrabold md:mt-4 mt-0'>Prepare yourself for the Next Generation of Internet with <span className='text-blue-800'>Panaverse</span></h1>
        <p className='text-black md:text-xl text-md md:mt-6 mt-4 md:px-[80px] font-bold'>One Year Panaverse DAO Earn as you Learn Program. Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, and Ambient Computing/IoT Technologies</p>
        <button className='bg-blue-700 px-5 md:py-3 py-2 font-semibold rounded-lg text-white mt-4 md:mb-0 mb-4'>More Info</button>
    </div>
        <div className='flex shadow-2xl w-[70%] justify-around md:py-[40px] py-[80px] space-y-14 items-center bg-white rounded-3xl m-auto md:-mt-20 -mt-12 md:flex-row flex-col' >
            <Image src='/images/panaverse.png' alt='pana' width={150} height={150} />
            <Image src='/images/logopana.svg' alt='pana' width={150} height={150}/>
            <Image src='/images/saylogo.webp' alt='pana' width={250} height={150}/>
        </div>

    <div className='flex w-[80%] m-auto md:mt-10 mt-6 md:flex-row flex-col'>
        <div className='md:w-1/2 '>
            <Image src='/images/logo2.webp' alt='logo2' width={400} height={400}/>
        </div>
        <div className='md:w-1/2 md:pt-10 pt-2'>
        <h1 className='text-black md:text-5xl text-3xl font-bold md:mt-4 mt-1 border-l-[6px] border-l-blue-700 md:pl-3 pl-1'>Program Of Studies</h1>
        <p className='text-black md:text-lg text-base md:font-normal font-bold mt-4 text-justify'>This curriculum is intended for beginners who want to learn software development from the ground up. It is going to be a fifteen-month-long hybrid program that includes both onsite and online classes and is divided into five quarters of 13 weeks each. The emphasis will be on hands-on learning by educating students to produce projects.Read More</p>
        <button className='bg-blue-700 px-5 md:py-3 py-2 font-semibold rounded-lg text-white mt-4'>Read More</button>
        </div>
    </div>

    <div className='flex my-10  md:flex-row flex-col md:items-center'>
        <div className='bg-[url(/images/bootcamp3.jpg)] bg-cover bg-center h-[11cm] md:w-1/2 ' ></div>

        <div className='bg-[url(/images/line-background.avif)] md:w-1/2 -my-6  md:p-20 p-7  '>
        <h1 className='text-black md:text-5xl text-3xl font-bold mt-4 border-l-[6px] border-l-blue-700 '>Bootcamp 2023</h1>
        <p className='text-black md:text-lg text-base md:font-normal font-bold mt-4 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt officiis, labore perferendis eius eos recusandae voluptatum suscipit at, architecto impedit tempora excepturi nostrum odio, blanditiis numquam veniam fugiat voluptatem delectus!Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt officiis, labore perferendis eius eos recusandae voluptatum suscipit at, architecto impedit tempora excepturi nostrum odio, blanditiis numquam veniam fugiat voluptatem delectus!</p>
        <button className='bg-blue-700 px-5 md:py-3 py-2 rounded-lg font-semibold text-white mt-4'>Read More</button>
       </div>
    </div>

    </>
  )
}
