import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class Login extends Component {
  state = {
    pass: '',
    email: ''
  }

  valueChange = (e, field) => {
    let val = e.target.value
    // console.log(val)
    if (field === 'pass') this.setState({ pass: val })
    else this.setState({ email: val })
  }

  onSubmitHandler = e => {
    e.preventDefault()
    const data = {
      email: this.state.email,
      password: this.state.pass,
      returnSecureToken: true
    }
    axios
      .post(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAnAnI4PUeaGY4FzLkYyi6m2Yy0aSmd46U',
        data
      )
      .then(res => {
        console.log(res)
        this.props.onSuccess(res.data.idToken, res.data.localId)
        this.props.url = '/account'
      })
      .catch(error => {
        this.props.onFail()
      })
  }

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
        <Redirect to={this.props.url} />
        <form
          onSubmit={this.onSubmitHandler}
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
              onChange={e => {
                this.valueChange(e, 'email')
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
              onChange={e => {
                this.valueChange(e, 'pass')
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
            type='submit'
            onClick={this.onSubmitHandler}>
            Log In
          </button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    url: state.url
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSuccess: (token, id) =>
      dispatch({ type: 'SUCCESS', token: token, id: id }),
    onFail: () => dispatch({ type: 'FAIL' })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
