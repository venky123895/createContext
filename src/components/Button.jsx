import React, { useContext } from 'react'
import { GloabaData } from '../App'

const Button = () => {
    const {dark,setDark}=useContext(GloabaData)
  return (
    <div style={{textAlign:"center", paddingTop:"50px"}}><button onClick={()=>{
        setDark(!dark)
    //    console.log(dark)
    }} >Toggle Theme to Dark</button></div>
  )
}

export default Button