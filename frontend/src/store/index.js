import { combineReducers, createStore } from 'redux'
import { categoriasReducer } from './reducers/categoriasReducer'
import { produtoSelecionadoReducer } from './reducers/produtoSelecionadoReducer'

var reducers = combineReducers({
    categoriasState: categoriasReducer,
    prodSelecionadoState: produtoSelecionadoReducer
})


export const store = createStore(reducers)