import React from "react";
import ExperienceSection from "../components/ExperienceSection";
import ProjectsSection from "../components/ProjectsSection";
import About from "../components/Sidebar/About";
import Links from "../components/Sidebar/Links";

import "./style.scss";

const IndexPage = () => (
  <div className="index">
    <div className="main">
      <h5>
        <span className="bold"> Hi, I'm Jonathan Waller.</span>
      </h5>

      <h3 className="bold">
        I'm a full stack web developer based out of Dallas, Texas who builds
        interactive and feature-rich web apps. I love a challenge and to push my
        problem solving skills, whether in code or otherwise.
      </h3>

      <ExperienceSection />
      <ProjectsSection />
    </div>

    <div className="aside">
      <div className="top">
        <About />
      </div>
      {/* <div className="bottom">
        <Links />
      </div> */}
    </div>
  </div>
);

export default IndexPage;
