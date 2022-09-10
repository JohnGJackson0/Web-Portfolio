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
                Have maintained, unit tested, and architected solutions for
                large production applications in the React Native library.
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
              <p>Have built professional websites using the React library.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <IconContext.Provider value={{ size: "40" }}>
                  <FaAndroid className="icon" />
                </IconContext.Provider>
              </div>
              <h3>Lambda & Microservices</h3>
              <p>
                Have deployed and worked with microservices using AWS Lambda and
                the serverless Framework. Also have some experience in MERN and
                other databases or servers in general.
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
              <h3>Architecture</h3>
              <p>
                Have experience in all phases of the software development
                lifecycle taking buisness requirements and transfering it into
                clean architecture and discovering technical solutions that meet
                business needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
