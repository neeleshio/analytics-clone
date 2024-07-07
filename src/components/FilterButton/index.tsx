import React from 'react';
import './styles.scss';

function FilterButton({ data, handleFilterByDate, active }) {
    return (
        <button
            className={active === data ? 'active' : ''}
            onClick={() => handleFilterByDate(data)}>
            {data}
        </button>
    );
}

export default FilterButton;
