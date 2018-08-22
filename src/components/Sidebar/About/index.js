import React, { Component } from "react";
import Links from "../Links/index.js";

import "./style.scss";

class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="image" />
        <div className="bio">
          A technology enthusiast &amp; certified scuba diver, who loves
          travelling, paints occasionally and follows football ardently.
          {/* <div className="emoji">
            🤖 &nbsp;🏔&nbsp;🎨&nbsp; ⚽️
          </div> */}
          <div className="links__wrap">
            <Links />
          </div>
        </div>
      </div>
    );
  }
}

export default About;
