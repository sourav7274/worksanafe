import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Register = () =>{
    const navigate = useNavigate()
    const [name,setName] = useState("")
    const [mail,setMail] = useState("")
    const [pass,setPass] = useState("")
    const handleClick = async  () =>{
      const  data = {
            name: name,
            email: mail,
            password:pass
        }
        console.log(data)
        const response = await fetch("http://localhost:3000/signup",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(data)
      })
       if(!response.ok)
        {
            console.log(response.status)
        }
        else{
            alert("User registered successfully!")
            navigate("/") 
        }
    }
    return(
        <div className="container py-4 text-center">
            <h1>Register for Worksana</h1>
            <label className="mt-3">Enter Your Name: </label>
            <input onChange={(e) => setName(e.target.value)} type="text" /> <br></br>
            <label className="mt-5" >Enter Your Email: </label>
            <input onChange={(e) => setMail(e.target.value)} type="text" /><br></br>
            <label className="mt-5" >Set Your Password: </label>
            <input onChange={(e) => setPass(e.target.value)} type="text" /><br></br>
            <button className="btn btn-primary mt-3" onClick={handleClick}>Register</button>
        </div>
    )
}

export default Register