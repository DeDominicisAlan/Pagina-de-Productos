const marcas = [
  { nombre: "Redragon", color: "red" },

  { nombre: "Nvidia", color: "green" },

  { nombre: "Intel", color: "blue" },
];

export default function ListaMarcas() {
  const listItems = marcas.map(marca => 
    <li 
    style={{ color: marca.color }}
    >
    {marca.nombre}
    </li>
  );
  return (
  <ul>{listItems}</ul>
  );
}
