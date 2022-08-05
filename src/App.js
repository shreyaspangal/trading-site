import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Register from './components/Register';
import Login from './components/Login';
import Packages from './components/Packages';
import Invitation from './components/Invitation';
import Profile from './components/Profile';
import Home from './components/Home';
import Team from './components/Team';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="packages" element={<Packages />} />
        <Route path="invitation" element={<Invitation />} />
        <Route path="profile" element={<Profile />} />
        <Route path="team" element={<Team />} />
      </Routes>
    </div>
  );
}

export default App;
