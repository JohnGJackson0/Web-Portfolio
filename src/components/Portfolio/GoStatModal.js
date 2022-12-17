/* eslint-disable jsx-a11y/anchor-is-valid */
import Modal from "react-bootstrap/Modal";
import GoStat2 from "../../images/GOSTAT2.png";

export const GoStatModal = (show, handleClose) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header
        closeButton
        className="offsetBackground"
        closeVariant="white"
      >
        <Modal.Title>
          <div className="modal-text">GoStat - Statistics Calculator</div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="offsetBackground">
        <img className="portfolio-image-popupbox" src={GoStat2} alt="goStat" />
        <p>
          App created in the native Android SDK.
          <br />
          This is an inference statistics calculator for students learning
          elementary statistics.
        </p>
        <p>GitHub:</p>
        <a
          href=""
          className="hyper-link"
          onClick={() => {
            window.open("https://github.com/jgjio/GoStat");
          }}
        >
          https://github.com/jgjio/GoStat
        </a>
      </Modal.Body>
    </Modal>
  );
};
