import React, { useState } from "react";
import "./Producto.css";

export default function GpuList  ({ gpuList }) {

  return (
    <div className="row" data-bs-theme="dark">
      {gpuList.map((gpu) => (
        <div className="col py-2 px-1 text-center" key={gpu.id}>
          <article className="card">
            <img
              className="card-img-top"
              src={require(`../img/Placa${gpu.imageId}.jpg`)}
              alt={gpu.name}
            />
            <div>
              <a href="#" className="card-title">
                {gpu.name}
              </a>
            </div>
            <div>${gpu.price}</div>
            <button className="btn btn-dark p-2 m-1">
              Ver mas
            </button>
          </article>
        </div>
      ))}
    </div>
  );
};
