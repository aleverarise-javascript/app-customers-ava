import React from 'react';
import PropTypes from 'prop-types';
import CustomerListItem from './CustomerListItem';
import { Table } from 'reactstrap';

const CustomerList = ( {customers, urlPath} ) => {
    return (
        <div>
            <div className="customer-list">
                <Table responsive>
                    <thead>
                        <tr>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            customers.map( c => 
                                <CustomerListItem 
                                    key={c.dni}
                                    dni={c.dni}
                                    name={c.name}
                                    editAction={'Editar'}
                                    delAction={'Eliminar'}
                                    urlPath={urlPath}
                                />
                            )
                        }
                    </tbody>
                </Table>
               
            </div>
        </div>
    );
};

CustomerList.propTypes = {
    customers: PropTypes.array.isRequired,
    urlPath: PropTypes.string.isRequired,
};

export default CustomerList;