import React from "react";
import Zoom from "react-reveal/Zoom";

const AboutMe = () => {
  return (
    <div id="about" className="mainBackground">
      <div className="container py-5">
        <div className="row">
          <Zoom>
            <div className="col-lg-12 col-xm-12">
              <Zoom>
                <h1 className="about-heading">About me</h1>
              </Zoom>
              <p>
                Result-driven, Mobile Applications & Software Developer with
                proven robust experience developing hybrid mobile (React Native
                & Flutter), native mobile (Android), web, and business
                applications.
                <br />
                • Exemplary track record of authoring and publishing several
                live mobile production applications in Google Play and Apple
                stores.
                <br />
                • Proven technical expertise in technologies such as JavaScript,
                Typescript, React Native, MERN, Node, MicroServices, Java, and
                others.
                <br />
                • Verifiable in-depth understanding of computer science,
                algorithms, complex data structures, and clean architecture.
                <br />
                • Highly knowledgeable of agile methodology and principles,
                including best practices for the full software development life
                cycle. <br />
                • Adaptable, quick learner with a superior ability to diagnose &
                resolve critical issues in a dynamic, outcome-driven technical
                environment.
                <br />
              </p>
            </div>
          </Zoom>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
