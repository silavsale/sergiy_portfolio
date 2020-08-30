import { Card } from "@rmwc/card";
import "@rmwc/card/styles";
// import { Icon } from "@rmwc/icon";
// import "@rmwc/icon/styles";
import "@rmwc/list/styles";
import { Typography } from "@rmwc/typography";
import "@rmwc/typography/styles";
import React from "react";
import Typical from "react-typical";
import Icon from "../Icon/Icon";
import "./Skills.scss";

export default function Skills() {
  return (
    <div className="container">
      {/* <h1 className="MySkills">My Skills</h1> */}
      <h1>
        {/* My Skills */}
        <Typical loop={1} wrapper="b" steps={[" ", 1000, "My Skills"]} />
      </h1>
      <div className="skills">
        <Card className="grid-item" style={{ width: "15rem" }}>
          <Typography
            use="subtitle1"
            tag="div"
            style={{ paddingTop: "1rem" }}
            theme="textSecondaryOnBackground"
          >
            <Icon
              className="rmwc-icons"
              icon={{ icon: "web", size: "xlarge" }}
            />
          </Typography>
          <Typography use="headline6" tag="h1">
            FRONTEND
            {/* <Typical loop={1} wrapper="a" steps={["", 2000, "FRONTEND"]} /> */}
          </Typography>

          <Typography use="body2" tag="div" theme="textSecondaryOnBackground">
            <p>HTML</p>
            <p>CSS | SASS</p>
            <p>Javascript</p>
            <p>Rect | Redux</p>
          </Typography>
        </Card>
        <Card className="grid-item" style={{ width: "15rem" }}>
          <Typography
            use="subtitle1"
            tag="div"
            style={{ paddingTop: "1rem" }}
            theme="textSecondaryOnBackground"
          >
            <Icon
              className="rmwc-icons"
              icon={{ icon: "storage", size: "xlarge" }}
            />
          </Typography>
          <Typography use="headline6" tag="h1">
            SERVER
            {/* <Typical loop={1} wrapper="a" steps={["", 2500, "SERVER"]} /> */}
          </Typography>
          <Typography use="body2" tag="div" theme="textSecondaryOnBackground">
            <p>NodeJS</p>
            <p>Express</p>
            <p>Mongoose</p>
          </Typography>
        </Card>
        <Card className="grid-item" style={{ width: "15rem" }}>
          <Typography
            use="subtitle1"
            tag="div"
            // style={{ padding: "1rem 1rem" }}
            style={{ paddingTop: " 1rem" }}
            theme="textSecondaryOnBackground"
          >
            <Icon
              className="rmwc-icons"
              icon={<div className="fas fa-database fa-2x" />}
            />
          </Typography>
          <Typography use="headline6" tag="h1">
            DATABASE
            {/* <Typical loop={1} wrapper="a" steps={["", 3000, "DATABASE"]} /> */}
          </Typography>
          <Typography use="body2" tag="div" theme="textSecondaryOnBackground">
            <p>MongoDB</p>
            <p>SQL</p>
            <p>MySQL</p>
          </Typography>
        </Card>
        <Card className="grid-item" style={{ width: "15rem" }}>
          <Typography
            use="subtitle1"
            tag="div"
            style={{ paddingTop: "1rem" }}
            theme="textSecondaryOnBackground"
          >
            <Icon
              className="rmwc-icons"
              icon={<div className="fas fa-code-branch fa-2x" />}
            />
          </Typography>
          <Typography use="headline6" tag="h1">
            DEPLOYMENT
            {/* <Typical loop={1} wrapper="a" steps={["", 3500, "DEPLOYMENT"]} /> */}
          </Typography>
          <Typography use="body2" tag="div" theme="textSecondaryOnBackground">
            <p>System Design</p>
            <p>AWS</p>
            <p>Docker</p>
            <p>Git | Gitlab | Bitbucket </p>
          </Typography>
        </Card>
      </div>
    </div>
  );
}
