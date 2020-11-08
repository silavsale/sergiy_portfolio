import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import ColoredLine from './components/InfoBar/InfoBar';
import InfoBottom from './components/InfoBottom/InfoBottom';
import Nav from './components/Nav';
import Spinner from './components/Spinner/Spinner'
import './styles/App.scss';
import './styles/Background.scss';
import './styles/Text.scss';

function App() {

  const [showSpinner, setShowSpinner] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShowSpinner(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {showSpinner ? 
      <Spinner/>
      :
     <Nav/>}
     <ColoredLine/>
     <InfoBottom/>
    </Router>
  );
}

export default App;
