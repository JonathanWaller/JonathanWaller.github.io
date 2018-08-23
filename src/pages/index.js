import React from "react";
import ExperienceSection from "../components/ExperienceSection";
import ProjectsSection from "../components/ProjectsSection";
import About from "../components/Sidebar/About";
import Links from "../components/Sidebar/Links";

import "./style.scss";

const IndexPage = () => (
  <div className="index">
    <div className="main">
      <h3>
        <span id="main__first">
          {" "}
          Hi, I'm
          <strong> Jonathan Waller</strong>.
        </span>
      </h3>

      <h5 className="bold">
        I'm a full stack web developer based out of Dallas, Texas who builds
        <br />
        interactive and feature-rich web apps.
        {/* I love a challenge and pushing
        <br />
        my problem solving abilities, whether in code or otherwise. */}
      </h5>
      <div>
        I've been fueled by problem solving and creative thinking since I was
        young. I attempted to fill my passion for technology while working in
        tech sales, but I was still missing the challenge and ability to express
        myself creatively. When I realized I was enjoying writing code on nights
        and weekends more than my full-time job, I knew it was time to make a
        change. I now build full-stack web applications day and night and I
        absolutely love it.
      </div>

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
