import React from 'react'

/* import cardimgage from '../../Assets/cardimage.jpg' */
import ilustration from "../../Assets/1.png"

const OurMenu = () => {
  return (
    <div>
      <div className="see-our-menu">
        <p>CONSULTA NUESTRAS CARTAS</p>
        <div style={{ background: '#000000' }} className="see-our-menu-type-title text-secundary-nfc">CONSULTA NUESTRO MENU:  <strong> CENA </strong> </div>
        {/* <div className="see-our-menu-center-container">
          <div className="see-our-menu-center-container-opacity" >
            <div style={{ background: '#AE010A' }} className="see-our-menu-type-title text-secundary-nfc">CARTA COMIDA</div>
            <div className="container see-our-menu-container">
              <div className="row justify-content-center">
                <div className="col">
                  <div style={{ background: 'white' }} className="recommendation-card">
                    <div className="recommendation-card-container">
                      <div className="recommendation-card-container-image">
                        <img className="recommendation-card-image" src={cardimgage} alt="" />
                      </div>
                      <div className="recommendation-card-container-description">
                        <p className="recommendation-card-text">Tostadas de queso</p>
                        <span>Tostadas</span>
                      </div>
                      <div style={{ background: '#AE010A' }} className="recommendation-card-image-number">1</div>
                      <span className="recommendation-card-image-price">50$</span>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div style={{ background: 'white' }} className="recommendation-card">
                    <div className="recommendation-card-container">
                      <div className="recommendation-card-container-image">
                        <img className="recommendation-card-image" src={cardimgage} alt="" />
                      </div>
                      <div className="recommendation-card-container-description">
                        <p className="recommendation-card-text">Tostadas de queso</p>
                        <span>Tostadas</span>
                      </div>
                      <div style={{ background: '#AE010A' }} className="recommendation-card-image-number">2</div>
                      <span className="recommendation-card-image-price">50$</span>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="see-our-menu-center-container-opacity" >
            <div style={{ background: '#000000' }} className="see-our-menu-type-title text-secundary-nfc">CARTA CENA</div>
            <div className="container see-our-menu-container">
              <div className="row justify-content-center">
                <div className="col">
                  <div style={{ background: 'white' }} className="recommendation-card">
                    <div className="recommendation-card-container">
                      <img className="recommendation-card-image" src={cardimg} alt="" />
                      <p className="recommendation-card-text">Tostadas de queso</p>
                      <span>Tostadas</span>
                      <div style={{ background: '#000000' }} className="recommendation-card-image-number">3</div>
                      <span className="recommendation-card-image-price">50$</span>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div style={{ background: 'white' }} className="recommendation-card">
                    <div className="recommendation-card-container">
                      <img className="recommendation-card-image" src={cardimg} alt="" />
                      <p className="recommendation-card-text">Tostadas de queso</p>
                      <span>Tostadas</span>
                      <div style={{ background: '#000000' }} className="recommendation-card-image-number">4</div>
                      <span className="recommendation-card-image-price">50$</span>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <div style={{ height: '200%', backgroundImage: `url(${ilustration})`, backgroundSize: 'cover', opacity: '0.5', position: 'relative', zIndex: '1' }} ></div>
      </div>

    </div>
  )
}

export default OurMenu
