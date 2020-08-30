import "@rmwc/button/styles";
import React from "react";
import Typical from "react-typical";
import "./About.scss";

const About = () => {
  return (
    <div className="container">
      <h1>
        {/* About Me */}
        <Typical loop={1} wrapper="b" steps={["Hello", 1000, "About Me"]} />
      </h1>
      <div>
        <h2>I'm Sergiy, a software engineer based in Montreal, Canada.</h2>
        <p>
          I enjoy creating things that live on the internet, whether that be
          websites, applications, or anything in between.
        </p>
        <p>
          My goal is to always build products that provide pixel-perfect,
          performant experiences.
        </p>
        <p>
          Shortly after graduating from Vanier College, I joined the engineering
          team where I work on a wide variety of interesting and meaningful
          projects on a daily basis.
        </p>
        Here are a few technologies I've been working with recently:
        <p>JavaScript (ES6+) HTML & (S)CSS React Node.js MongoDB</p>
      </div>
      <div className="aboutIcons">
        <i className="aboutIcon aboutIcon-js fab fa-js-square fa-3x"></i>
        <i className="aboutIcon aboutIcon-node fab fa-node fa-3x"></i>
        <i className="aboutIcon aboutIcon-react fab fa-react fa-3x"></i>
      </div>
    </div>
  );
};

export default About;
