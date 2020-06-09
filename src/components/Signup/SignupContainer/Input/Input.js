import React from 'react'

const Input = props => {
  return (
    <div style={{ textAlign: 'center', marginBottom: '2.5rem', color: '#fff' }}>
      <div style={{ textAlign: 'left', display: 'inline-block' }}>
        <label
          style={{
            fontSize: '1.7rem',
            marginBottom: '.4rem',
            fontWeight: '400',
            display: 'block'
          }}>
          {props.label}
        </label>
        <input
          style={{
            fontSize: '1.6rem',
            fontWeight: '100',
            padding: '.8rem',
            borderRadius: '.8rem',
            outline: 'none',
            border: 'none'
          }}
          type={props.type}
          placeholder={props.placeholder}
        />
      </div>
    </div>
  )
}

export default Input
