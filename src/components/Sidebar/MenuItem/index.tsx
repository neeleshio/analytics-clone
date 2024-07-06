import React, { forwardRef } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import './styles.scss';

function MenuItem({ data, children, handleToggleMenu }, menuRef) {
    return (
        <div className="menuitem-container" ref={menuRef} onClick={handleToggleMenu}>
            <div className="menuitem-header">
                <div>{data?.['name']}</div>
                {data?.['sublinks'].length > 0 ? <IoIosArrowDown /> : null}
            </div>

            {children}
        </div>
    );
}

export default forwardRef(MenuItem);
