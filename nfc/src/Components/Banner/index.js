import React from 'react'


//Logos & images
import bannerimage from '../../Assets/newAssets/banner-image.jpg'
import logo from '../../Assets/altos.jpg'


const Banner = () => {
  return (
    <div style={{ height: '160px' }} className="sticky-top">
      <img className="img-home" src={bannerimage} alt="" />
      <div style={{ position: 'absolute', width: '100%', bottom: '10%' }}>
        <img style={{ width: '30%', borderRadius: '50%' }} src={logo} alt="" />
      </div>
    </div>
  )
}

export default Banner
