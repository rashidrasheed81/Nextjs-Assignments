import Image from 'next/image'
import Link from 'next/link'
import { IoLogoVercel } from 'react-icons/io5';
import { BiLinkExternal} from 'react-icons/bi';


export default function Projects() {
  return (
    <>
    <div className=' md:my-16 my-8'>
        <h2 className='text-3xl font-bold text-center md:pb-14 pb-6'>Recent Projects</h2>
   <div className="max-w-7xl mx-auto p-8 grid sm:grid-cols-2 md:grid-cols-3 gap-x-20 gap-y-12 bg-gray-100 text-gray-800 ">

  <div className="bg-white rounded-lg drop-shadow-2xl">
    <Image className='w-full md:md:h-48 h-36 object-cover rounded-t-lg' src="/images/proj/panachak.png" alt="panaverse chakra" width={300} height={300}/>
    <div>
      <h2 className='font-semibold text-xl text-center pt-2'>Panaverse Website</h2>
      <p className='mt-2 mb-2 text-center font-semibold'>Using Nextjs, Chakra Ui & Typescript</p>
      <p className='mb-2 text-lg font-bold text-blue-600 text-center'>Have a look </p>
      <div className='flex justify-center '>
      <BiLinkExternal className='hidden md:flex'  size={20}/>
      <p className='px-2 pb-8 text-sm font-bold text-center '><Link href={'https://panaverse-nine.vercel.app/'} target='_blank'>https://panaverse-nine.vercel.app/</Link></p>
      </div>      
    </div>
  </div>

  <div className="bg-white rounded-lg drop-shadow-2xl">
    <Image className='w-full md:h-48 h-36 object-cover rounded-t-lg' src="/images/proj/panachak1.png" alt="panaverse chakra1" width={300} height={300}/>
    <div>
      <h2 className='font-semibold text-xl text-center pt-2'>Panaverse Website</h2>
      <p className='mt-2 mb-2 text-center font-semibold'>Using Nextjs, Chakra Ui & Typescript</p>
      <p className='mb-2 text-lg font-bold text-blue-600 text-center'>Have a look </p>
      <div className='flex justify-center'>
      <BiLinkExternal className='hidden md:flex' size={20}/>
      <p className='px-2 pb-8 text-sm font-bold text-center '><Link href={'https://panasite-two.vercel.app/'} target='_blank'>https://panasite-two.vercel.app/</Link></p>
      </div>      
    </div>
  </div>

  <div className="bg-white rounded-lg drop-shadow-2xl">
    <Image className='w-full md:h-48 h-36 object-cover rounded-t-lg' src="/images/proj/pricegui.png" alt="panaverse chakra" width={300} height={300}/>
    <div>
      <h2 className='font-semibold text-xl text-center pt-2'>Price GUI</h2>
      <p className='mt-2 mb-2 text-center font-semibold'>Using Nextjs, Chakra Ui & Typescript</p>
      <p className='mb-2 text-lg font-bold text-blue-600 text-center'>Have a look </p>
      <div className='flex justify-center'>
      <BiLinkExternal className='hidden md:flex' size={20}/>
      <p className='px-2 pb-8 text-sm font-bold text-center'><Link href={'https://pricingui-kappa.vercel.app/'} target='_blank'>https://pricingui-kappa.vercel.app/</Link></p>
      </div>      
    </div>
  </div> 


<div className="bg-white rounded-lg drop-shadow-2xl">
    <Image className='w-full md:h-48 h-36 object-cover rounded-t-lg' src="/images/proj/todoapp.png" alt="panaverse chakra" width={300} height={300}/>
    <div>
      <h2 className='font-semibold text-xl text-center pt-2'>Todo App</h2>
      <p className='mt-2 mb-2 text-center font-semibold'>Using Nextjs & Typescript</p>
      <p className='mb-2 text-lg font-bold text-blue-600 text-center'>Have a look </p>
      <div className='flex justify-center'>
      <BiLinkExternal className='hidden md:flex' size={20}/>
      <p className='px-2 pb-8 text-sm font-bold text-center'><Link href={'https://todoapp-pink-six.vercel.app/'} target='_blank'>https://todoapp-pink-six.vercel.app/</Link></p>
      </div>      
    </div>
  </div>

  <div className="bg-white rounded-lg drop-shadow-2xl">
    <Image className='w-full md:h-48 h-36 object-cover rounded-t-lg' src="/images/proj/tailwindpro.png" alt="panaverse chakra" width={300} height={300}/>
    <div>
      <h2 className='font-semibold text-xl text-center pt-2'>Panaverse Website</h2>
      <p className='mt-2 mb-2 text-center font-semibold'>Using Nextjs, Tailwind CSS & Typescript</p>
      <p className='mb-2 text-lg font-bold text-blue-600 text-center'>Have a look </p>
      <div className='flex justify-center'>
      <BiLinkExternal className='hidden md:flex' size={20}/>
      <p className='px-2 pb-8 text-sm font-bold text-center'><Link href={'https://tailwind-live.vercel.app/'} target='_blank'>https://tailwind-live.vercel.app/</Link></p>
      </div>      
    </div>
  </div>

  <div className="bg-white rounded-lg drop-shadow-2xl">
    <Image className='w-full md:h-48 h-36 object-cover rounded-t-lg' src="/images/proj/tailwindpro.png" alt="panaverse chakra" width={300} height={300}/>
    <div>
      <h2 className='font-semibold text-xl text-center pt-2'>Panaverse Website</h2>
      <p className='mt-2 mb-2 text-center font-semibold'>Using Nextjs, Tailwind CSS & Typescript</p>
      <p className='mb-2 text-lg font-bold text-blue-600 text-center'>Have a look </p>
      <div className='flex justify-center'>
      <BiLinkExternal className='hidden md:flex' size={20}/>
      <p className='px-2 pb-8 text-sm font-bold text-center'><Link href={'https://tailwind-live.vercel.app/'} target='_blank'>https://tailwind-live.vercel.app/</Link></p>
      </div>      
    </div>
  </div>

  
  
</div>
</div>




    
    </>
    
  )
}
