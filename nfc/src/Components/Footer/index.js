import React from 'react'

import logo from '../../Assets/altos.jpg'

//Iconos de redes sociales
import facebookicon from '../../Assets/rrss/facebook.svg'
import twittericon from '../../Assets/rrss/twitter.svg'
import instagramicon from '../../Assets/rrss/instagram.svg'
import whatsappicon from '../../Assets/rrss/whatsapp.svg'


//Iconos de contacto, direccion y pedidos
import ubicationicon from '../../Assets/footer/ubicacion.svg'
import horarioicon from '../../Assets/footer/horario.svg'
import telefonoicon from '../../Assets/footer/telefono.svg'

const Footer = () => {
  return (
    <div>
      <div style={{ height: '45vh', position: 'relative' }} className="footer">
        <div className="footer-img"></div>
        <div className="footer-infomation">
          <div className="footer-information-folow-us">
            <div className="footer-information-icon">
              <img className="logo" src={logo} alt="" />
            </div>
            <div className="footer-information-support container">
              <div className="row">
                <div className="col-6">
                  <div className="row">
                    <div className="col-2">
                      <img style={{ width: '20px' }} src={ubicationicon} alt="" />
                    </div>
                    <div className="col-10">
                      <p style={{ fontWeight: 'bold' }}>Direccion</p>
                      <p style={{ fontSize: '0.8em' }}>Direccion del restaurant</p>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="row">
                    <div className="col-2">
                      <img style={{ width: '20px' }} src={horarioicon} alt="" />
                    </div>
                    <div className="col-10">
                      <p>Lunes-Domingos</p>
                      <p style={{ fontSize: '0.8em' }}>08:00 a 00:00</p>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="row">
                    <div className="col-2">
                      <img style={{ width: '20px' }} src={telefonoicon} alt="" />
                    </div>
                    <div className="col-10">
                      <p>Delivery</p>
                      <p style={{ fontSize: '0.8em' }}>+34 0234821</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-information-rrss">
              <div>
                <span style={{ background: 'none', color: '#FFFFFF', letterSpacing: '0.31px', fontSize: '1em', marginBottom: '20px' }}>Siguenos:</span>
              </div>

              <div className="footer-information-rrss-icons-container">
                <div className="footer-information-rrss-icon-container">
                  <img className="footer-information-rrss-icon" src={facebookicon} alt="" />
                </div>
                <div className="footer-information-rrss-icon-container">
                  <img className="footer-information-rrss-icon" src={twittericon} alt="" />
                </div>
                <div className="footer-information-rrss-icon-container">
                  <img className="footer-information-rrss-icon" src={instagramicon} alt="" />
                </div>
                <div className="footer-information-rrss-icon-container">
                  <img className="footer-information-rrss-icon" src={whatsappicon} alt="" />
                </div>
              </div>
            </div>
          </div>
          {/* <div className="footer-information-support container">
            <div className="row">
              <div className="col-2">
                <ul>
                  <li>Tostadas</li>
                  <li>Veganos</li>
                  <li>Batidos</li>
                  <li>Bebidas</li>
                </ul>
              </div>
              <div className="col-2">
                <ul>
                  <li>Entrantes</li>
                  <li>Veganos</li>
                  <li>Platos</li>
                  <li>Postres</li>
                  <li>Bebidas</li>
                </ul>
              </div>
              <div className="col-2">
                <ul>
                  <li>Licores</li>
                  <li>Tragos</li>
                  <li>Tapas</li>
                  <li>Vegano</li>
                  <li>Postres</li>
                  <li>Bebidas</li>
                </ul>
              </div>
              <div className="col-3">
                <div className="row">
                  <div className="col-2">
                    <img style={{ width: '20px' }} src={ubicationicon} alt="" />
                  </div>
                  <div className="col-10">
                    <p style={{ fontWeight: 'bold' }}>Direccion</p>
                    <p style={{ fontSize: '0.8em' }}>Direccion del restaurant</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-2">
                    <img style={{ width: '20px' }} src={horarioicon} alt="" />
                  </div>
                  <div className="col-10">
                    <p>Lunes-Domingos</p>
                    <p style={{ fontSize: '0.8em' }}>08:00 a 00:00</p>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="row">
                  <div className="col-2">
                    <img style={{ width: '20px' }} src={telefonoicon} alt="" />
                  </div>
                  <div className="col-10">
                    <p>Delivery</p>
                    <p style={{ fontSize: '0.8em' }}>+34 0234821</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-2">
                    <img style={{ width: '20px' }} src={whatsappicon} alt="" />
                  </div>
                  <div className="col-10">
                    <p>Direccion</p>
                    <p style={{ fontSize: '0.8em' }}>+34 0234821</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-2">
                    <img style={{ width: '20px' }} src={correoicon} alt="" />
                  </div>
                  <div className="col-10">
                    <p>Correo</p>
                    <p style={{ fontSize: '0.8em' }}>nfc@example.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
        <div style={{ height: '5vh', background: '#000000', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          Altos del Templo - Todos los derechos reservados
        </div>
      </div>
    </div>
  )
}

export default Footer
