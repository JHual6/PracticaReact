import Card, { CardBody } from "./components/Card";
import List from "./components/List";
import BotonCarga from "./components/BotonCarga";
import { useState } from "react";
function App() {
  const list: string[] = ["Goku", "Eren", "Lelouch"];
  const handleSelect = (elemento: string) => {
    console.log("imprimiendo...", elemento);
  };
  const [isLoading, setIsLoading] = useState(false);
  const handleClick = () => setIsLoading(!isLoading);

  const [data2, setData2] = useState(["Eren", "Dante", "Lelouch"]);

  const addMinion = () => setData2([...data2, "Minion"]);
  const deleteMinion = () => setData2(data2.slice(0, -1));
  // const contenido = list.length !== 0 && (
  //   <List data={list} onSelect={handleSelect} />
  // );

  return (
    <Card>
      {/* {list.length !== 0 && "Cargando lista..."} */}
      <CardBody title="Hola Mundo" text="El texto del componente" />
      {/* {contenido} */}
      {list.length !== 0 ? (
        <List data={list} onSelect={handleSelect} />
      ) : (
        "No hay contenido"
      )}
      <BotonCarga isLoading={isLoading} onClick={handleClick}>
        {isLoading ? "Cargando..." : "Seleccione"}
      </BotonCarga>
      {/* Ej2 */}
      <BotonCarga onClick={addMinion}>Agregar</BotonCarga>
      <BotonCarga onClick={deleteMinion}>Eliminar</BotonCarga>
      <List data={data2} />
    </Card>
  );
}

export default App;
