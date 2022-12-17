/* eslint-disable jsx-a11y/anchor-is-valid */
import Modal from "react-bootstrap/Modal";
import Staty1 from "../../images/STATY1.png";

export const StatyModal = (show, handleClose) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header
        closeButton
        className="offsetBackground"
        closeVariant="white"
      >
        <Modal.Title>
          <div className="modal-text">Staty - Statistics Calculator</div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="offsetBackground">
        <img
          className="portfolio-image-popupbox"
          src={Staty1}
          alt="Staty - Statistics App"
        />
        <p>
          App created in the Flutter.
          <br />
          Get this app on IOS and Android!
        </p>
        <a
          href=""
          className="hyper-link"
          onClick={() => {
            window.open(
              "https://play.google.com/store/apps/details?id=me.johnjackson.staty&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
            );
          }}
        >
          Android
        </a>
        <br />
        <a
          href=""
          className="hyper-link"
          onClick={() => {
            window.open(
              "https://apps.apple.com/us/app/staty-statistics-calculator/id1658300476"
            );
          }}
        >
          Ios
        </a>
        <p>See the source code:</p>
        <a
          href=""
          className="hyper-link"
          onClick={() => {
            window.open("https://github.com/JohnGJackson0/staty");
          }}
        >
          Github
        </a>
      </Modal.Body>
    </Modal>
  );
};
