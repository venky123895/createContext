
import Home from './Home'
import Contact from './Contact'
import Service from './Service'
const MainContainer = () => {

  return (
    <div style={{
        paddingTop:"50px"
    }}>{(localStorage.getItem("activate")==="Home")? (<Home/> ):(localStorage.getItem("activate")==="Contact") ? (<Contact/>) : (localStorage.getItem("activate")==="Service") ? (<Service/>) : (<Home/>)}</div>
  )
}

export default MainContainer