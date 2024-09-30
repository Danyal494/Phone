import { useState } from 'react'

import './App.css'
import Tasks from './components/Tasks'
import ITask from './components/ITask'
import Btn from './components/Btn'
import NewSphere from './components/NewSphere'

function App() {
  const [open, setOpen] = useState(true)

  const handleBtn = () =>{
    setOpen(false)
  }

  return (
    <div className='bg-[#42A5F5]' style={{ position: "relative", height: "100vh", width: "100vw" }}>
      {open ? <Btn endLoading={handleBtn}/> : <NewSphere style={{ position: "absolute", top: 20, left: 0, zIndex: 10 }}/> }
     
      <ITask style={{ position: "absolute", top: 0, left: 0, zIndex: 5 }}/>
    </div>
  )
}

export default App
