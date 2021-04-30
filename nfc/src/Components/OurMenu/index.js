import React from 'react'

const OurMenu = ({ otherServices, filterSelectedService }) => {
  return (
    <div>
      <div className="see-our-menu">
        <p>CONSULTA NUESTRAS CARTAS</p>
        {otherServices && otherServices.map((service, index) => {
          const { name } = service
          return <div key={index} onClick={() => filterSelectedService(service)} style={{ background: '#000000' }} className="see-our-menu-type-title text-secundary-nfc text-uppercase">
            <p>CONSULTA NUESTRO MENU :  <strong> {name} </strong> </p>

          </div>
        })}
        <div className="our-menu-ilustration"></div>
      </div>

    </div>
  )
}

export default OurMenu
