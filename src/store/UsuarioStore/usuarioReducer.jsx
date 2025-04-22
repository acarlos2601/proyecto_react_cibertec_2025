
const initialState = {
    usuarios: [],
    loading: false,
    error: null
}

const usuarioReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USUARIO_LOADING':
            return {...state, loading:true, error:null};

    case 'USUARIO_SUCCESS':
            return{ ...state, loading: false, error:null, usuarios: action.payload }

    case 'USUARIO_ERROR':
            return {...state, loading:false, error: action.payload, usuarios:[] }
  
    default:
        return state;
  }
}

export default usuarioReducer