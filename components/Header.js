import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '../img/framer-logo.png'

const Header = () => {
    return (
        <div className='bg-secondary py-4 border-b border-gray'>
            <div className='md:w-[70%] w-4/5 mx-auto text-textColor flex justify-between items-center'>
                <div>
                    <Image src={logo} alt='framer logo' width={35} height={35} />
                </div>
                <nav className='flex items-center gap-8'>
                    <Link className='hover:bg-gray px-4 py-2 rounded-md hover:text-white' href="#">Lessons</Link>
                    <Link className='hover:bg-gray px-4 py-2 rounded-md hover:text-white' href="#">Resource</Link>
                    <Link className='hover:bg-gray px-4 py-2 rounded-md hover:text-white' href="#">Blog</Link>
                    <Link className='bg-gray px-4 py-2 rounded-md hover:text-white' href="#">Get free course</Link>
                </nav>
            </div>
        </div>
    )
}

export default Header