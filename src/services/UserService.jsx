import api from "./api";

const manejoRespuesta = async (peticion) => {
    try {
        const res = await peticion;
        return { data: res.data, error: null }
    } catch (error) {
        const mensajeError = error?.response?.data?.message || error?.message || "Error desconocido"
        return {data: null, error:mensajeError}        
    } 
}


export const listarUsuarios = () => {
    return manejoRespuesta(api.get('/usuarios'));
}

export const crearUsuarios = (data) => {
    return manejoRespuesta(api.post('/usuarios',data));
}

export const actualizarUsuario = (id, data) => {
    return manejoRespuesta(api.put(`/usuarios/${id}`,data));
}

export const eliminarUsuario = (id) => {
    return manejoRespuesta(api.delete(`/usuarios/${id}`));
}

