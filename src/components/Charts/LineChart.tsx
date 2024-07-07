import Charts from '@/components/Charts';
import React from 'react';

function LineChart({ data, options }) {
    return <Charts data={data} options={options} type="LineChart" />;
}

export default LineChart;
