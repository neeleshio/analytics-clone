import React from 'react';
import './styles.scss';

function Toolbar({ title }: { title: string }) {
    return (
        <div className="toolbar-container">
            <h1>{title}</h1>
        </div>
    );
}

export default Toolbar;
