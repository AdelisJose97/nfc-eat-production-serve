import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './index.css'
/* import ilustration from "../../Assets/1.png"
import tostadaimg from '../../Assets/Tostadas.svg'
import deliveryimg from '../../Assets/Delivery.svg'
import veganoimg from '../../Assets/Vegano.svg'
import batidoimg from '../../Assets/Batidos.svg'
import bebidaimg from '../../Assets/Bebidas.svg'
import cardimg from '../../Assets/card.jpg'
import tostadas from '../../Assets/categorias/tostadas.jpg'
import ensaladas from '../../Assets/categorias/ensaladas.jpg'
import batidos from '../../Assets/categorias/batidos.jpg'
import bebidas from '../../Assets/categorias/bebidas.jpg'
import back from '../../Assets/left.svg'
import next from '../../Assets/next.svg'
import logo from '../../Assets/altos.jpg' */

//Logo principal y banner 
/* import NFCLogo from '../../Assets/NFClogo.svg'
import buscaricon from '../../Assets/buscar.svg'
import usuarioicon from '../../Assets/usuario.svg' */


/* //Iconos de redes sociales
import facebookicon from '../../Assets/rrss/facebook.svg'
import twittericon from '../../Assets/rrss/twitter.svg'
import instagramicon from '../../Assets/rrss/instagram.svg'
import whatsappicon from '../../Assets/rrss/whatsapp.svg' */

/* //Iconos de contacto, direccion y pedidos
import ubicationicon from '../../Assets/footer/ubicacion.svg'
import horarioicon from '../../Assets/footer/horario.svg'
import telefonoicon from '../../Assets/footer/telefono.svg'
import correoicon from '../../Assets/footer/correo.svg' */

//Componentes
import Navbar from '../../Components/Navbar'
import LazyFoodCategory from '../../Components/FoodCategory'
import ListOfcategories from '../../Components/ListOfCategories'
import OurMenu from '../../Components/OurMenu'
import Footer from '../../Components/Footer'
import Banner from '../../Components/Banner'
import BackTop from '../../Components/BackTop'

// Servicios
import { getOne } from '../../Services/restaurant'

const handlerRestaurants = {
  altosdeltemplo: '607c906d8e5c5a1ac8ec301d',
  pajares: '607efc8dcc7b241058138571'

}

const Home = () => {
  const [services, setservices] = useState([])

  const { city, name } = useParams()
  const handlerId = handlerRestaurants[name]
  useEffect(() => {
    /*  getAll()
       .then(response => {
         console.log(response)
       }) */

    getOne(city, handlerId)
      .then(response => {
        const { services } = response
        setservices(services)
      })

  }, [city, handlerId])
  return (
    <div className="home" >
      {/* <div className="sticky-top"  >aqui</div> */}
      <Navbar />
      {/*  <LazyNavbar /> */}

      {/*  <div className="nav-bar-home">
        <div className="nav-bar-home-top"></div>
        <div className="nav-bar-home-down"></div>
        <div className="img-nav-bar"></div>
        <div className="nav-bar-home-funcionality">
          <div className="nav-bar-home-funcionality-up">
            <div>
              <img style={{ width: '20px' }} src={usuarioicon} alt="" />
            </div>
            <div className="nav-bar-home-funcionality-up-button">
              <button>Iniciar Sesion</button>
            </div>
          </div>
          <div className="nav-bar-home-funcionality-down" >
            <img  src={NFCLogo} alt="" />
             <div className="nav-bar-home-funcionality-down-search">
              <div className="nav-bar-home-funcionality-down-search-icon"><img style={{ width: '20px' }} src={buscaricon} alt="" /></div>
              <input type="text" placeholder="Buscar producto" />
            </div>
          </div>
        </div>
      </div> */}
      {/* Banner */}
      <Banner />
      {/* <div style={{ position: 'relative', zIndex: '2' }}>
        <img className="img-home" src={image} alt="" />
        <div style={{ position: 'absolute', width: '100%', bottom: '10%' }}>
          <img style={{ width: '15%', borderRadius: '50%' }} src={logo} alt="" />
        </div>
      </div> */}

      {/* baner delivery */}
      {/*  <div className="banner-delivery">
        <div>
          <img style={{ minWidth: '70px' }} src={deliveryimg} alt="" />
        </div>
        <div style={{ backgroundColor: 'white', width: '140px', height: '2px' }}></div>
        <h4 className="text-secundary-nfc">Sevicio de Delivery</h4>
        <p className="text-secundary-nfc"><strong>Ofrecemos servicion de delivery</strong></p>
      </div>
 */}

      {/* seccion de categorias de comidas  */}
      <LazyFoodCategory services={services} />
      <ListOfcategories services={services} />
      <OurMenu />
      <Footer />
      <BackTop />







      {/* <div className="recommended-divider">
        <span>RECOMENDACIONES DEL DIA</span>
      </div> */}

      {/* Tarjeta de recomendaciones */}
      {/* <div className="container-fluid mb-5">
        <div className="row justify-content-center">
          <div className="col-2">
            <div className="recommendation-card">
              <div className="recommendation-card-container">
                <img className="recommendation-card-image" src={cardimg} alt="" />
                <p className="recommendation-card-text">Tostadas de queso</p>
                <span>Tostadas</span>
                <div className="recommendation-card-image-number">1</div>
                <span className="recommendation-card-image-price">50$</span>
              </div>
            </div>
          </div>
          <div className="col-2">
            <div className="recommendation-card">
              <div className="recommendation-card-container">
                <img className="recommendation-card-image" src={cardimg} alt="" />
                <p className="recommendation-card-text">Tostadas de queso</p>
                <span>Tostadas</span>
                <div className="recommendation-card-image-number">2</div>
                <span className="recommendation-card-image-price">50$</span>
              </div>

            </div>
          </div>
          <div className="col-2">
            <div className="recommendation-card">
              <div className="recommendation-card-container">
                <img className="recommendation-card-image" src={cardimg} alt="" />
                <p className="recommendation-card-text">Tostadas de queso</p>
                <span>Tostadas</span>
                <div className="recommendation-card-image-number">3</div>
                <span className="recommendation-card-image-price">50$</span>
              </div>
            </div>
          </div>
          <div className="col-2">
            <div className="recommendation-card">
              <div className="recommendation-card-container">
                <img className="recommendation-card-image" src={cardimg} alt="" />
                <p className="recommendation-card-text">Tostadas de queso</p>
                <span>Tostadas</span>
                <div className="recommendation-card-image-number">4</div>
                <span className="recommendation-card-image-price">50$</span>
              </div>
            </div>
          </div>
          <div className="col-2">
            <div className="recommendation-card">
              <div className="recommendation-card-container">
                <img className="recommendation-card-image" src={cardimg} alt="" />
                <p className="recommendation-card-text">Tostadas de queso</p>
                <span>Tostadas</span>
                <div className="recommendation-card-image-number">5</div>
                <span className="recommendation-card-image-price">50$</span>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* Seccion Categorias */}
      {/* <div className="categories-section-big">
        <div className="categories-section-big-content" >
          <div className="categories-section-big-content-image" >
            <img style={{ maxWidth: '100%' }} src={tostadas} alt="" />
          </div>
          <div className="categories-section-big-descripcion">
            <div className="categories-section-big-descripcion-top">
              <div className="categories-section-big-descripcion-top-icon">
                <img style={{ maxWidth: '50%', objectFit: 'contain' }} src={tostadaimg} alt="" />
              </div>
              <div className="categories-section-big-descripcion-top-title">
                <p>Tostadas</p>
                <div className="categories-section-big-descripcion-top-title-divider"></div>
              </div>
            </div>

            <div className="categories-section-big-descripcion-middle">
              <p>Tostadas de Queso</p>
              <span>Breve descripcion de producto con ingredientes</span>
            </div>
            <div className="categories-section-big-descripcion-botom">
              <div className="categories-section-big-descripcion-botom-left">
                <button style={{ background: '#C9872F', border: 'none', width: '100%', height: '100%' }}>
                  <img style={{ maxWidth: '100%', height: '20px' }} src={back} alt="" />
                </button>
              </div>
              <div className="categories-section-big-descripcion-botom-left">
                <button style={{ background: '#FFB048', border: 'none', width: '100%', height: '100%' }}>
                  <img style={{ maxWidth: '100%', height: '20px' }} src={next} alt="" />
                </button>
              </div>
            </div>
            <div className="categories-section-big-descripcion-view-all">
              <span>Ver todo</span>
            </div>

          </div>
          <div className="categories-section-big-content-title text-secundary-nfc">CATEGORIAS</div>
        </div>
      </div>
      <div className="categories-section-big-secundary">
        <div className="categories-section-big-content" >
          <div className="categories-section-big-content-image" >
            <img style={{ maxWidth: '100%' }} src={ensaladas} alt="" />
          </div>
          <div className="categories-section-big-descripcion">
            <div className="categories-section-big-descripcion-top">
              <div className="categories-section-big-descripcion-top-icon">
                <img style={{ maxWidth: '50%', objectFit: 'contain' }} src={veganoimg} alt="" />
              </div>
              <div className="categories-section-big-descripcion-top-title">
                <p>Vegano</p>
                <div className="categories-section-big-descripcion-top-title-divider"></div>
              </div>
            </div>

            <div className="categories-section-big-descripcion-middle">
              <p>Ensalada Cesar</p>
              <span>Breve descripcion de producto con ingredientes</span>
            </div>
            <div className="categories-section-big-descripcion-botom">
              <div className="categories-section-big-descripcion-botom-left">
                <button style={{ background: '#C9872F', border: 'none', width: '100%', height: '100%' }}>
                  <img style={{ maxWidth: '100%', height: '20px' }} src={back} alt="" />
                </button>
              </div>
              <div className="categories-section-big-descripcion-botom-left">
                <button style={{ background: '#FFB048', border: 'none', width: '100%', height: '100%' }}>
                  <img style={{ maxWidth: '100%', height: '20px' }} src={next} alt="" />
                </button>
              </div>
            </div>
            <div className="categories-section-big-descripcion-view-all">
              <span>Ver todo</span>
            </div>
          </div>
        </div>
      </div>
      <div className="categories-section-big">
        <div className="categories-section-big-content" >
          <div className="categories-section-big-content-image" >
            <img style={{ maxWidth: '100%' }} src={batidos} alt="" />
          </div>
          <div className="categories-section-big-descripcion">
            <div className="categories-section-big-descripcion-top">
              <div className="categories-section-big-descripcion-top-icon">
                <img style={{ maxWidth: '50%', objectFit: 'contain' }} src={batidoimg} alt="" />
              </div>
              <div className="categories-section-big-descripcion-top-title">
                <p>Batidos</p>
                <div className="categories-section-big-descripcion-top-title-divider"></div>
              </div>
            </div>

            <div className="categories-section-big-descripcion-middle">
              <p>Batidos de Fresa</p>
              <span>Breve descripcion de producto con ingredientes</span>
            </div>
            <div className="categories-section-big-descripcion-botom">
              <div className="categories-section-big-descripcion-botom-left">
                <button style={{ background: '#C9872F', border: 'none', width: '100%', height: '100%' }}>
                  <img style={{ maxWidth: '100%', height: '20px' }} src={back} alt="" />
                </button>
              </div>
              <div className="categories-section-big-descripcion-botom-left">
                <button style={{ background: '#FFB048', border: 'none', width: '100%', height: '100%' }}>
                  <img style={{ maxWidth: '100%', height: '20px' }} src={next} alt="" />
                </button>
              </div>
            </div>
            <div className="categories-section-big-descripcion-view-all">
              <span>Ver todo</span>
            </div>
          </div>
        </div>
      </div>
      <div className="categories-section-big-secundary">
        <div className="categories-section-big-content" >
          <div className="categories-section-big-content-image" >
            <img style={{ maxWidth: '100%' }} src={bebidas} alt="" />
          </div>
          <div className="categories-section-big-descripcion">
            <div className="categories-section-big-descripcion-top">
              <div className="categories-section-big-descripcion-top-icon">
                <img style={{ maxWidth: '50%', objectFit: 'contain' }} src={bebidaimg} alt="" />
              </div>
              <div className="categories-section-big-descripcion-top-title">
                <p>Bebidas</p>
                <div className="categories-section-big-descripcion-top-title-divider"></div>
              </div>
            </div>

            <div className="categories-section-big-descripcion-middle">
              <p>Zumo de Naranja</p>
              <span>Breve descripcion de producto con ingredientes</span>
            </div>
            <div className="categories-section-big-descripcion-botom">
              <div className="categories-section-big-descripcion-botom-left">
                <button style={{ background: '#C9872F', border: 'none', width: '100%', height: '100%' }}>
                  <img style={{ maxWidth: '100%', height: '20px' }} src={back} alt="" />
                </button>
              </div>
              <div className="categories-section-big-descripcion-botom-left">
                <button style={{ background: '#FFB048', border: 'none', width: '100%', height: '100%' }}>
                  <img style={{ maxWidth: '100%', height: '20px' }} src={next} alt="" />
                </button>
              </div>
            </div>
            <div className="categories-section-big-descripcion-view-all">
              <span>Ver todo</span>
            </div>
          </div>
        </div>
      </div>
 */}

      {/* Seccion Consulta nuestras cartas */}
      {/* <div className="see-our-menu">
        <p>CONSULTA NUESTRAS CARTAS</p>
        <div className="see-our-menu-center-container">
          <div className="see-our-menu-center-container-opacity" >
            <div style={{ background: '#AE010A' }} className="see-our-menu-type-title text-secundary-nfc">CARTA COMIDA</div>
            <div className="container see-our-menu-container">
              <div className="row justify-content-center">
                <div className="col">
                  <div style={{ background: 'white' }} className="recommendation-card">
                    <div className="recommendation-card-container">
                      <img className="recommendation-card-image" src={cardimg} alt="" />
                      <p className="recommendation-card-text">Tostadas de queso</p>
                      <span>Tostadas</span>
                      <div style={{ background: '#AE010A' }} className="recommendation-card-image-number">1</div>
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
        </div>

        <div style={{ height: '100%', backgroundImage: `url(${ilustration})`, backgroundSize: 'cover', opacity: '0.5', position: 'relative', zIndex: '1' }} ></div>
      </div> */}

      {/* footer */}
      {/* <div style={{ height: '45vh', position: 'relative' }} className="footer">
        <div className="footer-img"></div>
        <div className="footer-infomation">
          <div className="footer-information-folow-us">
            <div className="footer-information-icon">
              <img className="logo" src={logo} alt="" />
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
          <div className="footer-information-support container">
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
          </div>
        </div>
        <div style={{ height: '5vh', background: '#000000', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          Altos del Templo - Todos los derechos reservados
        </div>
      </div> */}
    </div>
  )
}

export default Home
