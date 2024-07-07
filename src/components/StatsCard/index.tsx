import React from 'react';
import './styles.scss';

function StatsCard({ name, value }: { name: string; value: string }) {
    return (
        <div className="stats-card">
            <div className="wrapper">
                <span className="name">{name}</span>
                <span className="value">{value}</span>
            </div>
        </div>
    );
}

export default StatsCard;
