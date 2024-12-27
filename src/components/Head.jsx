import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';


const Head = () => {
  
  
  const dispatch=useDispatch();
  // Dispaching action on click of menu
  const toggleHandler=()=>{
       dispatch(toggleMenu());
  }

  return  (
    <div className='flex itemscenter justify-between px-2 py-5' >

      <div className='flex gap-5'>
        <img 
         onClick={()=>toggleHandler()}
         className='h-7 cursor-pointer' src="/menu.png" alt="menu" />
        <img className='h-7' src="/youtube.png" alt="youtube" />
      </div>

      <div className='w-1/4'>
        <input 
        className='border border-gray-300 py-[5px] outline-none w-3/4
        rounded-l-full ' type="text" />

        <button className='py-[5px] px-4 border border-gray-300 rounded-r-full '>Search</button>
      </div>

      <div>
        <img className='h-7' src="/dummy.png" alt="profile" />
      </div>
    </div>
  )
}

export default Head
