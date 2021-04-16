
import './App.css';
import Home from './Home';
import Task from './Task';
import User from './User';
import Navbar from './Navbar';
import React, { Component } from 'react';
import { useHistory } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Route,
  
} from "react-router-dom";
import user from "./User";

class App extends Component {

  constructor(props) {
    super(props)
    this.state = { 
      loggedIn: false
    }
  }


  updateLogin = () => {
    this.setState({
      loggedIn: !this.state.loggedIn
    })
  }

  render() {
    return (
      <Router history={useHistory}>
        <div className= "container">
          <Navbar />
          <br/>
            
            { !this.state.loggedIn && <Route path = "/User" exact render={
              (props) => {
                return (<User {...props} update={this.updateLogin}/>)
              }
            } />}
            {this.state.loggedIn && <Route path = "/Home" exact render= {
              (props) => {
                return (<Home {...props} update={this.updateLogin}/>)
              }
            } />}
            {this.state.loggedIn && <Route path = "/Task" exact render= {
              (props) => {
                return (<Task {...props} update={this.updateLogin}/>)
              }
            } />}
             {this.state.loggedIn && <Route path = "/User" exact render= {
              (props) => {
                return (<User {...props} update={this.updateLogin}/>)
              }
            } />}
            <>
            <Route exact path="/User"  Component={User}/>
            <Route exact path="/Task"  Component={Task}/>
            </>
        </div>
      </Router>
    );  
  }
}

export default App;