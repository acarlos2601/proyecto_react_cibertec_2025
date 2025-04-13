import React from "react";
import { Alert, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div
      style={{
        display: "flex", alignContent: "center", justifyContent: "center",
        alignItems: "center", }}
    >
      <div
        style={{
          backgroundColor: "white", width: '70%', borderRadius: "15px",
          minHeight: "200px", padding: "15px", minWidth: '300px',
          maxWidth: '800px'
        }}
      >
        <p>ERROR 404. Page Not Found</p>
        <Alert variant={"warning"}>
          No se ha encontrado la pagina. Click para volver a home
        </Alert>
        <Button as={NavLink} to={"/"}>
          {" "}
          Regresar{" "}
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
