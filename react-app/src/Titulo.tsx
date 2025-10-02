function Titulo() {
  // JSX: JavaScript XML
  const nombre = "Jonathan";
  if (nombre) {
    return <h1>Hola {nombre}</h1>;
  } else {
    return <h1>Hola Mundo</h1>;
  }
}

export default Titulo;
