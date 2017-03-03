'use strict';

import React from 'react'

export default class SignInPage extends React.Component {
  render() {
    return (
      <form action="/auth/openid" method="post">
        <input id="sign_in_button" type="submit" value="" />
      </form>
    );
  }
}
