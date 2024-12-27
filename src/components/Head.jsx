import React from 'react'


const Head = () => {
  return (
    <div className='flex itemscenter justify-between px-2 py-5' >
      <div className='flex gap-5'>
        <img className='h-7' src="/menu.png" alt="logo" />
        <img className='h-7' src="/youtube.png" alt="youtube" />
      </div>
      <div>
        <input className='border border-gray-500 ' type="text" />
        <button>🔍</button>
      </div>
      <div>
        <img className='h-7' src="/dummy.png" alt="profile" />
      </div>
    </div>
  )
}

export default Head
