import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  // const getApi = "https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=295d85be12b4c362282d5e321ab8b2df"
  
  async function show(){
      const res = "https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=295d85be12b4c362282d5e321ab8b2df"
      const data = res.JSON()
      console.log(data)
  }


  return (
    <>
     <input className='border text-center'></input>
     <button className='border-2 rounded '>CLICK ME</button> 
    
    </>
  )
}

export default App
