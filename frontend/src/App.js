import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Inicial from './paginas/Inicial';
import Produtos from './paginas/Produtos';
import Contato from './paginas/Contato';
import Lojas from './paginas/Lojas';
import Pedido from './paginas/Pedido';
import ConfirmacaoPedido from './paginas/ConfirmaPedido';
import loading from './images/loading.png';

const Header = lazy(() => import('./components/Header'));
const Footer = lazy(() => import('./components/Footer'));

export default function App() {
  return (
    <Router>
      <div>
        <Suspense fallback={ <img src={loading} className="loadingImagem" alt="Carrregando" /> }>
          <Header />
        </Suspense>

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

        <Suspense fallback={ <img src={loading} className="loadingImagem" alt="Carrregando" /> }>
          <Footer />
        </Suspense>
        
      </div>
    </Router>
  );
}

