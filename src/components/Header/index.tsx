import React, { FC } from 'react';
import './styles.scss';
import { RxAvatar } from 'react-icons/rx';
import { GiHamburgerMenu } from 'react-icons/gi';

type HeaderProps = {
    dispatch: FC;
    toggleSidbar: () => {};
};

function Header({ dispatch, toggleSidbar }: HeaderProps) {
    return (
        <header className="header-container">
            <div className="logo-container">
                <div className="hamburger-menu" onClick={() => dispatch(toggleSidbar())}>
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