import React from 'react'
import Comment from './Comment';

// "This is data :",data.items[0].snippet.topLevelComment.snippet
const Commentlist = ({mockData}) => {
    
  return (
    <div>
       
        {mockData && mockData.map((c,i)=>{
         
          return <div key={c.id}> <Comment data={c.snippet.topLevelComment.snippet}/>
         { <div className='ml-4 border-l-2 border-b-2 border-gray-300' >
            {/* <Commentlist mockData={c.replies}/> */}
        </div>}
          </div>

          })}
        
        
    
    </div>
  )
}

export default Commentlist
