import React, { useEffect, useState } from 'react';
import LineChart from '@/components/Charts/LineChart';
import './styles.scss';
import { chartTypes, dataTypes, generate, stats } from '@/data/chartData';
import BarChart from '@/components/Charts/BarChart';
import Stats from './Stats';
import DropDown from '@/components/Dropdown';
import PieChart from '@/components/Charts/PieChart';

const initialChartData = {
    labels: [],
    datasets: [
        {
            label: 'Price (USD)',
            data: [],
            borderColor: 'orange',
            borderWidth: 2,
            pointRadius: 4
        }
    ]
};

function OverviewContainer() {
    const [data, setData] = useState([]);
    const [chartData, setChartData] = useState(initialChartData);
    const [statsData, setStatsData] = useState(stats);
    const [chartType, setChartType] = useState('line');
    const [dataType, setDataType] = useState('users');
    const [pieChartData, setPieChartData] = useState(initialChartData);

    useEffect(() => {
        const randomData = generate();
        setData([...randomData]);
    }, []);

    useEffect(() => {
        if (data.length > 0) {
            const resp = handleChartData();
            setChartData({
                ...resp
            });
        }
    }, [dataType, data]);

    const handleChartData = () => {
        const labels = [];
        const numbers: [] = [];

        for (let value in data) {
            const xAxis = `${data[value]['createdMonth']} ${data[value]['createdYear']} `;
            const yAxis = data[value][dataType];
            labels.push(xAxis);
            numbers.push(yAxis);
        }

        handleStatsData();

        return {
            labels: labels,
            datasets: [
                {
                    label: '',
                    data: numbers,
                    borderColor: 'orange',
                    borderWidth: 2,
                    pointRadius: 4
                }
            ]
        };
    };

    const handleStatsData = () => {
        const copyStats = [...statsData];

        for (let element in dataTypes) {
            const total = data.reduce((acc, curr) => {
                return acc + curr[dataTypes[element]['value']];
            }, 0);

            copyStats[element]['value'] = total;
        }

        setStatsData([...copyStats]);
    };

    useEffect(() => {
        const pieData = {
            labels: statsData.map((el) => el['name']),
            datasets: [
                {
                    label: '',
                    data: statsData.map((el) => el['value']),
                    backgroundColor: ['blue', 'green', 'red', 'orange']
                }
            ]
        };

        setPieChartData({ ...pieData });
    }, [statsData]);

    return (
        <div className="overview-wrapper">
            <div className="stats-wrapper">
                {statsData.map((el) => (
                    <Stats {...el} />
                ))}
            </div>

            <div className="dropdown-container">
                <DropDown data={chartTypes} onChange={setChartType} />
                <DropDown data={dataTypes} onChange={setDataType} />
            </div>

            <div className="charts-wrapper">
                <div className="line-chart-container">
                    {chartType === 'bar' ? (
                        <BarChart data={chartData} />
                    ) : (
                        <LineChart data={chartData} />
                    )}
                </div>
                <div className="pie-chart">
                    <PieChart data={pieChartData} />
                </div>
            </div>
        </div>
    );
}

export default OverviewContainer;
