import React from 'react'

const Comment = (props) => {
  return (
    <div className='p-4 mb-2  border-b-2 shadow-lg flex gap-4' >
      <img className='h-8' src="/dummy.png" alt="" />
      <div>
        <h3 className='font-bold'>{props.data.username}</h3>
        <p>{props.data.comment}</p>
      </div>
    </div>
  )
}

export default Comment
