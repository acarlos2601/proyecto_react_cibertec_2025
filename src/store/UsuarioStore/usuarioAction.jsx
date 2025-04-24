import {actualizarUsuario, listarUsuarios } from "../../services/UserService"

export const fetchUser = () => {
    return async (dispatch)=>{
        dispatch({type: 'USUARIO_LOADING'})

        const {data, error} = await listarUsuarios();

        if(error)
            return dispatch({type:'USUARIO_ERROR', payload: error})

        return dispatch({type:'USUARIO_SUCCESS', payload: data})
    }
}

export const selectUser = (usuario) => ({
    type: 'USUARIO_SELECTED',
    payload: usuario
})

export const removeSelectedUser = () => ({
    type: 'USUARIO_DESELECTED'
})

export const updateUser = (usuarioModificado) => {
    return async (dispatch) => {
        dispatch({type: 'USUARIO_LOADING'})

        const {data, error} = await actualizarUsuario(usuarioModificado.id, usuarioModificado)

        if(error)
            return dispatch({type:'USUARIO_ERROR', payload: error})
        return dispatch({type:'USUARIO_UPDATE', payload: data})
    }

}