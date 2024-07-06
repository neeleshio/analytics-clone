import React, { forwardRef } from 'react';
import './styles.scss';
import MenuItem from './MenuItem';
import SubMenuItem from './SubMenuItem';
import { commonMenuLinks } from '@/data/sidebarData';

function Sidebar({ data, handleToggleMenu, menuRef, showSidebar }) {
    const renderSubMenu = (submenuData) => {
        return (
            <div className="submenu-conatiner">
                {submenuData.map((el, idx) => (
                    <>
                        <SubMenuItem data={el} key={idx} expandable={true} />

                        <div className="deep-sub-menu-container">
                            {commonMenuLinks.map((el, idx) => (
                                <SubMenuItem data={el} key={idx} expandable={false} />
                            ))}
                        </div>
                    </>
                ))}
            </div>
        );
    };

    return (
        <div className={`sidebar ${showSidebar ? 'show' : 'hide'}`}>
            {data.map((element) => (
                <MenuItem
                    data={element}
                    key={element['id']}
                    ref={menuRef}
                    handleToggleMenu={handleToggleMenu}>
                    {element?.['sublinks'] && renderSubMenu(element?.['sublinks'])}
                </MenuItem>
            ))}
        </div>
    );
}

export default forwardRef(Sidebar);
