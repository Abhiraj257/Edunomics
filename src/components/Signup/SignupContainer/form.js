import React, { Component } from 'react'
import Input from './Input/Input'
import button from '../../Header/Buttons/button'

export default class Container extends Component {
  state = {
    fields: [
      { type: 'text', label: 'Name' },
      { type: 'email', label: 'Email Id' },
      { type: 'password', label: 'Password' },
      { type: 'number', label: 'Mobile Number' }
    ]
  }
  render() {
    return (
      <form
        action=''
        style={{
          position: 'absolute',
          top: '8rem',
          right: '-20rem',
          width: '30rem',
          background: '#ac84e2',
          padding: '3rem'
        }}>
        <div style={{ fontSize: '4rem', marginBottom: '2rem', color: '#fff' }}>
          Sign up
        </div>
        {this.state.fields.map(field => (
          <Input
            label={field.label}
            type={field.type}
            key={field.label}
            placeholder={field.label}
          />
        ))}
        <button
          type='submit'
          style={{
            background: 'none',
            fontSize: '2rem',
            border: '.1rem solid #fff',
            padding: '1.2rem 2rem',
            borderRadius: '3rem',
            color: 'white',
            outline: 'none',
            cursor: 'pointer'
          }}>
          {' '}
          Sign up
        </button>
      </form>
    )
  }
}
