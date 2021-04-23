import React from 'react'
import { Modal } from 'react-bootstrap'

const Modall = (props) => {
  const { show, handleClose, item: { description, name, icon, image } } = props

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header >
          <div><img style={{ width: '50px' }} src={icon} alt="" /></div>
          <button onClick={handleClose} className="button-modal">
            <span>X</span>
          </button>
        </Modal.Header>
        <Modal.Body>
          <div>
            <img style={{ width: '100%' }} src={image} alt="" />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="categories-section-big-descripcion-middle">
            <p>{name}</p>
            <span>{description}</span>
            <span className="recommendation-card-image-price">50$</span>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  )
}


export default Modall