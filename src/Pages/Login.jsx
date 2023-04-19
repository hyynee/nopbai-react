import React, { Component } from 'react'

export default class Login extends Component {
  render() {
    return (
      <div className='container'>
        <h3>Login</h3>
        <div className="form-group">
            <p>user name</p>
            <input type="text" className='form-group' />
        </div>
        <div className="form-group">
            <p>password</p>
            <input type="password" className='form-group' />
        </div>
        <div className="form-group">
            <button className='btn btn-success mt-2'>Login</button>
        </div>
      </div>
    )
  }
}
