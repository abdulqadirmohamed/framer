import Post from '@/components/Post'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="bg-primary w-full min-h-screen	">
      <div className='md:w-[67%] w-4/5 mx-auto text-white'>
      <Post/>
      </div>
    </main> 
  )
}
