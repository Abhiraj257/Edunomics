import React from 'react'
import { Link } from 'react-router-dom'

const button = props => {
  return (
    <div
      style={{
        textDecoration: 'none',
        display: 'inline-block',
        marginRight: '2rem'
      }}>
      <Link
        to={props.href}
        style={{
          textDecoration: 'none',
          color: '#fff'
        }}>
        {props.children}
      </Link>
    </div>
  )
}

export default button
