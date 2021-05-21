import React, { Component } from "react";
import { Container } from "react-bootstrap";
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      islogged: this.props.isLogin,
      Email: "",
      Password: "",
    };
  }

  emailChangeHandler = (e) => {
    this.setState({
      Email: e.target.value,
    });
  };
  passwordChangeHandler = (e) => {
    this.setState({
      Password: e.target.value,
    });
  };
  handlerclick = (e) => {
    e.preventDefault();
    if (
      this.state.Email === "rkshekhavat@gmail.com" &&
      this.state.Password === "rohit98169"
    ) {
      this.setState({ islogged: true });
      localStorage.setItem("islogged", true);
      this.props.history.push("/Admin");

      console.log(this.state.Email + "  " + this.state.Password);
    } else {
      console.log("you are not valid for this");
    }
  };
  render() {
    return (
      <div>
        <Container>
          <div className="card mt-5  mx-auto" style={{ width: "28rem" }}>
            <div className="card-header">
              <h3>Log in</h3>
            </div>
            <form className="card-body" onSubmit={this.handlerclick}>
              <div className=" form-group">
                <label className="h4">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  value={this.state.Email}
                  onChange={this.emailChangeHandler}
                />
              </div>
              <br />
              <div className="form-group">
                <label className="h4">Password</label>
                <input
                  type="password"
                  value={this.state.Password}
                  onChange={this.passwordChangeHandler}
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
