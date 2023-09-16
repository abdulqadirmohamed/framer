import Image from 'next/image'
import React from 'react'
import galleryImg from '../img/gallary_button.jpg'
import { BsArrowRightShort } from 'react-icons/bs'

const PostList = ({ title }) => {
    return (
        <div className='mt-10 cursor-pointer group'>
            <div className='relative overflow-hidden  '>
                <div className='absolute left-0 top-[-50px] m-3  flex gap-2 group-hover:top-0 '>
                    <span className='bg-lightBlue px-2 rounded-sm mx-2 '>How-to</span>
                    <span className='bg-lightBlue px-2 rounded-sm '>Hover</span>
                </div>
                    <Image className='rounded-md border-[1px] border-gray' src={galleryImg} alt='image' />
            </div>
            <div className='flex justify-between items-center gap-4 mt-6'>
                <h1 className='text-[22px]'>{title}</h1>
                <span className='bg-gray p-[1px] rounded-sm'>
                    <BsArrowRightShort size={30} />
                </span>
            </div>
        </div>
    )
}

export default PostList