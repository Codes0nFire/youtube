import React from 'react'

const VideoCard = ({info}) => {
  
  const {snippet, statistics}=info
  const{
    channelTitle,
    description,
    localized,
    publishedAt,
    tags,
    thumbnails,
    title

  }=snippet 

  const {
commentCount,
favoriteCount,
likeCount,
viewCount,
  }=statistics
  
// console.log(snippet,statistics)
  return (
   
      <div className='p-4 w-80 shadow-lg h-80' >
        <img className='w-72 rounded-lg' src={thumbnails.medium.url} alt="" />
        <ul>
          <li className='font-bold ' >{title}</li>
          <li>{channelTitle}</li>
          <li>{viewCount} views</li>
          
        </ul>
        
          
         
      </div>
   
  )
}

export default VideoCard
