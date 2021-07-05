import React from "react";
import author from "../author.jpg";

const AboutMe = () => {
  return (
    <div className="container py-5">
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
            John Jackson is a Full-Stack React Native Developer with 2 years of
            experience in Mobile Application Development. John is a
            detail-oriented professional who specializes in React JS Native
            framework, software architecture, and user experience. In the past,
            he has managed to build applications in Android and React Native
            (IOS and Android) that helps with nutritional information and
            statistics.
          </p>
          <p>
            John has earned an undergraduate degree in Computer Science with a
            concentration in Computer Programming at the University of Baker
            College. He specializes in; <br />
            • Clean Architecture, Clean Coding
            <br />
            • API, Firebase and Library Integrations
            <br />
            • Test Driven and Automation Testing <br />
            • User Experience, UI Responsive Design <br />
            • Resolve Bugs, Issues & Tracking <br />
            • Team Collaboration & Communication
            <br />
          </p>
          <p>
            John Jackson is currently seeking React Native, or React JS
            opportunities and can be reached at JohnGJackson0@gmail.com.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
