import React, { useEffect, useState } from 'react'
import Commentlist from './Commentlist'
import { useSearchParams } from 'react-router-dom'

// const mockData = [
//     {
//         username: "Alice",
//         comment: "This is the root-level comment by Alice.",
//         replies: [
//             {
//                 username: "Bob",
//                 comment: "This is a reply to Alice by Bob.",
//                 replies: [
//                     {
//                         username: "Charlie",
//                         comment: "Replying to Bob's comment here.",
//                         replies: [
//                             {
//                                 username: "Diana",
//                                 comment: "Replying to Charlie's comment. This is getting deep!",
//                                 replies: [
//                                     {
//                                         username: "Eve",
//                                         comment: "Adding to Diana's thoughts. Loving this thread!",
//                                         replies: [
//                                             {
//                                                 username: "Frank",
//                                                 comment: "We’re halfway there. Keep the thread going!",
//                                                 replies: [
//                                                     {
//                                                         username: "Grace",
//                                                         comment: "Level 7 reply. Almost at the end.",
//                                                         replies: [
//                                                             {
//                                                                 username: "Hank",
//                                                                 comment: "Level 8! The depth here is amazing.",
//                                                                 replies: [
//                                                                     {
//                                                                         username: "Ivy",
//                                                                         comment: "Almost at the max depth. Level 9!",
//                                                                         replies: [
//                                                                             {
//                                                                                 username: "Jack",
//                                                                                 comment: "This is the 10th level. Wow, we made it!",
//                                                                                 replies: []
//                                                                             }
//                                                                         ]
//                                                                     }
//                                                                 ]
//                                                             }
//                                                         ]
//                                                     }
//                                                 ]
//                                             }
//                                         ]
//                                     }
//                                 ]
//                             }
//                         ]
//                     }
//                 ]
//             }
//         ]
//     },
//     {
//         username: "Alice",
//         comment: "This is the root-level comment by Alice.",
//         replies: [
//             {
//                 username: "Bob",
//                 comment: "This is a reply to Alice by Bob.",
//                 replies: [
//                     {
//                         username: "Charlie",
//                         comment: "Replying to Bob's comment here.",
//                         replies: [
//                             {
//                                 username: "Diana",
//                                 comment: "Replying to Charlie's comment. This is getting deep!",
//                                 replies: [
//                                     {
//                                         username: "Eve",
//                                         comment: "Adding to Diana's thoughts. Loving this thread!",
//                                         replies: [
//                                             {
//                                                 username: "Frank",
//                                                 comment: "We’re halfway there. Keep the thread going!",
//                                                 replies: [
//                                                     {
//                                                         username: "Grace",
//                                                         comment: "Level 7 reply. Almost at the end.",
//                                                         replies: [
//                                                             {
//                                                                 username: "Hank",
//                                                                 comment: "Level 8! The depth here is amazing.",
//                                                                 replies: [
//                                                                     {
//                                                                         username: "Ivy",
//                                                                         comment: "Almost at the max depth. Level 9!",
//                                                                         replies: [
//                                                                             {
//                                                                                 username: "Jack",
//                                                                                 comment: "This is the 10th level. Wow, we made it!",
//                                                                                 replies: []
//                                                                             }
//                                                                         ]
//                                                                     }
//                                                                 ]
//                                                             }
//                                                         ]
//                                                     }
//                                                 ]
//                                             }
//                                         ]
//                                     }
//                                 ]
//                             }
//                         ]
//                     }
//                 ]
//             }
//         ]
//     },
    
// ];




const CommentContainer = () => {
const [id,setid]=useSearchParams();
const [mockData,setmockData]=useState();
const getcomments=async ()=>{
   let blob= await fetch(`${import.meta.env.VITE_COMMENT}${id.get("v")}&maxResults=100&key=${import.meta.env.VITE_API_KEY}`)
   let data= await blob.json();
   
    setmockData(data.items);
    
    
}

useEffect(()=>{
    getcomments();
   
},[])

  return (
    <div className='px-10 w-[90%]'>
       <h1>Comments :</h1>
      <Commentlist mockData={mockData}/>
    </div>
  )
}

export default CommentContainer
