import React, { Component } from 'react';
import './sign-form.css';

class SignInForm extends Component {
  render() {
    return (
    	<div className="container SignInForm">
          <div className="row">
            <div className="col-sm-6">
              <form className="signForm">
                <label>
                  <input type="text" name="name" placeholder="name"/>
                </label>
                <br />
                <label>
                  <input type="text" name="lastname" placeholder="lastname"/>
                </label>
                <br />
                <select name="stylistList" form="signForm">
                  <option value="George">George</option>
                  <option value="John">John</option>
                  <option value="Tak">Tak</option>
                </select>
                <br />
                <br />
                <input type="submit" value="Submit" />
              </form>
            </div>
          </div>
      </div>
    );
   }
}


export default SignInForm;