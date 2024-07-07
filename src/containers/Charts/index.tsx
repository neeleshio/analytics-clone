import React, { useEffect, useState } from 'react';
import FilterButton from '@/components/FilterButton';
import { generateRandomChartData, years } from '@/data/chartData';
import LineChartContainer from './LineChart';
import LineChartIndivisual from './LineChartIndivisual';
import BarChartContainer from './BarChart';
import PieChartContainer from './PieChart';

type randomDataTypes = {
    createdMonth: string;
    createdYear: string;
    users: number;
    pageViews: number;
    bounceRate: number;
    sessions: number;
}[];

function ChartsContainer({}) {
    const [data, setData] = useState<randomDataTypes>([]);
    const [activeFilter, setActiveFilter] = useState('2024');

    useEffect(() => {
        const randomData = generateRandomChartData();
        setData([...randomData]);
    }, []);

    const handleFilterByDate = (year: string) => {
        setActiveFilter(year);
    };

    return (
        <div className="charts-wrapper">
            <div className="line-chart-container">
                <div className="title">Overall Insights</div>
                <LineChartContainer data={data} />
            </div>

            <div className="header">
                <span className="title">Insights</span>
                <div className="filter-btns">
                    {years.map((year) => (
                        <FilterButton
                            data={year}
                            active={activeFilter}
                            handleFilterByDate={handleFilterByDate}
                            key={year}
                        />
                    ))}
                </div>
            </div>

            <div className="line-chart-indivisual-container">
                <LineChartIndivisual data={data} activeFilter={activeFilter} />
            </div>
            <div className="bar-chart-container">
                <BarChartContainer data={data} />
            </div>
            <div className="bar-chart-container">
                <PieChartContainer data={data} />
            </div>
        </div>
    );
}

export default ChartsContainer;
