import BarChart from '@/components/Charts/BarChart';
import { barChartOptions, dataTypes, years } from '@/data/chartData';
import React, { useEffect, useState } from 'react';

function BarChartContainer({ data }) {
    const [barChartData, setBarChartData] = useState([]);

    useEffect(() => {
        if (data.length > 0) {
            handleBarChartData();
        }
    }, [data]);

    const handleBarChartData = () => {
        const chartData = [];
        const labels = ['', '2022 data', '2023 data', '2024 data'];

        chartData.push(labels);

        for (let type of dataTypes) {
            const arr = [];
            arr.push(type['name']);

            for (let year of years) {
                const filtered = data.filter((el) => el['createdYear'] === year);
                const total = filtered.reduce((acc, curr) => {
                    const { value } = type;
                    return acc + curr[value];
                }, 0);

                arr.push(total);
            }

            chartData.push(arr);
        }

        setBarChartData([...chartData]);
    };
    return <BarChart data={barChartData} options={barChartOptions} />;
}

export default BarChartContainer;
