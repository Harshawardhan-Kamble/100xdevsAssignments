
import { RecoilRoot,useRecoilValue } from 'recoil'
import { jobsCount, messageCount, networkCount, notificationCount, totalSelector } from './store/atom'
import { useState,useEffect } from 'react'
import axios from 'axios';
function App() {
  return (
    // <RecoilRoot>
      <Main></Main>
    // </RecoilRoot>
  )
}
function Main(){
// const network=useRecoilValue(networkCount)
// const notification=useRecoilValue(notificationCount)
// const message=useRecoilValue(messageCount)
// const jobs=useRecoilValue(jobsCount)
// We can achieve the same using usememo instead of selctors. Here's how
// const total=useMemo(()=>{
//   return network+notification+message+jobs
// },[network,notification,message,jobs])
// const total=useRecoilValue(totalSelector)
const [count,setCount]=useState({})
useEffect(()=>{
  axios.get("http://localhost:3000/")
  .then((response)=>{
    setCount(response.data)
    console.log(response.data)
  })
  .catch((error)=>{
    console.log(error);
  })
},[])
	
  return (
    <>
      <button>Home</button>
      <button>Network{count.network}</button>
      <button >Jobs{count.jobs}</button>
      <button >Messages{count.messaging}</button>
      <button>Notifications{count.network}</button>
      {/* <button>Me{total}</button> */}
    </>
  )
}

export default App
