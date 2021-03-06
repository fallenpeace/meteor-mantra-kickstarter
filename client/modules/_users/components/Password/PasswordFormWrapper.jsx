

import React from 'react';
// import LoginFormContainer from '../../containers/LoginFormContainer.jsx'
import PasswordFormContainer from '../../containers/PasswordFormContainer.jsx'

export default class extends React.Component {

  render () {
    return (
      <div className="loginColumns">
          <div className="row">

              <div className="col-md-6">
                  <h2 className="font-bold">Welcome</h2>

                  <p>
                      Ut laoreet tempor turpis non malesuada. Nam convallis volutpat massa ac ullamcorper. In ac elementum nulla. Morbi est risus, facilisis quis ipsum et, pellentesque mollis orci. Morbi sodales est risus, at luctus diam ultrices nec. Nulla ultricies semper arcu, dictum varius neque. Morbi consequat mollis accumsan. Suspendisse eget imperdiet dui. Duis malesuada porta massa vitae ultrices. Praesent consectetur in sem non vehicula. Nunc a congue magna. Quisque nunc sapien, fringilla ut laoreet ut, porttitor vitae nulla.
                  </p>


              </div>
              <div className="col-md-6">
                  <div className="ibox-content">

                    <h2 className="font-bold">Forgot password</h2>
                    <p>
                      Enter your email address and your password will be reset and emailed to you.
                    </p>

                    <PasswordFormContainer />

                    <p className="text-muted text-center"><small>Remember your password?</small></p>
                    <a className="btn btn-sm btn-white btn-block" href="/login">Login</a>

                  </div>
              </div>
          </div>
          <hr/>
      </div>

    )
  }
}
