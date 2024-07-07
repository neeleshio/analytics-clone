import React, { useEffect, useState } from 'react';
import './styles.scss';
import { dataTypes, generateRandomChartData, stats } from '@/data/chartData';
import StatsCard from '@/components/StatsCard';
import ChartsContainer from '../Charts';

type randomDataTypes = {
    createdMonth: string;
    createdYear: string;
    users: number;
    pageViews: number;
    bounceRate: number;
    sessions: number;
}[];

function OverviewContainer() {
    const [data, setData] = useState<randomDataTypes>([]);
    const [statsData, setStatsData] = useState(stats);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const randomData = generateRandomChartData();
        setData([...randomData]);
    }, []);

    useEffect(() => {
        if (data.length > 0) {
            handleStatsData();
            setLoading(false);
        }
    }, [data]);

    const handleStatsData = () => {
        const copyStats = [...statsData];

        for (let element in dataTypes) {
            const total = data.reduce((acc, curr) => {
                const { value } = dataTypes[element];
                return acc + curr[value];
            }, 0);

            if (dataTypes[element]['value'] === 'bounceRate') {
                copyStats[element]['value'] = `${total / 100}%`;
            } else {
                copyStats[element]['value'] = total;
            }
        }

        setStatsData([...copyStats]);
    };

    return (
        <>
            {!loading ? (
                <div className="overview-wrapper">
                    <div className="stats-wrapper">
                        {statsData.map((el) => (
                            <StatsCard {...el} key={el.name} />
                        ))}
                    </div>

                    <ChartsContainer />
                </div>
            ) : (
                <div className="loading-container">Gathering your data.....</div>
            )}
        </>
    );
}

export default OverviewContainer;
