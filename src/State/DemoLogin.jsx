import React, { Component } from "react";

export default class DemoLogin extends Component {
  state = {
    isLogin: false, // mặc định là chưa đăng nhập
  };
  renderLogin = () => {
    if (this.state.isLogin) {
      return <button className="btn btn-success" onClick={() => {
     this.setState({
        isLogin:false
     })
    }}>LogOut</button>;
    }
    return <button className="btn btn-danger" onClick={() => {
        this.setState({
            isLogin:true
         })
    }}>Login</button>;
  };
  render() {
    return (
      <div className="container">
        <div className="bg-dark text-white">
          <div className="d-flex">
            <div className="w-75 text-center">
              <a href="#" className="mx-2 text-decoration-none">
                Home
              </a>
              <a href="#" className="mx-2 text-decoration-none">
                All-shoes
              </a>
              <a href="#" className="mx-2 text-decoration-none">
                Card
              </a>
            </div>
            <div className="text-end w-25 px-5">
              {/* {this.state.isLogin ? (
                <button className="btn btn-success">LogOut</button>
              ) : (
                <button className="btn btn-danger">Login</button>
              )} */}
              {this.renderLogin()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
