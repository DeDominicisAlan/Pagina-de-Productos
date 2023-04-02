import "./App.css";
import React, {useState} from "react";
import Lista from "./componentes/Lista"
import Footer from "./componentes/Footer"
import Navbar from "./componentes/Navbar"
import Producto from "./componentes/Producto"

function App() {
  const gpuList = [
    { id: 1, name: "Eclipse GPU 100", imageId: 1, price: 200, serie: 100 },
    { id: 2, name: "Eclipse GPU 180", imageId: 1, price: 350, serie: 100 },
    { id: 3, name: "Eclipse GPU 250", imageId: 1, price: 500, serie: 200 },
    { id: 4, name: "Eclipse GPU 300", imageId: 2, price: 1200, serie: 300 },
    { id: 5, name: "Eclipse GPU 150", imageId: 1, price: 250, serie: 100 },
    { id: 6, name: "Eclipse GPU 240", imageId: 1, price: 400, serie: 200 },
    { id: 7, name: "Eclipse GPU 250Z", imageId: 2, price: 600, serie: 200 },
    { id: 8, name: "Eclipse GPU 270", imageId: 2, price: 800, serie: 200 },
    { id: 9, name: "Eclipse GPU 290", imageId: 2, price: 1000, serie: 200 },
    { id: 10, name: "Eclipse GPU 350", imageId: 2, price: 1500, serie: 300 },
  ];
  
  const [CategoriaSeleccionada, setCategoriaSeleccionada] = useState(null)
  
  const handleCategoriaSeleccionada = (categoria)=>{
    setCategoriaSeleccionada(categoria)
  }
  
  let productosFiltrados = null
  
  if(CategoriaSeleccionada != null)
    productosFiltrados = gpuList.filter((gpu) => gpu.serie === CategoriaSeleccionada)
    else
    productosFiltrados = gpuList
  
  
  
  return (
    <div className="App">
      <Navbar />

      <header></header>

      <main className="container-fluid bg-dark" data-bs-theme="dark">
        <div className="row row-sm-0">
          <aside className="col-0 col-md-3 pr-5 mb-5 col-sm-0 d-none d-md-block h-100">
            <h2 className="text-white text-center mt-4">Series de GPU's</h2>
            <Lista onCategoriaSeleccionada={handleCategoriaSeleccionada}/>
          </aside>
          <section
            className="Main-articulos col-12 col-lg-9 col-md-9 col-sm-12"
            id="articulos"
          >
            <Producto gpuList={productosFiltrados} />
          </section>
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
} //Final del main

export default App;
