import React from "react";
import Section from "../Section";
import ExperienceUnit from "../ExperienceUnit";

import zomatoLogo from "../../assets/images/experience/zomato-logo.svg";
import fitsoLogo from "../../assets/images/experience/fitso-logo.jpg";
import kayakoLogo from "../../assets/images/experience/kayako-logo-2.jpg";
import reactTransparentLogo from "../../assets/images/skills/react-transparent.png";
import reduxTransparentLogo from "../../assets/images/skills/redux-transparent.png";
import javascriptLogo from "../../assets/images/skills/javascript.png";
import nodeLogo from "../../assets/images/skills/node-transparent.png";
import npmLogo from "../../assets/images/skills/npm.png";
import expressLogo from "../../assets/images/skills/express.png";
import postgresqlLogo from "../../assets/images/skills/postgresql.png";
import gitLogo from "../../assets/images/skills/git.png";
import html5Logo from "../../assets/images/skills/html5.png";
import css3Logo from "../../assets/images/skills/css3.png";

import "./skills.scss";

class ExperienceSection extends React.Component {
  render() {
    return (
      <Section title="Skills">
        <div className="skills__allNameLogoContainer">
          <div className="skills__nameLogoContainer">
            <div className="techName">JavaScript</div>
            <div className="logoContainer">
              <img src={javascriptLogo} className="reactLogo" />
            </div>
          </div>

          <div className="skills__nameLogoContainer">
            <div className="techName">React</div>
            <div className="logoContainer">
              <img src={reactTransparentLogo} className="reactLogo" />
            </div>
          </div>
          <div className="skills__nameLogoContainer">
            <div className="techName">Redux</div>
            <div className="logoContainer">
              <img src={reduxTransparentLogo} className="reactLogo" />
            </div>
          </div>

          <div className="skills__nameLogoContainer">
            <div className="techName">Node.js</div>
            <div className="logoContainer">
              <img src={nodeLogo} className="reactLogo" />
            </div>
          </div>

          <div className="skills__nameLogoContainer">
            <div className="techName">NPM</div>
            <div className="logoContainer">
              <img src={npmLogo} className="reactLogo" />
            </div>
          </div>

          <div className="skills__nameLogoContainer">
            <div className="techName">Express</div>
            <div className="logoContainer">
              <img src={expressLogo} className="reactLogo" />
            </div>
          </div>

          <div className="skills__nameLogoContainer">
            <div className="techName">PostgreSQL</div>
            <div className="logoContainer">
              <img src={postgresqlLogo} className="reactLogo" />
            </div>
          </div>

          <div className="skills__nameLogoContainer">
            <div className="techName">Git</div>
            <div className="logoContainer">
              <img src={gitLogo} className="reactLogo" />
            </div>
          </div>

          <div className="skills__nameLogoContainer">
            <div className="techName">HTML5</div>
            <div className="logoContainer">
              <img src={html5Logo} className="reactLogo" />
            </div>
          </div>
          <div className="skills__nameLogoContainer">
            <div className="techName">CSS3</div>
            <div className="logoContainer">
              <img src={css3Logo} className="reactLogo" />
            </div>
          </div>
        </div>
      </Section>
    );
  }
}

export default ExperienceSection;
