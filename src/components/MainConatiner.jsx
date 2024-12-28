import React from 'react'
import Buttonlist from './Buttonlist'
import VideoContainer from './VideoContainer'

const MainConatiner = () => {
  return (
    <div className='w-[85%] overflow-y-auto' >
      <Buttonlist/> 
      <VideoContainer/>
    </div>
  )
}

export default MainConatiner
