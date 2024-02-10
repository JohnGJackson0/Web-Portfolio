import React from "react";
import Zoom from "react-reveal/Zoom";

const AboutMe = () => {
  return (
    <div id="about">
      <div className="container py-5">
        <div className="row">
          <Zoom>
            <div className="col-lg-10 col-xm-10 mx-auto">
              <Zoom>
                <h1 className="about-heading">About me</h1>
              </Zoom>
              <p className="about-paragraph">Welcome!</p>
              <p className="about-paragraph">
                I am a proficient Mobile Applications and Software Developer
                with a passion for creating efficient, innovative solutions.
                With a strong background in both hybrid (React Native & Flutter)
                and native mobile (Android) development, I also excel in web and
                business application development.
              </p>
              <p className="about-paragraph">
                Over the years, I have authored and published several mobile
                production applications, demonstrating my technical abilities
                across multiple technologies. I possess a deep understanding of
                computer science principles, from algorithms and complex data
                structures to clean architecture.
              </p>
              <p className="about-paragraph">
                My agile approach to the software development lifecycle, along
                with my adaptive learning attitude, allows me to thrive in
                outcome-driven technical environments. I have a knack for
                diagnosing and resolving critical issues, ensuring seamless
                digital experiences.
              </p>
              <p className="about-paragraph">
                Whether you're a business looking to improve processes, or need
                assistance with a new mobile app, I'm here to elevate your
                projects and help achieve your objectives. Ready to get started?
                Let's connect!
              </p>
            </div>
          </Zoom>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
