import React, { Component } from "react";

export default class Register extends Component {
  render() {
    return (
      <div className="container mt-5">
        <div className="card mx-auto" style={{ width: "28rem" }}>
          <div className="card-header h3">Register here!!</div>
          <div className="card-body">
            <form className="card-body">
              <div className=" form-group">
                <label className="h5">UserName</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter UserName"
                />
              </div>

              <div className=" form-group">
                <label className="h5">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                />
              </div>

              <div className="form-group">
                <label className="h5">Mobile</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter Mobile"
                />
              </div>

              <div className="form-group">
                <label className="h5">Password</label>
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
          <div className="card-footer h6">End!!</div>
        </div>
      </div>
    );
  }
}
