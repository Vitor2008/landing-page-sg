import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'

function App() {

  return (
    <div>
        <Navbar/>
        <div className='site-container'>
          <Home/>
        </div>
    </div>
  )
}

export default App
