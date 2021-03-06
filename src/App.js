import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './components/home'
import Signup from './components/Signup/signup'
import './App.css'
import Login from './components/Login/login'
import Account from './components/Account/Account'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <Switch>
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/account' component={Account} />
            <Route path='/' component={Home} />
          </Switch>
          <Route path='/login' component={Login} />
          {/* <Header /> */}
        </div>
      </BrowserRouter>
    )
  }
}

export default App
