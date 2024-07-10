import React, { memo } from 'react';

function Row({ id, slNo, value, handleDelete }) {
    console.log('rendered');

    return (
        <tr key={id}>
            <td>{slNo}</td>
            <td>{value}</td>

            <button onClick={() => handleDelete(id)}>Delete</button>
        </tr>
    );
}

export default memo(Row);
