import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'



const VideoContainer = () => {

  useEffect(()=>{
    getVideos();
    
  },[])

  

  const api=import.meta.env.VITE_API_KEY
  const yt_api=import.meta.env.VITE_YT 
  const getVideos=async()=>{
    let data=await fetch(`${yt_api}${api}`)
    let videosdata=await data.json()
    setvideos(videosdata.items)
  }

  const [videos, setvideos] = useState([])

  

  return videos.length>0 &&(
    <div  className='flex flex-wrap w-[100%]' >
      {videos.map(data=><Link key={data.id} to={`/watch?v=${data.id}`} ><VideoCard  info={data} /></Link>)}
    </div>
  )
}

export default VideoContainer
