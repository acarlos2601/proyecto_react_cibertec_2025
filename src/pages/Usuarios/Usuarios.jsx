import React, { useEffect, useState } from "react";
import { Alert, Button, Spinner, Table } from "react-bootstrap";
// import { useUsuarios } from "../../hooks";
import { ModalComponent } from "../../utils";
import FormularioUsuario from "../../components/formularioUsuario";
// import { actualizarUsuario } from "../../services/UserService";
import { useDispatch, useSelector } from "react-redux";
import fetchUsuario from "../../store/UsuarioStore/usuarioAction";

const Usuarios = () => {
//   const { usuarios, loading, setUsuarios } = useUsuarios();
  const [showModal, setShowModal]=useState(false)
  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState(null)
  const dispatch = useDispatch();
  const { usuarios, loading, error } = useSelector( (state) => state.usuarios )


  useEffect(() => {
    dispatch(fetchUsuario())
  }, [dispatch])
  
  const onEditUsuario = async (formulario) =>{
        // const {data, error} = await actualizarUsuario(formulario.id,formulario)

        // if (error) console.error(error);
        // else {
        //     console.log(data);
        //     onHideModal();
        //     //reload(); //opcion 1
            
        //     const nuevoArray = usuarios.filter((usuario) => usuario.id!== formulario.id )
        //     nuevoArray.push(formulario)
        //     setUsuarios(nuevoArray) //opcion 2
        // }
  }

  const onClickEditar = (usuario) => {
    setUsuarioSeleccionado(usuario)
    setShowModal(true)
  }

  const onHideModal = () =>{
    setUsuarioSeleccionado(null)
    setShowModal(false)
  }

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
            <th>Genero</th>
            <th>Rol</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {usuarios && usuarios.length > 0 ? (
            usuarios.map((usuario, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{usuario.nombre}</td>
                  <td>{usuario.email}</td>
                  <td>{usuario.edad}</td>
                  <td>{usuario.genero || 'No registrado'}</td>
                  <td>{usuario.rol || 'No registrado'}</td>
                  <td> 
                    <div style={{display:'flex', justifyContent:"center", columnGap:'20px'}}>
                        <Button onClick={()=>onClickEditar(usuario)} > Editar </Button>
                        <Button variant="danger" > Eliminar </Button>
                    </div>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={7}>No se encontraron registros</td>
            </tr>
          )}
        </tbody>
      </Table>}
      {error && <Alert variant={"danger"}>
          {error}
        </Alert>}

      <ModalComponent show={showModal} 
      title={'Crear Usuarios'} 
      onHide={()=>onHideModal()} 
      noButtons={true} >
        <div className="modalFormularioUsuario">
            <FormularioUsuario isCrear={false} initialValues={usuarioSeleccionado} onEnviar={onEditUsuario} />
        </div>
        
      </ModalComponent>
    </div>
  );
};

export default Usuarios;

