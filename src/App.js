import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import ColoredLine from './components/InfoBar/InfoBar';
import InfoBottom from './components/InfoBottom/InfoBottom';
import Nav from './components/Nav';

function App() {
  return (
    <Router>
     <Nav/>
     <ColoredLine/>
     <InfoBottom/>
    </Router>
  );
}

export default App;
