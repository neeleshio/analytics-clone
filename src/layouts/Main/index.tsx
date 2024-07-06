import React, { useState } from 'react';
import './styles.scss';
import ToolbarContainer from '@/containers/Toolbar';
import SidebarContainer from '@/containers/Sidebar';
import HeaderContainer from '@/containers/Header';
import OverviewContainer from '../../containers/Overview';

function MainLayout() {
    const [showSidebar, setShowSidebar] = useState(true);

    const handleToggleSidebar = () => {
        setShowSidebar((prev) => !prev);
    };
    return (
        <div className="main-layout-container">
            <HeaderContainer handleToggleSidebar={handleToggleSidebar} />
            <section className="sidebar-and-overview">
                <SidebarContainer showSidebar={showSidebar} />
                <main className="">
                    <ToolbarContainer />
                    <OverviewContainer />
                </main>
            </section>
        </div>
    );
}

export default MainLayout;
