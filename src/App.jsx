import { useState,useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WeatherCard from './components/WeatherCard'
import axios from 'axios'
import Todo from './assets/Todo'

function App() {
  
  const[location,setLocation] = useState("");
  const[data,setData] = useState([null])
  const cityInput = useRef();

   const getWeather = async()=> {
    if(!location) return;
    try{
      const getApi = (`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=295d85be12b4c362282d5e321ab8b2df`)
       const res = await axios.get(getApi)
          console.log("Weather Data:", res.data);
          setData(res.data)
   }catch(error){
     console.log("axios error:", error);
    }
  }

  useEffect(()=>{
    getWeather()
  },[location])
  
  const getInputValue=()=>{
    setLocation(cityInput.current.value)
  }
  
 
  return (
    <>
    <h1 className='items-center justify-center flex text-3xl p-7'>Weather App</h1>
    <div className=' pt-3 gap-1'>

    <input className=' bg-amber-50 border pl-3 rounded w-96' placeholder='Search Here' ref={cityInput}></input>

    <button className=' bg-amber-200 rounded border px-2 cursor-pointer ' onClick={getInputValue} >Get</button>
    <WeatherCard data ={data}/>
    </div>

    {/* todo  */}

    <Todo/>
    </>
  )
 }

 



export default App
