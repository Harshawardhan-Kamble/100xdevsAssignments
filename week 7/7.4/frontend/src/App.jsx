
import { RecoilRoot,useRecoilState,useRecoilValue } from 'recoil'
import {notificationAtom,  totalSelector } from './store/atom'
import {useEffect } from 'react'
import axios from 'axios';
function App() {
  return (
    <RecoilRoot>
      <Main></Main>
    </RecoilRoot>
  )
}
function Main(){
const [allNotifications,setAllNotifications]=useRecoilState(notificationAtom)
const {messaging,jobs,network,notification}=allNotifications
const total=useRecoilValue(totalSelector)
useEffect(()=>{
  axios.get("http://localhost:3000/")
  .then((response)=>{
    setAllNotifications(response.data)
  })
  .catch((error)=>{
    console.log(error);
  })
},[])
	
  return (
    <>
      <button>Home</button>
      <button>Network{network>10?"10+":network}</button>
      <button >Jobs{jobs>10?"10+":jobs}</button>
      <button >Messages{messaging>10?"10+":messaging}</button>
      <button>Notifications{notification>10?"10+":notification}</button>
      <button>Me{total}</button>
    </>
  )
}

export default App
