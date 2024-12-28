import React from 'react'
import Sidebar from './Sidebar'
import VideoContainer from './VideoContainer'
import MainConatiner from './MainConatiner'

const Body = () => {
  return (
    <div className='flex w-full h-[92%] overflow-hidden' >
      <Sidebar/>
      <MainConatiner/>
    </div>
  )
}

export default Body
