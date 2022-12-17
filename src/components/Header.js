import React from "react";
import { Link } from "react-scroll";
import { Zoom } from "react-reveal";
import author from "../author.jpg";
import { FaAngleDoubleDown } from "react-icons/fa";

const Header = () => {
  return (
    <div id="home" className="header-wrapper mainBackground">
      <div className="main-info">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6 col-sm-12 justify-content-center">
            <Zoom>
              <h1>Hi there, I'm John Jackson.</h1>
            </Zoom>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <Zoom>
              <div className="photo-wrap mb-3">
                <img className="profile-img" src={author} alt="author" />
              </div>
              <div className="photo-label">
                <h3>John Jackson, BSc</h3>
              </div>
            </Zoom>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <br />
            <Zoom>
              <Link
                smooth={true}
                to="about"
                offset={-65}
                className="btn-main-offer"
              >
                <FaAngleDoubleDown />
              </Link>
            </Zoom>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
