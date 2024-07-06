import Sidebar from '@/components/Sidebar';
import { sidebarData } from '@/data/sidebarData';
import React, { useRef } from 'react';

function SidebarContainer({ showSidebar }) {
    const menuRef = useRef(null);

    const handleToggleMenu = () => {
        console.log(menuRef);
    };

    return (
        <aside className="sidebar-container">
            <Sidebar
                data={sidebarData}
                handleToggleMenu={handleToggleMenu}
                ref={menuRef}
                showSidebar={showSidebar}
            />
        </aside>
    );
}

export default SidebarContainer;
