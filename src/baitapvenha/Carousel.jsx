import React, { Component } from "react";

export default class Carousel extends Component {
  render() {
    return (
      <div className="container">
        <div className="card p-5 mt-4 shadow-sm p-3 mb-5 bg-body-tertiary rounded">
          <h1 className="text-dark text-center fw-bold">A warm welcome!</h1>
          <p className="fs-4 text-center p-2">
            Bootstrap utility classes are used to create this jumbotron since
            the old component has been removed from the framework. Why create
            custom CSS when you can use utilities?
          </p>
          <div className="mx-auto">
            <button className="btn btn-primary text-center fs-5">
              Call to action
            </button>
          </div>
        </div>
      </div>
    );
  }
}
