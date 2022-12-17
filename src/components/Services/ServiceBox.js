import React from "react";
import { FaMobile } from "react-icons/fa";
import { IconContext } from "react-icons";
import Zoom from "react-reveal/Zoom";

export const serviceBox = (title, desc) => {
  return (
    <div className="col-lg-3 col-md-6 col-sm-6">
      <Zoom>
        <div className="box">
          <div className="circle">
            <IconContext.Provider value={{ size: "40" }}>
              <FaMobile className="icon" />
            </IconContext.Provider>
          </div>
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>
      </Zoom>
    </div>
  );
};
