import React, { useState } from 'react';
import NavLinks from './NavLinks';

import MainHeader from './MainHeader'
import './MainNavigation.css'
import SideDrawer from './SideDrawer';
import Backdrop from '../../../shared/Backdrop';
import { Link } from 'react-scroll';

export default function MainNavigation() {
    const [showSideDrawer, setShowSideDrawer] = useState(false)

    const showDrawerHandler = () => {
        setShowSideDrawer((prevState) => !prevState)
    }

    return (
        <>
            {showSideDrawer && <Backdrop onClick={showDrawerHandler} />}

            <SideDrawer show={showSideDrawer} onClick={showDrawerHandler}>
                <nav className='drawer-header-nav'>
                    <NavLinks onClick={showDrawerHandler} />
                </nav>
            </SideDrawer>

            <MainHeader>
                <button className='hamburger-button-navbar' onClick={showDrawerHandler}>
                    <span />
                    <span />
                    <span />
                </button>
                <h1 className='navigate-to-home'>
                    <Link to="home"
                    smooth={true}
                    spy={true}
                    hashSpy={true}
                    duration={500}
                    >Home</Link>
                </h1>
                <nav className='header-navbar'>
                    <NavLinks />
                </nav>
            </MainHeader>
        </>

    )
}
