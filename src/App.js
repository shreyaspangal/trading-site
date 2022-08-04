import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Register from './components/Register';
import Login from './components/Login';
import Packages from './components/Packages';
import Invitation from './components/Invitation';
import Profile from './components/Profile';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" exact element={<Register />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="packages" element={<Packages />} />
        <Route path="invitation" element={<Invitation />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
