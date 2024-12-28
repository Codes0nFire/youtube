import React from 'react'
import Button from './Button'

const Buttonlist = () => {
  // List of buttons
  const buttonlist=["All","New","Movies","Latest","Comedy","Drama","Horror","All","New","Movies","Latest","Comedy","Drama","Horror"]
  return (
    <div className='flex p-4 gap-2 ' >
    {/* rendering all buttons using a map */}
     {buttonlist.map((button,i)=> <Button key={i} data={button} />)}
    </div>
  )
}

export default Buttonlist
