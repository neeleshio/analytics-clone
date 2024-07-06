import React from 'react';

function DropDown({ onChange, data }) {
    return (
        <select name="charts" id="charts" onChange={(e) => onChange(e.target.value)}>
            {data.map((el) => (
                <option key={el['value']} value={el['value']}>
                    {el['name']}
                </option>
            ))}
        </select>
    );
}

export default DropDown;
