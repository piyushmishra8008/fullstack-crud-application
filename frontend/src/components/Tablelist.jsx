import { useState,useEffect, use } from "react";

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
          <button className="btn btn-accent rounded-full">Delete</button>
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