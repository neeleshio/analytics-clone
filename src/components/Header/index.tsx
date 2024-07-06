import React from 'react';
import './styles.scss';
import { generateRandomData } from '@/utils/randomData';
import { utilityBtns } from '@/data/headerData';
import { RxAvatar } from 'react-icons/rx';
import { GiHamburgerMenu } from 'react-icons/gi';

function Header({ handleToggleSidebar }) {
    return (
        <header className="header-container">
            <div className="logo-container">
                <div className="hamburger-menu" onClick={handleToggleSidebar}>
                    <GiHamburgerMenu />
                </div>
                <span>Analytics Dashboard</span>
            </div>
            <div className="header-search">
                <input type="text" placeholder="search" />
            </div>
            <div className="profile-icon-container">
                <RxAvatar />
            </div>
        </header>
    );
}

export default Header;
