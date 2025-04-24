import { actualizarProductos, listarProductos } from "../../services/Productos";


export const fetchProductos = () => {
    return async (dispatch)=>{
        dispatch({type: 'PRODUCTO_LOADING'})

        const {data, error} = await listarProductos();

        if(error)
            return dispatch({type:'PRODUCTO_ERROR', payload: error})

        return dispatch({type:'PRODUCTO_SUCCESS', payload: data})
    }
}

export const selectUser = (producto) => ({
    type: 'PRODUCTO_SELECTED',
    payload: producto
})

export const removeSelectedUser = () => ({
    type: 'PRODUCTO_DESELECTED'
})

export const updateUser = (productoModificado) => {
    return async (dispatch) => {
        dispatch({type: 'PRODUCTO_LOADING'})

        const {data, error} = await actualizarProductos(productoModificado.id, productoModificado)

        if(error)
            return dispatch({type:'PRODUCTO_ERROR', payload: error})
        return dispatch({type:'PRODUCTO_UPDATE', payload: data})
    }

}