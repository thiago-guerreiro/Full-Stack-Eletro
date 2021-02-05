import { CATEGORIA_CLICADA, CATEGORIAS_CARREGADAS } from '../actions/categoriasActions'

var estadoInicial = {
    categorias: [
        {texto: 'Todos', valor: 'todos'},
        {texto: 'Celular', valor: 'celular'},
        {texto: 'Smart TV', valor: 'smart tv'},
        {texto: 'Vídeo Game', valor: 'vídeo game'},
        {texto: 'Notebook', valor: 'notebook'},
        {texto: 'Computador', valor: 'computador'},
    ],
    categoriaSelecionada: 'todos'
}

export function categoriasReducer(state = estadoInicial, action) {
    switch (action.type) {
        case CATEGORIA_CLICADA:
            return { ...state, categoriaSelecionada: action.valor }
        case CATEGORIAS_CARREGADAS:
            return { ...state, categorias: action.valor }
        default:
            return state
    }
}
