
import { useState,useEffect } from 'react'
import './App.css'
import Spinner from './Spinner'

function App() {
  interface User{
    username:string,
    email:string
  }
const [userData,setUserData]=useState<User>()
const [loading,setLoading]=useState(true)
  useEffect(()=>{
    setTimeout(() => {
      fetch("http://localhost:5555/")
      .then(response=>response.json())
      .then(data=>setUserData(data))
      setLoading(false)
    }, 3000);
   
  },[])
  if(loading){
    return <Spinner/>
  }
  return (
    <div>
      <p>{userData?.username}</p>
      <p>{userData?.email}</p>
    </div>
  )
}

export default App
