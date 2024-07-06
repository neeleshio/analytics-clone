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

export const generate = () => {
    const data = [];

    for (let year in years) {
        for (let month in months) {
            data.push({
                createdMonth: months[month],
                createdYear: years[year],
                users: Math.floor(Math.random() * 100),
                pageViews: Math.floor(Math.random() * 200),
                bounceRate: Math.floor(Math.random() * 50),
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
        name: 'Total Users',
        value: '0'
    },
    {
        id: 'sessions',

        name: 'Total Sessions',
        value: '0'
    },
    {
        id: 'pageVisits',

        name: 'Total Page Visits',
        value: '0'
    },
    {
        id: 'users',

        name: 'Bounce Rate',
        value: '0'
    }
];
