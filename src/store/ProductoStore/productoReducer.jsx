
const initialState = {
    productos: [],
    productoSeleccionado: null,
    loading: false,
    error: null
}

const productoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'PRODUCTO_LOADING':
            return {...state, loading:true, error:null};

    case 'PRODUCTO_SUCCESS':
            return{ ...state, loading: false, error:null, productos: action.payload, productoSeleccionado: null }

    case 'PRODUCTO_ERROR':
            return {...state, loading:false, error: action.payload, productos:[], productoSeleccionado: null }

    case 'PRODUCTO_SELECTED':
        return {...state, productoSeleccionado:action.payload}

    case 'PRODUCTO_DESELECTED':
        return {...state, productoSeleccionado:null }

    case 'PRODUCTO_UPDATE':
        const newList = state.productos
            .map( user => user.id === action.payload.id? action.payload : user)

        return {...state, loading:false, error:null, productos:newList}
  
    default:
        return state;
  }
}

export default productoReducer