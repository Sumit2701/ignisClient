import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Login from './login'; // Create a LoginPage component
import CreateEventPage from './CreateEvent'; // Create a CreateEventPage component
import Navbar from './Components/Navbar';
import Register from './Register';
import { UserProvider } from './UserContext'; 
function App() {
  return (
    <UserProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/create-event" element={<CreateEventPage/>} />
      </Routes>
    </Router></UserProvider>
  );
}

export default App;