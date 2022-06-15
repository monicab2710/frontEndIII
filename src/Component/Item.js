
import React, {useState, useEffect} from 'react';

const Item = ({producto, setCount}) => {
  const [num, setNum] = useState();
  
  useEffect(() => {
    setNum(producto.stock)
  }, [producto.stock])

  const holdNum = () => {
    if(num > 0 ) {
      setCount(prevState => prevState + 1);
      setNum(prevState => prevState - 1);
    }
  }


  return (
    <header className='producto'>
      <h3>{producto.producto.nombre}</h3>
      <p>{producto.producto.descripcion}</p>
      <h5>Stock: {num === 0 ? <span className='stock'>Sin stock</span> : num } </h5>
      <button className={num === 0 ? 'sinStock' : 'compra'} onClick={() => holdNum()}>{num === 0 ? 'sin Stock' : 'Comprar'}</button>
    </header>
  )
}

export default Item

  // El componente Item no tiene componentes hijos.
// ESTADO: Item debe tener un número para almacenar la cantidad de stock, la misma se la defina el padre a la hora de crearlo.
// MÉTODOS: Item debe manejar el click de su boton para restar la cantidad en stock de sí mismo y a su vez poder aumentar el estado de su "abuelo" App.
// PROPS: Item recibe todos los campos que muestra en pantalla: nombre, descripcion, stock y el métodos heredados para su uso.
// Maqueta de Item:
//    h3
//    p
//    h5 > span    (este span debe mostrar la cantidad si es mayor a 0 "agotado" si llega a 0)
//    button       (este boton debe permitir comprar, pero si la cantidad es menor a 0 debe estar deshabilitado y decir "Sin stock")
