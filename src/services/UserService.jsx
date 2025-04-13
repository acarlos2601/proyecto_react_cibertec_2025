import api from "./api";

export const listarUsuarios = () => {
    return api.get('/usuarios');
}

export const crearUsuarios = (data) => {
    return api.post('/usuarios',data)
}

export const actualizarUsuario = (id, data) => {
    return api.put(`/usuarios/${id}`,data)
}

export const eliminarUsuario = (id) => {
    return api.delete(`/usuarios/${id}`)
}

