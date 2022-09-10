import React from "react";
import author from "../author.jpg";

const AboutMe = () => {
  return (
    <div id="about" className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-3">
            <img className="profile-img" src={author} alt="author" />
          </div>
          <div className="photo-label">
            <h3>John Jackson, BSc</h3>
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">About me</h1>
          <p>
            John Jackson is an IT professional and college graduate with 2+
            years of experience in developing hybrid mobile (React Native),
            native mobile (Android), web and business applications.
            <br />
            <br />
            Instrumental in all phases of SDLC, Computer Science, algorithms and
            data structures. Includes in-depth knowledge of several
            technologies: Javascript, Typescript, React Native, AWS Lambda,
            Node, Mern, Java and others. <br />
            <br />
            John has earned an undergraduate degree in Computer Science with a
            concentration in Computer Programming at the University of Baker
            College. He specializes in;
            <br />
            <br />
            • Team Collaboration in Agile Scrum JIRA
            <br />
            • App Publishing and SVN Github GIT CICD
            <br />
            • State Lib. Redux Flux MobX Saga Thunk
            <br />
            • API: RESTful Serverless AWS Node Express <br />
            • TDD with JEST RNTL & E2E Detox ect. <br />
            • Clean Architecture MVC OOP ect.
            <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
