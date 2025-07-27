
"use client";
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'




const Header = () => {

    const path =usePathname();

     useEffect(()=>{
        console.log(path);
     },[])
  return (
    <div className='flex p-4 justify-between items-center  bg-gray-100 shadow-sm'>
    <div className='flex items-center'>
      <Image src="/logo.svg" alt="logo" width={60} height={60} />
      <span className='ml-2 text-3xl font-semibold text-gray-700'>prepAI</span>
    </div>
    <ul className='hidden md:flex gap-20'>
   
      <Link href={'/dashboard '}>
        <li className={`hover:text-primary hover:font-semibold transition-all cursor-pointer ${path == '/dashboard' && 'text-primary font-bold'}`}>Dashboard</li>
      </Link>
      <Link href={'/dashboard/questions'}>
        <li className={`hover:text-primary hover:font-semibold transition-all cursor-pointer ${path == '/dashboard/questions' && 'text-primary font-bold'}`}>Contact Us</li>
      </Link>
      <Link href={'/dashboard/upgrade'}>
        <li className={`hover:text-primary hover:font-semibold transition-all cursor-pointer ${path == '/dashboard/upgrade' && 'text-primary font-bold'}`}>Upgrade</li>
      </Link>
      <Link href={'/dashboard/about'}>
        <li className={`hover:text-primary hover:font-semibold transition-all cursor-pointer ${path == '/dashboard/about' && 'text-primary font-bold'}`}>About Us</li>
      </Link>
    
   
    </ul>
    <UserButton />
  </div>
  
  )
}

export default Header