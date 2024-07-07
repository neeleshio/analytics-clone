import LineChart from '@/components/Charts/LineChart';
import { lineChartOptions } from '@/data/chartData';
import React, { useEffect, useState } from 'react';

function LineChartContainer({ data }) {
    const [lineChartData, setLineChartData] = useState([]);

    useEffect(() => {
        if (data.length > 0) {
            handleLineChartData();
        }
    }, [data]);

    const handleLineChartData = () => {
        const labels = ['Year', 'Users', 'Sessions', 'Page Visits', 'Bounce Rate'];
        const chartData = [];

        chartData.push(labels);

        for (let val of data) {
            const { createdMonth, createdYear, users, pageViews, bounceRate, sessions } = val;
            chartData.push([
                `${createdMonth} ${createdYear}`,
                users,
                pageViews,
                bounceRate,
                sessions
            ]);
        }

        setLineChartData([...chartData]);
    };

    return <LineChart data={lineChartData} options={lineChartOptions} />;
}

export default LineChartContainer;
