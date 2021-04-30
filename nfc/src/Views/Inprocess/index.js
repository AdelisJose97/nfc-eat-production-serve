import React from 'react'
import { Link } from 'react-router-dom'
import inProccessImage from '../../Assets/newAssets/inprocess.svg'
import './index.css'

const InProccess = () => {
  return (
    <div className="in-process-container">
      <h1>Estamos en proceso de construccion</h1>
      <img src={inProccessImage} alt="" />
      <span>Visita nuestros clientes:</span>
      <Link to="/merida/altosdeltemplo">Altos del Templo</Link>
    </div>
  )
}

export default InProccess