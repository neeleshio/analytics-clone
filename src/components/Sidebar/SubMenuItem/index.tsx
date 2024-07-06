import React from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';
import './styles.scss';

function SubMenuItem({ data, expandable }) {
    return (
        <div className="submenuitem-container">
            {expandable && <IoMdArrowDropdown />}
            <div>{data?.['name']}</div>
        </div>
    );
}

export default SubMenuItem;
