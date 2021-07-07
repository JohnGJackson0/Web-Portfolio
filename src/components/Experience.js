import React from "react";

const Experience = () => {
  return (
    <div className="experience">
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
            <h3>April 2021 - Present</h3>
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
      </div>
    </div>
  );
};

export default Experience;
