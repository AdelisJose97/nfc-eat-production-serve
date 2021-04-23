import React, { useCallback, useState } from 'react'

import Modall from '../Modal'

const ListOfcategories = ({ services }) => {
  const [show, setShow] = useState(false);
  const [itemSelected, setitemSelected] = useState({})

  const handleClose = useCallback(
    () => setShow(false),
    [],
  );
  const handleShow = (e) => {
    setitemSelected(e)
    setShow(true);
  }

  return (
    <>
      {services.map((service) => {
        return service.categories.map((category, index) => {
          const { name, dishes, icon } = category
          return <section key={index} style={{ background: (index + 1) % 2 !== 0 ? '#F1F1F1' : '#FFFFFF' }} className="listOfCategories">
            {dishes.map((dish, index) => {
              return (
                <div key={index} className="list-categories-container">
                  <div className="categories-section-big-descripcion-top">
                    <div className="categories-section-big-descripcion-top-title">
                      <p>{name}</p>
                      <div className="categories-section-big-descripcion-top-title-divider"></div>
                    </div>
                  </div>
                  {dish && dish.image ?
                    <div style={{ position: 'relative' }} onClick={() => handleShow(dish, ...icon)} className="categories-section-big-descripcion-middle">
                      <p>{dish.name}</p>
                      <span>{dish.description}</span>
                      <div style={{ position: 'absolute', right: '15%', bottom: '50%', fontWeight: 'bold', fontSize: '1.5em' }}>{dish.price}€</div>
                    </div>
                    :
                    <div style={{ position: 'relative' }} className="categories-section-big-descripcion-middle">
                      <p>{dish.name}</p>
                      <span>{dish.description}</span>
                      <div style={{ position: 'absolute', right: '15%', bottom: '50%', fontWeight: 'bold', fontSize: '1.5em' }}>{dish.price}€</div>
                    </div>

                  }

                </div>
              )
            })}
          </section>


        })
      })}
      {/* {arrayOfCategories.map((category, index) => {
        const { title, items } = category
        return <section id={title} key={index} style={{ background: (index + 1) % 2 !== 0 ? '#F1F1F1' : '#FFFFFF' }} className="listOfCategories">
          {items.map((item, index) => {
            return (
              <div key={index} className="list-categories-container">
                <div className="categories-section-big-descripcion-top">
                  <div className="categories-section-big-descripcion-top-title">
                    <p>{title}</p>
                    <div className="categories-section-big-descripcion-top-title-divider"></div>
                  </div>
                </div>
                <div onClick={() => handleShow(item)} className="categories-section-big-descripcion-middle">
                  <p>{item.titleOfItem}</p>
                  <span>{item.descriptionOfItem}</span>
                </div>
              </div>
            )
          })}
        </section>
      })} */}
      <Modall show={show} handleClose={handleClose} item={itemSelected} />
    </>
  )
}

export default ListOfcategories
