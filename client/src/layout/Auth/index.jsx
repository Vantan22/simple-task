import React from 'react'
import PropTypes from 'prop-types';
import Logo from '../../assets/image/logo.svg'
import ImgLogin from '../../assets/image/ImgLogin.svg'
import DemoDashboard from '../../assets/image/DemoDashboard.jpg'
import './index.scss'
const Auth = ({children}) => {
  return (
    <div className='containerLogin'>
        <div className='containerLogin-left'>
            <img src={Logo} className="containerLogin-left-logo" alt='Logo' />
            <div className="containerLogin-left-form">
                {children}
            </div>
        </div>
        <div className='containerLogin-right'>
            <img className='containerLogin-right-backGround' src={ImgLogin} alt="ImgLogin" />
            <img className='containerLogin-right-demoDashboard' src={DemoDashboard} alt="DemoDashboard" />
        </div>
    </div>
  )
};

Auth.propTypes = {
    children: PropTypes.node.isRequired,
  };

export default Auth