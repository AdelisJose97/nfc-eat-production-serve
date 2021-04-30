import React, { useEffect } from 'react'

import Category from '../Category'
import Slider from 'react-slick'
import './index.css'


/* import useNearScreen from '../../hooks/useNearScreen' */

/* import tostadaimg from '../../Assets/Tostadas.svg'
import veganoimg from '../../Assets/Vegano.svg'
import batidoimg from '../../Assets/Batidos.svg'
import bebidaimg from '../../Assets/Bebidas.svg' */
import backicon from '../../Assets/back-arrow.svg'
import nexticon from '../../Assets/next-arow.svg'


export default function FoodCategory({ service }) {
  var settings = {
    className: "",
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <NextButton />,
    prevArrow: <BackButton />,

  }


  function NextButton(props) {
    const { onClick, className } = props
    return <img onClick={onClick} className={className} src={nexticon} alt="" />
  }

  function BackButton(props) {
    const { onClick, className } = props
    return <img onClick={onClick} className={className} src={backicon} alt="" />
  }
  /* const inputEl = useRef(null)
  const handleBack = () => {
    console.log(inputEl.current.clientWidth)
    console.log(inputEl.current.scrollX)
    inputEl.current.scrollTo(-(inputEl.current.scrollLeft + inputEl.current.clientWidth), 0)

  }

  const handleNext = () => {
    inputEl.current.scrollTo((inputEl.current.scrollLeft + inputEl.current.clientWidth), 0)
  } */
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {service.categories && service.categories.map((category, index) => {
          const { name, icon } = category
          return <Category key={index} name={name} icon={icon} />

        })}
      </Slider>
    </div>
  )
}


/* <div className="lazy-category" >
  <div style={{ marginTop: '50px' }} ref={inputEl} className="categories-section">
    <div style={{ display: 'flex' }} className="categories-section-div">
      {services.map((service) => {
        return service.categories.map((category, index) => {
          const { name, icon } = category
          return <Category key={index} name={name} icon={icon} />
        })

      })}

    </div>
  </div>

  <div className="categories-section-arow-back">
    <button onClick={handleBack} style={{ border: 'none', background: 'none' }}>
      <img style={{ width: '20px' }} src={backicon} alt="" />
    </button>
  </div>
  <div className="categories-section-arow-next">
    <button onClick={handleNext} style={{ border: 'none', background: 'none' }}>
      <img style={{ width: '20px' }} src={nexticon} alt="" />
    </button>
  </div>
</div>
 */
