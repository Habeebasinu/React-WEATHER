import React from "react"
import {  Route, Routes } from "react-router-dom"
import WEATHER from './component/Weather2'
import DISPLAY from './component/WeatherDisplay'
 
function App() {
  

  return (
    <>
      
      <Routes>
        <Route path="/" element={< WEATHER/>}></Route>
        <Route path="/display" element={<DISPLAY/>}></Route>
      </Routes>
      
       
    </>
  )
}

export default App
