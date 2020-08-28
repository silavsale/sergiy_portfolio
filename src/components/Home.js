import "@material/button/dist/mdc.button.css";
import React from "react";

const About = () => {
  return (
    <div className="container ">
      <p>Hi, my name is</p>
      <h1>Sergiy Rudenko.</h1>
      <h2>
        I build cool thing for the web.<span className="hammer">⚒</span>
      </h2>
      {/* <div className="aboutIcons">
        <i class="fas fa-network-wired fa-3x"></i>
        <i class="fas fa-database fa-3x"></i>
        <i class="fas fa-server fa-3x"></i>
      </div> */}
      <div className="aboutIcons">
        <i class="fas fa-network-wired fa-2x"></i>
        <i class="fas fa-database fa-2x"></i>
        <i class="fas fa-server fa-2x"></i>
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
    </div>
  );
};

export default About;
