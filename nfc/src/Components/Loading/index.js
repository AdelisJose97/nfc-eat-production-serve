import React from 'react'
import { Spinner } from 'react-bootstrap'
import './index.css'

const Loading = () => {
  return (
    <div className="loading-container">
      <Spinner style={{ borderColor: '#b22585' }} animation="border" />
    </div>

  )
}

export default Loading
