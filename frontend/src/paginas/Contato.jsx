import React, { Component } from 'react';
import { Container, ListGroup, Col, Row } from 'react-bootstrap';
import { Table } from 'react-bootstrap';
import email from '../images/email.png';
import whatsapp from '../images/whatsapp.png';

class Contato extends Component {
    constructor(props) {
        super(props)
        this.state = {mensagens: []}
    }

    componentDidMount() {
        this.loadAsyncData()
    }

    async loadAsyncData() {
        const resposta = await fetch("/api/getmensagens");
        const json = await resposta.json();
        this.setState({ mensagens: json});
    }
    
    async sendMessage(evento) {
        evento.preventDefault()
        const formMensagem = new FormData(evento.target);
        console.log(evento)
        const resposta = await fetch('/api/mensagem', {
            body: JSON.stringify(Object.fromEntries(formMensagem)), 
            method: 'POST',
            headers: new Headers({'content-type': 'application/json'})
        })
        console.log(await resposta.text())
        if (resposta.status === 200) {
            var msg = {nome_cliente: formMensagem.get('nome'), mensagem: formMensagem.get('mensagem')}
            this.setState({mensagens: this.state.mensagens.concat(msg)})
        }
    }

    render() {
        return (
        <div>
            <div className="texto-padrao container ml-sm-0 ml-md-5 mt-5">
                <h4 class="my-4 text-danger">Contato</h4>

                <Table>
                    <tbody>
                        <tr>
                        <td><img className="img-contato" src={email} alt="Email"/></td>
                        <td>contato@fullstackeletro.com</td>
                        <td><img className="img-contato" src={whatsapp} alt="whatsapp"/></td>
                        <td>(11) 99999-9999</td>
                        </tr>
                    </tbody>
                </Table>
                
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <div className="form-group">
                                <form onSubmit={(evento)=> this.sendMessage(evento)}>
                                    <label htmlFor="nome" >Nome</label> <br/>
                                    <input className="form-control" type="text" name="nome" id="nome" placeholder="Seu nome aqui"/> <br/>
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name="email" className="form-control" id="email" aria-describedby="email" placeholder="Digite seu email"/> <br/>
                                    <label htmlFor="mensagem">Mensagem</label>
                                    <textarea className="form-control" name="mensagem" id="mensagem" rows="4" placeholder="Sua mensagem..."></textarea>
                                    <br/>
                                    <button type="submit" className="add-btn mb-5 btn-danger">Enviar</button> <br/>
                                </form>
                            </div>
                        </div>
                    </div>
            </div>

            <Container fluid className="mb-5 mx-5">
                <Row>
                    <Col xs={6}>
                    <h4 class="my-4 text-danger">Comentários</h4> <br/>
                        <ListGroup>
                            {this.state.mensagens.map(mensagem => (
                                <ListGroup.Item key={mensagem.mensagem}>
                                <h5>{mensagem.nome_cliente}</h5>
                                <p>{mensagem.mensagem}</p>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        </div>
    )

    }
    
}

export default Contato;