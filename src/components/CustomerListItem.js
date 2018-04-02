import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CustomerListItem = ( {name, editAction, delAction, urlPath, dni} ) => {
    return (
        <tr>
            <th scope="row"><Link to={`${urlPath}${dni}`}>{name}</Link></th>
            <td><Link to={`${urlPath}${dni}/edit`}>{editAction}</Link></td>
            <td><Link to={`${urlPath}${dni}/del`}>{delAction}</Link></td>
        </tr>
    )
};

CustomerListItem.propTypes = {
    dni: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    editAction: PropTypes.string.isRequired,
    delAction: PropTypes.string.isRequired,
    urlPath: PropTypes.string.isRequired,
};

export default CustomerListItem;