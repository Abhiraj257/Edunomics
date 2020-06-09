import React from 'react'
// import {} from 'react-ic'
import { GrFacebookOption, GrTwitter, GrInstagram } from 'react-icons/gr'

const footer = () => {
  return (
    <div
      style={{
        width: '100%',
        // height: '30rem',
        backgroundColor: '#555',
        textAlign: 'center'
      }}>
      <div
        style={{
          textTransform: 'uppercase',
          fontSize: '2.5rem',
          color: '#eee',
          fontWeight: '500',
          paddingTop: '7rem'
        }}>
        edunomics
        <div
          style={{
            textTransform: 'lowercase',
            fontSize: '1.5rem',
            marginTop: '2rem',
            letterSpacing: '.12rem',
            fontWeight: '300'
          }}>
          contact@edunomics.in
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            width: '30%',
            margin: '4rem auto'
          }}>
          <a href='#' style={{ color: '#eee', textDecoration: 'none' }}>
            <GrFacebookOption />
          </a>
          <a href='#' style={{ color: '#eee', textDecoration: 'none' }}>
            <GrTwitter />
          </a>
          <a href='#' style={{ color: '#eee', textDecoration: 'none' }}>
            <GrInstagram />
          </a>
        </div>
        <div style={{ fontWeight: '300', paddingBottom: '5rem' }}>
          Join us &nbsp; | &nbsp; Cookie policy &nbsp; | &nbsp; terms of use
          &nbsp; | &nbsp; tech &nbsp; | &nbsp; privacy policy
        </div>
      </div>
    </div>
  )
}

export default footer
