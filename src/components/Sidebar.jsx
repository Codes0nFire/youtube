import React from 'react'
import MenuItems from './MenuItems'
import { useSelector } from 'react-redux'

const Sidebar = () => {
  // Subscribe to the store(not whole store but is menuopen)
  const isMenuOpen=useSelector((store)=>store.app.isMenuOpen)

  return !isMenuOpen ? null: (
    <div className='w-[15%] border-r-2 border-black '>
      <h1>Will desgin this soon..</h1>
    </div>
  )
}

export default Sidebar
