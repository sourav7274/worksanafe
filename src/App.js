import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  const [mail, setMail] = useState('');
  const [pass, setPass] = useState('');
  const [disE, setDise] = useState(false);

  const handleClick = async () => {
    const data = {
      email: mail,
      password: pass,
    };

    try {
      const response = await fetch('https://work-sana-be.vercel.app/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        setDise(true);
        return; // Exit early if response is not OK
      }

      const result = await response.json();
      const token = result.token;

      if (!token) {
        setDise(true);
        return;
      }

      // Store the token in localStorage
      localStorage.setItem('token', token);

      // Get the token from localStorage to validate it
      const storedToken = localStorage.getItem('token');
      if (!storedToken) {
        console.log('Token not found in localStorage');
        return;
      }

      // Validate the token by sending it in the Authorization header
      const vResponse = await fetch('https://work-sana-be.vercel.app/validate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${storedToken}`, // Pass token in the Authorization header
        },
      });

      if (!vResponse.ok) {
        console.log('Token validation failed');
        setDise(true);
      } else {
        navigate('/dashboard'); // Redirect to the dashboard if valid
      }
    } catch (error) {
      console.log('Error during request:', error);
      setDise(true);
    }
  };

  return (
    <div className="container py-4">
      <h1 className="text-center">Worksana Login</h1>
      <div>
        <label>Email: </label>
        <input
          onChange={(e) => setMail(e.target.value)}
          type="text"
        />
        <br />
        <label className="mt-5">Password: </label>
        <input
          onChange={(e) => setPass(e.target.value)}
          type="password"
        />
        <br />
        <button onClick={handleClick} className="btn btn-primary m-5">
          Login
        </button>
        <Link to="/register" className="btn btn-info m-5">
          Register
        </Link>
        {disE && <p className="bg-danger text-light">Login error</p>}
      </div>
    </div>
  );
}

export default App;
