import React, { useEffect, useState } from 'react'
import Chatmessage from './Chatmessage'
import { useDispatch, useSelector } from 'react-redux'
import { addmesssages } from '../utils/chatSlice';
import store from '../utils/store';
import { generateUsername } from "unique-username-generator";
import { generate, count } from "random-words";

const Livechat = () => {

// subscribe
const livemessages=useSelector(store=>store.chat.messages);
const [mymsg, setmymsg] = useState("")
const dispatch=useDispatch();

// Api call using api polling(1000ms)

useEffect(()=>{
    // Api 
    let id =setInterval(()=>{
        // 1000ms
       
        // dispatching the action to add messages
        
        dispatch(addmesssages({
            username:generateUsername(),
            message:generate({ min: 3, max: 5 }).join(" "),
            
        }))

    },1500)

    return ()=>{
        clearInterval(id)
    }
},[])

  return (
    <>
    
    <div className='border border-gray-500 rounded-lg w-full h-full overflow-y-scroll 
    flex flex-col-reverse' >
     
     {livemessages.map((m,i)=> <Chatmessage key={i} props={m} />)}
    
    </div>
    <form className='w-[600px] border border-gray-200 p-5'

    onSubmit={(e)=>{
       e.preventDefault();
       dispatch(addmesssages({
        username:"Me 😎",
        message:mymsg,
            
       }))

       setmymsg("")
    }}


    >
     <div>
        <input 
        value={mymsg}
        onChange={(e)=>setmymsg(e.target.value)}
         className='px-6 py-2 w-3/4 border-none outline-none rounded-md' type="text" />
        <button className='px-4 py-2 bg-black text-white rounded-md'>Send</button>
     </div>
    </form>
    </>
  )
}

export default Livechat
