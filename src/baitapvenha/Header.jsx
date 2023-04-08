import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="d-flex justify-content-between align-items-center p-3 fs-5 bg-dark">
            <div className="text-white">Start Bootstrap</div>
            <nav className="menu">
              <ul class="nav nav-underline">
                <li class="nav-item">
                  <a class="nav-link active text-light fw-semibold" aria-current="page" href="#">
                   Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-light" href="#">
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-light" href="#">
                    Contact
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled">Disabled</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}
