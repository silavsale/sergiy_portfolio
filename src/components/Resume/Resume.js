import { Fab } from "@rmwc/fab";
import "@rmwc/fab/styles";
import React from "react";
import Typical from "react-typical";
import Pdf from "../../docs/RudenkoSergiy-CV2020.pdf";
import "./Resume.scss";

export default function Resume() {
  return (
    <div className="container">
      <h1>
          {/* My Skills */}
          <Typical loop={1} wrapper="b" steps={[" ", 1000, "Resume"]} />
      </h1>
      <a
        href="https://github.com/silavsale/"
        without
        rel="noopener noreferrer"
        target="_blank"
        >
       
        <Fab className="fab fa-github fa-lg" mini style={{color: 'var(--fab-color)', backgroundColor: 'var(--fab-bg-color)'}}/>
      </a>
      <p>|</p>
      <a
        href="https://stackoverflow.com/users/7890537/qui-gon-jinn"
        without
        rel="noopener noreferrer"
        target="_blank"
      >
        <Fab className="fab fa-stack-overflow fa-lg" mini style={{color: 'var(--fab-color)', backgroundColor: 'var(--fab-bg-color)'}}/>
      </a>
      <p>|</p>
      <a
        href="https://www.linkedin.com/in/rudenkosergiy/"
        without
        rel="noopener noreferrer"
        target="_blank"
      >
        <Fab className="fab fa-linkedin-in fa-lg" mini style={{color: 'var(--fab-color)', backgroundColor: 'var(--fab-bg-color)'}}/>
      </a>
      <p>|</p>
      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=silavsale@gmail.com"
        without
        rel="noopener noreferrer"
        target="_blank"
      >
        <Fab className="far fa-envelope fa-lg" mini style={{color: 'var(--fab-color)', backgroundColor: 'var(--fab-bg-color)'}}/>
      </a>
      <p>|</p>
      <a href={Pdf} without rel="noopener noreferrer" target="_blank">
        <Fab trailingIcon="picture_as_pdf" label="Resume" style={{color: 'var(--fab-color)', backgroundColor: 'var(--fab-bg-color)'}}/>
      </a>

      <p>I like to listen to this <br/> music while coding</p>

      <div >
        <iframe className="spotify-widget" title="spotify" src="https://open.spotify.com/embed/playlist/0pj2ZNW9z0664uIivPUTZf" width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </div>

    </div>
  );
}
