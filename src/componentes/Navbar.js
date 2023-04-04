import React, {useState} from "react";

export default function Navbar ({productoF}) {
    const [busqueda, setBusqueda] = useState(null)

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
              onChange={(e) => setBusqueda(e.target.value)}
            />
            <button className="btn btn-outline-primary" type="submit" onClick={() => {
            if(busqueda === "")
            productoF(null)
            else
            productoF(busqueda)
            }}>
              Buscar
            </button>
          </form>
          <a className="text-white text-decoration-none" href="#">Soporte</a>
        </div>
      </nav>
    );
  }

