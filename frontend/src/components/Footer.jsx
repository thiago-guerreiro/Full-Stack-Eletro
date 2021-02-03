import React, {Component} from 'react';
import formapagamento from '../images/formas-pagamento.png';


class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="container">
		        <footer className="rodape">
		            <p className="text-danger"><b>Formas de pagamento</b></p>
		            <img width="300px" className="formas-de-pagamento" src={formapagamento} alt="Formas de pagamento aceitas" />
		            <p className="text-danger">&copy; Recode Pro</p>
		        </footer>
		    </div>
         );
    }
}
 
export default Footer;