import React from "react";

const GpuList = () => {
  const gpuList = [
    {
      id: 1,
      name: "Nvidia GeForce RTX 3080",
      price: 699,
      image: "https://example.com/gpu-1.jpg",
    },
    {
      id: 2,
      name: "AMD Radeon RX 6800 XT",
      price: 649,
      image: "https://example.com/gpu-2.jpg",
    },
    {
      id: 3,
      name: "Nvidia GeForce GTX 1660 Super",
      price: 229,
      image: "https://example.com/gpu-3.jpg",
    },
    {
      id: 4,
      name: "AMD Radeon RX 6700 XT",
      price: 479,
      image: "https://example.com/gpu-4.jpg",
    },
    // Agrega más objetos según necesites
  ];
  
  const sortedGpuList =  gpuList.sort((a, b)=> a.price - b.price);

  return (
  <div className="row">
        {sortedGpuList.map((gpu) => (
        <div className="col py-4 px-1">
          <article key={gpu.id} className="card">
            <div className="d-flex product-image"><img src={gpu.image} alt={gpu.name} /></div>
            <div><a href="#" className="card-title">{gpu.name}</a></div>
            <div>${gpu.price}</div>
          </article>
        </div>
        ))}
</div>
    
        
  );
};

export default GpuList;