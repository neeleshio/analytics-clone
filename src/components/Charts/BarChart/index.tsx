import React from 'react';
import { Bar } from 'react-chartjs-2';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    Tooltip,
    PointElement,
    LineElement,
    BarElement
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Tooltip);

const options = {
    plugins: {
        title: {
            display: true,
            text: 'Bar Chart'
        }
    }
};

function BarChart({ data }) {
    return <Bar data={data} options={options} />;
}

export default BarChart;
