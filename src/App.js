import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
 //eslint-disable-next-line
import { BrowserRouter, Route, Router} from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <switch>
        <Route path='/' exact />
      </switch>

      </Router>
    </>
      
 
  );
}

export default App;
