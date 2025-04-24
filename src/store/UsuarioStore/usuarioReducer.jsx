
const initialState = {
    usuarios: [],
    usuarioSeleccionado: null,
    loading: false,
    error: null
}

const usuarioReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USUARIO_LOADING':
            return {...state, loading:true, error:null};

    case 'USUARIO_SUCCESS':
            return{ ...state, loading: false, error:null, usuarios: action.payload, usuarioSeleccionado: null }

    case 'USUARIO_ERROR':
            return {...state, loading:false, error: action.payload, usuarios:[], usuarioSeleccionado: null }

    case 'USUARIO_SELECTED':
        return {...state, usuarioSeleccionado:action.payload}

    case 'USUARIO_DESELECTED':
        return {...state, usuarioSeleccionado:null }

    case 'USUARIO_UPDATE':
        const newList = state.usuarios
            .map( user => user.id === action.payload.id? action.payload : user)

        return {...state, loading:false, error:null, usuarios:newList}
  
    default:
        return state;
  }
}

export default usuarioReducer