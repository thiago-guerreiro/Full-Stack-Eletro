import React, {Component} from 'react';

class Imagem extends Component {
    constructor(props) {
        super(props);
        this.state={src: process.env.PUBLIC_URL + '/' + props.src};
    }
    render() {
        return(
            <img width="175" src={this.state.src} alt={this.state.src} />
        )
    }
}

export default Imagem;