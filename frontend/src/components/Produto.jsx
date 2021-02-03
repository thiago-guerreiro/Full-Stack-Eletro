import React, {Component} from 'react';
import Imagem from './Imagem';

class Produto extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }

    render() {
        return (
            <div onClick={this.props.onClick} className="box-produto col-xs-6 col-md-6 col-lg-4">
                <Imagem key={this.props.produto.idproduto} src={this.props.produto.imagem} alt= {this.props.produto.descricao} />
                <br/>
                <p className="nome-produto">{this.props.produto.descricao}</p>
                <hr/>
                <p className="antigo-preco">{this.props.produto.preco}</p>
                <h4 className="novo-preco text-danger">{this.props.produto.precoVenda}</h4>
            </div>
        )
    }
}

export default Produto;