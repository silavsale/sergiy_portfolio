import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import About from "./About/About";
import Home from "./Home";
import Resume from "./Resume/Resume";
import Settings from "./Settings/Settings";
import Skills from "./Skills/Skills";
import Work from "./Work";

const Nav = () => {
  return (
    <Router>
      <div>
        <nav className="navbar">
          <ul className="navbar-nav">
            <li className="logo">
              <Link to="/" className="nav-link">
                <i className="fas fa-laptop-code icon fa-primary arrows"></i>
                <i className="fas fa-chevron-right link-text fa-primary"></i>
                <i className="fas fa-chevron-right link-text fa-primary"></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                <i className="fas fa-user-astronaut fa-2x icon fa-primary arrows"></i>
                <span className="link-text fa-primary">About</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/skills" className="nav-link">
                <i className="fas fa-clipboard-list fa-2x icon fa-primary"></i>
                <span className="link-text fa-primary">Skills</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/work" className="nav-link">
                <i className="fas fa-code-branch fa-2x icon fa-primary"></i>
                <span className="link-text fa-primary">Work</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/resume" className="nav-link">
                <i className="far fa-file-pdf fa-2x icon fa-primary"></i>
                <span className="link-text fa-primary">Resume</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/settings" className="nav-link">
                <i className="fas fa-cog icon fa-primary"></i>
                <span className="link-text fa-primary">Settings</span>
              </Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/skills">
            <Skills />
          </Route>
          <Route path="/work">
            <Work />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Nav;
