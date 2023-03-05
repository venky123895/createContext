import React from 'react'
import { GloabaData } from '../App'
import { useContext } from 'react'
const Navbar = () => {
    const{page,setPage}=useContext(GloabaData)
  return (
    <div>
        <ul style={{
            display:"flex",
            justifyContent:"space-evenly",
            listStyle:"none",
            fontSize:"1.3rem",
            paddingTop:"50px",
            cursor:"pointer"
        }}>
            <li onClick={()=>{
                // localStorage.setItem("activate","Home");
                // window.location.reload()
                setPage("Home")
                console.log(page)
            }}>Home</li>
            <li onClick={()=>{
                // localStorage.setItem("activate","Contact");
                // window.location.reload()
                setPage("Contact")
                console.log(page)
            }}>Contact</li>
            <li onClick={()=>{
                // localStorage.setItem("activate","Service");
                // window.location.reload()
                setPage("Service");
                console.log(page)
            }}>Service</li>
        </ul>
    </div>
  )
}

export default Navbar