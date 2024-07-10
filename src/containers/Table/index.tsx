import React, { useState, useCallback } from 'react';
import Row from './Row';

function Table() {
    const [data, setData] = useState([]);

    const handleAddRows = () => {
        const tempArr = [...data];

        const obj = {
            id: Date.now(),
            slNo: data.length,
            value: data.length + 1
        };

        tempArr.push(obj);

        setData(tempArr);
    };

    const handleDelete = useCallback((id) => {
        setData((prev) => prev.filter((el) => el['id'] !== id));
    }, []);

    return (
        <div className="table-wrapper">
            <table>
                <tr>
                    <th>Sl.no</th>
                    <th>Value</th>
                </tr>
                {data.map((el) => (
                    <Row {...el} handleDelete={handleDelete} key={el['id']} />
                ))}
            </table>

            <div>
                <button onClick={handleAddRows}>Add</button>
            </div>
        </div>
    );
}

export default Table;
