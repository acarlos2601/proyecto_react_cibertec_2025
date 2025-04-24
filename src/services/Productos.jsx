import { baseUrl, manejoRespuesta } from "./api";

export const listarProductos = () => manejoRespuesta(baseUrl.get("/productos"))

export const crearProductos = (data) => manejoRespuesta(baseUrl.post("/productos",data))

export const actualizarProductos = (id,data) => manejoRespuesta(baseUrl.put(`/productos/${id}`,data))

export const eliminarProducto = (id) => manejoRespuesta(baseUrl.delete(`/productos/${id}`))