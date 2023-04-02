import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar bg-body-tertiary" data-bs-theme="dark">
      
        <div className="container-fluid justify-content-around">
        <p className="navbar-brand fs-4">EclipseGPU</p>
          <form className="d-flex " role="search">
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
          <a className="text-white text-decoration-none" href="Soporte">Soporte</a>
        </div>
      </nav>
    );
  }
}

export default Navbar;
