import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ErrorModal({ handleClose, message }) {
  return (
    <Modal show={!!message} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Error</Modal.Title>
      </Modal.Header>
      <Modal.Body>{message}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ErrorModal;
