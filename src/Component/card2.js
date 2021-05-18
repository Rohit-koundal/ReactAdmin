import React, { Component } from "react";

export default class Card2 extends Component {
  render() {
    return (
      <div>
        <div
          className="card"
          data-toggle="modal"
          data-target={`#add-${this.props.model}-modal`}
        >
          <div className="card-body text-center">
            <div className="container">
              <img
                style={{ maxWidth: "125px;" }}
                className="img-fluid rounded-circle"
                src={this.props.img}
                alt="user_icon"
              />
            </div>

            <p className="mt-2">{this.props.paragraph}</p>
            <h1 className="text-uppercase text-muted">{this.props.title}</h1>
          </div>
        </div>
      </div>
    );
  }
}
