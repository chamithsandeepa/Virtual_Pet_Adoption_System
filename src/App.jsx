import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login/login'; // Adjust the path
import Register from './Components/Register/register'; // Adjust the path

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> {/* Default route to Login */}
        <Route path="/register" element={<Register />} /> {/* Route to Register */}
      </Routes>
    </Router>
  );
}

export default App;
