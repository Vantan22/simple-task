import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import '../Home/index.scss'
import ListNavigation from '../../components/ListNavigation/ListNavigation';
import { listNavigation, lastestProjects } from '../../contains/list-navigation';

import Logo from '../../assets/image/logo.svg'
import IconDown from "../../assets/image/IconArrowDown.svg"
import IconAdd from "../../assets/image/IconAdd.svg"
import NavigationHeader from '../../components/NavigationHeader/NavigationHeader';
const Home = ({ children }) => {


    return (
        <div className="home">
            <div className="home-menu">
                <div className="home-menu-logo">
                    <img className='home-menu-logo-icon' src={Logo} alt='Logo' />
                </div>
                <div className="home-menu-list">
                    <ListNavigation nameList='Navigation' icon={IconDown} list={listNavigation} />
                    <ListNavigation nameList='Latest Projects' icon={IconAdd} list={lastestProjects} />
                </div>
            </div>
            <div className="home-content">
                <NavigationHeader />
                <div className="home-content-content">{children}</div>
            </div>

        </div>
    )
};

Home.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Home