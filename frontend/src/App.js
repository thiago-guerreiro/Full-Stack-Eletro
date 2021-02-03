import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Inicial from './paginas/Inicial';
import Produtos from './paginas/Produtos';
import Contato from './paginas/Contato';
import Lojas from './paginas/Lojas';
import Pedido from './paginas/Pedido';
import ConfirmacaoPedido from './paginas/ConfirmaPedido';

export default function App() {
  return (
    <Router>
      <div>
        <Header />

        <Switch>
          <Route path="/Produtos">
            <Produtos />
          </Route>
          <Route path="/Contato">
            <Contato />
          </Route>
          <Route path="/Lojas">
            <Lojas />
          </Route>
          <Route path="/Pedido/:idproduto">
            <Pedido />
          </Route>
          <Route path="/paginaConfirmacao">
            <ConfirmacaoPedido />
          </Route>
          <Route path="/">
            <Inicial />
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

