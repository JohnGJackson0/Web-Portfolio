import React from "react";
import Zoom from "react-reveal/Zoom";
import { serviceBox } from "./ServiceBox";

const Services = () => {
  return (
    <div id="services" className="services mainBackground">
      <Zoom>
        <h1 className="py-5">Services</h1>
      </Zoom>
      <div className="container">
        <div className="row">
          {serviceBox(
            "React Native",
            "Have maintained, unit tested, and architected solutions for large production applications in the React Native library. Also have experience with Redux, typescript, and other libraries."
          )}
          {serviceBox(
            "Flutter",
            "Have great ability to deliver, unit test and architect multiple Flutter applications with Bloc, or river pods."
          )}
          {serviceBox(
            "React Web",
            "Have built professional websites using the React library."
          )}
          {serviceBox(
            "Android",
            "Have experience in Java and Android development. Have worked with Android Studio and the Android SDK."
          )}
        </div>

        <div className="row">
          {serviceBox(
            "Lambda & Microservices",
            "On the cutting edge of development practice with vertical slice architecture and microservices for massive app scalability."
          )}
          {serviceBox(
            "Clean Architecture",
            "All applications are built with clean architecture and SOLID principles in mind."
          )}
          {serviceBox(
            "TDD Unit Testing",
            "UTC and test driven software solutions is a process that enables high quality control and high maintainability."
          )}
          {serviceBox(
            "Agile Methodology",
            "The Software Development Life Cycle is followed with Agile methodology and principles."
          )}
        </div>
      </div>
    </div>
  );
};

export default Services;
