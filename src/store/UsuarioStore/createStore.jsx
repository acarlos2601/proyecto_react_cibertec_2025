import { applyMiddleware, legacy_createStore,  } from 'redux'
import { combineReducers } from 'redux'
import { thunk } from 'redux-thunk'
import logger from 'redux-logger'
import usuarioReducer from './usuarioReducer'

const rootReducer = combineReducers({
    usuarios: usuarioReducer
})

const usuarioStore = legacy_createStore(rootReducer, applyMiddleware(thunk, logger))

export default usuarioStore