import React from "react";
import { children, createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export const Weathercontext =createContext()


export const WeatherFunction=({children})=>{

    const[inp,setInp]=useState("")
       const [weather, setWeather] = useState([]);
       const [data,setData]=useState({})
    //    const[place,setPlace]=useState("")
       const nav = useNavigate();
   
        const submit=(e)=>{
         e.preventDefault()
        }
    
            const Change=(e)=>{
              setInp(e.target.value)
            }
        const Click = async () => {
  try {
    if (inp.trim() !== '') {
      const Api = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${inp}&units=metric&appid=0cf3d05c6cb443424f42856d18e090b3`)
      setWeather(Api.data.weather)
      setData(Api.data)
      console.log(Api.data)
      nav('/display')
    } else {
      console.log("Input is empty")
    }
  } catch (error) {
    console.log("API error:", error)
  }
}

    return(
      <Weathercontext.Provider value={{weather,inp,submit,Click, Change,data}}>
        {children}
      </Weathercontext.Provider>
    )

} 
