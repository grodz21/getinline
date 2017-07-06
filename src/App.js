import React, { Component } from 'react';
import './App.css';
import Clientscomponent from './components/clients-component';
import SignInForm from './components/sign-form';


class App extends Component {
    constructor(props){
      super(props)
      this.state = {
        showForm: false
      }
    }
      
  render() {
    
    const clientComponent = (!this.state.showForm) ? (
        <Clientscomponent />
      ) : undefined ;

    const signUpForm = (this.state.showForm) ? (
        <SignInForm />
      ) : undefined ;

    const dateInfo = new Date();
    const showDate = dateInfo.getDate();
    const optionsMonth = {month: 'long', year: 'numeric'};
    const showMonth = dateInfo.toLocaleDateString('en-US', optionsMonth);
    const optionsDay = {weekday: 'long'};
    const showDay = dateInfo.toLocaleDateString('en-US', optionsDay);

    return (
      <div className="App">
        <div className="container">
          <div className="App-header row">
            <div className="col-sm-12">
              <h1 className="Header-text"> {showDate} </h1>
              <h3> {showMonth} </h3>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 Day-name">
              {showDay}
            </div>
            <button onClick={(event)=>{
                this.setState({showForm: true})
            }}>
              <div className="col-sm-6" id="circle">
                <span className="Plus-sign-circle">+</span>
              </div>
            </button>
          </div>
        </div>

        {clientComponent}

        {signUpForm}
      </div>
    );
  }
}

export default App;
