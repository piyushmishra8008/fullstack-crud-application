import './App.css'
import Modelform from './components/Modelform'
import Navbar from './components/Navbar'
import Tablelist from './components/Tablelist'
import { useState } from 'react'
import axios from 'axios'


function App() {
const[isopen,setIsopen]=useState(false);
const[modalmode,setModalmode]=useState("add");
const[clientdata,setClientdata]=useState(null);
const handleisopen=(mode,client)=>{
  setClientdata(client || null);
  setIsopen(true);
  setModalmode(mode);
}
const handlesubmit=async(newclientdata)=>{
if(modalmode==="add"){
  try{
    const response=await axios.post("http://localhost:3000/create",newclientdata);
    console.log("Client added:",response.data);
  }
  catch(err){
    console.error("Error adding client:",err);
  }
  console.log("add mode")
}else{
  console.log("edit mode");
  console.log("Client data to update:", clientdata._id);
  try{
    const response=await axios.post(`http://localhost:3000/update/${clientdata._id}`,newclientdata);
    console.log("Client updated:",response.data);
  }
  catch(err){
    console.error("Error updating client:",err);
  }
}
setIsopen(false);
}

  return (
    <>
      <Navbar onopen={() => handleisopen("add")} />
      <Tablelist onopen={handleisopen} />
      <Modelform isopen={isopen} 
      onclose={() => setIsopen(false)} 
      onSubmit={handlesubmit} 
      mode={modalmode}
      clientdata={clientdata}
      />
    </>
  )
}



export default App
