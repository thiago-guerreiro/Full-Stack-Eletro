export const PRODUTO_SELECIONADO = 'PRODUTO_SELECIONADO'
export const PRODUTOS_CARREGADOS = 'PRODUTOS_CARREGADOS'


export const selecionarProduto = value => ({
    type: PRODUTO_SELECIONADO,
    valor: value
})

export const carregarProdutos = value => ({
    type: PRODUTOS_CARREGADOS,
    valor: value
}) 