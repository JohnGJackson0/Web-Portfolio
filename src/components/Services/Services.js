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
            "I have diligently maintained, performed unit testing, and designed solutions for extensive production applications using the React Native library."
          )}
          {serviceBox(
            "Flutter",
            "I possess a strong proficiency in delivering, conducting unit tests, and architecting numerous Flutter applications utilizing Bloc, Riverpod, ect."
          )}
          {serviceBox(
            "React Web",
            "I have constructed professional-grade websites utilizing the React library."
          )}
          {serviceBox(
            "Android",
            "I have hands-on experience in Java and Android development, having worked extensively with tools such as Android Studio and the Android SDK."
          )}
        </div>
      </div>
    </div>
  );
};

export default Services;
