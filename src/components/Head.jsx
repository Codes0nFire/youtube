import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { Link } from 'react-router-dom';


const Head = () => {
  
  
  const dispatch=useDispatch();
  // Dispaching action on click of menu
  const toggleHandler=()=>{
       dispatch(toggleMenu());
  }

// Search suggestion api
let search_api=import.meta.env.VITE_SEARCH


const [searchQuery, setsearchQuery] = useState("")
const [suggestion, setsuggestion] = useState([])
const getsearchdata=async()=>{
  
   let blob=await fetch(`${search_api}${searchQuery}`)
   let data=await blob.json();
  //  setting the resonse suggestion in suggestion state
   setsuggestion(data[1])
   
}



useEffect(()=>{
  // we will use debouncing here
  // first make a api call for all searchs and 
  // then restrict those searchs where the delay of 
  // key press is <200 ms 
  // getsearchdata();

  // applying debouncing(<500ms)
  let timerid=setTimeout(()=>getsearchdata(),300)
 
  // in order to clear the timeout if another api request is made before the 
  // assihned debounceing time 
  return ()=>{
    clearTimeout(timerid);
  }

},[searchQuery])

  return  (
    <div className='flex itemscenter justify-between px-2 py-5 shadow-sm' >

      <div className='flex gap-5'>
        <img 
         onClick={()=>toggleHandler()}
         className='h-7 cursor-pointer' src="/menu.png" alt="menu" />
          <Link to="/" >
        <img className='h-7' src="/youtube.png" alt="youtube" />
        </Link>
      </div>

      
       
       

      <div className='w-1/4 relative'>
        <input 
        className='border border-gray-300 py-[5px] outline-none w-3/4
        rounded-l-full p-3'
        value={searchQuery}
        onChange={(e)=>setsearchQuery(e.target.value)}
         type="text" />

        <button className='py-[5px] px-4 border border-gray-300 rounded-r-full '>Search</button>
        <div className='bg-gray-100 w-[90%] absolute  rounded-md shadow-lg' >
          <ul>
           {suggestion.map(data=> <li key={data} className='border border-b-2 p-2 hover:bg-gray-200 rounded-md' >🔍{data}</li>)}
          </ul>
        </div>
      </div>

      <div>
        <img className='h-7' src="/dummy.png" alt="profile" />
      </div>
    </div>
  )
}

export default Head
