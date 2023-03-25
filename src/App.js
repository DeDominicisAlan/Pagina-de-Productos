import "./App.css";
import Navbar from "./componentes/Navbar";
import Lista from "./componentes/Lista";
import Producto from "./componentes/Producto";




function App() {
  return (
    <div className="App">
      <Navbar />

      <header></header>

      <main>
        <div className="row">
        <aside className="col-0 col-sm-12 col-md-3 pr-5 mb-5">
          <Lista />
        </aside>
        <section className="Main-articulos col-12 col-lg-9" id="articulos">
          <Producto/>
        </section>
        </div>
      </main>

      <footer></footer>
    </div>
  );
} //Final del main

export default App;
