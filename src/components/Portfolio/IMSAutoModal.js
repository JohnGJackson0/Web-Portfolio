/* eslint-disable jsx-a11y/anchor-is-valid */
import Modal from "react-bootstrap/Modal";
import AUTO1 from "../../images/AUTO1.png";

export const IMSAutoModal = (show, handleClose) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header
        closeButton
        className="offsetBackground"
        closeVariant="white"
      >
        <Modal.Title>
          <div className="modal-text">IMS Auto Parts</div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="offsetBackground">
        <img
          className="portfolio-image-popupbox"
          src={AUTO1}
          alt="IMS Auto App"
        />
        <p>
          App created in the Android SDK framework.
          <br />
          This app is a functional prototype for a capstone project at Baker
          University.
        </p>
        <p>Github:</p>
        <a
          href=""
          className="hyper-link"
          onClick={() => {
            window.open("https://github.com/JohnGJackson0/IMSAutoPartsStore");
          }}
        >
          https://github.com/JohnGJackson0/IMSAutoPartsStore
        </a>
      </Modal.Body>
    </Modal>
  );
};
