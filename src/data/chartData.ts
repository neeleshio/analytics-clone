export const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
];

export const years = ['2024', '2023', '2022'];

export const generateRandomChartData = () => {
    const data = [];

    for (let year in years) {
        for (let month in months) {
            data.push({
                createdMonth: months[month],
                createdYear: years[year],
                users: Math.floor(Math.random() * 100),
                pageViews: Math.floor(Math.random() * 200),
                bounceRate: Math.floor(Math.random() * 10),
                sessions: Math.floor(Math.random() * 150)
            });
        }
    }

    return data;
};

export const chartTypes = [
    {
        name: 'Line Chart',
        value: 'line'
    },
    {
        name: 'Bar Chart',
        value: 'bar'
    }
];

export const dataTypes = [
    {
        name: 'Users',
        value: 'users'
    },
    {
        name: 'Sessions',
        value: 'sessions'
    },
    {
        name: 'Page Visits',
        value: 'pageViews'
    },
    {
        name: 'Bounce Rate',
        value: 'bounceRate'
    }
];

export const stats = [
    {
        id: 'users',
        name: 'Users',
        value: '0'
    },
    {
        id: 'sessions',
        name: 'Sessions',
        value: '0'
    },
    {
        id: 'pageVisits',
        name: 'Page Visits',
        value: '0'
    },
    {
        id: 'users',
        name: 'Bounce Rate',
        value: '0'
    }
];

export const barChartOptions = {
    chart: {
        title: 'Comparision of data points over the years',
        subtitle: 'Based on the last 3 years of collected data'
    },
    bars: 'horizontal'
};

export const lineChartOptions = {
    curveType: 'function',
    legend: { position: 'top' },
    is3D: true
};

export const chartColors = ['blue', 'red', 'green', 'orange', 'green'];
