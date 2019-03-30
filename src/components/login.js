import React, { Component } from 'react';
import firebase, { auth, provider } from '../utils/configFirebase';
import '../App.css';
import './login.css';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      user: null,
      isOpen: false      
    }
    this.handleChange = this.handleChange.bind(this);
    this.login = this.login.bind(this); 
    this.logout = this.logout.bind(this); 
    // this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  logout() {
    auth.signOut()
    .then(() => {
      this.setState({
        user: null
      });
    });
  };
  login() {
    auth.signInWithPopup(provider) 
    .then((result) => {
      const user = result.user;
      this.setState({
        user
      });
    });
  };
  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } 
    });
  };

  render() {
    return (
      
      <div className="app"> 
        
        {this.state.user ? (          
          <div>
            <img className="rounded-circle userImg" src={this.state.user.photoURL} alt="user"/>
            <button id="signOut" className="btn btn-primary my-2 my-sm-0" onClick={this.logout}>Logout</button>
          </div>
        ) : (     
          <header className="signInContainer mx-auto" id="signInContainer">
            <div className="container">
              <div className="card text-center align-middle">
                <div className="card-header">
                </div>
                <div className="card-body">
                  <h2 className="card-title">Bienvenida</h2>
                  <p className="card-text">a nuestra Web App. Queremos ayudarte en sentirte más segura en las calles.</p>
                  <button id="sign-in" className="btn btn-primary" onClick={this.login}>Iniciar sesión con Google</button>
                </div>
                <div className="card-footer text-muted">
                </div>
              </div>
            </div>
          </header>
        )}
      </div>
    );
  }
}

export default Login;
