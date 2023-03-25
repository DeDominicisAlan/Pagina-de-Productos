import { render } from "@testing-library/react";
import React, { Component } from "react";
import "./Navbar.css"

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand">Navbar</a>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Buscar"
              aria-label="Search"
            />
            <button className="btn btn-outline-primary" type="submit">
              Buscar
            </button>
          </form>
        </div>
      </nav>
    );
  }
}

export default Navbar;
