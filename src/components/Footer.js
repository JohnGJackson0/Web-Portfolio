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

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="d-flex">
              <p>City Flat Rock</p>
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
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6">
            <div className="row">
              <div className="col">
                <a className="footer-nav">Home</a> <br />
                <a className="footer-nav">About me</a> <br />
                <a className="footer-nav">Services</a>
                <br />
              </div>
              <div className="col">
                <a className="footer-nav">Experience</a>
                <br />
                <a className="footer-nav">Portfolio</a>
                <br />
                <a className="footer-nav">Contact me</a>
                <br />
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
            <div className="d-flex justify-content-center">
              <FacebookShareButton
                url={"https://www.tanagr.com"}
                quote={
                  "Get Web and Mobile Software Services from a Full Stack Developer."
                }
                hashtag="#react #react-native"
              >
                <FacebookIcon className="mx-3" size={36}></FacebookIcon>
              </FacebookShareButton>
              <TwitterShareButton
                url={"https://www.tanagr.com"}
                quote={
                  "Get Web and Mobile Software Services from a Full Stack Developer, specializes in React and React Native framework."
                }
                hashtag="#javascript"
              >
                <TwitterIcon className="mx-3" size={36}></TwitterIcon>
              </TwitterShareButton>
              <RedditShareButton
                url={"https://www.tanagr.com"}
                quote={
                  "Get Web and Mobile Software Services from a Full Stack Developer, specializes in React and React Native framework."
                }
                hashtag="#javascript"
              >
                <RedditIcon className="mx-3" size={36}></RedditIcon>
              </RedditShareButton>
              <LinkedinShareButton
                url={"https://www.tanagr.com"}
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
              {new Date().getFullYear()}&nbsp;Tanagr | All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
