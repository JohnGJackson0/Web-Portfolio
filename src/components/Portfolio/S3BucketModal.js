/* eslint-disable jsx-a11y/anchor-is-valid */
import Modal from "react-bootstrap/Modal";

export const S3BucketModal = (show, handleClose) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header
        closeButton
        className="offsetBackground"
        closeVariant="white"
      >
        <Modal.Title>
          <div className="modal-text">Serverless - S3 Thumbnail service</div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="offsetBackground">
        <p>
          An S3 bucket upload microservice written in python demonstrating
          infastructure as code.
        </p>
        <p>github:</p>
        <a
          href=""
          className="hyper-link"
          onClick={() => {
            window.open(
              "https://github.com/JohnGJackson0/thumbnail-microservice"
            );
          }}
        >
          https://github.com/JohnGJackson0/thumbnail-microservice
        </a>
      </Modal.Body>
    </Modal>
  );
};
