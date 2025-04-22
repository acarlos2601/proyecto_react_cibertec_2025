import {listarUsuarios } from "../../services/UserService"

const fetchUsuario = () => {
  
    return async (dispatch)=>{
        dispatch({type: 'USUARIO_LOADING'})

        const {data, error} = await listarUsuarios();

        if(error)
            return dispatch({type:'USUARIO_ERROR', payload: error})

        return dispatch({type:'USUARIO_SUCCESS', payload: data})
    }
}


export default fetchUsuario