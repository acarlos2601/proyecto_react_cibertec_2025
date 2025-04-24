import { baseUrl, manejoRespuesta } from "./api";

export const listarUsuarios = () => {
    return manejoRespuesta(baseUrl.get('/usuarios'));
}

export const crearUsuarios = (data) => {
    return manejoRespuesta(baseUrl.post('/usuarios',data));
}

export const actualizarUsuario = (id, data) => {
    return manejoRespuesta(baseUrl.put(`/usuarios/${id}`,data));
}

export const eliminarUsuario = (id) => {
    return manejoRespuesta(baseUrl.delete(`/usuarios/${id}`));
}

