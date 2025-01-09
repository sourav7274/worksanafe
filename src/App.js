import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';
import { Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function App() {
    const navigate = useNavigate()
    const [mail,setMail] = useState("")
    const [pass,setPass] = useState("")
    const [disE,setDise] = useState(false)
   const handleClick = async () => {
    const data = {
        email: mail,
        password: pass
    };

    const response = await fetch("https://work-sana-be.vercel.app/signin", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    if (!response.ok) {
        setDise(true);
        console.log(response.status);
    } else {
        const result = await response.json();
        console.log(result);
        try {
            // Store the token in localStorage
            localStorage.setItem('token', result.token);

            // Validate the token after storing it
            const vResponse = await fetch("https://work-sana-be.vercel.app/validate", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${result.token}` // Pass token in the Authorization header
                }
            });
            console.log(vResponse);
            if (!vResponse.ok) {
                console.log("Error validating token");
            } else {
                navigate("/dashboard"); // Redirect to the dashboard if valid
            }
        } catch (error) {
            console.log(error);
        }
    }
};

  
  
  return (
    <div className="container py-4" >
     <h1 className="text-center">Worksana Login</h1>
     <div>
       <label>Email: </label>
       <input onChange={(e) => setMail(e.target.value)} type="text" /> <br></br>
       <label className="mt-5">Password: </label>
       <input onChange={(e) => setPass(e.target.value)} type="text" /> <br></br>
       <button onClick={handleClick} className="btn btn-primary m-5">Login</button>
       <Link to="/register" className="btn btn-info m-5">Register</Link>
       {disE && <p className='bg-danger text-light'>Login error</p>}
     </div>
    </div>
  );
}

export default App;
