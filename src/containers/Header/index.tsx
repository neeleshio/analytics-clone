import React from 'react';
import Header from '@/components/Header';
import { toggleSidbar } from '@/store/slices/sidebarSlice';
import { useAppDispatch } from '@/store/useStore';

function HeaderContainer() {
    const dispatch = useAppDispatch();

    return <Header dispatch={dispatch} toggleSidbar={toggleSidbar} />;
}

export default HeaderContainer;
