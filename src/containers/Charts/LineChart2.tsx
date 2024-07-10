import LineChart from '@/components/Charts/LineChart';
import { lineChartOptions } from '@/data/chartData';
import { dataSelector, fetchChartData } from '@/store/slices/dataSlice';
import { useAppDispatch, useAppSelector } from '@/store/useStore';
import React, { useEffect, useState } from 'react';

function LineChartContainer2() {
    const [lineChartData, setLineChartData] = useState([]);
    const { chartData } = useAppSelector(dataSelector);

    useEffect(() => {
        if (chartData.length > 0) {
            handleLineChartData();
        }
    }, [chartData]);

    const handleLineChartData = () => {
        const labels = ['Year', 'Rate'];
        const data = [];

        data.push(labels);

        for (let val of chartData) {
            const { date, rate } = val;
            const actualDate = new Date(date);
            data.push([actualDate, rate]);
        }

        setLineChartData([...data]);
    };

    return <LineChart data={lineChartData} options={lineChartOptions} />;
}

export default LineChartContainer2;
