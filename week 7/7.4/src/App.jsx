import { useState } from 'react'
function App() {
  const [home, sethome] = useState(0)
  const [network, setNetwork] = useState(0)
  const [jobs, setJobs] = useState(0)
  const [message, setMessage] = useState(0)
  const [notification, setNotification] = useState(0)
  const [profile, setProfile] = useState(0)

  return (
    <>
      <button>Home</button>
      <button onClick={()=>{setNetwork(network+1)}}>Network{network>10?"10+":network}</button>
      <button onClick={()=>{setJobs(jobs+1)}}>Jobs{jobs>3?"3+":jobs}</button>
      <button onClick={()=>{setMessage(message+1)}}>Messages{message>5?"5+":message}</button>
      <button onClick={()=>{setNotification(notification+1)}}>Notifications{notification>10?"10+":notification}</button>
      <button>Me</button>
    </>
  )
}

export default App
