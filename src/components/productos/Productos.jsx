import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";

const Productos = ({ isHeaderVisible, setHeaderVisible }) => {
  const [valor, setValor] = useState(false);

  useEffect(() => {
    
    console.log("inicio del evento")
  
    return () => {
      console.log("Fin del evento")
    }
  }, [valor])
  

  const lista = ["a", "b", "c"];

  const listaObjeto = [
    {
      nombre: "a",
      indice: 0,
    },
    {
      nombre: "b",
      indice: 1,
    },
    {
      nombre: "c",
      indice: 2,
    },
  ];

  function onClickButton() {
    setValor((valorActual) => {
      return !valorActual;
    });
  }

  function cambiarEstado() {
    setHeaderVisible(!isHeaderVisible);
  }

  return (
    <div>
      <p>El valor booleano actual es {valor.toString()}</p>
      <Button variant="primary" onClick={onClickButton}>
        Cambiar valor
      </Button>
      <Button variant="primary" onClick={() => cambiarEstado()}>
        Cambiar estado desde Componente Hijo
      </Button>
      <ul>
        {lista.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <br />
      <ul>
        {listaObjeto.map((item) => (
          <li key={item.indice}>{item.nombre}</li>
        ))}
      </ul>
    </div>
  );
};

export default Productos;
