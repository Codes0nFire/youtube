import React, { useEffect } from 'react'



const Comment = ({data}) => {
  
  const {textOriginal, authorDisplayName,authorProfileImageUrl,id}=data
  return (
    <div className='p-4 mb-2  border-b-2  shadow-lg flex gap-4' >
      <img className='h-8 rounded-full' src={authorProfileImageUrl ? authorProfileImageUrl : "./dummy.png"} alt="" />
      <div>
        <h3 className='font-bold'>{authorDisplayName }</h3>
        <p>{textOriginal}</p>
      </div>
    </div>
  )
}

export default Comment
