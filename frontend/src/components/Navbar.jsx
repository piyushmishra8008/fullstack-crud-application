export default function Navbar({onopen}){
    return(
        <div className="navbar bg-base-100 shadow-sm p-4">
  <div className="navbar-start">
   
    <a className="btn btn-ghost text-xl bg-zinc-900">Fullstack-Crud</a>
  </div>
  <div className="navbar-center ">
    <div className="form-control">
     <input type="text" placeholder="Search" className="input input-bordered w-48 md:w-auto" />
     </div>
   
  </div>
  <div className="navbar-end pr-20 text-4xl">
    <a className="btn btn-primary " onClick={onopen}  >Add client</a>
  </div>
</div>
    )
}