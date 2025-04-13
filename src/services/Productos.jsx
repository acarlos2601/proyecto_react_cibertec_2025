import api from "./api";

export const listarProductos = () => api.get("/productos")

export const crearProductos = (data) => api.post("/productos",data)

export const actualizarProductos = (id,data) => api.put(`/productos/${id}`,data)

export const eliminarProducto = (id) => api.delete(`/productos/${id}`)