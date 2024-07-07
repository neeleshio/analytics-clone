import Charts from '@/components/Charts';
import React from 'react';

function PieChart({ data, options }) {
    return (
        <Charts
            data={data}
            options={{ ...options, legend: { position: 'bottom' } }}
            type="PieChart"
        />
    );
}

export default PieChart;
