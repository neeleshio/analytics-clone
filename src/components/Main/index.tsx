import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    Tooltip,
    PointElement,
    LineElement
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip);

import { Line } from 'react-chartjs-2';
import Toolbar from '../Toolbar';

const data = {
    labels: ['a', 'b', 'c'],
    datasets: [
        {
            label: 'Price (USD)',
            data: ['100', '200', '300'],
            borderColor: 'orange',
            borderWidth: 2,
            pointRadius: 4
        }
    ]
};

function Main() {
    return (
        <div>
            <Toolbar />
            {/* <Line data={data} /> */}
        </div>
    );
}

export default Main;
