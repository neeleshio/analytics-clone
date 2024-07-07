import React from 'react';
import { Chart } from 'react-google-charts';

function Charts({ type, data, options }) {
    return (
        <Chart chartType={type || 'Bar'} data={data} width="99%" height="300px" options={options} />
    );
}

export default Charts;
