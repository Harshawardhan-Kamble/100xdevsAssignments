
import { RecoilRoot,useRecoilValue } from 'recoil'
import { jobsCount, messageCount, networkCount, notificationCount, totalSelector } from './store/atom'
import { useMemo } from 'react'
function App() {
  return (
    <RecoilRoot>
      <Main></Main>
    </RecoilRoot>
  )
}
function Main(){
const network=useRecoilValue(networkCount)
const notification=useRecoilValue(notificationCount)
const message=useRecoilValue(messageCount)
const jobs=useRecoilValue(jobsCount)
// We can achieve the same using usememo instead of selctors. Here's how
// const total=useMemo(()=>{
//   return network+notification+message+jobs
// },[network,notification,message,jobs])
const total=useRecoilValue(totalSelector)
  return (
    <>
      <button>Home</button>
      <button>Network{network>10?"10+":network}</button>
      <button >Jobs{jobs>3?"3+":jobs}</button>
      <button >Messages{message>5?"5+":message}</button>
      <button>Notifications{notification>10?"10+":notification}</button>
      <button>Me{total}</button>
    </>
  )
}

export default App
