import React from 'react'
import PostList from './PostList'

const Post = () => {
    const posts = [
        {id: 1, title: 'How To Create A Galaxy Button in Framer'},
        {id: 2, title: 'How To Use HTML Tags in Framer'}
    ]
  return (
    <div className='grid grid-cols-2 gap-16'>
        {posts.map((post)=>(
            <PostList title={post.title}/>
        ))}
    </div>
  )
}

export default Post