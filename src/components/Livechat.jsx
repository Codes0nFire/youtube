import React, { useEffect } from 'react'
import Chatmessage from './Chatmessage'
import { useDispatch, useSelector } from 'react-redux'
import { addmesssages } from '../utils/chatSlice';
import store from '../utils/store';
import { generateUsername } from "unique-username-generator";
import { generate, count } from "random-words";

const Livechat = () => {

// subscribe
const livemessages=useSelector(store=>store.chat.messages);

const dispatch=useDispatch();

// Api call using api polling(1000ms)

useEffect(()=>{
    // Api 
    let id =setInterval(()=>{
        // 1000ms
        // console.log("API POLLING")
        // dispatching the action to add messages
        
        dispatch(addmesssages({
            username:generateUsername(),
            message:generate({ min: 3, max: 5 }).join(" "),
            
        }))

    },350)

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
    </>
  )
}

export default Livechat
