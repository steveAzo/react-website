import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Switch, Route, Router } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Navbar />
        <Switch>
          <Route path="/" exact />
        </Switch>
    </Router>
      
    </>
     
    
  );
}

export default App;
