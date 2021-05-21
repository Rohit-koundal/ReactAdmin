import React, { Component } from "react";
import image1 from "../img/seo-and-web.png";
import { Modal, Button } from "react-bootstrap";
import image2 from "../img/list.png";
import image3 from "../img/product.png";
import image4 from "../img/keys.png";
import image5 from "../img/plus.png";
import Card from "../Component/card";
export default class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      islogged: this.props.logged,
      show: false,
      show1: false,
    };
  }

  handleShow = () => {
    console.log("hello bacha");
    this.setState({
      show: true,
    });
  };
  handleClose = () => {
    this.setState({
      show: false,
    });
  };
  secondhandleShow = () => {
    this.setState({
      show1: true,
    });
  };
  secondhandleClose = () => {
    this.setState({
      show1: false,
    });
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
                onClick={this.secondhandleShow}
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
        <div>
          <Modal show={this.state.show} onHide={this.handleClose}>
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Category details
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={this.handleClose}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <Modal.Body>
              <div className="card">
                <div className="card-body">
                  <form>
                    <input type="hidden" name="operation" value="addcategory" />

                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="catTitle"
                        placeholder="Enter category title"
                        required
                      />
                    </div>
                    <br />
                    <div className="form-group">
                      <textarea
                        style={{ height: "300px" }}
                        className="form-control"
                        placeholder="Enter category description"
                        name="catDescription"
                        required
                      ></textarea>
                    </div>
                  </form>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={this.handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
        {/* end model */}

        {/* Starting of first modal */}
        <Modal show={this.state.show1} onHide={this.secondhandleClose}>
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Product details
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={this.secondhandleClose}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <Modal.Body>
            <form>
              <input type="hidden" name="operation" value="addproduct" />

              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter title of product"
                  name="pName"
                  required
                />
              </div>
              <br />
              <div className="form-group">
                <textarea
                  style={{ height: "150px;" }}
                  className="form-control"
                  placeholder="Enter product description"
                  name="pDesc"
                ></textarea>
              </div>
              <br />
              <div className="form-group">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter price of product"
                  name="pPrice"
                  required
                />
              </div>
              <br />
              <div className="form-group">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter product discount"
                  name="pDiscount"
                  required
                />
              </div>
              <br />
              <div className="form-group">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter product Quantity"
                  name="pQuantity"
                  required
                />
              </div>
              <br />
              <div className="form-group">
                <select name="catId" className="form-control" id="">
                  <option value="1">Kuch to hona chahiye</option>
                  <option value="2">Kuch to hai</option>
                </select>
              </div>
              <br />
              <div className="form-group">
                <label for="pPic">Select Picture of product</label>
                <br />
                <input type="file" id="pPic" name="pPic" required />
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.secondhandleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.secondhandleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
        {/* End of 2nd modal */}
      </div>
    );
  }
}
