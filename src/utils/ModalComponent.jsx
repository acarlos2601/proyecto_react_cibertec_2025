import React from 'react'
import { Button, Modal } from 'react-bootstrap'

const ModalComponent = ({show, title, 
    noButtons=false, successTitle='Aceptar', 
    onHide, onSucces, children}) => {
  return (
    <Modal
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered 
      show={show}
      onHide={onHide}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ maxHeight: '80vh', overflowY: 'auto' }}>
        {children}
      </Modal.Body>
      <Modal.Footer>
       {!noButtons && <div>
        <Button onClick={onHide}>Close</Button>
        <Button onClick={onSucces}>{successTitle}</Button>
       </div>}
      </Modal.Footer>
    </Modal>
  )
}

export default ModalComponent