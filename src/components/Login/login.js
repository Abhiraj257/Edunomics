import React, { Component } from 'react'

class Login extends Component {
  // state = {
  //   fields : [{type: 'email', label: 'email', value: ''}, {type: 'password', label: 'Password', val: ''}]
  // }
  render() {
    return (
      <div
        style={{
          position: 'absolute',
          top: '7rem',
          right: '11rem',
          height: '30rem',
          width: '30rem',
          textAlign: 'center'
        }}>
        <form
          style={{ textAlign: 'left', fontSize: '2.3rem', color: '#fff' }}
          action=''>
          <div style={{ marginBottom: '2rem' }}>
            <label style={{ display: 'block', marginBottom: '1.3rem' }}>
              Email
            </label>
            <input
              style={{
                padding: '1rem',
                borderRadius: '.3rem',
                border: 'none',
                outline: 'none',
                width: '100%'
              }}
              type='email'
              placeholder='Email address'
            />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '1.3rem' }}>
              Password
            </label>
            <input
              style={{
                padding: '1rem',
                borderRadius: '.3rem',
                border: 'none',
                outline: 'none',
                width: '100%'
              }}
              type='password'
              placeholder='Email address'
            />
          </div>
          <button
            style={{
              display: 'inline-block',
              marginTop: '3rem',
              padding: '1.2rem 2rem',
              fontSize: '1.6rem',
              borderRadius: '3rem',
              border: '.1rem solid white',
              backgroundColor: 'rgba(255,255,255, 0.5)'
            }}
            type='submit'>
            Log In
          </button>
        </form>
      </div>
    )
  }
}

export default Login
