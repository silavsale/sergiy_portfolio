import { Fab } from "@rmwc/fab";
import "@rmwc/fab/styles";
import React from "react";
import Pdf from "../../docs/RudenkoSergiy-CV2020.pdf";
import "./Resume.scss";

export default function Resume() {
  return (
    <div className="container">
      <a
        href="https://github.com/silavsale/"
        without
        rel="noopener noreferrer"
        target="_blank"
      >
        <Fab className="fab fa-github fa-lg" mini />
      </a>
      <p>|</p>
      <a
        href="https://stackoverflow.com/users/7890537/qui-gon-jinn"
        without
        rel="noopener noreferrer"
        target="_blank"
      >
        <Fab className="fab fa-stack-overflow fa-lg" mini />
      </a>
      <p>|</p>
      <a
        href="https://www.linkedin.com/in/rudenkosergiy/"
        without
        rel="noopener noreferrer"
        target="_blank"
      >
        <Fab className="fab fa-linkedin-in fa-lg" mini />
      </a>
      <p>|</p>
      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=silavsale@gmail.com"
        without
        rel="noopener noreferrer"
        target="_blank"
      >
        <Fab className="far fa-envelope fa-lg" mini />
      </a>
      <p>|</p>
      <a href={Pdf} without rel="noopener noreferrer" target="_blank">
        <Fab trailingIcon="picture_as_pdf" label="Resume" />
      </a>
    </div>
  );
}
