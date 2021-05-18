import React, { Component } from "react";
import { Container } from "react-bootstrap";
export default class Login extends Component {
  render() {
    return (
      <div>
        <Container>
          <div className="card mt-5  mx-auto" style={{ width: "28rem" }}>
            <div className="card-header">
              <h3>Log in</h3>
            </div>
            <form className="card-body">
              <div className=" form-group">
                <label className="h4">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                />
              </div>
              <br />
              <div className="form-group">
                <label className="h4">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                />
              </div>
              <br />
              <button
                type="submit"
                className="btn btn-primary btn-lg btn-block mx-5"
              >
                Sign in
              </button>
              <a className="btn btn-warning btn-lg btn-block" href="/">
                Go Back
              </a>
            </form>
          </div>
        </Container>
      </div>
    );
  }
}
