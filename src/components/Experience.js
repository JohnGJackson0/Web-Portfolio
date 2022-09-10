import React from "react";

const Experience = () => {
  return (
    <div id="experience" className="experience">
      <div className="text-center">
        <p>
          You can see this also on my LinkedIn:&nbsp;
          <a href="https://www.linkedin.com/in/jgj0/">Connect on LinkedIn</a>
        </p>
        <p>
          Please see an updated resume:&nbsp;
          <a href="https://docs.google.com/document/d/1NW_OjemBdYfpn_3JUaf7GfWtomdYrTBS0qjAi_yM_bM/">
            See my Resume
          </a>
        </p>
      </div>
      <div className="d-flex justify-content-center my-5">
        <h1>experience</h1>
      </div>
      <div className="container experience-wrapper">
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>November 2018 - June 7 2021</h3>
            <p>
              Creates apps in the native Android SDK.
              <br />
              • Clean Architecture, Clean Coding - Uses Android Room ORM, Live
              Data (observer pattern), Factory Patterns, OOP & Functional
              paradigms Java/Kotlin, DIAP, and soon Clean Architecture.
              <br />
              • UI Responsive Design - Utilizes Material Design and Responsive
              Mobile design.
              <br />
            </p>
          </div>
        </div>
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>Decemeber 2021</h3>
            <p>
              Graduate with a Bachelors Degree In Computer Science and a
              concentration in Computer Programming from Baker College. Recieved
              honors; <i>magna cum laude.</i>
            </p>
          </div>
        </div>
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>April 2021 - January 2022</h3>
            <p>
              Creates apps in the React Native framework. <br />
              <br />
              • Clean Code and Software Architecture - Programs projects
              utilizing state management (MVX) with Redux and libraries like
              Async Redux Thunk, Reselect, Immer, Sagas (removed), Async
              Persistence Storage in React JS Typescript.
              <br />
              • API Libraries and Firebase Integrations - Successfully implement
              multiple API calls (including elastic search), Firebase and
              authentication library, multiple UI design libraries including
              React Native Elements, React Native Paper and more.
              <br />
              • Test Driven and Automation Testing - Updates following TDD,
              utilizing React Native Testing Library (RTNL).
              <br />
            </p>
          </div>
        </div>
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>January 2022 - Present</h3>
            <p>
              Working for Nexient, LLC full time on Levi's React Native mobile
              application
              <br />
              <br />
              • Team Collaboration in Agile Scrum JIRA: Maintains consistent
              high velocity in a large collaborative team environment as a track
              lead based on the agile/scrum methodology. Is effective at
              estimating story points, refinement, facilitating backlog
              management, scrum ceremonies, and updating JIRA, and other
              bug/feature management systems.
              <br />
              • TDD with JEST RNTL & E2E Detox ect.: Created the infrastructure
              and first unit tests using React Native @Testing-Library in the
              application and completed testing many features to 100% coverage.
              Wrote Testing Architecture documents and coached unfamiliar
              developers on proper testing strategies and good practice.
              <br />
              • App Publishing and SVN Github GIT CICD: Works effectively with
              GIT and Github and the MS branching strategy or alternative
              branching strategies; can effectively cherry pick, rebase, merge,
              stash, and git flow.
              <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
