import React from 'react';
import './App.css';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Sergiy Rudenko Home Page
        </h1>

        <ul >
          <p style={{color: "#999999", maxHeight: "20px", fontSize: "13px", lineHeight: "18px" }}>// Introduction --------------------------------------------------------------------------------</p>
        <ol> Hi my name is Sergiy. </ol>
        <br/>
        <ol> I'm full stack web developer with 4 years of experience. </ol>
        <p>
        ⚒
        </p>
        <ol>
            I build differente web sites from simple static web pages to complex web applications
        </ol>
        <ol>
            with responsive UI, backend servers and databases,
        </ol>
        <ol>
            security features like authentication and protected payment build in features.
        </ol>
        </ul>
        <br/>
        <img src={logo} style={{height: "80px"}} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
