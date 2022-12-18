/* eslint-disable jsx-a11y/anchor-is-valid */
import Modal from "react-bootstrap/Modal";
import QuickNotes1 from "../../images/QUICKNOTES1.png";

export const QuickNotesModal = (show, handleClose) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header
        closeButton
        className="offsetBackground"
        closeVariant="white"
      >
        <Modal.Title>
          <div className="modal-text">Quick Notes</div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="offsetBackground">
        <img
          className="portfolio-image-popupbox"
          src={QuickNotes1}
          alt="Quick Notes App"
        />
        <p>
          App created in the React Native framework.
          <br />
          Recently pulled from IOS store to focus on other projects.
        </p>
        <p>Github:</p>
        <a
          href=""
          className="hyper-link"
          onClick={() => {
            window.open("https://github.com/JohnGJackson0/Quick-Notes");
          }}
        >
          https://github.com/JohnGJackson0/Quick-Notes
        </a>
      </Modal.Body>
    </Modal>
  );
};
