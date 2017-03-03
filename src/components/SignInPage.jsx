'use strict';

import React from 'react'
import SignInForm from './SignInForm.jsx'

export default class SignInPage extends React.Component {
  render() {
    return (
      <div className="sign-in-container d-flex justify-content-center align-items-center">
        {<SignInForm/>}
      </div>
    );
  }
}
