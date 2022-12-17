import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  RedditShareButton,
  RedditIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";
import Zoom from "react-reveal/Zoom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <Zoom>
              <div className="d-flex">
                <p>City of Flat Rock</p>
              </div>
              <div className="d-flex">
                <a href="tel:313-316-0160">+1(313)316-0160</a>
              </div>
              <div className="d-flex">
                <p>
                  <a href="mailto: JohnGJackson0@gmail.com?">
                    JohnGJackson0@gmail.com
                  </a>
                </p>
              </div>
            </Zoom>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6">
            <Zoom>
              <div className="row">
                <div className="col">
                  <a href="home" className="footer-nav">
                    Back to top
                  </a>{" "}
                  <br />
                  <br />
                </div>
              </div>
            </Zoom>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
            <Zoom>
              <div className="d-flex justify-content-center">
                <FacebookShareButton
                  url={"https://www.johnjackson.me"}
                  quote={
                    "Get Web and Mobile Software Services from a Full Stack Developer."
                  }
                  hashtag="#react #react-native"
                >
                  <FacebookIcon className="mx-3" size={36}></FacebookIcon>
                </FacebookShareButton>
                <TwitterShareButton
                  url={"https://www.johnjackson.me"}
                  quote={
                    "Get Web and Mobile Software Services from a Full Stack Developer, specializes in React and React Native framework."
                  }
                  hashtag="#javascript"
                >
                  <TwitterIcon className="mx-3" size={36}></TwitterIcon>
                </TwitterShareButton>
                <RedditShareButton
                  url={"https://www.johnjackson.me"}
                  quote={
                    "Get Web and Mobile Software Services from a Full Stack Developer, specializes in React and React Native framework."
                  }
                  hashtag="#javascript"
                >
                  <RedditIcon className="mx-3" size={36}></RedditIcon>
                </RedditShareButton>
                <LinkedinShareButton
                  url={"https://www.johnjackson.me"}
                  quote={
                    "Get Web and Mobile Software Services from a Full Stack Developer, specializes in React and React Native framework."
                  }
                  hashtag="#javascript"
                >
                  <LinkedinIcon className="mx-3" size={36}></LinkedinIcon>
                </LinkedinShareButton>
              </div>
              <p className="pt-3 text-center">
                Copyright&nbsp;&copy;&nbsp;
                {new Date().getFullYear()}&nbsp;John Jackson | All Rights
                Reserved
              </p>
            </Zoom>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
