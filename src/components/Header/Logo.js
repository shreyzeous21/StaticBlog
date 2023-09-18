import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Img from "@/public/profile-img.png"

const Logo = () => {
  return (
    <Link href="/">
        <div>
            <Image src={Img} alt='shrey' className='w-full rounded-full h-auto'/>
        </div>
        <span>Shrey | Blogs</span>
    </Link>
  )
}

export default Logo