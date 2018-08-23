import React, { Component } from "react";

import "./style.scss";

class ExperienceUnit extends Component {
  render() {
    return (
      <div className="experience-unit col-xs-12 col-sm-6 col-md-4">
        <a href={this.props.link} target="_blank">
          <div
            className="image"
            style={{
              backgroundImage: `url(${this.props.logo})`,
              backgroundColor: this.props.colour
            }}
          />
        </a>
        <div className="title bold">{this.props.title}</div>
        <div className="time-period">{this.props.timeperiod}</div>
        <div className="subtitle">{this.props.subtitle}</div>
        <div className="projects__skillsWrapper">
          <div className="projects__skills">{this.props.skills1}</div>
          <div className="projects__skills">{this.props.skills2}</div>
          <div className="projects__skills">{this.props.skills3}</div>
          <div className="projects__skills">{this.props.skills4}</div>
          <div className="projects__skills">{this.props.skills5}</div>
          {this.props.skills6 ? (
            <div className="projects__skills">{this.props.skills6}</div>
          ) : null}
          {this.props.skills7 ? (
            <div className="projects__skills">{this.props.skills7}</div>
          ) : null}
          {this.props.skills8 ? (
            <div className="projects__skills">{this.props.skills8}</div>
          ) : null}
          {this.props.skills9 ? (
            <div className="projects__skills">{this.props.skills9}</div>
          ) : null}
          {this.props.skills10 ? (
            <div className="projects__skills">{this.props.skills10}</div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default ExperienceUnit;
