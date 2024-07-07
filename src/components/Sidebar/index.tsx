import React, { FC } from 'react';
import './styles.scss';
import LevelOneItem from './MenuItem/LevelOneItem';
import { SidebarDataTypes } from '@/data/sidebarData';
import LevelTwoItem from './MenuItem/LevelTwoItem';
import { handleTitle } from '@/store/slices/sidebarSlice';

type SidebarProps = {
    data: SidebarDataTypes;
    showSidebar: boolean;
    dispatch: FC;
    handleTitle: () => void;
};

function Sidebar({ data, showSidebar, dispatch, handleTitle }: SidebarProps) {
    const renderSubMenu = (sublinks: SidebarDataTypes) => {
        return (
            <div className="submenu-conatiner">
                {sublinks.map(({ id, name }) => (
                    <LevelTwoItem name={name} key={id} />
                ))}
            </div>
        );
    };

    return (
        <div className={`sidebar ${showSidebar ? 'show' : 'hide'}`}>
            {data.map(({ id, sublinks, name }) => (
                <LevelOneItem
                    sublinks={sublinks}
                    name={name}
                    key={id}
                    dispatch={dispatch}
                    handleTitle={handleTitle}>
                    {sublinks && renderSubMenu(sublinks)}
                </LevelOneItem>
            ))}
        </div>
    );
}

export default Sidebar;
