import LineChart from '@/components/Charts/LineChart';
import { chartColors, dataTypes, lineChartOptions } from '@/data/chartData';
import React, { useEffect, useState } from 'react';

function LineChartIndivisual({ data, activeFilter }) {
    const [lineChartIndivisualData, setLineChartIndivisualData] = useState([]);

    useEffect(() => {
        if (data.length > 0) {
            handleLineChartIndivisualData(activeFilter);
        }
    }, [data, activeFilter]);

    const handleLineChartIndivisualData = (year: string) => {
        const chartData = {};

        const filtered = data.filter((el) => el['createdYear'] === year);

        for (let type of dataTypes) {
            const arr = [];
            const label = ['Month', type['name']];
            arr.push(label);

            filtered.map((el) => {
                arr.push([el['createdMonth'], el[type['value']]]);
            });

            chartData[type['value']] = arr;
        }

        setLineChartIndivisualData({ ...chartData });
    };

    return (
        <>
            {Object.values(lineChartIndivisualData).map((lineChartIndivisual, idx) => (
                <div key={idx} className="wrapper">
                    <LineChart
                        data={lineChartIndivisual}
                        options={{ ...lineChartOptions, colors: [chartColors[idx]] }}
                    />
                </div>
            ))}
        </>
    );
}

export default LineChartIndivisual;
