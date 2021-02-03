import React, { Component } from 'react';
import { Container, Row, Col, Modal } from 'react-bootstrap';
import Produto from '../components/Produto';
import Imagem from '../components/Imagem';
import { withRouter } from 'react-router-dom';

class Produtos extends Component {
    constructor(props) {
        super(props)
        this.state = { produtos: [], produtosFiltrados: [], produtoClicado: null, show: false };
    }

    componentDidMount() {
        this.loadAsyncData()
    }

    async loadAsyncData() {
        const resposta = await fetch("/api/produtos");
        const json = await resposta.json();
        this.setState({ produtos: json, produtosFiltrados: json, produtoClicado: this.state.produtoClicado, show: false });
    }

    showCategory(categoria) {
        if (categoria === 'todos') {
            this.setState({ produtos: this.state.produtos, produtosFiltrados: this.state.produtos, produtoClicado: this.state.produtoClicado, show: false })
        } else {
            let produtosFiltrados = this.state.produtos.filter((produto) => {
                return produto.categoria.toLowerCase() === categoria
            })
            this.setState({ produtos: this.state.produtos, produtosFiltrados: produtosFiltrados, produtoClicado: this.state.produtoClicado, show: false })
        }
    }

    handleClose() {
        this.setState({produtos: this.state.produtos, produtosFiltrados: this.state.produtosFiltrados, produtoClicado: this.state.produtoClicado, show: false })
    }

    handleOpen(produto) {
        this.setState({produtos: this.state.produtos, produtosFiltrados: this.state.produtosFiltrados, produtoClicado: produto, show: true})
    }

    irParaPedido(idproduto) {
        this.props.history.push("/Pedido/"+idproduto)
    }

    render() {
        return (
            <div>
                <Container fluid>
                    <Row>
                        <Col sm={12} md={4} lg={3}>
                            <aside className="categorias">
                                <h3 className="text-center text-danger">Categorias</h3>
                                <ul className="list-group">
                                    <li onClick={() => this.showCategory('todos')} className="list-group-item box">Todos</li>
                                    <li onClick={() => this.showCategory('celular')} className="list-group-item box">Celualr</li>
                                    <li onClick={() => this.showCategory('smart tv')} className="list-group-item box">Smart TV</li>
                                    <li onClick={() => this.showCategory('vídeo game')} className="list-group-item box">Vídeo Game</li>
                                    <li onClick={() => this.showCategory('notebook')} className="list-group-item box">Notebook</li>
                                    <li onClick={() => this.showCategory('computador')} className="list-group-item box">Computador</li>
                                </ul>
                            </aside>
                        </Col>
                        <Col sm={12} md={8} lg={9}>
                            {this.state.produtosFiltrados && this.state.produtosFiltrados.map(produto => <Produto onClick={() => this.handleOpen(produto)} produto={produto} key={produto.idproduto} />)}
                        </Col>
                    </Row>
                </Container>

                <Modal show={this.state.show} onHide={() => this.handleClose()}>
                    <Modal.Header closeButton bsPrefix="modal-header-custom mt-4 mr-4"> </Modal.Header>
                    {this.state.produtoClicado === null ? '' : 
                     <div className="modal-box-produto mb-5">
                        <Imagem key={this.state.produtoClicado.idproduto} src={this.state.produtoClicado.imagem} alt= {this.state.produtoClicado.descricao} />
                        <br/>
                        <p className="modal-nome-produto">{this.state.produtoClicado.descricao}</p>
                        <br/>
                        <p className="modal-antigo-preco">{this.state.produtoClicado.preco}</p>
                        <p className="text-danger">{this.state.produtoClicado.precoVenda}</p>
                        <button className="comprar-btn btn-danger" id="btn-comprar" onClick={() => this.irParaPedido(this.state.produtoClicado.idproduto)} >Comprar</button>
                     </div>}
                </Modal>
            </div>
        )
    }
}

export default withRouter(Produtos);