import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="main-info">
        <h1>Web Development and Website promotions</h1>
        <p className="typed-text">
          I am a&nbsp;
          <Typed
            className="typed-text"
            strings={[
              "React Native Developer.",
              "React Web Developer.",
              "Web UI/UX designer.",
              "Full-Stack JS developer.",
            ]}
            typeSpeed={80}
            backSpeed={60}
            loop
          />
        </p>
        <a href="#" className="btn-main-offer">
          Main Offer
        </a>
      </div>
    </div>
  );
};

export default Header;
