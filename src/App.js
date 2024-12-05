import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {
  return (
    <div className="container py-4" >
     <h1 className="text-center">Worksana Login</h1>
     <div>
       <label>Email: </label>
       <input type="text" /> <br></br>
       <label className="mt-5">Email: </label>
       <input type="text" /> <br></br>
       <button className="btn btn-primary">Login</button>
       <button className="btn btn-info mt-5">Register</button>
     </div>
    </div>
  );
}

export default App;
