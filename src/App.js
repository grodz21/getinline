import React, { Component } from 'react';
import './App.css';
import Clientscomponent from './components/clients-component';
import SignInForm from './components/sign-form';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="App-header row">
            <div className="col-sm-12">
              <h1 className="Header-text"> 9 </h1>
              <h3> JULY 2017 </h3>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 Day-name">
              Thursday
            </div>
            <div className="col-sm-6" id="circle">
              <h1 className="Plus-sign-circle">+</h1>
            </div>
          </div>
        </div>

        < Clientscomponent />

        < SignInForm />
      </div>
    );
  }
}

export default App;
