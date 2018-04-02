import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCustomers } from '../actions/fetchCustomers';
import AppFrame from '../components/AppFrame';
import CustomerList from '../components/CustomerList';
import CustomersActions from '../components/CustomersActions';

const customers = [
    {
        'dni': '11111111111',
        'name': 'Alejandro Sanchez',
        'age': 21
    },
    {
        'dni': '22222222222',
        'name': 'Sharon Esteves',
        'age': 20
    },
    {
        'dni': '333333333333',
        'name': 'Maria Eden',
        'age': 55
    }
];

class CustomersContainer extends Component {


    componentDidMount() {
        this.props.fetchCustomers();
    }
    

    handleAddNew = () => {
        this.props.history.push('/customers/new');
    }

    renderBody = customers => (
        <div>
            <CustomerList 
                customers={customers} 
                urlPath={'customer/'} 
            ></CustomerList>

            <CustomersActions>
                <button onClick={this.handleAddNew} >Nuevo Cliente</button>
            </CustomersActions>
        </div>
    );

    render() {
        return (
            <div>
                <AppFrame
                    header={'Listado de Clientes'}
                    body={
                        this.renderBody(customers)
                    }
                >
                </AppFrame>
            </div>
        );
    }
}

CustomersContainer.propTypes = {
    fetchCustomers: PropTypes.func.isRequired,
};

export default withRouter(connect(null, { fetchCustomers })(CustomersContainer));