import React from 'react'

import Category from '../Category'

/* import useNearScreen from '../../hooks/useNearScreen' */

/* import tostadaimg from '../../Assets/Tostadas.svg'
import veganoimg from '../../Assets/Vegano.svg'
import batidoimg from '../../Assets/Batidos.svg'
import bebidaimg from '../../Assets/Bebidas.svg' */
import backicon from '../../Assets/back-arrow.svg'
import nexticon from '../../Assets/next-arow.svg'

export default function FoodCategory({ services }) {
  return (
    <div className="lazy-category" >
      <div style={{ marginTop: '50px' }} className="categories-section">
        <div style={{ display: 'flex' }} className="categories-section-div">
          {services.map((service) => {
            return service.categories.map((category, index) => {
              const { name, icon } = category
              return <Category key={index} name={name} icon={icon} />
            })

          })}
          {/* <div className="categories-section-container">
            <div className="categories-section-icon">
              <img style={{ maxWidth: '50%' }} src={veganoimg} alt="" />
            </div>
            <p className="text-primary-nfc">Vegano</p>
          </div>
          <div className="categories-section-container">
            <div className="categories-section-icon">
              <img style={{ maxWidth: '50%' }} src={batidoimg} alt="" />
            </div>
            <p className="text-primary-nfc">Batidos</p>
          </div>
          <div className="categories-section-container">
            <div className="categories-section-icon">
              <img style={{ maxWidth: '50%' }} src={bebidaimg} alt="" />
            </div>
            <p className="text-primary-nfc">Bebidas</p>
          </div> */}
        </div>
      </div>

      <div className="categories-section-arow-back">
        <button style={{ border: 'none', background: 'none' }}>
          <img style={{ width: '20px' }} src={backicon} alt="" />
        </button>
      </div>
      <div className="categories-section-arow-next">
        <button style={{ border: 'none', background: 'none' }}>
          <img style={{ width: '20px' }} src={nexticon} alt="" />
        </button>
      </div>
    </div>
  )
}

/* export default function LazyFoodCategory() {
  const { isNearScreen, fromRef } = useNearScreen({ distance: '-150px' })

  return <div ref={fromRef}>
    {isNearScreen ? <FoodCategory fixed={isNearScreen} /> : <FoodCategory />}

  </div>
} */
