import './App.css'
import Modelform from './components/Modelform'
import Navbar from './components/Navbar'
import Tablelist from './components/Tablelist'
import { useState } from 'react'

function App() {
const[isopen,setIsopen]=useState(false);
const[modalmode,setModalmode]=useState("add");
const handleisopen=(mode)=>{
  setIsopen(true);
  setModalmode(mode);
}
const handlesubmit=()=>{
if(modalmode==="add"){
  console.log("add mode")
}else{
  console.log("edit mode")
}
setIsopen(false);
}

  return (
    <>
      <Navbar onopen={() => handleisopen("add")} />
      <Tablelist onopen={() => handleisopen("edit")} />
      <Modelform isopen={isopen} 
      onclose={() => setIsopen(false)} 
      onsubmit={handlesubmit} 
      mode={modalmode}
      />
    </>
  )
}



export default App
