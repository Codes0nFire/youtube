import { useState } from 'react'
import './App.css'
import Head from './components/Head'
import Body from './components/Body'
import { Provider } from 'react-redux'
import store from './utils/store'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import WatchPage from './components/WatchPage'

function App() {
  

  return (
    
    
    <div className='bg-slate-100 h-screen w-screen'>
    <Head/>
    <Body/>
    </div>
   
    
  )
}

export default App
