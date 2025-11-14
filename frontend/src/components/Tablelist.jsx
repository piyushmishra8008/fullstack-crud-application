import { useState,useEffect, use } from "react";
import axios from "axios";

export default function Tablelist({onopen}){
  const [tabledata,setTabledata]=useState([]);
  const [err, seterr] = useState(null);
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetch("http://localhost:3000/read");
        const data = await response.json();
        
        setTabledata(data);
      } catch (error) {
        seterr(error.message);
      }
    };
    fetchdata();
  }, []);
  const clients = tabledata;
  const handledelete = async (id) => {
    const confrimdelete = window.confirm("Are you sure you want to delete this client?");
    if (confrimdelete) {
    try {
      await axios.delete(`http://localhost:3000/delete/${id}`);
      setTabledata((prevData) => prevData.filter((client) => client._id !== id));
    } catch (error) {
      console.error("Error deleting client:", error);
    }
  }
  };
    return(
        <div className="overflow-x-auto mt-10">
  <table className="table ">
    {/* head */}
    <thead>
      <tr >
        <th>id</th>
        <th>Name</th>
        <th>Email</th>
        <th>Job</th>
        <th>Rate</th>
        <th>Status</th>

      </tr>
    </thead>
    <tbody >
      {tabledata.map(function(client,index){
        return(
      
      <tr key={client._id} className="hover:bg-base-300">
        <td>{client._id}</td>
        <td>{client.name || client.username}</td>
        <td>{client.email}</td>
        <td>{client.job}</td>
        
        <td>{client.rate}</td>
        
        <td>
          <button className={`btn btn-primary rounded-full w-20 ${client.status === "Active" ? 'btn-primary bg-transparent border-primary':'btn-outline-btn-primary  '}`}>
            {client.status === "Active" ? 'Active':'Inactive'}
          </button>
        </td>
        <td>
          <button className="btn btn-secondary rounded-full " onClick={() => onopen("edit", client) }>Update</button>
        </td>
        <td>
          <button className="btn btn-accent rounded-full" onClick={() => handledelete(client._id)}>Delete</button>
        </td>
      </tr>
        )
      })
    }
     
    </tbody>
  </table>
</div>
    )
}