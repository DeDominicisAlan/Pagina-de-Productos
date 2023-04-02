export default function ListaMarcas( {onCategoriaSeleccionada } ) {
  
  const marcas = [
    {Serie: 100},
    {Serie: 200},
    {Serie: 300}
  ]

  const listItems = marcas.map( (marca, indice) => 
    <li 
    className="list-group-item list-group-item-action"
    key={indice}
    >
    <button className="btn" onClick={() => onCategoriaSeleccionada(marca.Serie)}>{marca.Serie}</button>
    </li>
  );
  
  return (
  <ul className="list-group p-3 m-0">
  <li className="list-group-item list-group-item-action"><button className="btn" onClick={() => onCategoriaSeleccionada(null)}>Todas</button></li>
  {listItems}
  </ul>
  );
}

