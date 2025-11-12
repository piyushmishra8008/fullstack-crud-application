import { useState } from "react";
export default function Modelform({isopen,onclose,onsubmit,mode}){
    const [rate,setRate]=useState(0);
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [job,setJob]=useState("");
    const [status,setStatus]=useState(false);
    //handle status change 
    const handlestatuschange=(e)=>{
        if(e.target.value==="Active"){
            setStatus(true);
        }else{
            setStatus(false);
        }
    }
    const handlesubmit=(e)=>{
        e.preventDefault();
        onclose();
    }
     if (!isopen) return null;
    return(
        <>
        {/* Open the modal using document.getElementById('ID').showModal() method */}

<dialog id="my_modal_2" className="modal" open={isopen}>
  <div className="modal-box">
    <h3 className="font-bold text-lg py-4">{mode === "add" ? "Add New Item" : "Edit Item"}</h3>
  <form  className="" onsubmit={handlesubmit}>
        <label className="input input-bordered my-4 flex items-center gap-2">
        Name
        <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="grow" placeholder="name" />
        </label>
         <label className="input input-bordered my-4 flex items-center gap-2">
        Email
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" className="grow" placeholder="name" />
        </label>
         <label className="input input-bordered my-4 flex items-center gap-2">
        Job
        <input value={job} onChange={(e) => setJob(e.target.value)} type="text" className="grow" placeholder="name" />
        </label>
        <div className="flex mb-4 justify-between my-4 gap-3">
                    <label className="input input-bordered  flex items-center gap-2">
                     Rate
        <input value={rate} onChange={(e) => setRate(e.target.value)} type="number" className="grow" placeholder="name" />
        </label>
        <select value={status ? 'Active' : 'Inactive'} onChange={handlestatuschange} className="select select-bordered w-full ">
            <option disabled>Status</option>
            <option>Inactive</option>
            <option>Active</option>

        </select>
        </div>
         
    <button className="btn btn-accent w-20" onClick={onclose}>close</button>
    <button className="btn btn-sucess btn-primary w-20">{mode === "edit" ? "Update" : "Add"}</button>
  </form>
    
  </div>
</dialog>
        </>
    )
}