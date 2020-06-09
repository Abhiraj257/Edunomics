import React from 'react'
import Button from './Buttons/button'
import image from '../../assets/image.jpg'

const Header = () => {
  return (
    <div
      style={{
        height: '87vh',
        width: '100%',
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${image})`,
        position: 'relative',
        color: '#fff',
        overflow: 'hidden'
      }}>
      <div
        style={{
          background: 'transparent',
          margin: 'auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '5.2rem',
          textAlign: 'center',
          fontWeight: '700',
          textTransform: 'uppercase',
          height: '100%',
          width: '100%',
          flexDirection: 'column'
        }}>
        Where do you want
        <br />
        to go today?
        <h2 style={{ fontSize: '3rem', fontWeight: '300', marginTop: '5rem' }}>
          Share your ultimate travel bucket list
          <br />
          with us
        </h2>
      </div>
      <div
        style={{
          position: 'absolute',
          left: '0',
          top: '0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          fontSize: '2rem',
          fontWeight: '300',
          marginTop: '3rem'
        }}>
        <h3 style={{ marginLeft: '4rem' }}>Welcome To Edunomics</h3>
        <div style={{ width: '18%' }}>
          <Button href='/login'>Log in</Button>
          <Button href='/signup'>Sign up</Button>
        </div>
      </div>
    </div>
  )
}

export default Header
