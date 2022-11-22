import React from 'react'
import Post from './Post'

const Posts = () => {
  return (
    <div className="w-screen sm:w-full">
      <div className="my-6 max-w-[25rem] sm:max-w-[33rem] mx-auto">
        <Post />
      </div>
    </div>
  )
}

export default Posts