import { useState } from "react";
import Cabecera from "./Component/Cabecera";
import Listado from "./Component/listado";


function App() {

  const [count, setCount] = useState(0);
  
  return (
    <div className="App">
      <Cabecera count={count}/>
      <Listado setCount={setCount}/>
    </div>
  );
}

export default App;


// El componente App es el padre de:
// - Cabecera
// - Listado
// ESTADO: App debe manejar en su estado un número para contabilizar el total de elementos comprados.
// MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto Item.
// PROPS: App deberá pasar por props lo necesario a sus componenetes internos.
