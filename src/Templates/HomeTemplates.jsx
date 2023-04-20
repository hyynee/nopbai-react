import React, { Component } from "react";
// component này sẽ đại diện cho component được load trên Url
import { Outlet, NavLink } from "react-router-dom";
export default class HomeTemplates extends Component {
  render() {
    return (
      <div>
        <header className="header p-3 bg-dark text-white">
          <nav className="d-flex">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "mx-2 text-dark nav-link bg-white p-2"
                  : "mx-2 text-white nav-link bg-dark"
              }
              style={({ isActive }) =>
                isActive ? { border: "4px solid orange" } : {}
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                isActive
                  ? "mx-2 text-dark nav-link bg-white p-2"
                  : "mx-2 text-white nav-link bg-dark"
              }
              style={({ isActive }) =>
                isActive ? { border: "4px solid orange" } : {}
              }
            >
              Cart
            </NavLink>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? "mx-2 text-dark nav-link bg-white p-2"
                  : "mx-2 text-white nav-link bg-dark"
              }
              style={({ isActive }) =>
                isActive ? { border: "4px solid orange" } : {}
              }
            >
              Login
            </NavLink>
            <NavLink
              to="/react-form"
              className={({ isActive }) =>
                isActive
                  ? "mx-2 text-dark nav-link bg-white p-2"
                  : "mx-2 text-white nav-link bg-dark"
              }
              style={({ isActive }) =>
                isActive ? { border: "4px solid orange" } : {}
              }
            >
              ReactForm
            </NavLink>

            <NavLink
              to="/demo"
              className={({ isActive }) =>
                isActive
                  ? "mx-2 text-dark nav-link bg-white p-2"
                  : "mx-2 text-white nav-link bg-dark"
              }
              style={({ isActive }) =>
                isActive ? { border: "4px solid orange" } : {}
              }
            >
              HomeWork-1
            </NavLink>
            <NavLink
              to="/glasses"
              className={({ isActive }) =>
                isActive
                  ? "mx-2 text-dark nav-link bg-white p-2"
                  : "mx-2 text-white nav-link bg-dark"
              }
              style={({ isActive }) =>
                isActive ? { border: "4px solid orange" } : {}
              }
            >
              HomeWork-2
            </NavLink>
            <NavLink
              to="/shoestore"
              className={({ isActive }) =>
                isActive
                  ? "mx-2 text-dark nav-link bg-white p-2"
                  : "mx-2 text-white nav-link bg-dark"
              }
              style={({ isActive }) =>
                isActive ? { border: "4px solid orange" } : {}
              }
            >
              HomeWork-3
            </NavLink>
          </nav>
        </header>
        <main style={{ minHeight: 650 }}>
          <Outlet></Outlet>
        </main>

        <footer className="bg-dark text-white p-3 text-center">
          <h1>Footer</h1>
        </footer>
      </div>
    );
  }
}
