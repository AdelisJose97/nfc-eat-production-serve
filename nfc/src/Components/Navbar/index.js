import React from 'react'

import NFCLogo from '../../Assets/NFClogo.svg'
/* import useNearScreen from '../../hooks/useNearScreen' */

export default function Navbar() {
  /* const { isNearScreen, fromRef } = useNearScreen() */


  /* const { fixed = false } = props */
  /*   console.log('se ejecuto', fixed); */
  return (
    <div /* ref={fromRef} style={{ position: isNearScreen !== false ? 'fixed' : 'relative', zIndex: '5' }} */ className="nav-bar-home">
      <div className="nav-bar-home-top"></div>
      <div className="nav-bar-home-down"></div>
      <div className="img-nav-bar"></div>
      <div className="nav-bar-home-funcionality">
        {/* <div className="nav-bar-home-funcionality-up">
            <div>
              <img style={{ width: '20px' }} src={usuarioicon} alt="" />
            </div>
            <div className="nav-bar-home-funcionality-up-button">
              <button>Iniciar Sesion</button>
            </div>
          </div> */}
        <div className="nav-bar-home-funcionality-down" >
          <img /* style={{ width: '20vw' }} */ src={NFCLogo} alt="" />
          {/* <div className="nav-bar-home-funcionality-down-search">
              <div className="nav-bar-home-funcionality-down-search-icon"><img style={{ width: '20px' }} src={buscaricon} alt="" /></div>
              <input type="text" placeholder="Buscar producto" />
            </div> */}
        </div>
      </div>
    </div>
  )
}
/*
export default function LazyNavbar() {

  const { isNearScreen, fromRef } = useNearScreen()



  return <div ref={fromRef}>
    {isNearScreen ? <Navbar fixed={isNearScreen} /> : <Navbar />}

  </div>
} */
