import React, { useState } from 'react';
import axios from 'axios'; // Import axios
import './login.css';
import { useNavigate } from 'react-router-dom';
import { useUser } from './UserContext'; // Import useUser

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setLoggedInUsername } = useUser();  // State to store logged-in username
  const navigate = useNavigate();  // Initialize useHistory
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/login', {
        username,
        password,
      });

      const { username: loggedInUser } = response.data; // Extract username from response
      setLoggedInUsername(loggedInUser); // Update the state with the logged-in username
      console.log('Login successful:', loggedInUser);
      navigate('/');
    } catch (error) {
      console.error('Login error:', error.response.data);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
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
         <div className='flex flex-col items-center mt-4'> {/* Use flex and space-x to center and space the buttons */}
          <button className='w-60 mb-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' type="submit">Login</button>
          <button className='w-60  bg-green-400 hover:bg-green-700 text-white font-bold py-2 px-4 rounded' 
          onClick={ () => {navigate('/register'); }}>Don't have an account?</button>
        </div>  
      </form>
    
      {/* Display logged-in username */}
      
    </div>
  );
}

export default Login;
