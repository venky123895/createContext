
import Home from './Home'
import Contact from './Contact'
import Service from './Service'
import { GloabaData } from '../App'
import { useContext } from 'react'
const MainContainer = () => {
const{page}= useContext(GloabaData)
  return (
    <div style={{
        paddingTop:"50px"
    }}>
        {
            (page==="Home") ? (<Home/>) : (page==="Contact") ? (<Contact/>) : (page==="Service") ? (<Service/>) : (<Home/>)
        }

     </div>
  )
}

export default MainContainer