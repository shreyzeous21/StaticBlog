import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Img from "@/public/profile-img.png"

const Logo = () => {
  return (
    <Link href="/" className='flex items-center text-dark dark:text-light'>
        <div className='w-12 md:w-16 rounded-full overflow-hidden border border-solid border-dark dark:border-gray  mr-2 md:mr-4'>
            <Image src={Img} alt='shrey' className='w-full rounded-full h-auto' sizes='20vw' priority/>
        </div>
        <span className='font-bold dark:font-semibold text-lg md:text-xl'>Shrey | Blogs</span>
    </Link>
  )
}

export default Logo