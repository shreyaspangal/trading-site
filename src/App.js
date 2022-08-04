import React from 'react';
import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import Packages from './components/Packages';
import Invitation from './components/Invitation';

function App() {
  return (
    <div className='App'>
      {/* <Register /> */}
      {/* <Login /> */}
      {/* <Packages /> */}
      <Invitation />
    </div>
  );
}

export default App;
