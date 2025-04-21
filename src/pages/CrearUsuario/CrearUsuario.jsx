import React from "react";
import { crearUsuarios } from "../../services/UserService";
import FormularioUsuario from "../../components/formularioUsuario";


const CrearUsuario = () => {
  

  const registrarUsuario = async (formulario) => {
    const { data, error } = await crearUsuarios(formulario);

    if (error) console.log(error);
    else console.log(data);
  };

  return (
    <div className="contenedorFormularioCrear" >
    <FormularioUsuario onEnviar={registrarUsuario} />
    </div>
  );
};

export default CrearUsuario;