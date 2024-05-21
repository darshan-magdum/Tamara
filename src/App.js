import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HorizontalStepper from './Components/HorizontalStepper';
import LoginPage from './Screens/Forms/LoginPage';
import LandingPage from './Screens/Landingpage';

function App() {
  return (

    
    <Router>
      <div className="App">
      <Routes>
          <Route path="/HorizontalStepper" exact element={<HorizontalStepper />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<LandingPage />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
