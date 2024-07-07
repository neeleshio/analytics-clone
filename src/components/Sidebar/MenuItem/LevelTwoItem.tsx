import React from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';
import './styles.scss';

function LevelTwoItem({ name }: { name: string }) {
    return (
        <div className="level-two-item">
            <IoMdArrowDropdown />
            <div>{name}</div>
        </div>
    );
}

export default LevelTwoItem;
