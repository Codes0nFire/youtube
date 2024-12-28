import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'

// YOutube video list api
//  https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=[YOUR_API_KEY]

const VideoContainer = () => {

  useEffect(()=>{
    getVideos();
  },[])
  const api=import.meta.env.VITE_API_KEY 
  const getVideos=async()=>{
    let data=await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${api}`)
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
