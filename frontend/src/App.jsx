import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import necessary components from react-router-dom
import Signup from './signup/Signup';
import Messages from './Messages/Messages';
import Signin from './signin/Signin';
import './App.css';

function App() {
  return (
    <Router> {/* Wrap your routes inside BrowserRouter */}
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/messages" element={<Messages />} />
        {/* You can add other routes like Signin if needed */}
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </Router>
  );
}

export default App;
