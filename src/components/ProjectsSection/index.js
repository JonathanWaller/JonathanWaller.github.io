import React from "react";
import Section from "../Section";
import ExperienceUnit from "../ExperienceUnit";

import spotifyQuizLogo from "../../assets/images/projects/spotify-quiz.png";
import littleNomadLogo from "../../assets/images/projects/little-nomad.png";
import restayLogo from "../../assets/images/projects/restay.png";
import restayyyLogo from "../../assets/images/projects/restayyy.png";
import bigRestayLogo from "../../assets/images/projects/bigRestay.png";
import capitalF from "../../assets/images/projects/capitalF.png";
import middleF from "../../assets/images/projects/middleF.png";
import freelancer from "../../assets/images/projects/Splash.png";

import freelancerLogo from "../../assets/images/projects/freelancer.png";
import walkthroughViewGif from "../../assets/images/projects/wvwalkthroughview-optimize.gif";

import "./projects.scss";

class ProjectsSection extends React.Component {
  render() {
    return (
      <Section title="Projects">
        <div className="row" id="projects__block">
          <ExperienceUnit
            // logo={littleNomadLogo}

            logo={freelancer}
            colour="rgb(127, 196, 253)"
            title="Freelancer | Team App"
            link="http://freelancer.waller-jonathan.com/"
            timeperiod="2018"
            subtitle="Web application which allows small businesses and freelancers (web developers/designers) to interact and source work in a common setting."
            skills1="JavaScript"
            skills2="React"
            skills3="Redux"
            skills4="Node.js"
            skills5="Express"
            skills6="PostgreSQL"
          />
          <ExperienceUnit
            logo={bigRestayLogo}
            colour="#FFFFFF"
            title="reSTay | Individual App"
            link="http://www.restay.io"
            timeperiod="2018"
            subtitle="Property management utility for organizing and managing rental properties."
            skills1="JavaScript"
            skills2="React"
            skills3="Redux"
            skills4="Node.js"
            skills5="Express"
            skills6="PostgreSQL"
            skills7="Moment.js"
            skills8="Google Maps API"
            skills9="Mobile-Responsive"
            skills10="Auth0"
          />
          {/* <ExperienceUnit
            logo={restayLogo}
            colour="#312F31"
            title="WalkthroughView"
            link="https://github.com/praagyajoshi/WVWalkthroughView"
            timeperiod="2016"
            subtitle="A drop in utility to help onboard a new user/feature.
              Written in Objective C."
          /> */}
        </div>
      </Section>
    );
  }
}

export default ProjectsSection;
