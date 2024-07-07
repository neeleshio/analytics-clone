import React, { FC, ReactNode } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import './styles.scss';
import { SidebarDataTypes } from '@/data/sidebarData';

type LevelOneItemProps = {
    name: string;
    sublinks: SidebarDataTypes;
    children: ReactNode;
    handleTitle: (name: string) => {};
    dispatch: FC;
};

function LevelOneItem({ name, sublinks, children, dispatch, handleTitle }: LevelOneItemProps) {
    return (
        <div className="level-one-item" onClick={() => dispatch(handleTitle(name))}>
            <div className="header">
                <div>{name}</div>
                {sublinks?.length > 0 ? <IoIosArrowDown /> : null}
            </div>

            {children}
        </div>
    );
}

export default LevelOneItem;
