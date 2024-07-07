import Toolbar from '@/components/Toolbar';
import { sidebarSelector } from '@/store/slices/sidebarSlice';
import { useAppSelector } from '@/store/useStore';
import React from 'react';

function ToolbarContainer() {
    const { title } = useAppSelector(sidebarSelector);

    return <Toolbar title={title} />;
}

export default ToolbarContainer;
