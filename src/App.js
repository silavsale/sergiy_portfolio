import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import ColoredLine from './components/InfoBar/InfoBar';
import InfoBottom from './components/InfoBottom/InfoBottom';
import Nav from './components/Nav';
import './styles/App.scss';
import './styles/Background.scss';
import './styles/Text.scss';

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
