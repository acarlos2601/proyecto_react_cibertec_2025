import React, { useEffect, useState } from "react";
import { listarUsuarios } from "../../services/UserService";
import { Spinner, Table } from "react-bootstrap";

const Usuarios = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUsuarios = async () => {
      try {
        const response = await listarUsuarios();
        console.log(response.data);
        setUsuarios(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false)
      }

    };
    getUsuarios();
  }, []);

  return (
    <div>
      { loading && <Spinner animation="grow" />}
      { !loading && <Table striped bordered hover>
        <thead>
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
