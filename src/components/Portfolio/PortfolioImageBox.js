import { IconContext } from "react-icons";
import { FaSearchPlus } from "react-icons/fa";
import Zoom from "react-reveal/Zoom";

export const PortfolioImageBox = (onClickCallback, imageSrc, alt, label) => {
  return (
    <Zoom>
      <div className="portfolio-image-box portfolio-label">
        <img className="portfolio-image" src={imageSrc} alt={alt} />
        <p>{label !== undefined && label}</p>

        <div
          className="overflow"
          onClick={() => {
            onClickCallback();
          }}
        >
          <IconContext.Provider value={{ size: "30" }}>
            <FaSearchPlus className="portfolio-icon" />
          </IconContext.Provider>
        </div>
      </div>
    </Zoom>
  );
};
