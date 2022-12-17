import React from "react";
import Typed from "react-typed";
import { Link } from "react-scroll";
import { Zoom } from "react-reveal";

const Header = () => {
  return (
    <div id="home" className="header-wrapper">
      <div className="main-info">
        <Zoom>
          <h1>Professional Programming Services</h1>
        </Zoom>

        <Zoom>
          <p className="typed-text">
            <Typed
              className="typed-text"
              strings={[
                "React Native",
                "AWS Lambda",
                "Javascript",
                "React",
                "Android",
                "Consulting",
              ]}
              typeSpeed={80}
              backSpeed={60}
              loop
            />
          </p>

          <Link
            smooth={true}
            to="contact"
            offset={-65}
            className="btn-main-offer"
          >
            Contact Me
          </Link>
        </Zoom>
      </div>
    </div>
  );
};

export default Header;
