import React from 'react';
import Sidebar from '@/components/Sidebar';
import { sidebarData } from '@/data/sidebarData';
import { sidebarSelector } from '@/store/slices/sidebarSlice';
import { useAppDispatch, useAppSelector } from '@/store/useStore';
import { handleTitle } from '@/store/slices/sidebarSlice';

function SidebarContainer() {
    const { open } = useAppSelector(sidebarSelector);
    const dispatch = useAppDispatch();

    return (
        <aside className="sidebar-container">
            <Sidebar
                data={sidebarData}
                showSidebar={open}
                dispatch={dispatch}
                handleTitle={handleTitle}
            />
        </aside>
    );
}

export default SidebarContainer;
