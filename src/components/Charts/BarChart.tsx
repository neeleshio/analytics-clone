import Charts from '@/components/Charts';
import React from 'react';

function BarChart({ data, options }) {
    return <Charts data={data} options={options} type="Bar" />;
}

export default BarChart;
