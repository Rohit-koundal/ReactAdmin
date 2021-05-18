import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <div className="container mt-5">
        <div className="card mx-auto my-auto" style={{ width: "18rem" }}>
          <div className="card-header">Click Your Action here</div>
          <div className="card-body">
            <form inline>
              <a className="btn btn-primary mx-4" href="Login">
                Login
              </a>{" "}
              <a className="btn btn-success" href="Register">
                Register
              </a>{" "}
            </form>
          </div>
          <div className="card-footer">Just that's it</div>
        </div>
      </div>
    );
  }
}
