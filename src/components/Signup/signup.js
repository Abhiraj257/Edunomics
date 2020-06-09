import React from 'react'

import image from '../../assets/image.jpg'
import Form from './SignupContainer/form'

const signup = () => {
  return (
    <div style={{ position: 'relative' }}>
      <div
        style={{
          position: 'absolute',
          left: '10rem',
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(${image})`,
          width: '60vw',
          height: '90vh',
          display: 'inline-block'
        }}>
        <Form />
      </div>
    </div>
  )
}

export default signup
