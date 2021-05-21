import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./Component/NavBar";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Admin from "./Pages/Admin";
import Logout from "./Pages/Logout";
export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/Login" component={Login}></Route>
            <Route exact path="/Register" component={Register}></Route>
            <Route exact path="/Logout" component={Logout}></Route>
            <Route exact path="/Admin" component={Admin}></Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
