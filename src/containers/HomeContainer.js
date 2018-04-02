import React, { Component } from 'react';
import AppFrame from '../components/AppFrame';
import CustomersActions from '../components/CustomersActions';

class HomeContainer extends Component {

    handleOnClick = () => {
        console.log("hola");
        this.props.history.push('/customers');
    }

    render() {
        return (
            <div>
                <AppFrame 
                    header="Home" 
                    body={
                        <div>
                            esta es la pantalla inicial
                            <CustomersActions>
                                <button onClick={this.handleOnClick} >
                                    Listado de Clientes
                                </button>
                            </CustomersActions>
                        </div>
                    }
                >
                </AppFrame>
            </div>
        );
    }
}

export default HomeContainer;