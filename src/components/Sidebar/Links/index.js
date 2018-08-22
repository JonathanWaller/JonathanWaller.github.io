import React, { Component } from "react";

import "./style.scss";
import "font-awesome/css/font-awesome.min.css";

class Links extends Component {
  render() {
    return (
      <div className="links">
        <ul className="icons-list">
          <li className="icon">
            <a href="https://github.com/JonathanWaller" target="_blank">
              <i className="fa fa-github" /> github.com/JonathanWaller
            </a>
          </li>
          {/* <li className="icon">
            <a href="https://www.twitter.com/praagyajoshi" target="_blank">
              <i className="fa fa-twitter" />
            </a>
          </li> */}
          <li className="icon">
            <a
              href="https://www.linkedin.com/in/wallerjonathan/"
              target="_blank"
            >
              <i className="fa fa-linkedin" /> /in/wallerjonathan/
            </a>
          </li>
          <li className="icon">
            <a href="mailto:waller.j27@gmail.com" target="_blank">
              <i className="fa fa-envelope" /> waller.j27@gmail.com
            </a>
          </li>
        </ul>
        {/* <div className="small">
          Built with ❤️ using <a href="https://www.gatsbyjs.org/" target="_blank">GatsbyJS</a>
        </div> */}
      </div>
    );
  }
}

export default Links;
