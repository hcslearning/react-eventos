import React from 'react';
import ReactDOM from 'react-dom';

class ToggleButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {activo: true};
    }    

    // usar esta sintaxis para evitar tener que usar bind(this)
    manejaEvento = () => {
        this.setState({activo: !this.state.activo });
    }

    render() {
        return(
        <button id={this.props.id} onClick={this.manejaEvento}>{this.state.activo?'ON':'OFF'}</button>
        );
    }

}


ReactDOM.render(
    <div>
        <h1>Ejemplo de Eventos y Estados</h1>
        <ToggleButton id="miBoton" />
    </div>
    ,document.getElementById('root')
);