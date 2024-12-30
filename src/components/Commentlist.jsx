import React from 'react'
import Comment from './Comment';


const Commentlist = ({mockData}) => {
    
  return (
    <div>
       
        {mockData && mockData.map((c,i)=>{

          return <div key={i}> <Comment data={c}/>
         { <div className='ml-4 border-l-2 border-b-2 border-gray-300' >
            <Commentlist mockData={c.replies}/>
        </div>}
          </div>

          })}
        
        
    
    </div>
  )
}

export default Commentlist
