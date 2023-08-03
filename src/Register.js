import React, { useState } from 'react';
import './login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
function Register() {
  const navigate = useNavigate(); 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/register', {
        username,
        password,
      });
      if(response.status===201) navigate('/login');
      if(response.status===409) return(<> User already exist</>
      )
    } catch (error) {
      console.error('Login error:', error.response.data);
    }
  };

  return (
    <div className="login-container ">
      <form className="login-form " onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
    <div className='flex flex-col items-center mt-4'>
  <button className='w-60 mb-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' type="submit">Register</button>
  <button className='w-60 bg-green-400 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
  onClick={() => { navigate('/login'); }}>Already have an account?</button>
</div>

      </form>
    </div>
  );
}

export default Register;