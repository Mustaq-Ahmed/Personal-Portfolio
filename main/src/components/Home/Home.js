import React from 'react';

// import { animateScroll as scroll } from 'react-scroll';

import './Home.css'
import MainNavigation from './Navbar/MainNavigation';
import Profile from './Profile/Profile';

export default function Home() {
    return (
        <div className='home-container'>
            <MainNavigation />
            <Profile />
        </div>
    )
}
