import { PRODUTO_SELECIONADO, PRODUTOS_CARREGADOS } from '../actions/produtoSelecionadoActions';

var estadoInicial = {
   produtoSelecionado: null,
   produtosCarregados: [] 
}

export function produtoSelecionadoReducer(state = estadoInicial, action) {
    switch (action.type) {
        case PRODUTO_SELECIONADO:
            return { ...state, produtoSelecionado: action.valor }
        case PRODUTOS_CARREGADOS:
            return { ...state, produtosCarregados: action.valor }
        default:
            return state
    }
}