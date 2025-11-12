export default function Tablelist({onopen}){
  const clients=[
    {id:1,name:"piyush",job:"developer",color:"blue",email:"piyushmishra998877@gamil.com",rate:"$2000",isactive:true},
    {id:2,name:"rahul",job:"designer",color:"red",email:"acbcd@gamil.com",rate:"$1500",isactive:false},
    {id:3,name:"ankit",job:"manager",color:"green",email:"ankit@gamil.com",rate:"$2500",isactive:true},
  ]
    return(
        <div className="overflow-x-auto mt-10">
  <table className="table ">
    {/* head */}
    <thead>
      <tr >
        <th>id</th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th>Rate</th>
        <th>Status</th>

      </tr>
    </thead>
    <tbody >
      {clients.map(function(client,index){
        return(
      
      <tr key={index} className="hover:bg-base-300">
        <th>{client.id}</th>
        <th>{client.name}</th>
        <td>{client.job}</td>
        <td>{client.rate}</td>
        <td>{client.color}</td>
        <td>
          <button className={`btn btn-primary rounded-full w-20 ${client.isactive ? 'btn-primary':'btn-outline-bth-primary'}`}>
            {client.isactive ? 'Active':'Inactive'}
          </button>
        </td>
        <td>
          <button className="btn btn-secondary rounded-full " onClick={onopen}>Update</button>
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