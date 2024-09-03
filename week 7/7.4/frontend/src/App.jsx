
import { RecoilRoot,useRecoilValue } from 'recoil'
import {  notificationSelector,  totalSelector } from './store/atom'

function App() {
  return (
    <RecoilRoot>
      <Main></Main>
    </RecoilRoot>
  )
}
function Main(){
const allNotifications=useRecoilValue(notificationSelector)
const {messaging,jobs,network,notification}=allNotifications
const total=useRecoilValue(totalSelector)

	
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
