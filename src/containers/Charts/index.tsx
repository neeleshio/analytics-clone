import React, { useEffect, useState } from 'react';
import FilterButton from '@/components/FilterButton';
import { generateRandomChartData, years } from '@/data/chartData';
import LineChartContainer from './LineChart';
import LineChartIndivisual from './LineChartIndivisual';
import BarChartContainer from './BarChart';
import PieChartContainer from './PieChart';
import './styles.scss';
import LineChartContainer2 from './LineChart2';
import { useDispatch } from 'react-redux';
import { fetchChartData } from '@/store/slices/dataSlice';

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
    const dispatch = useDispatch();

    useEffect(() => {
        const randomData = generateRandomChartData();
        setData([...randomData]);
        dispatch(fetchChartData());
    }, []);

    // filtering data by year
    const handleFilterByDate = (year: string) => {
        setActiveFilter(year);
    };

    return (
        <div className="charts-container">
            <div className="line-chart-container">
                <div className="title">Overall Insights</div>
                <LineChartContainer data={data} />
            </div>

            <div className="filter-btns-container">
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

            <div className="line-chart-container-2">
                <LineChartContainer2 />
            </div>
        </div>
    );
}

export default ChartsContainer;
