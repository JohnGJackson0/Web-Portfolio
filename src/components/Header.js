import React from "react";
import Typed from "react-typed";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div id="home" className="header-wrapper">
      <div className="main-info">
        <h1>Get Programming services in React / Native </h1>
        <p className="typed-text">
          <Typed
            className="typed-text"
            strings={[
              "React Native",
              "React Web",
              "UI/UX Design",
              "Full-Stack JS",
              "Programming",
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
          Let's Build Something.
        </Link>
      </div>
    </div>
  );
};

export default Header;
