import React from "react";
import { FaMobile, FaDesktop, FaAndroid, FaCode } from "react-icons/fa";
import { IconContext } from "react-icons";

const Services = () => {
  return (
    <div id="services" className="services">
      <h1 className="py-5">Services</h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <IconContext.Provider value={{ size: "40" }}>
                  <FaMobile className="icon" />
                </IconContext.Provider>
              </div>
              <h3>React Native</h3>
              <p>
                Professional services for the React Native framework which will
                create one code-base that can be ran on both IOS and Android
                natively.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <IconContext.Provider
                  value={{
                    size: "40",
                  }}
                >
                  <FaDesktop className="icon" />
                </IconContext.Provider>
              </div>
              <h3>React Web</h3>
              <p>
                Professional web development services for the React framework
                which creates one web-based application that can be ran and work
                well on all types of devices.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <IconContext.Provider value={{ size: "40" }}>
                  <FaAndroid className="icon" />
                </IconContext.Provider>
              </div>
              <h3>Native Android</h3>
              <p>
                Professional Android development services for the React
                framework which is ran directly on Android devices.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <IconContext.Provider value={{ size: "40" }}>
                  <FaCode className="icon" />
                </IconContext.Provider>
              </div>
              <h3>Javascript</h3>
              <p>Professional Javascript programming for all types of uses.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
