import React, { createContext, useState } from 'react'
import MainContainer from './components/MainContainer'
import Navbar from './components/Navbar'
import Button from './components/Button'

export const GloabaData= createContext()

const App = () => {
  const[dark,setDark]=useState(false);
  
  return (

      <div style={
        dark ? {backgroundColor:"black",color:"white"} : {backgroundColor:"white",color:"black"}
      }>
            <GloabaData.Provider value={{dark,setDark}}>
             <p style={{
              textAlign:"center", fontSize:"1.3rem"
             }}>I have Changed theme to {dark ? "Dark" : "Light"}</p>
          <p style={{
        textAlign:"center",
        fontSize:"1.3rem"
      }}>Geekster</p>
      <Navbar/>
      <Button/>
      <MainContainer/>
    </GloabaData.Provider>
      </div>
   
  )
}

export default App