'use strict';

import React from 'react'
import SignInForm from './SignInForm.jsx'

export default class SignInPage extends React.Component {
  render() {
    return (
      <div className="sign-in-container">
        {<SignInForm/>}
      </div>
    );
  }
}
