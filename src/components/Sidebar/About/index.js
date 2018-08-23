import React, { Component } from "react";
import Links from "../Links/index.js";

import "./style.scss";

class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="image" />
        <div className="bio">
          {/* I've been fueled by problem solving and creative thinking since I was
          young. I attempted to fill my passion for technology while working in
          tech sales, but I was still missing the challenge and ability to
          express myself creatively. When I realized I was enjoying writing code
          on nights and weekends more than my full-time job, I knew it was time
          to make a change. I now build full-stack web applications day and
          night and I absolutely love it. Let's connect! */}
          <div className="links__wrap">
            <Links />
          </div>
        </div>
      </div>
    );
  }
}

export default About;
