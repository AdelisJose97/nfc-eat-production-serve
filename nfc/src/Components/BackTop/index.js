import React from 'react'
import upicon from '../../Assets/up-arrow.svg'

const BackTop = () => {
  const BackTop = () => {
    window.scrollTo(0, 0)
  }
  return (
    <div onClick={BackTop} className="backtop">
      <img style={{ width: '50%' }} src={upicon} alt="" />
    </div>
  )
}

export default BackTop