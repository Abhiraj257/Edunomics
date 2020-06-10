import React, { Component } from 'react'
import { connect } from 'tls'

class Account extends Component {
  render() {
    return (
      <div style={{ fontSize: '4rem' }}>
        <div
          style={{
            height: '10rem',
            width: '90%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '3rem',
            margin: '0 0 0 5rem'
          }}>
          <div
            style={{
              display: 'inline-block'
            }}>
            Welcome To Edunomics
          </div>
          <a
            href='#'
            style={{
              display: 'inline-block',
              textDecoration: 'none',
              fontSize: '2rem',
              color: '#333',
              borderRadius: '3rem',
              padding: '1rem 2rem',
              border: '.1rem solid #222'
            }}>
            My account
          </a>
        </div>
        <div
          style={{
            width: '30vw',
            height: '100%',
            backgroundColor: '#444',
            display: 'inline-block'
          }}>
          <div style={{ padding: '2.5rem' }}>
            <a style={{ textDecoration: 'none', color: '#eee' }} href='#'>
              Home
            </a>
          </div>
          <div style={{ padding: '2.5rem' }}>
            <a style={{ textDecoration: 'none', color: '#eee' }} href='#'>
              Sessions
            </a>
          </div>
          <div style={{ padding: '2.5rem' }}>
            <a style={{ textDecoration: 'none', color: '#eee' }} href='#'>
              Downloads
            </a>
          </div>
          <div style={{ padding: '2.5rem' }}>
            <a style={{ textDecoration: 'none', color: '#eee' }} href='#'>
              Setting
            </a>
          </div>
          <div style={{ padding: '2.5rem' }}>
            <a style={{ textDecoration: 'none', color: '#eee' }} href='#'>
              About
            </a>
          </div>
        </div>
        <div style={{ width: '68vw', display: 'inline-block' }}>
          <div>
            <div
              style={{
                height: '50rem',
                width: '100%',
                backgroundColor: '#066',
                display: 'inline-block'
              }}>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Account
