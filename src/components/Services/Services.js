import React from "react";
import Zoom from "react-reveal/Zoom";
import { serviceBox } from "./ServiceBox";

const Services = () => {
  return (
    <div id="services" className="services">
      <Zoom>
        <h1 className="py-5">Services</h1>
      </Zoom>
      <div className="container">
        <div className="row">
          {serviceBox(
            "React Native",
            "I have diligently maintained, performed unit testing, and designed solutions for React Native."
          )}
          {serviceBox(
            "Flutter",
            "I possess a strong proficiency in delivering full Flutter Applications."
          )}
          {serviceBox(
            "React Web",
            "I have constructed professional-grade websites utilizing the React library."
          )}
          {serviceBox(
            "Android",
            "I have hands-on experience in Java and Android development."
          )}
        </div>
      </div>
    </div>
  );
};

export default Services;
