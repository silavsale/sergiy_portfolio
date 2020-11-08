import "@material/button/dist/mdc.button.css";
import React, {useEffect, useState} from "react";
import Typical from "react-typical";
import Spinner from './Spinner/Spinner'


const Home = () => {

const [showSpinner, setShowSpinner] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShowSpinner(false), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    {showSpinner ? 
      <Spinner/>
      :
      <div className="container ">
        {/* <p>Hi, my name is</p>
        <h1>Sergiy Rudenko.</h1> */}
        <h1>
          {/* About Me */}
          <Typical loop={1} wrapper="b" steps={["Hi, my name is", 1500, "Sergiy Rudenko."]} />
        </h1>
        <h2>
          I build cool thing for the web.<span className="hammer">⚒</span>
        </h2>
        {/* <div className="aboutIcons">
          <i className="fas fa-network-wired fa-3x"></i>
          <i className="fas fa-database fa-3x"></i>
          <i className="fas fa-server fa-3x"></i>
        </div> */}
        <div className="aboutIcons">
          <i className="fas fa-network-wired fa-2x"></i>
          <i className="fas fa-database fa-2x"></i>
          <i className="fas fa-server fa-2x"></i>
        </div>
        <div>
          <p>
            I build different web sites from simple static web pages to complex
            web applications
          </p>
          <p>with responsive UI, backend servers and databases,</p>
          <p>
            security features like authentication and protected payment build in
            features.
          </p>
        </div>
      </div> }
      </>
  );
};

export default Home;
