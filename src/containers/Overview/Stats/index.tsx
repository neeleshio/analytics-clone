import React from 'react';

function Stats({ name, value }) {
    return (
        <div className="stats-container">
            <div className="circle"></div>
            <div className="stats">
                <span className="name">{name}</span>
                <span className="value">{value}</span>
            </div>
        </div>
    );
}

export default Stats;
