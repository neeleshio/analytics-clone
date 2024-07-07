import React, { useEffect, useLayoutEffect, useState } from 'react';
import './styles.scss';
import ToolbarContainer from '@/containers/Toolbar';
import SidebarContainer from '@/containers/Sidebar';
import HeaderContainer from '@/containers/Header';
import OverviewContainer from '../../containers/Overview';
import { useAppDispatch, useAppSelector } from '@/store/useStore';
import { sidebarSelector, toggleSidbar } from '@/store/slices/sidebarSlice';

function MainLayout() {
    const { open } = useAppSelector(sidebarSelector);
    const [screenWidth, setScreenWidth] = useState(0);
    const dispatch = useAppDispatch();

    useLayoutEffect(() => {
        if (screenWidth === 0) setScreenWidth(window.screen.width);

        function updateSize() {
            setScreenWidth(window.screen.width);
        }

        window.addEventListener('resize', () => updateSize());

        return () => window.removeEventListener('resize', updateSize);
    }, []);

    useEffect(() => {
        if (screenWidth > 0 && screenWidth < 950) {
            dispatch(toggleSidbar(false));
        } else if (screenWidth > 949) {
            dispatch(toggleSidbar(true));
        }
    }, [screenWidth]);

    return (
        <div className="main-layout-container">
            <HeaderContainer />
            <section className="sidebar-and-overview">
                <SidebarContainer />
                <main style={{ width: !open ? '100%' : `calc(100% - 256px)` }}>
                    <ToolbarContainer />
                    <OverviewContainer />
                </main>
            </section>
        </div>
    );
}

export default MainLayout;
