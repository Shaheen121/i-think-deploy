import React from 'react'
import CreatePost from './CreatePost'
import Leftbar from './Leftbar'
import Posts from './Posts'
import Rightbar from './Rightbar'

const Feed = () => {
  return (
    <div className='flex'>
      <Leftbar />
      <div className="mx-auto">
        <CreatePost />
        <Posts />
      </div>
      <Rightbar />
    </div>
  )
}

export default Feed