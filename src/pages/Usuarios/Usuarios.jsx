import React from "react";
import { Spinner, Table } from "react-bootstrap";
import { useUsuarios } from "../../hooks";

const Usuarios = () => {
  const { usuarios, loading } = useUsuarios();

  return (
    <div>
      { loading && <Spinner animation="grow" />}
      { !loading && <Table striped bordered hover>
        <thead style={{width:'100%'}}>    
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Edad</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.length > 0 ? (
            usuarios.map((usuario, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{usuario.nombre}</td>
                  <td>{usuario.email}</td>
                  <td>{usuario.edad}</td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={4}>No se encontraron registros</td>
            </tr>
          )}
        </tbody>
      </Table>}
    </div>
  );
};

export default Usuarios;

