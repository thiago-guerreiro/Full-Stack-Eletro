export const CATEGORIA_CLICADA = 'CATEGORIA_CLICADA'
export const CATEGORIAS_CARREGADAS = 'CATEGORIAS_CARREGADAS'

export const cliqueCategoria = value => ({
    type: CATEGORIA_CLICADA,
    valor: value
})

export const carregarCategorias = value => ({
    type: CATEGORIAS_CARREGADAS,
    valor: value
})