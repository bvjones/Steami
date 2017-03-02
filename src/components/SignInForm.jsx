'use strict';

import React from 'react'

export default class SignInPage extends React.Component {
  render() {
    return (
      <form action="/auth/openid" method="post">
        <input type="submit" value="Sign in with Steam" />
      </form>
    );
  }
}
