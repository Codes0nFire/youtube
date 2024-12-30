import React from 'react'

const Chatmessage = ({props,id}) => {
    
  return (
    <div className='p-5 flex gap-2 items-center border-b-2 shadow-lg' >
      <img className='h-8' src="/dummy.png" alt="" />
      <div className='flex gap-2 items-center'>
        <h1 className='font-bold' >{props.username}</h1>
        <p>{props.message}</p>
      
      </div>
    </div>
  )
}

export default Chatmessage
