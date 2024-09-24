import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Task from './components/Task'
import ITask from './components/ITask'
import Btn from './components/Btn'

function App() {
  const [open, setOpen] = useState(true)

  const handleBtn = () =>{
    setOpen(false)
  }

  return (
    <div className='bg-[#42A5F5]' style={{ position: "relative", height: "100vh", width: "100vw" }}>
      {open ? <Btn endLoading={handleBtn}/> : <Task style={{ position: "absolute", top: 20, left: 0, zIndex: 10 }}/> }
     
      <ITask style={{ position: "absolute", top: 0, left: 0, zIndex: 5 }}/>
    </div>
  )
}

export default App
