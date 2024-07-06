import Header from '@/components/Header';
import React from 'react';

function HeaderContainer({ handleToggleSidebar }) {
    return <Header handleToggleSidebar={handleToggleSidebar} />;
}

export default HeaderContainer;
