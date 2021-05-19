import React, { Component } from "react";

export default class Modals extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
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
  render() {
    return (
      this.state.show,
      this.handleShow,
      this.handleClose,
      (
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

                    <div class="form-group">
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
                        style={{ height: "300px;" }}
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
      )
    );
  }
}
