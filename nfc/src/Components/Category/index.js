import React from 'react'
const baseUrl = process.env.REACT_APP_FILES_URL
const Category = (props) => {
  const { name, icon } = props
  const newIconPath = icon.substring(7)
  return (
    <div className="categories-section-container">
      <div className="categories-section-icon">
        <img style={{ maxWidth: '50%' }} src={`${baseUrl}/${newIconPath}`} alt="" />
      </div>
      <p className="text-primary-nfc">{name}</p>
    </div>
  )
}

export default Category