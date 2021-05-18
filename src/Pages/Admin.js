import React, { Component } from "react";
import image1 from "../img/seo-and-web.png";
import { Modal, Button } from "react-bootstrap";
import image2 from "../img/list.png";
import image3 from "../img/product.png";
import image4 from "../img/keys.png";
import image5 from "../img/plus.png";
import Card from "../Component/card";
export default class Admin extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }
  handleShow = () => {
    console.log("hello bacha");
    this.setState = {
      show: true,
    };
  };
  handleClose = () => {
    this.setState = {
      show: false,
    };
  };
  render() {
    return (
      <div>
        <div className="container admin">
          <div className="container-fluid mt-3"></div>

          <div className="row mt-3">
            {/* <!--first col--> */}
            <div className="col-md-4">
              {/* <!--first box--> */}
              <Card img={image1} text="2342" paragraph="" title="users" />
            </div>

            {/* <!--second col--> */}

            <div className="col-md-4">
              <Card img={image2} text="23432" paragraph="" title="Categories" />
            </div>

            {/* <!--third col--> */}
            <div className="col-md-4">
              <Card img={image3} text="234" paragraph="" title="Products" />
            </div>
          </div>

          {/* <!--second row--> */}

          <div className="row mt-3">
            {/* <!--second :row first col--> */}
            <div className="col-md-6">
              <div
                className="card"
                data-toggle="modal"
                data-target={`#add-category-modal`}
                onClick={this.handleShow}
              >
                <div className="card-body text-center">
                  <div className="container">
                    <img
                      style={{ maxWidth: "125px" }}
                      className="img-fluid rounded-circle"
                      src={image4}
                      alt="user_icon"
                    />
                  </div>

                  <p className="mt-2">Click here to add new Category</p>
                  <h1 className="text-uppercase text-muted">Add Category</h1>
                </div>
              </div>
            </div>

            {/* <!--second row : second col--> */}

            <div className="col-md-6">
              <div
                className="card"
                data-toggle="modal"
                data-target={`#add-product-modal`}
              >
                <div className="card-body text-center">
                  <div className="container">
                    <img
                      style={{ maxWidth: "125px" }}
                      className="img-fluid rounded-circle"
                      src={image5}
                      alt="user_icon"
                    />
                  </div>

                  <p className="mt-2">Click here to add new Product</p>
                  <h1 className="text-uppercase text-muted">Add Product</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Modal --> */}
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
        {/* end model */}
      </div>
    );
  }
}
