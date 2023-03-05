import React from 'react'

const Navbar = () => {
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
                localStorage.setItem("activate","Home");
                window.location.reload()
            }}>Home</li>
            <li onClick={()=>{
                localStorage.setItem("activate","Contact");
                window.location.reload()
            }}>Contact</li>
            <li onClick={()=>{
                localStorage.setItem("activate","Service");
                window.location.reload()
            }}>Service</li>
        </ul>
    </div>
  )
}

export default Navbar