import React, { Component } from "react";

export default class CreateProduct extends Component {
  state = {
    values: {
      idProduct: "",
      name: "",
      price: "",
      img: "",
      type: "phone",
      desc: "",
    },
    errors: {
      idProduct: "",
      name: "",
      price: "",
      img: "",
      type: "phone",
      desc: "",
    },
  };
  handleSubmit = (event) => {
    event.preventDefault();
    // call api
    console.log(this.state.values);
  };
  handelChangeInput = (event) => {
    let { value, id } = event.target; // event.target là thẻ input đang diễn ra sự kiện onInput
    let dataType = event.target.getAttribute("data-type");
    let minLength = event.target.getAttribute("data-minlength");
    let maxLength = event.target.getAttribute("data-maxlength");
    /////////////////////////
    //1)// xử lý this.state.values
    let newValue = { ...this.state.value };
    newValue[id] = value;
    ////////////////////////
    //2)// xử lý newError
    let newError = { ...this.state.errors };
    let message = "";
    if (value.trim() === "") {
      message = id + " không được bỏ trống!";
    } else {
      if (dataType) {
        switch (dataType) {
          case "number": {
            let regexNumber = /^-?\d*\.?\d+$/;
            if (!regexNumber.test(value)) {
              message = id + " phải là số !!";
            }
            break;
          }
          case "string": {
            let regexString = /^[a-zA-Z]+$/;
            if (!regexString.test(value)) {
              message = id + " phải là ký tự !!";
            }
            break;
          }
        }
      }
      if (minLength) {
        if (value.length < minLength) {
          message = id + " không được dưới " + minLength + " ký tự!!!";
        }
      }
    }
    newError[id] = message;

    // cập nhật lại state và value của error sau khi xử lý
    this.setState(
      {
        values: newValue,
        errors: newError,
      },
      () => {
        console.log(this.state);
      }
    );
  };
  render() {
    return (
      <form className="card" onSubmit={this.handleSubmit}>
        <div className="card-header bg-dark text-white">ProductInfo</div>
        <div className="card-body">
          <div className="row">
            <div className="col-6">
              <div className="form-group">
                <p>ID</p>
                <input
                  data-type="number"
                  data-minlength="6"
                  data-maxlength="32"
                  type="text"
                  className="form-control"
                  id="idProduct"
                  name="idProduct"
                  onInput={this.handelChangeInput}
                />
                <p className=" text text-danger">
                  {this.state.errors.idProduct}
                </p>
              </div>
              <div className="form-group">
                <p>Name</p>
                <input
                  data-type="string"
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  onInput={this.handelChangeInput}
                />
                <p className=" text text-danger">{this.state.errors.name}</p>
              </div>
              <div className="form-group">
                <p>Price</p>
                <input
                  type="text"
                  className="form-control"
                  id="price"
                  name="price"
                  data-type="number"
                  onInput={this.handelChangeInput}
                />
                <p className=" text text-danger">{this.state.errors.price}</p>
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <p>IMG</p>
                <input
                  type="text"
                  className="form-control"
                  id="img"
                  name="img"
                  onInput={this.handelChangeInput}
                />
                <p className=" text text-danger">{this.state.errors.img}</p>
              </div>
              <div className="form-group">
                <p>Type</p>
                <select name="type" id="type" className="form-control"  onInput={this.handelChangeInput}>
                  <option value="phone">Phone</option>
                  <option value="tablet">tablet</option>
                  <option value="laptop">laptop</option>
                </select>
              </div>
              <div className="form-group">
                <p>Desc</p>
                <input
                  type="text"
                  className="form-control"
                  id="desc"
                  name="desc"
                  onInput={this.handelChangeInput}
                />
                <p className=" text text-danger">{this.state.errors.desc}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <button className="btn btn-success" type="submit">
            Create
          </button>
        </div>
      </form>
    );
  }
}
