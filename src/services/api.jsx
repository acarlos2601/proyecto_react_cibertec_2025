import axios from "axios";

export const baseUrl = axios.create({
    baseURL: 'http://localhost:3001',
    headers:{
        'Content-Type': 'application/json'
    }
})

export const manejoRespuesta = async (peticion) => {
    try {
        const res = await peticion;
        return { data: res.data, error: null }
    } catch (error) {
        const mensajeError = error?.response?.data?.message || error?.message || "Error desconocido"
        return {data: null, error:mensajeError}        
    } 
}
