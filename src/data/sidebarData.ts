export type SidebarDataTypes = {
    id: string;
    name: string;
    link: string;
    sublinks?: {
        id: string;
        name: string;
        link: string;
    }[];
}[];

export const sidebarData: SidebarDataTypes = [
    {
        id: 'reports-snapshot',
        name: 'Reports Snapshot',
        link: 'reports-snapshot',
        sublinks: []
    },
    {
        id: 'real-time',
        name: 'Real-time',
        link: 'real-time',
        sublinks: []
    },
    {
        id: 'life-cycle',
        name: 'Life cycle',
        link: 'life-cycle',
        sublinks: [
            {
                id: 'acquisition',
                name: 'Acquisition',
                link: 'acquisition'
            },
            {
                id: 'engagement',
                name: 'Engagement',
                link: 'engagement'
            },
            {
                id: 'monetisation',
                name: 'Monetisation',
                link: 'monetisation'
            },
            {
                id: 'retention',
                name: 'Retention',
                link: 'retention'
            }
        ]
    },
    {
        id: 'user',
        name: 'User',
        link: 'user',
        sublinks: [
            {
                id: 'acquisition',
                name: 'Acquisition',
                link: 'acquisition'
            },
            {
                id: 'engagement',
                name: 'Engagement',
                link: 'engagement'
            },
            {
                id: 'monetisation',
                name: 'Monetisation',
                link: 'monetisation'
            },
            {
                id: 'retention',
                name: 'Retention',
                link: 'retention'
            }
        ]
    }
];
