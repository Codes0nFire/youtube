import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import WatchPage from './components/WatchPage.jsx'
import Head from './components/Head.jsx'
import { Provider } from 'react-redux'
import store from './utils/store.js'
import Searchresults from './components/Searchresults.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={store} >
  <BrowserRouter>
   <Routes>
    <Route path='/' element={<App/>}/>
    <Route path='/watch' element={<WatchPage/>}/>
    <Route path='/search' element={<Searchresults/>}/>
   </Routes>
  </BrowserRouter>
  </Provider>
  
)
