import React, {Component} from 'react';
import logo from '../images/logo.png';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }



    render() { 
        return ( 
            <section>
                <Navbar className="navbar-dark" bg="danger" expand="lg" >
                    <Navbar.Brand as={Link} to="/">
                        <Link to="/"><img  className="img-logo" src={logo} alt="Full Stack Eletro"/></Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto mr-3">
                            <Nav.Item>
                                <Nav.Link as={Link} href="/" to="/">Home</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={Link} href="/produtos" to="/Produtos">Produtos</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={Link} href="/contatos" to="/Lojas" >Lojas</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={Link} href="/pedidos" to="/Contato">Contato</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </section>
         );
    }
}
 
export default Header;