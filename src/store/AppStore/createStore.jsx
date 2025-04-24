import { applyMiddleware, legacy_createStore,  } from 'redux'
import { combineReducers } from 'redux'
import { thunk } from 'redux-thunk'
import logger from 'redux-logger'
import usuarioReducer from '../UsuarioStore/usuarioReducer'
import productoReducer from '../ProductoStore/productoReducer'

const rootReducer = combineReducers({
    usuarios: usuarioReducer,
    productos: productoReducer
    //carrito:
})

const appStore = legacy_createStore(rootReducer, applyMiddleware(thunk, logger))

export default appStore