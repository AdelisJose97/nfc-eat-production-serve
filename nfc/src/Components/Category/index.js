import React from 'react'
const baseUrl = process.env.REACT_APP_FILES_URL


const Category = (props) => {
  const handleRef = (e) => {
    let setcionRedId = document.getElementById(e)
    const result = setcionRedId.offsetTop

    window.scrollTo(0, result - 305)
  }
  const { name, icon } = props
  const newIconPath = icon.substring(7)
  return (
    <div onClick={() => handleRef(name)} className="categories-section-container">
      <div className="categories-section-icon">
        <img style={{ maxWidth: '50%' }} src={`${baseUrl}/${newIconPath}`} alt="" />
      </div>
      <p className="text-primary-nfc">{name}</p>
    </div>
  )
}

export default Category